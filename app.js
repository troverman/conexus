//TODO: INIT
process.chdir(__dirname);

//TODO: FROM SAILS TO ROCKETS ; something something
var peer = require('sails');
var rc = require('rc');

peer.lift(rc('sails'));

//require init

//peer.lift({
//hooks:{foo: false}, // if you want to disable some of them
//  paths: { views: 'mydir/views' }, // relative to appDir
//}, function(err, server) {});


