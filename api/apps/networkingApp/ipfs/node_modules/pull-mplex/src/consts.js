'use strict'

/**
 * @typedef {number} MessageType
 */

/**
 * @enum {MessageType}
 */
exports.Types = {
  NEW: 0,
  IN_MESSAGE: 1,
  OUT_MESSAGE: 2,
  IN_CLOSE: 3,
  OUT_CLOSE: 4,
  IN_RESET: 5,
  OUT_RESET: 6
}

exports.MAX_MSG_SIZE = 1 << 20 // 1MB
