angular.module( 'conexus.item', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'item', {
		url: '/item/:id',
		views: {
			"main": {
				controller: 'ItemCtrl',
				templateUrl: 'item/index.tpl.html'
			}
		},
        resolve:{
            item: ['$stateParams', 'ItemModel', function($stateParams, ItemModel) {
                return ItemModel.getSome({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
            //COMPONENT ITEMS... ASSOCIATED ITEMS (ITEM-ITEM COMPLEX)
            actions: ['ActionModel', 'item', function(ActionModel, item) {
                return ActionModel.getSome({item:item.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
            orders: ['OrderModel', 'item', function(OrderModel, item) {
                return OrderModel.getSome({item:item.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
            //TODO: ORDERS .. BIDS FOR OWNERSHIP -- UNIFY CONTENT AND ITEM
            transactions:['TransactionModel', 'item', function(TransactionModel, item) {
                return TransactionModel.getSome({amountSet:[item.id], limit:20, skip:0, sort:'createdAt DESC'});
            }],

        }
	});
}])

.controller( 'ItemCtrl', [ '$rootScope', '$sailsSocket', '$location', '$mdSidenav', '$scope', 'actions', 'ContentModel', 'item', 'OrderModel', 'orders', 'ReactionModel', 'titleService', 'transactions', function ItemController( $rootScope, $sailsSocket, $location, $mdSidenav, $scope, actions, ContentModel, item, OrderModel, orders, ReactionModel, titleService, transactions ) {
   
    $scope.item = item;
    if($scope.item.length == 0){$location.path('/')}
    $scope.item.model = 'ITEM';
    if ($scope.item.tags){$scope.item.tags = $scope.item.tags.split(',')}
    titleService.setTitle($scope.item.title+' | Item | CRE8.XYZ');

    //VERBS FOR THE ITEM ARE?? 
    $scope.actions = actions;
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
    $scope.transactions = transactions;

    //TODO: COMPLEX QUERY
    ContentModel.getSome({item:item.id, limit:20, skip:0, sort:'createdAt DESC'}).then(function(contentList){
        $scope.contentList = contentList;
    });

    //TODO: OWNERSHIP HISTORY -- AS ACTION
    //AS TRANSACTION WITH ITEM ID
    //GENERATORS.. ACTIONS.. (trans)actions
    //EVERY TRANSACTION TOKEN IS AN ITEM..? EVERY UNIQUE TOKEN IS AN ITEM --> TOKEN AND ITEM UNITY?  .. // /token and /item unity
        //INTERLINK
        //items owning tokens (usd .. )
    //OrderModel.getSome()..
 
    //HMM.. 
    $rootScope.associatedModels = [{
        address: $scope.item.id,
        type: 'MARKET',
    }];

    //HMM
    $scope.selectedTab = 'INFORMATION';
    $scope.selectTab = function(model){
        $scope.selectedTab = model;
    };

    //TODO: DEPRECIATE
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
            else{
                $scope.newReaction.associatedModels = [{type:'ITEM', id:item.id}];
                $scope.item.reactions[type]++;
            }
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle();}
    };

    //TODO:DEPRECIATE
    $scope.reply = function(item){
        if ($rootScope.currentUser){$mdSidenav('content').toggle()}
        else{$mdSidenav('login').toggle();}
    };



    //TODO: TRAVERSE!!
    $scope.inputVector = []; 
    $scope.inputVectorWeight = [];
    $scope.newReaction = {};
    $scope.outputVector = [];

    //market vs discrete orders
    $scope.layout = {name: 'cola', coolingFactor: 0, animate: true};
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

    $scope.elementsObj = {};

    //SET POSITIONS AS COMBINATORIALS
    //..//TODO
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
        OrderModel.getSome({market:identifer,limit:100,skip:0,sort:'price DESC'}).then(function(orders){
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
        switch(envelope.verb) {
            case 'created':
                if ($scope.item.id == envelope.item.id){
                    $scope.item.attention = envelope.data.attention;
                }
                break;
        }
    });



    
}]);