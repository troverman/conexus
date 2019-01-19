angular.module( 'conexus.marketPlace', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'marketPlace', {
		url: '/marketplace',
		views: {
			"main": {
				controller: 'MarketPlaceCtrl',
				templateUrl: 'marketPlace/index.tpl.html'
			}
		},
        resolve:{
            items: ['ItemModel', function(ItemModel) {
                return ItemModel.getSome('', '', 100, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'MarketPlaceCtrl', ['$location', '$mdSidenav', '$rootScope', '$sce', '$scope', '$stateParams', 'config', 'ItemModel', 'items', 'ReactionModel', 'titleService', function MarketPlaceController( $location, $mdSidenav, $rootScope, $sce, $scope, $stateParams, config, ItemModel, items, ReactionModel, titleService ) {
    titleService.setTitle('Marketplace | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newItem = {};
    $scope.newReaction = {};
    $scope.stateParams = $stateParams;
    $scope.items = items;
    $scope.searchQuery = [];
    $scope.selectedSort = 'createdAt DESC';
    $scope.selectedTag = '';
    $scope.skip = 0;

    $scope.sortedLocationArray = ['Knoxville, TN', 'New York City', 'Chapel Hill'];


    //TODO: BETTER
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

    //TODO: BETTER
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

    $scope.filterSet = {tags:$scope.sortedTagArray, associations:$scope.sortedAssociationArray, location:$scope.sortedLocationArray}




    $scope.createItem = function () {
    	if ($scope.currentUser){
    		$scope.newItem.user = $scope.currentUser.id;
	    	ItemModel.create($scope.newItem).then(function(){
	    		$scope.newItem = {};
	    	});
	    }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createReaction = function(item, type){
        if($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:'ITEM', id:item.id}];
            //TODO: FIVE STAR ETC
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
            var index = $scope.items.map(function(obj){return obj.id}).indexOf(item.id);
            if (index != -1){$scope.items[index].reactions[type]++;}
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.filterContent = function(filter) {

        $scope.searchQuery.push({text:filter})

        $rootScope.stateIsLoading = true;
        ItemModel.getSome('tag', filter, 20, 0, 'createdAt DESC').then(function(items){
            $rootScope.stateIsLoading = false;
            $scope.selectedTag = filter;
            $scope.items = items;
            $scope.loadTags()
        });
    };

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 20;
        $rootScope.stateIsLoading = true;
        ItemModel.getSome('', '', 20, $scope.skip, $scope.selectedSort).then(function(items) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.items, items);
            $scope.loadTags();
        });
    };

    $scope.reply = function(item){
        if($scope.currentUser){
            var index = $scope.items.map(function(obj){return obj.id}).indexOf(item.id);
            $scope.items[index].showReply = !$scope.items[index].showReply;
        }
        else{$mdSidenav('login').toggle()}
    };

}]);