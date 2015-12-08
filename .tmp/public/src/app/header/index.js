angular.module( 'conexus.header', [
])

.controller( 'HeaderCtrl', function HeaderController( $scope, $state, config ) {
    $scope.currentUser = config.currentUser;

    var navItems = [
        {title: 'About', translationKey: 'navigation:about', url:'/about',cssClass: 'fa fa-info-circle'},
        {title: 'Connect', translationKey: 'navigation:project', url:'/',cssClass: 'fa fa-random'},
        {title: 'Projects', translationKey: 'navigation:project', url:'/projects',cssClass: 'fa fa-info-circle'},
        {title: 'Search', translationKey: 'navigation:search', url:'/search',cssClass: 'fa fa-search'}
    ];

    if ($scope.currentUser) {
        navItems.push({title: 'Logout', translationKey: 'navigation:logout', url: '/logout', cssClass: 'fa fa-sign-out'});
    };

    if (!$scope.currentUser) {
        navItems.push({title: 'Register', translationKey: 'navigation:register', url: '/register', cssClass: 'fa fa-briefcase'});
        navItems.push({title: 'Log in', translationKey: 'navigation:login', url: '/login', cssClass: 'fa fa-sign-in'});
    };

    $scope.navItems = navItems;
});