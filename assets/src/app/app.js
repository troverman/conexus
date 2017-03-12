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
    'conexus.about',
    'conexus.account',
    'conexus.connect',
    'conexus.footer',
    'conexus.nav',
    'conexus.home',
    'conexus.intro',
    'conexus.login',
    'conexus.member',
    'conexus.post',
    'conexus.project',
    'conexus.projects',
    'conexus.register',
    'conexus.stream',
    'conexus.search',
    'conexus.transparency'
])
.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider ) {
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
    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {window.location = '/';}
        else {window.location = $location.$$absUrl;}
    });
    $locationProvider.html5Mode(true);
})
.run( function run () {
    moment.locale('en');
})
.controller( 'AppCtrl', function AppCtrl ( $rootScope, $scope, config ) {
    config.currentUser = window.currentUser;
    $rootScope.$on('$stateChangeStart',function(){
        $rootScope.stateIsLoading = true;
    });
    $rootScope.$on('$stateChangeSuccess',function(){
        $rootScope.stateIsLoading = false;
    });
});