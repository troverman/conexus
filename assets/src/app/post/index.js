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
            },
            postvotes: function(PostVoteModel) {
                return PostVoteModel.getAll().then(function(models) {
                    return models;
                });
            }
        }
    });
})

.controller( 'PostController', function PostController( $scope, $sailsSocket, lodash, config, titleService, PostModel, PostVoteModel, posts, postvotes) {
    titleService.setTitle('Posts');
    $scope.currentUser = config.currentUser;



    //posts
    $scope.newPost = {};
    $scope.posts = posts;
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
        PostModel.create(newPost).then(function(model) {
            $scope.newPost = {};
        });
    };












    //postvote
    //weird error here -- need to figureo out looping aka loop through posts, loop though votes in post. make votable etc
    $scope.newPostVote = {};
    $scope.postvotes = postvotes;
    $sailsSocket.subscribe('postvote', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                console.log(envelope.data);
                $scope.postvotes.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.postvotes, {id: envelope1.id});
                break;
        }
    });

    $scope.destroyVote = function(postvote) {
        // check here if this post belongs to the currentUser
        if (post.user.id === config.currentUser.id) {//and post id
            PostVoteModel.delete(postvote).then(function(model) {
                // [post] has been deleted, and removed from $scope.posts
            });
        }
    };

    $scope.createVote = function(newPostVote, post) {
        console.log(post);
        newPostVote.user = config.currentUser.id;
        newPostVote.post = post;
        newPostVote.vote = newPostVote.vote;


        PostVoteModel.create(newPostVote).then(function(model) {
            $scope.newPostVote = {};
        });
    };


















});









