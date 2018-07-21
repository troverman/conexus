angular.module( 'conexus.login', [
])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'login', {
		url: '/login',
		views: {
			"main": {
				controller: 'LoginCtrl',
				templateUrl: 'login/index.tpl.html'
			}
		}
	});
}])
.controller( 'LoginCtrl', ['$scope', 'config', 'titleService', function LoginController( $scope, config, titleService ) {
	titleService.setTitle('login | conex.us');
	$scope.currentUser = config.currentUser;
}]);
