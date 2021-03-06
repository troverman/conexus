var util = require('util');
var _ = require('@sailshq/lodash');
/**
 * Sails.prototype.inspect()
 *
 * The string that should be returned when this `Sails` instance
 * is passed to `util.inspect()` (i.e. when logged w/ `console.log()`)
 *
 * @return {String}
 */
module.exports = function inspect () {
  var sails = this;
  return util.format('\n'+
  '  |>   %s', this.toString()) + '\n' +
  '\\___/  For help, see: http://sailsjs.com/documentation/concepts/'+
  '\n\n' +
  'Tip: Use `sails.config` to access your app\'s runtime configuration.'+
  '\n\n' +
  util.format('%d Models:\n', _(sails.models).toArray().value().length) +
  _(sails.models).toArray().filter(function (it) {return !it.junctionTable;}).pluck('globalId').value() +
  '\n\n' +
  util.format('%d Hooks:\n', _(sails.hooks).toArray().value().length)+
  _(sails.hooks).toArray().pluck('identity').value() +
  '\n' +
  '';
};
