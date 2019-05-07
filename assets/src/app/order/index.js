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

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            order: ['$stateParams', 'OrderModel', function($stateParams, OrderModel){
                return OrderModel.getSome({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
            orders:['order', 'OrderModel', function(order, OrderModel){
                return OrderModel.getSome({order:order.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            contentList: ['ContentModel', 'order', function(ContentModel, order){
                return ContentModel.getSome({order:order.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'OrderController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'contentList', 'ContentModel', 'order', 'orders', 'ReactionModel', 'titleService', function OrderController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, contentList, ContentModel, order, orders, ReactionModel, titleService ) {
    
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.order = order;

    titleService.setTitle('Order | ' + $scope.order.id + ' | CRE8.XYZ');

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

    //TODO: FIX
    $rootScope.associatedModels = [{type:'ORDER', address:order.id}];

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
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

    //TODO: DEPRECIATE
    $scope.reply = function(item){
        var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.contentList[index].showReply = !$scope.contentList[index].showReply
    };

    //TODO: WEBSOCKET
    $sailsSocket.subscribe('content', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.contentList.unshift(envelope.data);
                break;
        }
    });

}]);
