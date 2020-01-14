"use strict";
var fs              = require('./fs-promise');
var loremIpsum      = require('lorem-ipsum');
var path            = require('path');
var randomString    = require('randomstring');
var randomWord      = require('random-word');
var schemata        = require('object-schemata');

/**
 * Generate a random file structure according to the configuration.
 * @param {object} configuration
 * @returns {Promise}
 */
module.exports = function(configuration) {
  var config = rfsSchema.normalize(configuration);
  var promise;
  var result = {
    added: [],
    deleted: [],
    errors: []
  };

  promise = config.wipe ? rmdir(config.path, result) : Promise.resolve();

  return promise
    .catch(function(e) {
      if (e.code === 'ENOENT' && e.errno === -2) return;
      result.errors.push('[DIR]  Could not wipe directory: ' + config.path + '\n' + e.stack);
    })
    .then(function() {
      var i;
      var promises = [];

      for (i = 0; i < config.number; i++) {
        (function(){
          var ar;
          var content;
          var depth;
          var directories = {};
          var dirPath;
          var filepath;
          var index;
          var j;
          var name;
          var promise;

          depth = Math.round(Math.random() * config.depth);

          //generate the directory path
          dirPath = [];
          for (j = 0; j < depth; j++) {
            if (directories.hasOwnProperty('' + j)) {
              ar = directories['' + j];
              index = Math.ceil(Math.random() * ar.length);
              if (index === ar.length) {
                name = randomName(2);
                ar.push(name);
              } else {
                name = ar[index];
              }
            } else {
              name = randomName(2);
              directories['' + j] = [name];
            }
            dirPath.push(name);
          }
          dirPath = dirPath.join(path.sep);

          //generate content
          content = loremIpsum({
            count: Math.round(Math.random() * 15) + 3,
            units: 'paragraphs'
          });

          //generate the file path
          filepath = path.resolve(process.cwd(), config.path, dirPath, randomName(2)) + '.' +
              randomString.generate({ length: Math.ceil(Math.random() * 2) + 1, charset: 'alphabetic' }).toLowerCase();

          //write the file
          promise = addFile(filepath, content, result);
          promises.push(promise);
        })();
      }

      return Promise.all(promises)
          .then(function() {
            result.added.sort(sortResultSet);
            result.deleted.sort(sortResultSet);
            result.errors.sort(sortResultSet);
            result.log = logReport;
            return result;
          });

    });
};

module.exports.wipe = function(path) {
  var result = {
    added: [],
    deleted: [],
    errors: []
  };
  return rmdir(path, result)
    .catch(function() {})
    .then(function() {
      return result;
    });
};


var rfsSchema = schemata({
  depth: {
    description: 'The deepest number of sub-directories to create.',
    defaultValue: 2,
    help: 'This must be a non-negative number.',
    transform: Math.round,
    validate: nonNegative
  },
  number: {
    description: 'The number of files to generate.',
    defaultValue: 25,
    help: 'This must be a non-negative number.',
    transform: Math.round,
    validate: nonNegative
  },
  path: {
    description: 'The directory where the random file structure should be stored.',
    help: 'This must be a string.',
    validate: function(value, is) {
      return is.string(value) && value;
    },
    required: true
  },
  wipe: {
    description: 'Whether to wipe the current file structure at that directory.',
    defaultValue: false,
    transform: function(value) {
      return !!value;
    }
  }
});

// add a file at the specified path
function addFile(filepath, content, result) {
  var dirPath = path.dirname(filepath);
  return mkdir(dirPath, result)
    .then(function() {
      return fs.writeFileAsync(filepath, content, 'utf8');
    })
    .then(function() {
      result.added.push('[FILE] ' + filepath);
    })
    .catch(function(e) {
      result.errors.push('[FILE] Could not add file: ' + filepath + '\n' + e.stack);
    });
}

function logReport(verbose) {
  var result = this;

  console.log('');

  summary(result, 'added',   'Added   ');
  summary(result, 'deleted', 'Deleted ');
  summary(result, 'errors',  'Errors  ');

  if (verbose) {
    if (result.deleted.length > 0) console.log('\nDeleted:\n  ' + result.deleted.join('\n  '));
    console.log('\nAdded:\n  ' + result.added.join('\n  '));
    if (result.errors.length > 0) console.error('\nErrors:\n  ' + result.errors.join('\n  '));
  }

  console.log('');

  function summary(data, key, prefix) {
    var str = prefix + ' ';
    str += countType(data[key], 'FILE') + ' files / ';
    str += countType(data[key], 'DIR') + ' directories.';
    console.log(str);
  }

  function countType(data, type) {
    return data
        .filter(function(log) {
          return log.indexOf('[' + type + ']') === 0;
        })
        .length;
  }
}

// make a directory and it's sub directories
function mkdir(filepath, result) {
  return fs.mkdirAsync(filepath)
    .then(function() {
      result.added.push('[DIR]  ' + filepath);
    })
    .catch(function(e) {
      if (e.code === 'EEXIST' && e.errno === -17) return;
      if (e.code === 'ENOENT' && e.errno === -2) {
        return mkdir(path.dirname(filepath), result)
            .then(function() {
              return fs.mkdirAsync(filepath)
            })
            .then(function() {
              result.added.push('[DIR]  ' + filepath);
            })
            .catch(function(e) {
              if (e.code === 'EEXIST') return;
              result.errors.push('[DIR]  Could not make directory: ' + filepath);
            });
      }
      throw e;
    });
}

function nonNegative(value, is) {
  return !is.nan(value) && is.number(value) && value >= 0;
}

// get a random name
function randomName(wordCount) {
  var result = [];
  while (wordCount-- > 0) {
    result.push(randomWord());
  }
  return result.join('-');
}

// remove a directory and all of its contents
function rmdir(filepath, result) {
  return fs.readdirAsync(filepath)
    .then(function(filepaths) {
      var promises = [];
      filepaths.forEach(function(fp) {
        var absPath = path.resolve(filepath, fp);
        var promise = fs.statAsync(absPath)
          .then(function(stat) {
            if (stat.isDirectory()) {
              return rmdir(absPath, result);
            } else {
              return fs.unlinkAsync(absPath)
                .then(function() {
                  result.deleted.push('[FILE] ' + absPath);
                });
            }
          });
        promises.push(promise);
      });
      return Promise.all(promises)
        .then(function() {
          return fs.rmdirAsync(filepath)
            .then(function() {
              result.deleted.push('[DIR]  ' + filepath);
            })
            .catch(function(e) {
              result.errors.push('[DIR]  ' + 'Could not delete directory: ' + filepath);
            });
        });
    });
}

function sortResultSet(a, b) {
  return a.substr(7) < b.substr(7) ? -1 : 1;
}