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
        resolve: {
            attention: ['$stateParams', 'AttentionModel', function($stateParams, AttentionModel){
                return AttentionModel.get({id:$stateParams.id});
            }],
        }
    });
}])

.controller( 'AttentionController', ['$mdSidenav', '$sailsSocket', '$scope', 'attention', 'ReactionModel', 'titleService', function AttentionController( $mdSidenav, $sailsSocket, $scope, attention, ReactionModel, titleService) {
    
    $scope.attention = attention;

    titleService.setTitle('Attention | '+$scope.attention.id + ' | CRE8.XYZ');

    $sailsSocket.subscribe('attention', function (envelope) {
        if (envelope.verb == 'update'){
            if ($scope.attention.id == envelope.data.id){
                $scope.attention.data.apps = envelope.data.data.apps
            }
        }
    });

}]);
