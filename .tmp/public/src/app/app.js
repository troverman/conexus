angular.module( 'conexus', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'lodash',
    'ui.bootstrap',
    'templates-app',
    'services',
    'models',
    'conexus.header',
    'conexus.home',
    'conexus.about',
    'conexus.member',
    'conexus.messages',
    'conexus.post',
    'conexus.search'

])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $urlRouterProvider.when('/about/', '/about');
    $urlRouterProvider.when('/messages/', '/messages');
    $urlRouterProvider.when('/member/', '/member');
    $urlRouterProvider.when('/search/', '/search');
    $urlRouterProvider.when('/post/', '/post');


    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {
            window.location = '/';
        }
        else {
            // pass through to let the web server handle this request
            window.location = $location.$$absUrl;
        }
    });

    /*$routeProvider.when("/", {
        templateUrl: "/home/index.tpl.html",
        controller: "HomeCtrl"
    }).when("/about", {
        templateUrl: "/about/index.tpl.html",
        controller: "AboutCtrl"
    }).when("/messages", {
        templateUrl: "/messages/index.tpl.html",
        controller: "MessagesController"
    }).when("/member", {
        templateUrl: "/member/index.tpl.html",
        controller: "MemberCtrl"
    }).otherwise({
        redirectTo: "/"
    });*/
    $locationProvider.html5Mode(true);


})

.run( function run () {
    moment.locale('en');
})

.controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
    config.currentUser = window.currentUser;
});