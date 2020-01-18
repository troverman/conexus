module.exports = {


  friendlyName: 'Read JSON file',


  description: 'Read and parse JSON file located at source path on disk into usable data.',


  extendedDescription: 'Assumes file is encoded using utf8.',


  sideEffects: 'cacheable',


  inputs: {

    source: {
      description: 'Absolute path to the source file (if relative path is provided, will resolve path from current working directory).',
      example: '/Users/mikermcneil/.tmp/foo.json',
      required: true
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'JSON data',
      outputDescription: 'The JSON data parsed from the source file.',
      outputType: 'json'
    },

    doesNotExist: {
      description: 'No file could be found at the provided `source` path.'
    },

    couldNotParse: {
      description: 'Could not parse the file as JSON.'
    },

    isDirectory: {
      description: 'The specified path pointed to a directory.'
    }

  },


  fn: function (inputs, exits) {

    // Import this pack.
    var Filesystem = require('../');

    // Attempt to read the file at the specified path.
    Filesystem.read({
      source: inputs.source
    }).switch({
      // Forward errors through the appropriate exits.
      error: exits.error,
      doesNotExist: exits.doesNotExist,
      isDirectory: exits.isDirectory,
      // If the file was successfully read...
      success: function (contents){
        // Attempt to parse the file contents as JSON.
        var parsedData;
        try {
          parsedData = JSON.parse(contents);
        } catch (err) {
          return exits.couldNotParse(err);
        }

        // If the data was successfully parsed, push it through our `success` exit.
        return exits.success(parsedData);
      }
    });//_∏_
  }


};
