angular.module( 'conexus.transparency', [
])

.config(['$stateProvider', 'uiGmapGoogleMapApiProvider', function config( $stateProvider, uiGmapGoogleMapApiProvider ) {
	$stateProvider.state( 'transparency', {
		url: '/transparency',
		views: {
			"main": {
				controller: 'TransparencyCtrl',
				templateUrl: 'transparency/index.tpl.html'
			}
		}
	});
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDKPi-Krk_GCd_YfHS4ghUH3P4afPtPstA',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}])

.controller( 'TransparencyCtrl', ['$scope', 'titleService', function TransparencyController( $scope, titleService ) {
	titleService.setTitle('transparency | CRE8.XYZ');

    //TODO: REAL DATA
	$scope.chart = {
        chart: {
            zoomType: 'x',
        },
        series: [{
            id: 'Expenses',
            type: 'spline',
            name: 'Expenses',
            data: [65, 59, 80, 81, 56, 55, 40]
        },{
            id: 'Revenue',
            type: 'spline',
            name: 'Revenue',
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

    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };


}]);