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
            task: function(PostModel) {
                return PostModel.getAll();
            }
        }
    });
}])

.controller( 'PostController', ['$sailsSocket', '$scope', 'config', 'lodash', 'PostModel', 'task', 'titleService', function PostController( $sailsSocket, $scope, config, lodash, PostModel, task, titleService ) {
    titleService.setTitle('posts - conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.task = task;

}]);
