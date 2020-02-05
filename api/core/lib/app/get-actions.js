var _ = require('@sailshq/lodash');
/**
 * Sails.prototype.getActions()
 * Return a shallow clone of the loaded actions dictionary.
 */
module.exports = function getActions() {
  // Return a shallow clone of the actions dictionary, so that the callercan't modify the actions.
  return _.clone(this._actions);
};
