module.exports = {


  friendlyName: 'List contents (ls)',


  description: 'List contents of a directory on the local filesystem.',


  sideEffects: 'cacheable',


  inputs: {

    dir: {
      friendlyName: 'Directory path',
      example: '/Users/mikermcneil/.tmp/foo',
      description: 'Path to the directory whose contents should be listed.',
      extendedDescription: 'If a relative path is provided, it will be resolved to an absolute path from the context of the current working directory.',
      required: true
    },

    depth: {
      description: 'The maximum number of "hops" (i.e. directories deep) to include directory contents from.',
      extendedDescription: 'For instance, if you are running `ls` on "foo/" which has a subdirectory "foo/bar/baz/", if `depth` is set to 2, the results will include "foo/bar/baz/", but none of the files/folders contained within.',
      example: 1,
      defaultsTo: 1
    },

    includeFiles: {
      friendlyName: 'Include files?',
      description: 'Whether or not to include files.',
      example: true,
      defaultsTo: true
    },

    includeDirs: {
      friendlyName: 'Include directories?',
      description: 'Whether or not to include directories.',
      example: true,
      defaultsTo: true
    },

    includeSymlinks: {
      friendlyName: 'Include symlinks?',
      description: 'Whether or not to include symbolic links.',
      example: true,
      defaultsTo: true
    },

    includeHidden: {
      friendlyName: 'Include hidden entries?',
      description: 'Whether or not to include hidden files/directories/symlinks.',
      example: false,
      defaultsTo: false
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'Directory contents',
      outputDescription: 'A list of the files and subdirectories contained in the specified directory.',
      outputExample: [
        '/Users/mikermcneil/.tmp/foo/.gitignore'
      ]
    },

    doesNotExist: {
      description: 'No directory was found at the specified directory path.'
    }

  },


  fn: function (inputs, exits) {

    // Import `path` and `walker`.
    var path = require('path');
    var Walker = require('walker');

    // Ensure we've got an absolute path.
    inputs.dir = path.resolve(inputs.dir);

    // Determine the depth of the top-level directory we're walking,
    // for comparison later on.
    var topLvlDirDepth = inputs.dir.split(path.sep).length;

    // Initialize the walker and teach it to skip walking directories
    // that are:
    // • deeper than requested, or
    // • hidden (if the `includeHidden` input is set to false).
    var walker = Walker(inputs.dir);
    walker.filterDir(function(dir/*, stat*/) {
      // Too deep.
      if (dir.split(path.sep).length > (topLvlDirDepth + inputs.depth)) {
        return false;
      }
      // Too hidden.
      if (path.basename(dir).match(/^\./) && !inputs.includeHidden) {
        return false;
      }
      return true;
    });

    // Accumulate results array by listing file, directory, and/or symlink
    // entries from the specified directory.
    var results = [];

    // If `inputs.includeFiles` is `true`, look for files.
    if (inputs.includeFiles) {
      walker.on('file', function (entry/*, stat*/) {
        // Add the new entry to our result list unless it is:
        //  • hidden (and the `includeHidden` input is set to false), or
        //  • too deep
        var tooHidden = path.basename(entry).match(/^\./) && !inputs.includeHidden;
        var tooDeep = entry.split(path.sep).length > (topLvlDirDepth + inputs.depth);
        if ( !tooHidden && !tooDeep  ) {
          results.push(entry);
        }
      });
    }

    // If `inputs.includeDirs` is `true`, look for directories.
    if (inputs.includeDirs) {
      walker.on('dir', function (entry/*, stat*/) {
        // If this is the top-level directory, exclude it.
        if (entry === inputs.dir) { return; }
        // Add the new entry to our result list unless it is:
        //  • hidden (and the `includeHidden` input is set to false)
        var tooHidden = path.basename(entry).match(/^\./) && !inputs.includeHidden;
        if ( !tooHidden ) {
          results.push(entry);
        }
      });
    }

    // If `inputs.includeSymlinks` is `true`, look for symbolic links.
    if (inputs.includeSymlinks) {
      walker.on('symlink', function (entry/*, stat*/) {
        // If this is the top-level directory, exclude it.
        if (entry===inputs.dir) { return; }
        // Add the new entry to our result list unless it is:
        //  • hidden (and the `includeHidden` input is set to false)
        var tooHidden = path.basename(entry).match(/^\./) && !inputs.includeHidden;
        if ( !tooHidden ) {
          results.push(entry);
        }
      });
    }

    // Declare a var to act as a spinlock, so that duplicate events can be ignored.
    var spinlock;

    // If we receive an `error` event from Walker...
    walker.on('error', function (err){
      // If the spinlock is already engaged, do nothing.
      if (spinlock) { return; }
      // Engage the spinlock.
      spinlock = true;
      // If the error was ENOENT, it means the requested directory does not exist,
      // so we'll return through the `doesNotExist` exit.
      if (err.code === 'ENOENT') {
        return exits.doesNotExist();
      }
      // Otherwise forward the unknown error through the `error` exit.
      return exits.error(err);
    });

    // If we receive a `done` event from Walker...
    walker.on('end', function (){
      // If the spinlock is already engaged, do nothing.
      if (spinlock) { return; }
      // Engage the spinlock.
      spinlock = true;
      // Return the accumulated directory contents through the `success` exit.
      return exits.success(results);
    });
  }
};


