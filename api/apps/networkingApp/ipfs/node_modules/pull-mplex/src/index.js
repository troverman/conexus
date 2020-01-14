'use strict'

const abortable = require('pull-abortable')
const pull = require('pull-stream')
const debug = require('debug')

const MULTIPLEX_CODEC = require('./codec')
const Mplex = require('./mplex')
const Muxer = require('./muxer')

const log = debug('pull-plex')
log.err = debug('pull-plex:err')

/**
 * Wraps `conn` with a `StreamMuxer` and returns the `StreamMuxer`
 * @param {Connection} conn An `interface-connection` compliant connection
 * @param {boolean} isListener Whether or not the muxer is the listener
 * @returns {StreamMuxer}
 */
function create (conn, isListener) {
  const mpx = new Mplex(!isListener)
  const aborter = abortable()

  pull(
    conn,
    mpx,
    aborter,
    conn
  )

  const muxer = new Muxer(conn, mpx)
  muxer.once('error', (err) => {
    log.err('got error', err)
    aborter.abort(err) // TODO: should we do the abort here or just ignore?
  })

  muxer.on('close', () => {
    log('closing muxer')
    aborter.abort()
  })

  return muxer
}

exports = module.exports = create
exports.pullMplex = Mplex
exports.multicodec = MULTIPLEX_CODEC
exports.dialer = (conn) => create(conn, false)
exports.listener = (conn) => create(conn, true)
