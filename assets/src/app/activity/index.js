angular.module( 'conexus.activity', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'activity', {
		url: '/activity/:id',
		views: {"main": {controller: 'ActivityCtrl', templateUrl: 'activity/index.tpl.html'}}
	});
}])
.controller( 'ActivityCtrl', ['$scope', function ActivityCtrl($scope ) {}]);