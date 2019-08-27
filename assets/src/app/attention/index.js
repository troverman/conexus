angular.module( 'conexus.attention', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'attention', {
        url: '/attention/:id',
        views: {
            "main": {
                controller: 'AttentionController',
                templateUrl: 'attention/index.tpl.html'
            }
        },
        
        //TODO: DEPRECIATE RESOLVE
        resolve: {
            attention: ['$stateParams', 'AttentionModel', function($stateParams, AttentionModel){
                return AttentionModel.get({id:$stateParams.id});
            }],
        }
    });
}])

.controller( 'AttentionController', ['$mdSidenav', '$sailsSocket', '$scope', 'attention', 'ReactionModel', 'titleService', function AttentionController( $mdSidenav, $sailsSocket, $scope, attention, ReactionModel, titleService) {
    $scope.attention = attention;
    $scope.attention.model = 'ATTENTION';

    titleService.setTitle('Attention | '+$scope.attention.id + ' | CRE8.XYZ');

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction = {
                amount:1,
                type:type,
                user:$rootScope.currentUser.id,
                associatedModels:[{type:'TIME', id:item.id}],
            };
            $scope.attention.data.apps.reactions[type]++;
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}
    }; 

    $sailsSocket.subscribe('attention', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                if ($scope.attention.id == envelope.data.id){
                    $scope.attention.data.apps.attention = envelope.data.data.apps.attention;
                }
                break;
        }
    });

}]);
