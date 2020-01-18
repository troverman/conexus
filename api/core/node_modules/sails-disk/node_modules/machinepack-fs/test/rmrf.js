var path = require('path');
var fsx = require('fs-extra');
var Filesystem = require('../');

describe('machinepack-fs :: rmrf', function() {

  before(function() {
    fsx.copySync(path.resolve(__dirname, 'fixtures' ,'files'), path.resolve(__dirname, 'fixtures', 'sandbox'));
  });

  after(function() {
    fsx.removeSync(path.resolve(__dirname, 'fixtures', 'sandbox'));
  });

  it('when called with a valid directory, should remove it and all its contents', function(done) {

    Filesystem.rmrf({
      path: path.resolve(__dirname, 'fixtures', 'sandbox')
    }).switch({
      error: done,
      success: function() {
        // Verify that the directory was removec
        try {
          fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox'));
          return done('Directory should have been removed but it still exists!');
        } catch (e) {
          if (e.code !== 'ENOENT') {throw e;}
          return done();
        }
      }
    });

  });

  it('when called with a non-existent directory, should fail silently', function(done) {

    Filesystem.rmrf({
      path: path.resolve(__dirname, 'fixtures', 'sandbox')
    }).exec(done);

  });


});
