var _ = require('@sailshq/lodash');
var minimist = require('minimist');
var rc = require('rc');
var rttc = require('rttc');
/**
 * Load configuration from .rc files and env vars
 */
module.exports = function(namespace) {
  namespace = namespace || 'sails';
  var conf = rc(namespace);
  var prefix = namespace + '_';
  var l = prefix.length;
  _.each(process.env, function(val, key) {
    if((key.indexOf(prefix)) === 0) {
      var keypath = key.substring(l).replace(/__/g,'.');
      try {val = rttc.parseHuman(val, 'json');}
      catch(unusedErr) {val = rttc.parseHuman(val);}
      _.set(conf, keypath, val);
    }
  });
  var argv = minimist(process.argv.slice(2));
  conf = _.merge(conf, argv);
  return conf;
};