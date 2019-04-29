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

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            project: ['$stateParams', 'ProjectModel', function($stateParams, ProjectModel) {
                return ProjectModel.getSome({urlTitle:$stateParams.path,limit:1,skip:0,sort:'createdAt DESC'});
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

        //TODO: DEPRECIATE RESOLVE
        resolve: {

            //TODO: FEED.. COMPLEX QUERY
            contentList: ['ContentModel', 'project', function(ContentModel, project){
                return ContentModel.getSome({project:project.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            tasks: ['project', 'TaskModel', function(project, TaskModel){
                return TaskModel.getSome({project:project.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            time: ['project', 'TimeModel', function(project, TimeModel){
                return TimeModel.getSome({project:project.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            transactionsFrom: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.getSome({from:project.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            transactionsTo: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.getSome({to:project.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
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

    //TODO: ALL
    .state( 'project.channels', {
        url: '/channels',
        views: {
            "projectChannels": {
                controller: 'ProjectChannelsCtrl',
                templateUrl: 'project/templates/channels.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            channels: [function() {
                return [{title:'general'},{title:'tasks'},{title:'create'},{title:'task1'}]
            }],
            contentList: ['ContentModel', 'project', function(ContentModel, project){
                return ContentModel.getSome({project:project.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
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

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            contentList: ['ContentModel', 'project', function(ContentModel, project){
                return ContentModel.getSome({project:project.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],            
        }
    })

    //TODO: ALL
    .state( 'project.charter', {
        url: '/charter',
        views: {
            "projectCharter": {
                controller: 'ProjectCharterCtrl',
                templateUrl: 'project/templates/charter.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            motions: ['ContentModel', 'project', function(ContentModel, project){
                return ContentModel.getSome({project:project.id, limit:100, skip:0, sort:'createdAt DESC'});
            }], 
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

        //TODO: DEPRECIATE RESOLVE
        resolve: {

            //TODO: BETTER QUERY
            transactions: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.getSome({project:project.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            transactionsFrom: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.getSome({from:project.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            transactionsTo: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.getSome({to:project.id, limit:100, skip:0, sort:'createdAt DESC'});
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

        //TODO: DEPRECIATE RESOLVE
        resolve: {

            //TODO: ...
            items: ['project', 'ItemModel', function(project, ItemModel) {
                return[];
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

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            members: ['MemberModel', 'project', function(MemberModel, project) {
                return MemberModel.getSome({project:project.id, limit:100, skip:0, sort:'createdAt DESC'});
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

        //TODO: DEPRECIATE RESOLVE
        resolve: {

            //TODO: ..
            orders: ['OrderModel', 'project', function(OrderModel, project){
                return OrderModel.getSome({limit:20, skip:0, sort:'createdAt DESC'});
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

        //TODO: DEPRECIATE RESOLVE
        resolve: {

            //TODO: DEPRECIATE.. 
            //TODO: ASSOCIATION QUERY.
            projects: ['project', 'ProjectModel', function(project, ProjectModel){
                return ProjectModel.getChildren(project);
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

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            tasks: ['project', 'TaskModel', function(project, TaskModel){
                return TaskModel.getSome({project:project.id, limit:100, skip:0, sort:'createdAt DESC'});
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

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            time: ['project', 'TimeModel', function(project, TimeModel) {
                return TimeModel.getSome({project:project.id, limit:200, skip:0, sort:'createdAt DESC'});
            }]
        }
    })
}])

.controller( 'ProjectCtrl', ['$location', '$mdSidenav', '$rootScope', '$scope', '$state', 'MemberModel', 'project', 'SearchModel', 'titleService', 'TransactionModel', function ProjectController( $location, $mdSidenav, $rootScope, $scope, $state, MemberModel, project, SearchModel, titleService, TransactionModel ) {
    
    //TODO: DEPRECIATE --> MOVE TO NAV
    titleService.setTitle(project.title + ' | CRE8.XYZ');

    $scope.project = project;
    if(!$scope.project){$location.path('/')}
    $scope.project.model = 'PROJECT';

    //LOCAL VARIABLES
    $scope.newMember = {};
    $scope.newTransaction = {};
    $scope.newTransaction.to = $scope.project.id;
    $scope.searchQuery = [];


    //TODO: GLOBAL VARIABLES.. HMM
    $rootScope.markers = [];
    $rootScope.associatedModels = [{
        address: $scope.project.id,
        type: 'PROJECT',
        relationship: 'PARENT', //DEPRECIATE.. FLAT STRUCT
        text: 'Parent | '+$scope.project.title,
    }];
    $rootScope.project = $scope.project;


    //TODO: SMOOTH STATE CHANGE



    if ($scope.project.location){ 
        $scope.map = {
            center: {latitude: $scope.project.location.lat, longitude: $scope.project.location.lng },
            zoom: 13
        };
        $scope.markers = [{
            id:project.id,
            content:$scope.project.title,
            coords:{
                latitude:$scope.project.location.lat,
                longitude:$scope.project.location.lng
            }
        }];
        $scope.options = {
           disableDefaultUI: true
        };
    }


    //TODO: ROOT
    $scope.createMember = function(){
        if($scope.currentUser){
            $scope.newMember.user = $rootScope.currentUser.id;
            $scope.newMember.project = project.id;
            MemberModel.create($scope.newMember).then(function(model) {
                $rootScope.confirm = $scope.newMember;
                $rootScope.confirm.modelType = 'PROJECTMEMBER';

                $scope.newMember = {};
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 5000);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: BETTER
    $scope.isProjectCreator = function() {
        if($rootScope.currentUser){return $rootScope.currentUser.id == $scope.project.user;}
        else {return false;}
    };

}])

.controller( 'ProjectAboutCtrl', ['$location', '$sailsSocket', '$sce', '$scope', '$stateParams', 'project', 'titleService', function ProjectAboutController( $location, $sailsSocket, $sce, $scope, $stateParams, project, titleService) {
   
    //TODO: DEPRECIATE
    titleService.setTitle(project.title + ' | About | CRE8.XYZ');

}])

.controller( 'ProjectActivityCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'contentList', 'ContentModel', 'project', 'ReactionModel', 'tasks', 'time', 'titleService', 'transactionsFrom', 'transactionsTo', function ProjectActivityController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, contentList, ContentModel, project, ReactionModel, tasks, time, titleService, transactionsFrom, transactionsTo ) {
   
    //TODO: DEPRECIATE
    titleService.setTitle(project.title + ' | Activity | CRE8.XYZ');
    
    //INIT LOCAL VARIABLES
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.contentList = contentList;
    $scope.project = project;
    $scope.searchQuery = [];
    $scope.tasks = tasks;
    $scope.time = time;
    $scope.transactionsFrom = transactionsFrom;
    $scope.transactionsTo = transactionsTo;
    $scope.transactions = $scope.transactionsFrom.concat($scope.transactionsTo);
    //$scope.transactions = $scope.transactions.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 

    //CONTENT, TIME, TASK CREATE, VALIDATION (VOTE)
    //TODO
    $scope.contentList = $scope.contentList.map(function(obj){
        if (obj.tags){obj.tags = obj.tags.split(',');}
        obj.model = 'CONTENT';
        return obj;
    });
    $scope.tasks = $scope.tasks.map(function(obj){
        if (obj.tags){obj.tags = obj.tags.split(',');}
        obj.model = 'TASK';
        return obj;
    });
    $scope.time = $scope.time.map(function(obj){
        if (obj.tags){obj.tags = obj.tags.split(',');}
        obj.model = 'TIME';
        return obj;
    });
    $scope.transactions = $scope.transactions.map(function(obj){
        if (obj.tags){obj.tags = obj.tags.split(',');}
        obj.model = 'TRANSACTION';
        return obj;
    });
    
    $scope.activity = [].concat.apply([], [$scope.contentList, $scope.tasks, $scope.time, $scope.transactions]);
    $scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.activity = $scope.activity.slice(0,100);

    $scope.createContent = function(content) {
        if ($rootScope.currentUser){
            if (content){$scope.newContent.contentModel = content.id;}
            $scope.newContent.user = $rootScope.currentUser.id;
            $scope.newContent.project = $scope.project.id;

            //TODO
            $scope.newContent.model = 'CONTENT';
            $scope.newContent.type = 'POST';

            if ($scope.newContent.tags){
                $scope.newContent.tags = $scope.newContent.tags.map(function(obj){
                    return obj.text
                }).join(",");
            }

            console.log($scope.newContent);

            ContentModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
            });

        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:item.model, id:item.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var index = $scope.activity.map(function(obj){return obj.id}).indexOf(item.id);
            $scope.activity[index].reactions[type]++;
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}   
    };

    //TODO: DEPRECIATE
    $scope.reply = function(activity){
        if ($rootScope.currentUser){$mdSidenav('content').toggle()}
        else{$mdSidenav('login').toggle()}
    };

    //TODO: WEBSOCKET
    $sailsSocket.subscribe('content', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.activity.unshift(envelope.data);
                break;
        }
    });

    //TODO: WEBSOCKET
    $sailsSocket.subscribe('task', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.activity.unshift(envelope.data);
                break;
        }
    });

    //TODO: WEBSOCKET
    $sailsSocket.subscribe('time', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.activity.unshift(envelope.data);
                break;
        }
    });

    //TODO: WEBSOCKET
    $sailsSocket.subscribe('reaction', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.contentList.unshift(envelope.data);
                break;
        }
    });

}])

.controller( 'ProjectAssetsCtrl', ['$scope', 'project', 'titleService', function ProjectAssetsController( $scope, project, titleService ) {
    
    //TODO: DEPREICATE
    titleService.setTitle(project.title + ' | Assets | CRE8.XYZ');

}])

.controller( 'ProjectChannelsCtrl', ['$location', '$mdSidenav', '$sailsSocket', '$sce', '$scope', 'channels', 'contentList', 'project', 'titleService', function ProjectController( $location, $mdSidenav, $sailsSocket, $sce, $scope, channels, contentList, project, titleService ) {
    
    //TODO: DEPREICATE
    titleService.setTitle(project.title + ' | Channels | CRE8.XYZ');

    //TODO: MESSAGING.. CHANNELS.. ALL.. COLLAB :)
    
    $scope.channels = channels;
    $scope.newContent = {};
    $scope.project = project;
    $scope.contentList = contentList;

    //TODO: DEPREICATE
    $scope.createContent = function() {
        if ($rootScope.currentUser){
            $scope.newContent.user = $rootScope.currentUser.id;
            $scope.newContent.project = $scope.project.id;
            ContentModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
                $scope.contentList.unshift(model);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: WEBSOCKET
    $sailsSocket.subscribe('content', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.contentList.unshift(envelope.data);
                break;
        }
    });

}])

.controller( 'ProjectContentCtrl', ['$location', '$mdSidenav', '$rootScope', '$sce', '$scope', 'contentList', 'ContentModel', 'project', 'titleService', function ProjectController( $location, $mdSidenav, $rootScope, $sce, $scope, contentList, ContentModel, project, titleService ) {
   
    //TODO: DEPRECIATE
    titleService.setTitle(project.title + ' | Content | CRE8.XYZ');
    
    $scope.contentList = contentList;
   
    $scope.newContent = {};
    $scope.newContent.parent = project.id;

    //TODO: BETTER PROCEDURAL CONTENT
    if ($scope.contentList.length == 0){
        $scope.contentList = [];
        for(var i=0;i < 50;i++){

            var words =["The sky", "above", "the port","was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less","." ,"I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story","." ,"It", "was", "a pleasure", "to", "burn"];
            var title = [];
            var content = [];
            var tags = [];

            var x = 7;
            while(--x) title.push(words[Math.floor(Math.random() * words.length)]);
            
            var y = 100;
            while(--y) content.push(words[Math.floor(Math.random() * words.length)]);
            
            var z = 10;
            while(--z) tags.push(words[Math.floor(Math.random() * words.length)]);

            $scope.contentList.push({
                id:i,
                model:'CONTENT',
                title:title.join(' '),
                content:content.join(' '),
                tags: tags.join(','),
                reactions:{plus:0,minus:0},
                associatedModels:[{type:'PROJECT',address:$scope.project.id}],
                createdAt:new Date(),
                user:{username:'CRE8', id:'57ab77fa804f7c11002a78db', avatarUrl:'http://localhost:1337/images/loading.gif'},
            });
        }
    }

    //TODO: BETTER | TAG STORAGE
    //TODO: COMPLEX QUERIES
    $scope.loadTags = function(){
        $scope.tags = $scope.contentList.map(function(obj){
            var returnObj = {};
            if(obj.tags){obj.tags = obj.tags.split(',')}
            returnObj = obj.tags;
            return returnObj;
        });

        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
         
        function countInArray(array, value) {
            return array.reduce(function(n, x){ return n + (x === value)}, 0);
        }

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



    //TODO: DEPRECIATE
    $scope.reply = function(activity){
        if ($rootScope.currentUser){$mdSidenav('content').toggle()}
        else{$mdSidenav('login').toggle()}
    };

}])
    
.controller( 'ProjectCharterCtrl', ['$location', '$mdSidenav', '$sailsSocket', '$sce', '$scope', 'ContentModel', 'motions', 'project', 'titleService', function ProjectController( $location, $mdSidenav, $sailsSocket, $sce, $scope, ContentModel, motions, project, titleService ) {
    
    //TODO: DEPRECIATE
    titleService.setTitle(project.title + ' | Charter | CRE8.XYZ');

    //TODO: PROJECT CHARTER
    //TODO: MOTIONS ++ VALIDATIONS
    
    $scope.newMotion = {};
    //$scope.motions = motions;  

    //TODO: ORG EARNS TOKENS WHEN WE CREATE.. PROTOCOL BALANCE AND REPUTATION
    //TODO: FIRE IS MOTION FOR EACH FILE .. --> LIKE THE CODE.. GIT

    //TODO: CHARTER
    $scope.enactedMotions = [
        {title:'Member Creation Protocol', type:'PROTOCOL', content:'Simple Majority of active participants', reactions:{plus:0, minus:0}, id:1},
        {title:'Task Validation Protocol', type:'PROTOCOL', content:'Governs the topology of reputation in governance with repect to the validation of task associations.', reactions:{plus:0, minus:0}, id:1},
        {title:'Time Validation Protocol', type:'PROTOCOL', content:'Governs the topology of reputation in governance with repect to the validation of time worked.', reactions:{plus:0, minus:0}, id:1},
        {title:'Project Validation Protocol', type:'PROTOCOL', content:'Governs the topology of reputation in governance with repect to the association of projects.', reactions:{plus:0, minus:0}, id:1},
        {title:'Content Validation Protocol', type:'PROTOCOL', content:'How can content be linked to a project.', reactions:{plus:0, minus:0}, id:1},
        {title:'Active Reputation Protocol', type:'PROTOCOL', content:'Governs the reputation decay function.', reactions:{plus:0, minus:0}, id:1},
        {title:'Manifold Protocol(s)', type:'PROTOCOL', content:'Governs the reputation decay function.', reactions:{plus:0, minus:0}, id:1},
        //{title:'Motion Validation Protocol', content:'Simple Majority ', id:1},
        {title:'app.js', type:'FILE', content:'function(model){var create = true}', reactions:{plus:0, minus:0}, id:1},
    ];  

    //LINK MOTIONS TO UNVALIDATED 'PROPOSALS' | VEHICE TO SEND 
    $scope.motions = [
        {title:'Motion to Create Member -- Troverman', type:'CREATE MEMBER', content:'Resolution to the Question: Should Troverman Be afforded membership.', reactions:{plus:0, minus:0}, id:1},
        {title:'Motion to Create Order', type:'CREATE ORDER', content:'Resolution to the Question: Should NOVO Create a Position in the Market', reactions:{plus:0, minus:0}, id:1},
        {title:'Motion to Associate Project', type:'CREATE PROJECT ASSOCIATION', content:'Resolution to the Question: Should NOVO Associate PROJECT as a Parent Organization', reactions:{plus:0, minus:0}, id:1},
        {title:'Motion to Create Transaction',  type:'CREATE TRANSACTION', content:'Resolution to the Question: Should NOVO Send 1 CRE8 to PROJECT', reactions:{plus:0, minus:0}, id:1},
        //SPACE TO VALIDATE TASKS AND TIME? --> DONT NEED THE VEHICLE REALLY
        {title:'Motion to Associate Task', type:'CREATE TASK ASSOCIATION', content:'Resolution to the Question: Should NOVO Associate PROJECT as a Parent Organization', reactions:{plus:0, minus:0}, id:1},
        //{title:'Motion to Create Item', type:'ITEM', content:'CREATE' id:1},
        {title:'Motion to Update File',  type:'UPDATE FILES | COMMIT | PULL REQUEST', content:'{git commit message} // ++ function(model){var creation = true}', reactions:{plus:0, minus:0}, id:1},
    ];  

    $scope.status = [
        'Enacted',
        'Pending'
    ];

    $scope.types = [
        'PROTOCOL',
        'CREATE MEMBER',
        'CREATE ORDER',
        'CREATE TRANSACTION',
        'CREATE PROJECT ASSOCIATION',
        'CREATE TASK ASSOCIATION',
        'UPDATE FILES',
    ];

}])

.controller( 'ProjectLedgerCtrl', ['$interval', '$location', '$mdSidenav', '$rootScope', '$scope', 'project', 'titleService', 'TransactionModel', 'transactions', 'transactionsFrom', 'transactionsTo', function ProjectController( $interval, $location, $mdSidenav, $rootScope, $scope, project, titleService, TransactionModel, transactions, transactionsFrom, transactionsTo ) {
    
    //TODO: DEPRECIATE
    titleService.setTitle(project.title + ' | Ledger | CRE8.XYZ');
    
    //INITALIZE LOCAL VARIABLES 
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.project = project;
    $scope.searchQuery = [];
    $scope.transactionsFrom = transactionsFrom;
    $scope.transactionsTo = transactionsTo;
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

    //TODO: DEPRECIATE IDENTIFIER AND AMOUNT
    if ($scope.transactions.length == 0){

        var timeObject = new Date(); 
        var exampleSetExpense = [
            {to:{title:'Trevor Overman', id:project.id, avatarUrl:project.avatarUrl}, tags:'PAYROLL,HUMAN', content:'PAY TREVOR'},
            {to:{title:'Hot Shot Programmer', id:project.id, avatarUrl:project.avatarUrl}, content:'PAY PROGRAMMER', tags:'PAYROLL,HUMAN'},
            {to:{title:'Sarah Human', id:project.id, avatarUrl:project.avatarUrl}, content:'PAY SARAH',  tags:'PAYROLL,HUMAN'},
            {to:{title:'David Create', id:project.id, avatarUrl:project.avatarUrl}, content:'PAY DAVID',  tags:'PAYROLL,HUMAN'},
            {to:{title:'OFFICE SUPPLIES INC', id:project.id, avatarUrl:project.avatarUrl}, content:'PURCHASE SUPPLIES', tags:'SUPPLIES,HARDWARE,BUSINESS,INFRASTRUCTURE'},
            {to:{title:'COMPUTER SERVICES INC', id:project.id, avatarUrl:project.avatarUrl}, content:'PURCHASE TECHNOLOGY', tags:'SERVER,COMPUTER,CLOUD,SERVICES'}
        ];

        var exampleSetRevenue = [
            {from:{title:'CUSTOMER', id:project.id, avatarUrl:project.avatarUrl}, content:'PAYMENT FOR PRODUCTS', tags:'CUSTOMER,EXAMPLE'},
            {from:{title:'CUSTOMER', id:project.id, avatarUrl:project.avatarUrl}, content:'PAYMENT FOR SERVICES', tags:'CLIENT,SEVICES,DELIVERABLE'},
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
                amount:10*Math.round(0.5*Math.random() * t), 
                tags:exampleSetExpense[randomIndexExpense].tags, 
                reactions:{plus:Math.round(Math.random()*10), minus:Math.round(Math.random()*2)}
            })
            $scope.transactionsTo.push({
                to: {id:project.id, title:project.title, avatarUrl:project.avatarUrl}, 
                from: exampleSetRevenue[randomIndexRevenue].from, 
                amountSet:{
                    CRE8: 10*Math.round(0.5*Math.random() * t)
                },
                content:'SEED REVENUE', 
                createdAt:new Date(timeObject.getTime() + 10000 * i),
                amount:10*Math.round(Math.random() * t),
                tags: exampleSetRevenue[randomIndexRevenue].tags, 
                reactions:{plus:Math.round(Math.random()*10), minus:Math.round(Math.random()*2)}
            })
        }
        $scope.transactions = $scope.transactionsFrom.concat($scope.transactionsTo);
    }

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var transactionIndex = $scope.time.map(function(obj){return obj.id}).indexOf(item.id);
            if (timeIndex != -1){
                $scope.newReaction.associatedModels = [{type:'TRANSACTION', id:item.id}];
                $scope.transactions[transactionIndex].reactions[type]++;
                ReactionModel.create($scope.newReaction);
            }
        }
        else{$mdSidenav('login').toggle();}
    };

    //TODO: DEPRECIATE
    $scope.reply = function(activity){
        if ($rootScope.currentUser){
            var index = $scope.transactions.map(function(obj){return obj.id}).indexOf(activity.id);
            $scope.transactions[index].showReply = !$scope.transactions[index].showReply;
        }
        else{$mdSidenav('login').toggle()}
    };

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










    //TODO: CALCULATIONS..
    //TODO: SUM WITH TAGS.. :)
    //TODO: REFACTOR.
    //TODO: FUNCTIONSAL
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

    //FXN TO CHANGE ASSETS --> ||| DEFAUT ASSET SERIES ARE BASED ON RECENT HISTORY... SORTED BY AMOUNT, MAGNITUDE IS RELATIVE
    
    //console.log($scope.sortedTransactionAssets)

    //SERIES FOR EACH ASSET
    //$scope.transactions.reduce(function(a,b,i) {
    //    for (x in Object.keys(b.amountSet)){
    //       Object.keys(b.amountSet)[x];
    //    }
    //},[0,0]);
    //series for tag, series for asset.. axis in in asset amount.. 

    //console.log($scope.transactions);

    //get total asset set 
    //sortedTransactionAssets
    //combin atorial filter
    //by asset by tag

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

    //console.log($scope.transactionsByIdentifier);
    //console.log($scope.transactionsByTags);

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
        //console.log($scope.pie.series[0].data)
    };

    $scope.selectOverview = function(){
        $scope.pie.series[0].data = [];
        $scope.pie.series[0].data = [
            {name: 'Expense', y: $scope.sumFrom[$scope.sumFrom.length-1][1]}, 
            {name: 'Revenue', y: $scope.sumTo[$scope.sumTo.length-1][1]}
        ];
    };
    $scope.selectOverview();









    //TODO: QUERY..
    //TODO: COMPLEX FILTER..
    $scope.selectTag = function(tag){
        //$scope.searchQuery = tag;
        //COMPOUND QUERY
        //FROM, TO, BOTH, Tag, Identifer
        $scope.searchQuery.push({text:tag, type:'TAG'})
        var query = {member:$scope.member.id, tag:tag, from:$scope.member.id, to:$scope.member.id, identifer:$scope.identifer};
        TransactionModel.getSome('query', query, 20, 0, 'createdAt DESC').then(function(transactions){
            $scope.transactions = transactions;
        });
    };

    //TODO: TAGS
    $scope.selectRevenue = function(){
        $scope.transactionTags = $scope.transactionsTo.map(function(obj){
            var returnArray = [];
            var amount = obj.amountSet['USD'] || 0;
            if(obj.tags){
                for (x in obj.tags){returnArray.push({tag:obj.tags[x].trim().toLowerCase(),amount:amount})}
            }
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
        console.log($scope.pie.series[0].data)
    };

}])

.controller( 'ProjectItemsCtrl', ['$location', '$mdSidenav', '$sailsSocket', '$scope', 'items', 'project', 'titleService', function ProjectMarketplaceController( $location, $mdSidenav, $sailsSocket, $scope, items, project, titleService) {
   
    //TODO: DEPRECIATE
    titleService.setTitle(project.title + ' | Items | CRE8.XYZ');

    $scope.items = items;

    if ($scope.items.length == 0){
        $scope.items = [];
        for(var i=0;i < 50;i++){
            var items = [
                {title:'Random Thing', tags:'random,thing,what', content:'This is a random thing', user:{username:'troverman'}},
                {title:'Eight Print', tags:'eight,symbolism,ethos', content:'This is an eight', user:{username:'troverman'}},
                {title:'Rare Item', tags:'rare,item,create', content:'This is a Rare Item', user:{username:'troverman'}},
                {title:'Rare Book', tags:'rare,book,reading,literature', content:'This is a Rare Book', user:{username:'troverman'}},
                {title:'Rare Cloth', tags:'rare,cloth,supplies,art', content:'This is a Rare Cloth', user:{username:'troverman'}},
                {title:'Rare Shirt', tags:'rare,clothes,cloth,apparal,shirt', content:'This is a Rare Shit', user:{username:'troverman'}},

            ];
            var item = items[Math.floor(Math.random()*items.length)];

            $scope.items.push({
                id:i,
                title: item.title,
                content: item.content,
                tags: item.tags,
                reactions:{plus:0,minus:0},
                user:item.user
            })
        }
    }

    $scope.items.map(function(obj){
        if(obj.tags){obj.tags=obj.tags.split(',')}
        return obj;
    });

    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    //TODO: ROOTSCOPE THIS
    //TODO: COMPLEX QUERY 
    $scope.loadTags = function(){
        $scope.tags = $scope.items.map(function(obj){
            return obj.tags;
        });
        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0)}
        $scope.sortedTagArray = [];
        for (x in $scope.tags){
            var amount = countInArray($scope.tags, $scope.tags[x]);
            if ($scope.sortedTagArray.map(function(obj){return obj.element}).indexOf($scope.tags[x]) == -1){
                $scope.sortedTagArray.push({amount:amount, element:$scope.tags[x]})
            }
        }
        $scope.sortedTagArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    };
    $scope.loadTags();
    $scope.sortedAssociationArray = $scope.sortedTagArray;
    $scope.filterSet = {tags:$scope.sortedTagArray, associations:$scope.sortedAssociationArray, locations:$scope.sortedLocationsArray}
    //TODO: COMPLEX QUERY

}])

.controller( 'ProjectMembersCtrl', ['$location', '$mdSidenav', '$sailsSocket', '$rootScope', '$scope', 'MemberModel', 'members', 'project', 'titleService', function ProjectController( $location, $mdSidenav, $sailsSocket, $rootScope, $scope, MemberModel, members, project, titleService ) {
   
    //TODO: DEPRECIATE
    titleService.setTitle(project.title + ' | Members | CRE8.XYZ');
   
    $scope.members = members;
    $scope.newMember = {};
    $scope.project = project;

    $scope.createMember = function() {
        if ($rootScope.currentUser){
            $scope.newMember.user = $rootScope.currentUser.id;
            $scope.newMember.project = project.id;
            MemberModel.create($scope.newMember).then(function(model) {$scope.newMember = {};});
        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: SOCKET
    $sailsSocket.subscribe('projectmember', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.members.unshift(envelope.data);
                break;
        }
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

    //TODO: AUDIT
    $rootScope.$watch('baseMarkets' ,function(){
        $scope.populateBaseMarkets();
        $scope.populateMarkets();
    },true);
   
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


    //TODO: AUDIT
    $rootScope.$watch('markets' ,function(){
        $scope.populateMarkets();
    },true);


    //TODO: DEPRECIATE
    $scope.reply = function(activity){
        if ($rootScope.currentUser){$mdSidenav('content').toggle()}
        else{$mdSidenav('login').toggle()}
    };

}])

.controller( 'ProjectProjectsCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'project', 'ProjectModel', 'projects', 'titleService', function ProjectController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, project, ProjectModel, projects, titleService ) {
    
    //TODO: DEPRECIATE
    titleService.setTitle(project.title + ' | Projects | CRE8.XYZ');
    
    $scope.project = project;
    $scope.projects = projects;

    //TODO: HMM
    if ($scope.projects.length == 0){
        $scope.projects = [];
        for(var i=0;i < 10;i++){
            //$scope.projects.push({title:'Project1'});
        }
    }

    //TODO: LOL
    if ($scope.projects.length > 0){
        var locationProjects = $scope.projects.map(function(obj){if(obj.location){return obj}}).filter(Boolean);
        console.log(locationProjects);
        if (locationProjects.length > 0){
            if($scope.project.location){
                $rootScope.map = {
                    center: {latitude: $scope.project.location.lat, longitude: $scope.project.location.lng },
                    zoom: 13
                };
            }
            else{
                $rootScope.map = {
                    center: {latitude: locationProjects[0].location.lat, longitude: locationProjects[0].location.lng },
                    zoom: 13
                };
            }
            $rootScope.options = {
               disableDefaultUI: true
            };
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
            console.log($rootScope.markers)
        }
    }

    //TODO: DEPRECIATE
    $scope.createProject = function(newProject) {
        if ($rootScope.currentUser){
            $scope.newProject.user = $rootScope.currentUser.id;
            $scope.newProject.parent = $scope.project.id
            ProjectModel.create($scope.newProject).then(function(model) {
                $scope.newProject = {};
                $scope.projects.unshift(model);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

}])

.controller( 'ProjectSettingsCtrl', ['$scope', 'project', 'titleService', function ProjectSettingsController( $scope, project, titleService ) {
    
    titleService.setTitle(project.title + ' | Settings | CRE8.XYZ');

}])

.controller( 'ProjectTasksCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'project', 'ReactionModel', 'TaskModel', 'tasks', 'titleService', function ProjectController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, project, ReactionModel, TaskModel, tasks, titleService ) {
    
    titleService.setTitle(project.title + ' | Tasks | CRE8.XYZ');
    
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.newTask = {};
    $scope.tasks = tasks;
    $scope.project = project;

    //TODO: REAL IDS
    //TODO: SAMPLE CRYSTAL FUN
    if ($scope.tasks.length == 0){
        $scope.tasks = [];
        for(var i=0;i < 50;i++){
            //ORG CRYSTAL
            var canvas = {
                id:i,
                title:'Canvas and Organize Participants',
                content:'Community Evangelist, doing the leg work of engaging and growing the community! Let\'s Go Door to Door!',
                tags: 'canvas, organize, register, campaign, community',
                reactions:{plus:0,minus:0},
                user:{username:'CRE8', id:'57ab77fa804f7c11002a78db', avatarUrl:'http://localhost:1337/images/loading.gif'},
                associatedModels:[{type:'PROJECT',address:$scope.project.id}],
            };

            var attend = {
                id:i,
                title:'Attend Community Events',
                content:'Attend Community Events, Come out and join us!',
                tags: 'attend, community, event, presence',
                reactions:{plus:0,minus:0},
                user:{username:'CRE8', id:'57ab77fa804f7c11002a78db', avatarUrl:'http://localhost:1337/images/loading.gif'},
                associatedModels:[{type:'PROJECT',address:$scope.project.id}],
            };

            var organize = {
                id:i,
                title:'Organize Community Event',
                content:'Help Cocreate Community Events, Let\'s Collab!',
                tags: 'create, content, presence',
                reactions:{plus:0,minus:0},
                user:{username:'CRE8', id:'57ab77fa804f7c11002a78db', avatarUrl:'http://localhost:1337/images/loading.gif'},
                associatedModels:[{type:'PROJECT',address:$scope.project.id}],
            };
            if (i % 2){$scope.tasks.push(canvas)}
            else if (i % 3){$scope.tasks.push(attend)}
            else{$scope.tasks.push(organize)}
        }
    }


    $scope.tasks.map(function(obj){
        obj.model = 'TASK';

        //TODO: MOVE TO PROTOCOL
        obj.tokens = [];
        obj.tokens.push('CRE8');
        obj.tokens.push('CRE8+TIME');
        obj.tokens.push('CRE8+TIME+'+obj.title.toUpperCase().replace(/ /g, '-')+'.'+obj.id);
        obj.tokens.push('CRE8+TIME+'+$scope.project.title.toUpperCase().replace(/ /g, '-')+'.'+$scope.project.id);
        if (obj.tags){
            obj.tags = obj.tags.split(',');
            for (x in obj.tags){
                console.log(obj.tags[x])
                obj.tokens.push('CRE8+TIME+'+obj.tags[x].trim().toUpperCase());
                obj.tokens.push('CRE8+TIME+'+obj.title.toUpperCase().replace(/ /g, '-')+'.'+obj.id+'+'+obj.tags[x].trim().toUpperCase());
                obj.tokens.push('CRE8+TIME+'+$scope.project.title.toUpperCase().replace(/ /g, '-')+'.'+$scope.project.id+'+'+obj.tags[x].trim().toUpperCase());
            }
        }
        //CREATE PROTOCOL .. VALIDATE PROTOCOL .. REACT PROTOCOL .. 

        return obj;
    });

    //TOD): DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var taskIndex = $scope.tasks.map(function(obj){return obj.id}).indexOf(item.id);
            if (taskIndex != -1){
                $scope.newReaction.associatedModels = [{type:'TASK', id:item.id}];
                $scope.tasks[taskIndex].reactions[type]++;
                ReactionModel.create($scope.newReaction);
            }
        }
        else{$mdSidenav('login').toggle();}
    };






    $scope.filterContent = function(filter) {
        $rootScope.stateIsLoading = true;
        TaskModel.getSome('tag', filter, 20, 0, 'createdAt DESC').then(function(tasks){
            $rootScope.stateIsLoading = false;
            $scope.tasks = tasks;
            $scope.loadTags();
        });
    };

    //TODO: BETTER | TAG STORAGE
    $scope.loadTags = function(){
        $scope.tags = $scope.tasks.map(function(obj){
            return obj.tags;;
        });
        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0)}
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

    //TODO: DEPRECIATE
    $scope.reply = function(activity){
        if ($scope.currentUser){$mdSidenav('content').toggle()}
        else{$mdSidenav('login').toggle()}
    };
    
    //TODO: WEBSOCKET
    $sailsSocket.subscribe('task', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.tasks.unshift(envelope.data);
                break;
        }
    });

}])

.controller( 'ProjectTimeCtrl', ['$rootScope', '$sailsSocket', '$scope', 'project', 'ReactionModel', 'time', 'titleService', function ProjectTimeController( $rootScope, $sailsSocket, $scope, project, ReactionModel, time, titleService) {
    
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
    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.newReaction = {};
    $scope.options = {scrollwheel: false};
    
    $scope.time = time;
    $scope.time = time.map(function(obj){
        var endTime = new Date(obj.createdAt)
        obj.startTime = new Date(endTime.setSeconds(endTime.getSeconds() - obj.amount));
        obj.endTime = new Date(obj.createdAt);
        if (obj.task){$scope.eventSources.push({title:obj.task.title,start:obj.startTime,end:obj.endTime,allDay:false,url:'time/'+obj.id});}
        return obj
    });

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var timeIndex = $scope.time.map(function(obj){return obj.id}).indexOf(item.id);
            if (timeIndex != -1){
                $scope.newReaction.associatedModels = [{type:'TIME', id:item.id}];
                $scope.time[timeIndex].reactions[type]++;
                ReactionModel.create($scope.newReaction);
            }
        }
        else{$mdSidenav('login').toggle();}
    };

    //TODO: DEPRECIATE
    $scope.reply = function(item){
        if ($rootScope.currentUser){$mdSidenav('content').toggle();}
        else{$mdSidenav('login').toggle()}
    };

}]);