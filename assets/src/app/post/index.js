angular.module( 'conexus.post', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'post', {
        url: '/post',
        views: {
            "main": {
                controller: 'PostController',
                templateUrl: 'post/index.tpl.html'
            }
        },
        resolve: {
            //TODO: MERGE WITH MESSAGE | GET SOME
            posts: function(PostModel) {
                return PostModel.getAll();
            }
        }
    });
}])

.controller( 'PostController', ['$sailsSocket', '$scope', 'config', 'lodash', 'PostModel', 'posts', 'titleService', function PostController( $sailsSocket, $scope, config, lodash, PostModel, posts, titleService ) {
    titleService.setTitle('posts | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.posts = posts;

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
