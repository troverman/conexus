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

    $sailsSocket.subscribe('action', function (envelope) {
        console.log(envelope)
        if (envelope.verb == 'update'){
            if ($scope.action.id == envelope.data.id){
                $scope.action.data.apps = envelope.data.data.apps
            }
        }
    });

}]);
