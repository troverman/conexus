angular.module( 'conexus.protocol', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'protocol', {
		url: '/protocol/:id',
		views: {"main": {controller: 'ProtocolCtrl', templateUrl: 'protocol/index.tpl.html'}},
		resolve: {protocol: ['$stateParams', 'ProtocolModel', function($stateParams, ProtocolModel){return ProtocolModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});}]}

	});
}])
.controller( 'ProtocolCtrl', ['$rootScope', '$scope', 'protocol', 'titleService', function ProtocolController( $rootScope, $scope, protocol, titleService ) {
	$scope.protocol = protocol[0];
	titleService.setTitle('Protocol ' + $scope.protocol.id +' | CRE8.XYZ');
	$scope.protocol.data = JSON.parse($scope.protocol.data);
	//$scope.protocol.data = JSON.stringify($scope.protocol.data);

	//console.log($scope.protocol);

	//$scope.protocol = {
	//	get:function(){},
	//	create:function(){},
	//};
}]);