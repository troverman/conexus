/**
 * Production environment settings
 *
 */

module.exports = {

  // models: {
  //   connection: 'someMysqlServer'
  // },
  // port: 80,
  // log: {
  //   level: "silent"
  // }
  hookTimeout: 10000000,
  policies: {
    '*': ['enforceSsl', 'passport']
  },

  secret:{
    "AMAZON": {"key":"AKIAIC7MJDK462RVROSA", "secret":"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", "bucket":"conexus8"},
  },

};
