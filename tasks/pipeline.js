/**
 * grunt/pipeline.js
 *
 */
console.log('PIPELINE???')
var cssFilesToInject = [
  'bower_components/nvd3/build/nv.d3.css',
  'bower_components/bootstrap/dist/css/bootstrap.min.css',
  'bower_components/angular-material/angular-material.css',
  'bower_components/textAngular/dist/textAngular.css',
  'bower_components/highcharts-ng/dist/highcharts-ng.css',
  'bower_components/ng-tags-input/ng-tags-input.css',
  'bower_components/angular-slider/dist/rzslider.css',
  'bower_components/fullcalendar/dist/fullcalendar.css',
  'bower_components/angularjs-toaster/toaster.min.css',
  'bower_components/highlight/styles/atom-one-dark-reasonable.css',//a11y-dark, agate, tomorrow-night, railscasts, kimbie.dark, atom-one-dark-reasonable
  'bower_components/fontawesome/css/all.min.css',
  'styles/**/*.css',
];

var jsFilesToInject = [
  'bower_components/jquery/dist/jquery-3.1.0.min.js',
  'bower_components/angular/angular.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js',
  'bower_components/sails.io.js/dist/sails.io.js',
  'bower_components/angularSails/dist/ngsails.io.js',
  'bower_components/lodash/lodash.js',
  'bower_components/moment/moment.js',
  'bower_components/fullcalendar/dist/fullcalendar.min.js',
  'bower_components/angular-simple-logger/dist/angular-simple-logger.js',
  'bower_components/angular-scroll/angular-scroll.js',
  'bower_components/angular-google-maps/dist/angular-google-maps.js',
  'bower_components/angular-moment/angular-moment.js',
  'bower_components/highlight/highlight.pack.js',
  'bower_components/angular-highlightjs/angular-highlightjs.min.js',

  'bower_components/cytoscape/dist/cytoscape.min.js',
  'bower_components/cytoscape/dist/plugin/cola.v3.min.js',
  'bower_components/cytoscape/dist/plugin/cytoscape-cola.js',
  'bower_components/ngCytoscape/dist/ngCytoscape.js',

  //'bower_components/MathJax/MathJax.js',
  'bower_components/ASCIIMathML/ASCIIMathML.js',

  'bower_components/d3/d3.js',
  'bower_components/nvd3/build/nv.d3.js',
  'bower_components/angular-nvd3/dist/angular-nvd3.js',

  'bower_components/Chart.js/Chart.min.js',
  'bower_components/angular-chart.js/dist/angular-chart.js',
  'bower_components/angular-animate/angular-animate.min.js',
  'bower_components/angular-aria/angular-aria.min.js',
  'bower_components/angular-material/angular-material.js',
  
  'bower_components/ng-file-upload/ng-file-upload.min.js',
  'bower_components/textAngular/dist/textAngular-rangy.min.js',
  'bower_components/textAngular/dist/textAngular-sanitize.min.js',
  'bower_components/textAngular/dist/textAngular.min.js',
  'bower_components/ng-tags-input/ng-tags-input.js',
  'bower_components/angular-fullcalendar/dist/angular-fullcalendar.min.js',
  'bower_components/web3/dist/web3.min.js',

  'bower_components/angularjs-toaster/toaster.min.js',

  'bower_components/highcharts/highstock.js',
  'bower_components/highcharts/modules/parallel-coordinates.js',
  'bower_components/highcharts/highcharts-more.js',

  'bower_components/highcharts/indicators/indicators.js',
  
  //'bower_components/highcharts/indicators/bollinger-bands.js',
  //'bower_components/highcharts/indicators/stochastic.js',

  'bower_components/highcharts-ng/dist/highcharts-ng.js',

  // All of the rest of your app scripts
  'src/**/*.js'
];

module.exports.jsFilesToInjectNoPathChange = jsFilesToInject;

// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  // 'templates/**/*.html'
  'src/**/*.tpl.html'
];

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});