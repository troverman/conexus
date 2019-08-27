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

.controller( 'AttentionController', ['$sailsSocket', '$scope', 'attention', 'titleService', function AttentionController( $sailsSocket, $scope, attention, titleService) {
    $scope.attention = attention;
    $scope.attention.model = 'ATTENTION';

    titleService.setTitle('Attention | '+$scope.attention.id + ' | CRE8.XYZ');

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
