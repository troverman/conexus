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
                return TransactionModel.getSome('id', $stateParams.id, 1, 0, 'createdAt DESC');
            }],
            contentList: ['ContentModel', 'transaction', function(ContentModel, transaction){
                return ContentModel.getSome('transaction', transaction[0].id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'TransactionController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'contentList', 'ContentModel', 'lodash', 'ReactionModel', 'titleService', 'transaction', function TransactionController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, contentList, ContentModel, lodash, ReactionModel, titleService, transaction ) {
    titleService.setTitle('Transaction | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.contentList = contentList;
    $scope.transaction = transaction[0];

    console.log(transaction)

    //PACKAGE | NESTED RENDERING
    $scope.createContent = function(content) {
        if ($scope.currentUser){
            if(content){$scope.newContent.contentModel = content.id;}
            $scope.newContent.user = $scope.currentUser.id;
            $scope.newContent.transaction = $scope.transaction.id;
            ContentModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
            });
        }
        else{}
    };

    //TODO
    $scope.createReaction = function(item, type){
        if($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:'TRANSACTION', id:item.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
            var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            if (contentIndex != -1){$scope.contentList[index].reactions[type]++;}
            else{$scope.transaction.reactions[type]++;}
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.reply = function(item){
        var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
        if (contentIndex!=-1){$scope.contentList[contentIndex].showReply = !$scope.contentList[contentIndex].showReply}
        else{$scope.transaction.showReply = !$scope.transaction.showReply}
    };
    
    $sailsSocket.subscribe('post', function (envelope) {
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
