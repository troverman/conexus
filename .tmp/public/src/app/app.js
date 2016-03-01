angular.module( 'conexus', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'lodash',
    'ui.bootstrap',
    'templates-app',
    'services',
    'models',
    'conexus.about',
    'conexus.account',
    'conexus.connect',
    'conexus.header',
    'conexus.home',
    'conexus.intro',
    'conexus.login',
    'conexus.member',
    'conexus.post',
    'conexus.project',
    'conexus.projects',
    'conexus.register',
    'conexus.search'

])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $urlRouterProvider.when('/about/', '/about');
    $urlRouterProvider.when('/member/', '/member');
    $urlRouterProvider.when('/search/', '/search');
    $urlRouterProvider.when('/post/', '/post');


    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {
            window.location = '/';
        }
        else {
            // pass through to let the web server handle this request, run multiple apps etc
            window.location = $location.$$absUrl;
        }
    });
    $locationProvider.html5Mode(true);


})

.run( function run () {
    moment.locale('en');
})

.controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
    config.currentUser = window.currentUser;
});