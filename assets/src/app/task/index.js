angular.module( 'conexus.task', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'task', {
        url: '/task/:path',
        views: {
            "main": {
                controller: 'TaskController',
                templateUrl: 'task/index.tpl.html'
            }
        },
        resolve: {
            task: ['$stateParams', 'TaskModel', function($stateParams, TaskModel){
                return TaskModel.getOne($stateParams.path);
            }],
            work: ['$stateParams', 'WorkModel', function($stateParams, WorkModel){
                //return WorkModel.getByTask($stateParams.path);
                return ['work1', 'work2', 'work3', 'work4', 'work5'];
            }],
        }
    });
}])

.controller( 'TaskController', ['$sailsSocket', '$scope', 'config', 'lodash', 'PostModel', 'task', 'titleService', 'work', function TaskController( $sailsSocket, $scope, config, lodash, PostModel, task, titleService, work ) {
    titleService.setTitle('Task | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.task = task;
    $scope.work = work;
}]);
