angular.module( 'conexus.protocol', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'protocol', {
		url: '/protocol/:id',
		views: {
			"main": {
				controller: 'ProtocolCtrl',
				templateUrl: 'protocol/index.tpl.html'
			}
		}
	});
}])

.controller( 'ProtocolCtrl', ['$rootScope', '$scope', function ProtocolController( $rootScope, $scope ) {
	$scope.protocol = {
		get:function(){},
		create:function(){},
	};
}]);