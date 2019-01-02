angular.module( 'conexus.home', [
])

.config(['$stateProvider', function config( $stateProvider ) {

    $stateProvider.state( 'home', {
        url: '/',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'home/index.tpl.html',
            }
        }
    })
    .state( 'home.intro', {
        url: '',
        views: {
            "homeIntro": {
                controller: 'IntroCtrl',
                templateUrl: 'home/templates/intro.tpl.html'
            }
        },
        resolve:{
            contentList: ['ContentModel', function(ContentModel){
                return ContentModel.getSome('', '', 10, 0, 'createdAt DESC');
            }],
            members: ['UserModel', function(UserModel){
                return UserModel.getSome('', '', 10, 0, 'createdAt DESC');
            }],
            orders: ['OrderModel', function(OrderModel) {
                return OrderModel.getSome('', '', '', 10, 0, 'createdAt DESC');
            }],
            projects: ['ProjectModel', function(ProjectModel) {
                return ProjectModel.getSome('', '', 15, 0, 'createdAt DESC');
            }], 
            tasks: ['TaskModel', function(TaskModel) {
                return TaskModel.getSome('', '', 10, 0, 'createdAt DESC');
            }],
            time: ['TimeModel', function(TimeModel) {
                return TimeModel.getSome('', '', 10, 0, 'createdAt DESC');
            }],
            transactions: ['TransactionModel', function(TransactionModel) {
                return TransactionModel.getSome('','', 10, 0, 'createdAt DESC');
            }],
        }
    })
    .state( 'home.feed', {
        url: '',
        views: {
            "homeFeed": {
                controller: 'FeedCtrl',
                templateUrl: 'home/templates/feed.tpl.html'
            }
        },
        resolve:{
            contentList: ['ContentModel', function(ContentModel){
                return ContentModel.getSome('', '', 10, 0, 'createdAt DESC');
            }],
            members: ['UserModel', function(UserModel){
                return UserModel.getSome('', '', 10, 0, 'createdAt DESC');
            }],
            orders: ['OrderModel', function(OrderModel) {
                return OrderModel.getSome('', '', '', 10, 0, 'createdAt DESC');
            }],
            projects: ['ProjectModel', function(ProjectModel) {
                return ProjectModel.getSome('', '', 15, 0, 'createdAt DESC');
            }],
            tasks: ['TaskModel', function(TaskModel) {
                return TaskModel.getSome('', '', 10, 0, 'createdAt DESC');
            }],
            time: ['TimeModel', function(TimeModel) {
                return TimeModel.getSome('', '', 10, 0, 'createdAt DESC');
            }],
            transactions: ['TransactionModel', function(TransactionModel) {
                return TransactionModel.getSome('','', 10, 0, 'createdAt DESC');
            }],
        }
    })

}])

