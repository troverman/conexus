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
        //TODO: DEPRECIATE RESOLVE.. 
        resolve: {
            action: ['$stateParams', 'ActionModel', function($stateParams, ActionModel) {
                return ActionModel.get({id:$stateParams.id});
            }]
        }
    });
}])

.controller( 'ActionController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', '$stateParams', 'action', 'titleService', function ActionController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, $stateParams, action, titleService ) {

    $scope.action = action;
    titleService.setTitle($scope.action.id + ' | Action | CRE8.XYZ');

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
