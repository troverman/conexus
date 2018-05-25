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
	$scope.chart = {
        chart: {
            zoomType: 'x',
        },
        series: [{
            id: 'Expenses',
            type: 'spline',
            name: 'Expenses USD',
            data: [65, 59, 80, 81, 56, 55, 40]
        },{
            id: 'Revenue',
            type: 'spline',
            name: 'Revenue USD',
            data: [28, 48, 40, 19, 86, 27, 90]
        }],
        title: {
            text: ''
        },
        xAxis: {
            title: {
                text: null
            }
        },
        yAxis: {
            title: {
                text: null
            }
        },
        credits:{enabled:false},
    };
}]);