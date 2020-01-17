'use strict'

const Hapi = require('hapi')
const path = require('path')
const epimetheus = require('epimetheus')
const merge = require('merge-recursive').recursive
const defaultConfig = require('./config')

exports = module.exports

exports.start = (options, callback) => {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  const config = merge(Object.assign({}, defaultConfig), options)
  const log = config.log

  const port = options.port || config.hapi.port
  const host = options.host || config.hapi.host

  const http = new Hapi.Server(config.hapi.options)

  http.connection({ port, host })

  http.register({ register: require('inert') }, (err) => {
    if (err) {
      return callback(err)
    }

    http.start((err) => {
      if (err) {
        return callback(err)
      }

      log('rendezvous server has started on: ' + http.info.uri)

      http.peers = require('./routes')(config, http).peers

      http.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => reply.file(path.join(__dirname, 'index.html'), {
          confine: false
        })
      })

      callback(null, http)
    })
  })

  if (config.metrics) { epimetheus.instrument(http) }

  return http
}
