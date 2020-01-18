var path = require('path');
var fsx = require('fs-extra');
var Filesystem = require('../');

describe('machinepack-fs :: ensureDir', function() {

  afterEach(function() {
    fsx.removeSync(path.resolve(__dirname, 'fixtures', 'sandbox'));
  });

  it('should return through `success` for an existing folder.', function(done) {

    Filesystem.ensureDir({
      path: path.resolve(__dirname, 'fixtures', 'files')
    }).exec(done);

  });

  it('should create a new folder and return through `success` for an non-existent folder.', function(done) {

    Filesystem.ensureDir({
      path: path.resolve(__dirname, 'fixtures', 'sandbox')
    }).switch({
      error: done,
      success: function() {
        // Verify that the folder was created
        try {
          fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox'));
          return done();
        } catch (e) {
          return done(e);
        }
      }
    });

  });

});
