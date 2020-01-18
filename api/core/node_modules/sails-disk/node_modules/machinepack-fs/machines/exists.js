module.exports = {


  friendlyName: 'Does filepath exist?',


  description: 'Check whether a file or directory exists at the given path.',


  sideEffects: 'cacheable',


  inputs: {

    path: {
      example: '/Users/mikermcneil/.tmp/foo',
      description: 'The path to the file or directory to check.',
      extendedDescription: 'If a relative path is given, it will be resolved from the current working directory.',
      required: true
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'Filepath exists?',
      outputDescription: 'Whether or not there is a file or directory at the specified path.',
      outputExample: true
    },

  },

  fn: function (inputs, exits) {

    // Import `path` and `fs-extra`.
    var Path = require('path');
    var fsx = require('fs-extra');

    // Determine if the directory in question exists.
    // Use `stat` instead of the deprecated `exists`.
    fsx.stat(Path.resolve(process.cwd(),inputs.path), function(err) {

      // If an ENOENT error is returned, the file doesn't exist,
      // so we can return `false` through the `success` exit.
      if (err && err.code === 'ENOENT') {
        return exits.success(false);
      }

      // If some other error is returned, just forward it through
      // our `error` exit.
      if (err) {
        return exits.error(err);
      }

      // Otherwise return `true` through the `success` exit.
      return exits.success(true);
    });
  }


};


