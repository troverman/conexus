var path = require('path');
var fsx = require('fs-extra');
var Filesystem = require('../');

describe('machinepack-fs :: mv', function() {

  before(function() {
    fsx.copySync(path.resolve(__dirname, 'fixtures' ,'files'), path.resolve(__dirname, 'fixtures', 'sandbox'));
  });

  after(function() {
    fsx.removeSync(path.resolve(__dirname, 'fixtures', 'sandbox'));
    fsx.removeSync(path.resolve(__dirname, 'fixtures', 'playbox'));
  });

  it('should be able to move a single file successfully, using the same name.', function(done) {

    Filesystem.cp({
      source: path.resolve(__dirname, 'fixtures', 'sandbox', 'alicemoji.png'),
      destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'some-folder', 'alicemoji.png'),
    }).switch({
      error: done,
      doesNotExist: done,
      success: function() {
        // Verify that the file was copied
        try {
          fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'some-folder', 'alicemoji.png'));
          return done();
        } catch (e) {
          return done(e);
        }
      }
    });

  });

  it('should be able to move a single file successfully, using a new name.', function(done) {

    Filesystem.cp({
      source: path.resolve(__dirname, 'fixtures', 'files', 'hello.txt'),
      destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'hello-yrself.txt'),
    }).switch({
      error: done,
      doesNotExist: done,
      success: function() {
        // Verify that the file was copied
        try {
          fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'hello-yrself.txt'));
          return done();
        } catch (e) {
          return done(e);
        }
      }
    });

  });

  it('should be able to move a directory successfully', function(done) {

    Filesystem.cp({
      source: path.resolve(__dirname, 'fixtures', 'sandbox'),
      destination: path.resolve(__dirname, 'fixtures', 'playbox'),
    }).switch({
      error: done,
      doesNotExist: done,
      success: function() {
        // Verify that the folder was moved
        try {
          fsx.statSync(path.resolve(__dirname, 'fixtures', 'playbox'));
          return done();
        } catch (e) {
          return done(e);
        }
      }
    });

  });

});
