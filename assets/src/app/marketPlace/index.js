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
            items: ['OrderModel', function(OrderModel) {
                return null//OrderModel.getSome('market', $stateParams.id, '', 100, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'MarketPlaceCtrl', ['$scope', '$stateParams', 'config', 'items', 'titleService', function MarketPlaceController( $scope, $stateParams, config, items, titleService ) {
    $scope.currentUser = config.currentUser;
    $scope.stateParams = $stateParams;
    $scope.items = items;

}]);