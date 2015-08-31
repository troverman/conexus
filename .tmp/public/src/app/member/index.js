angular.module( 'conexus.member', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'member', {
		url: '/member/:memberID',
        controller: function($scope, $stateParams) {
            // get the id
            $scope.id = $stateParams.memberID;

        },
		views: {
			"main": {
				controller: 'MemberCtrl',
				templateUrl: 'member/index.tpl.html'
			}
		}
	});
})

.controller( 'MemberCtrl', function MemberController( $scope, titleService ) {
	titleService.setTitle('member');
});