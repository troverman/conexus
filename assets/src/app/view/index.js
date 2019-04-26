angular.module( 'conexus.view', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'view', {
        url: '/view/:id',
        views: {
            "main": {
                controller: 'ViewController',
                templateUrl: 'view/index.tpl.html'
            }
        },
        
        //TODO: DEPRECIATE RESOLVE
        resolve: {
            view: ['$stateParams', 'TimeModel', function($stateParams, TimeModel){
                return TimeModel.getSome({id:$stateParams.id});
            }],
        }
    });
}])

.controller( 'ViewController', ['$scope', 'view', function ViewController( $scope, view) {
}]);
