angular.module( 'conexus.nav', [
])

.controller( 'NavCtrl', ['$http','$location', '$mdSidenav', '$q', '$rootScope', '$sailsSocket', '$sce', '$scope', '$state', '$window', 'config', 'ContentModel', 'ItemModel', 'NotificationModel', 'OrderModel', 'ProjectModel', 'ReactionModel', 'SearchModel', 'TaskModel', 'TimeModel', 'toaster', 'TransactionModel', 'ValidationModel', 'UserModel', function NavController( $http, $location, $mdSidenav, $q, $rootScope, $sailsSocket, $sce, $scope, $state, $window, config, ContentModel, ItemModel, NotificationModel, OrderModel, ProjectModel, ReactionModel, SearchModel, TaskModel, TimeModel, toaster, TransactionModel, ValidationModel, UserModel ) {
    $scope.chart = {};
    $scope.confirm = {};
    $scope.inputVector = [];
    $scope.newContent = {};
    $scope.newItem = {};
    $scope.newLogin = {};
    $scope.newOrder = {};
    $scope.newProject = {};
    $scope.newReaction = {};
    $scope.newTask = {};
    $scope.newTime = {};
    $scope.newTransaction = {};
    $scope.newTransaction = {};
    $scope.newValidation = {};
    $scope.outputMatix = [];
    $scope.outputVector = [];
    $scope.item = {};
    $scope.inverted = false;
    $scope.isInformation = false;
    $scope.selectedOrderType = 'ONBOOKS';
    $scope.selectedType = 'POST';
    $scope.validationColumnRender = {};

    //$rootScope.currentUser = config.currentUser;
    //$scope.currentUser = config.currentUser;

    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };

    $rootScope.searchQueryNav = {
        assetsInput:[],
        assetsOutput:[],
        associations:[],
        model:[],
        locations:[],
        query:[],
        tags:[],
        type:[],
    };

    $rootScope.selectedTags = [];
    $rootScope.selectedAssets = [];
    $rootScope.selectedAssociations = [];
    $rootScope.selectedLocations = [];

    if ($scope.currentUser){

        $scope.newTransaction.from = [{text:$scope.currentUser.username, id:$scope.currentUser.id}];
        $scope.newContent.associatedModels = [{text: $scope.currentUser.username, type:'PROFILE', id:$scope.currentUser.id}];
        $rootScope.notificationCount = 0;

        //TODO: NOTIFICATIONS
        $scope.pop = function(title, body){
            toaster.pop({
                type:'success', //info, wait, success, warning
                title: title,
                body: body,//'TROVERMAN SUBMITTED NEW TIME TO {TASK}', // VALIDATE X POST
                onShowCallback: function (toast) { 
                    //PLAY SOUND
                    var audio = new Audio('audio/ping.mp3');
                    audio.play()
                    .then(function(audio){console.log(audio)})
                    .catch(function(err){console.log(err)})
                }
            });
        };

        //GET UNREAD NOTIFICATIONS.. POPEM
        NotificationModel.getSome({user:$scope.currentUser.id, isRead:false, limit:100, skip:0, sort:'createdAt DESC'}).then(function(notifications){
            $scope.notifications = notifications;
            
            //$scope.notifications = {};
            console.log(notifications);

            $rootScope.notificationCount = $scope.notifications.length;
            for (x in $scope.notifications){
                var titleText='';
                var bodyText='';
                $scope.pop($scope.notifications[x].title, $scope.notifications[x].content);
            }

        });

        //TODO: BETTER
        UserModel.getByUsername($scope.currentUser.username).then(function(member){
            $scope.memberValidate = member;
            $scope.balance = member.balance;
            $scope.reputation = member.reputation;
        });

        //TODO: WEBSOCKETS | WEB3
        $sailsSocket.subscribe('notification', function (envelope) {
            switch(envelope.verb) {
                case 'created':
                //if logged in user
                //HAS TO BE BETTER THAN SOCKET CHECK 
                //--> THIS IS RED HOT AT SCALE ,, lol 
                //,, personal notification room vs whole -- TODO: REDO !
                //$scope.currentUser.id
                console.log(envelope)
                //if type
                //$scope.pop(envelope.data.title, envelope.data.info.user.username);
                //$scope.pop(envelope.data.title, envelope.data.info.username);

                $rootScope.notificationCount++;
            }
        });

    }

    //TODO: FACTOR LOADING HERE
    $rootScope.$on("$stateChangeStart", function() {

        //VIEW GENERATION | LOL
        //if ($scope.currentUser){
            //VIEW AS TIME
            //TODO: BACKEND TIMER.. ? 
            //TODO: BETTER SECURITY..
            //AKA CONNECT TO CHAIN WHEN START AND WHEN END NOT FRONTEND TIMER 
            //-- MAKE TWO CALLS WITH TIME STAMP. 
            //$scope.timer = {};
            //$scope.timeModel = {
            //    type: 'VIEW',
            //    user: $scope.currentUser.id,
            //    associatedModels: [{type: 'URL', id:window.location.href}],
            //    amount: 0
            //};
            //$scope.timerFunction = function(time){
            //    $scope.timeModel.amount = $scope.timeModel.amount + time;
            //    console.log($scope.timeModel.amount)
            //}
            //$scope.timer = setInterval(function(){$scope.timerFunction(1)}, 1000);

            //if ($scope.timeModel.amount != 0){
                //clearInterval($scope.timer);
                //$scope.timeModel.amount = $scope.timeModel.amount/1000
                //console.log($scope.timeModel.amount)
                //TimeModel.create($scope.timeModel).then(function(){
                //    $scope.timeModel = {};
                //    console.log('SURE')
                //});
            //}
        //}

        //DEPRECIATE
        $rootScope.to = null;
        $rootScope.associatedModel = null;

        //DEPRECIATE
        $rootScope.market = null;
        $rootScope.market1 = null;
    
        $mdSidenav('nav').close();
        $mdSidenav('subNav').close();
        $mdSidenav('content').close();
        $mdSidenav('login').close();
        $mdSidenav('render').close();
        $mdSidenav('renderReputation').close();
        $mdSidenav('renderValidation').close();
        $mdSidenav('tokens').close();
        $mdSidenav('transaction').close();
        $mdSidenav('validation').close();

        //$rootScope.memberUsername = null;
        //$rootScope.projectTitle = null;
    });
    
    $rootScope.$on("$stateChangeSuccess", function() {window.scrollTo(0, 0)});
    
    $scope.$watch('$root.to', function() {
        $scope.newTransaction.to = [{text:$rootScope.to, id:$rootScope.to}];
    });

    $scope.$watch('tokens', function() {
        $scope.inputVector = $scope.tokens;
        $scope.outputMatix = [];
        $scope.outputVector = [];
    });

    //TODO: CHANGE PARENT TO ASSOCIATED MODELS
    //ASSOCIATION (MOTION) // SET OF VOTES []; LINKAGE SCORES | ASSOCIATION | 'DISCRITIZEATION' PROTOCOL
   
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
        UserModel.getSome('search', query, 10, 0, 'createdAt DESC').then(function(userModels){
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
            {text:'USD'}, // STRIPE??--> TALK ABOUT HIS
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
    $scope.loadAssociations = function(query){

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
            ProjectModel.getSome('search', query, 10, 0, 'createdAt DESC').then(function(projectSearchModels){
                projectSearchModels.map(function(obj){
                    obj.type='PROJECT';
                    obj.text = 'PROJECT | '+obj.title;
                    return obj;
                });
                TaskModel.getSome('search', query, 10, 0, 'createdAt DESC').then(function(taskSearchModels){
                    taskSearchModels.map(function(obj){
                        obj.type='TASK';
                        obj.text = 'TASK | '+obj.title;
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

    //TODO! IMPORTANT
    $scope.loadTags = function(query){
        console.log(query);
        var deferred = $q.defer();
        //SearchModel.search(query).then(function(searchModels){
        UserModel.getSome('search', query, 10, 0, 'createdAt DESC').then(function(searchModels){
            console.log(searchModels);
            searchModels.map(function(obj){
                obj.title = obj.text;
                return obj.text;
            });
            deferred.resolve(searchModels);
        });
        return deferred.promise;
    };

    //OVERKILL
    $rootScope.contentToggle = function(){
        if($scope.currentUser){
            //TODO: ASSOCIATED 
            //HM!
            $scope.newContent = {};
            $scope.newContent.associatedModels = $rootScope.associatedModels;
            console.log($scope.newContent);
            if ($scope.newContent.associatedModels){$scope.newContent.associatedModels.push({text: $scope.currentUser.username, type:'PROFILE', address:$scope.currentUser.id});}
            else{$scope.newContent.associatedModels = [{text: $scope.currentUser.username, type:'PROFILE', address:$scope.currentUser.id}];}
            $scope.newContent.associatedModels = $scope.newContent.associatedModels.map(function(obj){
                obj.text = obj.type+' | '+obj.address;
                return obj;
            });
            console.log($scope.newContent.associatedModels);
            $mdSidenav('content').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.filterToggle = function(type, item){

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

        //TODO
        $scope.locationFilter = {};
        $scope.locationFilter.distance = 10;

        //WATCHERS
        $scope.selectAsset = function(item){
            if ($rootScope.selectedAssets.map(function(obj){return obj.text}).indexOf(item)==-1){
                $rootScope.selectedAssets.push({text:item});
                $scope.item.assets = $scope.item.assets.filter(function(obj) { 
                    return obj.element !== item
                });
            }
        };

        //TEST
        //$scope.$watch('$root.searchQueryNav.associations', function(newValue, oldValue) {
        //    console.log('yo')
        //    if (newValue !== oldValue) {
                //console.log(newValue);
                //$rootScope.searchQueryNav.associations.indexOf
        //    }
        //});

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
        };

        $scope.selectTag = function(item){
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
        };


        //$rootScope.$watch('searchQueryNav' ,function(){
        //    $rootScope.searchQuery = [];
        //    for(x in Object.keys($rootScope.searchQueryNav)){
        //        for (y in Object.keys($rootScope.searchQueryNav[Object.keys($rootScope.searchQueryNav)[x]])){
        //            if ($rootScope.searchQuery.map(function(obj){return obj.query}).indexOf($rootScope.searchQueryNav[Object.keys($rootScope.searchQueryNav)[x]][y].query)==-1){
        //                $rootScope.searchQuery.push($rootScope.searchQueryNav[Object.keys($rootScope.searchQueryNav)[x]][y])
        //            }
        //        }
        //    }
        //    console.log($rootScope.searchQuery);
            //REFACTOR SEARCH MODEL
            //if project
                //ProjectModel.search
            //if items
                //ItemModel.search
            //if content
                //ContentModel.search
            //if tasks
                //TaskModel.search
            //else{}
                //SearchModel.search
            //$rootScope.projects = [];
            //console.log('we here');
        //}, true);

        //POSTIONS / MARKETS
        //LEDGER
        $scope.item = item;
        $scope.type = type;

        console.log(type,item)

        //NOTIFICATIONS
        $scope.selectedType = 'ALL';


        $mdSidenav('filter').toggle();

    };

    $rootScope.itemToggle = function(){
        if($scope.currentUser){
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
        if($scope.currentUser){
            $scope.newOrder = {};
            $mdSidenav('order').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.projectToggle = function(){
        if($scope.currentUser){
            $scope.newProject = {};
            $scope.newProject.associatedModels = $rootScope.associatedModels;
            $mdSidenav('project').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    //TODO
    $rootScope.renderToggle = function(item){
        console.log(item);
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
                ContentModel.getSome('contentModel', content.id, 100, 0, 'createdAt DESC').then(function(contentList){
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
        ContentModel.getSome('contentModel', item.id, 100, 0, 'createdAt DESC').then(function(contentList){
            console.log(contentList)
            populateChildren(contentList, 0, 5);
        });
        $mdSidenav('render').toggle();
    };
    
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

        //POWER SET
        function getAllSubsets(theArray) {
          return theArray.reduce(function (subsets, value) {
            return subsets.concat(subsets.map(function (set) {
              return [value].concat(set);
            }));
          }, [[]]);
        };

        console.log(item);

        $scope.item = item;

        //DEPRECIATE .modelType
        if (item.model == 'TASK'){

            $scope.graphData = {
                nodes:[{name:$scope.item.title}], 
                links:[]
            };
            if ($scope.item.project){
                $scope.assoicationFilter = [{text:'PROJECT | '+$scope.item.project.title}];
            }

        }
        if (item.model == 'TIME'){

            $scope.graphData = {
                nodes:[{name:$scope.item.amount}], 
                links:[]
            };

            $scope.assoicationFilter = [{text:'TASK | '+$scope.item.task.title}];

        }

        //TODO BUILD THESE --> LOAD ASSOCIATION

        for (x in $scope.item.associatedModels){
            //HACK?
            var length = $scope.graphData.nodes.length;
            $scope.graphData.nodes.push({name:$scope.item.associatedModels[x].type})//$scope.item.associatedModels[x].address});
            $scope.graphData.links.push({value:1, source:0, target:length});
        }

        //TODO: GROUP STUDY -- FACTOR INFORMATION IN DATASERVICE TO GRAPH THEORETIC FORM TO DISCOVER GROUP PROPS
        //$scope.graphData = {
        //    nodes:[], 
        //    links:[]
        //};
        //var powerSet = getAllSubsets(['A','B','C','D','E','F']);
        //var powerSet = getAllSubsets(['A','B','C','D']);
        //powerSet.shift();
        //for (x in powerSet){
        //    $scope.graphData.nodes.push({name:powerSet[x]})
        //    for (y in powerSet){
        //        $scope.graphData.links.push({value:1, source:parseInt(x), target:parseInt(y)});
        //    }
        //}

        //TEST!
        $scope.graphOptions = {
            chart: {
                type: 'forceDirectedGraph',
                height: 450,
                //width: (function(){ return nv.utils.windowSize().width })(),
                margin:{top: 0, right: 0, bottom: 0, left: 0},
                color: function(d){
                    return  d3.scale.category20()(d.group)
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

        //TODO: ASSOCIATION MODEL
        ValidationModel.getSome(item.model.toLowerCase(), item.id, 100, 0, 'createdAt DESC').then(function(validationModels){

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

            //TODO: SHOULD STORE COUNT AT SCALE.. AKA 1000 VALIDAIONS WILL CRASH --> SORED IN ASSOCIATION
            $scope.validationSumObj = {};

            if ($scope.validations.length > 0){
                for (y in $scope.validations){
                    console.log($scope.validations[y].validation);
                    for (x in Object.keys($scope.validations[y].validation)){
                        if(!$scope.validationSumObj[Object.keys($scope.validations[y].validation)[x]]){$scope.validationSumObj[Object.keys($scope.validations[y].validation)[x]]=$scope.validations[y].validation[Object.keys($scope.validations[y].validation)[x]]}
                        else{$scope.validationSumObj[Object.keys($scope.validations[y].validation)[x]]+=$scope.validations[y].validation[Object.keys($scope.validations[y].validation)[x]]}
                    }

                }
                console.log($scope.validationSumObj);
                for (x in Object.keys($scope.validationSumObj)){
                    $scope.validationColumnRender.series[0].data.push($scope.validationSumObj[Object.keys($scope.validationSumObj)[x]]/$scope.validations.length);
                    $scope.validationColumnRender.xAxis.categories.push(Object.keys($scope.validationSumObj)[x]);
                }
            }

        });
    
        $mdSidenav('renderValidation').toggle();

    };


    //MEMBER CARD TOGGLE
    $rootScope.renderReputationToggle = function(item){



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
        for (x in Object.keys($scope.reputation)){
            if ($scope.reputation[Object.keys($scope.reputation)[x]]){
                $scope.chart.series[0].data.push($scope.reputation[Object.keys($scope.reputation)[x]]);
                $scope.chart.xAxis.categories.push(Object.keys($scope.reputation)[x]);
            }
        }
        $mdSidenav('renderReputation').toggle();
    };

    $rootScope.taskToggle = function(){
        if($scope.currentUser){
            $scope.newTask = {};
            $scope.newTask.associatedModels = $rootScope.associatedModels;
            $mdSidenav('task').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.timeToggle = function(){
        if($scope.currentUser){
            $scope.newTime = {};
            $scope.newTime.startTime = new Date();
            $scope.newTime.startTime.setMilliseconds(0);
            $scope.newTime.associatedModels = $rootScope.associatedModels;
            $mdSidenav('time').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.tokensToggle = function(item){
        $scope.tokens = []
        if (item.tokens){$scope.tokens = item.tokens;}
        $mdSidenav('tokens').toggle();
    };

    $rootScope.transactionToggle = function(item){
        if($scope.currentUser){$mdSidenav('transaction').toggle();}
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.validationToggle = function(item){

        if($scope.currentUser){

            $scope.item = item;
            $scope.newValidation = {};
            $scope.newValidation.validation = {};
            $scope.newValidation.validation.general = 0;

            console.log($scope.item);

            //SELF CREATED VALIDATION ON CREATE --> COOL
            //TIME <--> TASK FROM ON TIME CREATE
            //TASK <--> PROJ FROM ON TASK CREATE

            if ($scope.item.model == 'TASK'){

                //TODO
                //WHAT CONTEXT ARE WE LOOKING AT THE MODEL
                //PREVIOUS VALIDATIONS.. WHAT CONTEXT ARE WE VIEWING THE TASK | DYNAMIC FILTER

                //DEPRECIATE .project && .task
                $scope.newValidation.associatedModel = [{text:'PROJECT | '+$scope.item.project.title, id:$scope.item.project.id, title:$scope.item.project.title, type:'PROJECT'}];

                $scope.newValidation.associatedModels = [{type:'TASK', address:item.id}];

                $scope.tags = item.tags;
                for (x in $scope.tags){$scope.newValidation.validation[$scope.tags[x]] = 0;}

            }

            if ($scope.item.model == 'TIME'){

                //TODO
                //WHAT CONTEXT ARE WE LOOKING AT THE MODEL
                //PREVIOUS VALIDATIONS.. WHAT CONTEXT ARE WE VIEWING THE TIME

                //DEPRECIATE .project && .task
                $scope.newValidation.associatedModel = [{text:'TASK | '+$scope.item.task.title, id:$scope.item.project.id, title:$scope.item.project.title, type:'TASK'}];

                $scope.newValidation.associatedModels = [{type:'TIME', address:item.id}];

                if($scope.item.task.tags){
                    $scope.tags = item.task.tags;
                    for (x in $scope.tags){$scope.newValidation.validation[$scope.tags[x]] = 0;}
                }

                //SELF DEFINED CONTEXT IN TIME
                //BRIDGE BTW TASK CONTEXT (SELF DEFINED IN TIME TO PROJ CONTEXT VALIDATED THROUGH TASK) IE
                    //IF NOT CONTEXT VALIDATED IN TASK <-> PROJ IT IS 0. 
                if($scope.item.tags){
                    $scope.tags = Array.from(new Set($scope.tags.concat(item.tags)));
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
                     
            $mdSidenav('validation').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    //CONFIRM, INFORMATION
    //RENDER, RENDER REPUTATION, INFORMATION
    //TODO: GLOBAL FUNCTIONS
    //$rootScope.createProjectMember = function(){};
    //$rootScope.createView = function(){};

    //TODO: ASSOCIATED MODELS
    $scope.createContent = function(item) {
        if ($scope.currentUser){
            //RENDER | nested Reply
            if(item){$scope.newContent.associatedModels = [{type:'CONTENT', id:content.id}];}
            $scope.newContent.type = $scope.selectedType;
            $scope.newContent.user = $scope.currentUser.id;
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
        if ($scope.currentUser){
            $scope.newItem.user = $scope.currentUser.id;
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
        if ($scope.currentUser){

            $scope.newOrder.user = $scope.currentUser.id;
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

            $scope.newOrder.identiferSet = $scope.newOrder.identiferSet.join(",");
            $scope.newOrder.identiferSet1 = $scope.newOrder.identiferSet1.join(",");
            $scope.newOrder.amountSet = $scope.newOrder.amountSet.join(",");
            $scope.newOrder.amountSet1 = $scope.newOrder.amountSet1.join(",");

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
        if ($scope.currentUser){
            if ($scope.newProject.tags){
                $scope.newProject.tags = $scope.newProject.tags.map(function(obj){
                    return obj.text;
                }).join(",");
            }
            //NOT ON FRONTEND
            $scope.newProject.user = $scope.currentUser.id;
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
        if($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:item.model, id:item.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
            $scope.item.reactions[type]++;
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createTask = function(content) {
        if ($scope.currentUser){
            $scope.newTask.user = $scope.currentUser.id;
            if ($scope.newTask.tags){
                $scope.newTask.tags = $scope.newTask.tags.map(function(obj){
                    return obj.text;
                }).join(",");
            }
            //PATCH!!!
            if ($scope.newTask.associatedModels){
                for (x in $scope.newTask.associatedModels){
                    $scope.newTask[$scope.newTask.associatedModels[x].type.toLowerCase()] = $scope.newTask.associatedModels[x].address
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
        if($scope.currentUser){
            $scope.newTime.user = $scope.currentUser.id;
            $scope.newTime.createdAt = $scope.newTime.startTime;
            if ($scope.newTime.tags){
                $scope.newTime.tags = $scope.newTime.tags.map(function(obj){
                    return obj.text;
                }).join(",");
            }
            //PATCH!!!
            if ($scope.newTime.associatedModels){
                for (x in $scope.newTime.associatedModels){
                    $scope.newTime[$scope.newTime.associatedModels[x].type.toLowerCase()] = $scope.newTime.associatedModels[x].address
                }
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
        if ($scope.currentUser){
            $scope.newTransaction.user = $scope.currentUser.id
            if ($scope.newTransaction.tags){
                $scope.newTransaction.tags = $scope.newTransaction.tags.map(function(obj){
                    return obj.text
                }).join(",");
            }
            $scope.newTransaction.from = $scope.newTransaction.from[0].id;
            $scope.newTransaction.to = $scope.newTransaction.to[0].id;
            console.log($scope.newTransaction);
            //information in amountset
            TransactionModel.create($scope.newTransaction).then(function(model){
                $scope.confirm = $scope.newTransaction;
                $scope.confirm.model = 'TRANSACTION';
                $scope.newTransaction.amoundSet = {};
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
        if ($scope.currentUser){

            $scope.newValidation.user = $scope.currentUser.id;

            console.log($scope.newValidation);

            if ($scope.newValidation.associatedModel){

                console.log($scope.newValidation.associatedModel)

                $scope.newValidation.associatedModels = $scope.newValidation.associatedModels.concat({
                    type:$scope.newValidation.associatedModel[0].type, address:$scope.newValidation.associatedModel[0].id,
                });

                console.log($scope.newValidation);
                //if$scope.newValidation.associatedModels.length 
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

    $scope.login = function(){
        var data = JSON.stringify($scope.newLogin);
        console.log($scope.newLogin)
        $http({method:'POST', url:'/auth/local', data:data}).then(function(newModel){
            console.log(newModel.data);
            //MEG
            config.currentUser = newModel.data;
            $rootScope.currentUser = newModel.data;
            $window.location.reload();
            $location.path('/');
        });
    };

    $scope.loginToggle = function(){

        //$scope.pop();

        $mdSidenav('nav').close();
        $mdSidenav('subNav').close();
        $mdSidenav('content').close();
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
        //var location = searchObject($scope.content, function (value) { return value != null && value != undefined && value.id == content.id; });
        //location[0].value.showReply = !location[0].value.showReply;
        //updateObject($scope.content, location[0].value, location[0].path);
        $scope.item.showReply = !$scope.item.showReply;
    };

    $scope.sideNavToggle = function(){
        $mdSidenav('subNav').close();
        $mdSidenav('content').close();
        $mdSidenav('login').close();
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