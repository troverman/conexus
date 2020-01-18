module.exports = {


  friendlyName: 'Move (mv)',


  description: 'Move file or directory located at source path to the destination path.',


  inputs: {

    source: {
      example: '/Users/mikermcneil/.tmp/foo',
      required: true
    },

    destination: {
      example: '/Users/mikermcneil/.tmp/bar',
      required: true
    }

  },


  exits: {

    success: {
      description: 'Contents at source path were moved successfully to the destination.'
    },

    doesNotExist: {
      description: 'No file or folder could be found at the provided souce path.'
    }

  },


  fn: function(inputs, exits) {

    // Import `path` and `fs-extra`.
    var path = require('path');
    var fsx = require('fs-extra');

    // Ensure absolute paths.
    inputs.source = path.resolve(inputs.source);
    inputs.destination = path.resolve(inputs.destination);

    // Attempt to move the source file or folder to the destination.
    fsx.move(inputs.source, inputs.destination, function (err) {

      // If the move failed...
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
  },

};
