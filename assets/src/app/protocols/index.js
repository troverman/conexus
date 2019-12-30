angular.module( 'conexus.protocols', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'protocols', {
		url: '/protocols',
		views: {
			"main": {
				controller: 'ProtocolsCtrl',
				templateUrl: 'protocols/index.tpl.html'
			}
		}
	});
}])

.controller( 'ProtocolsCtrl', ['$rootScope', '$scope', function ProtocolsController( $rootScope, $scope ) {

	$scope.protocol = {
		get:function(){},
		create:function(){},
	};

}]);