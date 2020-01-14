'use strict'

const crypto = require('crypto')
const Readable = require('stream').Readable

const defaultOptions = {
  chunkSize: 4096,
  generator: (size, callback) => {
    callback(null, crypto.randomBytes(size))
  }
}

class BufferStream extends Readable {
  constructor (limit, options) {
    super()

    this.limit = limit
    this.options = options
    this.emitted = 0
  }

  _read () {
    const nextLength = this.emitted + this.options.chunkSize
    let nextChunkSize = this.options.chunkSize

    if (nextLength > this.limit) {
      nextChunkSize = this.limit - this.emitted
    }

    this.options.generator(nextChunkSize, (err, bytes) => {
      if (err) {
        this.emit('error', err)
        return
      }

      bytes = bytes.slice(0, nextChunkSize)

      this.emitted += nextChunkSize

      this.push(bytes)

      if (nextLength > this.limit) {
        // we've finished, end the stream
        this.push(null)
      }
    })
  }
}

const bufferStream = (limit, options = {}) => {
  options = Object.assign({}, defaultOptions, options)

  return new BufferStream(limit, options)
}

module.exports = bufferStream
