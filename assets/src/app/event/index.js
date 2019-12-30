angular.module( 'conexus.event', [
])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'event', {
		url: '/event/:id',
		views: {
			"main": {
				controller: 'EventCtrl',
				templateUrl: 'event/index.tpl.html'
			}
		}
	});
}])
.controller( 'EventCtrl', ['$scope', 'titleService', function EventCtrl( $scope ) {}]);