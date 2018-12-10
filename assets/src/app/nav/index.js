angular.module( 'conexus.nav', [
])

.controller( 'NavCtrl', ['$location', '$mdSidenav', '$rootScope', '$sce', '$scope', '$state', 'config', 'PostModel', 'TransactionModel', function NavController( $location, $mdSidenav, $rootScope, $sce, $scope, $state, config, PostModel, TransactionModel ) {
    $scope.currentUser = config.currentUser;
    $scope.chart = {};
    $scope.confirm = {};
    $scope.inputVector = [];
    $scope.newContent = {};
    $scope.newTransaction = {};
    $scope.outputMatix = [];
    $scope.outputVector = [];
    $scope.item = {};

    $scope.selectedType = 'POST';

    if ($scope.currentUser){
        $scope.newTransaction.from = $scope.currentUser.id;
    }

    //TODO: FACTOR LOADING HERE
    $rootScope.$on("$stateChangeStart", function() {
        $rootScope.to = null;
        $rootScope.associatedModel = null;
        $mdSidenav('nav').close();
        $mdSidenav('subNav').close();
        $mdSidenav('content').close();
        $mdSidenav('login').close();
        $mdSidenav('render').close();
        $mdSidenav('tokens').close();
        $mdSidenav('transaction').close();
        //$rootScope.memberUsername = null;
        //$rootScope.projectTitle = null;
    });
    
    $rootScope.$on("$stateChangeSuccess", function() {
        window.scrollTo(0, 0)
    });

    $scope.$watch('$root.to', function() {
        $scope.newTransaction.to = $rootScope.to;
    });

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

    //OVERKILL
    $rootScope.contentToggle = function(item){
        if($scope.currentUser){$mdSidenav('content').toggle();}
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.orderToggle = function(item){
        if($scope.currentUser){$mdSidenav('order').toggle();}
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.projectToggle = function(item){
        if($scope.currentUser){$mdSidenav('project').toggle();}
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.renderToggle = function(item){
        $scope.item = item;
        $mdSidenav('render').toggle();
    };

    $rootScope.renderReputationToggle = function(item){
        $scope.item = item;
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
        for (x in Object.keys($scope.item.user.reputation)){
            if ($scope.item.user.reputation[Object.keys($scope.item.user.reputation)[x]]){
                $scope.chart.series[0].data.push($scope.item.user.reputation[Object.keys($scope.item.user.reputation)[x]]);
                $scope.chart.xAxis.categories.push(Object.keys($scope.item.user.reputation)[x]);
            }
        }
        $mdSidenav('renderReputation').toggle();
    };

    $rootScope.taskToggle = function(item){
        if($scope.currentUser){$mdSidenav('task').toggle();}
        else{$mdSidenav('login').toggle();}
    };

    $rootScope.timeToggle = function(item){
        if($scope.currentUser){$mdSidenav('time').toggle();}
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
        if($scope.currentUser){$mdSidenav('validate').toggle();}
        else{$mdSidenav('login').toggle();}
    };

    //CONFIRM, INFORMATION
    //RENDER, RENDER REPUTATION, INFORMATION

    //TODO: GLOBAL FUNCTIONS
    //$rootScope.createContent = function(){};
    //$rootScope.createItem = function(){};
    //$rootScope.createOrder = function(){};
    //$rootScope.createProject = function(){};
    ////$rootScope.createProjectMember = function(){};
    //$rootScope.createReaction = function(){};
    //$rootScope.createTask = function(){};
    //$rootScope.createTime = function(){};
    //$rootScope.createTransaction = function(){};
    //$rootScope.createValidation = function(){};
    //$rootScope.createView = function(){};

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
    $scope.createContent = function() {
        if ($scope.currentUser){
            $scope.newContent.user = $scope.currentUser.id;
            if ($scope.newContent.tags){
                $scope.newContent.tags = $scope.newContent.tags.map(function(obj){
                    return obj.text
                }).join(",");
            }
            $scope.newContent.type = $scope.selectedType;
            PostModel.create($scope.newContent).then(function(model) {

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
        else{$mdSidenav('content').close();$mdSidenav('login').toggle()}
    };

    //$scope.createItem = function() {};
    //$scope.createOrder = function() {};
    //$scope.createTask = function() {};

    $scope.createTransaction = function(){
        if ($scope.currentUser){
            $scope.newTransaction.tags = $scope.newTransaction.tags.map(function(obj){
                return obj.text
            }).join(",");
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

    $scope.selectType = function(type){$scope.selectedType = type;};

}]);