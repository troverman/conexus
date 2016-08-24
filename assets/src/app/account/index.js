angular.module( 'conexus.account', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'account', {
		url: '/account',
		views: {
			"main": {
				controller: 'AccountCtrl',
				templateUrl: 'account/index.tpl.html'
			}
		}
	});
})

.controller( 'AccountCtrl', function AccountController( $location, $scope, config, titleService ) {
	titleService.setTitle('account - conex.us');
	$scope.currentUser = config.currentUser;
	if(!$scope.currentUser){$location.path('/')}
});