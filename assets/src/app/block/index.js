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

.controller( 'BlockCtrl', ['$sce', '$scope', 'contentList', 'titleService', function BlockCtrl( $sce, $scope, contentList, titleService ) {
	titleService.setTitle('Block | CRE8.XYZ');

}]);