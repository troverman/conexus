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
    '*': 'enforceSsl'
  }

};
