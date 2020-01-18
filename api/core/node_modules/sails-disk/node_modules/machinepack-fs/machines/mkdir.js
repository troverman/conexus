module.exports = {


  friendlyName: 'Make directory (mkdir)',


  description: 'Make a new directory.',


  inputs: {

    destination: {
      description: 'The destination path where the new directory should be created.',
      extendedDescription: 'If a relative path is provided, it will be resolved to an absolute path using the current working directory.',
      example: '/Users/mikermcneil/.tmp/bar',
      required: true
    },

    force: {
      description: 'Overwrite files or directories which might exist at or within the specified destination path?',
      example: false,
      defaultsTo: false
    }

  },


  exits: {

    success: {
      description: 'New directory was created successfully.'
    },

    alreadyExists: {
      description: 'Something already existed at the specified path (overwrite by enabling the `force` input).'
    }

  },


  fn: function (inputs, exits) {

    // Import `path` and `fs-extra`.
    var path = require('path');
    var fsx = require('fs-extra');

    // Import this pack.
    var Filesystem = require('../');

    // In case we ended up here w/ a relative path,
    // resolve it using the process's CWD.
    inputs.destination = path.resolve(inputs.destination);

    // Determine whether the destination already exists.
    Filesystem.exists({path: inputs.destination}).exec(function(err, exists) {

      // If an error occurred checking for file existence, forward it through
      // our `error` exit.
      if (err) {return exits.error(err);}

      // If so, and we're `inputs.force` is not specified, return through
      // the `alreadyExists` exit.
      if (exists && !inputs.force) {
        return exits.alreadyExists();
      }

      // Delete existing files and/or directories if necessary.
      (function _deleteExistingFilesAndOrDirsIfNecessary(next) {
        // If the directory doesn't already exist, there's nothing to delete.
        if (!exists) {
          return next();
        }
        // Otherwise remove the directory and all its contents before continuing.
        else {
          fsx.remove(inputs.destination, next);
        }
      })(function nowWriteFileToDisk(err){
        // If there was any error removing the directory, forward it to our `error` exit.
        if (err) { return exits.error(err); }

        // Now create the directory on disk.
        fsx.mkdirs(inputs.destination, function(err) {

          // If there was any error creating the directory, forward it to our `error` exit.
          if (err) { return exits.error(err); }

          // Return through our `success` exit.
          return exits.success();

        });

      });//</after deleting existing file(s)/dir(s) if necessary>
    });//</Filesystem.exists()>
  }


};
