/**
 * Production environment settings
 *
 */

module.exports = {
  hookTimeout: 10000000,
  policies: {
    '*': ['enforceSsl', 'passport']
  },
  port: process.env.PORT || 80,

};
