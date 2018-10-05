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

.controller( 'MarketPlaceCtrl', ['$location', '$scope', '$stateParams', 'config', 'ItemModel', 'items', 'titleService', function MarketPlaceController( $location, $scope, $stateParams, config, ItemModel, items, titleService ) {
    $scope.currentUser = config.currentUser;
    $scope.newItem = {};
    $scope.newItemToggleVar = false;
    $scope.stateParams = $stateParams;
    $scope.items = items;

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

    $scope.createItem = function () {
    	if ($scope.currentUser){
    		$scope.newItem.user = $scope.currentUser.id;
	    	ItemModel.create($scope.newItem).then(function(){
	    		$scope.newItem = {};
	    	});
	    }
	    else{$location.path('/login')}
    };

    $scope.newItemToggle = function () {
        $scope.newItemToggleVar = $scope.newItemToggleVar ? false : true;
    };

}]);