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
            attention: ['$stateParams', 'TimeModel', function($stateParams, AttentionModel){
                return AttentionModel.getSome({id:$stateParams.id});
            }],
        }
    });
}])

.controller( 'AttentionController', ['$scope', 'view', function AttentionController( $scope, view) {
}]);
