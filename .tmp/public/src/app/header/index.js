angular.module( 'conexus.header', [
])

.controller( 'HeaderCtrl', function HeaderController( $scope, $state, config ) {
    $scope.currentUser = config.currentUser;
});