var assert = require('assert');
var fsx = require('fs-extra');
var Filesystem = require('../');
var path = require('path');
var _ = require('@sailshq/lodash');

describe('machinepack-fs :: write', function() {

  before(function() {
    fsx.ensureFileSync(path.resolve(__dirname, 'fixtures' ,'sandbox', 'foo.txt'));
  });

  after(function() {
    fsx.removeSync(path.resolve(__dirname, 'fixtures' ,'sandbox'));
  });

  it('should trigger the `alreadyExists` exit when the `destination` exists and `force` is false', function() {
    try {
      Filesystem.writeSync({
        destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'foo.txt'),
        string: 'foobar!'
      }).execSync();
      throw new Error('Should have triggered `alreadyExists` exit, instead triggered `success`!');
    }
    catch (e) {
      if (!e.exit || e.exit !== 'alreadyExists') {
        throw e;
      }
    }
  });

  it('should write a JSON string to disc when the `destination` exists and `force` is true', function() {
    Filesystem.writeSync({
      destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'foo.txt'),
      string: 'foobar!',
      force: true
    }).execSync();
    var contents = fsx.readFileSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'foo.txt'), 'utf8');
    assert(_.isEqual(contents, 'foobar!'));
  });

  it('should write a JSON string to disc when the `destination` does not exist', function() {
    Filesystem.writeSync({
      destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'bar.txt'),
      string: 'foobar!',
      force: true
    }).execSync();
    var contents = fsx.readFileSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'bar.txt'), 'utf8');
    assert(_.isEqual(contents, 'foobar!'));
  });

});
