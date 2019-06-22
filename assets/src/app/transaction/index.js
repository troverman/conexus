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
        
        //TODO: DEPRECIATE RESOLVE
        resolve: {
            transaction: ['$stateParams', 'TransactionModel', function($stateParams, TransactionModel){
                return TransactionModel.getSome({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
            contentList: ['ContentModel', 'transaction', function(ContentModel, transaction){
                return ContentModel.getSome({transaction:transaction[0].id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'TransactionController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'contentList', 'ContentModel', 'ReactionModel', 'titleService', 'transaction', function TransactionController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, contentList, ContentModel, ReactionModel, titleService, transaction ) {
    
    $scope.transaction = transaction[0];

    titleService.setTitle($scope.transaction.id + ' | Transaction | CRE8.XYZ');

    $scope.contentList = contentList;

    $scope.newContent = {};
    $scope.newReaction = {};

    //PACKAGE | NESTED RENDERING
    $scope.createContent = function(content) {
        if ($rootScope.currentUser){
            if(content){$scope.newContent.contentModel = content.id;}
            $scope.newContent.user = $rootScope.currentUser.id;
            $scope.newContent.transaction = $scope.transaction.id;
            ContentModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
            });
        }
        else{}
    };

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:'TRANSACTION', id:item.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            if (contentIndex != -1){$scope.contentList[index].reactions[type]++;}
            else{$scope.transaction.reactions[type]++;}
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: DEPRECIATE
    $scope.reply = function(item){
        var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
        if (contentIndex!=-1){$scope.contentList[contentIndex].showReply = !$scope.contentList[contentIndex].showReply}
        else{$scope.transaction.showReply = !$scope.transaction.showReply}
    };
    
    //TODO: SOCKETS
    $sailsSocket.subscribe('post', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.contentList.unshift(envelope.data);
                break;
        }
    });

}]);
