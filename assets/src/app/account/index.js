angular.module( 'conexus.account', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'account', {
		url: '/account',
		views: {
			"main": {
				controller: 'AccountController',
				templateUrl: 'account/index.tpl.html'
			}
		}
	});
})

.controller( 'AccountCtrl', function AccountController( $scope, titleService ) {
	titleService.setTitle('account - conex.us');
});