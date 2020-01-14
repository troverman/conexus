const test = require('tape')
const pull = require('pull-stream')
const pullOffsetLimit = require('./')

test('should stop after n elements', function (t) {
  var n = 100
  var c = 0

  var drain = pull.drain(function () {
    if (c++ > n) throw new Error('Stream should have aborted at the limit.')
  }, function () {
    t.assert(c === n, 'The count is equal to the limit.')
    t.end()
  })

  pull(pull.infinite(), pullOffsetLimit(null, n), drain)
  t.plan(1)
})

test('should filter until n elements', function (t) {
  var n = 10 // offset
  var c = 0 // count
  var total = 35 // total

  var drain = pull.drain(function (ea) {
    c++
    if (ea < n) throw new Error('Stream should not have emitted values before offset.')
  }, function () {
    t.assert(c === total - n, 'Stream length should is equal to the total minus the offset.')
    t.end()
  })

  pull(pull.count(total), pullOffsetLimit(n, null), drain)
  t.plan(1)
})

test('should accept a function as a third parameter', function (t) {
  var n = 10 // offset
  var c = 0 // count

  function onLimit () {
    t.assert(c === n, 'Function should be called at limit reached')
    t.end()
  }

  pull(pull.infinite(), pullOffsetLimit(0, n, onLimit), pull.drain(function () { c++ }))
  t.plan(1)
})

test('should run provided onLimit function only when limit is reached', function (t) {
  var n = Infinity // offset
  var ran = false

  function onLimit () {
    ran = true
    t.fail('No limit was reached, stream ended elsewhere, but function was run.')
  }
  var drain = pull.drain(function (ea) {}, function () {
    t.assert(!ran, 'onLimit was not run before limit.')
    t.end()
  })

  pull(pull.count(100), pullOffsetLimit(0, n, onLimit), drain)
  t.plan(1)
})
