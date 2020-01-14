"use strict";
var path        = require('path');
var randomFs    = require('./../bin/random-fs');

var directoryPath = path.resolve(__dirname, 'temp');
return randomFs({ path: directoryPath, depth: 3, number: 100, wipe: true })
    .then(function(result) {
        result.log();
    })
    .catch(function(e) {
        console.error(e.stack);
    })
    .finally(function() {
        process.exit(0);
    })
;

