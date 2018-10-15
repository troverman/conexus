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
            view: ['$stateParams', 'WorkModel', function($stateParams, WorkModel){
                return WorkModel.getOne($stateParams.id);
            }],
        }
    });
}])

.controller( 'ViewController', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'PostModel', 'titleService', 'view', function ViewController( $location, $sailsSocket, $sce, $scope, config, PostModel, titleService, view) {
    titleService.setTitle('Work | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
   

}]);
