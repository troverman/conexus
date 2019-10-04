angular.module( 'conexus.project', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'project', {
        abstract: true,
        url: '/project/:path',
        views: {
            "main": {
                controller: 'ProjectCtrl',
                templateUrl: 'project/index.tpl.html'
            }
        },
        resolve: {
            project: ['$stateParams', 'ProjectModel', function($stateParams, ProjectModel) {
                return ProjectModel.get({urlTitle:$stateParams.path,limit:1,skip:0,sort:'createdAt DESC'});
            }]
        }
    })
    .state( 'project.about', {
        url: '/about',
        views: {
            "projectAbout": {
                controller: 'ProjectAboutCtrl',
                templateUrl: 'project/templates/about.tpl.html'
            }
        }
    })
    .state( 'project.activity', {
        url: '',
        views: {
            "projectActivity": {
                controller: 'ProjectActivityCtrl',
                templateUrl: 'project/templates/activity.tpl.html'
            }
        },
    })
    .state( 'project.assets', {
        url: '/assets',
        views: {
            "projectAssets": {
                controller: 'ProjectAssetsCtrl',
                templateUrl: 'project/templates/assets.tpl.html'
            }
        }
    })
    .state( 'project.channels', {
        url: '/channels',
        views: {
            "projectChannels": {
                controller: 'ProjectChannelsCtrl',
                templateUrl: 'project/templates/channels.tpl.html'
            }
        }
    })
    .state( 'project.content', {
        url: '/content',
        views: {
            "projectContent": {
                controller: 'ProjectContentCtrl',
                templateUrl: 'project/templates/content.tpl.html'
            }
        },
        resolve: {
            //TODO-CONNECTION--BETTER PARAMS
            contentList: ['AssociationModel', 'project', function(AssociationModel, project){
                var query = {
                    filter:JSON.stringify({type:'CONTENT', id:project.id}),
                    limit:100,
                    skip:0,
                    sort:'createdAt DESC'
                };
                return AssociationModel.get(query);
            }],            
        }
    })
    .state( 'project.charter', {
        url: '/charter',
        views: {
            "projectCharter": {
                controller: 'ProjectCharterCtrl',
                templateUrl: 'project/templates/charter.tpl.html'
            }
        },
        resolve: {
            connections: ['AssociationModel', 'project', function(AssociationModel, project){
                var query = {
                    filter:JSON.stringify({type:'CONNECTION', id:project.id}),
                    limit:100,
                    skip:0,
                    sort:'createdAt DESC'
                };
                return AssociationModel.get(query);
            }]
        }
    })
    .state( 'project.ledger', {
        url: '/ledger',
        views: {
            "projectLedger": {
                controller: 'ProjectLedgerCtrl',
                templateUrl: 'project/templates/ledger.tpl.html'
            }
        },
        //TODO: BETTER QUERY
        resolve: {
            transactions: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.get({project:project.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            transactionsFrom: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.get({from:project.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            transactionsTo: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.get({to:project.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    })
    .state( 'project.items', {
        url: '/items',
        views: {
            "projectItems": {
                controller: 'ProjectItemsCtrl',
                templateUrl: 'project/templates/items.tpl.html'
            }
        },
        resolve: {
            items: ['AssociationModel', 'project', function(AssociationModel, project) {
                var query = {
                    filter:JSON.stringify({type:'ITEM', id:project.id}),
                    limit:100,
                    skip:0,
                    sort:'createdAt DESC'
                };
                return AssociationModel.get(query);
            }]
        }
    })
    .state( 'project.members', {
        url: '/members',
        views: {
            "projectMembers": {
                controller: 'ProjectMembersCtrl',
                templateUrl: 'project/templates/members.tpl.html'
            }
        },
        resolve: {
            members: ['AssociationModel', 'project', function(AssociationModel, project) {
                var query = {
                    filter:JSON.stringify({type:'MEMBER', id:project.id}),
                    limit:100,
                    skip:0,
                    sort:'createdAt DESC'
                };
                return AssociationModel.get(query);
            }]
        }
    })
    .state( 'project.positions', {
        url: '/positions',
        views: {
            "projectPositions": {
                controller: 'ProjectPositionsCtrl',
                templateUrl: 'project/templates/positions.tpl.html'
            }
        },
        resolve: {
            orders: ['OrderModel', 'project', function(OrderModel, project){
                var query = {
                    filter:JSON.stringify({type:'ORDER', id:project.id}),
                    limit:100,
                    skip:0,
                    sort:'createdAt DESC'
                };
                return AssociationModel.get(query);
            }],
        }
    })
    .state( 'project.projects', {
        url: '/projects',
        views: {
            "projectProjects": {
                controller: 'ProjectProjectsCtrl',
                templateUrl: 'project/templates/projects.tpl.html'
            }
        },
        resolve: {
            projects: ['AssociationModel', 'project', function(AssociationModel, project){
                var query = {
                    filter:JSON.stringify({type:'PROJECT', id:project.id}),
                    limit:100,
                    skip:0,
                    sort:'createdAt DESC'
                };
                return AssociationModel.get(query);
            }],
        }
    })
    .state( 'project.settings', {
        url: '/settings',
        views: {
            "projectSettings": {
                controller: 'ProjectSettingsCtrl',
                templateUrl: 'project/templates/settings.tpl.html'
            }
        }
    })
    .state( 'project.tasks', {
        url: '/tasks',
        views: {
            "projectTasks": {
                controller: 'ProjectTasksCtrl',
                templateUrl: 'project/templates/tasks.tpl.html'
            }
        },
        resolve: {
            tasks: ['AssociationModel', 'project', function(AssociationModel, project){
                var query = {
                    filter:JSON.stringify({type:'TASK', id:project.id}),
                    limit:100,
                    skip:0,
                    sort:'createdAt DESC'
                };
                return AssociationModel.get(query);
            }],
        }
    })
    .state( 'project.time', {
        url: '/time',
        views: {
            "projectTime": {
                controller: 'ProjectTimeCtrl',
                templateUrl: 'project/templates/time.tpl.html'
            }
        },
        resolve: {
            time: ['AssociationModel', 'project', function(AssociationModel, project) {
                var query = {
                    filter:JSON.stringify({type:'TIME', id:project.id}),
                    limit:100,
                    skip:0,
                    sort:'createdAt DESC'
                };
                return AssociationModel.get(query);
            }]
        }
    })
    .state( 'project.validations', {
        url: '/validations',
        views: {
            "projectValidations": {
                controller: 'ProjectValidationsCtrl',
                templateUrl: 'project/templates/validations.tpl.html'
            }
        }
    })
}])

.controller( 'ProjectCtrl', ['$location', '$mdSidenav', '$rootScope', '$scope', '$state', 'project', 'SearchModel', 'titleService', 'TransactionModel', 'ValidationModel', function ProjectController( $location, $mdSidenav, $rootScope, $scope, $state, project, SearchModel, titleService, TransactionModel, ValidationModel ) {
    
    titleService.setTitle(project.title + ' | CRE8.XYZ');

    $scope.project = project;
    $scope.project.model = 'PROJECT';
    if(!$scope.project){$location.path('/')}

    $rootScope.markers = [];
    $rootScope.project = $scope.project;

    $scope.newMember = {};
    $scope.newTransaction = {};
    $scope.newTransaction.to = $scope.project.id;
    $scope.searchQuery = [];

    if ($scope.project.location){ 
        $scope.map = {
            center: {latitude: $scope.project.location.lat, longitude: $scope.project.location.lng },
            zoom: 9
        };
        $scope.markers = [{
            id:project.id,
            content:$scope.project.title,
            coords:{
                latitude:$scope.project.location.lat,
                longitude:$scope.project.location.lng
            }
        }];
        $scope.options = {disableDefaultUI: true};
    }

    $scope.createMemberValidate = function(){
        if($scope.currentUser){
            $scope.newValidation = {
                creator:$rootScope.currentUser.id,
                user:$rootScope.currentUser.id,
                content:'Request for Membership',
                //TODO: CONNECTION
                associatedModels:[
                    {type:'MEMBER', id:$rootScope.currentUser.id},
                    {type:'PROJECT', id:project.id},
                ],
                context:{
                    general:100
                },
                connection:{},
                information:{},
                parameters:{
                    context:{general:100},
                },
            };
            ValidationModel.create($scope.newValidation).then(function(model) {
                console.log(model);
            });
            $rootScope.pop('Join', $scope.project.title);

        }
        else{$mdSidenav('login').toggle()}
    };

}])

.controller( 'ProjectAboutCtrl', ['$location', '$sailsSocket', '$sce', '$scope', '$stateParams', 'project', 'titleService', function ProjectAboutController( $location, $sailsSocket, $sce, $scope, $stateParams, project, titleService) {
    titleService.setTitle(project.title + ' | About | CRE8.XYZ');
}])

.controller( 'ProjectActivityCtrl', ['$location', '$rootScope', '$sailsSocket', '$scope', 'EventModel', 'project', 'SearchModel', 'titleService', function ProjectActivityController( $location, $rootScope, $sailsSocket, $scope, EventModel, project, SearchModel, titleService) {
   
    //TODO: DEPRECIATE
    titleService.setTitle(project.title + ' | Activity | CRE8.XYZ');
    
    $scope.activity = [];
    $scope.project = project;

    //TODO: EVENTS
    var query = {
        limit:100, 
        skip:0, 
        sort:'createdAt DESC',
        filter:[
            {}
        ],
        //find by modelid
        model:'ASSOCIATION', 
        id:project.id, 
    };
    $scope.stateIsLoadingActivity = true;
    EventModel.get(query).then(function(eventModels){
        $scope.stateIsLoadingIntro = false;
        $scope.activity = eventModels.map(function(obj){
            obj.model = obj.model.data;
            obj.model.verb = obj.verb;
            return obj.model
        });
        console.log( $scope.activity );
    });

    $rootScope.$watch('event', function(newValue, oldValue){
        //$scope.activity.unshift(newValue);
    }, true);
    
    //TEMP | FRONTEND EXPERIENCE.. COULD DO WATCH SOME VARIABLE .. ADD TO ACTIVITY IF
    $rootScope.$watch('activityUpdate', function(newValue, oldValue){
        //$scope.activity.unshift(newValue);
    }, true);
  
}])

.controller( 'ProjectAssetsCtrl', ['$scope', 'project', 'titleService', function ProjectAssetsController( $scope, project, titleService ) {
    
    //TODO: DEPREICATE
    titleService.setTitle(project.title + ' | Assets | CRE8.XYZ');
    $scope.balance = {};
    if ( $scope.project.data){
        $scope.balance = $scope.project.data.apps.balance;
    }
    $scope.balanceColumn = {
        chart: {
            zoomType: 'x',
        },
        series: [{
            id: 'Combination',
            type: 'column',
            name: 'Asset Balance',
            data: [],
        }],
        title: {
            text: ''
        },
        xAxis: {
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {
                text: null
            },
            categories: [],
        },
        yAxis: {
            title: {
                text: null
            }
        },
        legend:{enabled: false},
        credits:{enabled:false},
    };

    $scope.sortableSet = [];
    for (x in $scope.balance) {
        if(!isNaN($scope.balance[x]) && $scope.balance[x]!=null && $scope.balance[x]!="undefined" && $scope.balance[x]!="NaN"){
            $scope.sortableSet.push([x, $scope.balance[x]]);
        }
    }
    $scope.sortableSet.sort(function(a, b) {return b[1] - a[1];});

    for (x in $scope.sortableSet){
        if (x < 250){
            $scope.balancePie.series[0].data.push({
                name: $scope.sortableSet[x][0],
                y: $scope.sortableSet[x][1],
            });
            $scope.balanceColumn.xAxis.categories.push($scope.sortableSet[x][0]);
            $scope.balanceColumn.series[0].data.push($scope.sortableSet[x][1]);   
        }
    }
    
    $scope.lookupBalance = function(){
        if ($scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = $scope.balance[$scope.balanceLook]}
        if (!$scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = 0}
    };

}])

.controller( 'ProjectChannelsCtrl', ['$location', '$sailsSocket', '$sce', '$scope', 'project', 'titleService', function ProjectController( $location, $sailsSocket, $sce, $scope, project, titleService ) {
    
    //TODO: DEPREICATE
    titleService.setTitle(project.title + ' | Channels | CRE8.XYZ');
    $scope.channels = [{title:'general'},{title:'tasks'},{title:'create'},{title:'task1'}];
    $scope.contentList = [];
    $scope.project = project;

}])

.controller( 'ProjectContentCtrl', ['$location', '$rootScope', '$sce', '$scope', 'contentList', 'ContentModel', 'project', 'titleService', function ProjectController( $location, $rootScope, $sce, $scope, contentList, ContentModel, project, titleService ) {
    
    titleService.setTitle(project.title + ' | Content | CRE8.XYZ'); 
    $scope.contentList = contentList.map(function(obj) {
        for (x in obj.associatedModels){
            if (obj.associatedModels[x].type == 'CONTENT'){
                var returnObj = obj.associatedModels[x].data;
                returnObj.associationId = obj._id
                return returnObj;
            }
        }
    });

}])
    
.controller( 'ProjectCharterCtrl', ['$sailsSocket', '$scope', 'connections', 'project', 'titleService', function ProjectController( $sailsSocket, $scope, connections, project, titleService ) {
    titleService.setTitle(project.title + ' | Charter | CRE8.XYZ');
    $scope.connections = connections.map(function(obj){obj.model = "CONNECTION"; return obj;});
}])

.controller( 'ProjectLedgerCtrl', ['$interval', '$location', '$rootScope', '$scope', 'project', 'titleService', 'TransactionModel', 'transactions', 'transactionsFrom', 'transactionsTo', function ProjectController( $interval, $location, $rootScope, $scope, project, titleService, TransactionModel, transactions, transactionsFrom, transactionsTo ) {
    
    titleService.setTitle(project.title + ' | Ledger | CRE8.XYZ');
    
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.project = project;
    $scope.searchQuery = [];
    $scope.transactionsFrom = transactionsFrom.map(function(obj){obj.model='TRANSACTION';return obj});
    $scope.transactionsTo = transactionsTo.map(function(obj){obj.model='TRANSACTION';return obj});
    $scope.transactions = $scope.transactionsFrom.concat($scope.transactionsTo);

    $scope.chart = {
        chart: {
            zoomType: 'x',
        },
        series: [{
            id: 'Combination',
            type: 'area',
            name: 'Asset Balance',
            data: [],
        },{
            id: 'Expense',
            type: 'area',
            name: 'Expense',
            data: [],
        },{
            id: 'Revenue',
            type: 'area',
            name: 'Revenue',
            data: [],
        },{
            id: 'Revenue',
            type: 'area',
            name: 'Asset Flow',
            data: [],
            visible: false
        }],
        title: {text: ''},
        xAxis: {
            type: 'datetime',
            currentMin: 0,
            currentMax: 20,
            title: null,
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {text: null},
        },
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };

    $scope.pie = {
        chart: {},
        series: [{
            id: 'Pie',
            type: 'pie',
            name: 'Pie',
            colorByPoint: true,
            data: [],
        }],
        title: {text: ''},
        xAxis: {title: {text: null}},
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };

    if ($scope.transactions.length == 0){

        var timeObject = new Date(); 
        var exampleSetExpense = [
            {to:{title:'Trevor Overman', id:project.id, avatarUrl:project.avatarUrl}, context:'PAYROLL,HUMAN', content:'PAY TREVOR', model:'TRANSACTION',},
            {to:{title:'Hot Shot Programmer', id:project.id, avatarUrl:project.avatarUrl}, content:'PAY PROGRAMMER', context:'PAYROLL,HUMAN'},
            {to:{title:'Sarah Human', id:project.id, avatarUrl:project.avatarUrl}, content:'PAY SARAH', context:'PAYROLL,HUMAN'},
            {to:{title:'David Create', id:project.id, avatarUrl:project.avatarUrl}, content:'PAY DAVID', context:'PAYROLL,HUMAN'},
            {to:{title:'OFFICE SUPPLIES INC', id:project.id, avatarUrl:project.avatarUrl}, content:'PURCHASE SUPPLIES', context:'SUPPLIES,HARDWARE,BUSINESS,INFRASTRUCTURE'},
            {to:{title:'COMPUTER SERVICES INC', id:project.id, avatarUrl:project.avatarUrl}, content:'PURCHASE TECHNOLOGY', context:'SERVER,COMPUTER,CLOUD,SERVICES'}
        ];

        var exampleSetRevenue = [
            {from:{title:'CUSTOMER', id:project.id, avatarUrl:project.avatarUrl}, content:'PAYMENT FOR PRODUCTS', context:'CUSTOMER,EXAMPLE'},
            {from:{title:'CUSTOMER', id:project.id, avatarUrl:project.avatarUrl}, content:'PAYMENT FOR SERVICES', context:'CLIENT,SEVICES,DELIVERABLE'},
        ];

        for (var i=0, t=88; i<t; i++) {
            var randomIndexExpense = Math.floor(Math.random()*exampleSetExpense.length)
            var randomIndexRevenue = Math.floor(Math.random()*exampleSetRevenue.length)
            $scope.transactionsFrom.push({
                to: exampleSetExpense[randomIndexExpense].to, 
                from: {id:project.id, title:project.title, avatarUrl:project.avatarUrl}, 
                amountSet:{
                    CRE8: 10*Math.round(0.5*Math.random() * t)
                }, 
                content:'SEED EXPENSE', 
                createdAt:new Date(timeObject.getTime() + 10000 * i), 
                context:exampleSetExpense[randomIndexExpense].context, 
                data:{apps:{reactions:{plus:Math.round(Math.random()*10), minus:Math.round(Math.random()*2)},attention:{general:Math.round(Math.random()*2)}}}
            })
            $scope.transactionsTo.push({
                to: {id:project.id, title:project.title, avatarUrl:project.avatarUrl}, 
                from: exampleSetRevenue[randomIndexRevenue].from, 
                amountSet:{
                    CRE8: 10*Math.round(0.5*Math.random() * t)
                },
                content:'SEED REVENUE', 
                createdAt:new Date(timeObject.getTime() + 10000 * i),
                context: exampleSetRevenue[randomIndexRevenue].context, 
                data:{apps:{reactions:{plus:Math.round(Math.random()*10), minus:Math.round(Math.random()*2)},attention:{general:Math.round(Math.random()*2)}}}
            })
        }
        $scope.transactions = $scope.transactionsFrom.concat($scope.transactionsTo);
    }


    //MD VS ABSOLUTE USAGE..
    function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0)};
    function amountInArray(array, value) {
        return array.reduce(function(n, x){
            if (x.tag == value.tag){n+=parseFloat(x.amount)}
            return n;
        },0);
    };

    //TODO: IMPROVE :)
    $scope.loadAssets = function(){
        $scope.transactionAssets = $scope.transactions.map(function(obj){            
            return Object.keys(obj.amountSet);
        });
        $scope.transactionAssets = [].concat.apply([], $scope.transactionAssets);
        $scope.sortedTransactionAssets = [];
        for (x in $scope.transactionAssets){
            var amount = countInArray($scope.transactionAssets, $scope.transactionAssets[x]);
            if ($scope.sortedTransactionAssets.map(function(obj){return obj.element}).indexOf($scope.transactionAssets[x]) == -1){
                $scope.sortedTransactionAssets.push({amount:amount, element:$scope.transactionAssets[x]})
            }
        }
        $scope.sortedTransactionAssets.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    };
    $scope.loadTags = function(){
        $scope.transactionTags = $scope.transactions.map(function(obj){
            var returnArray = [];
            if(obj.tags){
                obj.tags = obj.tags.split(',');
                for (x in obj.tags){returnArray.push({tag:obj.tags[x].trim().toLowerCase(),amount:obj.amount})}
            }
            return returnArray;
        });
        $scope.transactionTags = [].concat.apply([], $scope.transactionTags);
        $scope.sortedTransactionTags = [];
        for (x in $scope.transactionTags){
            var amount = countInArray($scope.transactionTags, $scope.transactionTags[x]);
            if ($scope.sortedTransactionTags.map(function(obj){return obj.element}).indexOf($scope.transactionTags[x].tag) == -1){
                $scope.sortedTransactionTags.push({amount:amount, element:$scope.transactionTags[x].tag})
            }
        }
        $scope.sortedTransactionTags.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    };
    $scope.init = function(){
        $scope.loadAssets();
        $scope.loadTags();
        $scope.assetSet = $scope.sortedTransactionAssets;
        $scope.filterSet = {assets:$scope.sortedTransactionAssets, tags:$scope.sortedTransactionTags}
    };
    $scope.init();
    //TODO: IMPROVE :)

    //TODO: REFACTOR.
    $scope.updateGraph = function(){

        $scope.sumFlow = [];
        $scope.sumFrom = []
        $scope.sumTo = [];
        $scope.sumTransactions = [];
        $scope.transactions = $scope.transactions.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);}).reverse(); 

        //DO BY TAGS! SAME ..
        function sumFunction(obj){
            var sumArray = [];
            obj.reduce(function(a,b,i) {
                return $scope.sumArray[i] = parseFloat(a) + parseFloat(b.amount);
            }, 0);
            return sumArray;
        };
        
        $scope.transactionsByIdentifier = {};
        $scope.transactions.map(function(obj){
            for (y in Object.keys(obj.amountSet)){
                if (!$scope.transactionsByIdentifier[Object.keys(obj.amountSet)]){$scope.transactionsByIdentifier[Object.keys(obj.amountSet)]=[obj];}
                else{$scope.transactionsByIdentifier[Object.keys(obj.amountSet)].push(obj)}   
            }
        });

        $scope.transactionsByTags = {};
        $scope.transactions.map(function(obj){
            for (y in obj.tags){
                if (!$scope.transactionsByTags[obj.tags[y]]){$scope.transactionsByTags[obj.tags[y]]=[obj];}
                else{$scope.transactionsByTags[obj.tags[y]].push(obj)}   
            }
        });

        $scope.transactions.reduce(function(a,b,i) {
            if (!b.from){b.from = {id:null}}
            if (!b.to){b.to = {id:null}}
            if(b.from.id == $scope.project.id){
                var amount = b.amountSet['USD'] || 0;
                var diff =  parseFloat(a[1])-parseFloat(amount)
                var data = [new Date(b.createdAt).getTime(), diff];
                return $scope.sumTransactions[i] = data;
            }
            if(b.to.id == $scope.project.id){
                var amount = b.amountSet['USD'] || 0;
                var sum =  parseFloat(a[1])+parseFloat(amount)
                var data = [new Date(b.createdAt).getTime(), sum];
                return $scope.sumTransactions[i] = data;
            }
        },[0,0]);

        //CONCAT | sumFrom
        $scope.transactions.reduce(function(a,b,i) {
            if(b.from.id == $scope.project.id){
                var amount = b.amountSet['USD'] || 0;
                var sum =  parseFloat(a[1])+parseFloat(amount)
                var data = [new Date(b.createdAt).getTime(), sum];
                return $scope.sumFrom[i] = data
            }
            else{
                var data = [new Date(b.createdAt).getTime(), parseFloat(a[1])];
                return $scope.sumFrom[i] = data;
            }

        },[0,0]);

        //CONCAT | sumTo
        $scope.transactions.reduce(function(a,b,i) {
            if(b.to.id == $scope.project.id){
                var amount = b.amountSet['USD'] || 0;
                var sum =  parseFloat(a[1])+parseFloat(amount)
                var data = [new Date(b.createdAt).getTime(), sum];
                return $scope.sumTo[i] = data;
            }
            else{
                var data = [new Date(b.createdAt).getTime(), parseFloat(a[1])];
                return $scope.sumTo[i] = data;
            }
        },[0,0]);

        //CONCAT | sumFlow
        $scope.transactions.reduce(function(a,b,i) {

            if(b.from.id == $scope.project.id){
                var amount = b.amountSet['USD'] || 0;
                var sum =  parseFloat(a[1])+parseFloat(amount)
                var data = [new Date(b.createdAt).getTime(), sum];
                return $scope.sumFrom[i] = data
            }
            if(b.to.id == $scope.project.id){
                var amount = b.amountSet['USD'] || 0;
                var sum =  parseFloat(a[1])+parseFloat(amount)
                var data = [new Date(b.createdAt).getTime(), sum];
                return $scope.sumFrom[i] = data
            }

        },[0,0]);

        $scope.chart.series[0].data = $scope.sumTransactions;
        $scope.chart.series[1].data = $scope.sumFrom;
        $scope.chart.series[2].data = $scope.sumTo;
        $scope.chart.series[3].data = $scope.sumFlow;

        //REDO
        $scope.startDate = new Date($scope.transactions[0].createdAt);
        $scope.endDate = new Date($scope.transactions[$scope.transactions.length-1].createdAt);
        $scope.transactions = $scope.transactions.reverse();
    };
    $scope.updateGraph();

    //TODO: ANIMATE
    //TODO: ADD IN TAG BASED GRAPHS WRT EXPENSE
    $scope.selectExpense = function(){
        $scope.transactionTags = $scope.transactionsFrom.map(function(obj){
            var returnArray = [];
            var amount = obj.amountSet['USD'] || 0;
            if(obj.tags){for (x in obj.tags){returnArray.push({tag:obj.tags[x].trim().toLowerCase(),amount:amount})}}
            return returnArray;
        });
        $scope.transactionTags = [].concat.apply([], $scope.transactionTags);
        $scope.sortedTransactionTags = [];
        for (x in $scope.transactionTags){
            var amount = amountInArray($scope.transactionTags, $scope.transactionTags[x]);
            if ($scope.sortedTransactionTags.map(function(obj){return obj.element}).indexOf($scope.transactionTags[x].tag) == -1){
                $scope.sortedTransactionTags.push({amount:amount, element:$scope.transactionTags[x].tag})
            }
        }
        $scope.sortedTransactionTags.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
        $scope.pie.series[0].data = [];
        for (x in $scope.sortedTransactionTags){
            $scope.pie.series[0].data.push({
                name: $scope.sortedTransactionTags[x].element,
                y: $scope.sortedTransactionTags[x].amount,
            });
        }
    };

    $scope.selectOverview = function(){
        $scope.pie.series[0].data = [];
        $scope.pie.series[0].data = [
            {name: 'Expense', y: $scope.sumFrom[$scope.sumFrom.length-1][1]}, 
            {name: 'Revenue', y: $scope.sumTo[$scope.sumTo.length-1][1]}
        ];
    };
    $scope.selectOverview();


    //TODO: COMPLEX FILTER..
    $scope.selectTag = function(tag){
        $scope.searchQuery.push({text:tag, type:'TAG'})
        $location.search('tag',tag);
        var query = {member:$scope.member.id, tag:tag, from:$scope.member.id, to:$scope.member.id, identifer:$scope.identifer};
        TransactionModel.get('query', query, 20, 0, 'createdAt DESC').then(function(transactions){
            $scope.transactions = transactions;
        });
    };

    //TODO: TAGS
    $scope.selectRevenue = function(){
        $scope.transactionTags = $scope.transactionsTo.map(function(obj){
            var returnArray = [];
            var amount = obj.amountSet['USD'] || 0;
            if(obj.tags){for (x in obj.tags){returnArray.push({tag:obj.tags[x].trim().toLowerCase(),amount:amount})}}
            return returnArray;
        });
        $scope.transactionTags = [].concat.apply([], $scope.transactionTags);
        $scope.sortedTransactionTags = [];
        for (x in $scope.transactionTags){
            var amount = amountInArray($scope.transactionTags, $scope.transactionTags[x]);
            if ($scope.sortedTransactionTags.map(function(obj){return obj.element}).indexOf($scope.transactionTags[x].tag) == -1){
                $scope.sortedTransactionTags.push({amount:amount, element:$scope.transactionTags[x].tag})
            }
        }
        $scope.sortedTransactionTags.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
        $scope.pie.series[0].data = [];
        for (x in $scope.sortedTransactionTags){
            $scope.pie.series[0].data.push({
                name: $scope.sortedTransactionTags[x].element,
                y: $scope.sortedTransactionTags[x].amount,
            });
        }
    };

    //STATE?
    if ($location.search()){
        if ($location.search().assets){$scope.selectAsset($location.search().assets);}
        if ($location.search().type){
            if ($location.search().type.toLowerCase() == 'overview'){$scope.selectOverview();}
            if ($location.search().type.toLowerCase() == 'expense'){$scope.selectExpense();}
            if ($location.search().type.toLowerCase() == 'revenue'){$scope.selectRevenue();}
        }
        //if ($location.search().associations){}
        //if ($location.search().tags){}
    }

}])

