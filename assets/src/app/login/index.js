angular.module( 'conexus.login', [
])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'login', {
		url: '/login',
		views: {
			"main": {
				controller: 'LoginCtrl',
				templateUrl: 'login/index.tpl.html'
			}
		}
	});
}])
.controller( 'LoginCtrl', ['$http','$location', '$rootScope', '$scope', 'config', 'titleService', function LoginController( $http, $location, $rootScope, $scope, config, titleService ) {
	titleService.setTitle('Login | CRE8.XYZ');
	$scope.currentUser = config.currentUser;
	if ($scope.currentUser){$location.path('/')}
	//CRAETES SESSION WITH SERVER
	$scope.login = function(){
		var data = JSON.stringify($scope.newLogin);
		$http({method:'POST', url:'/auth/local', data:data}).then(function(newModel){
            console.log(newModel.data);
            //MEG
            config.currentUser = newModel.data;
            $rootScope.currentUser = newModel.data;
            $location.path('/');
        });
	};
}]);
