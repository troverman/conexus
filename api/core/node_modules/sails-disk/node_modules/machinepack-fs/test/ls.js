var assert = require('assert');
var path = require('path');
var fsx = require('fs-extra');
var Filesystem = require('../');
var _ = require('@sailshq/lodash');

describe('machinepack-fs :: ls', function() {

  before(function() {
    fsx.copySync(path.resolve(__dirname, 'fixtures' ,'files'), path.resolve(__dirname, 'fixtures', 'sandbox'));
    fsx.ensureSymlinkSync(
      path.resolve(__dirname, 'fixtures' ,'sandbox', 'some-folder', 'aliceball.jpg'),
      path.resolve(__dirname, 'fixtures' ,'sandbox', 'a-ball.jpg')
    );
    fsx.ensureFileSync(path.resolve(__dirname, 'fixtures' ,'sandbox', '.hiddenfile'));
  });

  after(function() {
    fsx.removeSync(path.resolve(__dirname, 'fixtures', 'sandbox'));
  });

  it('with depth:1, should only list the contents of the main folder (excluding hidden files)', function(done) {

    Filesystem.ls({
      dir: path.resolve(__dirname, 'fixtures', 'sandbox'),
      depth: 1
    }).switch({
      error: done,
      success: function(files) {
        var expectedFiles = [ 'alicemoji.png', 'hello.txt', 'some-folder', 'a-ball.jpg' ];
        assert.equal(files.length, expectedFiles.length);
        _.each(expectedFiles, function(file) {
          assert(_.contains(files, path.resolve(__dirname, 'fixtures', 'sandbox', file)));
        });
        return done();
      }
    });

  });

  it('with depth:1 and includeHidden:true, should only list the contents of the main folder (including hidden files)', function(done) {

    Filesystem.ls({
      dir: path.resolve(__dirname, 'fixtures', 'sandbox'),
      depth: 1,
      includeHidden: true
    }).switch({
      error: done,
      success: function(files) {
        var expectedFiles = [ 'alicemoji.png', 'hello.txt', 'some-folder', 'a-ball.jpg', '.hiddenfile' ];
        assert.equal(files.length, expectedFiles.length);
        _.each(expectedFiles, function(file) {
          assert(_.contains(files, path.resolve(__dirname, 'fixtures', 'sandbox', file)));
        });
        return done();
      }
    });

  });

  it('with depth:1 and includeDirs:false, should only list the contents of the main folder (excluding hidden files and dirs)', function(done) {

    Filesystem.ls({
      dir: path.resolve(__dirname, 'fixtures', 'sandbox'),
      depth: 1,
      includeDirs: false
    }).switch({
      error: done,
      success: function(files) {
        var expectedFiles = [ 'alicemoji.png', 'hello.txt', 'a-ball.jpg' ];
        assert.equal(files.length, expectedFiles.length);
        _.each(expectedFiles, function(file) {
          assert(_.contains(files, path.resolve(__dirname, 'fixtures', 'sandbox', file)));
        });
        return done();
      }
    });

  });

  it('with depth:1 and includeSymlinks:false, should only list the contents of the main folder (excluding hidden files and symlinks)', function(done) {

    Filesystem.ls({
      dir: path.resolve(__dirname, 'fixtures', 'sandbox'),
      depth: 1,
      includeSymlinks: false
    }).switch({
      error: done,
      success: function(files) {
        var expectedFiles = [ 'alicemoji.png', 'hello.txt', 'some-folder' ];
        assert.equal(files.length, expectedFiles.length);
        _.each(expectedFiles, function(file) {
          assert(_.contains(files, path.resolve(__dirname, 'fixtures', 'sandbox', file)));
        });
        return done();
      }
    });

  });

  it('with depth:2, should list the contents of the main folder and subfolder (excluding hidden files)', function(done) {

    Filesystem.ls({
      dir: path.resolve(__dirname, 'fixtures', 'sandbox'),
      depth: 2
    }).switch({
      error: done,
      success: function(files) {
        var expectedFiles = [ 'alicemoji.png', 'hello.txt', 'a-ball.jpg', 'some-folder', 'some-folder/aliceball.jpg'];
        assert.equal(files.length, expectedFiles.length);
        _.each(expectedFiles, function(file) {
          assert(_.contains(files, path.resolve(__dirname, 'fixtures', 'sandbox', file)));
        });
        return done();
      }
    });

  });

});
