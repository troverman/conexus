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
            }]
        }
	});
}])

.controller( 'ItemCtrl', ['$location', '$sce', '$scope', '$stateParams', 'config', 'item', 'OrderModel', 'titleService', function ItemController( $location, $sce, $scope, $stateParams, config, item, OrderModel, titleService ) {
    $scope.currentUser = config.currentUser;
    $scope.item = item;
    if(!$scope.item){$location.path('/')}

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


    $scope.purchaseToggleVar = false;

    //ALL ASSETS ARE COMBINITORIAL

    //MARKET WALK FOR PRICES 

    //MARKET VIZ

    //$scope.inputVector = [$scope.item.amountSet.split(','), $scope.item.identiferSet.split(',')];
    //$scope.inputVector = [];
    //$scope.outputVector = $scope.item.identiferSet;
    $scope.inputVector = $scope.item.identiferSet.split(',');
    $scope.outputVector = []; //Shape by %s || sets of discritized tokens

    //99USD=DIMENSIONAL MANIFOLD

    //SETS OF UNIQUE IDENTIFIERS
    function getOrderTraverse(identifer){
        OrderModel.getSome('market',identifer,0,100,'price DESC').then(function(orders){

            //GET SET OF SETS AT PRICE --> GRADIENT POTINETAL --> ORDER BOOK 
            //SORT TO BEST PRICE CONTAINED WITHIN ABSOLUTE CONSTRINT (% IS FUNCTIONAL RESULT.. | ABSOLUTE CONSTRAINT NOW)
            //(highestBid, lowestAsk)

            //DOES THE SORER SUM CONTAIN THE AMOUNT AND DO THE ORDER TYPES CHECK OUT? 

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
    }

    getOrderTraverse($scope.item.identiferSet)
    
    $scope.createContent = function(post) {
        if($scope.currentUser){
            $scope.newPost.post = post.id;
            $scope.newPost.user = $scope.currentUser.id;
            $scope.newPost.item = item.id;
            PostModel.create($scope.newPost).then(function(model) {
                $scope.newPost = {};
            });
        }
        else{$location.path('/login')}
    };

     $scope.purchaseToggle = function() {
        $scope.purchaseToggleVar = !$scope.purchaseToggleVar;
    };

    //YIKES
    $scope.renderContent = function(content){
        if (content){
            if (!content.includes('>')){
                var replacedText = content.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                return $sce.trustAsHtml(replacedText);
            }
            else{return $sce.trustAsHtml(content)}
        }
    };

    $scope.reply = function(item){
        var index = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.orders[index].showReply = !$scope.orders[index].showReply
    };
    
}]);