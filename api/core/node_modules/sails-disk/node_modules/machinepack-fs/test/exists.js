var assert = require('assert');
var path = require('path');
var Filesystem = require('../');

describe('machinepack-fs :: exists', function() {

  it('should return `true` through `success` for an existing folder.', function(done) {

    Filesystem.exists({
      path: path.resolve(__dirname, 'fixtures', 'files')
    }).switch({
      error: done,
      success: function(exists) {
        assert.equal(exists, true);
        return done();
      }
    });

  });

  it('should return `true` through `success` for an existing file.', function(done) {

    Filesystem.exists({
      path: path.resolve(__dirname, 'fixtures', 'files', 'alicemoji.png')
    }).switch({
      error: done,
      success: function(exists) {
        assert.equal(exists, true);
        return done();
      }
    });

  });

  it('should return `false` through `success` for an non-existent folder.', function(done) {

    Filesystem.exists({
      path: path.resolve(__dirname, 'fixtures', 'filesxxx')
    }).switch({
      error: done,
      success: function(exists) {
        assert.equal(exists, false);
        return done();
      }
    });

  });

  it('should return `true` through `success` for a non-existent folder.', function(done) {

    Filesystem.exists({
      path: path.resolve(__dirname, 'fixtures', 'files', 'alicemojixxx.png')
    }).switch({
      error: done,
      success: function(exists) {
        assert.equal(exists, false);
        return done();
      }
    });

  });

});
