module.exports = function (grunt) {

  /**
   * Configuration.
   */

  grunt.initConfig({
    uglify: {
      default: {
        options: {
          preserveComments: 'some',
          sourceMap: 'angular-ckeditor.min.map',
          sourceMappingURL: 'angular-ckeditor.min.map'
        },
        files: {
          'angular-ckeditor.min.js': 'angular-ckeditor.js'
        }
      }
    }
  });

  /**
   * Tasks.
   */

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};