var assert = require('assert');
var path = require('path');
var Filesystem = require('../');

describe('machinepack-fs :: read', function() {

  it('should be able to get file contents when called on a valid file', function(done) {

    Filesystem.read({
      source: path.resolve(__dirname, 'fixtures', 'files', 'hello.txt')
    }).switch({
      error: done,
      doesNotExist: function() {
        return done('Expected to return through `success` exit, but triggered `doesNotExist` instead!');
      },
      isDirectory: function() {
        return done('Expected to return through `success` exit, but triggered `isDirectory` instead!');
      },
      success: function(contents) {
        assert.equal(contents, 'hello wurld!');
        return done();
      }
    });

  });

  it('should trigger its `doesNotExist` exit when called for a non-existent file', function(done) {

    Filesystem.read({
      source: path.resolve(__dirname, 'fixtures', 'files', 'helloxxx.txt')
    }).switch({
      error: done,
      doesNotExist: function() {
        return done();
      },
      isDirectory: function() {
        return done('Expected to return through `doesNotExist` exit, but triggered `isDirectory` instead!');
      },
      success: function() {
        return done('Expected to return through `doesNotExist` exit, but triggered `success` instead!');
      }
    });
  });


  it('should trigger its `isDirectory` exit when called for a directory', function(done) {

    Filesystem.read({
      source: path.resolve(__dirname, 'fixtures', 'files')
    }).switch({
      error: done,
      doesNotExist: function() {
        return done('Expected to return through `isDirectory` exit, but triggered `isDirectory` instead!');
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
