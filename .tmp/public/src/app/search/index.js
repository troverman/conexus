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
                return SearchModel.search('');
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

.controller( 'SearchController', function SearchController( $scope, lodash, config, titleService, searchResults, SearchModel, $stateParams ) {
    titleService.setTitle('Search');
    $scope.searchResults = searchResults;
    $scope.searchQuery = $stateParams.searchQuery;

    $scope.keyPress = function(searchValue){
        SearchModel.search(searchValue).then(function(models){
            $scope.searchResults = models;
        });
    }



    
});