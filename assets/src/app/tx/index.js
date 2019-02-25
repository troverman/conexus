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

.controller( 'TxCtrl', ['$sce', '$scope', 'titleService', function TxCtrl( $sce, $scope, titleService ) {
	titleService.setTitle('Transaction | CRE8.XYZ');
}]);