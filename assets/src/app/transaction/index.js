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
            contentList: ['ContentModel', 'transaction', function(ContentModel, transaction){
                return ContentModel.getSome('transaction', transaction.id, 100, 0, 'createdAt DESC');
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
    $scope.transaction = transaction;

    //PACKAGE | NESTED RENDERING
    $scope.createContent = function(content) {
        if ($scope.currentUser){
            if(content){$scope.newContent.post = content.id;}
            $scope.newContent.user = $scope.currentUser.id;
            $scope.newContent.transaction = $scope.transaction.id;
            ContentModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
            });
        }
        else{}
    };

    //TODO
    $scope.createReaction = function(content, type){
        $scope.newReaction.amount = 1;
        $scope.newReaction.post = content.id;
        $scope.newReaction.type = type;
        $scope.newReaction.user = $scope.currentUser.id;

        var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(content.id);

        if (type =='plus'){$scope.contentList[index].plusCount++}
        if (type =='minus'){$scope.contentList[index].minusCount++}
        ReactionModel.create($scope.newReaction).then(function(model){
            $scope.newReaction = {};
        });
    };

    $scope.reply = function(item){
        var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.contentList[index].showReply = !$scope.contentList[index].showReply
    };
    
    $scope.tokenToggle = function(){
        $mdSidenav('tokens').toggle();
        $rootScope.globalTokens = $scope.tokens;
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
