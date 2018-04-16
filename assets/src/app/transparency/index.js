angular.module( 'conexus.transparency', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'transparency', {
		url: '/transparency',
		views: {
			"main": {
				controller: 'TransparencyCtrl',
				templateUrl: 'transparency/index.tpl.html'
			}
		}
	});
}])

.controller( 'TransparencyCtrl', ['$scope', 'titleService', function TransparencyController( $scope, titleService ) {
	titleService.setTitle('transparency | conex.us');
	$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
}]);