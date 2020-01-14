'use strict'

/**
 * @private
 * @param {EventEmitter} that
 * @param {Channel} chan
 * @param {number} id
 */
function emitStream (that, chan, id) {
  that.emit('stream', chan, id)
}

/**
 * @private
 * @param {EventEmitter} that
 * @param {Error} error
 */
function emitError (that, error) {
  that.emit('error', error)
}

module.exports.emitError = emitError
module.exports.emitStream = emitStream
