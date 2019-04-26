angular.module( 'conexus.tx', [
])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'tx', {
		url: '/tx/:id',
		views: {
			"main": {
				controller: 'TxCtrl',
				templateUrl: 'tx/index.tpl.html'
			}
		}
	});
}])
.controller( 'TxCtrl', ['$scope', 'titleService', function TxCtrl( $scope ) {
}]);