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

.controller( 'SearchController', ['$mdSidenav', '$rootScope', '$sce', '$scope', '$stateParams', 'config', 'lodash', 'titleService', 'SearchModel', 'searchResults', function SearchController( $mdSidenav, $rootScope, $sce, $scope, $stateParams, config, lodash, titleService, SearchModel, searchResults ) {
    $scope.searchResults = searchResults;
    $scope.searchQuery = $stateParams.searchQuery;

    $scope.tags = [];
    $scope.searchResults.map(function(obj){
        if (obj.tags){$scope.tags.concat(obj.tags.split(','));}
    });

    titleService.setTitle($scope.searchQuery + ' | CRE8.XYZ');

    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    //YIKES
    $scope.renderContent = function(content){
        if (content){
            if (!content.includes('>')){
                var replacedText = content.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                return $sce.trustAsHtml(replacedText);
            }
            else{return $sce.trustAsHtml(content)}
        }
    };

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        SearchModel.search($scope.searchQuery).then(function(models){
            $rootScope.stateIsLoading = false;
            $scope.searchResults = models;
            $scope.searchResults.map(function(obj){
                if (obj.tags){
                    $scope.tags.concat(obj.tags.split(','));
                }
            });
        });
    };

    $scope.tokenToggle = function(){
        $mdSidenav('tokens').toggle();
        $rootScope.globalTokens = $scope.tokens;
    };
   
}]);