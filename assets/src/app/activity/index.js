angular.module( 'conexus.activity', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'activity', {
		url: '/activity/:id',
		views: {"main": {controller: 'ActivityCtrl', templateUrl: 'activity/index.tpl.html'}},
        resolve: {item: ['$stateParams', 'ActivityModel', function($stateParams, ActivityModel) {return ActivityModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});}]}
	});
}])
.controller( 'ActivityCtrl', ['$scope', 'item', function ActivityCtrl($scope, item ) {
	$scope.item = item;
}]);