angular.module( 'conexus.marketPair', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'marketPair', {
		url: '/market/:id/:id1',
		views: {
			"main": {
				controller: 'MarketPairCtrl',
				templateUrl: 'marketPair/index.tpl.html'
			}
		}
	});
}])

.controller( 'MarketPairCtrl', ['$scope', '$stateParams', 'titleService', function MarketPairController( $scope, $stateParams, titleService ) {
	titleService.setTitle('Marketplace | conex.us');
    $scope.stateParams = $stateParams;
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

    $scope.newOrderToggleVar = false;
    $scope.orders = [];
    $scope.newOrder = {};
    $scope.newOrder.orderIdentiferSet = $scope.stateParams.id;
    $scope.newOrder.orderIdentiferSet1 = $scope.stateParams.id1;
    $scope.trades = {};

    $scope.newOrderToggle = function () {
        $scope.newOrderToggleVar = $scope.newOrderToggleVar ? false : true;
    };

    $scope.createOrder = function() {
        $scope.orders.push($scope.newOrder);
        $scope.newOrder = {};
        $scope.newOrder.orderIdentiferSet = $scope.stateParams.id;
        $scope.newOrder.orderIdentiferSet1 = $scope.stateParams.id1;
        //OrderModel.create($scope.newOrder).then(function(model) {});
    };
    
}]);