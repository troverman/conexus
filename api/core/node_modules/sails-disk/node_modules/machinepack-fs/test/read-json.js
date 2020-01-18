var assert = require('assert');
var path = require('path');
var _ = require('@sailshq/lodash');
var Filesystem = require('../');

describe('machinepack-fs :: read-json', function() {

  it('should be able to read a valid json file and parse it', function(done) {

    Filesystem.readJson({
      source: path.resolve(__dirname, 'fixtures', 'jsonfile.json'),
    }).switch({
      error: done,
      doesNotExist: function() {
        return done('Expected to return through `success` exit, but triggered `doesNotExist` instead!');
      },
      couldNotParse: function() {
        return done('Expected to return through `success` exit, but triggered `couldNotParse` instead!');
      },
      isDirectory: function() {
        return done('Expected to return through `success` exit, but triggered `isDirectory` instead!');
      },
      success: function(data) {
        assert(_.isEqual(data, {
          foo: 'bar',
          abc: 123,
          bool: true,
          dict: {
            key: 'val'
          },
          array: [1, 2, 3]
        }));
        return done();
      }
    });

  });

  it('should trigger its `doesNotExist` exit when called for a non-existent file', function(done) {
    Filesystem.readJson({
      source: path.resolve(__dirname, 'fixtures', 'jsonfilexxx.json')
    }).switch({
      error: done,
      doesNotExist: function() {
        return done();
      },
      couldNotParse: function() {
        return done('Expected to return through `doesNotExist` exit, but triggered `couldNotParse` instead!');
      },
      isDirectory: function() {
        return done('Expected to return through `doesNotExist` exit, but triggered `isDirectory` instead!');
      },
      success: function() {
        return done('Expected to return through `doesNotExist` exit, but triggered `success` instead!');
      }
    });
  });

  it('should trigger its `couldNotParse` exit when called for a non-json file', function(done) {
    Filesystem.readJson({
      source: path.resolve(__dirname, 'fixtures', 'files', 'alicemoji.png'),
    }).switch({
      error: done,
      doesNotExist: function() {
        return done('Expected to return through `couldNotParse` exit, but triggered `couldNotParse` instead!');
      },
      couldNotParse: function() {
        return done();
      },
      isDirectory: function() {
        return done('Expected to return through `couldNotParse` exit, but triggered `isDirectory` instead!');
      },
      success: function() {
        return done('Expected to return through `couldNotParse` exit, but triggered `success` instead!');
      }
    });
  });

  it('should trigger its `isDirectory` exit when called for a directory', function(done) {
    Filesystem.readJson({
      source: path.resolve(__dirname, 'fixtures', 'files'),
    }).switch({
      error: done,
      doesNotExist: function() {
        return done('Expected to return through `isDirectory` exit, but triggered `doesNotExist` instead!');
      },
      couldNotParse: function() {
        return done('Expected to return through `isDirectory` exit, but triggered `couldNotParse` instead!');
      },
      isDirectory: function() {
        return done();
      },
      success: function() {
        return done('Expected to return through `isDirectory` exit, but triggered `success` instead!');
      }
    });
  });


});
