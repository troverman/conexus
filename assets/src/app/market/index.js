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
    $scope.orders.forEach(function(part, index) {
        if ($scope.orders[index].identiferSet){$scope.orders[index].identiferSet = $scope.orders[index].identiferSet.split(',');}
        if ($scope.orders[index].amountSet){$scope.orders[index].amountSet = $scope.orders[index].amountSet.split(',');}
        if ($scope.orders[index].identiferSet1){$scope.orders[index].identiferSet1 = $scope.orders[index].identiferSet1.split(',');}
        if ($scope.orders[index].amountSet1){ $scope.orders[index].amountSet1 = $scope.orders[index].amountSet1.split(',');}
    });
    $scope.newOrder.identiferSet = $scope.stateParams.id;
    $scope.trades = {};

    $scope.createOrder = function() {
        $scope.newOrder.identiferSet = $scope.stateParams.id;

        //TODO: PARSE INPUT
        //$scope.newOrder.amountSet = $scope.newOrder.amountSet.replace(/^(\d+(,\d+)*)?$/gm);
        //$scope.newOrder.amountSet1 = $scope.newOrder.amountSet1.replace(/^(\d+(,\d+)*)?$/gm);
        OrderModel.create($scope.newOrder).then(function(model) {
            $scope.orders.push($scope.newOrder);
            $scope.newOrder = {};
        });
    };

    $scope.newOrderToggle = function () {
        $scope.newOrderToggleVar = $scope.newOrderToggleVar ? false : true;
    };

}]);