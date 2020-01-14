/**
 * native-or-another <https://github.com/tunnckoCore/native-or-another>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var Promize = require('native-or-bluebird');

module.exports = function PromiseDeferred() {
  var deferred = {};

  deferred.promise = new Promize(function(resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  return deferred;
};
