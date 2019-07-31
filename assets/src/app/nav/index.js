angular.module( 'conexus.nav', [
])

.controller( 'NavCtrl', ['$http', '$interval', '$location', '$mdSidenav', '$q', '$rootScope', '$sailsSocket', '$sce', '$scope', '$state', '$window', 'ActionModel', 'AttentionModel', 'ConnectionModel', 'ContentModel', 'cytoData', 'ItemModel', 'NotificationModel', 'OrderModel', 'ProjectModel', 'ReactionModel', 'SearchModel', 'TaskModel', 'TimeModel', 'toaster', 'TransactionModel', 'ValidationModel', 'UserModel', function NavController( $http, $interval, $location, $mdSidenav, $q, $rootScope, $sailsSocket, $sce, $scope, $state, $window, ActionModel, AttentionModel, ConnectionModel, ContentModel, cytoData, ItemModel, NotificationModel, OrderModel, ProjectModel, ReactionModel, SearchModel, TaskModel, TimeModel, toaster, TransactionModel, ValidationModel, UserModel ) {

    //TODO: ALL!
    //VALIDATE BUNDLES OF TIME.. IE GRANULAR TIME DATA.. POST REQ EVERY 1 SEC? TO MUCH OR NOT
    //CREATE TIME .. 
    //UPDATE EVERY 10 SECONDS 
    //--> THATS THE FRONT END TIMER
    //.. CALC THE TIME SINCE CREATE TO ENSURE TIMER
    //.. NOT FRONTEND

    //TODO: IN APP.JS
    //STATE CHANGE LOGIC
    $rootScope.$on("$stateChangeStart", function() {
        //VIEW GENERATION
        $scope.createView();
        $scope.closeAllNav();
    });
    
    //INITALIZE LOCAL VARIABLES
    $scope.associationsAreExpanded = false;
    $scope.chart = {};
    $scope.confirm = {};

    //ROOTSCOPE..
    $scope.directedGraphStyle = [
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
    $scope.directedGraphElements = {};
    $scope.directedGraphOptions = {
        textureOnViewport:true,
        pixelRatio: 'auto',
        motionBlur: false,
        hideEdgesOnViewport:true
    };
    $scope.directedGraphLayout = {name: 'cola'};

    $scope.inputVector = [];
    $scope.map = {center: {latitude: 35.902023, longitude: -84.1507067 }, zoom: 9};
    $scope.newLogin = {};
    $scope.outputMatix = [];
    $scope.outputVector = [];
    $scope.item = {};
    $scope.inverted = false;
    $scope.isInformation = false;
    $scope.selectedOrderType = 'ONBOOKS';
    $scope.selectedType = 'POST';
    $scope.validationColumnRender = {};

    //TODO: REFACTOR SOON
    if ($rootScope.currentUser){

        //DO BETTER
        $scope.viewing = true;

        $scope.newAction = {};
        $scope.newContent = {};
        $scope.newItem = {};
        $scope.newOrder = {};
        $scope.newProject = {};
        $scope.newReaction = {};
        $scope.newTask = {};
        $scope.newTime = {};
        $scope.newTransaction = {};
        $scope.newValidation = {};
        $scope.newContent.associatedModels = [{text: $rootScope.currentUser.username, type:'PROFILE', id:$rootScope.currentUser.id}];

        //IF PERMISSIONS
        //TODO: LOCATION FILTER BASED ON LOCATION.. DEFAULT -- TOGGLE.. 
        $scope.getLatLng = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    lat = position.coords.latitude; 
                    lng = position.coords.longitude;
                    $rootScope.currentUser.location = {
                        lat:lat,
                        lng:lng
                    };
                });
            }
        };
        //$scope.getLatLng();

        //TODO: KINDA HACY
        $rootScope.$watch('currentUser', function(){
            $scope.newTransaction.from = [{text:$rootScope.currentUser.username, id:$rootScope.currentUser.id}];
        }, true);

        //TODO:BETTER
        NotificationModel.getSome({user:$rootScope.currentUser.id, isRead:false, limit:100, skip:0, sort:'createdAt DESC'}).then(function(notifications){
            $scope.notifications = notifications;
            $rootScope.notificationCount = $scope.notifications.length;
            for (x in $scope.notifications){
                $scope.pop($scope.notifications[x].title, $scope.notifications[x].content);
            }
        });

        //TODO: WEBSOCKETS
        $sailsSocket.subscribe('notification', function (envelope) {
            switch(envelope.verb) {
                case 'created':
                    console.log(envelope)
                    //TODO: HAS TO BE BETTER THAN SOCKET CHECK; SOCKET ROOMS? 
                    if ($rootScope.currentUser.id == envelope.data.user){
                        $rootScope.notificationCount++;
                        $scope.pop(envelope.data.title, envelope.data.info.username);
                        $rootScope.notificationCount++;
                    }
            }
        });
    }

    //ROOT FUNCTIONS
    $rootScope.actionToggle = function(item){
        $scope.closeAllNav();
        $scope.newAction = {};
        if($rootScope.currentUser){
            $scope.newAction.user = $rootScope.currentUser.id;
            if (item){
                $scope.newAction.type = 'USE';
                $scope.newAction.amount = 1
                $scope.newAction.associatedModels = [{text:item.title, address:item.id, id:item.id}];
            }
            $mdSidenav('action').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    //ROOT FUNCTIONS
    $rootScope.appToggle = function(){
        $scope.closeAllNav();

        $scope.newApp = {};

        $scope.newProtocol = {};
        $scope.newProtocol.associatedProtocols = [{text:'888 STRUCTURE'},{text:'TOKEN LANGUAGE STRUCTURE'},{text:'CRE8 MEMBER'}];
        $scope.newProtocol.title = 'New Protocol';
        $scope.newProtocol.code = 'function sampleCode(sampleParameter){}';

        if($rootScope.currentUser){$mdSidenav('app').toggle();}
        else{$mdSidenav('login').toggle();}
    };

     $rootScope.connectionToggle = function(){
        $scope.closeAllNav();
        if($rootScope.currentUser){
            //WHATS A CONNECTION
            $scope.newConnection = {
                associatedModels:$rootScope.associatedModels,
                creator:$rootScope.currentUser.id,
            };
            $mdSidenav('connection').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.contentToggle = function(){
        $scope.closeAllNav();
        if($rootScope.currentUser){

            $scope.newContent = {
                associatedModels:$rootScope.associatedModels,
                user:$rootScope.currentUser.id,
            };

            $scope.newContent.associatedModels.push({text:'SELF', type:'CONTENT', id:'SELF'})

            console.log($scope.newContent);

            $mdSidenav('content').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.cardDetailToggle = function(item){
        $scope.closeAllNav();
        $scope.item = item;
        $mdSidenav('cardDetail').toggle();
    };

    $rootScope.cre8Toggle = function(){
        $scope.closeAllNav();
        if($rootScope.currentUser){$mdSidenav('cre8').toggle();}
        else{$mdSidenav('login').toggle();}
    };

    $scope.expandAssets = function(){$scope.assetsAreExpanded = !$scope.assetsAreExpanded;};
    $scope.expandAssociations = function(){$scope.associationsAreExpanded = !$scope.associationsAreExpanded;};
    $scope.expandAdvancedFilter = function(){$scope.filtersAreExpanded = !$scope.filtersAreExpanded;};


    //TODO!!!
    $rootScope.filterToggle = function(type, item, model){

        $scope.updatedQuery = [];

        $scope.closeAllNav();

        $scope.locationFilter = {};
        $scope.locationFilter.distance = 10;
        //POSTIONS / MARKETS // LEDGER
        $scope.item = item;
        $scope.type = type;
        //NOTIFICATIONS
        $scope.selectedType = 'ALL';
        console.log(type, item);

        $scope.filterBuilder = JSON.stringify($scope.searchQueryNav, undefined, 4)

        //TODO: CONTAIN IN NAV -- > AS ROOT SCOPE.. 
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.loadAssociations = function(){        
            $scope.sortedAssociationArray = [];
            for (x in $scope.associations){
                var amount = countInArray($scope.associations, $scope.associations[x]);
                if ($scope.sortedAssociationArray.map(function(obj){return obj.element}).indexOf($scope.associations[x]) == -1){
                    $scope.sortedAssociationArray.push({amount:amount, element:$scope.associations[x]})
                }
            }
            $scope.sortedAssociationArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
        };
        $scope.loadLocations = function(){
            $scope.tags = $scope.projects.map(function(obj){
                return obj.location;
            });
            $scope.tags = [].concat.apply([], $scope.tags);
            $scope.tags = $scope.tags.filter(function(e){return e});
            $scope.sortedLocationArray = [];
            for (x in $scope.tags){
                var amount = countInArray($scope.tags, $scope.tags[x]);
                if ($scope.sortedLocationArray.map(function(obj){return obj.element}).indexOf($scope.tags[x]) == -1){
                    $scope.sortedLocationArray.push({amount:amount, element:$scope.tags[x]})
                }
            }
            $scope.sortedLocationArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
        };
        $scope.loadTags = function(){
            $scope.tags = $scope.projects.map(function(obj){
                var returnObj = {};
                if(obj.tags){obj.tags = obj.tags.split(',')}
                returnObj = obj.tags;
                return returnObj;
            });
            $scope.tags = [].concat.apply([], $scope.tags);
            $scope.tags = $scope.tags.filter(function(e){return e});
            $scope.sortedTagArray = [];
            for (x in $scope.tags){
                var amount = countInArray($scope.tags, $scope.tags[x]);
                if ($scope.sortedTagArray.map(function(obj){return obj.element}).indexOf($scope.tags[x]) == -1){
                    $scope.sortedTagArray.push({amount:amount, element:$scope.tags[x]})
                }
            }
            $scope.sortedTagArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
        };
        //IMPROVE :)
        $scope.init = function(){
            $scope.loadAssociations();
            $scope.loadLocations();
            $scope.loadTags();
            $scope.filterSet = {associations:$scope.sortedAssociationArray, tags:$scope.sortedTagArray, locations:$scope.sortedLocationArray}
        };
        //$scope.init();

        //TODO
        $scope.populateMap = function(){
            for (x in projects){
                if (projects[x].location){
                    $scope.markers.push({
                        id:projects[x].id,
                        content:projects[x].title,
                        url:projects[x].urlTitle,
                        coords:{
                            latitude:projects[x].location.lat,
                            longitude:projects[x].location.lng
                        }
                    });
                }
            }
        };
        //$scope.populateMap();

        $scope.selectAsset = function(item){
            if ($rootScope.selectedAssets.map(function(obj){return obj.text}).indexOf(item)==-1){
                $rootScope.selectedAssets.push({text:item});
                $scope.item.assets = $scope.item.assets.filter(function(obj) { 
                    return obj.element !== item
                });
            }

            console.log(item, $rootScope.searchQueryNav, $rootScope.searchQuery);

        };

        $scope.selectAssociation = function(item){
            if ($rootScope.searchQueryNav.associations.map(function(obj){return obj.text}).indexOf(item)==-1){
                $rootScope.searchQueryNav.associations.push({
                    text:'Assocation | '+item, 
                    query:item, 
                    type:'ASSOCIATION'
                });

                //$scope.init();

                $scope.item.associations = $scope.item.associations.filter(function(obj) { 
                    return obj.element !== item
                });
            }

            console.log(item, $rootScope.searchQueryNav, $rootScope.searchQuery);

        };

        $scope.selectLocation = function(item){
            if ($rootScope.searchQueryNav.locations.map(function(obj){return obj.text}).indexOf(item)==-1){
                item.distance = $scope.locationFilter.distance;
                $rootScope.searchQueryNav.locations.push({
                    text:'Location, '+$scope.locationFilter.distance+' | '+item.address, 
                    query:item, 
                    type:'LOCATION'
                });

                //$scope.init();

                $scope.item.locations = $scope.item.locations.filter(function(obj) { 
                    return obj.element !== item
                });
            }

            console.log(item, $rootScope.searchQueryNav, $rootScope.searchQuery);

        };

        $scope.selectTag = function(item){

            console.log(item);
            var selectedLimit = 100;
            var selectedSkip = 0;
            var selectedSort = 'createdAt DESC';

            var query = {
                filter:[
                    {
                        model:null,
                        modelParam:'tag',
                        query: item,
                        associaton:{
                            populate:true,
                            depth:2,
                            search:true,
                        },
                        params:{
                            limit:selectedLimit,
                            skip:selectedSkip,
                            sort:selectedSort,
                            chain:null
                        }
                    }
                ],
                params:{
                    limit:selectedLimit,
                    skip:selectedSkip,
                    sort:selectedSort
                },
                chain:'AND'
            };

            $scope.updatedQuery.push(query);


            //DO A FILTER OF SEARCHQUERY OF TYPE TAGS


            if ($rootScope.searchQueryNav.tags.map(function(obj){return obj.text}).indexOf(item)==-1){
                
                $rootScope.searchQueryNav.tags.push({
                    text:'Tag | '+item, 
                    query:item, 
                    type:'TAG'
                });

                //$scope.init();

                $scope.item.tags = $scope.item.tags.filter(function(obj) { 
                    return obj.element !== item
                });
            }




            console.log(item, $rootScope.searchQueryNav, $rootScope.searchQuery);

        };

        $scope.selectTypeFilter = function(item){
            if ($rootScope.searchQueryNav.type.map(function(obj){return obj.text}).indexOf(item)==-1){
                $rootScope.searchQueryNav.type.push({
                    text:'Type | '+item, 
                    query:item, 
                    type:'TYPE'
                });
                $scope.item.type = $scope.item.type.filter(function(obj) { 
                    return obj.element !== item
                });
            }

            console.log(item, $rootScope.searchQueryNav, $rootScope.searchQuery);

        };

        $mdSidenav('filter').toggle();
    };

    $rootScope.itemToggle = function(){
        $scope.closeAllNav();
        if($rootScope.currentUser){
            $scope.newItem = {};
            $mdSidenav('item').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.informationToggle = function(item){
        $mdSidenav('information').toggle();
        $scope.informationType = item;
        $scope.isInformation = true;
    };

    //TODO: RENDER REPUTATION TOGGLE..
    $rootScope.memberToggle = function(item){

    };

    $rootScope.memberQRToggle = function(item){
        $scope.closeAllNav();
        $scope.item = item;
        $mdSidenav('memberQR').toggle();
    };


    $rootScope.orderToggle = function(identiferSetAlpha, identiferSetBeta){

        $scope.closeAllNav();
        if($rootScope.currentUser){
            $scope.newOrder = {};
            if (identiferSetAlpha){
                $scope.identiferSetAlpha = [{text:identiferSetAlpha.id}];
            }
            if (identiferSetBeta){
                $scope.identiferSetBeta = [{text:identiferSetBeta.id}];
                $scope.newOrder.identiferSetBeta = [{text:identiferSetBeta.id}];
                $scope.newOrder.setBeta = {};
                $scope.newOrder.setBeta[identiferSetBeta.id] = 1
            }
            $mdSidenav('order').toggle();
        }


        else{$mdSidenav('login').toggle();}
    };

    $rootScope.orderSetToggle = function(orderSet){
        
        $scope.closeAllNav();
        if($rootScope.currentUser){

            console.log(orderSet)

        }

        else{$mdSidenav('login').toggle();}

    };

    $rootScope.projectToggle = function(){
        $scope.closeAllNav();
        if($rootScope.currentUser){
            $scope.newProject = {};
            $scope.newProject.associatedModels = $rootScope.associatedModels;
            $mdSidenav('project').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    //TODO
    $rootScope.renderToggle = function(item, type){
        $scope.closeAllNav();
        console.log(item);

        if (item.model == 'MARKET'){
            $scope.bidAskChart = {
                chart: {
                    zoomType: 'x',
                    height:250,
                },
                legend:{enabled:true},
                title: {text: null},
                xAxis: {title: {text: null}},
                yAxis: {title: {text: null}},
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    type: 'area',
                    id: 'asks',
                    name: 'Asks',
                    color: '#14b794',
                    data: []
                },{
                    type: 'area',
                    id:  'bids',
                    name: 'Bids',
                    color: '#a94442',
                    data: []
                }],
                credits:{enabled:false},
            };
            for(var i=-1000;i<1000;i++){
                if (i>0){$scope.bidAskChart.series[1].data.push([i+100000,i*i]);}
                if (i<0){$scope.bidAskChart.series[0].data.push([i+100000,i*i]);}
            }
        }


        $scope.item = item;
        $scope.content = item;
        //PATCH
        if ($scope.item.tags){
            if (!Array.isArray($scope.item.tags)){
                $scope.item.tags = $scope.item.tags.split(',');
            }
        }
        //PATCH
        if ($scope.item.task){
            if ($scope.item.task.tags){
                if (!Array.isArray($scope.item.task.tags)){
                     $scope.item.task.tags = $scope.item.task.tags.split(',');
                }
            }
        }
        //GET CHILDREN && || TIME... ASSOCIATIONS.. NEED TO FINISH ASSOCIATED SO I DONT KEEP REWRITING.. 
        function populateChildren(contentList, depth, limit){
            contentList.forEach(function(content) {
                ContentModel.getSome({contentModel:content.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(contentList){
                    console.log(contentList)
                    if (contentList.length > 0){
                        depth++ 
                        content.children = contentList;
                        $scope.content.children.push(content);
                        if (depth < limit){populateChildren(contentList, depth, limit)}
                    }
                });
            });
        }
        //TODO TYPE.. 
        ContentModel.getSome({contentModel:item.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(contentList){
            console.log(contentList)
            populateChildren(contentList, 0, 5);
        });
        $mdSidenav('render').toggle();
    };

     //ROOT FUNCTIONS
    $rootScope.registerToggle = function(){
        $scope.closeAllNav();
        if($rootScope.currentUser){$mdSidenav('action').toggle();}
        else{$mdSidenav('login').toggle();}
    };

    //TODO GLOBAL
    $scope.registerUser = function(){
        $scope.newMember.order = $scope.newOrderNEW;
        var data = JSON.stringify($scope.newMember);
        $rootScope.stateIsLoading = true;
        $http({method:'POST', url:'/auth/local/register', data:data}).then(function(newModel){
            $rootScope.currentUser = newModel.data;
            $location.path('/');
        });
    };
    
    //IMPROVE
    $rootScope.renderContent = function(item){
        if (item){
            if (!item.includes('>')){
                var replacedText = item.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                return $sce.trustAsHtml(replacedText);
            }
            else{return $sce.trustAsHtml(item)}
        }
    };

    $scope.renderGraph  = function(model){
        if (!model){model = 'circle'}
        cytoData.getGraph().then(function(graph){
            console.log($scope.directedGraphElements)
            $scope.graph = graph;
            $scope.graph.json($scope.directedGraphElements);
            $scope.graph.layout({
                name: model,
            }).run();
        });
    };

    $rootScope.renderMarketToggle = function(item){

        $scope.closeAllNav();
        $scope.item = item;

        $mdSidenav('market').toggle()

    };

    //TODO!!!
    $rootScope.renderValidationToggle = function(item){
        
        $scope.closeAllNav();
        $scope.item = item;

        //$scope.assoicationFilter = [{text:$scope.item.title || $scope.item.id}];
        $scope.assoicationFilter = [{text:$scope.item.associatedModels[0].address}];

        //TODO: GET ASSOCIATIONS
        //TODO: ASSOCIATION MODEL
        for (x in $scope.item.associatedModels){
            var nodeModel = {
                group:'nodes',
                data:{
                    id:$scope.item.associatedModels[x].address,
                    type:$scope.item.associatedModels[x].address,
                    name:$scope.item.associatedModels[x].address
                }
            }; 
            $scope.directedGraphElements[$scope.item.associatedModels[x].address] = nodeModel;
            if (x > 0){
                var edgeModel = {
                    group:'edges',
                    classes:'unbundled-bezier',
                    data:{
                        id:$scope.item.associatedModels[0].address+'-'+$scope.item.associatedModels[x].address,
                        source:$scope.item.associatedModels[0].address,
                        target:$scope.item.associatedModels[x].address
                    }
                };
                $scope.directedGraphElements[$scope.item.associatedModels[0].address+'-'+$scope.item.associatedModels[x].address] = edgeModel;
            }
        }

        //TODO: QUERY
        var validationQueryModel = {
            limit:100,
            skip:0,
            sort:'createdAt DESC',
            //associatedModels:[]
        };

        ValidationModel.getSome(validationQueryModel).then(function(validationModels){

            $scope.validationColumnRender = {
                chart: {zoomType: 'x'},
                series: [{
                    id: 'validation',
                    type: 'column',
                    name: 'Validation',
                    data: [],
                    yAxis: 0
                }],
                title: {text: ''},
                xAxis: {
                    crosshair: true,
                    gridLineWidth: 0.5,
                    gridLineColor: 'grey',
                    title: {text: null},
                    categories: [],
                },
                yAxis: [
                    {title: {text: null}},
                    {title: {text: null}},
                    {title: {text: null}}
                ],
                legend: {enabled: false},
                credits:{enabled:false},
                plotOptions: {column: {minPointLength: 3}},
            };

            $scope.validations = validationModels;

            //TODO: SORED IN ASSOCIATION
            $scope.validationSumObj = {};

            //TODO: THIS IS DONE ON BACKEND
            //TODO: ASSOCIATION
            if ($scope.validations.length > 0){
                for (y in $scope.validations){
                    for (x in Object.keys($scope.validations[y].validation)){
                        if(!$scope.validationSumObj[Object.keys($scope.validations[y].validation)[x]]){$scope.validationSumObj[Object.keys($scope.validations[y].validation)[x]]=$scope.validations[y].validation[Object.keys($scope.validations[y].validation)[x]]}
                        else{$scope.validationSumObj[Object.keys($scope.validations[y].validation)[x]]+=$scope.validations[y].validation[Object.keys($scope.validations[y].validation)[x]]}
                    }
                }
                for (x in Object.keys($scope.validationSumObj)){
                    $scope.validationColumnRender.series[0].data.push($scope.validationSumObj[Object.keys($scope.validationSumObj)[x]]/$scope.validations.length);
                    $scope.validationColumnRender.xAxis.categories.push(Object.keys($scope.validationSumObj)[x]);
                }
            }

        });
    
        $mdSidenav('renderValidation').toggle().then(function(){
            $scope.renderGraph('circle');
        });

    };



    //MEMBER CARD TOGGLE | TODO RENAME
    //TODO: REDO REP MAPPING
    $rootScope.renderReputationToggle = function(item){
        $scope.closeAllNav();

        $scope.item = item;
        if (item.reputation){$scope.reputation = item.reputation;$scope.item.user = item}
        if (item.user){$scope.reputation = item.user.reputation}

        //DEPRECIATE
        if ($scope.item.project){
            $scope.reputationFilter = [{text:$scope.item.project.title}];
        }

        $scope.chart = {
            chart: {zoomType: 'x'},
            series: [{
                id: 'Reputation',
                type: 'column',
                name: 'Reputation',
                data: []
            }],
            title: {text: ''},
            xAxis: {
                crosshair: true,
                gridLineWidth: 0.5,
                gridLineColor: 'grey',
                title: {text: null},
                categories: [],
            },
            legend: {enabled: false},
            yAxis: {title: {text: null}},
            credits:{enabled:false},
        };

        //TODO: FIX CRASH!

        var sortable = [];
        for (var dimension in $scope.reputation) {sortable.push([dimension, $scope.reputation[dimension]])}
        sortable.sort(function(a, b) {return b[1] - a[1]});

        for (x in sortable){
            if (x < 100){
                $scope.chart.xAxis.categories.push(sortable[x][0]);
                $scope.chart.series[0].data.push(sortable[x][1]);
            }
        }
        $mdSidenav('renderReputation').toggle();
    };

    //TODO: RENDER PROJECT TOGGLE
    //$rootScope.reply = function(){};

    $rootScope.selectSort = function(type, detail, direction){
        $mdSidenav('sort').toggle();
    };

    $rootScope.sortToggle = function(item){
        $scope.item = item;
        $scope.closeAllNav();
        $mdSidenav('sort').toggle();
    };



    $rootScope.statsToggle = function(item){

        $scope.item = item;

        $scope.closeAllNav();

        $scope.chart = {
            chart: {
                zoomType: 'x',
            },
            series: [],
            title: {text: ''},
            xAxis: {
                type: 'datetime',
                currentMin: 0,
                currentMax: 20,
                title: null,
                crosshair: true,
                gridLineWidth: 0.5,
                gridLineColor: 'grey'
            },
            yAxis: [{
                title: {text: null},
            }],
            credits:{enabled:false},
            plotOptions: {spline: {marker: {enabled: false}}, sma: {marker: {enabled: false}}}
        };

        $scope.chart.series = [];

        //TODO: MODEL BASED STATS
        if ($scope.item.model == 'CONTENT'){
            $scope.chart.series.push({
                id: 'attention',
                type: 'spline',
                name: 'Attention',
                data: []
            });
            $scope.chart.series.push({
                id: 'reaction',
                type: 'spline',
                name: 'Reaction',
                data: []
            });
            $scope.chart.series.push({
                type: 'sma',
                id: 'sma1',
                linkedTo: 'attention',
                params: {period: 24},
                showInLegend: true,
            });   
        }

        if ($scope.item.model == 'ITEM'){
            $scope.chart.series.push({
                id: 'attention',
                type: 'spline',
                name: 'Attention',
                data: []
            });
            $scope.chart.series.push({
                id: 'reaction',
                type: 'spline',
                name: 'Reaction',
                data: []
            });
            $scope.chart.series.push({
                type: 'sma',
                id: 'sma1',
                linkedTo: 'attention',
                params: {period: 24},
                showInLegend: true,
            });   
        }

        if ($scope.item.model == 'TASK'){
            $scope.chart.series.push({
                id: 'attention',
                type: 'spline',
                name: 'Attention',
                data: []
            });
            $scope.chart.series.push({
                id: 'reaction',
                type: 'spline',
                name: 'Reaction',
                data: []
            });
            $scope.chart.series.push({
                type: 'sma',
                id: 'sma1',
                linkedTo: 'attention',
                params: {period: 24},
                showInLegend: true,
            });   
        }

        if ($scope.item.model == 'TIME'){
            $scope.chart.series.push({
                id: 'attention',
                type: 'spline',
                name: 'Attention',
                data: []
            });
            $scope.chart.series.push({
                id: 'reaction',
                type: 'spline',
                name: 'Reaction',
                data: []
            });
            $scope.chart.series.push({
                type: 'sma',
                id: 'sma1',
                linkedTo: 'attention',
                params: {period: 24},
                showInLegend: true,
            });   
        }

        if ($scope.item.model == 'TRANSACTION'){
            $scope.chart.series.push({
                id: 'attention',
                type: 'spline',
                name: 'Attention',
                data: []
            });
            $scope.chart.series.push({
                id: 'reaction',
                type: 'spline',
                name: 'Reaction',
                data: []
            });
            $scope.chart.series.push({
                type: 'sma',
                id: 'sma1',
                linkedTo: 'attention',
                params: {period: 24},
                showInLegend: true,
            });   
        }

        if ($scope.item.model == 'PROJECT'){
            $scope.chart.series.push({
                id: 'content',
                type: 'spline',
                name: 'Content',
                data: []
            });
            $scope.chart.series.push({
                id: 'item',
                type: 'spline',
                name: 'Items',
                data: []
            });
            $scope.chart.series.push({
                id: 'action',
                type: 'spline',
                name: 'Actions',
                data: []
            });
            $scope.chart.series.push({
                id: 'motion',
                type: 'spline',
                name: 'Motions',
                data: []
            });
            $scope.chart.series.push({
                id: 'member',
                type: 'spline',
                name: 'Members',
                data: []
            });
            $scope.chart.series.push({
                id: 'task',
                type: 'spline',
                name: 'Tasks',
                data: []
            });
            $scope.chart.series.push({
                id: 'time',
                type: 'spline',
                name: 'Time',
                data: []
            });
            $scope.chart.series.push({
                id: 'transaction',
                type: 'spline',
                name: 'Transactions',
                data: []
            });
            $scope.chart.series.push({
                id: 'validation',
                type: 'spline',
                name: 'Validations',
                data: []
            });
        }

        for(var i=0;i<100;i++){
            var date = new Date();
            date.setTime(date.getTime() - (60*60*1000*(1000-i)));
            if (i == 0){
                $scope.chart.series[0].data.push([date.getTime(),Math.floor(150*Math.random())])
                $scope.chart.series[1].data.push([date.getTime(),Math.floor(20*Math.random())])
            }
            else{
                var random = 1.21*Math.random();
                var random1 = Math.random();
                if (random > random1){
                    $scope.chart.series[0].data.push([date.getTime(),$scope.chart.series[0].data[i-1][1]+3*Math.random()])
                    $scope.chart.series[1].data.push([date.getTime(),20*Math.random()])
                }
                else{
                    $scope.chart.series[0].data.push([date.getTime(),$scope.chart.series[0].data[i-1][1]-3*Math.random()])
                    $scope.chart.series[1].data.push([date.getTime(),20*Math.random()])
                }
            }
        }

        $mdSidenav('stats').toggle();

    };

    $rootScope.subNavToggle = function(item){
        $scope.item = item;
        //$scope.closeAllNav();
        $mdSidenav('subNav').toggle();
    };

    $rootScope.taskToggle = function(){
        $scope.closeAllNav();
        if($rootScope.currentUser){
            $scope.newTask = {};

            //CONTEXT TO AN ASSOCIATION IS A TAG
            //UX KEEP CONTEXT THE SAME UNLESS CHECKED
            $scope.newTask.associatedModels = $rootScope.associatedModels;

            $scope.newTask.validationModels = [{
                validation:{general:100},
                associatedModels:[]
            }];

            //WATCHER .. TAGS .. ASSOCIATED MODEL.. BUILD validationModels

            $mdSidenav('task').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.timeToggle = function(){
        $scope.closeAllNav();
        if($rootScope.currentUser){

            if (!$scope.newTime.recordingTime){
                $scope.newTime = {};
                $scope.newTime.startTime = new Date();
                $scope.newTime.startTime.setMilliseconds(0);
                $scope.newTime.endTime = new Date();
                $scope.newTime.endTime.setHours($scope.newTime.endTime.getHours() + 1);
                $scope.newTime.endTime.setMilliseconds(0);
                $scope.newTime.amount = 3600;
                $scope.newTime.type = 'LIVE';
                $scope.newTime.associatedModels = $rootScope.associatedModels;
                $scope.recordingTime = false;
                $scope.streaming = false;
            }

            $scope.selectTypeTime = function(type){$scope.newTime.type = type};
            $scope.startStreaming = function() {$scope.streaming = true;};
            $scope.cancelStreaming = function() {$scope.streaming = false;};

            $scope.renderStream = function(stream){
                var html = '<iframe width="510" height="265" src="'+stream+'" frameborder="0" allowfullscreen></iframe>'
                return $sce.trustAsHtml(html);
            };

            $scope.startTime = function() {
                if ($scope.streaming){
                    $scope.newContent = {
                        type:'video',
                        title: $scope.task.title,
                        tags: $scope.task.title + ',stream,work,' + $scope.task.project.title,
                        content: '<iframe width="510" height="265" src="'+$scope.streamUrl+'" frameborder="0" allowfullscreen></iframe>', //BUILD FOR EMBED
                        user: $rootScope.currentUser.id,
                    };
                    ContentModel.create($scope.newContent).then(function(contentModel){
                        console.log('create', contentModel)
                        $scope.streamingId = contentModel.id;
                    });
                }
                if($scope.recordingTime === true) return false;
                $scope.recordingTime = true;

                //TODO: CREATE TIME HERE
                $scope.startDateTime = new Date();

                //better
                clearInterval($scope.interval);
                //better
                $interval(function(){$scope.updateCount(1, 'task')},1000);

            };

            //HMM VS CREATE TIME
            $scope.submit = function() {
                if($scope.recordingTime === false) return false;
                $scope.recordingTime = false; $scope.streaming = false;
                var timeModel = {
                    amount: $rootScope.taskTime,
                    content: $scope.timeContent,
                    identifier: $scope.timeIdentifier,
                    user: $rootScope.currentUser.id,
                    stream: $scope.streamingId,
                    type:'LIVE',
                };
                if ($scope.timeTags){
                    timeModel.tags = $scope.timeTags.map(function(obj){
                        return obj.text
                    }).join(",");
                }
                TimeModel.create(timeModel).then(function(model){
                    $scope.time.unshift(model);
                    $scope.timeContent = '';
                    if ($scope.streamingId){
                        var update = {};
                        update.id = $scope.streamingId;
                        update.time = model.id;
                        update.parent = model.id;
                        update.parentModel = 'time';
                        ContentModel.update(update).then(function(contentModel){
                            consooe.log(contentModel)
                        });
                    }
                }); 
                $rootScope.taskTime=0;
                clearInterval($scope.interval);
            };


            //TODO: UNIFY WITH TIMER
            $scope.updateCount = function(amount, context) {


                //TODO: CREATED AT
                var currentTime = new Date();
                $rootScope.taskTime = parseInt((currentTime.getTime() - $scope.startDateTime.getTime()) / 1000);

                //CONTEXT TIME HERE __ IN
                //context[string]:1
                if (!$rootScope.timeQ[context]){
                    $rootScope.timeQ[context] = [];
                }

                $rootScope.timeQ[context].push({
                    context:{
                        string:'TIME!',
                        type:'LIVE',
                    },
                    amount:1
                });

                $scope.$apply();

            };


            $mdSidenav('time').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };


    //TODO: IMPROVE
    $rootScope.timerToggle = function(){

        $mdSidenav('subNav').close();
        $mdSidenav('action').close();
        $mdSidenav('content').close();
        $mdSidenav('information').close();
        $mdSidenav('item').close();
        $mdSidenav('login').close();
        $mdSidenav('order').close();
        $mdSidenav('project').close();
        $mdSidenav('render').close();
        $mdSidenav('tokens').close();
        $mdSidenav('task').close();
        $mdSidenav('time').close();
        $mdSidenav('transaction').close();
        $mdSidenav('validation').close();

        if($rootScope.currentUser){$mdSidenav('timer').toggle();}
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.tokensToggle = function(item){
        $scope.closeAllNav();
        $scope.tokens = []
        if (item.tokens){$scope.tokens = item.tokens;}
        $mdSidenav('tokens').toggle();
    };

    $rootScope.transactionToggle = function(item, asset){

        $scope.closeAllNav();

        $scope.addAssetToTransaction = function(model){
            if($scope.newTransaction.identifierSet){$scope.newTransaction.identifierSet.push({text:model})}
            else{
                $scope.newTransaction.identifierSet = [];
                $scope.newTransaction.identifierSet.push({text:model})
            }
        };
       
        if($rootScope.currentUser){

            if (item){
                if(item.model=='PROJECT'){$scope.newTransaction.to = [{text:item.title, address:item.id, id:item.id}];}
                else{$scope.newTransaction.to = [{text:item.username, address:item.id, id:item.id}];}
            }

            if (!$scope.newTransaction){$scope.newTransaction = {}}

            if (asset){
                $scope.newTransaction.identifierSet = [];
                $scope.newTransaction.identifierSet.push({text:asset});
                $scope.newTransaction.amountSet = {};
                $scope.newTransaction.amountSet[asset] = 1;
            }

            $scope.sortedBalances = [];

            for (var key in $rootScope.balance) {
                if(!isNaN($rootScope.balance[key])){$scope.sortedBalances.push([key, $rootScope.balance[key]]);}
            }

            $scope.sortedBalances.sort(function(a, b) {
                return b[1] - a[1];
            });

            $scope.newTransaction.validationModels = [{
                validation:{},
                associatedModels:[]
            }];

            console.log(item, $scope.newTransaction);

            $scope.$watch('newTransaction.context', function(newValue, oldValue){
                if (newValue !== oldValue) {
                    for (x in $scope.newTransaction.context){
                        $scope.newTransaction.validationModels[0].validation[$scope.newTransaction.context[x].text] = 100;
                    }
                }
            }, true);

            $mdSidenav('transaction').toggle();

        }

        else{$mdSidenav('login').toggle();}

    };

    $rootScope.validationToggle = function(newValidation){

        $scope.closeAllNav();
        if($rootScope.currentUser){
            $scope.newValidation = {
                validation:{},
                user: $rootScope.currentUser.id
            };
            if(newValidation){

                //GET ASSOCIATED MDOELS
                //TODO REDETERMINED CONTEXT.. TAGS.. ETC --> PERSPECTIVE
                //UX SHOULD DO SET in validation sidebar
                $scope.newValidation.associatedModels = [
                    {
                        text:newValidation.id,
                        id:newValidation.id,
                        type:newValidation.model
                    },
                    {
                        text:'PLACEHOLDER',
                        id:1,
                        type:'PLACEHOLDER'
                    }
                ];

                //TODO
                $scope.context = [{text:'general'}];

            }
            else{
                $scope.context = [{text:'general'}];
            }


            //MAP FROM []-->{}
            $scope.$watch('context', function(){
                for (x in $scope.context){
                    $scope.newValidation.validation[$scope.context[x].text] = 0;
                }
            }, true);

            //BRIDGE BTW TASK CONTEXT (SELF DEFINED IN TIME TO PROJ CONTEXT VALIDATED THROUGH TASK) IE
            //IF NOT CONTEXT VALIDATED IN TASK <-> PROJ IT IS 0. 

            $mdSidenav('validation').toggle();
        }
        else{$mdSidenav('login').toggle();}

    };

    //LOCAL FUNCTIONS
    $scope.closeAllNav = function(){
        $mdSidenav('action').close();
        $mdSidenav('cardDetail').close();
        $mdSidenav('content').close();
        $mdSidenav('cre8').close();
        $mdSidenav('information').close();
        $mdSidenav('item').close();
        $mdSidenav('login').close();
        $mdSidenav('memberQR').close();
        $mdSidenav('nav').close();
        $mdSidenav('order').close();
        $mdSidenav('project').close();
        $mdSidenav('render').close();
        $mdSidenav('renderReputation').close();
        $mdSidenav('renderValidation').close();
        $mdSidenav('stats').close();
        $mdSidenav('subNav').close();
        $mdSidenav('task').close();
        $mdSidenav('time').close();
        $mdSidenav('timer').close();
        $mdSidenav('tokens').close();
        $mdSidenav('transaction').close();
        $mdSidenav('validation').close();
    };

    $scope.createAction = function(item){
        if ($rootScope.currentUser){
            ActionModel.create($scope.newAction).then(function(model) {

                $scope.confirm = $scope.newAction;
                $scope.confirm.model = 'ACTION';
                $scope.newAction = {};
                $mdSidenav('action').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 25000);
                
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createConnection = function(item) {
        if ($rootScope.currentUser){
            ConnectionModel.create($scope.newConnection).then(function(model) {
                $scope.confirm = $scope.newConnection;
                $scope.confirm.model = 'CONNECTION';
                $scope.newConnection = {};
                $mdSidenav('connection').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 25000);
            });
        }
        else{$mdSidenav('login').toggle()}
    }

    //TODO: ASSOCIATED MODELS
    $scope.createContent = function(item) {
        if ($rootScope.currentUser){

            //RENDER | nested Reply
            if(item){
                $scope.newContent.associatedModels.push({type:'CONTENT', id:content.id});
            }

            $scope.newContent.type = $scope.selectedType;
            $scope.newContent.user = $rootScope.currentUser.id;
            
            if ($scope.newContent.tags){
                $scope.newContent.tags = $scope.newContent.tags.map(function(obj){
                    return obj.text;
                }).join(",");
            }

            //CONTENT, TASK, TIME, TRANSACTION, ORDER, PROJECT
            console.log($scope.newContent);

            ContentModel.create($scope.newContent).then(function(model) {
                $scope.confirm = $scope.newContent;
                $scope.confirm.model = 'CONTENT';
                $scope.newContent = {};
                $mdSidenav('content').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 25000);
            });


        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createItem = function(content) {
        if ($rootScope.currentUser){
            $scope.newItem.user = $rootScope.currentUser.id;
            if ($scope.newItem.tags){
                $scope.newItem.tags = $scope.newItem.tags.map(function(obj){
                    return obj.text;
                }).join(",");
            }
            //PATCH!!!
            if ($scope.newItem.associatedModels){
                for (x in $scope.newItem.associatedModels){
                    $scope.newItem[$scope.newItem.associatedModels[x].type.toLowerCase()] = $scope.newItem.associatedModels[x].address
                }
            }
            ItemModel.create($scope.newItem).then(function(model) {
                $scope.confirm = $scope.newItem;
                $scope.confirm.model = 'ITEM';
                $scope.newItem = {};
                $mdSidenav('item').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 25000);
            });
        }
        else{$mdSidenav('login').toggle()}
    };
    
    $scope.createOrder = function(content) {
        if ($rootScope.currentUser){

            $scope.newOrder.user = $rootScope.currentUser.id;
            $scope.newOrder.type = $scope.selectedOrderType;

            //ill do both
            //PATCH
            $scope.newOrder.identiferSet = [];
            $scope.newOrder.identiferSet1 = [];
            $scope.newOrder.amountSet = [];
            $scope.newOrder.amountSet1 = [];

            for (x in Object.keys($scope.newOrder.setAlpha)){
                $scope.newOrder.identiferSet.push(Object.keys($scope.newOrder.setAlpha)[x]);
                $scope.newOrder.amountSet.push($scope.newOrder.setAlpha[Object.keys($scope.newOrder.setAlpha)[x]]);
            }
            for (x in Object.keys($scope.newOrder.setBeta)){
                $scope.newOrder.identiferSet1.push(Object.keys($scope.newOrder.setBeta)[x]);
                $scope.newOrder.amountSet1.push($scope.newOrder.setBeta[Object.keys($scope.newOrder.setBeta)[x]]);
            }
            
            console.log($scope.newOrder);

            OrderModel.create($scope.newOrder).then(function(model) {
                $scope.confirm = $scope.newOrder;
                $scope.confirm.model = 'ORDER';
                $mdSidenav('order').close();
                $scope.newOrder = {};
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 25000);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: MOVE TO ASSOCIATED MODELS
    $scope.createProject = function(content) {

        if ($rootScope.currentUser){

            if ($scope.newProject.tags){

                $scope.newProject.tags = $scope.newProject.tags.map(function(obj){
                    return obj.text;
                }).join(",");

            }

            //NOT ON FRONTEND
            $scope.newProject.user = $rootScope.currentUser.id;

            //PATCH!!!
            if ($scope.newProject.associatedModels){
                if ($scope.newProject.associatedModels[0]){
                    if ($scope.newProject.associatedModels[0].type == 'PROJECT'){
                        $scope.newProject.parent = $scope.newProject.associatedModels[0].address;
                    }
                }
            }

            console.log($scope.newProject);

            ProjectModel.create($scope.newProject).then(function(model) {
                $scope.confirm = $scope.newProject;
                $scope.confirm.model = 'PROJECT';
                $scope.newProject = {};
                $mdSidenav('project').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 25000);
            });

        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: MORE ON RENDER
    $rootScope.createReaction = function(item, type){
        if($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:item.model, id:item.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            $scope.item.reactions[type]++;
            //UPDATE LOCAL SCOPE..
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createTask = function(content) {
        if ($rootScope.currentUser){
            $scope.newTask.user = $rootScope.currentUser.id;

            //DEPRECIATE
            if ($scope.newTask.tags){
                $scope.newTask.tags = $scope.newTask.tags.map(function(obj){
                    return obj.text;
                }).join(",");
            }


            //PATCH!!!
            if ($scope.newTask.associatedModels){
                for (x in $scope.newTask.associatedModels){
                    $scope.newTask[$scope.newTask.associatedModels[x].type.toLowerCase()] = $scope.newTask.associatedModels[x].address;
                }
            }


            console.log($scope.newTask);
            TaskModel.create($scope.newTask).then(function(model) {
                $scope.confirm = $scope.newTask;
                $scope.confirm.model = 'TASK';
                $scope.newTask = {};
                $mdSidenav('task').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 25000);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createTime = function(){
        if($rootScope.currentUser){
            $scope.newTime.user = $rootScope.currentUser.id;
            $scope.newTime.createdAt = $scope.newTime.startTime;
            if ($scope.newTime.tags){
                $scope.newTime.tags = $scope.newTime.tags.map(function(obj){
                    return obj.text;
                }).join(",");
            }
            //PATCH!!!
            if ($scope.newTime.associatedModels){


                //for (x in $scope.newTime.associatedModels){
                //    $scope.newTime[$scope.newTime.associatedModels[x].type.toLowerCase()] = $scope.newTime.associatedModels[x].address;
                //}


            }
            console.log($scope.newTime);
            TimeModel.create($scope.newTime).then(function(model){
                $scope.confirm = $scope.newTime;
                $scope.confirm.model = 'TIME';
                $scope.newTime = {};
                $mdSidenav('time').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 25000);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createTransaction = function(){
        if ($rootScope.currentUser){

            $scope.newTransaction.user = $rootScope.currentUser.id
            if ($scope.newTransaction.context){
                console.log($scope.newTransaction.context)
                $scope.newTransaction.context = $scope.newTransaction.context.map(function(obj){
                    return obj.text
                }).join(",");
            }

            //MULTI TRANSACTION BUG... 
            //COPY MODEL.. 
            var newTransaction = $scope.newTransaction;
            newTransaction.from = newTransaction.from[0].id;
            newTransaction.to = newTransaction.to[0].id;
            
            console.log($scope.newTransaction);

            //SELF VALIDATION HERE! --> TAGS
            //VECTOR TAGS  ((((((TAG COMPUTATION FUNCTION TO DO FOR ALL THE SIDEBARS -- RENAME TO CONTEXT))))))

            TransactionModel.create(newTransaction).then(function(model){
                
                $scope.confirm = newTransaction;
                $scope.confirm.model = 'TRANSACTION';

                $scope.newTransaction.amountSet = {};
                $scope.newTransaction.tags = '';
                $scope.newTransaction.content = '';
                $mdSidenav('transaction').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 25000);
                
            });

        }
        else{$mdSidenav('transaction').close();$mdSidenav('login').toggle()}
    };

    //TODO.. creates as rootscope.. 
    //FOR FRONEND REFACTOR.. EXPOSE GLOBAL CREATE FUNCTIONS..
        //APP SPECIFIC INPUT AS WELL

    $rootScope.createValidation = function(item){
        if ($rootScope.currentUser){
            if (item){$scope.newValidation = item;}           
            if ($scope.newValidation.associatedModels){
                
                console.log($scope.newValidation);

                $rootScope.stateIsLoading = true;
                ValidationModel.create($scope.newValidation).then(function(model) {
                    $rootScope.stateIsLoading = false;

                    //TODO UPDATE CONFIRM POPUP
                    $scope.confirm = $scope.newValidation;
                    $scope.confirm.model = 'VALIDATION';
                    $scope.newValidation = {};
                    $mdSidenav('validation').close();
                    setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                    setTimeout(function () {$mdSidenav('confirm').close()}, 25000);

                });
            }
        }
        else{$mdSidenav('login').toggle()}
    };


    //VIEWMODEL.. 
    if (!$rootScope.timeModel){
        $rootScope.timeModel = {};
        $rootScope.timeModel.amount = 0;
    }
    //HEARTBEAT FXN FROM FRONTEND.. --> CACL ON BACKEND //BLOCK // PEER
    //TODO
    $rootScope.timeQ = {attention:[], mining:[]};
    //VIEW TIMER.. 
    $scope.timeChart = {
        chart: {zoomType: 'x'},
        series: [{
            id: 'time',
            type: 'column',
            name: 'time',
            data: [],
            animation: false
        }],
        title: {text: ''},
        xAxis: {
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {text: null},
            categories: [],
        },
        legend: {enabled: false},
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };

    //idle fxn

    //TODO: LOCATION
    $scope.timerFunction = function(time, context, model){

        function amountInArray(array, value) {
            return array.reduce(function(n, x){
                if (x.context.string == value){n+=parseFloat(x.amount)}
                return n;
            },0);
        };

        //timeQ['general']
        //timeQ['task']

        //break into lists of context.. overtime.. and current. .. need graph
        //allow for meta data in auto time .... 
        //show view time controller. 
        //bar of each context.

        //$state.params[Object.keys($state.params)[0]]

        //INTENTIONAL TIME

        //HUMAN AND MACHINE ARE ONE .. HAVE TO BE ON TO RUN? 
            //SHOULDNT BE TURNED OFF AND SHOULD RUN IN CONCERT

        var string = '';
        string += $state.current.name.toUpperCase().replace('.','+');
        if ($state.params[Object.keys($state.params)[0]]){
            string += '+'+$state.params[Object.keys($state.params)[0]];
        }
        string += '+'+model.toUpperCase()+'+ATTENTION';

        //STORE MOST DIMENSIONAL WORD
            //LONGEST WORD.. +..+..+
                //THEY ENCODE THE BALANCE FOR LOWER D

        var location = '';
        if ($rootScope.currentUser.location){location=$rootScope.currentUser.location;}

    

        //$rootScope.timeQ[context].map(function(obj){
        //    obj.context.string 
        //});

        //$rootScope.sumContext = $scope.sumObj(rootScope.timeQ[context]);

        //if ($rootScope.sumContext){
        //}

        //THIS IS SUPER DRAFT 
        //THIS IS SUPER DRAFT 
        //THIS IS SUPER DRAFT 
        //make db call if more than 10 sec or change 

        $rootScope.timeQ[context].push({
            context:{
                state:$state.current.name, 
                params:$state.params,
                string:string,
            },
            amount:1,
            location:location,
        });

        var set = $rootScope.timeQ[context].filter(function(obj){
            return obj.context.string == string;
        });

        var associatedModels = null
        if (string.split('+').length > 1){
            associatedModels = [{type:string.split('+')[0], id:string.split('+')[1]}]
        }
        var attentionModel = {
            app: model,
            amount:1, 
            string: string,
            data: {verion:'PRE ALPHA', ip:{}, device:{title:navigator.userAgent, id:1, hardwareHash:''}},
            associatedModels: associatedModels,//$rootScope.associatedModels,
            creator: $rootScope.currentUser,
        };

        if (set.length >= 10){
            attentionModel.amount = set.length;
            $rootScope.timeQ[context] = [];
            AttentionModel.create(attentionModel);
        }

        if (context == 'mining'){
            if ($rootScope.timeQ[context].length >= 10){
                AttentionModel.create(attentionModel);
            }
        }
        if (context == 'attention'){
            $rootScope.timeModel.amount = $rootScope.timeModel.amount + time;
        }




        var index = $scope.timeChart.xAxis.categories.indexOf(string);
        if (index == -1){
            $scope.timeChart.xAxis.categories.push(string);
            $scope.timeChart.series[0].data.push(1);
        }
        else{
            $scope.timeChart.series[0].data[index] = $rootScope.timeModel.amount;
        }



    };

    //LOL
    //IF LOGGED IN AND PERMISIONS
    if($rootScope.currentUser){
        //TODO:ROOTSCOPE ISNT LOADED
        console.log($rootScope.currentUser)
        //if ($rootScope.currentUser.apps){
            //if ($rootScope.currentUser.apps.cre8.recordAttention){
                $interval(function(){$scope.timerFunction(1, 'attention', 'HUMAN')}, 1000);
                $interval(function(){$scope.timerFunction(1, 'mining', 'MACHINE')}, 1000);
            //}
        //}
    }

    //TODO
    $scope.createView = function(){
        if ($rootScope.currentUser){
            //TODO: BACKEND TIMER.. ? 
            //TODO: BETTER SECURITY..
            //AKA CONNECT TO CHAIN WHEN START AND WHEN END NOT FRONTEND TIMER 
            //-- MAKE TWO CALLS WITH TIME STAMP. 
            $scope.timer = {};
            $rootScope.timeModel = {
                type: 'VIEW',
                user: $rootScope.currentUser.id,
                associatedModels: [{type: 'URL', id:window.location.href}],
                amount: 0
            };
            
            if ($rootScope.timeModel.amount != 0){
                clearInterval($scope.timer);
                $rootScope.timeModel.amount = $rootScope.timeModel.amount/1000
                console.log($rootScope.timeModel.amount)
                //TimeModel.create($rootScope.timeModel).then(function(){
                //    $rootScope.timeModel = {};
                //    console.log('SURE')
                //});
            }
        }
    };

    //TODO: TEST
    $scope.invertMarket = function() {
        var temp = $scope.newOrder.identiferSetAlpha;
        $scope.newOrder.identiferSetAlpha = $scope.newOrder.identiferSetBeta;
        $scope.newOrder.identiferSetBeta = temp;
        $scope.inverted = !$scope.inverted;
    };

    //TODO! IMPORTANT
    $scope.loadAddress = function(query){
        var deferred = $q.defer();
        //TODO: PROJECT AND MEMBER .. 
        //TOOD: SEARCH QUERY .. 
        UserModel.getSome({search:query, limit:1000, skip:0, sort:'createdAt DESC'}).then(function(userModels){
            console.log(userModels);
            userModels.map(function(obj){
                obj.text = obj.username;
                return obj;
            });
            deferred.resolve(userModels);
        });
        return deferred.promise;
    };

    //TODO! IMPORTANT
    $scope.loadAsset = function(query){
        var deferred = $q.defer();
        //SEND ITEMS? --> SEND CONTENT OWNERSHIP? DIFFERENCE.. HMM
        //CONTENT HAS RIGHTS TO VIEW TOKEN
        //PROTOCOL SPECIFIC IDENTIFER SEARCH
        //GET MY ITEMS TO SEND

        //SHOULD BE TOP ASSETS THAT YOU HAVE
        //return [
        //    {text:'CRE8'},
        //    {text:'BTC'},
        //    {text:'BCH'},
        //    {text:'ETH'},
        //    {text:'LTC'},
        //    {text:'USD'},
        //    {text:'STEEM'},
        //    {text:'NOVO'},
        //    {text:'TIME'},
        //    {text:'TIME+ATTENTION'},
        //    {text:'CONTENT'},
        //    {text:'CONSUMPTION'},
        //    {text:'REST'},
        //    {text:'MARKETING'},
        //    {text:'SHELTER'},
        //    {text:'UNIVERSAL'},
        //];

        $scope.balance = $rootScope.balance;
        console.log($rootScope.balance, $scope.balance);

        ItemModel.getSome({user:$rootScope.currentUser.id, limit:10, skip:0, sort:'createdAt DESC'}).then(function(itemModels){
            console.log(itemModels)
            
            //TODO: ALLOW FOR TITLE.. ETC.. USE TOKEN DATA MODEL HERE.. 
            itemModels.map(function(obj){
                obj.type='ITEM';
                //obj.text=obj.title+' '+obj.id;
                obj.text=obj.id;
                return obj;
            });

            for (x in Object.keys($rootScope.balance)){
                itemModels.push({text:Object.keys($rootScope.balance)[x]});
            }

            //MAP BALANCE --> itemModels.push()

            deferred.resolve(itemModels);
        });
        return deferred.promise;


        //var itemModels = []
        //for (x in Object.keys($rootScope.balance)){
        //    itemModels.push({text:Object.keys($rootScope.balance)[x]});
        //}
        //return itemModels;


    };

    //TODO! IMPORTANT
    $scope.loadAssociationsOld = function(query){
        var deferred = $q.defer();
        //SearchModel.search(query).then(function(searchModels){

        //MM | YIKES
        //$scope.newValidation.associatedModels = $scope.newValidation.associatedModels.concat({type:$scope.newValidation.associatedModel[0].type, address:$scope.newValidation.associatedModel[0].address});

        //BASED ON TYPE AND MODELS.. UHG
        /*UserModel.getSome('search', query, 10, 0, 'createdAt DESC').then(function(userSearchModels){
            userSearchModels.map(function(obj){
                obj.text = obj.username
                return obj;
            }); */

            console.log(query)
            ProjectModel.getSome({search:query, limit:10, skip:0, sort:'createdAt DESC'}).then(function(projectSearchModels){
                projectSearchModels.map(function(obj){
                    obj.type='PROJECT';
                    obj.text = 'PROJECT | '+obj.title;
                    return obj;
                });
                TaskModel.getSome({search:query, limit:10, skip:0, sort:'createdAt DESC'}).then(function(taskSearchModels){
                    taskSearchModels.map(function(obj){
                        obj.type='TASK';
                        obj.text = obj.title;
                        return obj;
                    });
                    //searchModels = [].concat.apply([], [userSearchModels, projectSearchModels, taskSearchModels]);
                    searchModels = [].concat.apply([], [projectSearchModels, taskSearchModels])
                    console.log(searchModels);
                    deferred.resolve(searchModels);
                });
            });
           //deferred.resolve(userSearchModels);
        //});
        return deferred.promise;
    };

    $scope.loadAssociationsTask = function(query){
        var deferred = $q.defer();
        console.log(query);
        TaskModel.getSome({search:query, limit:10, skip:0, sort:'createdAt DESC'}).then(function(taskSearchModels){
            taskSearchModels = taskSearchModels.map(function(obj){
                obj.type='TASK';
                obj.address=obj.id;
                obj.text=obj.title;
                return obj;
            });
            deferred.resolve(taskSearchModels);
        });
        return deferred.promise;
    };

    $scope.loadItems = function(query){
        var deferred = $q.defer();
        ItemModel.getSome({search:query, limit:10, skip:0, sort:'createdAt DESC'}).then(function(itemModels){
            itemModels = itemModels.map(function(obj){
                obj.type='ITEM';
                obj.address=obj.id;
                obj.text=obj.title;
                return obj;
            });
            deferred.resolve(itemModels);
        });
        return deferred.promise;
    };

    //TODO! IMPORTANT
    $scope.loadTags = function(query){
        console.log(query);
        var deferred = $q.defer();
        //SearchModel.search(query).then(function(searchModels){
        //UserModel.getSome({search:query, limit:10, skip:0, sort:'createdAt DESC'}).then(function(searchModels){
        //    console.log(searchModels);
            searchModels = [{text:'TAG'}, {text:'TAG2'}]
            deferred.resolve(searchModels);
        //});
        return deferred.promise;
    };

    $scope.login = function(){
        var data = JSON.stringify($scope.newLogin);
        $http({method:'POST', url:'/auth/local', data:data}).then(function(newModel){
            $rootScope.currentUser = newModel.data;
            $window.location.reload();
            $location.path('/');
        });
    };

    //IMPROVE
    $scope.loginToggle = function(){
        //$scope.closeAllNav();
        $mdSidenav('nav').close();
        $mdSidenav('subNav').close();
        $mdSidenav('action').close();
        $mdSidenav('content').close();
        $mdSidenav('item').close();
        $mdSidenav('order').close();
        $mdSidenav('project').close();
        $mdSidenav('render').close();
        $mdSidenav('tokens').close();
        $mdSidenav('task').close();
        $mdSidenav('time').close();
        $mdSidenav('transaction').close();
        $mdSidenav('validation').close();
        $mdSidenav('login').toggle();
    };

    //TODO
    $scope.marketTraverse = function(){
        $scope.outputMatix = [];
        if ($scope.outputVector.length > 0){
            //MarketModel.traverse($scope.inputVector, $scope.outputVector).then(function(){
            for(x in $scope.outputVector){
                $scope.outputMatix.push({
                    identifer: $scope.outputVector[x].text,
                    value: 10*Math.random(),
                });
            }
            //});
        }
    };

    //TODO: EXPAND
    $scope.pop = function(title, body){
        toaster.pop({
            type:'success',
            title: title,
            body: body,
            onShowCallback: function (toast) { 
                var audio = new Audio('audio/ping.mp3');
                audio.play()
                .then(function(audio){console.log(audio)})
                .catch(function(err){console.log(err)})
            }
        });
    };

    //TODO
    $scope.reply = function(item){
        //var location = searchObject($scope.content, function (value) { return value != null && value != undefined && value.id == content.id; });
        //location[0].value.showReply = !location[0].value.showReply;
        //updateObject($scope.content, location[0].value, location[0].path);
        $scope.item.showReply = !$scope.item.showReply;
    };

    //IMPROVE
    $scope.sideNavToggle = function(){
        //$scope.closeAllNav();
        $mdSidenav('subNav').close();
        $mdSidenav('action').close();
        $mdSidenav('cardDetail').close();
        $mdSidenav('content').close();
        $mdSidenav('cre8').close();
        $mdSidenav('information').close();
        $mdSidenav('item').close();
        $mdSidenav('login').close();
        $mdSidenav('memberQR').close();
        $mdSidenav('order').close();
        $mdSidenav('project').close();
        $mdSidenav('render').close();
        $mdSidenav('tokens').close();
        $mdSidenav('task').close();
        $mdSidenav('time').close();
        $mdSidenav('transaction').close();
        $mdSidenav('validation').close();
        $mdSidenav('nav').toggle();
    };

    $scope.selectOrderType = function(type){$scope.selectedOrderType = type;};
    $scope.selectedTab = 'ATTENTION';
    $scope.selectTab = function(model){
        $scope.selectedTab = model;
    };
    $scope.selectType = function(type){$scope.selectedType = type;};

}]);