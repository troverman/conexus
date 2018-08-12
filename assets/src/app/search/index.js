angular.module( 'conexus.search', [
])

.config(['$stateProvider', function config( $stateProvider ) {
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
            searchResults: ['SearchModel', function(SearchModel) {
                return SearchModel.search('');
            }]
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
            searchResults: ['$stateParams','SearchModel', function($stateParams, SearchModel) {
                return SearchModel.search($stateParams.searchQuery);
            }]
         }
    });
}])

.controller( 'SearchController', ['$scope', '$stateParams', 'config', 'lodash', 'titleService', 'SearchModel', 'searchResults', function SearchController( $scope, $stateParams, config, lodash, titleService, SearchModel, searchResults ) {
    $scope.searchResults = searchResults;
    $scope.searchQuery = $stateParams.searchQuery;

    titleService.setTitle($scope.searchQuery + ' | CRE8.XYZ');

    $scope.keyPress = function(searchValue){
        SearchModel.search(searchValue).then(function(models){
            $scope.searchResults = models;
        });
    };
   
}]);