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

.controller( 'SearchController', ['$location', '$mdSidenav', '$rootScope', '$sce', '$scope', '$stateParams', 'config', 'lodash', 'titleService', 'SearchModel', 'searchResults', function SearchController( $location, $mdSidenav, $rootScope, $sce, $scope, $stateParams, config, lodash, titleService, SearchModel, searchResults ) {
    $scope.searchResults = searchResults;
    $scope.searchQuery = {};
    $scope.searchQuery.search = $stateParams.searchQuery;

    $scope.tags = [];
    $scope.searchResults.map(function(obj){
        if (obj.tags){$scope.tags.concat(obj.tags.split(','));}
    });

    titleService.setTitle($scope.searchQuery.search + ' | CRE8.XYZ');

    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    $scope.createReaction = function(content, type){
        if($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.post = content.id;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
            var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(content.id);
            if (type =='plus'){$scope.contentList[index].plusCount++}
            if (type =='minus'){$scope.contentList[index].minusCount++}
            ReactionModel.create($scope.newReaction).then(function(model){
                $scope.newReaction = {};
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        SearchModel.search($scope.searchQuery.search).then(function(models){
            $rootScope.stateIsLoading = false;
            $scope.searchResults = models;
            $scope.searchResults.map(function(obj){
                if (obj.tags){$scope.tags.concat(obj.tags.split(','));}
            });
            $location.path('search/'+$scope.searchQuery.search, false);
        });
    };

    $scope.tokenToggle = function(){
        $mdSidenav('tokens').toggle();
        $rootScope.globalTokens = $scope.tokens;
    };
   
}]);