var path = require('path');
var fsx = require('fs-extra');
var Filesystem = require('../');

describe('machinepack-fs :: rmrf-sync', function() {

  before(function() {
    fsx.copySync(path.resolve(__dirname, 'fixtures' ,'files'), path.resolve(__dirname, 'fixtures', 'sandbox'));
  });

  after(function() {
    fsx.removeSync(path.resolve(__dirname, 'fixtures', 'sandbox'));
  });

  it('when called with a valid directory, should remove it and all its contents', function() {

    Filesystem.rmrfSync({
      path: path.resolve(__dirname, 'fixtures', 'sandbox')
    }).execSync();

    // Verify that the directory was removed
    try {
      fsx.statSync(path.resolve(__dirname, 'fixtures', 'sandbox'));
      throw new Error('Directory should have been removed but it still exists!');
    } catch (e) {
      if (e.code !== 'ENOENT') { throw e; }
      // Otherwise, this is an ENOENT error, which is what we're looking for.
    }

  });

  it('when called with a non-existent directory, should fail silently', function() {

    Filesystem.rmrfSync({
      path: path.resolve(__dirname, 'fixtures', 'sandbox')
    }).execSync();

  });


});
