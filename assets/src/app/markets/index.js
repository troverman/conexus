angular.module( 'conexus.markets', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'markets', {
		url: '/market',
		views: {
			"main": {
				controller: 'MarketsCtrl',
				templateUrl: 'markets/index.tpl.html'
			}
		},
        resolve:{
            tokens: ['TokenModel', function(TokenModel) {
                return TokenModel.getSome('', '', 1000, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'MarketsCtrl', ['$rootScope', '$scope', 'config', 'titleService', 'TokenModel', 'tokens', function MarketsController( $rootScope, $scope, config, titleService, TokenModel, tokens ) {
	titleService.setTitle('Market | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.skip = 0;
    $scope.selectedSort = 'createdAt DESC';

    $scope.chartMap = {
        chart: {
            polar: true,
            margin: [30, 30, 30, 30]
        },
        series: [{
            id: 'values',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.2, 0.15, 0.15, 0.10, 0.15, 0.15, 0.1],
            color: 'rgba(153,0,0,0.3)',
            fillOpacity: 0.3,
        }],
        title: {text: ''},
        xAxis: {
            title: {text: null},
            categories: ['Education', 'Shelter', 'Food', 'Creation', 'Health', 'Security', 'Transparency'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            title: {text: null},
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        legend: {enabled: false},
        tooltip: {},
        credits:{enabled:false},
    };
    
    //STRING CROSS CHAIN
    //https://api.coinmarketcap.com/v2/listings/

    $scope.tokens = tokens;

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 20;
        $rootScope.stateIsLoading = true;
        TokenModel.getSome('search', $scope.searchQuery, 20, $scope.skip, 'createdAt DESC').then(function(tokens){
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.tokens, tokens);
        });
    };

    $scope.reply = function(item){
        var index = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.orders[index].showReply = !$scope.orders[index].showReply
    };

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        TokenModel.getSome('search', $scope.searchQuery, 20, 0, 'createdAt DESC').then(function(tokens){
            $rootScope.stateIsLoading = false;
            $scope.tokens = tokens;
        });
    };

    $scope.selectSort = function(sort){


    };

}]);