.controller( 'ProjectItemsCtrl', ['$location', '$sailsSocket', '$scope', 'items', 'project', 'titleService', function ProjectMarketplaceController( $location, $sailsSocket, $scope, items, project, titleService) {
   
    titleService.setTitle(project.title + ' | Items | CRE8.XYZ');
    $scope.items = items.map(function(obj) {
        for (x in obj.associatedModels){
            if (obj.associatedModels[x].type == 'ITEM'){
                var returnObj = obj.associatedModels[x].data;
                returnObj.associationId = obj._id
                return returnObj;
            }
        }
    });

}])

.controller( 'ProjectMembersCtrl', ['$location', '$sailsSocket', '$rootScope', '$scope', 'AssociationModel', 'members', 'project', 'titleService', function ProjectController( $location, $sailsSocket, $rootScope, $scope, AssociationModel, members, project, titleService ) {
    titleService.setTitle(project.title + ' | Members | CRE8.XYZ');

    //TODO: GET PROJECT-MEMBER CONNECTIONS

    $scope.members = members.map(function(obj) {
        for (x in obj.associatedModels){
            if (obj.associatedModels[x].type == 'MEMBER'){
                var returnObj = obj;
                returnObj.user = obj.associatedModels[x].data;
                returnObj.id = returnObj._id
                return returnObj;
            }
        }
    });
    $scope.project = project;

    $sailsSocket.subscribe('association', function (envelope) {
        console.log(envelope);
        if (envelope.verb == 'create'){$scope.members.unshift(envelope.data);}
    });
    
}])

