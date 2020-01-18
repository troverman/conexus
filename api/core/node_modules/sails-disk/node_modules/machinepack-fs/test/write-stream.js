var assert = require('assert');
var fsx = require('fs-extra');
var Filesystem = require('../');
var path = require('path');
var _ = require('@sailshq/lodash');

describe('machinepack-fs :: writeStream', function() {

  before(function() {
    fsx.ensureFileSync(path.resolve(__dirname, 'fixtures' ,'sandbox', 'foo.txt'));
  });

  after(function() {
    fsx.removeSync(path.resolve(__dirname, 'fixtures' ,'sandbox'));
  });

  it('should trigger the `alreadyExists` exit when the `destination` exists and `force` is false', function(done) {
    var stream = fsx.createReadStream(path.resolve(__dirname, 'fixtures', 'files', 'hello.txt'));
    Filesystem.writeStream({
      sourceStream: stream,
      destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'foo.txt'),
    }).switch({
      error: done,
      success: function() {
        return done('Expected to return through `alreadyExists` exit, but triggered `success` instead!');
      },
      alreadyExists: function() {
        return done();
      }
    });
  });

  it('should output the stream to disc when the `destination` exists and `force` is true', function(done) {
    var stream = fsx.createReadStream(path.resolve(__dirname, 'fixtures', 'files', 'hello.txt'));
    Filesystem.writeStream({
      sourceStream: stream,
      destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'foo.txt'),
      force: true
    }).switch({
      error: done,
      success: function() {
        var contents = fsx.readFileSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'foo.txt'), 'utf8');
        assert(_.isEqual(contents, 'hello wurld!'));
        return done();
      },
      alreadyExists: function() {
        return done('Expected to return through `success` exit, but triggered `alreadyExists` instead!');
      }
    });
  });

  it('should output the stream to disc when the `destination` does not exist', function(done) {
    var stream = fsx.createReadStream(path.resolve(__dirname, 'fixtures', 'files', 'hello.txt'));
    Filesystem.writeStream({
      sourceStream: stream,
      destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'bar.txt'),
    }).switch({
      error: done,
      success: function() {
        var contents = fsx.readFileSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'bar.txt'), 'utf8');
        assert(_.isEqual(contents, 'hello wurld!'));
        return done();
      },
      alreadyExists: function() {
        return done('Expected to return through `success` exit, but triggered `alreadyExists` instead!');
      }
    });
  });

});
