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
                var searchModel = {
                    limit:100,
                    skip:0,
                    sort:'createdAt DESC',
                    model: null,
                    query: '',
                };
                return SearchModel.search(searchModel);
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

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            searchResults: ['$stateParams','SearchModel', function($stateParams, SearchModel) {
                var searchModel = {
                    limit:100,
                    skip:0,
                    sort:'createdAt DESC',
                    model: null,
                    query: $stateParams.searchQuery,
                };
                return SearchModel.search(searchModel);
            }]
         }
    });
}])

.controller( 'SearchController', ['$location', '$mdSidenav', '$rootScope', '$sce', '$scope', '$stateParams', 'titleService', 'SearchModel', 'searchResults', function SearchController( $location, $mdSidenav, $rootScope, $sce, $scope, $stateParams, titleService, SearchModel, searchResults ) {
    
    $scope.searchResults = searchResults;
    $scope.searchQuery = [{text:$stateParams.searchQuery}];
    $scope.searchQueryString = $scope.searchQuery.map(function(obj){return obj.text}).join(',');

    $scope.tags = [];
    $scope.searchResults.map(function(obj){
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });

    titleService.setTitle($scope.searchQueryString + ' | CRE8.XYZ');

    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };

    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:item.model, id:item.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var index = $scope.searchResults.map(function(obj){return obj.id}).indexOf(item.id);
            $scope.searchResults[index].reactions[type]++;
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}   
    };

    //TODO: BETTER | TAG STORAGE
    $scope.loadTags = function(){
        $scope.tags = $scope.searchResults.map(function(obj){
            return obj.tags;
        });
        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.sortedTagArray = [];
        for (x in $scope.tags){
            var amount = countInArray($scope.tags, $scope.tags[x]);
            if ($scope.sortedTagArray.map(function(obj){return obj.element}).indexOf($scope.tags[x]) == -1){
                $scope.sortedTagArray.push({amount:amount, element:$scope.tags[x]})
            }
        }
        $scope.sortedTagArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);});  
    }
    $scope.loadTags();


    //TODO:.. COMPLEX QUERY
    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        var searchModel = {
            limit:100,
            skip:0,
            sort:'createdAt DESC',
            model: null,
            query: $scope.searchQueryString
        };
        SearchModel.search(searchModel).then(function(models){
            $rootScope.stateIsLoading = false;
            $scope.searchResults = models;
            $scope.searchResults.map(function(obj){
                if (obj.tags){$scope.tags.concat(obj.tags.split(','));}
            });
            $location.path('search/'+$scope.searchQueryString, false);
        });
    };

    //TODO:.. COMPLEX QUERY
    $scope.$watch('searchQuery', function(newValue, oldValue){
        if (newValue !== oldValue) {
           $rootScope.stateIsLoading = true;
            $scope.searchQueryString = $scope.searchQuery.map(function(obj){return obj.text}).join(',');
            var searchModel = {
                limit:100,
                skip:0,
                sort:'createdAt DESC',
                model: null,
                query: $scope.searchQueryString
            };
            SearchModel.search(searchModel).then(function(models){
                $rootScope.stateIsLoading = false;
                $scope.activity = models;
                $scope.activity.map(function(obj){
                    if (obj.tags){obj.tags = obj.tags.split(',');}
                });
            });
        }
    }, true);
    //TODO:.. COMPLEX QUERY
 
}]);