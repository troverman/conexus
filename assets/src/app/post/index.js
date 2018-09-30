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
                return PostModel.getOne($stateParams.id);
            }],
            posts:['post', 'PostModel', function(post, PostModel) {
                return PostModel.getSome('post', post.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'PostController', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'post', 'PostModel', 'posts', 'titleService', function PostController( $location, $sailsSocket, $sce, $scope, config, lodash, post, PostModel, posts, titleService ) {
    titleService.setTitle('Post | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.newReaction = {};
    $scope.post = post;

    //TODO: FINALIZE.. WORKS ON FRONTEND
    //ERROR: DUPLICATES IN A REPEATOR ARE NOT ALLOWED
    function populateChildren(posts, depth, limit){
        posts.forEach(function(post) {
            PostModel.getSome('post', post.id, 100, 0, 'createdAt DESC').then(function(posts){
                if (posts.length > 0){
                    depth++ 
                    post.children = posts;
                    $scope.post.children.push(post);
                    if (depth < limit){populateChildren(posts, depth, limit)}
                }
            });
        });
    }
    populateChildren(posts, 0, 5);
    $scope.post.children = posts;

    //TODO
    $scope.createPost = function(post) {
        if($scope.currentUser){
            $scope.newPost.post = post.id;
            $scope.newPost.user = $scope.currentUser.id;
            PostModel.create($scope.newPost).then(function(model) {
                $scope.newPost = {};
            });
        }
        else{$location.path('/login')}
    };

    //TODO
    $scope.createReaction = function(post, type) {
        if($scope.currentUser){
            $scope.newReaction.user = $scope.currentUser.id;
            $scope.newReaction.post = post.id;
            $scope.newReaction.type = type;
            //weight?
            //TODO: MODEL | CREATE REACTION
            //Reaction.create(newReaction);
            if (type =='plus'){$scope.post.plusCount++}
            if (type =='minus'){$scope.post.minusCount++}
            //TODO: UPDATE POST
        }
        else{$location.path('/login')}
    };

    //YIKES
    $scope.renderMessage = function(content){
        if (content){
            if (!content.includes('>')){
                var replacedText = content.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                return $sce.trustAsHtml(replacedText);
            }
            else{return $sce.trustAsHtml(content)}
        }
    };
    
    //TODO
    $scope.reply = function(post){
        console.log(post);
        console.log($scope.post.children)
        $scope.post.showReply = !$scope.post.showReply
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
