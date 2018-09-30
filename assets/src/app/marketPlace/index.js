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