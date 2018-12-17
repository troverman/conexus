angular.module( 'conexus.nav', [
])

.controller( 'NavCtrl', ['$location', '$mdSidenav', '$rootScope', '$sce', '$scope', '$state', 'config', 'ContentModel', 'ItemModel', 'ProjectModel', 'ReactionModel', 'TaskModel', 'TimeModel', 'TransactionModel', 'ValidationModel', 'UserModel', function NavController( $location, $mdSidenav, $rootScope, $sce, $scope, $state, config, ContentModel, ItemModel, ProjectModel, ReactionModel, TaskModel, TimeModel, TransactionModel, ValidationModel, UserModel ) {
    $scope.currentUser = config.currentUser;
    $scope.chart = {};
    $scope.confirm = {};
    $scope.inputVector = [];
    $scope.newContent = {};
    $scope.newOrder = {};
    $scope.newTransaction = {};
    $scope.outputMatix = [];
    $scope.outputVector = [];
    $scope.item = {};
    
    $scope.selectedOrderType = 'ONBOOKS';
    $scope.selectedType = 'POST';

    //$rootScope.currentUser = config.currentUser;

    if ($scope.currentUser){

        $scope.newTransaction.from = $scope.currentUser.id;
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

        $rootScope.to = null;
        $rootScope.associatedModel = null;
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
        //$rootScope.memberUsername = null;
        //$rootScope.projectTitle = null;
    });
    
    $rootScope.$on("$stateChangeSuccess", function() {window.scrollTo(0, 0)});
    
    $scope.$watch('$root.to', function() {$scope.newTransaction.to = $rootScope.to;});

    //TODO: BETTER
    $scope.$watch('$root.globalTokens', function() {
        $scope.inputVector = $rootScope.globalTokens;
        $scope.outputMatix = [];
        $scope.outputVector = [];
    });

    //TODO: CHANGE PARENT TO ASSOCIATED MODELS
    //TODO: FIX
    $scope.$watch('$root.associatedModel', function() {
        if ($rootScope.associatedModel){
            
            $scope.newContent.associatedModels = $rootScope.associatedModel.address;
            $scope.newContent.type = $rootScope.associatedModel.type;

            //CHANGE
            if ($rootScope.associatedModel.type == 'PROFILE'){
                $scope.newContent.profile = $rootScope.associatedModel.address;
            }
            if ($rootScope.associatedModel.type == 'PROJECT'){
                $scope.newContent.project = $rootScope.associatedModel.address;
            }

            //ASSOCIATION (MOTION) // SET OF VOTES []; LINKAGE SCORES | ASSOCIATION | 'DISCRITIZEATION' PROTOCOL

            //CONTENT
            //ITEM
            //MARKET
            //MARKETPAIR
            //MEMBER (PROFILE), 
            //ORDER
            //PROJECT
            //REACTION
            //TASK
            //TIME
            //TRANSACTION
            //VALIDATION
            //VIEW

        }
    });

    $scope.inverted = false
    $scope.invertMarket = function() {
        //$scope.market = [$scope.market, $scope.market = $scope.market1][0];
        var temp = $scope.newOrder.identiferSet;
        $scope.newOrder.identiferSet = $scope.newOrder.identiferSet1;
        $scope.newOrder.identiferSet1 = temp;
        console.log($scope.newOrder)
        $scope.inverted = !$scope.inverted;
        //$scope.$apply();
    };

    $scope.loadAssociations = function(query){

        return [
            {text:'troverman', id:11, type:'PROFILE'},
            {text:'NOVO', id:112, type:'PROJECT'},
            {text:'conexus', id:1122, type:'PROJECT'},
        ];

    };

    $scope.loadTags = function(query){

        return [
            {text:'create'},
            {text:'love'},
            {text:'joy'},
        ];

    };

    //OVERKILL
    $rootScope.contentToggle = function(){

        if($scope.currentUser){
            $scope.newContent = {};
            $scope.newContent.associatedModels = $rootScope.associatedModels;
            $mdSidenav('content').toggle();
        }
        else{$mdSidenav('login').toggle();}

    };

    $rootScope.filterToggle = function(item){
        $mdSidenav('filter').toggle();
    };

    $rootScope.itemToggle = function(){
        if($scope.currentUser){
            $scope.newItem = {};
            $mdSidenav('item').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.informationToggle = function(item){$mdSidenav('information').toggle()};

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
            console.log('yo',$scope.newProject)
            $mdSidenav('project').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.renderToggle = function(item){
        $scope.item = item;
        $mdSidenav('render').toggle();
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
        $scope.tokens = item;
        //$rootScope.globalTokens;
        //TRAVERSAL FOR TOKENS AND TOKENS ASSOCIATIONS -- COMPLETE PIC
        $mdSidenav('tokens').toggle();
    };

    $rootScope.transactionToggle = function(item){
        if($scope.currentUser){$mdSidenav('transaction').toggle();}
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.validateToggle = function(item){
        if($scope.currentUser){
            console.log(item);
            $scope.item = item;
            $scope.newValidation = {};
            $scope.newValidation.validation = {};
            $scope.tags = [];

            if(item.tags){
                $scope.tags = item.tags.split(',');
                $scope.newValidation.validation.general = 0;
                for (x in $scope.tags){$scope.newValidation.validation[$scope.tags[x]] = 0;}
            }

            //TEMP | TODO: ASSOCIATIONS

            //BASED ON THE ASSOCIATION.
            if (item.task){
                if(item.task.tags){
                    $scope.tags = item.task.tags.split(',');
                    $scope.newValidation.validation.general = 0;
                    for (x in $scope.tags){$scope.newValidation.validation[$scope.tags[x]] = 0;}
                }
            }

            $mdSidenav('validate').toggle();
        }
        else{$mdSidenav('login').toggle();}
    };

    //CONFIRM, INFORMATION
    //RENDER, RENDER REPUTATION, INFORMATION

    //TODO: GLOBAL FUNCTIONS
    //$rootScope.createContent = function(){};
    //$rootScope.createItem = function(){};
    //$rootScope.createOrder = function(){};
    //$rootScope.createProject = function(){};
    //$rootScope.createProjectMember = function(){};
    //$rootScope.createTask = function(){};
    //$rootScope.createTime = function(){};
    //$rootScope.createTransaction = function(){};
    //$rootScope.createValidation = function(){};
    //$rootScope.createView = function(){};

    //WORK MORE ON RENDER
    $scope.createReaction = function(){
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

    //TODO: ASSOCIATED MODELS
    $scope.createContent = function(content) {
        if ($scope.currentUser){
            //if(content){$scope.newContent.associatedModels = [{type:'CONTENT', id:content.id}];}
            //if!($scope.newContent.associatedModels = [];)

            $scope.newContent.type = $scope.selectedType;
            $scope.newContent.user = $scope.currentUser.id;

            if ($scope.newContent.tags){
                $scope.newContent.tags = $scope.newContent.tags.map(function(obj){
                    return obj.text;
                }).join(",");
            }

            //TODO: DROPDOWN
            if ($scope.newContent.associatedModels){
                $scope.newContent.associatedModels = $scope.newContent.associatedModels.map(function(obj){
                    return {id:obj.text};
                });
            }

            //CONTENT, TASK, TIME, TRANSACTION, ORDER, PROJECT

            ContentModel.create($scope.newContent).then(function(model) {

                $scope.confirm.modelType = 'CONTENT';
                $scope.confirm = $scope.newContent;
                $scope.newContent = {};

                $mdSidenav('content').close();

                //setTimeout(function () {
                //    $mdSidenav('confirm').open();
                //}, 500);
                //setTimeout(function () {
                //    $mdSidenav('confirm').close();
                //}, 5000);

            });

        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createItem = function(content) {
        if ($scope.currentUser){
        }
        else{$mdSidenav('login').toggle()}
    };
    
    $scope.createOrder = function(content) {
        if ($scope.currentUser){

            $scope.newOrder.user = $scope.currentUser.id;
            $scope.newOrder.type = $scope.selectedOrderType;

            console.log($scope.newOrder);

            //OrderModel.create($scope.newOrder).then(function(model) {
            //    $scope.orders.push($scope.newOrder);
            //    $scope.newOrder = {};
            //});

            $mdSidenav('order').close();
            setTimeout(function () {
                $mdSidenav('confirm').open();
            }, 500);
            setTimeout(function () {
                $mdSidenav('confirm').close();
            }, 5000);

        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createProject = function(content) {
        if ($scope.currentUser){
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createTask = function(content) {
        if ($scope.currentUser){
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createTime = function(){
        if($scope.currentUser){
            $scope.newTime.user = $scope.currentUser.id;
            //HMM
            $scope.newTime.createdAt = $scope.newTime.startTime;
            $scope.newTime.tags = $scope.newTime.tags.map(function(obj){
                return obj.text;
            }).join(",");
            console.log($scope.newTime);
            TimeModel.create($scope.newTime).then(function(model){
                $scope.newTime = {};
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createTransaction = function(){
        if ($scope.currentUser){
            $scope.newTransaction.tags = $scope.newTransaction.tags.map(function(obj){
                return obj.text
            }).join(",");
            console.log($scope.newTransaction)
            TransactionModel.create($scope.newTransaction).then(function(model){

                $scope.confirm.modelType = 'TRANSACTION';
                $scope.confirm = $scope.newTransaction;
                $scope.newTransaction = {};

                $mdSidenav('transaction').close();
                //setTimeout(function () {
                //    $mdSidenav('confirm').open();
                //}, 500);
                //setTimeout(function () {
                //    $mdSidenav('confirm').close();
                //}, 2000);

            });
        }
        else{$mdSidenav('transaction').close();$mdSidenav('login').toggle()}
    };

    $scope.createValidation = function(){
        if ($scope.currentUser){
        }
        else{$mdSidenav('login').toggle()}
    };


    $scope.loginToggle = function(){
        $mdSidenav('nav').close();
        $mdSidenav('subNav').close();
        $mdSidenav('content').close();
        $mdSidenav('render').close();
        $mdSidenav('tokens').close();
        $mdSidenav('transaction').close();
        $mdSidenav('login').toggle();
    };

    $scope.sideNavToggle = function(){
        $mdSidenav('subNav').close();
        $mdSidenav('content').close();
        $mdSidenav('login').close();
        $mdSidenav('render').close();
        $mdSidenav('tokens').close();
        $mdSidenav('transaction').close();
        $mdSidenav('nav').toggle();
    };

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

    $scope.selectOrderType = function(type){$scope.selectedOrderType = type;};
    $scope.selectType = function(type){$scope.selectedType = type;};

}]);