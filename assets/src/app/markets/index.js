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
        
        //TODO: DEPRECIATE RESOLVE
        resolve:{
            tokens: ['TokenModel', function(TokenModel) {
                return TokenModel.getSome({limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
	});
}])

.controller( 'MarketsCtrl', ['$rootScope', '$scope', 'cytoData', 'TokenModel', 'tokens', function MarketsController( $rootScope, $scope, cytoData, TokenModel, tokens ) {
    
    $scope.skip = 0;
    $scope.selectedSort = 'createdAt DESC';

    //TODO DATA MODELS..
    //SORT BY CONNECTION

    //TOKEN VS MARKET


    $scope.tokens = tokens.data.map(function(obj){
        obj.model = 'MARKET';
        return obj;
    });
    $scope.tokenCount = tokens.info.count;

    $scope.tokensInCirculation = 100000+Math.round(Math.random()*10000);

    //STRING CROSS CHAIN
    //https://api.coinmarketcap.com/v2/listings/

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 20;
        $rootScope.stateIsLoading = true;
        TokenModel.getSome({search:$scope.searchQuery, limit:20, skip:$scope.skip, sort:'createdAt DESC'}).then(function(tokens){
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.tokens, tokens.data.map(function(obj){obj.model = 'MARKET';return obj;}));
        });
    };

    $scope.reply = function(item){
        var index = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.orders[index].showReply = !$scope.orders[index].showReply
    };

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        $scope.searchQuery = $scope.searchQuery.map(function(obj){return obj.text}).join(',');
        TokenModel.getSome({search:$scope.searchQuery, limit:20, skip:0, sort:'createdAt DESC'}).then(function(tokens){
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

    $scope.elementsObj = {};
    $scope.options = {
        textureOnViewport:true,
        pixelRatio: 'auto',
        motionBlur: false,
        hideEdgesOnViewport:true
    };
    $scope.layout = {name: 'random'};
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
        }
    ];

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

    $scope.graphData = {
        nodes:[],
        links:[]
    };
 
    $scope.graphDataPower = {
        nodes:[],
        links:[]
    };

    $scope.tokensMap = tokens.data.map(function(obj){return obj.string})

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


    //DO A RECURSIVE MAPPING SOON
    $scope.populateElement = function(){
        for (x in $scope.tokens){
            var model = {
                group:'nodes',
                data:{id:$scope.tokens[x].id, type:$scope.tokens[x].string, name:$scope.tokens[x].string}
            };
            $scope.elementsObj[$scope.tokens[x].id] = model;
        }
        cytoData.getGraph().then(function(graph){
            $scope.graph = graph;
            $scope.graph.layout({
                name: 'cola',
                infinite: true,
                fit: false
            }).run();
        });
    };
    //$scope.populateElement();

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
        cytoData.getGraph().then(function(graph){
            $scope.graph = graph;
            $scope.graph.layout({
                name: 'grid',
                infinite: true,
                fit: false
            }).run();
        });
    };
    //$scope.combinatorialGenerator(['USD','ETH','BTC','CRE8']);











    //RECURSIVE TRAVERSAL
    function traverse(n, depth){
        n++;
        if (n < depth){
            //var length = $scope.graphData.nodes.length;
            //$scope.graphData.nodes.push({name:n});
            //$scope.graphData.links.push({value:1, source:0, target:length});
            for (x in $scope.tokens){
                var length = $scope.graphData.nodes.length;
                $scope.graphData.nodes.push({name:$scope.tokens[x]});
                $scope.graphData.links.push({value:1, source:n, target:length});
            }
            traverse(n, depth);
        }
    };
    traverse(0, 5);

}]);