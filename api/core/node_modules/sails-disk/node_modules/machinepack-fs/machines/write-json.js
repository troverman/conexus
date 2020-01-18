module.exports = {


  friendlyName: 'Write JSON file',


  description: 'Write some data to the specified destination path on disk.',


  extendedDescription: 'Assumes file is encoded using utf8.',


  sideEffects: 'idempotent',


  inputs: {

    destination: {
      example: '/Users/mikermcneil/.tmp/bar.json',
      description: 'Absolute path for the destination file (if relative path is provided, will resolve path from current working directory).',
      required: true
    },

    json: {
      example: '*',
      description: 'The data to write to disk as JSON.',
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
      description: 'JSON file written successfully.'
    },

    alreadyExists: {
      description: 'An existing file or folder was found at the specified destination.  Use `force` to overwrite.'
    },

  },


  fn: function (inputs, exits) {

    // Import `path` and `fs-extra`.
    var path = require('path');
    var fsx = require('fs-extra');

    // Import this pack
    var Filesystem = require('../');

    // In case we ended up here w/ a relative path,
    // resolve it using the process's CWD.
    inputs.destination = path.resolve(inputs.destination);

    // Determine whether the destination already exists.
    Filesystem.exists({path: inputs.destination}).exec(function(err, exists) {

      // If an error occurred checking for file existence, forward it through
      // our `error` exit.
      if (err) {return exits.error(err);}

      // If one exists, and the `force` flag is not set, leave
      // through the `alreadyExists` exit.
      if (exists && !inputs.force) {
        return exits.alreadyExists();
      }

      // Delete existing files and/or directories if necessary.
      (function _deleteExistingFilesAndOrDirsIfNecessary(next) {
        // If nothing was there, continue.
        if (!exists) {
          return next();
        }
        // Otherwise attempt to remove the existing file / folder.
        else {
          fsx.remove(inputs.destination, next);
        }
      })(function nowWriteFileToDisk(err){

        // If there was an error removing the existing file / folder,
        // forward it to our `error` exit.
        if (err) { return exits.error(err); }

        // Now write the JSON file to disk.
        fsx.outputJson(inputs.destination, inputs.json, function(err) {
          // If there was an error writing the file,
          // forward it to our `error` exit.
          if (err) { return exits.error(err); }

          // Writing was successful, so leave through the `success` exit.
          return exits.success();
        });

      });//</after deleting existing file(s)/dir(s) if necessary>
    });//</Filesystem.exists()>
  }


};
