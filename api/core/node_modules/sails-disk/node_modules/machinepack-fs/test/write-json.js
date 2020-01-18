var assert = require('assert');
var fsx = require('fs-extra');
var Filesystem = require('../');
var path = require('path');
var _ = require('@sailshq/lodash');

describe('machinepack-fs :: write-json', function() {

  before(function() {
    fsx.ensureFileSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'foo.txt'));
  });

  after(function() {
    fsx.removeSync(path.resolve(__dirname, 'fixtures', 'sandbox'));
  });

  it('should trigger the `alreadyExists` exit when the `destination` exists and `force` is false', function(done) {
    Filesystem.writeJson({
      destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'foo.txt'),
      json: {
        foo: 'bar',
        abc: 123,
        bool: true,
        dict: {
          key: 'val'
        },
        array: [1, 2, 3]
      }
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

  it('should write a JSON string to disc when the `destination` exists and `force` is true', function(done) {
    Filesystem.writeJson({
      destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'foo.txt'),
      json: {
        foo: 'bar',
        abc: 123,
        bool: true,
        dict: {
          key: 'val'
        },
        array: [1, 2, 3]
      },
      force: true
    }).switch({
      error: done,
      success: function() {
        var contents = JSON.parse(fsx.readFileSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'foo.txt'), 'utf8'));
        assert(_.isEqual(contents, {
          foo: 'bar',
          abc: 123,
          bool: true,
          dict: {
            key: 'val'
          },
          array: [1, 2, 3]
        }));
        return done();
      },
      alreadyExists: function() {
        return done('Expected to return through `success` exit, but triggered `alreadyExists` instead!');
      }
    });
  });

  it('should write a JSON string to disc when the `destination` does not exist', function(done) {
    Filesystem.writeJson({
      destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'bar.txt'),
      json: {
        foo: 'bar',
        abc: 123,
        bool: true,
        dict: {
          key: 'val'
        },
        array: [1, 2, 3]
      }
    }).switch({
      error: done,
      success: function() {
        var contents = JSON.parse(fsx.readFileSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'bar.txt'), 'utf8'));
        assert(_.isEqual(contents, {
          foo: 'bar',
          abc: 123,
          bool: true,
          dict: {
            key: 'val'
          },
          array: [1, 2, 3]
        }));
        return done();
      },
      alreadyExists: function() {
        return done('Expected to return through `success` exit, but triggered `alreadyExists` instead!');
      }
    });
  });

});
