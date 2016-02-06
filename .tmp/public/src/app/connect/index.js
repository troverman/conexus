angular.module( 'conexus.connect', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'connect', {
		url: '/connect',
		views: {
			"main": {
				controller: 'ConnectCtrl',
				templateUrl: 'connect/index.tpl.html'
			}
		}
	});
})

.controller( 'ConnectCtrl', function ConnectController( $scope, titleService, UserModel ) {
	titleService.setTitle('Account');

	UserModel.getAll().then(function(users){
		$scope.users = users;
	});

});