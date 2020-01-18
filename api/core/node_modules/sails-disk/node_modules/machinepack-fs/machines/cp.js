module.exports = {


  friendlyName: 'Copy (cp)',


  description: 'Copy file or directory located at source path to the destination path.',


  extendedDescription:
  'All descendant files and directories will be copied (kind of like `cp -r`).\n'+
  'But beware: any existing files or subdirectories at the destination path will be overwritten!',


  inputs: {

    source: {
      example: '/Users/mikermcneil/.tmp/foo',
      description: 'The path (relative or absolute) to the file or directory to copy.',
      required: true
    },

    destination: {
      example: '/Users/mikermcneil/.tmp/bar',
      description: 'The path (relative or absolute) to the directory in which to place the copied file(s).',
      extendedDescription: 'When copying a single file, a target filename may be specified in this path.',
      required: true
    }

  },


  exits: {

    doesNotExist: {
      description: 'No file or folder could be found at the provided source path.'
    }

  },

  fn: function (inputs, exits) {

    // Import `path` and `fs-extra`.
    var path = require('path');
    var fsx = require('fs-extra');

    // Attempt to copy the source file or directory to the destination.
    fsx.copy(path.resolve(inputs.source), path.resolve(inputs.destination), function (err) {

      // If the copy failed...
      if (err) {
        // If we got an ENOENT error, return out of the `doesNotExist` exit.
        if (err.code === 'ENOENT') {
          return exits.doesNotExist();
        }
        // Otherwise return the unknown error out of our `error` exit.
        return exits.error(err);
      }

      // Otherwise return through the `success` exit.
      return exits.success();
    });
  }
};
