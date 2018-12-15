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
            notifications: ['$stateParams', 'TimeModel', function($stateParams, TimeModel){
                //return TimeModel.getOne($stateParams.id);
                return null
            }],
        }
    });
}])

.controller( 'NotificationsController', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'notifications', 'titleService', function NotificationsController( $location, $sailsSocket, $sce, $scope, config, notifications, titleService) {
    titleService.setTitle('View | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.notifications = [];
}]);
