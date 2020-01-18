var fsx = require('fs-extra');
var Filesystem = require('../');
var path = require('path');

describe('machinepack-fs :: cp', function() {

  afterEach(function() {
    fsx.removeSync(path.resolve(__dirname, 'fixtures', 'sandbox'));
  });

  it('should be able to copy a single file successfully, using the same name.', function(done) {

    Filesystem.cp({
      source: path.resolve(__dirname, 'fixtures', 'files', 'alicemoji.png'),
      destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'alicemoji.png'),
    }).switch({
      error: done,
      doesNotExist: done,
      success: function() {
        // Verify that the file was copied
        try {
          fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'alicemoji.png'));
          return done();
        } catch (e) {
          return done(e);
        }
      }
    });

  });

  it('should be able to copy a single file successfully, using a new name.', function(done) {

    Filesystem.cp({
      source: path.resolve(__dirname, 'fixtures', 'files', 'alicemoji.png'),
      destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'alicemoji_2.png'),
    }).switch({
      error: done,
      doesNotExist: done,
      success: function() {
        // Verify that the file was copied
        try {
          fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'alicemoji_2.png'));
          return done();
        } catch (e) {
          return done(e);
        }
      }
    });

  });

  it('should be able to copy a directory successfully', function(done) {

    Filesystem.cp({
      source: path.resolve(__dirname, 'fixtures', 'files'),
      destination: path.resolve(__dirname, 'fixtures', 'sandbox'),
    }).switch({
      error: done,
      doesNotExist: done,
      success: function() {
        // Verify that the file was copied
        try {
          // fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'files'));
          fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'alicemoji.png'));
          fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'hello.txt'));
          fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'some-folder'));
          fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'some-folder', 'aliceball.jpg'));
          return done();
        } catch (e) {
          return done(e);
        }
      }
    });

  });

  it('should trigger its `doesNotExist` exit when called using a source path that doesn\'t exist.', function(done) {

    Filesystem.cp({
      source: path.resolve(__dirname, 'fixtures', 'files', 'alicemojixxx.png'),
      destination: path.resolve(__dirname, 'fixtures', 'sandbox', 'alicemojixxxx.png'),
    }).switch({
      doesNotExist: function() {return done();},
      error: done,
      success: function() {return done('Triggered `success` but should have been `doesNotExist!`');}
    });
  });

});
