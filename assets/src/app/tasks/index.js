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
        	//TODO: GETSOME
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getSome('', '', 100, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'TasksCtrl', ['$scope', 'tasks', 'titleService', function TasksController( $scope, tasks, titleService ) {
	titleService.setTitle('Tasks | conex.us');
	$scope.tasks = tasks;
	
	//TODO: FILTERS ETC
	//TODO: getSome

}]);