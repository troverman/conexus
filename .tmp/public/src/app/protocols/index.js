angular.module( 'conexus.protocols', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'protocols', {
		url: '/protocols',
		views: {"main": {controller: 'ProtocolsCtrl', templateUrl: 'protocols/index.tpl.html'}},
		resolve: {protocols: ['$stateParams', 'ProtocolModel', function($stateParams, ProtocolModel){return ProtocolModel.get({limit:100, skip:0, sort:'createdAt DESC'});}]}
	});
}])
.controller( 'ProtocolsCtrl', ['$rootScope', '$scope', 'protocols', 'titleService', function ProtocolsController( $rootScope, $scope, protocols, titleService ) {
	titleService.setTitle('Protocols | CRE8.XYZ');
	$scope.protocols = protocols;
	console.log(protocols);
	$scope.protocol = {
		get:function(){},
		create:function(){},
	};
}]);