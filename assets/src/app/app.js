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


},

function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDiHDaKzLj54Fc3gsI4Fd3KPKpWAJCkgO0',
        v: '3.17',
        libraries: 'weather,geometry'
    });
}

)

.run( function run () {
    moment.locale('en');
})

.controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
    config.currentUser = window.currentUser;
});