.controller( 'ProjectPositionsCtrl', ['$location', '$rootScope', '$sailsSocket', '$scope', '$stateParams', 'OrderModel', 'orders', 'project', 'titleService', function MemberPositionsController($location, $rootScope, $sailsSocket, $scope, $stateParams, OrderModel, orders, project, titleService) {
   
    //TODO: DEPRECIATE
    titleService.setTitle(project.title + ' | Positions | CRE8.XYZ');
   
    $scope.project = project;
    $scope.orders = orders;

    $rootScope.baseMarkets = [
        {text:'UNIVERSAL'},
        {text:'CRE8'},
    ];

    //TODO: MULTIORDER MANIFOLDS
    $rootScope.markets = [
        {text:'EDUCATION+ONMINT'},
        {text:'SHELTER'},
        {text:'HEALTH'},
        {text:'FOOD'},
        {text:'REST'},
        {text:'CRE8'},
        {text:'USD'},
        {text:'ETH'},
        {text:'BTC'},
        {text:'CREATE'},
        {text:'TIME'},
        {text:'STREAM'},
        {text:'REACT'},
        {text:'CONTENT'},
        {text:'ORDER'},
        {text:'TRANSACTION'},
        {text:'VIEW'},
    ];
    
    $scope.searchQuery = $rootScope.baseMarkets;
   
    //TODO: DEPRECIATE
    if ($scope.orders.length >0){
        $scope.orders.forEach(function(part, index) {
            if ($scope.orders[index].identiferSet){$scope.orders[index].identiferSet = $scope.orders[index].identiferSet.split(',');}
            if ($scope.orders[index].amountSet){$scope.orders[index].amountSet = $scope.orders[index].amountSet.split(',');}
            if ($scope.orders[index].identiferSet1){$scope.orders[index].identiferSet1 = $scope.orders[index].identiferSet1.split(',');}
            if ($scope.orders[index].amountSet1){ $scope.orders[index].amountSet1 = $scope.orders[index].amountSet1.split(',');}
        });
    }   

    $scope.chart = {
        chart: {polar: true},
        series: [],
        title: {text: ''},
        xAxis: {
            title: {text: null},
            categories: [],
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            title: {text: null},
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        legend: {enabled: false,},
        tooltip: {shared: true,},
        credits:{enabled:false},
    };

    $scope.populateBaseMarkets = function(){
        $scope.chart.series = [];
        for (x in $rootScope.baseMarkets){
            var random1 = Math.floor(255*Math.random());
            var random2 = Math.floor(255*Math.random());
            var random3 = Math.floor(255*Math.random());
            $scope.chart.series.push({
                id: 'values'+x,
                type: 'area',
                name: $rootScope.baseMarkets[x].text,
                pointPlacement: 'on',
                data: [],
                color: 'rgba('+random1+','+random2+','+random3+',0.3)',
                fillOpacity: 0.3,
            });
        }
    };

    $rootScope.$watch('baseMarkets' ,function(){$scope.populateBaseMarkets();$scope.populateMarkets();},true);
   
    $scope.populateMarkets = function(){
        $scope.chart.xAxis.categories = [];
        for (y in $rootScope.baseMarkets){$scope.chart.series[y].data = [];}
        for (x in $rootScope.markets){
            $scope.chart.xAxis.categories.push($rootScope.markets[x].text);
            for (y in $rootScope.baseMarkets){
                $scope.chart.series[y].data.push((1+1*Math.random())/2);
            }
        }
    };

    $rootScope.$watch('markets' ,function(){$scope.populateMarkets();},true);

}])

.controller( 'ProjectProjectsCtrl', ['$location', '$rootScope', '$sailsSocket', '$sce', '$scope', 'project', 'ProjectModel', 'projects', 'titleService', function ProjectController( $location, $rootScope, $sailsSocket, $sce, $scope, project, ProjectModel, projects, titleService ) {
    
    titleService.setTitle(project.title + ' | Projects | CRE8.XYZ');
    $scope.project = project;
    $scope.projects = projects
    //.map(function(obj) {
    //for (x in obj.associatedModels){
    //        if (obj.associatedModels[x].type == 'PROJECT'){
    //            var returnObj = obj.associatedModels[x].data;
    //            returnObj.associationId = obj._id
    //            return returnObj;
    //       }
    //   }
    //});

    //TODO: LOL
    if ($scope.projects.length > 0){
        var locationProjects = $scope.projects.map(function(obj){if(obj.location){return obj}}).filter(Boolean);
        if (locationProjects.length > 0){
            if($scope.project.location){
                $rootScope.map = {
                    center: {latitude: $scope.project.location.lat, longitude: $scope.project.location.lng }, zoom: 13
                };
            }
            else{
                $rootScope.map = {
                    center: {latitude: locationProjects[0].location.lat, longitude: locationProjects[0].location.lng }, zoom: 13
                };
            }
            $rootScope.options = {disableDefaultUI: true};
            for (x in locationProjects){
                $rootScope.markers.push({
                    id:locationProjects[x].id,
                    content:locationProjects[x].title,
                    urlTitle:locationProjects[x].urlTitle,
                    coords:{
                        latitude:locationProjects[x].location.lat,
                        longitude:locationProjects[x].location.lng
                    }
                });
            }
        }
    }

}])

.controller( 'ProjectSettingsCtrl', ['$scope', 'project', 'titleService', function ProjectSettingsController( $scope, project, titleService ) {
    titleService.setTitle(project.title + ' | Settings | CRE8.XYZ');
}])

.controller( 'ProjectTasksCtrl', ['$location', '$rootScope', '$sailsSocket', '$sce', '$scope', 'project', 'ReactionModel', 'TaskModel', 'tasks', 'titleService', function ProjectController( $location, $rootScope, $sailsSocket, $sce, $scope, project, ReactionModel, TaskModel, tasks, titleService ) {
    
    titleService.setTitle(project.title + ' | Tasks | CRE8.XYZ');

    $scope.project = project;
    $scope.tasks = tasks.map(function(obj) {
        for (x in obj.associatedModels){
            if (obj.associatedModels[x].type == 'TASK'){
                var returnObj = obj.associatedModels[x].data;
                returnObj.associationId = obj._id
                return returnObj;
            }
        }
    });


    $sailsSocket.subscribe('task', function (envelope) {
        if (envelope.verb == 'create'){
            $scope.tasks.unshift(envelope.data);
        }
    });

}])

.controller( 'ProjectTimeCtrl', ['$rootScope', '$sailsSocket', '$scope', 'project', 'time', 'titleService', function ProjectTimeController( $rootScope, $sailsSocket, $scope, project, time, titleService) {
    
    //TODO: DEPRECIATE
    titleService.setTitle(project.title + ' | Time | CRE8.XYZ');

    $scope.eventSources = [];
    $scope.calendar = {
        height:448,
        editable: false,
        defaultView: "agendaWeek",
        header:{
            left: 'month,agendaWeek,agendaDay',
            center: 'title',
            right: 'today,prev,next',
        },
        buttonText:{
            today: 'Today',
            month: 'Month',
            agendaWeek: 'Week',
            agendaDay: 'Day',
            listMonth: 'List Month',
            listWeek: 'List Week',
        },
        slotDuration:'00:05:00',
        nowIndicator: true,
        allDaySlot: false,
    };
    
    $scope.time = time.map(function(obj){
        var endTime = new Date(obj.createdAt)
        obj.startTime = new Date(endTime.setSeconds(endTime.getSeconds() - obj.amount));
        obj.endTime = new Date(obj.createdAt);
        if (obj.task){$scope.eventSources.push({title:obj.task.title,start:obj.startTime,end:obj.endTime,allDay:false,url:'time/'+obj.id});}
        return obj
    });

}])

.controller( 'ProjectValidationsCtrl', ['$scope', 'project', 'titleService', function ProjectValidationsController( $scope, project, titleService ) {
    
    titleService.setTitle(project.title + ' | Validations | CRE8.XYZ');

    //LINK MOTIONS TO UNVALIDATED 'PROPOSALS' | VEHICE TO SEND 
    $scope.motions = [
        {title:'Motion to Create Member -- Troverman', type:'CREATE MEMBER', content:'Resolution to the Question: Should Troverman Be afforded membership.', reactions:{plus:0, minus:0}, id:1},
        {title:'Motion to Create Order', type:'CREATE ORDER', content:'Resolution to the Question: Should NOVO Create a Position in the Market', reactions:{plus:0, minus:0}, id:1},
        {title:'Motion to Associate Project', type:'CREATE PROJECT ASSOCIATION', content:'Resolution to the Question: Should NOVO Associate PROJECT as a Parent Organization', reactions:{plus:0, minus:0}, id:1},
        {title:'Motion to Create Transaction',  type:'CREATE TRANSACTION', content:'Resolution to the Question: Should NOVO Send 1 CRE8 to PROJECT', reactions:{plus:0, minus:0}, id:1},
        {title:'Motion to Associate Task', type:'CREATE TASK ASSOCIATION', content:'Resolution to the Question: Should NOVO Associate PROJECT as a Parent Organization', reactions:{plus:0, minus:0}, id:1},
        {title:'Motion to Update File',  type:'UPDATE FILES | COMMIT | PULL REQUEST', content:'{git commit message} // ++ function(model){var creation = true}', reactions:{plus:0, minus:0}, id:1},
    ]; 

}]);