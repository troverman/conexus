angular.module( 'conexus.activityList', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'activityList', {
		url: '/activity',
		views: {"main": {controller: 'ActivityListCtrl', templateUrl: 'activityList/index.tpl.html'}}
	});
}])
.controller( 'ActivityListCtrl', ['$scope', function ActivityListCtrl($scope ) {}]);