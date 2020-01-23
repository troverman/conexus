angular.module( 'conexus.login', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'login', {
		url: '/login',
		views: {"main": {controller: 'LoginCtrl', templateUrl: 'login/index.tpl.html'}}
	});
}])
.controller( 'LoginCtrl', ['$http','$location', '$rootScope', '$scope', function LoginController( $http, $location, $rootScope, $scope ) {
	if ($rootScope.currentUser){$location.path('/')}
	//CRAETES SESSION WITH SERVER
	//TODO: DECENTRALIZED SESSION MANAGEMENT.. ETC
	$scope.login = function(){
		var data = JSON.stringify($scope.newLogin);
		$http({method:'POST', url:'/auth/local', data:data}).then(function(newModel){
            $rootScope.currentUser = newModel.data;
            $location.path('/');
        });
	};
}]);
