angular.module( 'conexus.nav', [
])

.controller( 'NavCtrl', ['$http','$location', '$mdSidenav', '$q', '$rootScope', '$sailsSocket', '$sce', '$scope', '$window', 'ContentModel', 'ItemModel', 'NotificationModel', 'OrderModel', 'ProjectModel', 'ReactionModel', 'SearchModel', 'TaskModel', 'TimeModel', 'toaster', 'TransactionModel', 'ValidationModel', 'UserModel', function NavController( $http, $location, $mdSidenav, $q, $rootScope, $sailsSocket, $sce, $scope, $window, ContentModel, ItemModel, NotificationModel, OrderModel, ProjectModel, ReactionModel, SearchModel, TaskModel, TimeModel, toaster, TransactionModel, ValidationModel, UserModel ) {

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
        //$scope.createView();
        $scope.closeAllNav();
    });
    
    //INITALIZE LOCAL VARIABLES
    $scope.associationsAreExpanded = false;
    $scope.chart = {};
    $scope.confirm = {};
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
                    }
                    $rootScope.notificationCount++;
                    
            }
        });
    }

    //ROOT FUNCTIONS
    $rootScope.actionToggle = function(){
        $scope.closeAllNav();
        if($rootScope.currentUser){$mdSidenav('action').toggle();}
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

    $rootScope.contentToggle = function(){
        $scope.closeAllNav();
        if($rootScope.currentUser){
            //TODO: ASSOCIATED 
            //HM!
            $scope.newContent = {};
            $scope.newContent.associatedModels = $rootScope.associatedModels;
            console.log($scope.newContent);
            if ($scope.newContent.associatedModels){$scope.newContent.associatedModels.push({text: $rootScope.currentUser.username, type:'PROFILE', address:$rootScope.currentUser.id});}
            else{$scope.newContent.associatedModels = [{text: $rootScope.currentUser.username, type:'PROFILE', address:$rootScope.currentUser.id}];}
            $scope.newContent.associatedModels = $scope.newContent.associatedModels.map(function(obj){
                obj.text = obj.type+' | '+obj.address;
                return obj;
            });
            console.log($scope.newContent.associatedModels);
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

    $scope.expandAssociations = function(){$scope.associationsAreExpanded = !$scope.associationsAreExpanded;};

    //TODO!!!
    $rootScope.filterToggle = function(type, item){

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

    $rootScope.orderToggle = function(){
        $scope.closeAllNav();
        if($rootScope.currentUser){
            $scope.newOrder = {};
            $mdSidenav('order').toggle();
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

    $rootScope.renderValidationToggle = function(item){
        $scope.closeAllNav();
        $scope.item = item;

        //DEPRECIATE .modelType
        if (item.model == 'TASK'){
            $scope.graphData = {
                nodes:[{name:$scope.item.title}], 
                links:[]
            };
            if ($scope.item.project){
                $scope.assoicationFilter = [{text:$scope.item.project.title}];
            }
        }
        if (item.model == 'TIME'){
            $scope.graphData = {
                nodes:[{name:$scope.item.amount}], 
                links:[]
            };
        }


        //TODO BUILD THESE --> LOAD ASSOCIATION
        for (x in $scope.item.associatedModels){
            //HACK
            var length = $scope.graphData.nodes.length;
            console.log($scope.item.associatedModels[x])
            $scope.graphData.nodes.push({name:$scope.item.associatedModels[x].type})//$scope.item.associatedModels[x].address});
            $scope.graphData.links.push({value:1, source:0, target:length});
        }

        $scope.graphOptions = {
            chart: {
                type: 'forceDirectedGraph',
                height: 450,
                margin:{top: 0, right: 0, bottom: 0, left: 0},
                color: function(d){return  d3.scale.category20()(d.group)},
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

        //TODO: IMPROVE QUERY
        //TODO: GET ASSOCIATIONS
        //TODO: ASSOCIATION MODEL
        var validationQueryModel = {
            limit:100,
            skip:0,
            sort:'createdAt DESC',
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
                legend: {enabled: true},
                credits:{enabled:false},
                plotOptions: {column: {minPointLength: 3}},
            };

            $scope.validations = validationModels;

            //TODO: SORED IN ASSOCIATION
            $scope.validationSumObj = {};

            //TODO: THIS IS DONW ON BACKEND
            //TODO: ASSOCIATION
            if ($scope.validations.length > 0){
                for (y in $scope.validations){
                    console.log($scope.validations[y].validation);
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
    
        $mdSidenav('renderValidation').toggle();
    };

    //MEMBER CARD TOGGLE | TODO RENAME
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

        //TODO: SORT
        for (x in Object.keys($scope.reputation)){
            if ($scope.reputation[Object.keys($scope.reputation)[x]]){
                if (x < 250){
                    $scope.chart.series[0].data.push($scope.reputation[Object.keys($scope.reputation)[x]]);
                    $scope.chart.xAxis.categories.push(Object.keys($scope.reputation)[x]);
                }
            }
        }
        
        $mdSidenav('renderReputation').toggle();
    };

    //TODO: RENDER PROJECT TOGGLE
    //$rootScope.reply = function(){};

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

















                clearInterval($scope.interval);
                $scope.interval = setInterval($scope.updateCount, 1000);
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

            $scope.updateCount = function() {
                //TODO: CREATED AT
                var currentTime = new Date();
                $rootScope.taskTime = parseInt((currentTime.getTime() - $scope.startDateTime.getTime()) / 1000);
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

    $rootScope.transactionToggle = function(item){

        $scope.closeAllNav();

        console.log(item, $scope.newTransaction);

        if($rootScope.currentUser){

            if (item){
                if(item.model=='PROJECT'){$scope.newTransaction.to = [{text:item.title, address:item.id, id:item.id}];}
                else{$scope.newTransaction.to = [{text:item.username, address:item.id, id:item.id}];}
            }

            //if (!$scope.newTransaction.content){$scope.newTransaction.content = 'TEST'}

            //TODO:
            if (!$scope.newTransaction.identifierSet){
                //$scope.newTransaction.identifierSet = [{text:'CRE8'}];
                //$scope.newTransaction.amountSet = {};
                //$scope.newTransaction.amountSet['CRE8'] = 1;
                //$scope.newTransaction.tags = [{text:'tag'},{text:'tag1'}];
            }

            $mdSidenav('transaction').toggle();

        }

        else{$mdSidenav('login').toggle();}

    };

    $rootScope.validationToggle = function(item){
        $scope.closeAllNav();

        console.log(item)

        if($rootScope.currentUser){

            $scope.item = item;
            $scope.newValidation = {};
            $scope.newValidation.validation = {};
            $scope.newValidation.validation.general = 0;

            console.log($scope.item);

            //SELF CREATED VALIDATION ON CREATE --> COOL
            //TIME <--> TASK FROM ON TIME CREATE
            //TASK <--> PROJ FROM ON TASK CREATE

            if ($scope.item){

                if ($scope.item.model == 'TASK'){

                    //TODO
                    //WHAT CONTEXT ARE WE LOOKING AT THE MODEL
                    //PREVIOUS VALIDATIONS.. WHAT CONTEXT ARE WE VIEWING THE TASK | DYNAMIC FILTER

                    //DEPRECIATE .project && .task
                    $scope.newValidation.associatedModel = [{text:$scope.item.project.title, id:$scope.item.project.id, title:$scope.item.project.title, type:'PROJECT'}];

                    $scope.newValidation.associatedModels = [{type:'TASK', address:item.id}];

                    $scope.tags = item.tags;
                    for (x in $scope.tags){$scope.newValidation.validation[$scope.tags[x]] = 0;}

                }

                if ($scope.item.model == 'TIME'){

                    //TODO
                    //WHAT CONTEXT ARE WE LOOKING AT THE MODEL
                    //PREVIOUS VALIDATIONS.. WHAT CONTEXT ARE WE VIEWING THE TIME

                    //DEPRECIATE .project && .task
                    //$scope.newValidation.associatedModel = [{text:'TASK | '+$scope.item.task.title, id:$scope.item.project.id, title:$scope.item.project.title, type:'TASK'}];
                    //$scope.newValidation.associatedModels = [{type:'TIME', address:item.id}];

                    //if($scope.item.task.tags){
                    //    $scope.tags = item.task.tags;
                    //    for (x in $scope.tags){$scope.newValidation.validation[$scope.tags[x]] = 0;}
                    //}

                    //SELF DEFINED CONTEXT IN TIME
                    //BRIDGE BTW TASK CONTEXT (SELF DEFINED IN TIME TO PROJ CONTEXT VALIDATED THROUGH TASK) IE
                        //IF NOT CONTEXT VALIDATED IN TASK <-> PROJ IT IS 0. 

                    $scope.tags = $scope.item.tags;
                    if($scope.item.tags){
                        //$scope.tags = Array.from(new Set($scope.tags.concat(item.tags)));
                        for (x in $scope.tags){$scope.newValidation.validation[$scope.tags[x]] = 0;}
                    }

                }

                //TODO: WATCH TAGS

                //TODO PREVIOUS VALIDATION CONTEXT.. 
                if ($scope.item.model == 'VALIDATION'){
                    $scope.newValidation.associatedModel = [{text:'VALIDATION | '+$scope.item.id, type:'VALIDATION',address:$scope.item.id}];
                    $scope.newValidation.associatedModels = [{type:'VALIDATION', address:item.id}];
                }

                if ($scope.item.model == 'CONTENT'){
                    $scope.newValidation.associatedModels = [{type:'CONTENT', address:item.id}];
                } //--> PROJ

                if ($scope.item.model == 'ITEM'){
                    $scope.newValidation.associatedModels = [{type:'ITEM', address:item.id}];
                } //--> PROJ

                if ($scope.item.model == 'MEMBER'){
                    $scope.newValidation.associatedModels = [{type:'MEMBER', address:item.id}];
                } //--> PROJ

                if ($scope.item.model == 'ORDER'){
                    $scope.newValidation.associatedModels = [{type:'ORDER', address:item.id}];
                } //--> PROJ

                if ($scope.item.model == 'PROJECT'){
                    $scope.newValidation.associatedModels = [{type:'PROJECT', address:item.id}];
                } //--> PROJ

                if ($scope.item.model == 'TRANSACTION'){
                    $scope.newValidation.associatedModels = [{type:'TRANSACTION', address:item.id}];
                } //--> PROJ

            }
                     
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

    //TODO: ASSOCIATED MODELS
    $scope.createContent = function(item) {
        if ($rootScope.currentUser){



            //RENDER | nested Reply
            if(item){$scope.newContent.associatedModels = [{type:'CONTENT', id:content.id}];}
            $scope.newContent.type = $scope.selectedType;
            $scope.newContent.user = $rootScope.currentUser.id;
            if ($scope.newContent.tags){
                $scope.newContent.tags = $scope.newContent.tags.map(function(obj){
                    return obj.text;
                }).join(",");
            }



            //PATCH!!!
            if ($scope.newContent.associatedModels){
                for (x in $scope.newContent.associatedModels){
                    $scope.newContent[$scope.newContent.associatedModels[x].type.toLowerCase()] = $scope.newContent.associatedModels[x].address
                }
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
    $scope.createReaction = function(item, type){
        if($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:item.model, id:item.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            $scope.item.reactions[type]++;
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
            if ($scope.newTransaction.tags){
                $scope.newTransaction.tags = $scope.newTransaction.tags.map(function(obj){
                    return obj.text
                }).join(",");
            }

            $scope.newTransaction.from = $scope.newTransaction.from[0].id;
            $scope.newTransaction.to = $scope.newTransaction.to[0].id;

            console.log($scope.newTransaction);

            TransactionModel.create($scope.newTransaction).then(function(model){
                $scope.confirm = $scope.newTransaction;
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

    $scope.createValidation = function(){
        if ($rootScope.currentUser){
            $scope.newValidation.user = $rootScope.currentUser.id;
            console.log($scope.newValidation);
            if ($scope.newValidation.associatedModel){
                console.log($scope.newValidation.associatedModel)
                $scope.newValidation.associatedModels = $scope.newValidation.associatedModels.concat({
                    type:$scope.newValidation.associatedModel[0].type, address:$scope.newValidation.associatedModel[0].id,
                });
                //console.log($scope.newValidation);
                ValidationModel.create($scope.newValidation).then(function(model) {
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

    //TODO
    $scope.createView = function(){
        if ($rootScope.currentUser){
            //TODO: BACKEND TIMER.. ? 
            //TODO: BETTER SECURITY..
            //AKA CONNECT TO CHAIN WHEN START AND WHEN END NOT FRONTEND TIMER 
            //-- MAKE TWO CALLS WITH TIME STAMP. 
            $scope.timer = {};
            $scope.timeModel = {
                type: 'VIEW',
                user: $rootScope.currentUser.id,
                associatedModels: [{type: 'URL', id:window.location.href}],
                amount: 0
            };
            $scope.timerFunction = function(time){
                $scope.timeModel.amount = $scope.timeModel.amount + time;
                console.log($scope.timeModel.amount)
            }
            $scope.timer = setInterval(function(){$scope.timerFunction(1)}, 1000);
            if ($scope.timeModel.amount != 0){
                clearInterval($scope.timer);
                $scope.timeModel.amount = $scope.timeModel.amount/1000
                console.log($scope.timeModel.amount)
                //TimeModel.create($scope.timeModel).then(function(){
                //    $scope.timeModel = {};
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
        UserModel.getSome({search:query, limit:10, skip:0, sort:'createdAt DESC'}).then(function(userModels){
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
        return [
            {text:'CRE8'},
            {text:'BTC'},
            {text:'BCH'},
            {text:'ETH'},
            {text:'LTC'},
            {text:'USD'},
            {text:'STEEM'},
            {text:'NOVO'},
            {text:'TIME'},
            {text:'TIME+ATTENTION'},
            {text:'CONTENT'},
            {text:'CONSUMPTION'},
            {text:'REST'},
            {text:'MARKETING'},
            {text:'SHELTER'},
            {text:'UNIVERSAL'},
        ];
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
            deferred.resolve(taskSearchModels);
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
        $mdSidenav('nav').toggle();
    };

    $scope.selectOrderType = function(type){$scope.selectedOrderType = type;};
    $scope.selectType = function(type){$scope.selectedType = type;};

}]);