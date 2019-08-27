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
                return TransactionModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }]
        }
    });
}])

.controller( 'TransactionController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'ReactionModel', 'titleService', 'transaction', function TransactionController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, ReactionModel, titleService, transaction ) {
    
    $scope.transaction = transaction[0];
    $scope.transaction.model = 'TRANSACTION';
    
    titleService.setTitle($scope.transaction.id + ' | Transaction | CRE8.XYZ');

    $scope.newReaction = {};
   
    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction = {
                amount:1,
                type:type,
                user:$rootScope.currentUser.id,
                associatedModels:[{type:'TRANSACTION', id:item.id}],
            };
            $scope.transaction.data.apps.reactions[type]++;
            ReactionModel.create($scope.newReaction);
            $rootScope.pop(type, item.id);
        }
        else{$mdSidenav('login').toggle()}
    }; 

    //TODO: SOCKETS
    $sailsSocket.subscribe('transaction', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                if ($scope.transaction.id == envelope.data.id){
                    $scope.transaction.data.apps.attention = envelope.data.data.apps.attention;
                }
                break;
        }
    });

}]);
