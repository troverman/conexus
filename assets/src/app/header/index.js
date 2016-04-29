angular.module( 'conexus.header', [
])

.controller( 'HeaderCtrl', function HeaderController( $scope, $state, config, $rootScope ) {
    $scope.currentUser = config.currentUser;
    $rootScope.$on("$stateChangeSuccess", function() {
    	window.scrollTo(0, 0);
    });
});