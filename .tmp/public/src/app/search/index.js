angular.module( 'conexus.search', [
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'search', {
        abstract: true,
        url: '/search',
        views: {
            "main": {
                templateUrl: 'search/index.tpl.html'
            }
        }
    })
    .state( 'search.index', {
        url: '',
        views: {
            "search": {
                controller: 'SearchController',
                templateUrl: 'search/index.tpl.html'
            }
        },
        resolve: {
            searchResults: function(SearchModel) {
                return SearchModel.search('index');
            }
        }
    })
    .state( 'search.query', {
        url: '/:searchQuery',
        views: {
            "search": {
                controller: 'SearchController',
                templateUrl: 'search/index.tpl.html'
            }
        },
        resolve: {
            searchResults: function(SearchModel, $stateParams) {
                return SearchModel.search($stateParams.searchQuery);
            }
         }
    });
})

.controller( 'SearchController', function SearchController( $scope, lodash, config, titleService, searchResults, SearchModel ) {
    titleService.setTitle('Search');
    $scope.searchResults = searchResults;
    console.log("searchin");
});