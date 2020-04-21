angular.module( 'conexus.activityList', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'activityList', {
		url: '/activity',
		views: {"main": {controller: 'ActivityListCtrl', templateUrl: 'activityList/index.tpl.html'}},
        resolve: {items: ['$stateParams', 'ActivityModel', function($stateParams, ActivityModel) {return ActivityModel.get({limit:20, skip:0, sort:'createdAt DESC'});}]},
	});
}])
.controller( 'ActivityListCtrl', ['$scope', 'items', function ActivityListCtrl($scope, items) {
	$scope.items = items;
}]);