/**
 * native-or-another <https://github.com/tunnckoCore/native-or-another>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var Deferred = require('./index');

describe('require("native-or-another")', function() {
  it('should return deferred Promise implementation', function(done) {
    var defer = new Deferred();

    defer.resolve(1);
    defer.promise.then(function fulfilled(val) {
      assert.strictEqual(val, 1);
      done();
    });
  });

  it('should catch errors correctly', function(done) {
    var defer = new Deferred();

    defer.reject(new Error('custom error'));
    defer.promise.catch(function rejected(err) {
      assert.ok(err instanceof Error);
      assert.strictEqual(err.message, 'custom error');
      done();
    });
  });
});
