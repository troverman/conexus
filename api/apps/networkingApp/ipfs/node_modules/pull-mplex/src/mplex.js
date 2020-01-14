'use strict'

const pull = require('pull-stream')
const pushable = require('pull-pushable')
const through = require('pull-through')
const looper = require('looper')
const nextTick = require('async/nextTick')
const EE = require('events')
const debug = require('debug')

const { emitError, emitStream } = require('./util')
const { Types, MAX_MSG_SIZE } = require('./consts')
const Channel = require('./channel')
const coder = require('./coder')

const log = debug('pull-plex')
log.err = debug('pull-plex:err')

/**
 * @typedef {Object} Message
 * @property {number} id
 * @property {MessageType} type
 * @property {Buffer} data
 */

/**
 * @fires Mplex#close Emitted when Mplex closes
 * @fires Mplex#error Emitted when an error occurs
 * @fires Mplex#stream Emitted when a new stream is opened
 */
class Mplex extends EE {
  /**
   * @constructor
   * @param {Object} opts
   * @param {boolean} opts.initiator Is this starting the stream. Default: `true`
   * @param {function(Channel, number)} opts.onChan A handler for new streams. Can be used instead of `.on('stream')`
   * @param {number} opts.maxChannels Maximum number of channels to have open. Default: `10000`
   * @param {number} opts.maxMsgSize Maximum size messages are allowed to be. Default: `1 << 20` (1MB)
   * @param {boolean} opts.lazy Should channels be opened lazily? If false, channels will be opened when they are created. Default: `false`
   */
  constructor (opts) {
    super()

    if (typeof opts === 'boolean') {
      opts = { initiator: opts }
    }

    opts = {
      initiator: true,
      onChan: null,
      maxChannels: 10000,
      maxMsgSize: MAX_MSG_SIZE,
      lazy: false,
      ...opts
    }

    this._maxChannels = opts.maxChannels
    this._maxMsgSize = opts.maxMsgSize
    this._lazy = opts.lazy

    this._initiator = Boolean(opts.initiator)
    this._chanId = 0
    this._inChannels = new Array(this._maxChannels / 2)
    this._outChannels = new Array(this._maxChannels / 2)
    this._endedRemote = false // remote stream ended
    this._endedLocal = false // local stream ended

    this._chandata = pushable((err) => {
      this._log('mplex ended')
      this._endedRemote = true
      this.close(err)
    })

    if (opts.onChan) {
      this.on('stream', (chan) => opts.onChan(chan, chan.id))
    }

    this.source = pull(
      this._chandata,
      coder.encode()
    )

    const self = this
    this.sink = pull(
      through(function (data) {
        // ensure data is within our max size requirement
        if (data && data.length >= self._maxMsgSize) {
          nextTick(emitError, self, new Error('message too large!'))
          return this.queue(null)
        }
        this.queue(data)
      }),
      coder.decode(),
      (read) => {
        const next = looper(() => {
          read(null, (end, data) => {
            if (self._endedLocal) { return }
            if (end === true) { return self.close() }
            if (end) { return self.destroy(end) }
            self._handle(data)
            next()
          })
        })
        next()
      })
  }

  /**
   * A convenience wrapper for the log that adds useful metadata to logs
   * @private
   * @param {string} name The name of the operation being logged
   * @param {Buffer|string} data Logged with the metadata. Must be `.toString` capable. Default: `''`
   */
  _log (name, data) {
    log({
      op: name,
      initiator: this._initiator,
      endedLocal: this._endedLocal,
      endedRemote: this._endedRemote,
      data: (data && data.toString()) || ''
    })
  }

  get initiator () {
    return this._initiator
  }

  /**
   * Closes all open channels
   * @param {Error} err Optional error
   */
  close (err) {
    this._log('close', err)

    if (this.destroyed) { return }

    if (err) {
      nextTick(emitError, this, err)
    }

    err = err || 'Underlying stream has been closed'
    this._endedLocal = true

    // propagate close to channels
    const chans = Array.prototype.concat(this._outChannels, this._inChannels)
    for (let chan of chans) {
      if (chan) {
        chan.close(err)
      }
    }

    this.emit('close')
  }

