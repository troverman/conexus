module.exports = {


  friendlyName: 'Write file',


  description: 'Generate a file on the local filesystem using the specified utf8 string as its contents.',


  sideEffects: 'idempotent',


  inputs: {

    destination: {
      description: 'Path (relative or absolute) to the file to write.',
      example: '/Users/mikermcneil/.tmp/bar',
      required: true
    },

    string: {
      description: 'The data to write to the file as text (if omitted, will create an empty file).',
      type: 'string',
      example: 'lots of words, utf8 things you know',
      defaultsTo: ''
    },

    force: {
      description: 'Overwrite files or directories which might exist at (or within) the destination path?',
      type: 'boolean',
      defaultsTo: false
    }

  },


  exits: {

    success: {
      description: 'File written successfully.'
    },

    alreadyExists: {
      description: 'An existing file / folder was found at the specified path (overwrite by enabling the `force` input).'
    },

  },


  fn: function (inputs, exits) {

    // Import `path` and `fs-extra`.
    var path = require('path');
    var fsx = require('fs-extra');

    // Import this pack
    var Filesystem = require('../');

    // In case we ended up here w/ a relative path,
    // resolve it using the process's CWD
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
        if (err) { return exits(err); }

        // Now write the file to disk.
        fsx.outputFile(inputs.destination, inputs.string, function(err) {
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
