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
        },
        resolve: {
            searchResults: function(SearchModel, $stateParams) {
                //return SearchModel.search($stateParams.searchQuery);
                return [1,2,3,4,5,6,7,8];
            }
        }
    });
})

.controller( 'SearchController', function SearchController( $scope, lodash, config, titleService, searchResults, SearchModel ) {
    titleService.setTitle('Search');
    $scope.searchResults = searchResults;
});