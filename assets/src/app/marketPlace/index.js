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

.controller( 'MarketPlaceCtrl', ['$location', '$rootScope', '$sce', '$scope', '$stateParams', 'config', 'ItemModel', 'items', 'titleService', function MarketPlaceController( $location, $rootScope, $sce, $scope, $stateParams, config, ItemModel, items, titleService ) {
    $scope.currentUser = config.currentUser;
    $scope.newItem = {};
    $scope.newItemToggleVar = false;
    $scope.stateParams = $stateParams;
    $scope.items = items;
    $scope.selectedSort = 'createdAt DESC';
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

        function countInArray(array, value) {
            return array.reduce(function(n, x){ return n + (x === value)}, 0);
        }

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
	    else{$location.path('/login')}
    };

    /*$scope.createReaction = function(content, type){
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
        else{$location.path('/login')}
    };*/

    $scope.filterContent = function(filter) {
        $rootScope.stateIsLoading = true;
        ItemModel.getSome('tag', filter, 20, 0, 'createdAt DESC').then(function(items){
            $rootScope.stateIsLoading = false;
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
        $scope.newItemToggleVar = $scope.newItemToggleVar ? false : true;
    };

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

}]);