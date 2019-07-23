angular.module( 'conexus.developers', [
])

.config(['$stateProvider', 'hljsServiceProvider', function config( $stateProvider, hljsServiceProvider) {
    $stateProvider.state( 'developers', {
        url: '/developers',
        views: {
            "main": {
                controller: 'DevelopersController',
                templateUrl: 'developers/index.tpl.html'
            }
        }
    });

    //TODO
    hljsServiceProvider.setOptions({});
}])

.controller( 'DevelopersController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'ContentModel', 'cytoData', 'OrderModel', 'ReactionModel', 'TransactionModel', 'ValidationModel', function DevelopersController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, ContentModel, cytoData, OrderModel, ReactionModel, TransactionModel, ValidationModel ) {

    $scope.results = {
        action:'[{}]',
        app:'[{}]',
        association:'[{}]',
        block:'[{}]',
        content:'[{}]',
        follower:'[{}]',
        item:'[{}]',
        location:'[{}]',
        member:'[{}]',
        market:'[{}]',
        motion:'[{}]',
        notification:'[{}]',
        order:'[{}]',
        passport:'[{}]',
        project:'[{}]',
        projectCharter:'[{}]',
        projectMember:'[{}]',
        protocol:'[{}]',
        reaction:'[{}]',
        search:'[{}]',
        task:'[{}]',
        token:'[{}]',
        time:'[{}]',
        transaction:'[{}]',
        tx:'[{}]',
        validation:'[{}]',
    };
    $scope.newQuery = {};
  
    //FACTOR IN GLOBAL SERCH MODEL FOR API CALLS :P
    $scope.apiCall = function(query){
        //if (query.model == 'ACTION'){}
        //if (query.model == 'APP'){}
        //if (query.model == 'ASSOCIATION'){}
        //if (query.model == 'BLOCK'){}
        if (query.model == 'CONTENT'){
            ContentModel.getSome('', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results.content = JSON.stringify(models, null, 4);
            });
        }
        //if (query.model == 'DATA'){}
        //if (query.model == 'EVENT'){}
        //if (query.model == 'FOLLOWER'){}
        //if (query.model == 'ITEM'){}
        //if (query.model == 'LOCATION'){}
        //if (query.model == 'MEMBER'){}
        //if (query.model == 'MARKET'){}
        //if (query.model == 'MOTION'){}
        //if (query.model == 'NOTIFICATION'){}
        if (query.model == 'ORDER'){
            OrderModel.getSome('', '', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results.order = JSON.stringify(models, null, 4);
            });
        }
        //if (query.model == 'PROJECT'){}
        //if (query.model == 'PROJECTCHARTER'){}
        //if (query.model == 'PROJECTMEMBER'){}
        //if (query.model == 'PROTOCOL'){}
        //if (query.model == 'REACTION'){}


        //EVERY API REQUEST COULD GO THOUGH SEARCH.. LOL SHOUD IT ?
        if (query.model == 'SEARCH'){
            TransactionModel.getSome('', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results.search = JSON.stringify(models, null, 4);
            });
        }


        //if (query.model == 'TASK'){}
        //if (query.model == 'TOKEN'){}
        //if (query.model == 'TIME'){}
        if (query.model == 'TRANSACTION'){
            TransactionModel.getSome('', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results.transaction = JSON.stringify(models, null, 4);
            });
        }
        //if (query.model == 'TX'){}
        if (query.model == 'VALIDATION'){
            ValidationModel.getSome('', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results.validation = JSON.stringify(models, null, 4);
            });
        }
    };
    //$scope.apiCall();

    //VALIDATION GRAPH
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
 
    //ASSOCIATION MAP
    $scope.graphData = {
        nodes:[

            //MEMBER
            {name:'CONTENT'},
            {name:'MEMBER'},
            {name:'ORDER'},
            {name:'ITEM'},
            {name:'PROJECT'},
            {name:'TASK'},
            {name:'TIME'},
            {name:'TRANSACTION'},
            {name:'VALIDATION'},

            //PROJECT
            {name:'CONTENT'},
            {name:'MEMBER'},
            {name:'ORDER'},
            {name:'ITEM'},
            {name:'PROJECT'},
            {name:'TASK'},
            {name:'TRANSACTION'},

            //PROJECT TASK TIME
            {name:'PROJECT'},
            {name:'TASK'},
            {name:'TIME'},

            //VALIDATION VALIDATION
            {name:'VALIDATION'},
            {name:'VALIDATION'},

        ],
        links:[

            //MEMBER
            {value:1, source:1, target:0},
            {value:1, source:1, target:2},
            {value:1, source:1, target:3},
            {value:1, source:1, target:4},
            {value:1, source:1, target:5},
            {value:1, source:1, target:6},
            {value:1, source:1, target:7},
            {value:1, source:1, target:8},

            //PROJECT
            {value:1, source:13, target:9},
            {value:1, source:13, target:10},
            {value:1, source:13, target:11},
            {value:1, source:13, target:12},
            {value:1, source:13, target:14},
            {value:1, source:13, target:15},

            //PROJECT TASK TIME
            {value:1, source:18, target:16},
            {value:1, source:18, target:17},

            //VALIDATION VALIDATION
            {value:1, source:19, target:20},

        ]
    };

    $scope.graphData1 = {
        nodes:[
            //MEMBER
            {name:'VALIDATION 1'},
            {name:'VALIDATION 1a'},
            {name:'VALIDATION 1aa'},
            {name:'VALIDATION 1aaa'},
            {name:'VALIDATION 1ab'},
            {name:'VALIDATION 1b'},
            {name:'VALIDATION 1c'},
            {name:'VALIDATION 2'},
        ],
        links:[
            //MEMBER
            {value:1, source:1, target:0},
            {value:1, source:1, target:2},
            {value:1, source:1, target:3},
        ]
    };

    $scope.graphExploreData = {
        nodes:[
            {name:'VALIDATION 1'},
            {name:'VALIDATION 1a'},
            {name:'VALIDATION 1b'},
        ],
        links:[
            {value:1, source:1, target:0},
            {value:1, source:1, target:2},
        ]
    };

    $scope.graphExploreData = {
        nodes:[], 
        links:[]
    };

    $scope.options = {
        pixelRatio: 'auto',
        maxZoom:10,
        minZoom:1,
        //zoom:0.7
    };

    $scope.layout = {name: 'cose'};

    //COMBINATORIAL 3
    $scope.elementsThree = {
        "nodes": [
            {"data": {"id": "A"}},
            {"data": {"id": "B"}},
            {"data": {"id": "C"}},
            {"data": {"id": "AB"}},
            {"data": {"id": "AC"}},
            {"data": {"id": "BC"}},
        ],
        "edges": [
            {
                "data": {
                    "id": "edgeA-B",
                    "source": "A",
                    "target": "B",
                    "dimension": 1
                }
            },
            //{
            //    "data": {
            //        "id": "edgeB-A",
            //        "source": "B",
            //        "target": "A",
            //        "dimension": 1
            //    }
            //},
            {
                "data": {
                    "id": "edgeA-C",
                    "source": "A",
                    "target": "C",
                    "dimension": 1
                }
            },
            //{
            //    "data": {
            //        "id": "edgeC-A",
            //        "source": "C",
            //        "target": "A",
            //        "dimension": 1
            //    }
            //},
            {
                "data": {
                    "id": "edgeB-C",
                    "source": "B",
                    "target": "C",
                    "dimension": 1
                }
            },
            //{
            //    "data": {
            //        "id": "edgeC-B",
            //        "source": "C",
            //        "target": "B",
            //        "dimension": 1
            //    }
            //},
            {
                "data": {
                    "id": "edgeA-BC",
                    "source": "A",
                    "target": "BC",
                    "dimension": 2
                }
            },
            //{
            //    "data": {
            //        "id": "edgeBC-B-A",
            //        "source": "BC",
            //        "target": "A",
            //        "dimension": 2
            //    }
            //},
            //{
            //    "data": {
            //        "id": "edgeBC-C-A",
            //         "source": "BC",
            //          "target": "A",
            //          "dimension": 2
            //      }
            //  },
            {
                "data": {
                    "id": "edgeB-AC",
                    "source": "B",
                    "target": "AC",
                    "dimension": 2
                }
            },
            {
                "data": {
                    "id": "edgeC-AB",
                    "source": "C",
                    "target": "AB",
                    "dimension": 2
                }
            }
        ]
    };

    //COMBINATORIAL 4
    $scope.elements = {
        "nodes": [
            {"data": {"id": "A"}},
            {"data": {"id": "B"}},
            {"data": {"id": "C"}},
            {"data": {"id": "D"}},
            {"data": {"id": "AB"}},
            {"data": {"id": "AC"}},
            {"data": {"id": "AD"}},
            {"data": {"id": "BC"}},
            {"data": {"id": "BD"}},
            {"data": {"id": "CD"}},
            {"data": {"id": "ABC"}},
            {"data": {"id": "ACD"}},
            {"data": {"id": "BCD"}},
            {"data": {"id": "ABD"}}
        ],
        "edges": [
            {
                "data": {
                    "id": "edgeA-B",
                    "source": "A",
                    "target": "B",
                    "dimension": 1
                }
            },
            {
                "data": {
                    "id": "edgeA-C",
                    "source": "A",
                    "target": "C",
                    "dimension": 1
                }
            },
            {
                "data": {
                    "id": "edgeA-D",
                    "source": "A",
                    "target": "D",
                    "dimension": 1
                }
            },
            {
                "data": {
                    "id": "edgeB-C",
                    "source": "B",
                    "target": "C",
                    "dimension": 1
                }
            },
            {
                "data": {
                    "id": "edgeC-D",
                    "source": "C",
                    "target": "D",
                    "dimension": 1
                }
            },
            {
                "data": {
                    "id": "edgeA-BC",
                    "source": "A",
                    "target": "BC",
                    "dimension": 2
                }
            },
            {
                "data": {
                    "id": "edgeA-BD",
                    "source": "A",
                    "target": "BD",
                    "dimension": 2
                }
            },
            {
                "data": {
                    "id": "edgeA-CD",
                    "source": "A",
                    "target": "CD",
                    "dimension": 2
                }
            },
            {
                "data": {
                    "id": "edgeB-AC",
                    "source": "B",
                    "target": "AC",
                    "dimension": 2
                }
            },
            {
                "data": {
                    "id": "edgeB-CD",
                    "source": "B",
                    "target": "CD",
                    "dimension": 2
                }
            },
            {
                "data": {
                    "id": "edgeB-AD",
                    "source": "B",
                    "target": "AD",
                    "dimension": 2
                }
            },
            {
                "data": {
                    "id": "edgeC-AB",
                    "source": "C",
                    "target": "AB",
                    "dimension": 2
                }
            },
            {
                "data": {
                    "id": "edgeC-AD",
                    "source": "C",
                    "target": "AD",
                    "dimension": 2
                }
            },
            {
                "data": {
                    "id": "edgeC-BD",
                    "source": "C",
                    "target": "BD",
                    "dimension": 2
                }
            },
            {
                "data": {
                    "id": "edgeD-AB",
                    "source": "D",
                    "target": "AB",
                    "dimension": 2
                }
            },
            {
                "data": {
                    "id": "edgeD-AC",
                    "source": "D",
                    "target": "AC",
                    "dimension": 2
                }
            },
            {
                "data": {
                    "id": "edgeD-BC",
                    "source": "D",
                    "target": "BC",
                    "dimension": 2
                }
            },
            {
                "data": {
                    "id": "edgeAB-CD",
                    "source": "AB",
                    "target": "CD",
                    "dimension": 4
                }
            },
            {
                "data": {
                    "id": "edgeAC-BD",
                    "source": "AC",
                    "target": "BD",
                    "dimension": 4
                }
            },
            {
                "data": {
                    "id": "edgeAD-BC",
                    "source": "AD",
                    "target": "BC",
                    "dimension": 4
                }
            },
            {
                "data": {
                    "id": "edgeA-BCD",
                    "source": "A",
                    "target": "BCD",
                    "dimension": 3
                }
            },
            {
                "data": {
                    "id": "edgeB-ACD",
                    "source": "B",
                    "target": "ACD",
                    "dimension": 3
                }
            },
            {
                "data": {
                    "id": "edgeC-ABD",
                    "source": "C",
                    "target": "ABD",
                    "dimension": 3
                }
            },
            {
                "data": {
                    "id": "edgeD-ABC",
                    "source": "D",
                    "target": "ABC",
                    "dimension": 3
                }
            }
        ]
    };

    //console.log($scope.elements.edges.length);

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
    $scope.populateElement = function(){
        for (x in $scope.elements.nodes){
            var model = {
                group:'nodes',
                data:{id:$scope.elements.nodes[x].data.id, type:$scope.elements.nodes[x].data.id, name:$scope.elements.nodes[x].data.id}
            };
            $scope.elementsObj[$scope.elements.nodes[x].data.id] = model;
        }
        for (x in $scope.elements.edges){
            var model = {
                group:'edges',
                classes:'unbundled-bezier',
                data:$scope.elements.edges[x].data
            };
            $scope.elementsObj[$scope.elements.edges[x].data.id] = model;
        }
    };
    //$scope.populateElement();

    function getAllSubsets(theArray) {
        return theArray.reduce(function (subsets, value) {
            return subsets.concat(subsets.map(function (set) {
                return [value].concat(set);
            }));
        }, [[]]);
    };  

    //TODO: STANDARDIZE ALG
    //FIX UPDATING
    $scope.combinatorialGenerator = function(model){
        
        //cytoData.getGraph().then(function(graph){
            //console.log(graph)
            $scope.elementsObj = {};
            //$scope.graph = graph;
            //$scope.graph.layout();

            var powerSet = [];
            powerSet = getAllSubsets(model)
            powerSet.shift();
            powerSet.pop();
            //GENERATE NODES
            for (x in powerSet){
                var stringX = powerSet[x].join('');
                var modelNode = {
                    group:'nodes',
                    data:{id:stringX, type:stringX, name:stringX}
                };
                $scope.elementsObj[stringX] = modelNode;
                //GENERATE EDGES
                for (y in powerSet){
                    var stringY = powerSet[y].join('');
                    var found = stringY.split('').some(function(obj){
                        return stringX.split('').includes(obj);
                    });
                    if (!found){
                        var combDif = stringX.split('').length - stringY.split('').length
                        if (combDif > 0){
                            for(var i = 0; i<=combDif; i++){
                                var modelEdge = {
                                    group:'edges',
                                    data:{id:stringX+i+'-'+stringY, source:stringX, target:stringY}
                                };
                                $scope.elementsObj[stringX+i+'-'+stringY] = modelEdge;
                            }   
                        }
                        else{
                            var modelEdge = {
                                group:'edges',
                                data:{id:stringX+'-'+stringY, source:stringX, target:stringY}
                            };
                            $scope.elementsObj[stringX+'-'+stringY] = modelEdge;
                        }
                    }
                }
            }
            console.log($scope.elementsObj);
            cytoData.getGraph().then(function(graph){
                $scope.graph = graph;
                //$scope.graph.fit();
                $scope.graph.layout({
                    name: 'cose',//'cola', //name: 'cose', coolingFactor: 0, animate: 'end',  //numIter: 100000000,
                //    infinite: false,
                    //fit: true
                }).run();
            });
        //});
    };
    $scope.combinatorialGenerator(['A','B','C']);

    $scope.classicMarketGenerator = function(array){
        $scope.classicElementsObj = {};
        for(x in array){
            var modelNode = {
                group:'nodes',
                data:{id:array[x], type:array[x], name:array[x]}
            };
            $scope.classicElementsObj[array[x]] = modelNode;
            for(y in array){
                if (array[x] != array[y]){
                    var modelEdge = {
                        group:'edges',
                        data:{id:array[x]+array[y], source:array[x], target:array[y]}
                    };
                    $scope.classicElementsObj[array[x]+array[y]] = modelEdge;
                }
            }
        }
        //cytoData.getGraph().then(function(graph){
        //    $scope.graph = graph;
        //    $scope.graph.layout({name: 'cose'}).run();
        //});
    };
    $scope.classicMarketGenerator(['A','B']);

    //TODO
    $scope.inverseFacetGenerator = function(model){
        $scope.elementsObj = {};
        //cytoData.getGraph().then(function(graph){
        //    $scope.graph = [];
        //    $scope.graph.layout({
        //        name: 'cose',
        //        infinite: true,
        //        fit: false
        //    }).run();
        //});
        var powerSet = [];
        if (model){powerSet = getAllSubsets(model);}
        else{powerSet = getAllSubsets(['A','B','C'])}
        powerSet.shift();
        //GENERATE NODES
        for (x in powerSet){
            var stringX = powerSet[x].join('');
            var modelNode = {
                group:'nodes',
                data:{id:stringX, type:stringX, name:stringX}
            };
            $scope.elementsObj[stringX] = modelNode;
            //GENERATE EDGES
            for (y in powerSet){
                var stringY = powerSet[y].join('');
                var found = stringY.split('').some(function(obj){
                    return stringX.split('').includes(obj);
                });
                if (found){
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
                name: 'cose',
                infinite: true,
            }).run();
        });
    };

    $scope.pureMarketGenerator = function(combinatorialRank, marketSize){

        $scope.elementsObj = {};
        var powerSet = [];
        powerSet = getAllSubsets(marketSize);
        powerSet.shift();
        powerSet.pop();
        for (x in powerSet){
            if(powerSet[x].length > combinatorialRank){
                powerSet.splice(x, 1);
            }
        }
        console.log(powerSet)

        //GENERATE NODES
        for (x in powerSet){
            var stringX = powerSet[x].join('');
            var modelNode = {
                group:'nodes',
                data:{id:stringX, type:stringX, name:stringX}
            };
            $scope.elementsObj[stringX] = modelNode;
            
            //for (y in powerSet){
            //    var stringY = powerSet[y].join('');
            //    var found = stringY.split('').some(function(obj){
            //        return stringX.split('').includes(obj);
            //    });
            //    if (!found){
            //        var modelEdge = {
            //            group:'edges',
            //            data:{id:stringX+'-'+stringY, source:stringX, target:stringY}
            //        };
            //        $scope.elementsObj[stringX+'-'+stringY] = modelEdge;
            //    }
            //}

        }

        console.log($scope.elementsObj);

        cytoData.getGraph().then(function(graph){
            $scope.graph = graph;
            $scope.graph.layout({
                name: 'cose',
                infinite: true,
                fit: false
            }).run();
        });
    };

    //for (x in $scope.item.associatedModels){
    //    var length = $scope.graphData.nodes.length;
    //    $scope.graphData.nodes.push({name:$scope.item.associatedModels[x].type})
    //    $scope.graphData.links.push({value:1, source:0, target:length});
    //}
    
    //DATA MODELS
    $scope.humanReadableTokenModel = 'var humanReadableTokenModel = '+JSON.stringify({ 
        string: 'MODEL+ADDRESS',
        information:{
            inCirculation:1,
            markets:0,
        },
        protocols:[
            'STRUCTURE',
            'LANGUAGE',
            'CONGRUENCE',
            'MANIFOLD',
        ],
        logic:{
            transferrable:true, 
            onCreate:'function(onCreate){}',

        }
    }, null, 4);

    $scope.protocolStructureModel = JSON.stringify({
        create: "function(){return true}",
        getSome: "function(){return true}"
    }, null, 4);

    $scope.newOrderModel = JSON.stringify([{
            setAlpha:{UNIVERSALTOKEN:1},
            setBeta:{'CRE8+TIME+VOLUNTEER+ONMINT+SPONSOR+ADDRESS':1}, 
            type:'ONBOOK', 
            status:'CONTINUAL'
        },{
            setAlpha:{UNIVERSALTOKEN:20},
            setBeta:{'CRE8+TIME+REST+ONMINT+SPONSOR+ADDRESS':0.1}, 
            type:'ONBOOK', 
            status:'CONTINUAL'
        },{
            setAlpha:{UNIVERSALTOKEN:15},
            setBeta:{
                'CRE8+TIME+CHILL+ONMINT+SPONSOR+ADDRESS':2, 
                'CRE8+TIME+VOLUNTEER+ONMINT+SPONSOR+ADDRESS':1
            }, 
            type:'ONBOOK', 
            status:'CONTINUAL'
        },
    ], null, 4);

    $scope.orderBookTensor = JSON.stringify({
        CRE8:{
            BTC:{orderBook:[]},
            ETH:{orderBook:[]},
            LTC:{orderBook:[]},
            XRP:{orderBook:[]},
        },
        BTC:{
            CRE8:{orderBook:[]},
            ETH:{orderBook:[]},
            LTC:{orderBook:[]},
            XRP:{orderBook:[]},
        },
    }, null, 4);

    //MODELS..
    //HEADERS IN HTML.. GENERATE TOKEN.. PASSPORT.. 

    $scope.actionTokenization = JSON.stringify({
        create:'function(newFollow){}',
        getSome:'function(newQuery){}'
    }, null, 4);

    console.log($scope.actionTokenization)

    //TODO FACTORIZATION OF COMMON MODEL ELEMENTS.. 
    //$scope.metaModel = JSON.stringify({}, null, 4);


    //is this it?
    //recursive? 
    //close

    $scope.queryModel = [{
        filter:[
            {
                association:'association',
                limit:'limit',
                skip:'skip',
                sort:'sort',
                chain:'OR',
            },
            {
                id:'id',
                chain:'OR',
            },
            {
                location:{coordinates:['long', 'lat'], distance:'distance'},
                limit:'limit',
                skip:'skip',
                sort:'sort',
                chain:'OR',
            },
            {
                query:'query',
                limit:'limit',
                skip:'skip',
                sort:'sort',
                chain:'OR',
            },
            {
                tag:'tag',
                limit:'limit',
                skip:'skip',
                sort:'sort',
                chain:'OR',
            },
            {
                urlTitle:'urlTitle',
                chain:'OR',
            }
        ],
        limit:'limit',
        skip:'skip',
        sort:'sort',
        chain:'OR'
    }];

    $scope.queryModel = JSON.stringify([{
        filter:[{
            model:'Association, Task, Project',//Association, Task, Project ..
            modelParam:'association, id, location, query, tag, ...',//'association, id, location, query, tag, urlTitle',
            query:'query',
            association:{
                population:'boolean',
                depth:'integer',
            },
            params:{
                limit:'integer',
                skip:'integer',
                sort:'modelParam sortParam',
            },
            chain:'logic [\'AND\',\'OR\']',
        }],
        params:{
            limit:'integer',
            skip:'integer',
            sort:'modelParam sortParam',
        },
        chain:'logic [\'AND\',\'OR\']'
    }], null, 4);

    $scope.metaModel = $scope.queryModel

    $scope.actionModel = JSON.stringify({
        address: {type: 'string'},
        information: {type: 'json'},
        createdAt: {type: 'datetime'},
        action: {type: 'string'},
        associatedModels: {type: 'json'},
        location: {type: 'json'},
        tags: {type: 'json'},
        creator: {type: 'string'},
    }, null, 4);

    $scope.appModel = JSON.stringify({
        address: {type: 'string'},
        protocols: {},
    }, null, 4);

    $scope.associationModel = JSON.stringify({
        associatedModels: [
            {type:"MODELTYPE", address:"ADDRESS"},
            {type:"MODELTYPE", address:"ADDRESS"}
        ],
        context: {
            "dimension":"weight",
        }
    }, null, 4);

    $scope.blockModel = JSON.stringify({
        txCount: {type: 'string'},
        height: {type: 'string'},
        minedBy: {type: 'string'},
        timeStamp: {type: 'string'},
        merkleRoot: {type: 'string'},
        previousBlock: {type: 'string'},
        nextBlock: {type: 'string'},
        size: {type: 'string'},
    }, null, 4);

    $scope.contentModel = JSON.stringify({
        id: {type: 'string'},
        title: {type: 'string'},
        content: {type: 'string'},
        tags: {type: 'string'}, 
        type: {type: 'string'},
        location: {type: 'json'},
        associatedModels: {type: 'json'},
        reactions: {type: 'json'},
        user: {model: 'user'},
        createdAt: {type: 'datetime'},
    }, null, 4);

    $scope.contentQuery = JSON.stringify({
        filter:[{
            id: {'equals': ''},
            title: {'contains': ''},
            tags: {'contains': ''},
            type: {'equals' : ''},
            location: ['lat','lng','distance'],
            associatedModels: {'contains': {}},
            reactions: {'contains': {}},
            createdAt: {'lessThan': 'today'},
        }],
        limit: 1,
        skip:0,
        sort:'createdAt DESC',
    }, null, 4);

    $scope.dataModel = JSON.stringify({id:'string', data:'binary'}, null, 4);
    
    $scope.followerModel = JSON.stringify({
        id: {type: 'string'},
        followed: {
            model: 'user',
        },
        follower: {
            model: 'user',
        }
    }, null, 4);

    $scope.itemModel = JSON.stringify({
        id: {type: 'string'},
        title: {type: 'string'},
        content: {type: 'string'},
        tags: {type: 'string'},
        associatedModels: {type: 'json'},
        reactions: {type: 'json'},
        location: {type: 'json'},
        info: {type: 'json'},
        user: {model: 'user'},
        owner: {type: 'json'}
    }, null, 4);

    $scope.locationModel = JSON.stringify({
        creator: {type: 'string'},
        location: {type: 'json'},
    }, null, 4);

    $scope.memberModel = JSON.stringify({
        id: {type: 'string'},
        avatarUrl: {type: 'string',},
        coverUrl: {type: 'string'},
        email: {type: 'email',},
        username: {type: 'string',},
        firstName: {type: 'string'},
        lastName: {type: 'string'},
        dateOfBirth: {type: 'string'},
        address: {type: 'string'},
        loggedIn: {type: 'boolean'},
        isWorking: {type: 'boolean'},
        isLive: {type: 'boolean'},
        status: {type: 'string'},
        followingCount: {type: 'integer'},
        followerCount: {type: 'integer'},
        notificationCount: {type: 'integer'},
        projectCount: {type: 'integer'},
        totalWork: {type: 'integer'},
        reputation: {type: 'json'},
        balance: {type: 'json'},
        locationTime: {type: 'json'},
        passports: { collection: 'Passport', via: 'user' }
    }, null, 4);

    $scope.notificationModel = JSON.stringify({
        id: {type: 'string'},
        user: {model: 'user'},
        type: {type: 'string'},
        content: {type: 'string'},
        priority: { type: 'string'},
        isRead: { type: 'boolean'}
    }, null, 4);

    $scope.orderModel = JSON.stringify({
        id: {type: 'string'},
        creator: {type: 'string'},
        status: {type: 'string'},
        type: {type: 'string'},
        setAlpha: {type:'json'},
        setBeta: {type:'json'},
        createdAt: {type: 'string'},
    }, null, 4);

     $scope.orderQuery = JSON.stringify({
        limit: 10,
        skip:0,
        sort:'createdAt DESC',
    }, null, 4);

    $scope.passportModel = JSON.stringify({
        id: {type: 'string'},
        protocol: { type: 'alphanumeric'},
        password: { type: 'string', minLength: 8 },
        provider: { type: 'alphanumericdashed' },
        identifier: { type: 'string' },
        tokens: { type: 'json' },
        user: { model: 'User',}
    }, null, 4);

     $scope.projectModel = JSON.stringify({
        id: {type: 'string'},
        title: {type: 'string'},
        description: {type: 'string'},
        avatarUrl: {type: 'string'},
        urlTitle: {type: 'string'},
        stringManifold: {type: 'string'},
        tags: {type: 'string'},
        location: {type: 'json'},
        associatedModels: {type: 'json'},
        user: {model: 'user'},
        info: {type: 'json'},
    }, null, 4);


    //SIMPLY PART OF THE PROJECT..
    //DEPRECIATE
    $scope.projectCharterModel = JSON.stringify({
        membership:{
            types:[{
                title:'Member',
                permissions:[{reputationMultiplier:1}],
                requireValidation:true,
                membershipValidationThreshold:[{
                    context:'GENERAL', 
                    amount:'{totalMemberRep}/100',
                }]
            },{
                title:'Creator',
                permissions:[],
                requireValidation:true,
                membershipValidationThreshold:[{context:'{project}', amount:'{totalMemberRep}'}]
            }],
        },
        validation:{
            self:{},
            content:{reputationDecayFunction:{}},
            item:{reputationDecayFunction:{}},
            member:{},
            order:{},
            project:{},
            task:{},
            time:{},
            transaction:{
                manifolds:[],
                tokens:[],
                reputationDecayFunction:[{}],
                validationThreshold:[{context:'{project}', amount:'{totalMemberRep}'}]
            },
            validation:{
                self:{},
                content:{},
                item:{},
                member:{},
                order:{},
                project:{},
                task:{},
                time:{},
                transaction:{},
                validation:{},
            },
            appSpecificModel:{},
        },
        manifolds:[{
            title:'{project}+',
            description:'',
            mintingLogic:'{app:id}',
        }],
        tokens:[],
    }, null, 4);

    $scope.projectMemberModel = JSON.stringify({
        id: {type: 'string'},
        project: {model: 'project'},
        user: {model: 'user'},
    }, null, 4);

    $scope.protocolModel = JSON.stringify({"protocol":"function(){}"}, null, 4);

    $scope.reactionModel = JSON.stringify({
        id: {type: 'string'},
        amount: {type: 'string'},
        type: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        reactions: {type: 'json'}
    }, null, 4);

    $scope.searchModel = JSON.stringify({
        filter:[{
            obj: 'param',
            model: 'CONTENT'
        }],
        limit: 10,
        skip: 0,
        sort: 'createdAt DESC'
    }, null, 4);

    $scope.taskModel = JSON.stringify({
        id: {type: 'string'},
        title: {type: 'string'},
        content: {type: 'string'},
        location: {type: 'json'},
        tags: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        reactions: {type: 'json'}
    }, null, 4);

    $scope.timeModel = JSON.stringify({
        id: {type: 'string'},
        amount: {type: 'string'},
        content: {type: 'string'},
        startTime: {type: 'string'},
        tags: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        location: {type: 'json'},
        reactions: {type: 'json'}
    }, null, 4);

    $scope.tokenModel = JSON.stringify({
        string: {type: 'string'},
        protocols:{type:'json'},
        logic:{type:'json'},
        information:{type:'json'}
    }, null, 4);

    $scope.transactionModel = JSON.stringify({
        id: 'string',
        to: 'address',
        from: 'address',
        amountSet: {"ASSETSTRING": 10, "CRE8":1},
        tags: 'comma,seperated,tag,string',
        content: 'transation content'
    }, null, 4);

    $scope.transactionQuery = JSON.stringify({
        limit: 10,
        skip:0,
        sort:'createdAt DESC',
    }, null, 4);

    $scope.txModel = JSON.stringify({
        addressFrom: {type: 'string'},
        addressTo: {type: 'string'},
        data: {type: 'string'}
    }, null, 4);

    $scope.validationModel = JSON.stringify({
        id: {type: 'string'},
        associatedModels: {type: 'json'},
        content: {type: 'string'},
        createdAt: {type: 'string'},
        reputation: {type: 'json'},
        type: {type: 'json'},
        user: {model: 'user'},
        validation: {type: 'json'},
        validationModels: {type: 'json'},
    }, null, 4);

    $scope.validationQuery = JSON.stringify({
        limit: 10,
        skip:0,
        sort:'createdAt DESC',
    }, null, 4);


}]);