  get destroyed () {
    return this._endedRemote && this._endedLocal
  }

  /**
   * Destroys the parent stream and closes Mplex
   * @param {Error} err
   */
  destroy (err) {
    err = err || new Error('Underlying stream has been closed')
    this._chandata.end(err)
    this.close(err)
  }

  /**
   * Pushes data to the stream
   * @param {Buffer} data
   */
  push (data) {
    if (data.data &&
      Buffer.byteLength(data.data) > this._maxMsgSize) {
      this._chandata.end(new Error('message too large!'))
    }

    this._chandata.push(data)
  }

  /**
   * Creates a new Channel (stream). If Mplex was created with `opts.lazy` set to true,
   * the channel will not automatically be opened.
   *
   * @param {string} name The name of the channel/stream to create
   * @returns {Channel}
   */
  createStream (name) {
    if (typeof name === 'number') { name = name.toString() }
    const chan = this._newStream(null, true, false, name, this._outChannels)
    if (!this._lazy) { chan.openChan(name) }
    return chan
  }

  /**
   * Attempts to create a channel if it doesn't already exist.
   * If a channel already exists for `id`, `Mplex#error` will be emitted.
   *
   * @private
   * @param {number} id The id of the channel. If `null` it will be auto incremented from `Mplex._chanId`
   * @param {boolean} initiator Is the channel creating the connection
   * @param {boolean} open Should the channel be opened when created
   * @param {string} name The name of the channel
   * @param {Array} list The channel list to add the channel to
   * @returns {Channel}
   */
  _newStream (id, initiator, open, name, list) {
    if (this.chanSize >= this._maxChannels) {
      this.emit('error', new Error('max channels exceeded'))
      return
    }

    if (typeof initiator === 'string') {
      name = initiator
      initiator = false
      open = false
    }

    if (typeof open === 'string') {
      name = open
      open = false
    }

    id = typeof id === 'number' ? id : this._chanId++
    if (list[id]) {
      this.emit('error', new Error(`channel with id ${id} already exist!`))
      return
    }
    const chan = new Channel({
      id,
      name,
      plex: this,
      initiator,
      open: open || false
    })

    return this._addChan(id, chan, list)
  }

  /**
   * A convenience method for setting the `chan` up to be tracked.
   * @private
   * @param {number} id The id of the channel
   * @param {Channel} chan The channel to track
   * @param {Array} list The channel list to add the channel to
   * @returns {Channel} `chan`
   */
  _addChan (id, chan, list) {
    chan.once('close', () => {
      list[id] = null
    })
    chan.once('error', (err) => {
      log.err('channel error', err)
    })

    list[id] = chan
    return chan
  }

  get chanSize () {
    return this._inChannels.size + this._outChannels.size
  }

  /**
   * Takes the appropriate course of action based on `msg.type`.
   * If `msg.type` is not recognized `Mplex#error` will be emitted.
   * @param {Message} msg
   */
  _handle (msg) {
    this._log('_handle', msg)
    const { id, type, data } = msg
    switch (type) {
      // Create a new stream
      case Types.NEW: {
        const chan = this._newStream(id, false, true, data.toString(), this._inChannels)
        nextTick(emitStream, this, chan, id)
        break
      }

      // Push the data into the channel with the matching id if it exists
      case Types.OUT_MESSAGE:
      case Types.IN_MESSAGE: {
        const list = type & 1 ? this._outChannels : this._inChannels
        const chan = list[id]
        if (chan) {
          chan.push(data)
        }
        break
      }

      // Close the channel with the matching id
      case Types.OUT_CLOSE:
      case Types.IN_CLOSE: {
        const list = type & 1 ? this._outChannels : this._inChannels
        const chan = list[id]
        if (chan) {
          chan.close()
        }
        break
      }

      // Destroys the channel with the matching id
      case Types.OUT_RESET:
      case Types.IN_RESET: {
        const list = type & 1 ? this._outChannels : this._inChannels
        const chan = list[id]
        if (chan) {
          chan.destroy()
        }
        break
      }

      default:
        nextTick(emitError, this, new Error('Invalid message type'))
    }
  }
}

module.exports = Mplex
