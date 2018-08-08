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

.controller( 'TasksCtrl', ['$rootScope', '$sailsSocket', '$scope', 'TaskModel', 'tasks', 'titleService', function TasksController( $rootScope, $sailsSocket, $scope, TaskModel, tasks, titleService ) {
	titleService.setTitle('Tasks | conex.us');
	$scope.selectedSort = 'createdAt DESC';
	$scope.skip = 0;
	$scope.sortText = {'trendingScore DESC':'Trending','createdAt DESC':'Date Created','workCount DESC': 'Total Work'}
	$scope.tasks = tasks;

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 100;
        $rootScope.stateIsLoading = true;
        TaskModel.getSome('', '', 100, $scope.skip, $scope.selectedSort).then(function(tasks) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.tasks, tasks);
        });
    };

    $scope.selectSort = function(sort){
		$scope.selectedSort = sort;
		$rootScope.stateIsLoading = true;
        TaskModel.getSome('', '', 100, $scope.skip, $scope.selectedSort).then(function(tasks) {
			$rootScope.stateIsLoading = false;
			$scope.tasks = tasks;
		});
	};

}]);