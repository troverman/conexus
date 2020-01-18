var assert = require('assert');
var path = require('path');
var Filesystem = require('../');

describe('machinepack-fs :: read-stream', function() {

  it('should be able to get a stream when called on a valid file', function(done) {

    Filesystem.readStream({
      source: path.resolve(__dirname, 'fixtures', 'files', 'hello.txt')
    }).switch({
      error: done,
      doesNotExist: function() {
        return done('Expected to return through `success` exit, but triggered `doesNotExist` instead!');
      },
      isDirectory: function() {
        return done('Expected to return through `success` exit, but triggered `isDirectory` instead!');
      },
      success: function(stream) {

        var contents = '';
        stream.on('readable', function(){
          var chunk;
          do {
            chunk = stream.read();
            if (chunk) {
              contents += chunk;
            }
          } while (chunk !== null);

        });//æ
        stream.once('end', function(){
          stream.removeAllListeners('readable');
          stream.removeAllListeners('error');
          assert.equal(contents, 'hello wurld!');
          return done();
        });//æ
      }
    });

  });

  it('should trigger its `doesNotExist` exit when called for a non-existent file', function(done) {

    Filesystem.readStream({
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

    Filesystem.readStream({
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
