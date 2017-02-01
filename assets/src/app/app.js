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
    //'ngMaterial',
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

.controller( 'AppCtrl', function AppCtrl ( $rootScope, $scope, config ) {
    config.currentUser = window.currentUser;
    $rootScope.$on('$stateChangeStart',function(){
        $rootScope.stateIsLoading = true;
    });
    $rootScope.$on('$stateChangeSuccess',function(){
        $rootScope.stateIsLoading = false;
    });
});