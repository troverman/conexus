module.exports = {


  friendlyName: 'Ensure directory',


  description: 'Ensure that the directory exists. If the directory structure does not exist, it is created.',


  sideEffects: 'cacheable',


  inputs: {

    path: {
      example: '/foo/bar/baz',
      description: 'The path to ensure- if nothing exists, a directory will be created here.',
      extendedDescription: 'If a relative path is provided, it will be resolved to an absolute path using the current working directory.',
      required: true
    }

  },


  exits: {

    success: {
      description: 'Either a directory already existed, or was just created, at the specified path.'
    }

  },


  fn: function(inputs, exits) {

    // Import `path` and `fs-extra`.
    var path = require('path');
    var fsx = require('fs-extra');

    // In case we ended up w/ a relative path, make it absolute.
    inputs.path = path.resolve(inputs.path);

    // Attempt to ensure the directory.
    fsx.ensureDir(inputs.path, function(err) {

      // Forward any errors through our `error` exit.
      if (err) {return exits.error(err);}

      // Otherwise return through the `success` exit.
      return exits.success();

    });

  }


};
