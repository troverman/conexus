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

.controller( 'MarketPlaceCtrl', ['$location', '$mdSidenav', '$rootScope', '$sce', '$scope', '$stateParams', 'config', 'ItemModel', 'items', 'titleService', function MarketPlaceController( $location, $mdSidenav, $rootScope, $sce, $scope, $stateParams, config, ItemModel, items, titleService ) {
    $scope.currentUser = config.currentUser;
    $scope.newItem = {};
    $scope.newItemToggleVar = false;
    $scope.stateParams = $stateParams;
    $scope.items = items;
    $scope.selectedSort = 'createdAt DESC';
    $scope.selectedTag = '';
    $scope.skip = 0;

    //MERGE CONTENT AND ITEMS? | A 'MARKETPLACE' CONTENT TYPE? DUNNO
    //USE MARKETPLACE FOR MARKET [] TRAVERSE

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
    }
    $scope.loadTags();

    $scope.createItem = function () {
    	if ($scope.currentUser){
    		$scope.newItem.user = $scope.currentUser.id;
	    	ItemModel.create($scope.newItem).then(function(){
	    		$scope.newItem = {};
	    	});
	    }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: FIVE STAR ETC
    $scope.createReaction = function(item, type){
        if($scope.currentUser){
            $scope.newReaction.amount = 1;

            //NO
            $scope.newReaction.item = item.id;

            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
            var index = $scope.items.map(function(obj){return obj.id}).indexOf(item.id);
            if (type =='plus'){$scope.items[index].plusCount++}
            if (type =='minus'){$scope.items[index].minusCount++}
            ReactionModel.create($scope.newReaction).then(function(model){
                $scope.newReaction = {};
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.filterContent = function(filter) {
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

    $scope.newItemToggle = function () {
        if ($scope.currentUser){
            $scope.newItemToggleVar = $scope.newItemToggleVar ? false : true;
            //$mdSidenav('item').toggle();
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.reply = function(item){
        if($scope.currentUser){
            var index = $scope.items.map(function(obj){return obj.id}).indexOf(item.id);
            $scope.items[index].showReply = !$scope.items[index].showReply;
        }
        else{$mdSidenav('login').toggle()}
    };

}]);