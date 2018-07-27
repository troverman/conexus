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
            //postChildren:['post', 'PostModel', function(post, PostModel) {
            //    return PostModel.getByPost(post.id);
            //}],
        }
    });
}])

.controller( 'PostController', ['$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'post', 'PostModel', 'titleService', function PostController( $sailsSocket, $sce, $scope, config, lodash, post, PostModel, titleService ) {
    titleService.setTitle('posts | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.newReaction = {};
    $scope.post = post;

    //TODO
    $scope.createPost = function(post) {
       
    };

    //TODO: NESTED ISH | LOOK AT VOET

    //TODO
    $scope.createReaction = function(post, type) {
        $scope.newReaction.user = $scope.currentUser.id;
        $scope.newReaction.post = post.id;
        $scope.newReaction.type = type;
        //weight?
        //TODO: MODEL | CREATE REACTION
        //Reaction.create(newReaction);
        if (type =='plus'){$scope.post.plusCount++}
        if (type =='minus'){$scope.post.minusCount++}
        //TODO: UPDATE POST
    };

    $scope.renderMessage = function(message){
        if (message){
            var replacedText = message.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
            var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
            return $sce.trustAsHtml(replacedText);
        }
    };

    $scope.reply = function(post){
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
