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
                //return PostModel.getSome('transaction', transaction.id, 100, 0, 'createdAt DESC');
                return [];
            }],
        }
    });
}])

.controller( 'TransactionController', ['$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'PostModel', 'posts', 'titleService', 'transaction', function TransactionController( $sailsSocket, $sce, $scope, config, lodash, PostModel, posts, titleService, transaction ) {
    titleService.setTitle('Order | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.posts = posts;
    $scope.transaction = transaction;
    console.log(transaction)

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
