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
            orders:['order', 'OrderModel', function(order, OrderModel){
                return OrderModel.getSome('order', order, 100, 0, 'createdAt DESC');
            }],
            contentList: ['$stateParams', 'ContentModel', function($stateParams, ContentModel){
                return ContentModel.getSome('order', $stateParams.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'OrderController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'contentList', 'ContentModel', 'lodash', 'order', 'orders', 'ReactionModel', 'titleService', function OrderController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, contentList, ContentModel, lodash, order, orders, ReactionModel, titleService ) {
    titleService.setTitle('Order | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.order = order;
    $scope.orders = orders;
    $scope.contentList = contentList;

    //TODO: PROTOCOL
    $scope.order.tokens = [
        'CREATE+ORDER',
        'CREATE+ORDER+'+$scope.order.identiferSet, 
        'CREATE+ORDER+'+$scope.order.identiferSet1, 
        'CREATE+ORDER+'+$scope.order.identiferSet+'-'+$scope.order.identiferSet1, 
        $scope.order.id,
    ];

    //FIX?
    $rootScope.associatedModels = [{type:'ORDER', address:order.id}];

    $scope.createReaction = function(item, type){
        if ($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
            var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            if (contentIndex != -1){
                $scope.newReaction.associatedModels = [{type:'CONTENT', id:item.id}];
                $scope.contentList[contentIndex].reactions[type]++;
            }  
            else{
                $scope.newReaction.associatedModels = [{type:'ORDER', id:item.id}];
                $scope.order.reactions[type]++;
            }
            ReactionModel.create($scope.newReaction);       
        }
        else{$mdSidenav('login').toggle();}
    };

    $scope.reply = function(item){
        var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.contentList[index].showReply = !$scope.contentList[index].showReply
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
