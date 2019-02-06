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
            token: ['$stateParams', 'TokenModel', function($stateParams, TokenModel) {
                return TokenModel.getSome('string', $stateParams.id, 1, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'MarketCtrl', [ '$rootScope', '$scope', '$stateParams', 'config', 'OrderModel', 'orders', 'titleService', 'token', function MarketController( $rootScope, $scope, $stateParams, config, OrderModel, orders, titleService, token ) {
    $scope.currentUser = config.currentUser;
    $scope.stateParams = $stateParams;
    titleService.setTitle('Market | ' + $stateParams.id + ' | CRE8.XYZ');

    $rootScope.associatedModels = [{
        address: $stateParams.id,
        type: 'MARKET',
    }];

    //$scope.market = {
    //    title: $scope.stateParams.id,
    //    circulation: Math.floor(Math.random()*1000000),
    //    marketCount: Math.floor(Math.random()*10000),
    //};
    $scope.newMarket = {};
    $scope.newOrder = {};
    $scope.newOrder.identiferSet = $scope.stateParams.id;
    $scope.orders = orders;
    $scope.orders.forEach(function(part, index) {
        //if ($scope.orders[index].identiferSet){$scope.orders[index].identiferSet = $scope.orders[index].identiferSet.split(',');}
        //if ($scope.orders[index].amountSet){$scope.orders[index].amountSet = $scope.orders[index].amountSet.split(',');}
        //if ($scope.orders[index].identiferSet1){$scope.orders[index].identiferSet1 = $scope.orders[index].identiferSet1.split(',');}
        //if ($scope.orders[index].amountSet1){ $scope.orders[index].amountSet1 = $scope.orders[index].amountSet1.split(',');}
    });
    $scope.token = token[0];
    $scope.trades = {};

    //PLUAR 2 COME :)
    $scope.bidAskChart = {
        chart: {
            zoomType: 'x',
            height:250,
        },
        legend:{enabled:true},
        title: {text: null},
        xAxis: {title: {text: null}},
        yAxis: {title: {text: null}},
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            type: 'area',
            id: 'asks',
            name: 'Asks',
            color: '#14b794',
            data: []
        },{
            type: 'area',
            id:  'bids',
            name: 'Bids',
            color: '#a94442',
            data: []
        }],
        credits:{enabled:false},
    };

	$scope.chart = {
        chart: {zoomType: 'x',},
        series: [{
            id: 'ExchangePrice',
            type: 'spline',
            name: 'Exchange Price' + $stateParams.id,
            data: [65, 59, 80, 81, 56, 55, 40]
        }],
        title: {text: ''},
        xAxis: {title: {text: null}},
        yAxis: {title: {text: null}},
        legend: {enabled:false},
        credits: {enabled:false},
    };

    $scope.chartMap = {
        chart: {
            polar: true,
            margin: [30, 30, 30, 30]
        },
        series: [],
        title: {text: ''},
        xAxis: {
            title: {text: null},
            categories: [],
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
            enabled: true,
            align: 'left',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },
        tooltip: {shared: true},
        credits:{enabled:false},
        legend: {enabled:false},
    };

    $scope.baseMarkets = [$scope.stateParams.id];
    $scope.markets = ['USD', 'ETH', 'BTC', 'STEEM', 'LTC', 'CRE8', 'CRE8+TIME', 'CRE8+TIME+EDUCATION', 'CRE8+TIME+SHELTER', 'CRE8+TIME+FOOD', 'CRE8+TIME+CREATION', 'CRE8+TIME+HEALTH', 'CRE8+TIME+SECURITY', 'CRE8+TIME+REST', 'CRE8+STREAM', 'CRE8+REACT','CRE8+REACT+LIKE','CRE8+REACT+DISLIKE','CRE8+POST','CRE8+VALIDATE','CRE8+VIEW','CRE8+MINE','NOVO','CONEX','DURHAM','ALCOA','MARYVILLE','CHAPEL HILL'];
    
    //POWER SET
    function getAllSubsets(theArray) {
      return theArray.reduce(function (subsets, value) {
        return subsets.concat(subsets.map(function (set) {
          return [value].concat(set);
        }));
      }, [[]]);
    };

    $scope.graphData = {
        nodes:[{name:$stateParams.id}], 
        links:[]
    };

    var powerSet = getAllSubsets(['A','B','C','D','E']);
    powerSet.shift();
    for (x in powerSet){
        //$scope.graphData.nodes.push({name:powerSet[x]})
        for (y in powerSet){
            //if (!poweSet[x] is in powerSet[y]){
            //$scope.graphData.links.push({value:1, source:parseInt(x), target:parseInt(y)});
            //}
        }
    }

    //for (x in $scope.markets){
    //    var length = $scope.graphData.nodes.length;
    //    $scope.graphData.nodes.push({name:$scope.markets[x]});
    //    $scope.graphData.links.push({value:1, source:0, target:length});
    //}

    //RECURSIVE TRAVERSAL
    function traverse(n, depth){
        n++;
        if (n < depth){

            //var length = $scope.graphData.nodes.length;
            //$scope.graphData.nodes.push({name:n});
            //$scope.graphData.links.push({value:1, source:0, target:length});
            for (x in $scope.markets){
                var length = $scope.graphData.nodes.length;
                $scope.graphData.nodes.push({name:$scope.markets[x]});
                $scope.graphData.links.push({value:1, source:n, target:length});
            }

            traverse(n, depth);

        }

    };
    traverse(0, $scope.markets.length);


    //TEST!
    $scope.graphOptions = {
        chart: {
            type: 'forceDirectedGraph',
            height: 450,
            //width: (function(){ return nv.utils.windowSize().width })(),
            margin:{top: 0, right: 0, bottom: 0, left: 0},
            color: function(d){
                return  d3.scale.category20()(d.group)
            },
            nodeExtras: function(node) {
                node && node
                  .append("text")
                  .attr("dx", 8)
                  .attr("dy", ".35em")
                  .text(function(d) { return d.name })
                  .style('font-size', '10px');
            }
        }
    };

    for (x in $scope.baseMarkets){
        var random1 = Math.floor(255*Math.random());
        var random2 = Math.floor(255*Math.random());
        var random3 = Math.floor(255*Math.random());
        $scope.chartMap.series.push({
            id: 'values'+x,
            type: 'area',
            name: $scope.baseMarkets[x],
            pointPlacement: 'on',
            data: [],
            color: 'rgba('+random1+','+random2+','+random3+',0.3)',
            fillOpacity: 0.3,
        });
    }

    for (x in $scope.markets){
        var length = $scope.markets.length;
        //$scope.markets.push($scope.markets[x]+'+5b0b34c1d0f57258271d8b17');
        //$scope.markets.push($scope.markets[$scope.markets.length - length]+','+$scope.markets[$scope.markets.length - 1]);
    }
   
    for (x in $scope.markets){
        $scope.chartMap.xAxis.categories.push($scope.markets[x]);
        for (y in $scope.baseMarkets){
            $scope.chartMap.series[y].data.push((1+1*Math.random())/2);
        }
    }

    for(var i=-1000;i<1000;i++){
        if (i>0){$scope.bidAskChart.series[1].data.push([i+100000,i*i]);}
        if (i<0){$scope.bidAskChart.series[0].data.push([i+100000,i*i]);}
    }
    
    //TODO: FILTER NAV
    $scope.addMarket = function(type, market){
        if (type="baseMarket"){$scope.baseMarkets.push($scope.newMarket.baseMarket)}
        if (type="market"){$scope.markets.push($scope.newMarket.market)}
    };

    $scope.reply = function(item){
        var index = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.orders[index].showReply = !$scope.orders[index].showReply
    };

}]);