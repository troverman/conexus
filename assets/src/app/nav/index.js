angular.module( 'conexus.nav', [
])

.controller( 'NavCtrl', ['$mdSidenav', '$rootScope', '$scope', '$state', 'config', function NavController( $mdSidenav, $rootScope, $scope, $state, config ) {
    $scope.currentUser = config.currentUser;
    $rootScope.$on("$stateChangeSuccess", function() {
    	window.scrollTo(0, 0);
        $mdSidenav('right').close();
    });

    $scope.sideNavToggle = function(){
        $mdSidenav('right').toggle();
    };

    //TEMP
    $scope.cre8xyz = true;
    if (window.location.hostname.split('.')[window.location.hostname.split('.').length-1].toLowerCase()=='xyz'){$scope.cre8xyz = true;}

}])