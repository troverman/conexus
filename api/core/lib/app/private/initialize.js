var _ = require('@sailshq/lodash');
var async = require('async');
module.exports = function initialize(cb) {
  var sails = this;
  // Callback is optional
  cb = cb || function(err) {
    if (err) { sails.log.error(err); }
  };
  var listeners = {
    sigusr2: function() {
      sails.lower(function() {
        process.kill(process.pid, 'SIGUSR2');
      });
    },
    sigint: function() {
      sails.lower(function (){
        process.exit();
      });
    },
    sigterm: function() {
      sails.lower(function (){
        process.exit();
      });
    },
    exit: function() {
      if (!sails._exiting) {
        sails.lower();
      }
    }
  };
  process.once('SIGUSR2', listeners.sigusr2);
  process.on('SIGINT', listeners.sigint);
  process.on('SIGTERM', listeners.sigterm);
  process.on('exit', listeners.exit);
  sails._processListeners = listeners;
  // Run the app bootstrap
  sails.runBootstrap(function afterBootstrap(err) {
    if (err) {sails.log.error('Bootstrap encountered an error: (see below)'); return cb(err);}
    sails.emit('ready');
    // Now loop over each hook, and if it exposes a `handleLift` function, then run it.
    // (this is used by attached servers, etc.)
    if (!_.isObject(sails.hooks)) { return cb(new Error('Consistency violation: `sails.hooks` should be a dictionary.')); }
    async.each(Object.keys(sails.hooks), function (hookName, next){
      if (!_.isFunction(sails.hooks[hookName].handleLift)) {return next();}
      return sails.hooks[hookName].handleLift(next);
    }, function (err){
      if (err) { return cb(err); }
      return cb(null, sails);
    });
  });
};
