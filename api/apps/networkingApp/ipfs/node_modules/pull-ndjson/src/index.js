'use strict'

const { ldjson } = require('pull-stringify')
const split = require('pull-split')
const pull = require('pull-stream/pull')
const filter = require('pull-stream/throughs/filter')
const map = require('pull-stream/throughs/map')

exports = module.exports

exports.parse = () => {
  return pull(
    split('\n'),
    filter(),
    map(JSON.parse)
  )
}

exports.serialize = () => {
  return pull(
    ldjson(),
    filter()
  )
}
