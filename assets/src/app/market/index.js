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
        
        //TODO: DEPRECIATE RESOLVE
        resolve:{
            orders: ['$stateParams', 'OrderModel', function($stateParams, OrderModel) {
                return OrderModel.getSome({market:$stateParams.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            token: ['$stateParams', 'TokenModel', function($stateParams, TokenModel) {
                return TokenModel.getSome({string:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
        }
	});
}])

.controller( 'MarketCtrl', [ '$rootScope', '$scope', '$stateParams', 'cytoData', 'OrderModel', 'orders', 'titleService', 'token', function MarketController( $rootScope, $scope, $stateParams, cytoData, OrderModel, orders, titleService, token ) {
   
    $scope.stateParams = $stateParams;
    
    titleService.setTitle('Market | ' + $stateParams.id + ' | CRE8.XYZ');

    $rootScope.associatedModels = [{
        address: $stateParams.id,
        type: 'MARKET',
    }];

    $scope.baseMarkets = [$scope.stateParams.id];

    $scope.manifolds = [
        {title:'+CREDIT', manifolds:'+INTEREST'},
        {title:'+DEBT', manifolds:'+TIME'},
        {title:'+FUTURE', manifolds:'+TIME'},
        {title:'+OPTION', manifolds:'+TIME'},
        {title:'+SPONSOR', manifolds:'+ADDRESS'},
    ];

    $scope.markets = [];
    $scope.newMarket = {};
    $scope.newOrder = {};
    $scope.newOrder.identiferSet = $scope.stateParams.id;
    $scope.orders = orders;
    $scope.selectedTab = 'MARKET';
    $scope.token = token[0];
    $scope.trades = {};

    //TODO: BUILD LOGIC FOR STING LANGUAGE // MANIFOLD ENCODING .. HASH
    $scope.stringInterpreter = function(model){
        var sentence = model.split('+');
        var selectedModel = sentence.filter(function(n) {
            return ['CONTENT','ITEM','ORDER','PROJECT','TASK','TIME','TRANSACTION','VALIDATION'].indexOf(n) !== -1;
        })[0];
        //if sentence.contains()
        return {model:selectedModel, id:sentence[sentence.length-1]};
    };

    if ($scope.token){$scope.modelToken = $scope.stringInterpreter($scope.token.string);}


    //TODO: RESEARCH & CODE
    //COMPUTATION 
    //SOME COMPUTATION.. (COMPUTE TO LATTICE IMMUTABLE STRUCT)
    //COMBO ORDER VS + AND ARRAY OF ORDERS;
    //COMBINATORIAL OPTION IN MARKET TYPE (INTERLINK IN POOLS)
    //COMBO VS PLURAL VS COMPUTED COMB
    //(DIRECT SINGULAR ASSETS, DIRECT PLUR ASSETS, COMP PLUR ASSETS)

    //TODO: DOCUMENT ALGS!
    //ORDER MATHCHING.. HIGHEST DIM ORDERS 1ST
    //TRAVERSAL TENSORS
    //ROTATIONAL ETNSORS
    //MODULATIONS OF IMMUTABLE
    //GET SETS --> SORT BY NUMBER OF SETBETA OBJKEY COUNT
    for (x in $scope.orders){
        //$scope.orders[x].setAlpha
        if ($scope.orders[x].setBeta){


            //POWER SET.. WITH RESPECT TO HIGH D.. LOOK AT HIGHEST DIM
            //HIGH DIMS IMMEDIATLY DECOMPOSE 
            if (Object.keys($scope.orders[x].setBeta).length > 1){
                if ($scope.markets.indexOf(assetIdentifier) == -1){
                    $scope.markets.push({
                        string:Object.keys($scope.orders[x].setBeta).join(','), 
                        info:{
                            rate:Math.random(),
                            dailyChange:Math.random(),
                            marketDepth:Math.random(),
                        },
                        model:'MARKET',
                    });
                }
            }
            for (y in Object.keys($scope.orders[x].setBeta)){
                var assetIdentifier = Object.keys($scope.orders[x].setBeta)[y];
                if ($scope.markets.indexOf(assetIdentifier) == -1){
                    $scope.markets.push({
                        string:assetIdentifier, 
                        info:{
                            rate:Math.random(),
                            dailyChange:Math.random(),
                            marketDepth:Math.random(),
                        },
                        model:'MARKET',
                    });
                }
            }
        }
    }

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

    //TODO: HMM
    //GENERATE
    for(var i=-1000;i<1000;i++){
        if (i>0){$scope.bidAskChart.series[1].data.push([i+100000,i*i]);}
        if (i<0){$scope.bidAskChart.series[0].data.push([i+100000,i*i]);}
    }
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
        $scope.chartMap.xAxis.categories.push($scope.markets[x]);
        for (y in $scope.baseMarkets){
            $scope.chartMap.series[y].data.push((1+1*Math.random())/2);
        }
    }

    //DEFAULT GENERATOR
    if ($scope.orders.length == 0){
        $scope.marketString = ['USD', 'ETH', 'BTC', 'STEEM', 'LTC', 'CRE8', 'CRE8+TIME', 'CRE8+TIME+EDUCATION', 'CRE8+TIME+SHELTER', 'CRE8+TIME+FOOD', 'CRE8+TIME+CREATION', 'CRE8+TIME+HEALTH', 'CRE8+TIME+SECURITY', 'CRE8+TIME+REST', 'CRE8+STREAM', 'CRE8+REACT','CRE8+REACT+LIKE','CRE8+REACT+DISLIKE','CRE8+POST','CRE8+VALIDATE','CRE8+VIEW','CRE8+MINE','NOVO','CONEX','DURHAM','ALCOA','MARYVILLE','CHAPEL HILL'];
        for (x in $scope.marketString){
            $scope.markets.push({
                string:$scope.marketString[x], 
                info:{
                    rate:Math.random(),
                    dailyChange:Math.random(),
                    marketDepth:Math.random(),
                },
                model:'MARKET'
            });
        }
    }

    //TODO: FILTER NAV
    $scope.addMarket = function(type, market){
        if (type="baseMarket"){$scope.baseMarkets.push($scope.newMarket.baseMarket)}
        if (type="market"){$scope.markets.push($scope.newMarket.market)}
    };
    
    $scope.selectTab = function(model){$scope.selectedTab = model;};

    $scope.reply = function(item){
        var index = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.orders[index].showReply = !$scope.orders[index].showReply
    };











    //GRAPH HERE

    //TODO: LATTICE NEIGHBORHOOD..
    //TENSOR BRAID
    //TRAVERSAL
    //MATCHING RULES
    
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

    $scope.graphOptions = {
        chart: {
            type: 'forceDirectedGraph',
            height: 250,
            margin:{top: 0, right: 0, bottom: 0, left: 0},
            color: function(d){return  d3.scale.category20()(d.group)},
            tooltip: {contentGenerator: function(d){return ""; }},
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

    $scope.graphDataPower = {
        nodes:[],
        links:[]
    };







    $scope.options = {
        textureOnViewport:true,
        pixelRatio: 'auto',
        motionBlur: false,
        hideEdgesOnViewport:true
    };
    $scope.layout = {name: 'random'};
    $scope.style1 = [
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
            "width": "mapData(score, 0, 0.006769776522008331, 10, 30)",
            "height": "mapData(score, 0, 0.006769776522008331, 10, 30)",
            "content": "data(name)",
            "font-size": "12px",
            "text-valign": "center",
            "text-halign": "center",
            "background-color": "#555",
            "text-outline-color": "#555",
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
            "curve-style": "haystack",
            "haystack-radius": "0.5",
            "opacity": "0.9",
            "line-color": "#bbb",
            "width": "mapData(weight, 0, 1, 1, 1)",
            "overlay-padding": "3px"
          }
        }, {
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
        }, {
          "selector": "edge[group=\"coexp\"]",
          "style": {
            "line-color": "#d0b7d5"
          }
        }, {
          "selector": "edge[group=\"coloc\"]",
          "style": {
            "line-color": "#a0b3dc"
          }
        }, {
          "selector": "edge[group=\"gi\"]",
          "style": {
            "line-color": "#90e190"
          }
        }, {
          "selector": "edge[group=\"path\"]",
          "style": {
            "line-color": "#9bd8de"
          }
        }, {
          "selector": "edge[group=\"pi\"]",
          "style": {
            "line-color": "#eaa2a2"
          }
        }, {
          "selector": "edge[group=\"predict\"]",
          "style": {
            "line-color": "#f6c384"
          }
        }, {
          "selector": "edge[group=\"spd\"]",
          "style": {
            "line-color": "#dad4a2"
          }
        }, {
          "selector": "edge[group=\"spd_attr\"]",
          "style": {
            "line-color": "#D0D0D0"
          }
        }, {
          "selector": "edge[group=\"reg\"]",
          "style": {
            "line-color": "#D0D0D0"
          }
        }, {
          "selector": "edge[group=\"reg_attr\"]",
          "style": {
            "line-color": "#D0D0D0"
          }
        }, 
        {
          "selector": "edge[group=\"user\"]",
          "style": {
            "line-color": "#f0ec86"
          }
        },
        {
          "selector": "highlighted",
          "style": {
            "background-color": "#61bffc",
            "line-color": "#61bffc",
            "target-arrow-color": "#61bffc",
            "transition-property": "background-color, line-color, target-arrow-color",
            "transition-duration": "0.5s"
          }
        }
    ];

    $scope.elementsObj = {};
    $scope.combinatorialGenerator = function(model){
        $scope.elementsObj = {};
        var powerSet = [];
        if (model){powerSet = getAllSubsets(model);}
        else{powerSet = getAllSubsets(['A','B','C'])}
        powerSet.shift();powerSet.pop();
        for (x in powerSet){
            var stringX = powerSet[x].join('');
            var modelNode = {
                group:'nodes',
                data:{id:stringX, type:stringX, name:stringX}
            };
            $scope.elementsObj[stringX] = modelNode;
            for (y in powerSet){
                var stringY = powerSet[y].join('');
                var found = stringY.split('').some(function(obj){
                    return stringX.split('').includes(obj);
                });
                if (!found){
                    var modelEdge = {
                        group:'edges',
                        data:{id:stringX+'-'+stringY, source:stringX, target:stringY}
                    };
                    $scope.elementsObj[stringX+'-'+stringY] = modelEdge;
                }
            }
        }
        //cytoData.getGraph().then(function(graph){
        //    $scope.graph.layout({
        //    }).run();
        //});
    };
    $scope.combinatorialGenerator();

    $scope.powerSetGenerator = function(model){
        var powerSet = getAllSubsets(['USD','ETH','BTC','LTC','CRE8']);
        powerSet.shift();powerSet.pop();
        for (x in powerSet){
            $scope.graphDataPower.nodes.push({name:powerSet[x]})
            //var modelNode = {
            //    group:'nodes',
            //    data:{id:parseInt(x), type:powerSet[x], name:powerSet[x]}
            //};
            //$scope.elementsObj[parseInt(x)] = modelNode;
            for (y in powerSet){            
                if (powerSet[x].filter(function (value) {return -1 !== powerSet[y].indexOf(value)}).length == 0){
                    var value = 1 + Math.abs(powerSet[x].length - powerSet[y].length);
                    $scope.graphDataPower.links.push({value:value, source:parseInt(x), target:parseInt(y)});
                    //var modelEdge = {
                    //    group:'edges',
                    //    data:{id:parseInt(x)+'-'+parseInt(y), source:parseInt(x), target:parseInt(y)}
                    //};
                    //$scope.elementsObj[parseInt(x)+'-'+parseInt(y)] = modelEdge;
                }
            }
        }
    };
    $scope.powerSetGenerator();

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






}]);