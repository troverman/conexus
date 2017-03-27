angular.module( 'conexus.connect', [
])

.config(['$stateProvider', 'uiGmapGoogleMapApiProvider', function config( $stateProvider, uiGmapGoogleMapApiProvider ) {
	$stateProvider.state( 'connect', {
		url: '/connect',
		views: {
			"main": {
				controller: 'ConnectCtrl',
				templateUrl: 'connect/index.tpl.html'
			}
		}
	});
	uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDKPi-Krk_GCd_YfHS4ghUH3P4afPtPstA',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}])

.controller( 'ConnectCtrl', ['$scope', 'titleService', 'UserModel', 'uiGmapGoogleMapApi', function ConnectController( $scope, titleService, UserModel, uiGmapGoogleMapApi ) {
	titleService.setTitle('connect - conex.us');

	$scope.map = {
		center: {latitude: 39.443659, longitude: -83.082276 },
		zoom: 8
	};
	$scope.options = {scrollwheel: false};
	$scope.windowOptions = {visible: false};


	UserModel.getAll().then(function(users){
		$scope.users = users;
	});

}]);