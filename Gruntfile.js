/**
 * Gruntfile
 *
 */

module.exports = function(grunt) {


	var includeAll;
	try {
		includeAll = require('include-all');
	} catch (e0) {
		try {
			includeAll = require('sails/node_modules/include-all');
		}
		catch(e1) {
			console.error('Could not find `include-all` module.');
			console.error('Skipping grunt tasks...');
			console.error('To fix this, please run:');
			console.error('npm install include-all --save`');
			console.error();
			grunt.registerTask('default', []);
			return;
		}
	}

	function loadTasks(relPath) {
		return includeAll({
			dirname: require('path').resolve(__dirname, relPath),
			filter: /(.+)\.js$/
		}) || {};
	}

	function invokeConfigFn(tasks) {
		for (var taskName in tasks) {
			if (tasks.hasOwnProperty(taskName)) {
				tasks[taskName](grunt);
			}
		}
	}

	var taskConfigurations = loadTasks('./tasks/config'),
		registerDefinitions = loadTasks('./tasks/register');

	if (!registerDefinitions.default) {
		registerDefinitions.default = function (grunt) { grunt.registerTask('default', []); };
	}

	invokeConfigFn(taskConfigurations);
	invokeConfigFn(registerDefinitions);

};
