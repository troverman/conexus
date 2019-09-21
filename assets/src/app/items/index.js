angular.module( 'conexus.items', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'items', {
		url: '/items',
		views: {
			"main": {
				controller: 'ItemsCtrl',
				templateUrl: 'items/index.tpl.html'
			}
		},
        resolve:{
            items: ['ItemModel', function(ItemModel) {
                return ItemModel.get({limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
	});
}])

.controller( 'ItemsCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$scope', '$stateParams', 'ItemModel', 'items', 'ReactionModel', function ItemsController( $location, $mdSidenav, $rootScope, $sailsSocket, $scope, $stateParams, ItemModel, items, ReactionModel ) {

    $scope.newItem = {};
    $scope.newReaction = {};
    $scope.stateParams = $stateParams;
    
    $scope.items = items.data.map(function(obj){obj.model = 'ITEM'; return obj;});
    $scope.itemCount = items.info.count;

    $scope.searchQuery = [];
    $scope.selectedSort = 'createdAt DESC';
    $scope.selectedTag = '';
    $scope.skip = 0;
    $scope.sortedLocationArray = [{element:'Knoxville, TN'}, {element:'New York City'}, {element:'Chapel Hill'}];

    $scope.loadAssets = function(){
        $scope.assets = $scope.items.map(function(obj){
            if(obj.identiferSet){obj.identiferSet = obj.identiferSet.split(',');}
            returnObj = obj.identiferSet;
            return returnObj;
        });
        $scope.assets = [].concat.apply([], $scope.assets);
        $scope.assets = $scope.assets.filter(function(e){return e}); 
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.sortedAssetArray = [];
        for (x in $scope.assets){
            var amount = countInArray($scope.assets, $scope.assets[x]);
            if ($scope.sortedAssetArray.map(function(obj){return obj.element}).indexOf($scope.assets[x]) == -1){
                $scope.sortedAssetArray.push({amount:amount, element:$scope.assets[x]})
            }
        }
        $scope.sortedAssetArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    };
    $scope.loadAssets();

    $scope.loadTags = function(){
        $scope.tags = $scope.items.map(function(obj){
            var returnObj = {};
            if(obj.tags){obj.tags = obj.tags.split(',')}
            returnObj = obj.tags;
            return returnObj;
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
    };
    $scope.loadTags();

    $scope.filterSet = {tags:$scope.sortedTagArray, associations:$scope.sortedAssociationArray, locations:$scope.sortedLocationArray}

    $scope.filterContent = function(filter) {
        $scope.searchQuery.push({text:filter});
        $rootScope.stateIsLoading = true;
        $location.search('tags', filter);
        ItemModel.get({tag:filter, limit:20, skip:0, sort:'createdAt DESC'}).then(function(items){
            $rootScope.stateIsLoading = false;
            $scope.selectedTag = filter;
            $scope.items = items.data;
            $scope.itemCount = items.info.count;
            $scope.loadTags();
        });
    };

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 20;
        $rootScope.stateIsLoading = true;
        ItemModel.get({limit:20, skip:$scope.skip, sort:$scope.selectedSort}).then(function(items) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.items, items);
            $scope.loadTags();
        });
    };

    if ($location.search().context){
        $scope.filterContent($location.search().context);
    }

    $sailsSocket.subscribe('item', function (envelope) {
        console.log(envelope);
        if (envelope.verb == 'create'){$scope.items.unshift(envelope.data);}
        if (envelope.verb == 'update'){
            var index = $scope.items.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){$scope.items[index] = envelope.data;}
        }
    });

}]);