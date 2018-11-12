angular.module( 'conexus.validation', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'validation', {
        url: '/validation/:id',
        views: {
            "main": {
                controller: 'ValidationController',
                templateUrl: 'validation/index.tpl.html'
            }
        },
        resolve: {
            validation: ['$stateParams', 'ValidationModel', function($stateParams, ValidationModel){
                return ValidationModel.getSome('id', $stateParams.id, 1, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'ValidationController', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'titleService', 'validation', function ValidationController( $location, $sailsSocket, $sce, $scope, config, titleService, validation) {
    titleService.setTitle('Validation | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.validation = validation[0];
}]);
