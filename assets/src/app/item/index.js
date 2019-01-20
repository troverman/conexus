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
                return ItemModel.getOne($stateParams.id);
            }],
            contentList: ['ContentModel', 'item', function(ContentModel, item) {
                return ContentModel.getSome('item', item.id, 20, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'ItemCtrl', [ '$rootScope', '$location', '$mdSidenav', '$sce', '$scope', '$stateParams', 'config', 'contentList', 'item', 'OrderModel', 'ReactionModel', 'titleService', function ItemController( $rootScope, $location, $mdSidenav, $sce, $scope, $stateParams, config, contentList, item, OrderModel, ReactionModel, titleService ) {
   
    $scope.currentUser = config.currentUser;
    $scope.contentList = contentList;

    $scope.item = item;
    $scope.item.model = 'ITEM';
    if ($scope.item.tags){$scope.item.tags = item.tags.split(',')}

    $rootScope.associatedModels = [{
        address: $scope.item.id,
        type: 'MARKET',
    }];

    titleService.setTitle($scope.item.title+' | Item | CRE8.XYZ');

    $scope.inputVector = []; 
    //$scope.inputVectorWeight = [];
    if(!$scope.item){$location.path('/')}
    $scope.newReaction = {};
    //$scope.outputVector = $scope.item.identiferSet.split(',');

    $scope.purchaseToggleVar = false;

    //TODO
    //REACT TO ORIGINAL POSTER PROTOCOL
    //IF VERIFIED ORDER CAN RATE | TOOMUCH RN

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
    console.log($scope.outputVector);
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


     $scope.createReaction = function(item, type){
        if ($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
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

    //SETS OF UNIQUE IDENTIFIERS
    function getOrderTraverse(identifer){
        OrderModel.getSome('market',identifer,0,100,'price DESC').then(function(orders){
            //GET SET OF SETS AT PRICE --> GRADIENT POTINETAL --> ORDER BOOK 
            //SORT TO BEST PRICE CONTAINED WITHIN ABSOLUTE CONSTRINT (% IS FUNCTIONAL RESULT.. | ABSOLUTE CONSTRAINT NOW)
            //DOES THE ORER SUM CONTAIN THE AMOUNT AND DO THE ORDER TYPES CHECK OUT? 
            console.log(orders);

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

    getOrderTraverse($scope.item.identiferSet);
    
    $scope.purchaseToggle = function() {$scope.purchaseToggleVar = !$scope.purchaseToggleVar};

    $scope.reply = function(item){
        if ($scope.currentUser){
            var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            if (contentIndex != -1){$scope.contentList[contentIndex].showReply = !$scope.contentList[contentIndex].showReply;}
            else{$scope.item.showReply = !$scope.item.showReply;}
        }
        else{$mdSidenav('login').toggle();}
    };
    
}]);