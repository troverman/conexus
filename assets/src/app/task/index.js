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
            task: function() {
                return {title:'task', content:'this is the task', orginization:'conexus'};
            },
            taskWork: function() {
                return ['work1', 'work2', 'work3', 'work4', 'work5'];
            }
        }
    });
}])

.controller( 'TaskController', ['$sailsSocket', '$scope', 'config', 'lodash', 'PostModel', 'task', 'taskWork', 'titleService', function TaskController( $sailsSocket, $scope, config, lodash, PostModel, task, taskWork, titleService ) {
    titleService.setTitle('Task - conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.task = task;
    $scope.taskWork = taskWork;
}]);
