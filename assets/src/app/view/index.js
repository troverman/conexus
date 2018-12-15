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
        resolve: {
            view: ['$stateParams', 'TimeModel', function($stateParams, TimeModel){
                return TimeModel.getOne($stateParams.id);
            }],
        }
    });
}])

.controller( 'ViewController', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'titleService', 'view', function ViewController( $location, $sailsSocket, $sce, $scope, config, titleService, view) {
    titleService.setTitle('View | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
}]);
