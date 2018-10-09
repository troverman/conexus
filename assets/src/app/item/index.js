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

.controller( 'ItemCtrl', ['$location', '$sce', '$scope', '$stateParams', 'config', 'item', 'titleService', function ItemController( $location, $sce, $scope, $stateParams, config, item, titleService ) {
    $scope.currentUser = config.currentUser;
    $scope.item = item;
    if(!$scope.item){$location.path('/')}

    //TODO
    //REACT TO ORIGINAL POSTER PROTOCOL
    //IF VERIFIED ORDER CAN RATE | TOOMUCH RN

    $scope.purchaseToggleVar = false;

    //ALL ASSETS ARE COMBINITORIAL

    //MARKET WALK FOR PRICES 

    //MARKET VIZ
    
    $scope.createContent = function(post) {
        if($scope.currentUser){
            $scope.newPost.post = post.id;
            $scope.newPost.user = $scope.currentUser.id;
            $scope.newPost.marketPair = 'CRE8/USD'; // || USD/CRE8
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