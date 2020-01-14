'use strict'

const EventEmitter = require('events').EventEmitter
const Connection = require('interface-connection').Connection
const nextTick = require('async/nextTick')
const debug = require('debug')

const MULTIPLEX_CODEC = require('./codec')

const log = debug('libp2p-mplex:muxer')
log.err = debug('libp2p-mplex:muxer:error')

function noop () {}

class MultiplexMuxer extends EventEmitter {
  /**
   * @constructor
   * @param {Connection} conn
   * @param {Mplex} multiplex
   */
  constructor (conn, multiplex) {
    super()
    this.conn = conn
    this.multiplex = multiplex
    this.multicodec = MULTIPLEX_CODEC

    multiplex.on('close', () => this.emit('close'))
    multiplex.on('error', (err) => this.emit('error', err))

    multiplex.on('stream', (stream) => {
      // install default error handler so that it doesn't throw
      stream.on('error', (err) => {
        log.err('receiver stream errored', err)
      })
      this.emit('stream', new Connection(stream, this.conn))
    })
  }

  /**
   * Creates a new stream from the `Connection` used in creating the muxer
   * @param {function(Error, Connection)} callback
   * @returns {Connection}
   */
  newStream (callback) {
    callback = callback || noop
    let stream = this.multiplex.createStream()
    // install default error handler so that it doesn't throw
    stream.on('error', (err) => {
      log.err('initiator stream errored', err)
    })
    const conn = new Connection(stream, this.conn)
    nextTick(callback, null, conn)
    return conn
  }

  /**
   * Ends the connection and all of its streams
   * @param {function(Error)} callback
   * @returns {void}
   */
  end (callback) {
    callback = callback || noop
    if (this.multiplex.destroyed) {
      return nextTick(callback)
    }
    this.multiplex.once('close', callback)
    this.multiplex.close()
  }
}

module.exports = MultiplexMuxer
