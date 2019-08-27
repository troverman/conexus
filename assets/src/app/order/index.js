angular.module( 'conexus.order', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'order', {
        url: '/order/:id',
        views: {
            "main": {
                controller: 'OrderController',
                templateUrl: 'order/index.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            order: ['$stateParams', 'OrderModel', function($stateParams, OrderModel){
                return OrderModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
            orders:['order', 'OrderModel', function(order, OrderModel){
                return OrderModel.get({order:order.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            contentList: ['ContentModel', 'order', function(ContentModel, order){
                return ContentModel.get({order:order.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'OrderController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'contentList', 'ContentModel', 'order', 'orders', 'ReactionModel', 'titleService', function OrderController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, contentList, ContentModel, order, orders, ReactionModel, titleService ) {
    
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.order = order;

    //TODO: PROTOCOL
    $scope.order.tokens = [];

    //TODO: FIX
    $rootScope.associatedModels = [{
        type:'ORDER', 
        id:order.id, 
        text:'ORDER+'+ $scope.order.id,
        context:[{text:'general', score:100}]
    }];


    titleService.setTitle('Order | ' + $scope.order.id + ' | CRE8.XYZ');

    $scope.orders = orders;
    $scope.contentList = contentList;

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
            "selector": ".blue",
            "style": {
                "line-color": "#0000ff",
            }
        },
        {
            "selector": ".red",
            "style": {
                "line-color": "#ff0000",
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

    //HMM
    $scope.selectedTab = 'INFORMATION';
    $scope.selectTab = function(model){$scope.selectedTab = model;};

    $scope.elementsObj = {};
    $scope.elementsObjCombinatorial = {};

    $scope.populateGraph = function(){
        var alphaNode = {
            group:'nodes',
            data:{id: Object.keys(order.setAlpha).join(','), name: Object.keys(order.setAlpha).join(',')}
        };
        var betaNode = {
            group:'nodes',
            data:{id:Object.keys(order.setBeta).join(','), name: Object.keys(order.setBeta).join(',')}
        };

        $scope.elementsObjCombinatorial[Object.keys(order.setAlpha).join(',')] = alphaNode;
        $scope.elementsObjCombinatorial[Object.keys(order.setBeta).join(',')] = betaNode;

        for (x in Object.keys(order.setBeta)){
            var edge = {
                group:'edges',
                data:{
                    id: Object.keys(order.setAlpha).join(',')+Object.keys(order.setBeta)[x]+'-'+Object.keys(order.setBeta).join(','), 
                    source: Object.keys(order.setBeta).join(','), 
                    target: Object.keys(order.setAlpha).join(','),
                    label: Object.keys(order.setBeta)[x]+':'+ order.setBeta[Object.keys(order.setBeta)[x]],
                },
                classes: ['edgeLabelStyle', 'blue'],
            };
            $scope.elementsObjCombinatorial[Object.keys(order.setAlpha).join(',')+Object.keys(order.setBeta)[x]+'-'+Object.keys(order.setBeta).join(',')] = edge;
        }

        for (x in Object.keys(order.setAlpha)){
            var edge = {
                group:'edges',
                data:{
                    id: Object.keys(order.setBeta).join(',')+Object.keys(order.setAlpha)[x]+'-'+Object.keys(order.setAlpha).join(','), 
                    source: Object.keys(order.setAlpha).join(','), 
                    target: Object.keys(order.setBeta).join(','),
                    label: Object.keys(order.setAlpha)[x]+':'+ order.setAlpha[Object.keys(order.setAlpha)[x]],
                },
                classes: ['edgeLabelStyle', 'red'],
            };
            $scope.elementsObjCombinatorial[Object.keys(order.setBeta).join(',')+Object.keys(order.setAlpha)[x]+'-'+Object.keys(order.setAlpha).join(',')] = edge;
        }
    };
    $scope.populateGraph();

    $scope.populateGraph2 = function(){
        for (y in Object.keys(order.setAlpha)){
            var modelNode = {
                group:'nodes',
                data:{id:Object.keys(order.setAlpha)[y], name:Object.keys(order.setAlpha)[y]}
            };
            if (Object.keys($scope.elementsObj).indexOf(Object.keys(order.setAlpha)[y]) == -1){
                $scope.elementsObj[Object.keys(order.setAlpha)[y]] = modelNode;
            }
            for (z in Object.keys(order.setBeta)){
                var modelNode = {
                    group:'nodes',
                    data:{id:Object.keys(order.setBeta)[z], name:Object.keys(order.setBeta)[z]}
                };
                if (Object.keys($scope.elementsObj).indexOf(Object.keys(order.setBeta)[z]) == -1){
                    $scope.elementsObj[Object.keys(order.setBeta)[z]] = modelNode;
                    var modelEdge = {
                        group:'edges',
                        data:{
                            id: Object.keys(order.setAlpha)[y]+'-'+Object.keys(order.setBeta)[z], 
                            source: Object.keys(order.setAlpha)[y], 
                            target: Object.keys(order.setBeta)[z], 
                            label: order.setBeta[Object.keys(order.setBeta)[z]],
                        },
                        classes: 'edgeLabelStyle',
                    };
                    $scope.elementsObj[Object.keys(order.setAlpha)[y]+'-'+Object.keys(order.setBeta)[z]] = modelEdge;
                }
            }
        }
    };
    $scope.populateGraph2();





    function getAllSubsets(theArray) {
      return theArray.reduce(function (subsets, value) {
        return subsets.concat(subsets.map(function (set) {
          return [value].concat(set);
        }));
      }, [[]]);
    };

    $scope.setAlpha = Object.keys($scope.order.setAlpha);
    $scope.setBeta = Object.keys($scope.order.setBeta);

    $scope.alphaPower = getAllSubsets($scope.setAlpha);
    $scope.alphaPower.shift();
    $scope.betaPower = getAllSubsets($scope.setBeta);
    $scope.betaPower.shift();
    //build tensor
    //tierate dim

    function powerSetDecompose(array, tensor, iteration){
        
        for (x in array){
            tensor.push(array[x])
            if (array.length != 1){
                iteration++
                //powerSetDecompose(array, tensor, iteration);
            }
        }
        //lol
        console.log(tensor)


    };
    powerSetDecompose($scope.betaPower, [], 0);

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction = {
                amount:1,
                type:type,
                user:$rootScope.currentUser.id,
                associatedModels:[{type:'ORDER', id:item.id}],
            };
            $scope.order.data.apps.reactions[type]++;
            ReactionModel.create($scope.newReaction);
            $rootScope.pop(type, item.id);
        }
        else{$mdSidenav('login').toggle()}
    };

    $sailsSocket.subscribe('order', function (envelope) {
        console.log(envelope)
        switch(envelope.verb) {
            case 'created':
                if ($scope.order.id == envelope.data.id){
                    $scope.order.data.apps.attention = envelope.data.data.apps.attention;
                }
                break;
        }
    });

}]);
