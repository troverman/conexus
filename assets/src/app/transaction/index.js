angular.module( 'conexus.transaction', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'transaction', {
        url: '/transaction/:id',
        views: {
            "main": {
                controller: 'TransactionController',
                templateUrl: 'transaction/index.tpl.html'
            }
        },
        resolve: {
            transaction: ['$stateParams', 'TransactionModel', function($stateParams, TransactionModel){
                return TransactionModel.getOne($stateParams.id);
            }],
            posts: ['PostModel', 'transaction', function(PostModel, transaction){
                return PostModel.getSome('transaction', transaction.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'TransactionController', ['$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'PostModel', 'posts', 'titleService', 'transaction', function TransactionController( $sailsSocket, $sce, $scope, config, lodash, PostModel, posts, titleService, transaction ) {
    titleService.setTitle('Transaction | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.posts = posts;
    $scope.transaction = transaction;

    console.log(posts);

    $scope.createPost = function(post) {
        if ($scope.currentUser){
            $scope.newPost.post = post.id;
            $scope.newPost.user = $scope.currentUser.id;
            $scope.newPost.transaction = $scope.transaction.id;
            PostModel.create($scope.newPost).then(function(model) {
                $scope.newPost = {};
            });
        }
        else{}
    };

    //TODO: MODEL | CREATE REACTION | UPDATE POST
    $scope.createReaction = function(post, type){
        $scope.newReaction.user = $scope.currentUser.id;
        $scope.newReaction.post = post.id;
        $scope.newReaction.type = type;
        //TODO: MODEL | CREATE REACTION
        //Reaction.create(newReaction);
        var index = $scope.posts.map(function(obj){return obj.id}).indexOf(post.id);
        if (type =='plus'){$scope.posts[index].plusCount++}
        if (type =='minus'){$scope.posts[index].minusCount++}
        //TODO: UPDATE POST
    };

    $scope.renderMessage = function(message){
        if (message){
            var replacedText = message.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
            var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
            return $sce.trustAsHtml(replacedText);
        }
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
