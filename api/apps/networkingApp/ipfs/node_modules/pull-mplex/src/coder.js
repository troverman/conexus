'use strict'

const varint = require('varint')
const through = require('pull-through')
const debug = require('debug')

const log = debug('pull-plex:coder')
log.err = debug('pull-plex:coder:err')

const PULL_LENGTH = 10 * 1024
const empty = Buffer.alloc(0)

/**
 * Creates a Through PullStream that will varint encode all
 * messages passed through it.
 *
 * @returns {PullStream} A through stream that varint encodes all messages
 */
exports.encode = () => {
  let pool = Buffer.allocUnsafe(PULL_LENGTH)
  let used = 0

  return through(function (msg) {
    const oldUsed = used
    varint.encode(msg[0] << 3 | msg[1], pool, used)
    used += varint.encode.bytes
    varint.encode(msg[2] ? msg[2].length : 0, pool, used)
    used += varint.encode.bytes
    this.queue(pool.slice(oldUsed, used)) // send header

    if (PULL_LENGTH - used < 100) {
      pool = Buffer.allocUnsafe(PULL_LENGTH)
      used = 0
    }

    this.queue(msg[2] ? msg[2] : empty)
  })
}

/**
 * @typedef {number} States
 */

/**
 * @enum {States}
 */
const States = {
  PARSING: 0,
  READING: 1
}

/**
 * Creates a Through PullStream that will varint decodes all
 * messages passed through it.
 *
 * @returns {PullStream} A through stream that varint decodes all messages
 */
exports.decode = () => {
  let state = States.PARSING

  const tryDecode = (msg) => {
    let offset = 0
    let length = 0
    try {
      let h = varint.decode(msg)
      offset += varint.decode.bytes
      length = varint.decode(msg, offset)
      offset += varint.decode.bytes
      return [h, offset, length]
    } catch (err) {
      log.err(err) // ignore if data is empty
    }
    return []
  }

  const decode = (msg) => {
    const [h, offset, length] = tryDecode(msg)
    // If there is a header, process it
    if (h !== void 0) {
      const message = {
        id: h >> 3,
        type: h & 7,
        data: []
      }

      state = States.READING
      return [msg.slice(offset), message, length]
    }

    // There was no header, return the message
    return [msg]
  }

  const read = (msg, data, length) => {
    // If we're done reading, start parsing the message
    if (length <= 0) {
      state = States.PARSING
      return [0, msg, data]
    }

    // Read more data
    let left = length - msg.length
    if (left < 0) { left = 0 }
    const size = length - left
    if (msg.length > 0) {
      const buff = Buffer.isBuffer(msg) ? msg : Buffer.from(msg)
      data.push(buff.slice(0, size))
    }

    // If we finished reading, start parsing
    if (left <= 0) { state = States.PARSING }
    return [left, msg.slice(size), data]
  }

  let length = 0
  let message = null
  let accumulating = false
  let array = []
  return through(function (msg) {
    var ps = this
    function more () {
      if (msg && msg.length) {
        // Reading is done for this message, start processing it
        if (States.PARSING === state) {
          if (accumulating) {
            array.push(msg)
            msg = Buffer.concat(array)
          }

          [msg, message, length] = decode(msg)
          if (!message) {
            if (!accumulating) {
              array.push(msg)
            }
            accumulating = true
            return
          }

          array = []
          accumulating = false
        }

        // We're not done reading the message, keep reading it
        if (States.READING === state) {
          [length, msg, message.data] = read(msg, message.data, length)

          // If we read the whole message, add it to the queue
          if (length <= 0 && States.PARSING === state) {
            message.data = Buffer.concat(message.data)
            ps.queue(message)
            message = null
            length = 0
          }
        }

        more()
      }
    }
    more()
  })
}
