angular.module( 'conexus.item', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'item', {
		url: '/item/:id',
		views: {"main": {controller: 'ItemCtrl',templateUrl: 'item/index.tpl.html'}},
        resolve:{
            //TODO: CONTROLLERS -- LIKE MEMBER AND PROJECT
            item: ['$stateParams', 'ItemModel', function($stateParams, ItemModel) {return ItemModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});}],
            //COMPONENT ITEMS... ASSOCIATED ITEMS (ITEM-ITEM COMPLEX)
            actions: ['ActionModel', 'item', function(ActionModel, item) {return ActionModel.get({item:item.id, limit:20, skip:0, sort:'createdAt DESC'});}],
            orders: ['OrderModel', 'item', function(OrderModel, item) {return OrderModel.get({item:item.id, limit:20, skip:0, sort:'createdAt DESC'});}],
            //TODO: ORDERS .. BIDS FOR OWNERSHIP -- UNIFY CONTENT AND ITEM
            transactions:['TransactionModel', 'item', function(TransactionModel, item) {return TransactionModel.get({amountSet:[item.id], limit:20, skip:0, sort:'createdAt DESC'});}],
        }
	});
}])
.controller( 'ItemCtrl', [ '$rootScope', '$sailsSocket', '$location', '$mdSidenav', '$scope', 'actions', 'ContentModel', 'item', 'OrderModel', 'orders', 'ReactionModel', 'titleService', 'transactions', function ItemController( $rootScope, $sailsSocket, $location, $mdSidenav, $scope, actions, ContentModel, item, OrderModel, orders, ReactionModel, titleService, transactions ) {
    $scope.item = item;
    if($scope.item.length == 0){$location.path('/')}
    titleService.setTitle($scope.item.title+' | Item | CRE8.XYZ');
    
    //TODO: COMPUTE
    $scope.item.context = [];
    if ($scope.item.associationModels){
        for (x in $scope.item.associationModels){
            for (y in Object.keys($scope.item.associationModels[x].context)){
                var context = Object.keys($scope.item.associationModels[x].context)[y];
                $scope.item.context.push(context);
            }
        }
    }

    //TODO:ASSOCIATED MODELS

    console.log($scope.item.context);
    console.log($scope.item, $scope.item.associationModels);

    $scope.tokenChart = {
        chart: {zoomType: 'x'},
        series: [{
            id: 'Attention',
            type: 'column',
            name: 'Attention',
            data: []
        }],
        title: {text: ''},
        xAxis: {
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {text: null},
            categories: [],
        },
        legend: {enabled: false},
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };
    $scope.populateTokenChart = function(){
        $scope.sortableSet = [];
        $scope.tokenChart.xAxis.categories = [];
        $scope.tokenChart.series[0].data = [];
        for (x in Object.keys($scope.item.data.apps.tokens)){$scope.sortableSet.push([Object.keys($scope.item.data.apps.tokens)[x], $scope.item.data.apps.tokens[Object.keys($scope.item.data.apps.tokens)[x]]])}
        $scope.sortableSet.sort(function(a, b) {return b[1] - a[1]});
        for (x in $scope.sortableSet){
            if (x < 100){
                $scope.tokenChart.xAxis.categories.push($scope.sortableSet[x][0]);
                $scope.tokenChart.series[0].data.push($scope.sortableSet[x][1]);
            }
        }
    };
    if ($scope.item.data.apps.tokens){$scope.populateTokenChart();}

    $scope.renderStats = function(){
        $scope.statsChart = {
            chart: {
                zoomType: 'x',
            },
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
            yAxis: [{
                title: {text: null},
            }],
            credits:{enabled:false},
            plotOptions: {spline: {marker: {enabled: false}}, sma: {marker: {enabled: false}}}
        };
        $scope.statsChart.series = [];
        $scope.statsChart.series.push({
            id: 'content',
            type: 'spline',
            name: 'Content',
            data: []
        });
        $scope.statsChart.series.push({
            id: 'time',
            type: 'spline',
            name: 'Time',
            data: []
        });
        $scope.statsChart.series.push({
            id: 'validation',
            type: 'spline',
            name: 'Validations',
            data: []
        });
        for(var i=0;i<100;i++){
            var date = new Date();
            date.setTime(date.getTime() - (60*60*1000*(1000-i)));
            if (i == 0){
                $scope.statsChart.series[0].data.push([date.getTime(),Math.floor(150*Math.random())])
                $scope.statsChart.series[1].data.push([date.getTime(),Math.floor(20*Math.random())])
            }
            else{
                var random = 1.21*Math.random();
                var random1 = Math.random();
                if (random > random1){
                    $scope.statsChart.series[0].data.push([date.getTime(),$scope.statsChart.series[0].data[i-1][1]+3*Math.random()])
                    $scope.statsChart.series[1].data.push([date.getTime(),20*Math.random()])
                }
                else{
                    $scope.statsChart.series[0].data.push([date.getTime(),$scope.statsChart.series[0].data[i-1][1]-3*Math.random()])
                    $scope.statsChart.series[1].data.push([date.getTime(),20*Math.random()])
                }
            }
        }
    };
    $scope.renderStats();

    //VERBS FOR THE ITEM ARE?? 
    $scope.actions = actions;
    $scope.elementsObj = {};
    //TODO: TRAVERSE!!
    $scope.inputVector = []; 
    $scope.inputVectorWeight = [];
    $scope.orders = orders.data.map(function(obj){
        var elementsObj = {};
        for (y in Object.keys(obj.setAlpha)){
            var modelNode = {
                group:'nodes',
                data:{id:Object.keys(obj.setAlpha)[y], name:Object.keys(obj.setAlpha)[y]}
            };
            if (Object.keys(elementsObj).indexOf(Object.keys(obj.setAlpha)[y]) == -1){
                elementsObj[Object.keys(obj.setAlpha)[y]] = modelNode;
            }
            for (z in Object.keys(obj.setBeta)){
                var modelNode = {
                    group:'nodes',
                    data:{id:Object.keys(obj.setBeta)[z], name:Object.keys(obj.setBeta)[z]}
                };
                if (Object.keys(elementsObj).indexOf(Object.keys(obj.setBeta)[z]) == -1){
                    elementsObj[Object.keys(obj.setBeta)[z]] = modelNode;
                    var modelEdge = {
                        group:'edges',
                        data:{
                            id:Object.keys(obj.setAlpha)[y]+'-'+Object.keys(obj.setBeta)[z], 
                            source:Object.keys(obj.setAlpha)[y], 
                            target:Object.keys(obj.setBeta)[z],
                            label: obj.setBeta[Object.keys(obj.setBeta)[z]],
                        },
                        classes: 'edgeLabelStyle',
                    };
                    elementsObj[Object.keys(obj.setAlpha)[y]+'-'+Object.keys(obj.setBeta)[z]] = modelEdge;
                }
            }
        }
        obj.directedGraph = elementsObj;
        obj.model = 'ORDER';
        return obj
    });
    $scope.outputVector = [];
    //market vs discrete orders
    $scope.layout = {name: 'cola', coolingFactor: 0, animate: true};
    $scope.options = {
        pixelRatio: 'auto',
        maxZoom:10,
        minZoom:0.1,
    };
    $scope.selectedTab = 'INFORMATION';
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
    $scope.transactions = transactions;

    //TODO: SET POSITIONS AS COMBINATORIALS
    $scope.renderGraph = function(orders){
        $scope.elementsObj = {};

        for (x in orders){

            for (y in Object.keys(orders[x].setAlpha)){

                var modelNode = {
                    group:'nodes',
                    data:{id:Object.keys(orders[x].setAlpha)[y], name:Object.keys(orders[x].setAlpha)[y]}
                };

                if (Object.keys($scope.elementsObj).indexOf(Object.keys(orders[x].setAlpha)[y]) == -1){
                    $scope.elementsObj[Object.keys(orders[x].setAlpha)[y]] = modelNode;
                }

                for (z in Object.keys(orders[x].setBeta)){

                    var modelNode = {
                        group:'nodes',
                        data:{id:Object.keys(orders[x].setBeta)[z], name:Object.keys(orders[x].setBeta)[z]}
                    };

                    if (Object.keys($scope.elementsObj).indexOf(Object.keys(orders[x].setBeta)[z]) == -1){

                        $scope.elementsObj[Object.keys(orders[x].setBeta)[z]] = modelNode;

                        var modelEdge = {
                            group:'edges',
                            data:{id:Object.keys(orders[x].setAlpha)[y]+'-'+Object.keys(orders[x].setBeta)[z], source:Object.keys(orders[x].setAlpha)[y], target:Object.keys(orders[x].setBeta)[z]}
                        };

                        $scope.elementsObj[Object.keys(orders[x].setAlpha)[y]+'-'+Object.keys(orders[x].setBeta)[z]] = modelEdge;

                        console.log($scope.elementsObj)

                    }

                }

            }

            for (y in Object.keys(orders[x].setBeta)){

                var modelNode = {
                    group:'nodes',
                    data:{id:Object.keys(orders[x].setBeta)[y], name:Object.keys(orders[x].setBeta)[y]}
                };

                if (Object.keys($scope.elementsObj).indexOf(Object.keys(orders[x].setBeta)[y]) == -1){
                    $scope.elementsObj[Object.keys(orders[x].setBeta)[y]] = modelNode;
                }

                for (z in Object.keys(orders[x].setAlpha)){

                    var modelNode = {
                        group:'nodes',
                        data:{id:Object.keys(orders[x].setAlpha)[z], name:Object.keys(orders[x].setAlpha)[z]}
                    };

                    //if (Object.keys($scope.elementsObj).indexOf(Object.keys(orders[x].setAlpha)[z]) == -1){

                        $scope.elementsObj[Object.keys(orders[x].setAlpha)[z]] = modelNode;

                        var modelEdge = {
                            group:'edges',
                            data:{id:Object.keys(orders[x].setBeta)[y]+'-'+Object.keys(orders[x].setAlpha)[z], source:Object.keys(orders[x].setBeta)[y], target:Object.keys(orders[x].setAlpha)[z]}
                        };

                        $scope.elementsObj[Object.keys(orders[x].setBeta)[y]+'-'+Object.keys(orders[x].setAlpha)[z]] = modelEdge;

                        console.log($scope.elementsObj)

                    //}

                }

            }

        }
    };
    $scope.renderGraph($scope.orders);

    $scope.selectTab = function(model){$scope.selectedTab = model;};



    //TODO: OWNERSHIP HISTORY -- AS ACTION
    //AS TRANSACTION WITH ITEM ID
    //GENERATORS.. ACTIONS.. (trans)actions
    //EVERY TRANSACTION TOKEN IS AN ITEM..? EVERY UNIQUE TOKEN IS AN ITEM --> TOKEN AND ITEM UNITY?  .. // /token and /item unity
        //INTERLINK
        //items owning tokens (usd .. )

    //TODO: IF VERIFIED ORDER CAN RATE | TOOMUCH RN
    //TODO: VENDER FUNXTIONAL RECIPEIENT? 
    //[] | [] | [] 
    //MORE ABSTRACT CONNECTIONS
    //[]

    //CONTRAIN THE INPUT || 
    //VIEWING WINOW
    //I/O <--> INTERACTION
    //SERIES OF EQUALITIES BUILT BY ORDERS [] = []
    //[  [],   []  ]
    //[  constrainA, constrainB, constrainC  ] = set[]
    //[  constrainA, constrainB, constrainC  ] = [  constrainD, constrainE, constrainF  ]

    //MARKET WALK FOR PRICES 
    //$scope.inputVector = [$scope.item.amountSet.split(','), $scope.item.identiferSet.split(',')];
    //for (x in $scope.inputVector){$scope.inputVectorWeight[x] = 1 / x}

    //Shape by %s || sets of discritized tokens

    //$scope.tokens | input; output | outputVector (by weights)
    //TODO RECURSIVE TRAVERSE THAT FINDS PATHS FROM ONE [] TO ANOTHER [];
    //HAVE A SET OF KNOWN a[] = b[]
    //DEFINE THE FORMAL MATH 
    //MULTIDIMENSIONAL VALUE MATRIX THAT ALLOWS FOR SET EQUALITIES IN A TOKENIZED SPACE
    $scope.marketTraverse = function(input, output){
        for (x in $scope.outputVector.split(',')){
            $scope.marketOutput.push([Math.random(),$scope.outputVector.split(',')[x]])
        } 
    };

    //SETS OF UNIQUE IDENTIFIERS
    function getOrderTraverse(identifer){
        OrderModel.get({market:identifer,limit:100,skip:0,sort:'price DESC'}).then(function(orders){
            //GET SET OF SETS AT PRICE --> GRADIENT POTINETAL --> ORDER BOOK 
            //SORT TO BEST PRICE CONTAINED WITHIN ABSOLUTE CONSTRINT (% IS FUNCTIONAL RESULT.. | ABSOLUTE CONSTRAINT NOW)
            //DOES THE ORER SUM CONTAIN THE AMOUNT AND DO THE ORDER TYPES CHECK OUT? 
            //console.log(orders);
            //RETURN PATH (Order 84USD @ 0.00002 CRE8, ORDER 15USD @ 0.00003, [[Order 99USD @ 0.000041NOVO],..])
            //IF SOMETHING
            //if(market.amountSet * price < inputVector || currentIdentifier!=previousIdentifer){
            for (x in orders){
                //console.log(orders[x].identiferSet);
                //console.log(orders[x].identiferSet1);
                for (y in orders[x].identiferSet1.split(',')){
                    //console.log(orders[x].identiferSet1.split(',')[y]);
                    //getOrderTraverse(orders[x].identiferSet1.split(',')[y]);
                }
            }
            //}
            //WALK THE ID SET
            //getOrderTraverse(orders[0].identiferSet);
        });
    };
    //getOrderTraverse($scope.item.identiferSet);

    $sailsSocket.subscribe('item', function (envelope) {
        console.log(envelope)
        if (envelope.verb == 'update'){
            if ($scope.item.id == envelope.data.id){
                $scope.item.data.apps = envelope.data.data.apps;
            }
        }
    });

}]);