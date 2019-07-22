angular.module( 'conexus.marketPair', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'marketPair', {
		url: '/market/:setAlpha/:setBeta',
		views: {
			"main": {
				controller: 'MarketPairCtrl',
				templateUrl: 'marketPair/index.tpl.html'
			}
		},
        
        //TODO: DEPRECIATE RESOLVE
        resolve:{
            orders: ['$stateParams', 'OrderModel', function($stateParams, OrderModel) {
                return OrderModel.getSome({setAlpha:$stateParams.setAlpha, setBeta:$stateParams.setBeta, limit:400, skip:0, sort:'createdAt DESC'});
            }],
            mirrorOrders: ['$stateParams', 'OrderModel', function($stateParams, OrderModel) {
                return OrderModel.getSome({setAlpha:$stateParams.setBeta, setBeta:$stateParams.setAlpha, limit:400, skip:0, sort:'createdAt DESC'});
            }],
            contentList: ['$stateParams', 'ContentModel', function($stateParams, ContentModel) {
                return ContentModel.getSome('marketPair', $stateParams.setAlpha, $stateParams.setBeta, 400, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'MarketPairCtrl', ['$mdSidenav', '$rootScope', '$scope', '$stateParams', 'contentList', 'cytoData', 'mirrorOrders', 'OrderModel', 'orders', 'ReactionModel', 'titleService', function MarketPairController( $mdSidenav, $rootScope, $scope, $stateParams, contentList, cytoData, mirrorOrders, OrderModel, orders, ReactionModel, titleService ) {
    
    $scope.stateParams = $stateParams;
    titleService.setTitle('Market | ' + $stateParams.setAlpha + ' | ' +  $stateParams.setBeta  + ' | CRE8.XYZ');

    $scope.contentList = contentList;
    $scope.market = $stateParams.setAlpha;
    $scope.market1 = $stateParams.setBeta;
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.pluralistic = false;
    if ($scope.market.split(',').length > 1 || $scope.market1.split(',').length > 1){$scope.pluralistic = true;}
    $scope.selectedType = 'ONBOOKS';


    //DIRECTED GRAPH
    $scope.layout = {name: 'circle', coolingFactor: 0, animate: true};
    $scope.options = {
        pixelRatio: 'auto',
        maxZoom:10,
        minZoom:0.1,
    };
    $scope.style = [
        {
            "selector": "core",
            "style": {
                "selection-box-color": "#AAD8FF",
                "selection-box-border-color": "#8BB0D0",
                "selection-box-opacity": "0.5"
            }
        }, {
            "selector": "node",
            "style": {
                "width": "25",
                "height": "25",
                "content": "data(name)",
                "font-size": "12px",
                "text-valign": "center",
                "text-halign": "center",
                "background-color": "#77828C",
                "text-outline-color": "#77828C",
                "text-outline-width": "2px",
                "color": "#fff",
                "overlay-padding": "3px",
                "z-index": "10"
            }
        }, {
            "selector": "node[?attr]",
            "style": {
                "shape": "rectangle",
                "background-color": "#aaa",
                "text-outline-color": "#aaa",
                "width": "8px",
                "height": "8px",
                "font-size": "3px",
                "z-index": "1"
            }
        }, {
            "selector": "node[?query]",
            "style": {
                "background-clip": "none",
                "background-fit": "contain"
            }
        }, {
            "selector": "node:selected",
            "style": {
                "border-width": "3px",
                "border-color": "#AAD8FF",
                "border-opacity": "0.5",
                "background-color": "#77828C",
                "text-outline-color": "#77828C"
            }
        }, {
            "selector": "edge",
            "style": {
                "curve-style": "bezier",
                "target-arrow-shape": "triangle",
                "arrow-scale":"0.75",
                "source-arrow-shape": "none",
                "opacity": "0.9",
                "line-color": "#bbb",
                "width": "3",
                "overlay-padding": "3px",
                'label': 'data(label)'
            }
        },
        {
            "selector": ".edgeLabelStyle",
            "style": {
                "text-background-opacity": 1,
                "color": "#fff",
                "font-size": "12px",
                "text-background-color": "#77828C",
                "text-background-shape": "roundrectangle",
                "text-border-color": "#e8e8e8",
                "text-border-width": 1,
                "text-border-opacity": 1
            }
        },
        {
            "selector": ".blue",
            "style": {
                "line-color": "#0000ff",
            }
        },
        {
            "selector": ".red",
            "style": {
                "line-color": "#ff0000",
            }
        },
        {
            "selector": "node.unhighlighted",
            "style": {
                "opacity": "0.2"
            }
        }, {
            "selector": "edge.unhighlighted",
            "style": {
                "opacity": "0.05"
            }
        }, {
            "selector": ".highlighted",
            "style": {
                "z-index": "999999"
            }
        }, {
            "selector": "node.highlighted",
            "style": {
                "border-width": "3px",
                "border-color": "#AAD8FF",
                "border-opacity": "0.5",
                "background-color": "#394855",
                "text-outline-color": "#394855"
            }
        }, {
            "selector": "edge.filtered",
            "style": {
                "opacity": "0"
            }
        }
    ];



    //TODO: BETTER
    $scope.mirrorOrders = mirrorOrders;
    $scope.mirrorOrders.forEach(function(part, index) {
        if ($scope.mirrorOrders[index].identiferSet){$scope.mirrorOrders[index].identiferSet = $scope.mirrorOrders[index].identiferSet.split(',');}
        if ($scope.mirrorOrders[index].amountSet){$scope.mirrorOrders[index].amountSet = $scope.mirrorOrders[index].amountSet.split(',');}
        if ($scope.mirrorOrders[index].identiferSet1){$scope.mirrorOrders[index].identiferSet1 = $scope.mirrorOrders[index].identiferSet1.split(',');}
        if ($scope.mirrorOrders[index].amountSet1){$scope.mirrorOrders[index].amountSet1 = $scope.mirrorOrders[index].amountSet1.split(',');}
    });

    //TODO: MARKETPAIROBJ
    $scope.percentChange = Math.random()*10;
    $scope.marketDepth = Math.random()*100000;

    //TODO: BETTER
    $rootScope.associatedModels = [{type:'MARKETPAIR',address:$stateParams.setAlpha+' | '+$stateParams.setBeta}]
    $rootScope.market = $stateParams.setAlpha;
    $rootScope.market1 = $stateParams.setBeta;

    //HMM
    $scope.selectedTab = 'INFORMATION';
    $scope.selectTab = function(model){
        $scope.selectedTab = model;
    };

    $scope.bidAskChart = {
        chart: {zoomType: 'x'},
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
        chart: {zoomType: 'x'},
        series: [],
        title: {text: ''},
        xAxis: {
            type: 'datetime',
            currentMin: 0,
            currentMax: 20,
            title: null,
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey'
        },
        yAxis: [{title: {text: null}}],
        credits:{enabled:false},
    };

    $scope.elementsObjCombinatorial = {};






    //JSON
    //TODO
    //market = {

        //setAlpha:{
            //[asset]:volume, price.. 
        //}

    //}

    $scope.generateGraph = function(model){

        var market = {
            setAlpha:{},
            setBeta:{},
        };

        //TODO: RETURN IMMUT MARKET STRUCTURE
        //THIS IS TAPE
        for (x in $stateParams.setAlpha.split(',')){
            market.setAlpha[$stateParams.setAlpha.split(',')[x]] = 'BUY' //TOTAL ORDER BOOK.... COMPUTED
        }

        for (x in $stateParams.setBeta.split(',')){
            market.setBeta[$stateParams.setBeta.split(',')[x]] = 'SELL'//TOTAL ORDER BOOK.... COMPUTED
        }

        var alphaNode = {
            group:'nodes',
            data:{id: Object.keys(market.setAlpha).join(','), name: Object.keys(market.setAlpha).join(',')}
        };
        var betaNode = {
            group:'nodes',
            data:{id:Object.keys(market.setBeta).join(','), name: Object.keys(market.setBeta).join(',')}
        };
        $scope.elementsObjCombinatorial[Object.keys(market.setAlpha).join(',')] = alphaNode;
        $scope.elementsObjCombinatorial[Object.keys(market.setBeta).join(',')] = betaNode;
        for (x in Object.keys(market.setBeta)){
            var edge = {
                group:'edges',
                data:{
                    id: Object.keys(market.setAlpha).join(',')+Object.keys(market.setBeta)[x]+'-'+Object.keys(market.setBeta).join(','), 
                    source: Object.keys(market.setBeta).join(','), 
                    target: Object.keys(market.setAlpha).join(','),
                    label: Object.keys(market.setBeta)[x]+':'+ market.setBeta[Object.keys(market.setBeta)[x]],
                },
                classes: ['edgeLabelStyle', 'blue'],
            };
            $scope.elementsObjCombinatorial[Object.keys(market.setAlpha).join(',')+Object.keys(market.setBeta)[x]+'-'+Object.keys(market.setBeta).join(',')] = edge;
        }
        for (x in Object.keys(market.setAlpha)){
            var edge = {
                group:'edges',
                data:{
                    id: Object.keys(market.setBeta).join(',')+Object.keys(market.setAlpha)[x]+'-'+Object.keys(market.setAlpha).join(','), 
                    source: Object.keys(market.setAlpha).join(','), 
                    target: Object.keys(market.setBeta).join(','),
                    label: Object.keys(market.setAlpha)[x]+':'+ market.setAlpha[Object.keys(market.setAlpha)[x]],
                },
                classes: ['edgeLabelStyle', 'red'],
            };
            $scope.elementsObjCombinatorial[Object.keys(market.setBeta).join(',')+Object.keys(market.setAlpha)[x]+'-'+Object.keys(market.setAlpha).join(',')] = edge;
        }
    };

    console.log(orders, mirrorOrders)
    $scope.generateGraph();



    //TEST

    cytoData.getGraph().then(function(graph){

        $scope.graph = graph;
        $scope.graph.edges().on('click', function(e){
            var clickedEdge = e.target;
            console.log(clickedEdge);
        });
       
    });

    //LOL HIGH CHARTS v_v
    $scope.$on('cy:node:click', function(ng,cy){
        console.log(cy.target);
        //console.log(cy.data)
        //console.log(cy._private.data)
    });

    $scope.$on('cy:edge:click', function(ng,cy){
        console.log(cy.target);
        console.log(ng)
        console.log(cy)
        //uh
        //console.log(cy.data)
        //console.log(cy._private);

    });

    $scope.parallelCoordinates = {
        chart: {
            zoomType: 'x',
            type: 'spline',
            parallelCoordinates: true,
            parallelAxes: {
                lineWidth: 2
            }
        },
        legend:{enabled:true},
        title: {text: null},
        xAxis: {
            title: {text: null},
            categories:[],
        },
        yAxis: {title: {text: null}},
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [],
        credits:{enabled:false},
    };

    //setAlpha is the line
    //setBeta is the coords
    //..comb decomposition

    for(x in $scope.stateParams.setAlpha.split(',')){

        var data = [];

        //todo: combinatorial
        for(y in $scope.stateParams.setBeta.split(',')){data.push(Math.random())}


        $scope.parallelCoordinates.series.push({
            name:$scope.stateParams.setAlpha.split(',')[x],
            data:data
        });
    }

    for (x in $stateParams.setBeta.split(',')){
        //todo: combinatorial
        $scope.parallelCoordinates.xAxis.categories.push($stateParams.setBeta.split(',')[x])
    }


    //POPULATE CHART MAP MARKET PLURALITY
    $scope.markets = $scope.market.split(',');
    $scope.markets1 = $scope.market1.split(',');


    //POPULATE!
    if (orders.length == 0){
        for(var i=-100;i<100;i++){
            if (i<0){$scope.bidAskChart.series[0].data.push([i+100000,i*i]);}
            if (i>0){$scope.bidAskChart.series[1].data.push([i+100000,i*i]);}
        }
    }
    $scope.bidAskChart.series[1].data.reverse();

    //TODO: PLURALISM VIZULATION
    if (!$scope.pluralistic){
        $scope.chart.series = [{
            id: 'ExchangePrice',
            type: 'spline',
            name: 'Exchange Price ' + $stateParams.setAlpha + ' | ' + $stateParams.setBeta,
            data: []
        },
        {
            id: 'ExchangeVolume',
            type: 'column',
            name: 'Volume ' + $stateParams.setAlpha + ' | ' + $stateParams.setBeta,
            data: []
        }, {
            type: 'sma',
            id: 'sma1',
            linkedTo: 'ExchangePrice',
            params: {
                period: 24
            },
            showInLegend: true,
        },{
            type: 'sma',
            id: 'sma2',
            linkedTo: 'ExchangePrice',
            params: {
                period: 24*7
            },
            showInLegend: true,
        }];
        for(var i=0;i<1000;i++){
            var date = new Date();
            date.setTime(date.getTime() - (60*60*1000*(1000-i)));
            if (i == 0){
                $scope.chart.series[0].data.push([date.getTime(),Math.floor(150*Math.random())])
                $scope.chart.series[1].data.push([date.getTime(),Math.floor(20*Math.random())])
            }
            else{
                var random = 1.21*Math.random();
                var random1 = Math.random();
                if (random > random1){
                    $scope.chart.series[0].data.push([date.getTime(),$scope.chart.series[0].data[i-1][1]+3*Math.random()])
                    $scope.chart.series[1].data.push([date.getTime(),20*Math.random()])
                }
                else{
                    $scope.chart.series[0].data.push([date.getTime(),$scope.chart.series[0].data[i-1][1]-3*Math.random()])
                    $scope.chart.series[1].data.push([date.getTime(),20*Math.random()])
                }
            }
        }
    }

    if ($scope.pluralistic){
        for (x in $scope.markets1){
            //TODO: POWER SET NOT JUST INDIV MARKETS
            $scope.chart.series.push({
                id: 'ExchangePrice'+x,
                type: 'spline',
                name: 'Exchange Price ' + $scope.markets[0] + ' | ' + $scope.markets1[x],
                data: []
            })
            for(var i=0;i<1000;i++){
                var date = new Date();
                date.setTime(date.getTime() - (60*60*1000*(1000-i)));
                if (i == 0){$scope.chart.series[x].data.push([date.getTime(),Math.floor(150*Math.random())])}
                else{
                    var random = 1.21*Math.random();
                    var random1 = Math.random();
                    if (random > random1){$scope.chart.series[x].data.push([date.getTime(),$scope.chart.series[x].data[i-1][1]+3*Math.random()])}
                    else{$scope.chart.series[x].data.push([date.getTime(),$scope.chart.series[x].data[i-1][1]-3*Math.random()])}
                }
            }
            
        }
    }
    if ($scope.market.split(',').length > 1 && $scope.market1.split(',').length > 1){}









    $scope.newOrder = {};
    $scope.orders = orders;
    $scope.orders.forEach(function(part, index) {
        if ($scope.orders[index].identiferSet){$scope.orders[index].identiferSet = $scope.orders[index].identiferSet.split(',');}
        if ($scope.orders[index].amountSet){$scope.orders[index].amountSet = $scope.orders[index].amountSet.split(',');}
        if ($scope.orders[index].identiferSet1){$scope.orders[index].identiferSet1 = $scope.orders[index].identiferSet1.split(',');}
        if ($scope.orders[index].amountSet1){ $scope.orders[index].amountSet1 = $scope.orders[index].amountSet1.split(',');}
    });
    $scope.newOrder.identiferSet = $scope.stateParams.setAlpha;
    $scope.newOrder.identiferSet1 = $scope.stateParams.setBeta;
    $scope.trades = {};



    //TODO | REFACTOR INTO orderBook {} | .bids, .asks

    //OrderBook ~ []
    //mapping(string => mapping(string => mapping(string => OrderMapping[]))) orderBook;
    //orderBook[_idSet1][_idSet2][_valueSet1];
    //['CRE8']['USD']['8888.8888'] = Positions Array []
    //bracket? ^ faces a query problem | event sorting? -- limit the query by event logs. good. 
    //bidAskChart[price][amount]

    //var orderObj = {}
    //if (orders.length > 0){
        //for (x in orders){
            //TODO: MULTI D SET | Price
            //[a,b,c] = [d,e,f]
            //[1,2,3] = [4,5,6]
            //[1a,2b,3c] = [4d,5e,6f] --> what manifolds does this create? 
            //(1a+2b+3c) = (4d+5e+6f) | a = 4d+5e+6f-2b-3c.., b = (4d+5e+6f-a-3c)/2.., c = (4d+5e+6f-a-2b)/3
            //MD IS THE MANIFORLD CREATOR.. WHY PPL SHOULD BE EXCITED ABOUT ARRAY EXCHANGE. IT IS FUNCTIONAL | MANIFOLD
            //ITS HUGE TO STAKE YOUR VALUE MAPS IN TERMS OTHERS | EQUALITY DOMAIN IS VASTLY EXPONENTIATED | HIGHER DIMENSIONAL POSITIONS
            //[a,b,c] = [d,e,f]
            //[2,2,3] = [5,5,6]
            //SCALABLE ALGEBRA | INTERWOVEN | SETS OF EQUATIONS | MD SET MARKETS AS SYSTEMS OF EQUATIONS

            //var price = orders[x].amountSet1/orders[x].amountSet;
            //if(!orderObj[price]){orderObj[price]=0}
            //orderObj[price] += parseFloat(orders[x].amountSet[0]);
        //}
    //}














    if(false){
        //TODO: REFACTOR && REDUCE
        var mirrorOrderObj = {};
        if (mirrorOrders.length > 0){
            for (x in mirrorOrders){
                var price = mirrorOrders[x].amountSet/mirrorOrders[x].amountSet1;
                if(!mirrorOrderObj[price]){mirrorOrderObj[price]=0}
                mirrorOrderObj[price] += parseFloat(mirrorOrders[x].amountSet[0]/price);
            }
        }

        //TODO: REFACTOR && REDUCE
        var orderArray = [];
        for (var item in orderObj) {orderArray.push([parseFloat(item), orderObj[item]]);}
        var mirrorOrderArray = [];
        for (var item in mirrorOrderObj) {mirrorOrderArray.push([parseFloat(item), mirrorOrderObj[item]]);}

        //TODO: SUM RENDER
        //TODO: SORT OBJECTS
        //TODO: REFACTOR && REDUCE
        orderArray = orderArray.sort(function(a,b) {return (parseFloat(a[0]) > parseFloat(b[0])) ? 1 : ((parseFloat(b[0]) > parseFloat(a[0])) ? -1 : 0);} ); 
        mirrorOrderArray = mirrorOrderArray.sort(function(a,b) {return (parseFloat(a[0]) > parseFloat(b[0])) ? 1 : ((parseFloat(b[0]) > parseFloat(a[0])) ? -1 : 0);} ); 

        $scope.sumOrders = [];
        orderArray.reduce(function(a,b,i) {return $scope.sumOrders[i] = parseFloat(a) + parseFloat(b[1]);}, 0);
        $scope.sumMirrorOrders = [];
        mirrorOrderArray.reverse().reduce(function(a,b,i) {return $scope.sumMirrorOrders[i] = parseFloat(a) + parseFloat(b[1]);}, 0);

        for(x in orderArray){$scope.bidAskChart.series[0].data.push([parseFloat(orderArray[x][0]), $scope.sumOrders[x]]);}
        for(x in mirrorOrderArray){$scope.bidAskChart.series[1].data.push([parseFloat(mirrorOrderArray[x][0]), $scope.sumMirrorOrders[x]]);}
        $scope.bidAskChart.series[1].data.reverse();
        $scope.bidAskChart.series.reverse();
    }

    //TODO: DEPRECIATE -- MOVE TO NAV
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            if (contentIndex != -1){
                $scope.newReaction.associatedModels = [{type:'CONTENT', id:item.id}];
                $scope.contentList[contentIndex].reactions[type]++;
            }
            var orderIndex = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
            if (orderIndex != -1){
                $scope.newReaction.associatedModels = [{type:'ORDER', id:item.id}];
                $scope.orders[orderIndex].reactions[type]++;
            }
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle();}
    };
   
    //TODO: DEPRECIATE -- MOVE TO NAV
    $scope.invertMarket = function() {
        var temp = $scope.newOrder.identiferSet;
        $scope.newOrder.identiferSet = $scope.newOrder.identiferSet1;
        $scope.newOrder.identiferSet1 = temp;
        $scope.inverted = !$scope.inverted;
    };

    //TODO: DEPRECIATE
    $scope.reply = function(item){
        var index = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.orders[index].showReply = !$scope.orders[index].showReply
    };

    $scope.replace = function(model){
        return model.replace(/,/g, '').replace(/\+/g, '')
    };

    $scope.selectType = function(type){$scope.selectedType = type;};
    
}]);