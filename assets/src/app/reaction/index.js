angular.module( 'conexus.reaction', [
])
.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'reaction', {
        url: '/reaction',
        views: {
            "main": {
                controller: 'ReactionCtrl',
                templateUrl: 'reaction/index.tpl.html'
            }
        }
    });
}])
.controller( 'ReactionCtrl', ['$location', '$scope', 'config', 'titleService', function ReactionController( $location, $scope, config, titleService ) {
    titleService.setTitle('Register | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    if ($scope.currentUser){$location.path('/')}
}]);