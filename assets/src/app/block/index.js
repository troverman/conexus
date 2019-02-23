angular.module( 'conexus.block', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'block', {
		url: '/block/:id',
		views: {
			"main": {
				controller: 'BlockCtrl',
				templateUrl: 'block/index.tpl.html'
			}
		}
	});
}])

.controller( 'BlockCtrl', ['$sce', '$scope', 'titleService', function BlockCtrl( $sce, $scope, titleService ) {
	titleService.setTitle('Block | CRE8.XYZ');

	$scope.transactions = [];

    for(var i=0;i<1000;i++){
		$scope.transactions.push({id:'1241312341',data:'HASHasdjhasdjahsdkjasdhjashdkjhjh2ekj3dvjik 3j k3jeajksdjadkjah'});
	}

}]);