module.exports = function(grunt) {
  var loadGruntTasks = require('sails-hook-grunt/accessible/load-grunt-tasks');
  loadGruntTasks(__dirname, grunt);
};