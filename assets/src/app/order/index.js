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
                return OrderModel.getOne($stateParams.id);
            }],
            posts: ['$stateParams', 'PostModel', function($stateParams, PostModel){
                return PostModel.getSome('order', $stateParams.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'OrderController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'order', 'PostModel', 'posts', 'titleService', function OrderController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, lodash, order, PostModel, posts, titleService ) {
    titleService.setTitle('Order | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.order = order;
    $scope.posts = posts;

    //TODO: PROTOCOL
    $scope.tokens = [
        'CREATE+ORDER',
        'CREATE+ORDER+'+$scope.order.identiferSet, 
        'CREATE+ORDER+'+$scope.order.identiferSet1, 
        'CREATE+ORDER+'+$scope.order.identiferSet+'-'+$scope.order.identiferSet1, 
        $scope.order.id
    ];

    //TODO
    $scope.createPost = function(post) {
        if($scope.currentUser){
            $scope.newPost.post = post.id;
            $scope.newPost.user = $scope.currentUser.id;
            $scope.newPost.order = order.id;
            PostModel.create($scope.newPost).then(function(model) {
                $scope.newPost = {};
            });
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

    $scope.reply = function(item){
        var index = $scope.posts.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.posts[index].showReply = !$scope.posts[index].showReply
    };

    $scope.tokenToggle = function(){
        $mdSidenav('tokens').toggle();
        $rootScope.globalTokens = $scope.tokens;
    };

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
