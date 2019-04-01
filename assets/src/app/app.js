angular.module( 'conexus', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'duScroll',
    'chart.js',
    'lodash',
    'ui.bootstrap',
    'nemLogging',
    'uiGmapgoogle-maps',
    'templates-app',
    'services',
    'models',
    'nvd3',
    'ngFileUpload',
    'ngMaterial',
    'highcharts-ng',
    'ngTagsInput',
    'angular-fullcalendar',
    'textAngular',
    'toaster',
    'ngAnimate',
    'hljs',
    'froala',
    'conexus.about',
    'conexus.account',
    'conexus.apps',
    //'conexus.association',
    'conexus.block',
    'conexus.content',
    'conexus.contentList',
    'conexus.developers',
    'conexus.discover',
    'conexus.footer',
    'conexus.market',
    'conexus.markets',
    'conexus.marketPair',
    'conexus.marketPlace',
    'conexus.members',
    'conexus.notifications',
    'conexus.nav',
    'conexus.home',
    'conexus.item',
    'conexus.login',
    'conexus.member',
    'conexus.order',
    'conexus.project',
    'conexus.projects',
    'conexus.reaction',
    'conexus.register',
    'conexus.search',
    'conexus.task',
    'conexus.tasks',
    'conexus.token',
    'conexus.time',
    'conexus.transaction',
    'conexus.transparency',
    'conexus.tx',
    'conexus.validation',
    'conexus.view'
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
    $rootScope.currentUser = window.currentUser;

    //ROOTSCOPE DEPRECIATE CONFIG

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