angular.module( 'conexus.header', [
])

.controller( 'HeaderCtrl', function HeaderController( $scope, $state, config ) {
    $scope.currentUser = config.currentUser;

    var navItems = [
        {title: 'About', translationKey: 'navigation:about', url:'/about',cssClass: 'fa fa-info-circle'},
        {title: 'Project', translationKey: 'navigation:project', url:'/project/lol',cssClass: 'fa fa-info-circle'},
        {title: 'Post', translationKey: 'navigation:post', url:'/post',cssClass: 'fa fa-info-circle'},
        {title: 'Search', translationKey: 'navigation:search', url:'/search',cssClass: 'fa fa-search'}
    ];

    if (!$scope.currentUser) {
        navItems.push({title: 'Register', translationKey: 'navigation:register', url: '/register', cssClass: 'fa fa-briefcase'});
        navItems.push({title: 'Log in', translationKey: 'navigation:login', url: '/login', cssClass: 'fa fa-sign-in'});
    }

    $scope.navItems = navItems;
});