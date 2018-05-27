angular.module( 'conexus.tasks', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'tasks', {
		url: '/tasks',
		views: {
			"main": {
				controller: 'TasksCtrl',
				templateUrl: 'tasks/index.tpl.html'
			}
		},
        resolve: {
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getAll();
            }],
        }
	});
}])

.controller( 'TasksCtrl', ['$scope', 'tasks', 'titleService', function TasksController( $scope, tasks, titleService ) {
	titleService.setTitle('Tasks | conex.us');
	$scope.tasks = tasks.reverse();
}]);