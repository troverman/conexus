/**
 * WebSocket Server Settings
 */


//TODO:NETWORKING ..
//TODO: SHARE SOCKETS AMONST PEERS
module.exports.sockets = {

  // adapter: 'memory',

  // adapter: 'redis',
  // host: '127.0.0.1',
  // port: 6379,
  // db: 'sails',
  // pass: '<redis auth password>'

  beforeConnect: function(handshake, cb) {
    //console.log(session);
    //User.getSession.then(function(session){})
    //console.log(sails.session.User)
    return cb(null, true);
  },

  afterDisconnect: function(session, socket, cb) {
    //console.log(session.user)
    //if (session.User){
      //console.log(session.User.id);
    //}
    return cb();
  },

};
