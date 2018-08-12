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
		},
        resolve:{
            orders: ['OrderModel', function(OrderModel) {
                return OrderModel.getSome('', '', '', 100, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'MarketsCtrl', ['$scope', 'config', 'OrderModel', 'orders', 'titleService', function MarketsController( $scope, config, OrderModel, orders, titleService ) {
	titleService.setTitle('Market | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.chart = {
        chart: {
            zoomType: 'x',
        },
        series: [{
            id: 'ExchangePrice',
            type: 'spline',
            name: 'Exchange Price',
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
        $scope.orders.forEach(function(part, index) {
        if ($scope.orders[index].identiferSet){$scope.orders[index].identiferSet = $scope.orders[index].identiferSet.split(',');}
        if ($scope.orders[index].amountSet){$scope.orders[index].amountSet = $scope.orders[index].amountSet.split(',');}
        if ($scope.orders[index].identiferSet1){$scope.orders[index].identiferSet1 = $scope.orders[index].identiferSet1.split(',');}
        if ($scope.orders[index].amountSet1){ $scope.orders[index].amountSet1 = $scope.orders[index].amountSet1.split(',');}
    });
    $scope.trades = {};

    //TODO: CREATE ORDER | REFACTOR
    $scope.createOrder = function() {
        $scope.newOrder.user = $scope.currentUser.id;

        //TODO: PARSE INPUT
        //$scope.newOrder.amountSet.replace(/^(\d+(,\d+)*)?$/gm);
        //$scope.newOrder.amountSet1.replace(/^(\d+(,\d+)*)?$/gm);
        OrderModel.create($scope.newOrder).then(function(model) {
            $scope.orders.push($scope.newOrder);
            $scope.newOrder = {};
        });
    };

    $scope.newOrderToggle = function () {
        $scope.newOrderToggleVar = $scope.newOrderToggleVar ? false : true;
    };

}]);