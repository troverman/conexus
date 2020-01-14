var defined = require('defined')

module.exports = pullStringify

function pullStringify (options) {
  options = defined(options, {})

  // default is pretty double newline delimited json
  var open = defined(options.open, '')
  var prefix = defined(options.prefix, '')
  var suffix = defined(options.suffix, '\n\n')
  var close = defined(options.close, '')
  var indent = defined(options.indent, 2)
  var stringify = defined(options.stringify, JSON.stringify)

  var first = true, ended
  return function (read) {
    return function (end, cb) {
      if(ended) return cb(ended)
      read(null, function (end, data) {
        if(!end) {
          var f = first
          first = false

          var string = stringify(data, null, indent)
          cb(null, (f ? open : prefix) + string + suffix)
        } else {
          ended = end
          if(ended !== true) return cb(ended)
          cb(null, first ? open + close : close)
        }
      })
    }
  }
}

module.exports.lines =
module.exports.ldjson = function (stringify) {
  return pullStringify({
    suffix: '\n',
    indent: 0,
    stringify: stringify
  })
}

module.exports.array = function (stringify) {
  return pullStringify({
    open: '[',
    prefix: ',\n',
    suffix: '',
    close: ']\n',
    indent: 2,
    stringify: stringify
  })
}
