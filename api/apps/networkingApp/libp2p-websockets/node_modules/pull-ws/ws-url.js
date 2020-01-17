var { relative } = require('iso-url')
var map = {http:'ws', https:'wss'}
var def = 'ws'
module.exports = function (url, location) {
  return relative(url, location, map, def)
}


