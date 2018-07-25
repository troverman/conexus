angular.module( 'conexus.market', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'market', {
		url: '/market/:id',
		views: {
			"main": {
				controller: 'MarketCtrl',
				templateUrl: 'market/index.tpl.html'
			}
		},
        resolve:{
            orders: ['$stateParams', 'OrderModel', function($stateParams, OrderModel) {
                return OrderModel.getSome('market', $stateParams.id, '', 100, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'MarketCtrl', ['$scope', '$stateParams', 'OrderModel', 'orders', 'titleService', function MarketController( $scope, $stateParams, OrderModel, orders, titleService ) {
	titleService.setTitle('Marketplace | conex.us');
    $scope.stateParams = $stateParams;
	$scope.chart = {
        chart: {
            zoomType: 'x',
        },
        series: [{
            id: 'ExchangePrice',
            type: 'spline',
            name: 'Exchange Price' + $stateParams.id,
            data: [65, 59, 80, 81, 56, 55, 40]
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
    $scope.newOrder = {};
    $scope.newOrderToggleVar = false;
    $scope.orders = orders;
    $scope.newOrder.identiferSet = $scope.stateParams.id;
    $scope.trades = {};

    $scope.createOrder = function() {
        $scope.newOrder.identiferSet = $scope.stateParams.id;
        OrderModel.create($scope.newOrder).then(function(model) {
            $scope.orders.push($scope.newOrder);
            $scope.newOrder = {};
        });
    };

    $scope.newOrderToggle = function () {
        $scope.newOrderToggleVar = $scope.newOrderToggleVar ? false : true;
    };

}]);