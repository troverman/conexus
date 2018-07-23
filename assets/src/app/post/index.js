angular.module( 'conexus.post', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'post', {
        url: '/post/:id',
        views: {
            "main": {
                controller: 'PostController',
                templateUrl: 'post/index.tpl.html'
            }
        },
        resolve: {
            post: ['$stateParams', 'PostModel', function($stateParams, PostModel){
                return null;
                //return PostModel.getOne($stateParams.id);
            }],
        }
    });
}])

.controller( 'PostController', ['$sailsSocket', '$scope', 'config', 'lodash', 'post', 'PostModel', 'titleService', function PostController( $sailsSocket, $scope, config, lodash, post, PostModel, titleService ) {
    titleService.setTitle('posts | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.post = post;

    //TODO
    $scope.createPost = function(post) {
       
    };

    //TODO: NESTED ISH | LOOK AT VOET

    //TODO
    $scope.createReaction = function(post, type) {
       
    };

    $sailsSocket.subscribe('post', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.posts.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.posts, {id: envelope.id});
                break;
        }
    });

}]);
