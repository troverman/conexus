angular.module( 'conexus.market', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'market', {
		url: '/market/:id',
		views: {"main": {controller: 'MarketCtrl', templateUrl: 'market/index.tpl.html'}},
        resolve:{
            orders: ['$stateParams', 'OrderModel', function($stateParams, OrderModel) {return OrderModel.get({market:$stateParams.id, limit:100, skip:0, sort:'createdAt DESC'});}],
            token: ['$stateParams', 'TokenModel', function($stateParams, TokenModel) {return TokenModel.get({string:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});}],
            associations: ['$stateParams', 'AssociationModel', function($stateParams, AssociationModel) {
                 var query = {
                    //BY MARKET ID -- > MARKET IS COMBINATORIAL (ASSET) --> COMBINATORIAL ITEMS AND THEIR ASSOCIATIONS; UNIT FOR COMBINATORIAL ITEM? 
                            //ITS AN ASSOCIATION LOL
                        //ITEM COMPOSITION
                    filter:JSON.stringify({
                        type:'MARKET', 
                        //id:$stateParams.id
                    }),
                    limit:100,
                    skip:0,
                    sort:'createdAt DESC'
                };
                return AssociationModel.get(query);
            }],
        }
	});
}])
.controller( 'MarketCtrl', [ '$rootScope', '$scope', '$stateParams', 'associations', 'cytoData', 'OrderModel', 'orders', 'titleService', 'token', function MarketController( $rootScope, $scope, $stateParams, associations, cytoData, OrderModel, orders, titleService, token ) {
   
    $scope.stateParams = $stateParams;
    
    titleService.setTitle('Market | ' + $stateParams.id + ' | CRE8.XYZ');
    
    //SORT BY LIQUIDITY (PARAM OF ASSOCIATION)
    $scope.markets = associations;

    console.log(associations)

    $scope.directedGraphLayout = {name: 'grid',coolingFactor:0,animate: true};
    $scope.elementsObj = {};

    $scope.manifolds = [
        {title:'+CREDIT', manifolds:'+INTEREST'},
        {title:'+DEBT', manifolds:'+TIME'},
        {title:'+FUTURE', manifolds:'+TIME'},
        {title:'+OPTION', manifolds:'+TIME'},
        {title:'+SPONSOR', manifolds:'+ADDRESS'},
    ];

    if(token[0]){
        $scope.market = token[0];
        $scope.market.model = 'MARKET';
        $scope.token = token[0];
        $scope.token.model = 'TOKEN';
    }
    
    $scope.newMarket = {};
    $scope.newOrder = {};
    $scope.newOrder.identiferSet = $scope.stateParams.id;

    $scope.orders = orders.data.map(function(obj){obj.model = 'ORDER'; return obj;});
    $scope.selectedTab = 'INFORMATION';
    $scope.trades = {};
    $scope.types = [
        {title:'CONTINUAL'},
        {title:'DISCRETE'},
    ];

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
                var found = stringY.split('').some(function(obj){return stringX.split('').includes(obj);});
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

    $scope.generateMarket = function(model){
        //TENSOR GENERATOR AND GRAPH GENERATOR
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
    };
    $scope.generateMarket();

    //POWER SET
    function getAllSubsets(theArray) {
        return theArray.reduce(function (subsets, value) {
            return subsets.concat(subsets.map(function (set) {
                return [value].concat(set);
            }));
        }, [[]]);
    };

    $scope.renderGraph = function(model){
        if (!model){model = 'circle'}
        cytoData.getGraph().then(function(graph){
            $scope.graph = graph;
            $scope.graph.layout({
                name: model,
            }).run();
        });
    };

    $scope.replace = function(model){
        return model.replace(/,/g, '').replace(/\+/g, '')
    };

    $scope.selectTab = function(model){
        $scope.selectedTab = model;
        $scope.renderGraph('grid');
    };
    
    //TODO: LATTICE NEIGHBORHOOD..
    //TODO: TENSOR BRAID
    //TODO: TRAVERSAL
    //TODO: MATCHING RULES

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

    //HERE
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
    }

    //STRING
    $scope.renderImmutableMarketPower = JSON.stringify($scope.immutableMarketPower, null, 2);
    $scope.renderImmutableMarket = JSON.stringify($scope.immutableMarket, null, 2);
    $scope.renderImmutableMarketNEW = JSON.stringify($scope.market, null, 2);

   
    //VALIDATION (ORDER), ASSOCIATION (LIQUIDITY)//
        //connection type and scalar... 

    //TODO SAVE ASSETS (TOKENS), MARKETS (UNIQUE COMBINATORIALS OF TOKENS), AND (ASSOCIATIONS) && CONNECTIONS
    //COULD DO AS VALIDATION..? 
        //ORDER AS VALIDATION
            //ORDER (TRANSACTION-TRANSACTION)

    //MAP OUT THE HEIRARCHY..   TOPO

    //throttle
    //COMBINATORIAL TOKEN <-MARKET-> COMBINATORIAL TOKEN
   
    //validateion...
    //eskrow is a validation type..
    //connection is exchange governance!!!!!!!!
    //coinbase eat

    //TRANSFORM FROM SET OF ORDERS (EQUALITIES .. EQUATIONS)
    //GROUP SETS TOGETHER
    //HIGH TO LOW..
    //HIGH DIM HAVE PERMUTATIONS --> LOWER
    //group together into immutable obj 

}]);