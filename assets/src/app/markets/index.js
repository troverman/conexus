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
    $scope.markets = ['Education', 'Shelter', 'Food', 'Creation', 'Health', 'Security', 'Transparency', 'USD', 'ETH', 'BTC', 'STEEM', 'LTC', 'CRE8', 'onTime', 'onTimeStream', 'onReact', 'onPost','onOrder','onVote','onView','onValidate','onMine','NOVO','CONEX','DURHAM','ALCOA','MARYVILLE','CHAPEL HILL'];
    var length = $scope.markets.length;
    for (x in $scope.markets){
        $scope.markets.push($scope.markets[x]+'+5b0b34c1d0f57258271d8b17');
        $scope.markets.push($scope.markets[$scope.markets.length - length]+','+$scope.markets[$scope.markets.length - 1]);
    } 
    $scope.chartMap = {
        chart: {
            polar: true,
            margin: [30, 30, 30, 30]
        },
        series: [{
            id: 'values',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.2, 0.15, 0.15, 0.10, 0.15, 0.15, 0.1],
            color: 'rgba(153,0,0,0.3)',
            fillOpacity: 0.3,
        }],
        title: {text: ''},
        xAxis: {
            title: {text: null},
            categories: ['Education', 'Shelter', 'Food', 'Creation', 'Health', 'Security', 'Transparency'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            title: {text: null},
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        legend: {
            enabled: false,
            //align: 'right',
            //verticalAlign: 'top',
            //y: 70,
            //layout: 'vertical'
        },
        tooltip: {
        //    shared: true,
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

    $scope.keyPress = function(searchValue){
        $scope.markets = $scope.markets.filter(function(obj){
            console.log(obj.includes(searchValue))
            return obj.includes(searchValue);
        });
        //SearchModel.search(searchValue).then(function(models){
        //    $scope.searchResults = models;
        //});
    };
   

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

    $scope.reply = function(item){
        var index = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.orders[index].showReply = !$scope.orders[index].showReply
    };

}]);