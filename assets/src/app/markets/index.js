angular.module( 'conexus.markets', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'markets', {
		url: '/market',
		views: {
			"main": {
				controller: 'MarketsCtrl',
				templateUrl: 'markets/index.tpl.html'
			}
		}
	});
}])

.controller( 'MarketsCtrl', ['$scope', 'titleService', function MarketsController( $scope, titleService ) {
	titleService.setTitle('Marketplace | conex.us');
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