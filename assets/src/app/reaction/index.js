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
.controller( 'ReactionCtrl', ['$scope', function ReactionController( $scope ) {}]);