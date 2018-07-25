angular.module( 'conexus.order', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'order', {
        url: '/order/:id',
        views: {
            "main": {
                controller: 'OrderController',
                templateUrl: 'order/index.tpl.html'
            }
        },
        resolve: {
            order: ['$stateParams', 'OrderModel', function($stateParams, OrderModel){
                return null;
                //return OrderModel.getOne($stateParams.id);
            }],
            posts: ['$stateParams', 'PostModel', function($stateParams, PostModel){
                return null;
                //return PostModel.getSome($stateParams.id);
            }],
        }
    });
}])

.controller( 'OrderController', ['$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'order', 'PostModel', 'posts', 'titleService', function PostController( $sailsSocket, $sce, $scope, config, lodash, order, PostModel, posts, titleService ) {
    titleService.setTitle('Order | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.order = order;
    $scope.posts = posts;

    $sailsSocket.subscribe('order', function (envelope) {
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
