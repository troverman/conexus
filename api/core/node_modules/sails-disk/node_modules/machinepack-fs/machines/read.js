module.exports = {


  friendlyName: 'Read file',


  description: 'Read a file on disk as a string.',


  extendedDescription: 'Assumes file contents are encoded using utf8.',


  sideEffects: 'cacheable',


  inputs: {

    source: {
      description: 'Absolute path to the source file (if relative path is provided, will resolve path from current working directory).',
      example: '/Users/mikermcneil/.tmp/foo',
      required: true
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'File contents',
      outputExample: 'stuff in a file!',
      outputDescription: 'The contents of the file at the specified `source` path.'
    },

    doesNotExist: {
      description: 'No file could be found at the provided `source` path.'
    },

    isDirectory: {
      description: 'The specified path pointed to a directory.'
    }

  },


  fn: function (inputs, exits) {

    // Import `path` and `fs`.
    var path = require('path');
    var fs = require('fs');

    // In case we ended up here w/ a relative path,
    // resolve it using the process's CWD.
    inputs.source = path.resolve(inputs.source);

    // Attempt to read the file at the specified path.
    fs.readFile(inputs.source, 'utf8', function (err, contents) {

      // It worked!  Return the file contents through the `success` exit.
      if (!err) {
        return exits.success(contents);
      }

      // If we got an ENOENT error, it means the file does not exits, so we'll
      // leave through the `doesNotExist` exit.
      if (err.code === 'ENOENT') {
        return exits.doesNotExist();
      }

      // If we got an EISDIR error, it means the path points to a directory, so
      // we'll leave through the `isDirectory` exit.
      if (err.code === 'EISDIR') {
        return exits.isDirectory();
      }

      // Some unrecognized error occurred, so we'll just forward it through
      // our `error` exit.
      return exits.error(err);

    });
  }
};
