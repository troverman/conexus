'use strict'

const pushable = require('pull-pushable')
const looper = require('looper')
const nextTick = require('async/nextTick')
const EE = require('events')
const debug = require('debug')

const { Types } = require('./consts')
const { emitError } = require('./util')

const log = debug('pull-plex:chan')
log.err = debug('pull-plex:chan:err')

/**
 * Creates a pull-stream sink for the given Channel
 * @private
 * @param {Channel} channel
 * @returns {function} The sink function
 */
function channelSink (channel) {
  return function (read) {
    const next = looper(function () {
      read(null, function (end, data) {
        // stream already ended
        if (channel._endedLocal) { return }

        channel._endedLocal = end || false

        // source ended, close the stream
        if (end === true) {
          return channel.endChan()
        }

        // source errored, destroy stream
        if (end || channel._destroy) {
          channel.destroyChan()
          channel.emit('error', end || channel._destroy)
          channel.destroy()
          return
        }

        // just send
        channel.sendMsg(data)
        next()
      })
    })

    next()
  }
}

/**
 * @fires Channel#close
 * @fires Channel#error
 */
class Channel extends EE {
  /**
   * @constructor
   * @param {Object} opts
   * @param {number} opts.id
   * @param {boolean} opts.initiator
   * @param {string} opts.name
   * @param {boolean} opts.open
   * @param {Mplex} opts.plex
   */
  constructor (opts) {
    super()

    opts = { initiator: false, ...opts }

    this._id = opts.id
    this._name = opts.name
    this._plex = opts.plex
    this._open = opts.open
    this._initiator = opts.initiator
    this._endedRemote = false // remote stream ended
    this._endedLocal = false // local stream ended
    this._destroy = false

    this.MSG = this._initiator
      ? Types.OUT_MESSAGE
      : Types.IN_MESSAGE

    this.END = this._initiator
      ? Types.OUT_CLOSE
      : Types.IN_CLOSE

    this.RESET = this._initiator
      ? Types.OUT_RESET
      : Types.IN_RESET

    this._log('new channel', this._name)

    this._msgs = pushable((err) => {
      this._log('source closed', err)
      if (err && typeof err !== 'boolean') {
        nextTick(emitError, this, err)
      }
      // this.endChan() // Do not uncomment this, it will end the channel too early
    })

    this._source = this._msgs
    this.sink = channelSink(this)
  }

  get source () {
    return this._source
  }

  get id () {
    return this._id
  }

  get open () {
    return this._open
  }

  set open (open) {
    this._open = open
  }

  get name () {
    return this._name
  }

  get destroyed () {
    return this._endedRemote && this._endedLocal
  }

  /**
   * A convenience wrapper for the log that adds useful metadata to logs
   * @private
   * @param {string} name The name of the operation being logged
   * @param {Buffer|string} data Logged with the metadata. Must be `.toString` capable. Default: `''`
   */
  _log (name, data) {
    if (!log.enabled) return
    log({
      op: name,
      name: this._name,
      id: this._id,
      endedLocal: this._endedLocal,
      endedRemote: this._endedRemote,
      initiator: this._initiator,
      data: (data && data.toString()) || ''
    })
  }

  /**
   * Pushes `data` into the channel
   * @param {Buffer} data
   */
  push (data) {
    this._log('push')
    this._msgs.push(data)
  }

  /**
   * Closes the channel for writing
   * @param {Error} err
   */
  close (err) {
    this._log('close', err)
    if (!this._endedRemote) {
      this._endedRemote = err || true
      this._msgs.end(this._endedRemote)
      this.emit('close', err)
      this.plex = null
    }
  }

  /**
   * Closes the channel with the given error
   * @param {Error} err Default: `'channel destroyed!'`
   */
  destroy (err) {
    this._log('destroy', err)
    this._destroy = err || 'channel destroyed!'
    this.close(this._destroy)
  }

  /**
   * Opens the channel if it's not already open. Attempting
   * to open an already opened channel is ignored.
   * @param {string} name
   */
  openChan (name) {
    if (this.open) { return } // chan already open

    this.open = true
    this._plex.push([
      this._id,
      Types.NEW,
      name !== this._id.toString() ? name : this._id.toString()
    ])
  }

  /**
   * Pushes `data` wrapped in a `Message` into the channel.
   * If the channel is not open, it will be opened automatically.
   *
   * @param {Buffer} data
   */
  sendMsg (data) {
    this._log('sendMsg', data)

    if (!this.open) {
      this.openChan(this.name)
    }

    this._plex.push([
      this._id,
      this.MSG,
      data
    ])
  }

  /**
   * Ends the channel by sending an END `Message`.
   * If the channel is not open, no action will be taken.
   */
  endChan () {
    this._log('endChan')

    if (!this.open) {
      return
    }

    this._plex.push([
      this._id,
      this.END
    ])
  }

  /**
   * Destroys the channel by sending a RESET `Message`.
   * If the channel is not open, no action will be taken.
   */
  destroyChan () {
    this._log('destroyChan')

    if (!this.open) {
      return
    }

    this._plex.push([
      this._id,
      this.RESET
    ])
  }
}

module.exports = Channel
