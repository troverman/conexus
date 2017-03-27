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
            posts: function(PostModel) {
                return PostModel.getAll();
            }
        }
    });
}])

.controller( 'PostController', ['$sailsSocket', '$scope', 'config', 'lodash', 'PostModel', 'posts', 'titleService', function PostController( $sailsSocket, $scope, config, lodash, PostModel, posts, titleService ) {
    titleService.setTitle('posts - conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.posts = posts;
    $scope.newPostVote = {};

    $scope.destroyPost = function(post) {
        if (post.user.id.toString() === config.currentUser.id) {
            PostModel.delete(post).then(function(model) {
            });
        }
    };

    $scope.createPost = function(newPost) {
        newPost.user = config.currentUser.id;
        PostModel.create(newPost).then(function(model) {
            $scope.newPost = {};
        });
    };

    $scope.createVote = function(post, newPostVote) {
        newPostVote.post = post;
        newPostVote.user = config.currentUser;
        PostVoteModel.create(newPostVote).then(function(model) {
            $scope.newPostVote = {};
        });
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
