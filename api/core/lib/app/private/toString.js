var util = require('util');
module.exports = function toString () {
  return util.format('[a %sSails app%s]', this.isLifted ? 'lifted ' : '', this.isLifted && this.config.port ? ' on port '+this.config.port : '');
};
