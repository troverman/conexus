angular.module( 'conexus.action', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'action', {
        url: '/action/:id',
        views: {
            "main": {
                controller: 'ActionController',
                templateUrl: 'action/index.tpl.html'
            }
        },
        resolve: {
            action: ['$stateParams', 'ActionModel', function($stateParams, ActionModel) {
                return ActionModel.get({id:$stateParams.id});
            }]
        }
    });
}])

.controller( 'ActionController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', '$stateParams', 'action', 'ReactionModel', 'titleService', function ActionController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, $stateParams, action, ReactionModel, titleService ) {

    $scope.action = action;
    titleService.setTitle($scope.action.id + ' | Action | CRE8.XYZ');

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction = {
                amount:1,
                type:type,
                user:$rootScope.currentUser.id,
                associatedModels:[{type:'ACTION', id:item.id}],
            };
            $scope.action.data.apps.reactions[type]++;
            ReactionModel.create($scope.newReaction);
            $rootScope.pop(type, item.id);
        }
        else{$mdSidenav('login').toggle()}
    };

    $sailsSocket.subscribe('action', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                if ($scope.action.id == envelope.data.id){
                    $scope.action.data.apps.attention = envelope.data.data.apps.attention;
                }
                break;
        }
    });

}]);
