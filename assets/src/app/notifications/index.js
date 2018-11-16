angular.module( 'conexus.notifications', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'notifications', {
        url: '/notifications',
        views: {
            "main": {
                controller: 'NotificationsController',
                templateUrl: 'notifications/index.tpl.html'
            }
        },
        resolve: {
            view: ['$stateParams', 'WorkModel', function($stateParams, WorkModel){
                //return WorkModel.getOne($stateParams.id);
                return null
            }],
        }
    });
}])

.controller( 'NotificationsController', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'PostModel', 'titleService', 'view', function NotificationsController( $location, $sailsSocket, $sce, $scope, config, PostModel, titleService, view) {
    titleService.setTitle('View | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
}]);
