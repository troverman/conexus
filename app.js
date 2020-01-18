//TODO: INIT
process.chdir(__dirname);
var peer = require('./api/core');
peer.lift({hooks:{grunt:false}});