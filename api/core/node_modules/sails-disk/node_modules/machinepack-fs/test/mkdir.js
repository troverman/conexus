var path = require('path');
var fsx = require('fs-extra');
var Filesystem = require('../');

describe('machinepack-fs :: mkdir', function() {

  before(function() {
    fsx.copySync(path.resolve(__dirname, 'fixtures' ,'files'), path.resolve(__dirname, 'fixtures', 'sandbox'));
  });

  after(function() {
    fsx.removeSync(path.resolve(__dirname, 'fixtures', 'sandbox'));
    fsx.removeSync(path.resolve(__dirname, 'fixtures', 'sandbox-2'));
  });

  it('with force:false, should exit through `alreadyExists` when `destination` is an existing folder', function(done) {

    Filesystem.mkdir({
      destination: path.resolve(__dirname, 'fixtures', 'sandbox')
    }).switch({
      error: done,
      success: function() {
        return done('Expected to return through `alreadyExists` exit, but triggered `success` instead!');
      },
      alreadyExists: function() {return done();}
    });

  });

  it('with force:true, should wipe an existing folder and re-create it', function(done) {

    Filesystem.mkdir({
      destination: path.resolve(__dirname, 'fixtures', 'sandbox'),
      force: true
    }).switch({
      error: done,
      alreadyExists: function() {
        return done('Expected to return through `success` exit, but triggered `alreadyExists` instead!');
      },
      success: function() {
        // Running Filesystem.ls would be the best way to check that the new folder is empty,
        // but a little circular since we're testing machinepack-fs.  So we'll just look for
        // one of the files that we know used to be in there and assume that if it's gone,
        // the rest of them are too.
        // Verify that the file was copied
        try {
          fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox', 'alicemoji.png'));
          return done('Sandbox folder should be empty, but fould alicemoji.png!');
        } catch (e) {
          return done();
        }
      }
    });

  });

  it('should create a new folder when called with a non-conflicting path', function(done) {

    Filesystem.mkdir({
      destination: path.resolve(__dirname, 'fixtures', 'sandbox-2'),
      force: true
    }).switch({
      error: done,
      alreadyExists: function() {
        return done('Expected to return through `success` exit, but triggered `alreadyExists` instead!');
      },
      success: function() {
        try {
          fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox-2'));
          return done();
        } catch (e) {
          return done(e);
        }
      }
    });

  });

});
