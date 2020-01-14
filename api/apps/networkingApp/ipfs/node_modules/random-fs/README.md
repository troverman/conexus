# random-fs

This tool will create a random file system structure according to parameters that you specify. There is a plugable module as well as a command line tool.

## Installation

You can install this program locally or globally:

**Local Install**
```sh
$ npm install random-fs
```
**Global Install**
```sh
$ npm install -g random-fs
```

## Command Line Tool

After installing the module globally, call random-fs without any arguments (or with --help) to get help on how to use the command. Note that the *path* is required.

```sh
$ random-fs --help

  Usage: random-fs [options] <path>

  Options:

    -h, --help        output usage information
    -V, --version     output the version number
    -c, --confirm     Use this flag to confirm wipe without additional prompt.
    -d, --depth <n>   The maximum depth of sub-directories.
    -n, --number <n>  The number of files to create.
    -v, --verbose     The amount of detail you want in the report.
    -w, --wipe        Wipe the directory before creating new random files.
```

## Module Usage Example

You can also use this module from within your own code. The *path* option is the only required option.

```js
var randomFs    = require('random-fs');
randomFs({ path: './temp', depth: 3, number: 100, wipe: true })
    .then(function(result) {
        result.log();
    })
```

 Calling the library will return a promise that has the following structure:

 ```js
 {
    added: [],      //an array of added items and their add type
    deleted: [],    //an array of deleted items and their delete type
    errors: [],     //an array of errored items and their type
    log: function(verbose) { ... }     //a function that will log results to the console
 }
 ```