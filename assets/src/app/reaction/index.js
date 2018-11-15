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
.controller( 'ReactionCtrl', ['$location', '$mdSidenav', '$rootScope', '$scope', 'config', 'titleService', function ReactionController( $location, $mdSidenav, $rootScope, $scope, config, titleService ) {
    titleService.setTitle('Register | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    if ($scope.currentUser){$location.path('/')}
    $scope.tokenToggle = function(){
        $mdSidenav('tokens').toggle();
        $rootScope.globalTokens = $scope.tokens;
    };
}]);