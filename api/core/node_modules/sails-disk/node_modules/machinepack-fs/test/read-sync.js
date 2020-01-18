var assert = require('assert');
var Filesystem = require('../');
var path = require('path');

describe('machinepack-fs :: readSync', function() {

  it('should be able to get file contents when called on a valid file', function() {

    try {
      var contents = Filesystem.readSync({
        source: path.resolve(__dirname, 'fixtures', 'files', 'hello.txt')
      }).execSync();
      assert.equal(contents, 'hello wurld!');
    } catch (e) {
      throw e;
    }
  });

  it('should trigger its `doesNotExist` exit when called for a non-existent file', function() {

    try {
      Filesystem.readSync({
        source: path.resolve(__dirname, 'fixtures', 'files', 'helloxxx.txt')
      }).now();
      throw new Error('Should have triggered `doesNotExist` exit, instead triggered `success`!');
    } catch (e) {
      if (!e.exit || e.exit !== 'doesNotExist') {
        throw e;
      }
    }
  });


  it('should trigger its `isDirectory` exit when called for a directory', function() {

    try {
      Filesystem.readSync({
        source: path.resolve(__dirname, 'fixtures', 'files')
      }).execSync();
      throw new Error('Should have triggered `isDirectory` exit, instead triggered `success`!');

    } catch (e) {
      if (!e.exit || e.exit !== 'isDirectory') {
        throw e;
      }

    }

  });


});
