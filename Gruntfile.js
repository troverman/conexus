module.exports = function(grunt) {
	// Load the include-all library in order to require all of our grunt
	// configurations and task registrations dynamically.
	var includeAll = require('include-all');
	function loadTasks(relPath) {return includeAll({dirname: require('path').resolve(__dirname, relPath), filter: /(.+)\.js$/ }) || {};}
	function invokeConfigFn(tasks) {for (var taskName in tasks) {if (tasks.hasOwnProperty(taskName)) {tasks[taskName](grunt);}}}
	var taskConfigurations = loadTasks('./tasks/config'), registerDefinitions = loadTasks('./tasks/register');
	invokeConfigFn(taskConfigurations);
	invokeConfigFn(registerDefinitions);
};