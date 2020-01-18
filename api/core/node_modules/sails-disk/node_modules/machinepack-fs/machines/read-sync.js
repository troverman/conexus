module.exports = {


  friendlyName: 'Read file (sync)',


  description: 'Read a file on disk as a string.',


  extendedDescription: 'Assumes file contents are encoded using utf8. This machine should **NEVER** be used in request handling code!',


  sync: true,


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
      outputExample: 'stuff in a file!',
      outputFriendlyName: 'File contents',
      outputDescription: 'The contents of the file at the `source` path.'
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

    // Declare a var to contain the contents of the file
    // we're trying to read.
    var contents;

    // Attempt to read the file contents synchronously.
    try {
      contents = fs.readFileSync(inputs.source, 'utf8');
      // It worked!  Return the contents through the `success` exit.
      return exits.success(contents);
    }

    // If there was an error...
    catch (e) {
      // If it was a "file not found", leave through the `doesNotExist` exit.
      if (e.code === 'ENOENT') {
        return exits.doesNotExist();
      }
      // If we got an EISDIR error, it means the path points to a directory, so
      // we'll leave through the `isDirectory` exit.
      if (e.code === 'EISDIR') {
        return exits.isDirectory();
      }
      // Otherwise output the unrecognized error through the `error` exit.
      return exits.error(e);
    }
  }

};
