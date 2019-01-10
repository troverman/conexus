angular.module( 'conexus.nav', [
])

.controller( 'NavCtrl', ['$location', '$mdSidenav', '$q', '$rootScope', '$sce', '$scope', '$state', 'config', 'ContentModel', 'ItemModel', 'OrderModel', 'ProjectModel', 'ReactionModel', 'SearchModel', 'TaskModel', 'TimeModel', 'TransactionModel', 'ValidationModel', 'UserModel', function NavController( $location, $mdSidenav, $q, $rootScope, $sce, $scope, $state, config, ContentModel, ItemModel, OrderModel, ProjectModel, ReactionModel, SearchModel, TaskModel, TimeModel, TransactionModel, ValidationModel, UserModel ) {
    $scope.currentUser = config.currentUser;
    $scope.chart = {};
    $scope.confirm = {};
    $scope.inputVector = [];
    $scope.outputMatix = [];
    $scope.outputVector = [];
    $scope.item = {};
    $scope.inverted = false;
    $scope.isInformation = false;
    $scope.selectedOrderType = 'ONBOOKS';
    $scope.selectedType = 'POST';
    $scope.validationColumnRender = {};
    //$rootScope.currentUser = config.currentUser;

    if ($scope.currentUser){
        $scope.newContent = {};
        $scope.newItem = {};
        $scope.newOrder = {};
        $scope.newProject = {};
        $scope.newReaction = {};
        $scope.newTask = {};
        $scope.newTime = {};
        $scope.newTransaction = {};
        $scope.newTransaction = {};
        $scope.newValidation = {};
        $scope.newTransaction.from = [{text:$scope.currentUser.username, id:$scope.currentUser.id}];
        $scope.newContent.associatedModels = [{text: $scope.currentUser.username, type:'PROFILE', id:$scope.currentUser.id}];
        $scope.notificationCount = 0;
        //$scope.notifications = 0;
        //TODO: BETTER
        UserModel.getByUsername($scope.currentUser.username).then(function(member){
            $scope.memberValidate = member;
            $scope.balance = member.balance;
            $scope.reputation = member.reputation;
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
            //if ($scope.newContent.associatedModels){$scope.newContent.associatedModels.push({text: $scope.currentUser.username, type:'PROFILE', address:$scope.currentUser.id});}
            //else{$scope.newContent.associatedModels = [{text: $scope.currentUser.username, type:'PROFILE', address:$scope.currentUser.id}];}
            $scope.newContent.associatedModels = $scope.newContent.associatedModels.map(function(obj){
                obj.text = obj.type+' | '+obj.address;
                return obj;
            });
            console.log($scope.newContent.associatedModels);
            $mdSidenav('content').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.filterToggle = function(type){
        //POSTIONS / MARKETS
        //LEDGER
        $scope.type = type;
        console.log($rootScope.baseMarkets);
        $mdSidenav('filter').toggle()

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

        $scope.item = item;

        if (item.model == 'TASK'){
            $scope.assoicationFilter = [{text:'PROJECT | '+$scope.item.project.title}];
        }
        if (item.model == 'TIME'){
            $scope.assoicationFilter = [{text:'TASK | '+$scope.item.task.title}];
        }

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

    $rootScope.renderReputationToggle = function(item){
        $scope.item = item;
        if (item.reputation){$scope.reputation = item.reputation;$scope.item.user = item}
        if (item.user){$scope.reputation = item.user.reputation}
        //BUG
        console.log(item);
        if (item.follower){$scope.reputation = item.follower.reputation;$scope.item.user = item.follower}
        if (item.followed){$scope.reputation = item.followed.reputation;$scope.item.user = item.followed}
        $scope.chart = {
            chart: {zoomType: 'x'},
            series: [{
                id: 'Reputation',
                type: 'bar',
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

    //TODO: CHANGE FROM ADDRESS TO ID
    $rootScope.validationToggle = function(item){
        //association anatomy . . 
        //[{
        //    type:'TASK',
        //    address:item.id, 
        //    context:{}
        //}];
        //TIME TO FINALLY DEPRECIATE ALL THE ISH! >:)
        //VALIDATIONS ARE BINARY!
        if($scope.currentUser){

            $scope.item = item;
            console.log($scope.item);

            //DOESNT REALLY WORK.. 
            $scope.newValidation = {};
            $scope.newValidation.validation = {};
            $scope.newValidation.validation.general = 0;
            console.log($scope.newValidation);

            //SELF CREATED VALIDATION ON CREATE --> COOL
            //TODO, TIME <--> TASK FROM ON TIME CREATE

            if ($scope.item.model == 'TASK'){
                //PATCH --> WE WILL CHANGE
                //PREVIOUS VALIDATIONS.. WHAT CONTEXT ARE WE VIEWING THE TASK
                if ($scope.item.project){
                    $scope.newValidation.associatedModel = [{text:'PROJECT | '+$scope.item.project.title, type:'PROJECT',address:$scope.item.project.id, model:$scope.item.project}];
                }
                $scope.newValidation.associatedModels = [{type:'TASK',address:item.id, connections:{}}];
            }

            if ($scope.item.model == 'TIME'){
                //PREVIOUS VALIDATIONS.. WHAT CONTEXT ARE WE VIEWING THE TIME
                if ($scope.item.task){
                    $scope.newValidation.associatedModel = [{text:'TASK | '+$scope.item.task.title, type:'TASK',address:$scope.item.task.id, model:$scope.item.task}];
                }
                $scope.newValidation.associatedModels = [{type:'TIME',address:item.id}];
            }

            //PREVIOUS VALIDATION CONTEXT.. 
            if ($scope.item.model == 'VALIDATION'){
                $scope.newValidation.associatedModel = [{text:'VALIDATION | '+$scope.item.id, type:'VALIDATION',address:$scope.item.id}];
                $scope.newValidation.associatedModels = [{type:'VALIDATION',address:item.id}];
            }

            $scope.newValidation.associatedModels.concat($scope.newValidation.associatedModel);
     
            if ($scope.item.model == 'CONTENT'){} //--> PROJ
            if ($scope.item.model == 'ITEM'){} //--> PROJ
            if ($scope.item.model == 'MEMBER'){} //--> PROJ
            if ($scope.item.model == 'ORDER'){} //--> PROJ
            if ($scope.item.model == 'PROJECT'){} //--> PROJ
            if ($scope.item.model == 'TRANSACTION'){} //--> PROJ
        
            //TODO: SPLIT OPERATIONS CONTAINED IN CTRL
            $scope.tags = [];
            if ($scope.item.model == 'TASK'){
                $scope.tags = item.tags;
                for (x in $scope.tags){$scope.newValidation.validation[$scope.tags[x]] = 0;}
            }
            //TODO: WATCH TAGS

            //TEMP | TODO: ASSOCIATIONS | BASED ON THE ASSOCIATION
            if ($scope.item.model == 'TIME'){
                if($scope.item.task.tags){
                    $scope.tags = item.task.tags;
                    for (x in $scope.tags){$scope.newValidation.validation[$scope.tags[x]] = 0;}
                }
                //SELF DEFINED CONTEXT IN TIME
                //BRIDGE BTW TASK CONTEXT (SELF EFINED IN TIME TO PROJ CONTEXT VALIDATED THROUGH TASK) IE
                    //IF NOT CONTEXT VALIDATED IN TASK <-> PROJ IT IS 0. 
                if($scope.item.tags){
                    $scope.tags = Array.from(new Set($scope.tags.concat(item.tags)));
                    for (x in $scope.tags){$scope.newValidation.validation[$scope.tags[x]] = 0;}
                }
            }


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
                $scope.confirm.modelType = 'CONTENT';
                $scope.newContent = {};
                $mdSidenav('content').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 5000);
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
                $scope.confirm.modelType = 'ITEM';
                $scope.newItem = {};
                $mdSidenav('item').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 5000);
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
                $scope.confirm.modelType = 'ORDER';
                $mdSidenav('order').close();
                $scope.newOrder = {};
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 5000);
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
                $scope.confirm.modelType = 'PROJECT';
                $scope.newProject = {};
                $mdSidenav('project').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 5000);
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
                $scope.confirm.modelType = 'TASK';
                $scope.newTask = {};
                $mdSidenav('task').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 5000);
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
                $scope.confirm.modelType = 'TIME';
                $scope.newTime = {};
                $mdSidenav('time').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 5000);
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
                $scope.confirm.modelType = 'TRANSACTION';
                $scope.newTransaction = {};
                $mdSidenav('transaction').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 5000);
            });
        }
        else{$mdSidenav('transaction').close();$mdSidenav('login').toggle()}
    };

    $scope.createValidation = function(){
        if ($scope.currentUser){
            //TODO 
            $scope.newValidation.user = $scope.currentUser.id;
            //PATCH!!! DEPREC
            if ($scope.newValidation.associatedModels){
                for (x in $scope.newValidation.associatedModels){
                   $scope.newValidation[$scope.newValidation.associatedModels[x].type.toLowerCase()] = $scope.newValidation.associatedModels[x].address;
                }
            }
            console.log($scope.newValidation);
            ValidationModel.create($scope.newValidation).then(function(model) {
                $scope.confirm = $scope.newValidation;
                $scope.confirm.modelType = 'VALIDATION';
                $scope.newValidation = {};
                $mdSidenav('validation').close();
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 5000);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.loginToggle = function(){
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