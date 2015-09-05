angular.module( 'conexus.search', [
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'search', {
        url: '/search',
        views: {
            "main": {
                controller: 'SearchController',
                templateUrl: 'search/index.tpl.html'
            }
        }
    });
})

.controller( 'SearchController', function SearchController( $scope, lodash, config, titleService ) {
    titleService.setTitle('Search');
});