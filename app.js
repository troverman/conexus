process.chdir(__dirname);
var sails = require('sails');
var rc = require('rc');
sails.lift(rc('sails'));