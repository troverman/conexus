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

.controller( 'AccountCtrl', function AccountController( $scope, config, titleService ) {
	titleService.setTitle('account - conex.us');
	$scope.currentUser = config.currentUser;
});