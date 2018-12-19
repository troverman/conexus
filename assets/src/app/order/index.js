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
            contentList: ['$stateParams', 'ContentModel', function($stateParams, ContentModel){
                return ContentModel.getSome('order', $stateParams.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'OrderController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'contentList', 'ContentModel', 'lodash', 'order', 'titleService', function OrderController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, contentList, ContentModel, lodash, order, titleService ) {
    titleService.setTitle('Order | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newContent = {};
    $scope.order = order;
    $scope.contentList = contentList;

    //TODO: PROTOCOL
    $scope.tokens = [
        'CREATE+ORDER',
        'CREATE+ORDER+'+$scope.order.identiferSet, 
        'CREATE+ORDER+'+$scope.order.identiferSet1, 
        'CREATE+ORDER+'+$scope.order.identiferSet+'-'+$scope.order.identiferSet1, 
        $scope.order.id,
    ];

    //TODO
    $scope.createContent = function(content) {
        if($scope.currentUser){
            $scope.newContent.contentModel = content.id;
            $scope.newContent.user = $scope.currentUser.id;
            $scope.newContent.order = order.id;
            ContentModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.reply = function(item){
        var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.contentList[index].showReply = !$scope.contentList[index].showReply
    };

    $scope.tokenToggle = function(){
        $mdSidenav('tokens').toggle();
        $rootScope.globalTokens = $scope.tokens;
    };

    $sailsSocket.subscribe('content', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.contentList.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.contentList, {id: envelope.id});
                break;
        }
    });

}]);
