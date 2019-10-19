angular.module( 'conexus.nav', [
])

.controller( 'NavCtrl', ['$http', '$interval', '$location', '$mdSidenav', '$q', '$rootScope', '$sailsSocket', '$sce', '$scope', '$state', '$timeout', '$window', 'ActionModel', 'AttentionModel', 'AppModel', 'ConnectionModel', 'ContentModel', 'cytoData', 'ItemModel', 'NotificationModel', 'OrderModel', 'ProjectModel', 'ReactionModel', 'SearchModel', 'TaskModel', 'TimeModel', 'toaster', 'TransactionModel', 'ValidationModel', 'UserModel', function NavController( $http, $interval, $location, $mdSidenav, $q, $rootScope, $sailsSocket, $sce, $scope, $state, $timeout, $window, ActionModel, AttentionModel, AppModel, ConnectionModel, ContentModel, cytoData, ItemModel, NotificationModel, OrderModel, ProjectModel, ReactionModel, SearchModel, TaskModel, TimeModel, toaster, TransactionModel, ValidationModel, UserModel ) {

    //TODO: IN APP.JS
    //STATE CHANGE LOGIC
    //ERR: ERR SPAM FROM HERE
    $rootScope.$on("$stateChangeStart", function() {
        $timeout(function () {$scope.closeAllNav();});
    });

    //TODO: ROOTSCOPE ITEM
    //FUNCTION IN CREATE TOGGLE MAIN NAV

    //INITALIZE LOCAL VARIABLES
    $scope.associationsAreExpanded = false;
    $scope.attentionChart = {};
    $scope.chart = {};
    $scope.directedGraphElements = {};
    $scope.inputVector = [];
    $scope.item = {};
    $scope.inverted = false;
    $scope.isInformation = false;
    $scope.map = {center: {latitude: 35.902023, longitude: -84.1507067 }, zoom: 9};
    $scope.newLogin = {};
    $scope.outputMatix = [];
    $scope.outputVector = [];
    $scope.reputationChart = {
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
    $scope.selectedOrderType = 'ONBOOKS';
    $scope.selectedTab = 'ATTENTION';
    $scope.selectedType = 'POST';
    $scope.tokenChart = {
        chart: {zoomType: 'x'},
        series: [{
            id: 'Attention',
            type: 'column',
            name: 'Attention',
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
    $scope.validationColumnRender = {};

    //TODO: REFACTOR
    if ($rootScope.currentUser){

        $scope.newAction = {};
        $scope.newContent = {};
        $scope.newItem = {};
        $scope.newOrder = {};
        $scope.newProject = {};
        $scope.newReaction = {};
        $scope.newTask = {};

        $rootScope.newTime = {};

        $scope.newTransaction = {};
        $scope.newValidation = {};
        $scope.newContent.associatedModels = [{text: $rootScope.currentUser.username, type:'PROFILE', id:$rootScope.currentUser.id}];

        //TODO: KINDA HACY
        $rootScope.$watch('currentUser', function(){
            $scope.newTransaction.from = [{text:$rootScope.currentUser.username, id:$rootScope.currentUser.id}];
        }, true);

        //TODO:BETTER
        NotificationModel.get({user:$rootScope.currentUser.id, isRead:false, limit:100, skip:0, sort:'createdAt DESC'}).then(function(notifications){
            $scope.notifications = notifications;
            $rootScope.notificationCount = $scope.notifications.length;
            for (x in $scope.notifications){
                $rootScope.pop($scope.notifications[x].title, $scope.notifications[x].content);
            }
        });

        $sailsSocket.subscribe('notification', function (envelope) {
            console.log(envelope)
            if (envelope.verb == 'create'){
                console.log('SOCKET NOTIRICATION', envelope)
                //TODO: HAS TO BE BETTER THAN SOCKET CHECK; SOCKET ROOMS? 
                if ($rootScope.currentUser.id == envelope.data.user){
                    $rootScope.notificationCount++;
                    $rootScope.pop(envelope.data.title, envelope.data.apps.user.username);
                    $rootScope.notificationCount++;
                }
            }
        });

    }

    $rootScope.actionToggle = function(item){
        $scope.closeAllNav();
        $scope.newAction = {};
        if($rootScope.currentUser){
            $scope.newAction.user = $rootScope.currentUser.id;
            if (item){
                $scope.newAction.type = 'USE';
                $scope.newAction.amount = 1
                $scope.newAction.associatedModels = [{text:item.title, id:item.id}];
            }
            $mdSidenav('action').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

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

     $rootScope.connectionToggle = function(item){
        $scope.closeAllNav();
        if($rootScope.currentUser){

            $scope.item = item;
            $scope.newConnection = {
                associatedModels:$rootScope.associatedModels,
                creator:$rootScope.currentUser.id,
                context:[{text:'self'}, {text:'general'}]
            };
            $mdSidenav('connection').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.contentToggle = function(item){
        $scope.closeAllNav();
        if($rootScope.currentUser){

            $scope.selectType = function(type){$scope.newContent.type = type;};
            $scope.createDetailToggleVar = true;
            $scope.newContent = {
                type:'POST',
                associatedModels:[{
                    type:'CONTENT',
                    text:'self',
                    id:'self',
                    context:[
                        {text:'self', score:100}
                    ],
                    connection:[{
                        id:null,
                        text:'Content Connection',
                        //2nd order connection 
                        parameters:{
                            title:'',
                            context:{},
                        }
                    }]
                },{

                    //LOOP AT HOW THIS IS CONVERTED AND PROCESSED ON ContentController vs RENDERING TOO
                    type:'MEMBER',
                    text:'MEMBER+'+$rootScope.currentUser.id,
                    id:$rootScope.currentUser.id,
                    connection:[{

                        id:null,
                        text:'Member Connection',
                        parameters1:{
                            associatedModels:[{
                                attributes:{
                                    label:{type:''},
                                },
                            }],
                            model:[{
                                context:{type:{}},
                            }],
                        },
                        parameters2:[{
                            attributes:{
                                label:{type:''},
                                context:{type:{}},
                            },
                        }],

                    }],

                    //populate from connection
                    parameters:{
                        context:{},
                        label:''
                    },

                    context:[
                        {text:'self', score:100}
                    ],

                }],
                user:$rootScope.currentUser.id,
            };

            //IMPLICIT IS REALATION TO ITEM
            //FACTOR TO HAVE SAME STRUCT
            if (item){
                //connection in item?
                $scope.item = item;
                $scope.createDetailToggleVar = false;
                $scope.newContent.associatedModels.push({
                    type:item.model, 
                    id:item.id, 
                    text:item.model+'+'+item.id, 
                    connection:[{
                        id:null,
                        text:item.model+' Connection',
                        parameters:[{
                            type:'model',
                            attributes:{
                                context:{type:{}},
                            },
                        },
                        {
                            type:'associatedModel',
                            attributes:{
                                label:{type:''},
                            },
                        }],
                    }],
                    //populate from connection
                    parameters:{
                        context:{},
                        label:''
                    },
                    context:[
                        {text:'self', score:100}
                    ],
                });
            }

            $scope.$watch('newContent.context', function(newValue, oldValue){
                if (newValue !== oldValue) {
                    console.log(newValue);
                    for (x in $scope.newContent.associatedModels){
                        $scope.newContent.associatedModels[x].context = newValue.map(function(obj){ obj.score = 100; return obj; });
                    }
                    console.log($scope.newContent.associatedModels);
                }
            }, true);

            console.log('CONTENT TOGGLE', $scope.newContent);

            $mdSidenav('content').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.cardDetailToggle = function(item){
        $scope.closeAllNav();
        $scope.item = item;
        $mdSidenav('cardDetail').toggle();
    };

    $rootScope.cre8Toggle = function(item){
        $scope.closeAllNav();
        $scope.item = item;$mdSidenav('cre8').toggle();
    };

    //TODO: EXPAND
    $rootScope.pop = function(title, body){
        toaster.pop({
            type:'success',
            title: title,
            body: body,
            onShowCallback: function (toast) { 
                var audio = new Audio('audio/ping.mp3');
                audio.play()
                .then(function(audio){console.log('POP', 'dingdong')})
                .catch(function(err){console.log('POP ERR:', err)})
            }
        });
    };


    $scope.createDetailToggle = function(){$scope.createDetailToggleVar = !$scope.createDetailToggleVar;};

    $scope.expandAssets = function(){$scope.assetsAreExpanded = !$scope.assetsAreExpanded;};

    $scope.expandAssociations = function(model){

        $scope.associationsAreExpanded = !$scope.associationsAreExpanded;
        
    };

    $scope.expandAdvancedFilter = function(){$scope.filtersAreExpanded = !$scope.filtersAreExpanded;};

    //TODO
    $rootScope.filterToggle = function(type, item, model){

        //PASS ALL OBJECTS IN MODEL ^^
        $scope.updatedQuery = [];
        $scope.closeAllNav();
        $scope.locationFilter = {};
        $scope.locationFilter.distance = 10;

        //POSTIONS / MARKETS // LEDGER
        $scope.item = item;
        $scope.type = type;

        //NOTIFICATIONS
        $scope.selectedType = 'ALL';
        console.log('FILTER TOGGLE', type, item);
        $scope.filterBuilder = JSON.stringify($scope.searchQueryNav, undefined, 4);

        $scope.selectAsset = function(item){
            if ($rootScope.selectedAssets.map(function(obj){return obj.text}).indexOf(item)==-1){
                $rootScope.selectedAssets.push({text:item});
                $scope.item.assets = $scope.item.assets.filter(function(obj) { return obj.element !== item });
            }
            console.log('SELECT ASSET', item, $rootScope.searchQueryNav, $rootScope.searchQuery);
        };

        $scope.selectAssociation = function(item){
            if ($rootScope.searchQueryNav.associations.map(function(obj){return obj.text}).indexOf(item)==-1){
                $rootScope.searchQueryNav.associations.push({
                    text:item, 
                    query:item, 
                    type:'ASSOCIATION'
                });
                //$scope.init();
                $scope.item.associations = $scope.item.associations.filter(function(obj) { 
                    return obj.element !== item
                });
            }
            console.log('SELECT ASSOCIATION', item, $rootScope.searchQueryNav, $rootScope.searchQuery);
        };

        $scope.selectLocation = function(item){
            if ($rootScope.searchQueryNav.locations.map(function(obj){return obj.text}).indexOf(item)==-1){
                item.distance = $scope.locationFilter.distance;
                $rootScope.searchQueryNav.locations.push({
                    text:'Location, '+$scope.locationFilter.distance+' | '+item.id, 
                    query:item, 
                    type:'LOCATION'
                });
                $scope.item.locations = $scope.item.locations.filter(function(obj) { 
                    return obj.element !== item
                });
            }

            console.log('SELECT LOCATION', item, $rootScope.searchQueryNav, $rootScope.searchQuery);

        };

        $scope.selectContext = function(item){

            var selectedLimit = 100;
            var selectedSkip = 0;
            var selectedSort = 'createdAt DESC';

            var query = {
                filter:[
                    {
                        model:null,
                        modelParam:'context',
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

            //DO A FILTER OF SEARCHQUERY OF TYPE CONTEXT
            if ($rootScope.searchQueryNav.context.map(function(obj){return obj.text}).indexOf(item)==-1){
                $rootScope.searchQueryNav.context.push({
                    text:item, 
                    query:item, 
                });
                //$scope.init();
                $scope.item.context = $scope.item.context.filter(function(obj) { return obj.element !== item});
            }

            console.log('SELECT CONTEXT', item, $rootScope.searchQueryNav, $rootScope.searchQuery);

        };

        $scope.selectTypeFilter = function(item){
            if ($rootScope.searchQueryNav.type.map(function(obj){return obj.text}).indexOf(item)==-1){
                $rootScope.searchQueryNav.type.push({
                    text:item, 
                    query:item, 
                    type:'TYPE'
                });
                $scope.item.type = $scope.item.type.filter(function(obj) { 
                    return obj.element !== item
                });
            }

            console.log('selectTypeFilter', item, $rootScope.searchQueryNav, $rootScope.searchQuery);

        };

        $mdSidenav('filter').toggle();
    };

    $rootScope.getLatLng = function() {
        if (navigator.geolocation) {
            $rootScope.stateIsLoading = true;
            navigator.geolocation.getCurrentPosition(function (position) {
                $rootScope.stateIsLoading = false;
                $rootScope.location = {};
                $rootScope.location.lat = position.coords.latitude; 
                $rootScope.location.lng = position.coords.longitude;
                if ($rootScope.currentUser){$rootScope.currentUser.location = $rootScope.location;}
            });
        }
    };

    $rootScope.itemToggle = function(item){
        $scope.closeAllNav();
        if($rootScope.currentUser){
            $scope.newItem = {
                associatedModels:[
                    {
                        type:'ITEM',
                        text:'self',
                        id:'self',
                        context:[
                            {text:'self', score:100}
                        ],
                        connection:[{text:'Item Connection'}]
                    },{
                        type:'MEMBER',
                        text:'MEMBER+'+$rootScope.currentUser.id,
                        id:$rootScope.currentUser.id,
                        context:[
                            {text:'self', score:100}
                        ],
                        connection:[{text:'Member Connection'}]
                    }
                ],
                user:$rootScope.currentUser.id,
            };

            if (item){
                $scope.item = item;
                $scope.newItem.associatedModels.push({
                    type:item.model, 
                    id:item.id, 
                    text:item.model+'+'+item.id, 
                    context:[
                        {text:'self', score:100}
                    ],
                    connection:[{text:item.model+' Connection'}]
                });
            }

            $scope.$watch('newItem.context', function(newValue, oldValue){
                if (newValue !== oldValue) {
                    for (x in $scope.newItem.associatedModels){
                        $scope.newItem.associatedModels[x].context = newValue.map(function(obj){obj.score = 100;return obj;});
                    }
                }
            }, true);


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
            $scope.newOrder = {
                //iden
            };
            
            //LOL TBD
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

            console.log('orderSetToggle', orderSet)

        }

        else{$mdSidenav('login').toggle();}

    };

    $rootScope.populateMap = function(models){
        $rootScope.markers = [];
        for (x in models){
            if (models[x].location){
                $rootScope.markers.push({
                    id:models[x].id,
                    content:models[x].title,
                    url:models[x].urlTitle,
                    coords:{
                        latitude:models[x].location.lat,
                        longitude:models[x].location.lng
                    }
                });
            }
        }
    };

    $rootScope.projectToggle = function(item){
        $scope.closeAllNav();
        if($rootScope.currentUser){

            $scope.newProject = {
                associatedModels:[
                    {
                        type:'CONNECTION',
                        text:'Project Connection Meta',
                        description:'Meta Project Connection Rules',
                        parameters:{data:{}},
                        logic:{},
                        acceptance:{},
                        connection:null,
                    },
                    //2nd degree defines the attributes. now we are validation and changing? 
                    //allow for custom
                    {
                        type:'CONNECTION',
                        text:'Project Self Connection',
                        description:'What defines project attributes and validation',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Member Connection',
                        description:'What defines General membership rules in a project',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Creator Connection',
                        description:'What defines Creator Membership rules in a project',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Order Connection',
                        description:'Meta Project Connection Rules',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Task Connection',
                        description:'Meta Project Connection Rules',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Time Connection',
                        description:'Meta Project Connection Rules',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Task Time Connection',
                        description:'Meta Project Connection Rules',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Transaction Connection',
                        description:'Meta Project Connection Rules',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Validation Connection',
                        description:'Meta Project Connection Rules',
                        connection:[{text:'Project Connection'}]
                    },


                    {
                        type:'PROJECT',
                        text:'Project Self',
                        id:'self',
                        context:[
                            {text:'self', score:100}
                        ],
                        connection:[{text:'Project Self Connection'}]
                    },
                    {
                        type:'MEMBER',
                        text:'Project Creator',
                        description:'You are the Project Creator',
                        connection:[{text:'Project Creator Connection'}],
                    },
                    {
                        type:'MEMBER',
                        text:'Project Member',
                        description:'You are a Project Member',
                        connection:[{text:'Project Member Connection'}]
                    }
                ],
                associatedConnections:[
                    {
                        type:'CONNECTION',
                        text:'Project Connection Meta',
                        description:'Meta Project Connection Rules',
                        parameters:{data:{}},
                        logic:{},
                        acceptance:{},
                        connection:null,
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Self Connection',
                        description:'What defines project attributes and validation',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Member Connection',
                        description:'What defines General membership rules in a project',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Creator Connection',
                        description:'What defines Creator Membership rules in a project',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Order Connection',
                        description:'Meta Project Connection Rules',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Task Connection',
                        description:'Meta Project Connection Rules',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Time Connection',
                        description:'Meta Project Connection Rules',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Task Time Connection',
                        description:'Meta Project Connection Rules',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Transaction Connection',
                        description:'Meta Project Connection Rules',
                        connection:[{text:'Project Connection'}]
                    },
                    {
                        type:'CONNECTION',
                        text:'Project Validation Connection',
                        description:'Meta Project Connection Rules',
                        connection:[{text:'Project Connection'}]
                    }
                ],
                user:$rootScope.currentUser.id,
            };
            
            if (item){
                $scope.item = item;
                $scope.newProject.associatedModels.push({
                    type:item.model, 
                    id:item.id, 
                    text:item.model+'+'+item.id, 
                    context:[
                        {text:'self', score:100}
                    ],
                    connection:[{text:item.model+' Connection'}]
                });
            }

            $scope.$watch('newProject.context', function(newValue, oldValue){
                if (newValue !== oldValue) {
                    for (x in $scope.newProject.associatedModels){
                        $scope.newProject.associatedModels[x].context = newValue.map(function(obj){obj.score = 100;return obj;});
                    }
                }
            }, true);

            $mdSidenav('project').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.protocolToggle = function(){
        $scope.closeAllNav();
        $scope.newProtocol = {};
        if($rootScope.currentUser){$mdSidenav('protocol').toggle();}
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.reactionToggle = function(item, type){
        $scope.closeAllNav();
        $scope.item = item;
        $mdSidenav('reaction').toggle();
    }

    //TODO
    $rootScope.renderToggle = function(item, type){
        $scope.closeAllNav();

        console.log('renderToggle', item);

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
      
        //GET CHILDREN && || TIME... ASSOCIATIONS.. NEED TO FINISH ASSOCIATED SO I DONT KEEP REWRITING.. 
        function populateChildren(contentList, depth, limit){
            contentList.forEach(function(content) {
                ContentModel.get({contentModel:content.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(contentList){
                    console.log('populateChildren', contentList)
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
        ContentModel.get({contentModel:item.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(contentList){
            console.log('populateChildren', contentList)
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
            console.log('renderGraph', $scope.directedGraphElements)
            $scope.graph = graph;
            $scope.graph.json($scope.directedGraphElements);
            $scope.graph.layout({
                name: model,
            }).run();
        });
    };

    $rootScope.renderAttentionToggle = function(item){
        $scope.closeAllNav();
        $scope.item = item;
        $scope.attentionChart = {
            chart: {zoomType: 'x'},
            series: [{
                id: 'Attention',
                type: 'column',
                name: 'Attention',
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
        var sortable = [];
        for (x in Object.keys($scope.item.data.apps.attention)){sortable.push([Object.keys($scope.item.data.apps.attention)[x], $scope.item.data.apps.attention[Object.keys($scope.item.data.apps.attention)[x]]])}
        sortable.sort(function(a, b) {return b[1] - a[1]});
        for (x in sortable){
            if (x < 100){
                $scope.attentionChart.xAxis.categories.push(sortable[x][0]);
                $scope.attentionChart.series[0].data.push(sortable[x][1]);
            }
        }
        $mdSidenav('renderAttention').toggle()
    };

    $rootScope.renderMarketToggle = function(item){
        $scope.closeAllNav();
        $scope.item = item;
        $mdSidenav('market').toggle()
    };

    $rootScope.renderAssociationToggle = function(item){
        $scope.closeAllNav();
        $scope.item = item;
        for (x in $scope.item.associatedModels){
            var nodeModel = {
                group:'nodes',
                data:{
                    id:$scope.item.associatedModels[x].id,
                    type:$scope.item.associatedModels[x].id,
                    name:$scope.item.associatedModels[x].id
                }
            }; 
            $scope.directedGraphElements[$scope.item.associatedModels[x].id] = nodeModel;
            if (x > 0){
                var edgeModel = {
                    group:'edges',
                    classes:'unbundled-bezier',
                    data:{
                        id:$scope.item.associatedModels[0].id+'-'+$scope.item.associatedModels[x].id,
                        source:$scope.item.associatedModels[0].id,
                        target:$scope.item.associatedModels[x].id
                    }
                };
                $scope.directedGraphElements[$scope.item.associatedModels[0].id+'-'+$scope.item.associatedModels[x].id] = edgeModel;
            }
        }
        $mdSidenav('renderAssociation').toggle();
    };

    //MEMBER CARD TOGGLE | TODO RENAME
    //TODO: REDO REP MAPPING
    $rootScope.renderReputationToggle = function(item){
        $scope.closeAllNav();
        $scope.item = item;
        if (!$scope.item.user){$scope.item.user = item};

        $scope.reputationChart.xAxis.categories = [];
        $scope.reputationChart.series[0].data = [];
        
        if ($scope.item.user){$scope.balance = $scope.item.user.balance}

        var sortable = [];
        for (var context in $scope.balance) {sortable.push([context, $scope.balance[context]])}
        sortable.sort(function(a, b) {return b[1] - a[1]});

        for (x in sortable){
            if (x < 100){
                $scope.reputationChart.xAxis.categories.push(sortable[x][0]);
                $scope.reputationChart.series[0].data.push(sortable[x][1]);
            }
        }
        $mdSidenav('renderReputation').toggle();
    };

    //TODO: RENDER PROJECT TOGGLE
    $rootScope.reply = function(){};

    $rootScope.selectSort = function(model, direction, time){
        $rootScope.selectedSort = {model:model.toLowerCase(), direction:direction.toLowerCase(), time:time};
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

    $rootScope.shareToggle = function(item){
        $scope.item = item;
        $scope.closeAllNav();
        $scope.url = 'https://www.cre8.xyz/'+item.model.toLowerCase()+'/'+item.id;
        $scope.jsonObj = JSON.stringify($scope.item);
        $scope.copyToClipBoard = function(text){navigator.clipboard.writeText(text);$rootScope.pop('Coped!')}
        $mdSidenav('share').toggle();
    };

    $rootScope.subNavToggle = function(item){
        $scope.item = item;
        $mdSidenav('subNav').toggle();
    };

    $rootScope.taskToggle = function(item){
        $scope.closeAllNav();

        if($rootScope.currentUser){
            $scope.createDetailToggleVar = true;
            $scope.newTask = {
                associatedModels:[{
                    type:'TASK',
                    text:'self',
                    id:'self',
                    context:[
                        {text:'self', score:100}
                    ],
                    connection:[{text:'Self Connection'}]
                },{
                    type:'MEMBER',
                    text:'MEMBER+'+$rootScope.currentUser.id,
                    id:$rootScope.currentUser.id,
                    context:[
                        {text:'self', score:100}
                    ],
                    connection:[{text:'Member Connection'}]
                }],
                user:$rootScope.currentUser.id,
            };

            if (item){
                $scope.item = item;
                $scope.createDetailToggleVar = false;
                $scope.newTask.associatedModels.push({
                    type:item.model, 
                    id:item.id, 
                    text:item.model+'+'+item.id, 
                    context:[
                        {text:'self', score:100}
                    ],
                    connection:[{text:item.model+ ' Connection'}]
                });
            }

            $scope.$watch('newTask.context', function(newValue, oldValue){
                if (newValue !== oldValue) {
                    for (x in $scope.newTask.associatedModels){
                        $scope.newTask.associatedModels[x].context = newValue.map(function(obj){obj.score = 100;return obj;});
                    }
                }
            }, true);

            console.log('TASK TOGGLE', $scope.newTask);

            $mdSidenav('task').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.timeToggle = function(item){
        $scope.closeAllNav();
        if($rootScope.currentUser){

            $rootScope.newTime = {
                associatedModels:[{
                    type:'TIME',
                    text:'self',
                    id:'self',
                    context:[
                        {text:'self', score:100}
                    ],
                    connection:[{text:'Self Connection'}]
                },{
                    type:'MEMBER',
                    text:'MEMBER+'+$rootScope.currentUser.id,
                    id:$rootScope.currentUser.id,
                    context:[
                        {text:'self', score:100}
                    ],
                    connection:[{text:'Member Connection'}]
                }],
                user:$rootScope.currentUser.id,
            };

            if (item){
                $scope.item = item;
                $scope.createDetailToggleVar = false;
                $rootScope.newTime.associatedModels.push({
                    type:item.model, 
                    id:item.id, 
                    text:item.model+'+'+item.id, 
                    context:[
                        {text:'self', score:100}
                    ],
                    connection:[{text:item.model+' Connection'}]
                });
            }

            if (!$rootScope.newTime.recordingTime){
                $rootScope.newTime.startTime = new Date();
                $rootScope.newTime.startTime.setMilliseconds(0);
                $rootScope.newTime.endTime = new Date();
                $rootScope.newTime.endTime.setHours($scope.newTime.endTime.getHours() + 1);
                $rootScope.newTime.endTime.setMilliseconds(0);
                $rootScope.newTime.amount = 3600;
                $scope.recordingTime = false;
                $scope.streaming = false;
            }

            $scope.selectTypeTime = function(type){$rootScope.newTime.type = type};
            $scope.startStreaming = function() {$scope.streaming = true;};
            $scope.cancelStreaming = function() {$scope.streaming = false;};
            $scope.renderStream = function(stream){
                var html = '<iframe width="510" height="265" src="'+stream+'" frameborder="0" allowfullscreen></iframe>'
                return $sce.trustAsHtml(html);
            };

            $scope.startTime = function() {
                //CONTENT VS TIME VS ITEM VS 
                if ($scope.streaming){
                    $scope.newContent = {
                        type:'video',
                        title: $scope.task.title,
                        context: $scope.task.title + ',stream,work,' + $scope.task.project.title,
                        content: '<iframe width="510" height="265" src="'+$scope.streamUrl+'" frameborder="0" allowfullscreen></iframe>', //BUILD FOR EMBED
                        user: $rootScope.currentUser.id,
                    };
                    ContentModel.create($scope.newContent).then(function(contentModel){
                        console.log('CREATE STREAMING CONTENT', contentModel)
                        $scope.streamingId = contentModel.id;
                    });
                }
                if($scope.recordingTime === true) return false;
                $scope.recordingTime = true;
                //TODO: CREATE TIME HERE
                $scope.startDateTime = new Date();
                //clearInterval($scope.interval);
                $scope.uniDimensionalTimeInterval = $interval(function(){$scope.updateCount(1, 'task')},1000);
            };
           
            //TODO: UNIFY WITH TIMER
            $scope.updateCount = function(amount, context) {
                //TODO: CREATED AT
                var currentTime = new Date();
                $rootScope.taskTime = parseInt((currentTime.getTime() - $scope.startDateTime.getTime()) / 1000);
                //CONTEXT TIME HERE __ IN
                //context[string]:1
                if (!$rootScope.timeQ[context]){$rootScope.timeQ[context] = [];}
                $rootScope.timeQ[context].push({
                    context:{string:'TIME!',type:'LIVE'},
                    amount:1
                });
            };

            $rootScope.$watch('newTime.context', function(newValue, oldValue){
                if (newValue !== oldValue) {
                    for (x in $rootScope.newTime.associatedModels){
                        $rootScope.newTime.associatedModels[x].context = newValue.map(function(obj){obj.score = 100;return obj;});
                    }
                }
            }, true);

            $mdSidenav('time').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };


    //TODO: IMPROVE
    $rootScope.timerToggle = function(){
        $scope.closeAllNav();
        if($rootScope.currentUser){
            if ($rootScope.taskTime > 0){
                $scope.selectedTab = 'TASK';
            }
            $mdSidenav('timer').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.tokensToggle = function(item){
        $scope.closeAllNav();
        $scope.item = item;
        if ($scope.item){
            $scope.sortableSet = [];
            for (x in Object.keys($scope.item.data.apps.tokens)){$scope.sortableSet.push([Object.keys($scope.item.data.apps.tokens)[x], $scope.item.data.apps.tokens[Object.keys($scope.item.data.apps.tokens)[x]]])}
            $scope.sortableSet.sort(function(a, b) {return b[1] - a[1]});
            for (x in $scope.sortableSet){
                if (x < 100){
                    $scope.tokenChart.xAxis.categories.push($scope.sortableSet[x][0]);
                    $scope.tokenChart.series[0].data.push($scope.sortableSet[x][1]);
                }
            }
        }

        $mdSidenav('tokens').toggle();
    };

    $rootScope.transactionToggle = function(item, asset){

        $scope.newTransaction = {};
        $scope.closeAllNav();

        $scope.addAssetToTransaction = function(model){
            if($scope.newTransaction.identifierSet){$scope.newTransaction.identifierSet.push({text:model})}
            else{
                $scope.newTransaction.identifierSet = [];
                $scope.newTransaction.identifierSet.push({text:model})
            }
        };
       
        if($rootScope.currentUser){

            //ASSOCIATE
            $scope.newTransaction = {
                from:[{text:$rootScope.currentUser.username, id:$rootScope.currentUser.id}],
                associatedModels:[{
                    type:'TRANSACTION',
                    text:'self',
                    id:'self',
                    context:[
                        {text:'self', score:100}
                    ]
                }],
                user:$rootScope.currentUser.id,
            };

            if (item){
                if(item.model=='PROJECT'){$scope.newTransaction.to = [{text:item.title, id:item.id}];}
                else{$scope.newTransaction.to = [{text:item.username, id:item.id}];}
            }

            if (asset){
                $scope.newTransaction.identifierSet = [];
                $scope.newTransaction.identifierSet.push({text:asset});
                $scope.newTransaction.amountSet = {};
                $scope.newTransaction.amountSet[asset] = 1;
            }

            $scope.sortedBalances = [];
            for (var key in $rootScope.balance) {if(!isNaN($rootScope.balance[key])){$scope.sortedBalances.push([key, $rootScope.balance[key]]);}}
            $scope.sortedBalances.sort(function(a, b) {return b[1] - a[1];});

            console.log('CREATE TRANSACTION', item, $scope.newTransaction);

            $scope.$watch('newTransaction.context', function(newValue, oldValue){
                if (newValue !== oldValue) {
                    for (x in $scope.newTransaction.associatedModels){
                        $scope.newTransaction.associatedModels[x].context = newValue.map(function(obj){
                            obj.score = 100;
                            return obj;
                        });
                    }
                }
            }, true);

            $mdSidenav('transaction').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.validationToggle = function(item, item1){

        $scope.addToAssociatedModels = function(model){
            console.log(model)
            var associatedModels = {
                id:model.id,
                type:model.model || 'MEMBER',
            };
            //hmm
            associatedModels.text = (model.title || model.username || model.amount) + ' ( ' + (associatedModels.type || '') + ' ' + model.id + ' )'
            $scope.newValidation.associatedModels.push(associatedModels);
        };

        $scope.closeAllNav();

        if($rootScope.currentUser){

            $scope.newValidation = {
                associatedModels:[],
                //HMM
                user: $rootScope.currentUser.id,
            };
            //connection-connection app defined 2nd order has a creator parameter

            //TODO: ITEM (MODEL) AS ARRAY
            if(item){

                console.log(item);
                $scope.item = item;
                var associatedModels = {
                    id:$scope.item.id,
                    type:$scope.item.model,
                    //context: [
                    //    {text:'self', score:100}
                    //],
                    //connection:[{text:$scope.item.model+' Connection'}]
                };

                //hmm
                if (associatedModels.type=='TIME'){associatedModels.text = $scope.item.model + ' ' + $scope.item.id}
                else{associatedModels.text = $scope.item.title + ' ( ' + $scope.item.model + ' ' + $scope.item.id + ' )'}

                //for (x in $scope.item){
                $scope.newValidation.associatedModels.push(associatedModels);
                //}

            }

            if(item1){
                $scope.newValidation.associatedModels.push({
                    text:$scope.item1.title + ' ( ' + $scope.item1.id + ' )',
                    id:$scope.item1.id,
                    type:$scope.item.model,
                });
            }

            if(!item1){
                $scope.newValidation.associatedModels.push({
                    text:'CRE8'+ ' ( PROJECT 5923b9cc5aac131100cab1c1 )',
                    id:'5923b9cc5aac131100cab1c1',
                    type:'PROJECT',
                });
            }


            //if(item.associatedModels){
            //    $scope.newValidation.associatedModels = [];
            //    for (x in item.associatedModels){
            //        $scope.newValidation.associatedModels.push({
            //            text:item.associatedModels[x].id,
            //            id:item.associatedModels[x].id,
            //            type:$scope.item.model,
            //            context: [
            //                {text:'self', score:100}
            //            ],
            //            connection:[{text:$scope.item.model+' Connection'}]
            //        });
            //    }
            //}
    
            $scope.$watch('newValidation.context', function(newValue, oldValue){
                if (newValue !== oldValue) {
                    for (x in $scope.newValidation.context){
                        $scope.newValidation.associatedModels[0].context[$scope.newValidation.context[x].text] = 100;
                    }
                }
            }, true);

            console.log($scope.newValidation);

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
        $mdSidenav('reaction').close();
        $mdSidenav('render').close();
        $mdSidenav('renderReputation').close();
        $mdSidenav('renderValidation').close();
        $mdSidenav('share').close();
        $mdSidenav('sort').close();
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
            $mdSidenav('action').close();
            ActionModel.create($scope.newAction).then(function(model) {
                $rootScope.pop('New Action!', model.id +' '+ model.createdAt);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

   $scope.createApp = function(item){
        if ($rootScope.currentUser){
            $mdSidenav('app').close();
            AppModel.create($scope.newApp).then(function(model) {
                $rootScope.pop('New App!', model.id +' '+ model.createdAt);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createConnection = function(item) {
        if ($rootScope.currentUser){
            $mdSidenav('connection').close();
            ConnectionModel.create($scope.newConnection).then(function(model) {
               $rootScope.pop('New Connection!', model.id +' '+ model.createdAt);
            });
        }
        else{$mdSidenav('login').toggle()}
    }

    //TODO: ASSOCIATED MODELS
    $scope.createContent = function(item) {
        if ($rootScope.currentUser){
            console.log('CREATE CONTENT', $scope.newContent);
            $mdSidenav('content').close();
            ContentModel.create($scope.newContent).then(function(model) {
                $rootScope.pop('New Content!', model.id +' '+ model.createdAt);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createItem = function(content) {
        if ($rootScope.currentUser){
            if ($scope.newItem.context){
                $scope.newItem.context = $scope.newItem.context.map(function(obj){
                    return obj.text;
                }).join(",");
            }
            $mdSidenav('item').close();
            ItemModel.create($scope.newItem).then(function(model) {
                $rootScope.pop('New Item!', model.id +' '+ model.createdAt);
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
            
            console.log('CREATE ORDER', $scope.newOrder);

            $mdSidenav('order').close();
            OrderModel.create($scope.newOrder).then(function(model) {
                $rootScope.pop('New Order!', model.id +' '+ model.createdAt);
            });

        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createProject = function() {
        if ($rootScope.currentUser){
            console.log('CREATE PROJECT', $scope.newProject);
            $mdSidenav('project').close();
            ProjectModel.create($scope.newProject).then(function(model) {
                $rootScope.pop('New Project!', model.id +' '+ model.createdAt);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createProtocol = function() {};

    //TODO: MORE ON RENDER
    $rootScope.createReaction = function(item, type){
        if($rootScope.currentUser){
            $scope.newReaction = {
                amount:1,
                associatedModels: [{type:item.model, id:item.id}],
                type:type,
                user:$rootScope.currentUser.id
            }
            //WEBSOCKETS
            //$scope.item.reactions[type]++;
            //UPDATE LOCAL SCOPE..
            console.log($scope.newReaction);
            ReactionModel.create($scope.newReaction);
            $rootScope.pop(type, item.id);
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createTask = function() {
        if ($rootScope.currentUser){
            $mdSidenav('task').close();
            console.log('CREATE TASK', $scope.newTask);
            TaskModel.create($scope.newTask).then(function(model) {
                console.log(model)
                $rootScope.pop('New Task!', model.id +' '+ model.createdAt);
            });

        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: MULTI D
    //TIMER UX - LEFT OPEN
    $scope.createTime = function(){
        if($rootScope.currentUser){
            $rootScope.newTime.createdAt = $scope.newTime.startTime;
            if ($rootScope.newTime.context){
                $rootScope.newTime.context = $scope.newTime.context.map(function(obj){
                    return obj.text;
                }).join(",");
            }
            if ($rootScope.taskTime){$rootScope.newTime.amount = $rootScope.taskTime}
            console.log('CREATE TIME', $rootScope.newTime);
            $mdSidenav('time').close();
            $mdSidenav('timer').close();
            $interval.cancel($scope.uniDimensionalTimeInterval);

            TimeModel.create($rootScope.newTime).then(function(model){
                $rootScope.pop('New Time!', model.id +' '+ model.createdAt);
                //TODO: MULTID
                $rootScope.taskTime=0;
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createTransaction = function(){
        if ($rootScope.currentUser){
            $scope.newTransaction.user = $rootScope.currentUser.id;
            if ($scope.newTransaction.context){
                $scope.newTransaction.context = $scope.newTransaction.context.map(function(obj){
                    return obj.text
                }).join(",");
            }
            //MULTI TRANSACTION BUG... 
            //COPY MODEL.. 
            var newTransaction = $scope.newTransaction;
            newTransaction.from = newTransaction.from[0].id;
            newTransaction.to = newTransaction.to[0].id;
            console.log('CREATE TRANSACTION', $scope.newTransaction);
            $mdSidenav('transaction').close();


            //TEMP
            $rootScope.activityUpdate = $scope.newTransaction;


            TransactionModel.create(newTransaction).then(function(model){
               $rootScope.pop('New Transaction!', model.id +' '+ model.createdAt);
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
                console.log('CREATE VALIDATION', $scope.newValidation);
                $mdSidenav('validation').close();
                ValidationModel.create($scope.newValidation).then(function(model) {
                    $rootScope.pop('New Validation!', model.id +' '+ model.createdAt);
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

        //timeQ['general'] , timeQ['task']

        //break into lists of context.. overtime.. and current. .. need graph
        //allow for meta data in auto time .... 
        //show view time controller. 
        //bar of each context.

        //$state.params[Object.keys($state.params)[0]]

        //INTENTIONAL TIME

        //HUMAN AND MACHINE ARE ONE .. HAVE TO BE ON TO RUN? 
            //SHOULDNT BE TURNED OFF AND SHOULD RUN IN CONCERT


        //TODO: BETTER STATE INFO
        //ERR: FORMATING AND UPDATING MODELS
        var string = '';
        string += $state.current.name.toUpperCase().replace('.','+');
        //console.log($state.current.name.toUpperCase().replace('.','+'))

        if ($state.params[Object.keys($state.params)[0]]){
            string += '+'+$state.params[Object.keys($state.params)[0]]//.toUpperCase();
        }
        string += '+'+model.toUpperCase()+'+ATTENTION';

        //STORE MOST DIMENSIONAL WORD
            //LONGEST WORD.. +..+..+
                //THEY ENCODE THE BALANCE FOR LOWER D

        var location = '';
        if ($rootScope.currentUser.location){location=$rootScope.currentUser.location;}

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

        //ERR
        if (string.split('+').length > 1){
            associatedModels = [{type:string.split('+')[0], id:string.split('+')[1]}]
        }

        var attentionModel = {
            app: model,
            amount:1, 
            string: string,
            data: {verion:'PRE ALPHA', ip:{}, device:{title:navigator.userAgent, id:1, hardwareHash:''}},
            associatedModels: associatedModels,
            creator: $rootScope.currentUser.id,
        };

        if (set.length >= 10){
            attentionModel.amount = set.length;
            $rootScope.timeQ[context] = [];
            AttentionModel.create(attentionModel);
        }

        if (context == 'mining'){
            if ($rootScope.timeQ[context].length >= 10){AttentionModel.create(attentionModel);}
        }

        if (context == 'attention'){
            $rootScope.timeModel.amount = $rootScope.timeModel.amount + time;
        }

        var index = $scope.timeChart.xAxis.categories.indexOf(string);
        if (index == -1){
            $scope.timeChart.xAxis.categories.push(string);
            $scope.timeChart.series[0].data.push(1);
        }
        else{$scope.timeChart.series[0].data[index] = $rootScope.timeModel.amount;}

    };

    //GENERALIZE AS APPS
    $scope.initAttention = function(){
        if($rootScope.currentUser){
            console.log('STARTING ATTENTION', $rootScope.currentUser)
            //if ($rootScope.currentUser.apps.attention.isActive){
                $scope.humanAttentionInterval = $interval(function(){$scope.timerFunction(1, 'attention', 'HUMAN')}, 1000);
                $scope.machineAttentionInterval = $interval(function(){$scope.timerFunction(1, 'mining', 'MACHINE')}, 1000);
            //}
        }
    };
    $scope.initAttention();
 
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
        //TOOD: SEARCH QUERY .. 
        UserModel.get({search:query, limit:1000, skip:0, sort:'createdAt DESC'}).then(function(userModels){
            console.log('USERS: LOAD ADDRESS', userModels);
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
 
        $scope.balance = $rootScope.balance;
        console.log('LOAD ASSET', $rootScope.balance, $scope.balance);

        ItemModel.get({user:$rootScope.currentUser.id, limit:10, skip:0, sort:'createdAt DESC'}).then(function(itemModels){
            console.log('LOAD ASSET ITEMS', itemModels)
            
            //TODO: ALLOW FOR TITLE.. ETC.. USE TOKEN DATA MODEL HERE.. 
            itemModels.map(function(obj){
                obj.type='ITEM';
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
    };

    //TODO! IMPORTANT
    $scope.loadAssociations = function(query){
        var deferred = $q.defer();
        console.log('loadAssociations', query)
        //SearchModel.search(query).then(function(searchModels){})
        ProjectModel.get({query:query, limit:10, skip:0, sort:'createdAt DESC'}).then(function(searchModels){
            if (searchModels.length > 0){
                searchModels.map(function(obj){
                    obj.type='PROJECT';
                    obj.text = 'PROJECT+'+obj.id;
                    return obj;
                });
            }
            deferred.resolve(searchModels);
        });
        return deferred.promise;
    };

    $scope.loadAssociationsTask = function(query){
        var deferred = $q.defer();
        console.log('loadAssociationsTask', query);
        TaskModel.get({search:query, limit:10, skip:0, sort:'createdAt DESC'}).then(function(searchModels){
            if (searchModels.length > 0){
                searchModels = searchModels.map(function(obj){
                    obj.type='TASK';
                    obj.text=obj.title;
                    return obj;
                });
            }
            deferred.resolve(searchModels);
        });
        return deferred.promise;
    };

    $scope.loadItems = function(query){
        var deferred = $q.defer();
        ItemModel.get({search:query, limit:10, skip:0, sort:'createdAt DESC'}).then(function(itemModels){
            itemModels = itemModels.map(function(obj){
                obj.type='ITEM';
                obj.text=obj.title;
                return obj;
            });
            deferred.resolve(itemModels);
        });
        return deferred.promise;
    };

    //TODO! IMPORTANT
    $scope.loadContext = function(query){
        console.log('loadContext', query);
        var deferred = $q.defer();
        var searchModels = [];
        deferred.resolve(searchModels);
        return deferred.promise;
    };

    //ROOTSCOPE
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

    //TODO
    $scope.reply = function(item){
        $scope.item.showReply = !$scope.item.showReply;
    };

    //IMPROVE
    $scope.sideNavToggle = function(){
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
    
    //ROOTSCOPE?
    $scope.selectTab = function(model){$scope.selectedTab = model;};

}]);