.controller( 'HomeCtrl', ['$scope', '$state', 'config', 'titleService', function HomeController( $scope, $state, config, titleService ) {
    titleService.setTitle('CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    if($scope.currentUser){$state.go('home.feed')}
    else{$state.go('home.intro')}
}])

.controller( 'IntroCtrl', ['$location', '$mdSidenav', '$rootScope', '$sce', '$scope', 'config', 'contentList', 'ContentModel', 'members', 'orders', 'projects', 'ReactionModel', 'SearchModel', 'tasks', 'time', 'titleService', 'transactions', 'UserModel', function HomeController( $location, $mdSidenav, $rootScope, $sce, $scope, config, contentList, ContentModel, members, orders, projects, ReactionModel, SearchModel, tasks, time, titleService, transactions, UserModel ) {
    titleService.setTitle('CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];

    $scope.contentList = contentList;
    $scope.projects = projects;
    $scope.newReaction = {};
    $scope.searchResults = [];
    $scope.tasks = tasks;
    $scope.time = time;

    $scope.contentList = $scope.contentList.map(function(obj){
        obj.model = 'CONTENT';
        return obj;
    });
    $scope.projects = $scope.projects.map(function(obj){
        obj.model = 'PROJECT';
        return obj;
    });
    $scope.tasks = $scope.tasks.map(function(obj){
        if (obj.tags){obj.tags = obj.tags.split(',')}
        obj.model = 'TASK';
        return obj;
    });
    $scope.time = $scope.time.map(function(obj){
        obj.model = 'TIME';
        return obj;
    });
    
    $scope.activity = [].concat.apply([], [$scope.contentList, $scope.projects, $scope.tasks, $scope.time]);
    $scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.activity = $scope.activity.slice(0,100);
    
    $scope.chart = {
        chart: {polar: true},
        series: [{
            id: 'values',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.2, 0.15, 0.15, 0.10, 0.15, 0.15, 0.1],
            color: 'rgba(153,0,0,0.3)',
            fillOpacity: 0.3,
        },{
            id: 'values1',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.2, 0.15, 0.1, 0.1, 0.1, 0.1, 0.15],
            color: 'rgba(0,0,153,0.3)',
            fillOpacity: 0.3,
        },{
            id: 'values2',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.15, 0.1, 0.20, 0.2, 0.20, 0.05, 0.1],
            color: 'rgba(0,153,0,0.3)',
            fillOpacity: 0.3,
        }],
        title: {text: ''},
        xAxis: {
            title: {text: null},
            categories: ['Education', 'Shelter', 'Food', 'Creation', 'Health', 'Security', 'Transparency'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            title: {text: null},
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        legend: {
            enabled: false,
        },
        tooltip: {},
        credits:{enabled:false},
    };

    $scope.createReaction = function(item, type){
        if($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:item.model, id:item.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
            var index = $scope.activity.map(function(obj){return obj.id}).indexOf(item.id);
            $scope.activity[index].reactions[type]++;
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: BETTER
    $scope.filterContent = function(filter) {
        $rootScope.stateIsLoading = true;
        ContentModel.getSome('tag', filter, 20, 0, 'createdAt DESC').then(function(contentList){
            $rootScope.stateIsLoading = false;
            $scope.activity = contentList;
            $scope.loadTags();
        });
    };

    $scope.loginToggle = function(){
        $mdSidenav('login').toggle();
    };

    $scope.reply = function(item){
        if($scope.currentUser){
            var index = $scope.activity.map(function(obj){return obj.id}).indexOf(item.id);
            $scope.activity[index].showReply = !$scope.activity[index].showReply;
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        ContentModel.getSome('search', $scope.searchQuery, 0, 20, 'createdAt DESC').then(function(models){
            $rootScope.stateIsLoading = false;
            $scope.activity = models.map(function(obj){
                obj.model = 'CONTENT';
                return obj;
            });
        });
    };

    //TODO: STORE IN DATA? 
    //TODO: BUILD PROTOCOL
    //TODO: AMOUNT
    $scope.tokenToggle = function(item){

        var tokens = [item.id];

        if (item.model == 'CONTENT'){

            tokens.push('CONTENT');

            if (item.type){
                tokens.push(item.type.toUpperCase());
                tokens.push('CONTENT+'+item.type.toUpperCase());
            }

            if (item.tags){
                for (x in item.tags.split(',')){
                    tokens.push(item.tags.split(',')[x].toUpperCase());
                    tokens.push(item.id+'+'+item.tags.split(',')[x].toUpperCase());
                }
            }

        }

        if (item.model == 'TASK'){

            tokens.push('TASK');

            if (item.tags){
                for (x in item.tags){
                    tokens.push(item.tags[x].toUpperCase());
                    tokens.push(item.id+'+'+item.tags[x].toUpperCase());
                }
            }
        }

        if (item.model == 'TIME'){

            //TODO: AMOUNT
            //item.amount
            tokens.push('TIME');

            if (item.tags){
                for (x in item.tags.split(',')){
                    tokens.push(item.tags.split(',')[x].toUpperCase());
                    tokens.push(item.id+'+'+item.tags.split(',')[x].toUpperCase());
                }
            }
        }

        $rootScope.globalTokens = tokens;
        $mdSidenav('tokens').toggle();

    };

     //VALUE MAP CTA
    $scope.newMember = {};
    $scope.newOrder = [];
    $scope.showIntro = true;
    $scope.showValue = false;
    $scope.showDaily = false;
    $scope.showPersonal = false;
    $scope.showFinal = false;
    $scope.tasks = tasks;

    $scope.continue = function(page){
        console.log(page)
        if (page === 1){
            $scope.showIntro = !$scope.showIntro;
            $scope.showValue = !$scope.showValue;
        }
        if (page === 2){
            $scope.showValue = !$scope.showValue;
            $scope.showDaily = !$scope.showDaily;
        }
        if (page === 3){
            $scope.showDaily = !$scope.showDaily;
            $scope.showPersonal = !$scope.showPersonal;
        }
        if (page === 4){
            $scope.showPersonal = !$scope.showPersonal;
            $scope.showFinal = !$scope.showFinal;
        }

    };

    $scope.createPosition = function(model){
        $scope.newOrder.push([model,'1 UNIVERSALTOKEN+ONMINT']);
    };

}])

.controller( 'FeedCtrl', ['$mdSidenav', '$location', '$rootScope', '$sce', '$scope', 'config', 'contentList', 'ContentModel', 'members', 'orders', 'projects', 'ReactionModel', 'SearchModel', 'tasks', 'time', 'titleService', 'transactions', 'UserModel', function HomeController( $mdSidenav, $location, $rootScope, $sce, $scope, config, contentList, ContentModel, members, orders, projects, ReactionModel, SearchModel, tasks, time, titleService, transactions, UserModel ) {
	titleService.setTitle('CRE8.XYZ');
	$scope.currentUser = config.currentUser;

    $rootScope.associatedModel = {
        address: $scope.currentUser.id,
        type: 'PROFILE',
    };

    //REORGANIZE
    UserModel.getByUsername($scope.currentUser.username).then(function(model){
        $scope.currentUser = model;
    });
    
    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];

	$scope.contentList = contentList;
	$scope.projects = projects;
	$scope.newReaction = {};
	$scope.searchResults = [];
    $scope.tasks = tasks;
	$scope.time = time;

    $scope.contentList = $scope.contentList.map(function(obj){
        obj.model = 'CONTENT';
        return obj;
    });
    $scope.projects = $scope.projects.map(function(obj){
        obj.model = 'PROJECT';
        return obj;
    });
    $scope.tasks = $scope.tasks.map(function(obj){
        if (obj.tags){obj.tags = obj.tags.split(',')}
        obj.model = 'TASK';
        return obj;
    });
    $scope.time = $scope.time.map(function(obj){
        obj.model = 'TIME';
        return obj;
    });
    
    $scope.activity = [].concat.apply([], [$scope.contentList, $scope.projects, $scope.tasks, $scope.time]);
    $scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.activity = $scope.activity.slice(0,100);
    
	$scope.chart = {
        chart: {polar: true},
        series: [{
            id: 'values',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.2, 0.15, 0.15, 0.10, 0.15, 0.15, 0.1],
            color: 'rgba(153,0,0,0.3)',
            fillOpacity: 0.3,
        },{
            id: 'values1',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.2, 0.15, 0.1, 0.1, 0.1, 0.1, 0.15],
            color: 'rgba(0,0,153,0.3)',
            fillOpacity: 0.3,
        },{
            id: 'values2',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.15, 0.1, 0.20, 0.2, 0.20, 0.05, 0.1],
            color: 'rgba(0,153,0,0.3)',
            fillOpacity: 0.3,
        }],
        title: {text: ''},
        xAxis: {
            title: {text: null},
            categories: ['Education', 'Shelter', 'Food', 'Creation', 'Health', 'Security', 'Transparency'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            title: {text: null},
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        legend: {
            enabled: false,
        },
        tooltip: {},
        credits:{enabled:false},
    };

	UserModel.getByUsername($scope.currentUser.username).then(function(member){
		$scope.member = member;
        $scope.balance = member.balance;
        $scope.reputation = member.reputation;
	});

    //IF VALUE MAP | REFACTOR 
    $scope.newOrder = [];
    $scope.newContent = {};
    $scope.transactions = transactions;
    //tags
    //orders, tasks, transactions
    //$scope.orderTags = orders;
    $scope.tasks = $scope.tasks.map(function(obj){
        obj.model = 'TASK';
        return obj;
    });
    $scope.transactions = $scope.transactions.map(function(obj){
        obj.model = 'TRANSACTION';
        return obj;
    });
    $scope.discover = [].concat.apply([], [$scope.tasks, $scope.transactions]);
    //VALUE MAP ^^


    //TEMP | TODO: FIX
    $scope.discover = $scope.discover.map(function(obj){
        var returnObj = {};
        if (obj.model == 'ORDER'){returnObj = obj.identiferSet;}
        if (obj.model == 'TASK'){
            returnObj = obj.tags;
        }
        if (obj.model == 'TRANSACTION'){
            if(obj.ledger){obj.ledger = obj.ledger.split(',')}
            returnObj = obj.ledger;
        }
        return returnObj;
    });

    $scope.discover = [].concat.apply([], $scope.discover);
    $scope.discover = $scope.discover.filter(function(e){return e}); 

    function countInArray(array, value) {
        return array.reduce(function(n, x){ return n + (x === value)}, 0);
    }

    $scope.finalArray = [];
    for (x in $scope.discover){
        var amount = countInArray($scope.discover, $scope.discover[x]);
        if ($scope.finalArray.map(function(obj){return obj.element}).indexOf($scope.discover[x]) == -1){
            $scope.finalArray.push({amount:amount, element:$scope.discover[x]})
        }
    }
    $scope.finalArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 

    $scope.addToOrder = function(model){
        $scope.newOrder.push([model,'0.1 UNIVERSAL TOKEN']);
    };

    $scope.contentToggle = function(){
        $mdSidenav('content').toggle();
    };

    $scope.createOrder = function(){
        $scope.newOrder = [];
    };

    //TODO: MODEL | CREATE | NESTED?
    $scope.createContent = function(content){
        $scope.newContent.contentModel = content.id;
        $scope.newContent.user = $scope.currentUser.id;
        $scope.newContent.profile = $scope.currentUser.id;
        ContentModel.create($scope.newContent).then(function(model) {
            $scope.newContent = {};
        });
    };

    //TODO: BETTER
    $scope.filterContent = function(filter) {
        $rootScope.stateIsLoading = true;
        ContentModel.getSome('tag', filter, 20, 0, 'createdAt DESC').then(function(contentList){
            $rootScope.stateIsLoading = false;
            $scope.activity = contentList;
            $scope.loadTags();
        });
    };

    //TODO
    $scope.locations = ['Chapel Hill', 'Knoxville', 'Los Angeles', 'New York City']

    //TODO: BETTER | TAG STORAGE
    $scope.loadAssociations = function(){
        $scope.associations = $scope.contentList.map(function(obj){
            var returnObj = {};
            if(obj.tags){obj.tags = obj.tags.split(',')}
            returnObj = obj.tags;
            return returnObj;
        });
        $scope.associations = [].concat.apply([], $scope.associations);
        $scope.associations = $scope.associations.filter(function(e){return e});
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.sortedAssociationArray = [];
        for (x in $scope.associations){
            var amount = countInArray($scope.associations, $scope.associations[x]);
            if ($scope.sortedAssociationArray.map(function(obj){return obj.element}).indexOf($scope.associations[x]) == -1){
                $scope.sortedAssociationArray.push({amount:amount, element:$scope.associations[x]})
            }
        }
        $scope.sortedAssociationArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    }
    //$scope.loadAssociations();

    //TODO: BETTER | TAG STORAGE
    $scope.loadTags = function(){
        $scope.tags = $scope.contentList.map(function(obj){
            var returnObj = {};
            if(obj.tags){obj.tags = obj.tags.split(',')}
            returnObj = obj.tags;
            return returnObj;
        });
        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.sortedTagArray = [];
        for (x in $scope.tags){
            var amount = countInArray($scope.tags, $scope.tags[x]);
            if ($scope.sortedTagArray.map(function(obj){return obj.element}).indexOf($scope.tags[x]) == -1){
                $scope.sortedTagArray.push({amount:amount, element:$scope.tags[x]})
            }
        }
        $scope.sortedTagArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    }
    $scope.loadTags();
    $scope.sortedAssociationArray = $scope.sortedTagArray;

    $scope.loginToggle = function(){
        $mdSidenav('login').toggle();
    };

    //TODO SERVER | CHAIN
    $scope.lookupBalance = function(){
        //$scope.balanceLook = $scope.balanceLook.toLowerCase();
        if ($scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = $scope.balance[$scope.balanceLook]}
        if (!$scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = 0}
    };

    $scope.lookupReputation = function(){
        //$scope.reputationLook = $scope.reputationLook.toLowerCase();
        if ($scope.reputation[$scope.reputationLook]){$scope.reputationLookupValue = $scope.reputation[$scope.reputationLook]}
        if (!$scope.reputation[$scope.reputationLook]){$scope.reputationLookupValue = 0;}
    };

    $scope.createReaction = function(item, type){

        if($scope.currentUser){

            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:item.model, id:item.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;

            var index = $scope.activity.map(function(obj){return obj.id}).indexOf(item.id);
            $scope.activity[index].reactions[type]++;

            ReactionModel.create($scope.newReaction);

        }

        else{$mdSidenav('login').toggle()}
            
    };

    $scope.reply = function(item){
    	if($scope.currentUser){
    		var index = $scope.activity.map(function(obj){return obj.id}).indexOf(item.id);
    		$scope.activity[index].showReply = !$scope.activity[index].showReply;
    	}
        else{$mdSidenav('login').toggle()}
    };

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        ContentModel.getSome('search', $scope.searchQuery, 0, 20, 'createdAt DESC').then(function(models){
            $rootScope.stateIsLoading = false;
            $scope.activity = models.map(function(obj){
                obj.model = 'CONTENT';
                return obj;
            });
        });
    };

    $scope.sideNavToggle = function(){
        $mdSidenav('nav').toggle();
    };

    $scope.transactionToggle = function(){
        $mdSidenav('transaction').toggle();
    };

    //TODO: STORE IN DATA? 
    //TODO: BUILD PROTOCOL
    //TODO: AMOUNT
    $scope.tokenToggle = function(item){
        var tokens = [item.id];
        if (item.model == 'CONTENT'){
            tokens.push('CONTENT');
            if (item.type){
                tokens.push(item.type.toUpperCase());
                tokens.push('CONTENT+'+item.type.toUpperCase());
            }
            if (item.tags){
                for (x in item.tags.split(',')){
                    tokens.push(item.tags.split(',')[x].toUpperCase());
                    tokens.push(item.id+'+'+item.tags.split(',')[x].toUpperCase());
                }
            }
        }
        if (item.model == 'TASK'){
            tokens.push('TASK');
            if (item.tags){
                for (x in item.tags){
                    tokens.push(item.tags[x].toUpperCase());
                    tokens.push(item.id+'+'+item.tags[x].toUpperCase());
                }
            }
        }
        if (item.model == 'TIME'){
            //TODO: AMOUNT
            //item.amount
            tokens.push('TIME');
            if (item.tags){
                for (x in item.tags.split(',')){
                    tokens.push(item.tags.split(',')[x].toUpperCase());
                    tokens.push(item.id+'+'+item.tags.split(',')[x].toUpperCase());
                }
            }
        }
        $rootScope.globalTokens = tokens;
        $mdSidenav('tokens').toggle();
    };

}]);
