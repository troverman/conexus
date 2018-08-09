angular.module( 'conexus.nav', [
])

.controller( 'NavCtrl', ['$rootScope', '$scope', '$state', 'config', function NavController( $rootScope, $scope, $state, config ) {
    $scope.currentUser = config.currentUser;
    $rootScope.$on("$stateChangeSuccess", function() {
    	window.scrollTo(0, 0);
    });
    //TEMP
    $scope.cre8xyz = false;
    if (window.location.hostname.split('.')[window.location.hostname.split('.').length-1].toLowerCase()=='cre8'){$scope.cre8xyz = true;}
    console.log(window.location.hostname.split('.'));

}])

//TODO: IMPROVE | ON EXIT CLICK CLOSE NAV
.directive('navCollapse', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var visible = false;

            element.on('show.bs.collapse', function () {
                visible = true;
            });

            element.on("hide.bs.collapse", function () {
                visible = false;
            });

            element.on('click', function(event) {
                if (visible && 'auto' == element.css('overflow-y')) {
                    element.collapse('hide');
                }
            });
        }
    };
});