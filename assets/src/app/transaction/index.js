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

.controller( 'TransactionController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'ReactionModel', 'titleService', 'transaction', function TransactionController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, ReactionModel, titleService, transaction ) {
    
    $scope.transaction = transaction;
    if(!$scope.transaction){$location.path('/')}    
    titleService.setTitle('Transaction | ' + $scope.transaction.id + ' | CRE8.XYZ');

    console.log($scope.transaction);

    //COMPUTE THIS!!
    $scope.transaction.context = [];
    if ($scope.transaction.associationModels){
        for (x in $scope.transaction.associationModels){
            for (y in Object.keys($scope.transaction.associationModels[x].context)){
                var context = Object.keys($scope.transaction.associationModels[x].context)[y];
                $scope.transaction.context.push(context);
            }
        }
    }

    $scope.selectedTab = 'INFORMATION';
    $scope.selectTab = function(model){$scope.selectedTab = model;};

    $sailsSocket.subscribe('transaction', function (envelope) {
        console.log(envelope)
        if (envelope.verb == 'update'){
            if ($scope.transaction.id == envelope.data.id){
                $scope.transaction.data.apps = envelope.data.data.apps
            }
        }
    });

}]);
