angular.module( 'conexus.post', [
])

.config(function config( $stateProvider ) {
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
                return PostModel.getAll().then(function(models) {
                    return models;
                });
            }
        }
    });
})

.controller( 'PostController', function PostController( $scope, $sailsSocket, lodash, config, titleService, PostModel, posts ) {
    titleService.setTitle('Posts');
    $scope.newPost = {};
    $scope.posts = posts;
    $scope.currentUser = config.currentUser;

    $sailsSocket.subscribe('post', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                //console.log(envelope.data);
                $scope.posts.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.posts, {id: envelope.id});
                break;
        }
    });

    $scope.destroyPost = function(post) {
        // check here if this post belongs to the currentUser
        if (post.user.id === config.currentUser.id) {
            PostModel.delete(post).then(function(model) {
                // [post] has been deleted, and removed from $scope.posts
            });
        }
    };

    $scope.createPost = function(newPost) {
        newPost.user = config.currentUser.id;
        //console.log(newPost);
        PostModel.create(newPost).then(function(model) {
            console.log(model);
            $scope.newPost = {};
        });
    };
});









