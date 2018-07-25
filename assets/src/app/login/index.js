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
.controller( 'LoginCtrl', ['$location', '$scope', 'config', 'titleService', function LoginController( $location, $scope, config, titleService ) {
	titleService.setTitle('login | conex.us');
	$scope.currentUser = config.currentUser;
	if ($scope.currentUser){$location.path('/')}
}]);
