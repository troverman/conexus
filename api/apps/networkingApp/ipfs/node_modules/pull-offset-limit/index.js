const pull = require('pull-stream')
const Abortable = require('pull-abortable')
const through = pull.through
const filter = pull.filter

module.exports = pullLimit

// Pull-stream that waits until oi limits and then stops after li elements.
function pullLimit (offset, limit, onLimit) {
  var oi = 0 // offset iterator
  var li = 0 // limit iterator
  var limitReached = false
  var pipeline = []
  var abortable

  onLimit = onLimit || function () {}

  function _onLimit () {
    if (limitReached) {
      onLimit.apply(this, arguments)
    }
  }

  function ifOffsetPassed () {
    return oi++ > offset
  }

  function ifLimitAbort () {
    if (li++ >= limit) {
      limitReached = true
      abortable.abort()
    }
  }

  abortable = Abortable(_onLimit)

  if (offset != null || offset <= 0) {
    pipeline.push(filter(ifOffsetPassed))
  }

  if (limit != null) {
    pipeline.push(through(ifLimitAbort), abortable)
  }

  return pull.apply(this, pipeline)
}
