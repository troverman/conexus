module.exports = {


  friendlyName: 'Remove (rm)',


  description: 'Completely remove a file or directory (like rm -rf).',


  extendedDescription: 'If the provided path is a directory, all contents will be removed recursively. If nothing exists at the provided path, the success exit will be triggered, but nothing will be deleted.',


  sideEffects: 'idempotent',


  inputs: {

    path: {
      example: '/Users/mikermcneil/.tmp/foo',
      description: 'The absolute path to the file or directory to remove.',
      required: true
    }

  },


  exits: {

    success: {
      description: 'The specified file or directory was removed.'
    }

  },

  fn: function (inputs, exits) {

    // Import `path` and `fs-extra`.
    var path = require('path');
    var fsx = require('fs-extra');

    // Ensure absolute path.
    inputs.path = path.resolve(inputs.path);

    // Attempt to remove the path and all its descendents.
    fsx.remove(inputs.path, function(err) {
      // Return any errors through the `error` exit.
      if (err) {return exits.error(err);}
      // If successful, return through the `success` exit.
      return exits.success();
    });
  }
};


