angular.module( 'conexus.work', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'work', {
        url: '/work/:path',
        views: {
            "main": {
                controller: 'WorkController',
                templateUrl: 'work/index.tpl.html'
            }
        },
        resolve: {
            work: ['$stateParams', 'WorkModel', function($stateParams, WorkModel){
                return WorkModel.getOne($stateParams.path);
            }],
        }
    });
}])

.controller( 'WorkController', ['$location', '$scope', 'config', 'task', 'TaskModel', 'titleService', 'work', 'WorkModel', function WorkController( $location, $scope, config, task, TaskModel, titleService, work, WorkModel) {
    titleService.setTitle('Task | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};

    $scope.reputationMultiplier = 1;
    $scope.task = task;
    $scope.taskTime = 0;
    $scope.working = false;
    $scope.totalTime = (Math.random()*1000000).toFixed(0);
    $scope.work = work;

}]);
