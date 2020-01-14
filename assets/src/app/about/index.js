angular.module( 'conexus.about', [])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'about', {
		url: '/about',
		views: {
			"main": {
				controller: 'AboutCtrl',
				templateUrl: 'about/index.tpl.html'
			}
		}
	});
}])

.controller( 'AboutCtrl', ['$rootScope', '$scope', function AboutController( $rootScope, $scope ) {
    $rootScope.showMap = false;
    //$scope.videos = ['videos/rocket.webm','videos/cube.mp4','videos/energy.mp4', 'videos/galaxies.mp4','videos/geometry.mp4', 'videos/video.mp4']
    //$scope.selectedVideo = $scope.videos[Math.floor(Math.random()*$scope.videos.length)];
    $scope.selectedVideo = 'videos/cube.mp4';
    $scope.map = {center: {latitude: 35.902023, longitude: -84.1507067 }, zoom: 9};
}]);