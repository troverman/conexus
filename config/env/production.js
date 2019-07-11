/**
 * Production environment settings
 *
 */

module.exports = {
  hookTimeout: 10000000,
  policies: {
    '*': ['enforceSsl', 'passport']
  },
};
