angular.module( 'conexus.connection', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'connection', {
		url: '/connection/:id',
		views: {
			"main": {
				controller: 'ConnectionCtrl',
				templateUrl: 'connection/index.tpl.html'
			}
		},
	});
}])

.controller( 'ConnectionCtrl', ['$sce', '$scope', 'titleService', function ConnectionController( $sce, $scope, titleService ) {
    titleService.setTitle('Connection | CRE8.XYZ');

}]);