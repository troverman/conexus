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
    $scope.tokens = tokens;

    //STRING CROSS CHAIN
    //https://api.coinmarketcap.com/v2/listings/

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
        $scope.searchQuery = $scope.searchQuery.map(function(obj){return obj.text}).join(',');
        TokenModel.getSome('search', $scope.searchQuery, 20, 0, 'createdAt DESC').then(function(tokens){
            $rootScope.stateIsLoading = false;
            $scope.tokens = tokens;
        });
    };

    $scope.selectSort = function(sort){};

    //POWER SET
    function getAllSubsets(theArray) {
      return theArray.reduce(function (subsets, value) {
        return subsets.concat(subsets.map(function (set) {
          return [value].concat(set);
        }));
      }, [[]]);
    };

    $scope.graphOptions = {
        chart: {
            type: 'forceDirectedGraph',
            height: 450,
            margin:{top: 0, right: 0, bottom: 0, left: 0},
            color: function(d){
                return  d3.scale.category20()(d.group)
            },
            tooltip: {
                contentGenerator: function(d){return "";}
            },
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

    $scope.tokensMap = tokens.map(function(obj){return obj.string})

    var powerSet = getAllSubsets($scope.tokensMap.slice(0,4));
    powerSet.shift();
    for (x in powerSet){
        $scope.graphDataPower.nodes.push({name:powerSet[x]})
        for (y in powerSet){            
            if (powerSet[x].filter(function (value) {return -1 !== powerSet[y].indexOf(value)}).length == 0){
                var value = 1 + Math.abs(powerSet[x].length - powerSet[y].length);
                $scope.graphDataPower.links.push({value:value, source:parseInt(x), target:parseInt(y)});
            }
        }
    }

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
    traverse(0, 4);






}]);