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
                return AttentionModel.getSome({id:$stateParams.id});
            }],
        }
    });
}])

.controller( 'AttentionController', ['$scope', 'attention', function AttentionController( $scope, attention) {
    $scope.attention = attention;
    $scope.attention.model = 'ATTENTION';
}]);
