angular.module( 'conexus', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'chart.js',
    'lodash',
    'ui.bootstrap',
    'nemLogging',
    'uiGmapgoogle-maps',
    'templates-app',
    'services',
    'models',
    'ngFileUpload',
    'ngMaterial',
    'highcharts-ng',
    'textAngular',
    'conexus.about',
    'conexus.account',
    'conexus.content',
    'conexus.contentList',
    'conexus.discover',
    'conexus.footer',
    'conexus.market',
    'conexus.markets',
    'conexus.marketPair',
    'conexus.marketPlace',
    'conexus.members',
    'conexus.nav',
    'conexus.home',
    'conexus.intro',
    'conexus.item',
    'conexus.login',
    'conexus.member',
    'conexus.order',
    'conexus.project',
    'conexus.projects',
    'conexus.register',
    'conexus.search',
    'conexus.task',
    'conexus.tasks',
    'conexus.transaction',
    'conexus.transparency',
    'conexus.work'
])
.config(['$locationProvider', '$mdThemingProvider', '$stateProvider', '$urlRouterProvider', function myAppConfig ( $locationProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider ) {
    //$mdThemingProvider.theme('default').primaryPalette('blue-grey').accentPalette('blue')
    $mdThemingProvider.disableTheming();
    $urlRouterProvider.rule(function($injector, $location) {
        var path = $location.path();
        var hasTrailingSlash = path[path.length-1] === '/';
        if(hasTrailingSlash) {
            var newPath = path.substr(0, path.length - 1); 
            return newPath; 
        } 
    });
    if (window.location.hash && window.location.hash == '#_=_') {
        window.location.hash = '';
    }
    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {window.location = '/';}
        else {window.location = $location.$$absUrl;}
    });
    $locationProvider.html5Mode(true);
}])
.run( function run () {
    moment.locale('en');
})
.controller( 'AppCtrl', ['$rootScope', '$scope', 'config', function AppCtrl ( $rootScope, $scope, config ) {
    config.currentUser = window.currentUser;
    $rootScope.$on('$stateChangeStart',function(){
        $rootScope.stateIsLoading = true;
    });
    $rootScope.$on('$stateChangeSuccess',function(){
        $rootScope.stateIsLoading = false;
    });
}])
.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
});