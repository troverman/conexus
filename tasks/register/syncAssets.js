module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'html2js:dev',
		'sync:dev',
	]);
};
