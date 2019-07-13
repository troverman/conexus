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

    $scope.manifolds = [
        {title:'+CREDIT', manifolds:'+INTEREST'},
        {title:'+DEBT', manifolds:'+TIME'},
        {title:'+FUTURE', manifolds:'+TIME'},
        {title:'+OPTION', manifolds:'+TIME'},
        {title:'+SPONSOR', manifolds:'+ADDRESS'},
    ];

    //HM?
    $scope.types = [
        {title:'CONTINUAL'},
        {title:'DISCRETE'},
    ];

    //+ traversal.. 
    //show most relevant

    $scope.markets = [];
    $scope.newMarket = {};
    $scope.newOrder = {};
    $scope.newOrder.identiferSet = $scope.stateParams.id;

    //TODO: MARKETS FROM ORDERS
    $scope.orders = orders.map(function(obj){
        var elementsObj = {};
        obj.model = 'ORDER';
        return obj
    });
    $scope.selectedTab = 'INFORMATION';
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



    //MARKET COMPUTE ALG...
    //FOR NOW ALL ORDERS





    //TODO!




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



    //SHOULD BE COMPUTED. 
    //ORDER.CREATE --> MARKET? 
    //SAVE THE OBJ

    //MIGHT WANNA DO THIS WITH PAPER. --> HA! ~~ analog is still good for theory
    //[SETALPHA]


    $scope.immutableMarket = {};
    $scope.immutableMarketPower = {};
    for (x in $scope.orders){

        //var alphaPossibility = getAllSubsets($scope.orders[x].setAlpha);

        //REFLECTION AND OREDER -- ROTATE OUT
        var betaPossibility = getAllSubsets(Object.keys($scope.orders[x].setBeta));
        betaPossibility.shift();
        betaPossibility.pop();

        //NESTED OBJ
        //base dimension for reflexivity is dim of obj space my man - you know it, i know it . 
        //you want to be computationionall sleuth ? -- an obj with indices of huge is untenable -- yeah 
            //ONLY! --> reflect through a 24EIGHT dimensional object containing high degres connections __ BASE DENSOR WITH DIM 24EIGHT (close.)
            //ALLOW FOR (MIN) TRAVERSAL to 'EXPAND' -> THE TENSOR BASES  ((VALUE FOR DIM GRIDS))


        for (y in betaPossibility){
            $scope.immutableMarketPower[betaPossibility[y].join(',')] = {
                bids:[],
                asks:[],
                computed:true, //COMPUTED FROM HIGH D DECOMPOSITION -_> POSSIBLE TRAVERSAL PATH  (POSSIBLE RECURSIVE DECOMPOSE WITH EACH +1 TRAVERSAL)
            };
        }

        //IT IS THE POWER SET!! HAH! --> where do we go from here. . ()=> the magic of flow state
        for (y in Object.keys($scope.orders[x].setBeta)){
            $scope.immutableMarket[Object.keys($scope.orders[x].setBeta)[y]] = {
                bids:[],
                asks:[],
                computed: false, //CAN DECOMPOSE
            }
        }
        console.log($scope.immutableMarket)



        //console.log($scope.immutableMarket);

        //POWER SET.. WITH RESPECT TO HIGH D.. LOOK AT HIGHEST DIM
        //HIGH DIMS IMMEDIATLY DECOMPOSE 

        console.log($scope.orders[x])
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

    //STRING
    $scope.renderImmutableMarketPower = JSON.stringify($scope.immutableMarketPower, null, 2);
    $scope.renderImmutableMarket = JSON.stringify($scope.immutableMarket, null, 2);

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

    $scope.selectTab = function(model){
        $scope.selectedTab = model;
        $scope.renderGraph('grid');
    };

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


    $scope.renderGraph  = function(model){
        if (!model){model = 'circle'}
        cytoData.getGraph().then(function(graph){
            $scope.graph = graph;
            $scope.graph.layout({
                name: model,
            }).run();
        });
    };

    $scope.options = {
        textureOnViewport:true,
        pixelRatio: 'auto',
        motionBlur: false,
        hideEdgesOnViewport:true
    };
    $scope.layout = {name: 'grid', coolingFactor: 0, animate: true};

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
                "width": "25",//"mapData(score, 0, 0.006769776522008331, 10, 30)",
                "height": "25",//"mapData(score, 0, 0.006769776522008331, 10, 30)",
                "content": "data(name)",
                "font-size": "9px",
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
        }
    ];

    $scope.elementsObj = {};
    $scope.combinatorialGenerator = function(model){
        $scope.elementsObj = {};
        var powerSet = [];
        if (model){powerSet = getAllSubsets(model);}
        else{powerSet = getAllSubsets(['A','B','C','D','E'])}
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
        $scope.renderGraph('grid');
    };
    //$scope.combinatorialGenerator(['USD','ETH','BTC','CRE8']);

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
    //$scope.powerSetGenerator();




    //WATCH THIS!!
    //TRANSFORM FROM SET OF ORDERS (EQUALITIES .. EQUATIONS)
    
    //GROUP
    //SETS TOGETHER
    //HIGH TO LOW..
    //HIGH DIM HAVE PERMUTATIONS --> LOWER

    //...


    //group together into immutable obj 

    //

    //SHOULD WORK ON MARKET PAIR.


    //IF MODEL IS IN ALPHA OF BETA




    //COMBINATORIAL WANT FOR ASK
    //COMPLEX IN MULTID WORLD
    $scope.generateMarket = function(model){

        //TENSOR GENERATOR AND GRAPH GENERATOR

        //HIGHLIGHT MARKET NODE.
        for (x in $scope.orders){
            if ($scope.orders[x].setAlpha){
                for (y in Object.keys($scope.orders[x].setAlpha)){
                    var modelNode = {
                        group:'nodes',
                        data:{id:Object.keys($scope.orders[x].setAlpha)[y], name:Object.keys($scope.orders[x].setAlpha)[y]}
                    };
                    if (Object.keys($scope.elementsObj).indexOf(Object.keys($scope.orders[x].setAlpha)[y]) == -1){
                        $scope.elementsObj[Object.keys($scope.orders[x].setAlpha)[y]] = modelNode;
                    }
                    for (z in Object.keys($scope.orders[x].setBeta)){
                        var modelNode = {
                            group:'nodes',
                            data:{id:Object.keys($scope.orders[x].setBeta)[z], name:Object.keys($scope.orders[x].setBeta)[z]}
                        };
                        if (Object.keys($scope.elementsObj).indexOf(Object.keys($scope.orders[x].setBeta)[z]) == -1){
                            $scope.elementsObj[Object.keys($scope.orders[x].setBeta)[z]] = modelNode;
                            var modelEdge = {
                                group:'edges',
                                data:{
                                    id:Object.keys($scope.orders[x].setAlpha)[y]+'-'+Object.keys($scope.orders[x].setBeta)[z], 
                                    source:Object.keys($scope.orders[x].setAlpha)[y], 
                                    target:Object.keys($scope.orders[x].setBeta)[z],
                                    label: $scope.orders[x].setBeta[Object.keys($scope.orders[x].setBeta)[z]],
                                },
                                classes: 'edgeLabelStyle',
                            };
                            $scope.elementsObj[Object.keys($scope.orders[x].setAlpha)[y]+'-'+Object.keys($scope.orders[x].setBeta)[z]] = modelEdge;
                        }
                    }
                }
            }
        }


    }

    $scope.generateMarket()






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
    //traverse(0, $scope.markets.length);






}]);