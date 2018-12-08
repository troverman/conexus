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
                return ProjectModel.getByUrl($stateParams.path);
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
        resolve: {
            posts: ['PostModel', 'project', function(PostModel, project){
                return PostModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
            }],
            tasks: ['project', 'TaskModel', function(project, TaskModel){
                return TaskModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
            }],
            transactionsFrom: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.getSome('from', project.id, 100, 0, 'createdAt DESC');
            }],
            transactionsTo: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.getSome('to', project.id, 100, 0, 'createdAt DESC');
            }],
            work: ['project', 'WorkModel', function(project, WorkModel){
                return WorkModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
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
        resolve: {
            channels: [function() {
                return [{title:'general'},{title:'tasks'},{title:'create'},{title:'task1'}]
            }],
            posts: ['PostModel', 'project', function(PostModel, project){
                return PostModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
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
        resolve: {
            content: ['PostModel', 'project', function(PostModel, project){
                return PostModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
            }],            
        }
    })
    //TODO: FEATURE | ALLOWS FOR BUDGET MANAGING PROCESS -- AKA CREATE MARKET ORDERS FOR AN ORG BASED ON REPUTATION VOTING
    //TYPE | MOTION TO JOIN MOTION TO CREATE TRANSACTION
    .state( 'project.charter', {
        url: '/charter',
        views: {
            "projectCharter": {
                controller: 'ProjectCharterCtrl',
                templateUrl: 'project/templates/charter.tpl.html'
            }
        },
        resolve: {
            motions: ['PostModel', 'project', function(PostModel, project){
                return PostModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
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
        resolve: {
            transactions: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
            }],
            transactionsFrom: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.getSome('from', project.id, 100, 0, 'createdAt DESC');
            }],
            transactionsTo: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.getSome('to', project.id, 100, 0, 'createdAt DESC');
            }],
        }
    })
    .state( 'project.marketplace', {
        url: '/marketplace',
        views: {
            "projectMarketplace": {
                controller: 'ProjectMarketplaceCtrl',
                templateUrl: 'project/templates/marketplace.tpl.html'
            }
        },
        resolve: {
            items: ['project', 'WorkModel', function(project, WorkModel) {
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
        resolve: {
            members: ['MemberModel', 'project', function(MemberModel, project) {
                return MemberModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
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
                return OrderModel.getSome('project', project.id, 10, 0, 'createdAt DESC');
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
        resolve: {
            tasks: ['project', 'TaskModel', function(project, TaskModel){
                return TaskModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
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
            work: ['project', 'WorkModel', function(project, WorkModel) {
                return WorkModel.getSome('project', project.id, 200, 0, 'createdAt DESC');
            }]
        }
    })
}])

.controller( 'ProjectCtrl', ['$location', '$mdSidenav', '$rootScope', '$scope', 'config', 'MemberModel', 'project', 'titleService', 'TransactionModel', function ProjectController( $location, $mdSidenav, $rootScope, $scope, config, MemberModel, project, titleService, TransactionModel ) {
    titleService.setTitle(project.title + ' | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newMember = {};
    $scope.newTransaction = {};

    //TODO
    //$ROOTSCOPE --> PASS TO NAV
    $scope.newTransaction.identifier = 'CRE8';
    $scope.newTransaction.content = project.title + ' here\'s some '+$scope.newTransaction.identifier;

    $scope.project = project;

    //TODO: MEH
    if(!$scope.project){$location.path('/')}

    $rootScope.to = $scope.project.id;
    $rootScope.associatedModel = {
        address: $scope.project.id,
        type: 'PROJECT',
    };

    //TODO: BETTER?
    $rootScope.project = $scope.project;
    $rootScope.member = null;

    if ($scope.project.location){ 
        $scope.map = {
            center: {latitude: project.location.lat, longitude: project.location.lng },
            zoom: 13
        };
        $scope.markers = [{
            id:project.id,
            content:project.title,
            coords:{
                latitude:project.location.lat,
                longitude:project.location.lng
            }
        }];
        $scope.options = {
           disableDefaultUI: true
        };
    }

    if($scope.currentUser){$scope.newTransaction.from = $scope.currentUser.id}

    $scope.contentToggle = function(){
        if($scope.currentUser){$mdSidenav('content').toggle()}
        else{$mdSidenav('login').toggle()}
    };

    $scope.createMember = function(){
        if($scope.currentUser){
            $scope.newMember.user = config.currentUser.id;
            $scope.newMember.project = project.id;
            MemberModel.create($scope.newMember).then(function(model) {
                $scope.newMember = {};
                $mdSidenav('information').toggle()
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    //DEPRECIATE
    $scope.createTransaction = function(){
        if($scope.currentUser){
            $scope.newTransaction.to = $scope.project.id;
            TransactionModel.create($scope.newTransaction).then(function(model){
                $scope.newTransaction = {};
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.isProjectCreator = function() {
        if($scope.currentUser){return $scope.currentUser.id == $scope.project.user;}
        else {return false;}
    };

    $scope.subNavToggle = function(){
        $mdSidenav('subNav').toggle();
    };

    $scope.tokenToggle = function(item){
        $mdSidenav('tokens').toggle();
        //$rootScope.globalTokens = item;
    };

    $scope.transactionToggle = function(){
        if($scope.currentUser){$mdSidenav('transaction').toggle();}
        else{$mdSidenav('login').toggle()}
    };

}])

.controller( 'ProjectAboutCtrl', ['$location', '$sailsSocket', '$sce', '$scope', '$stateParams', 'config', 'lodash', 'project', 'titleService', function ProjectMarketplaceController( $location, $sailsSocket, $sce, $scope, $stateParams, config, lodash, project, titleService) {

    titleService.setTitle('About | ' + project.title + ' | CRE8.XYZ');

}])

.controller( 'ProjectActivityCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'PostModel', 'posts', 'project', 'ReactionModel', 'tasks', 'titleService', 'transactionsFrom', 'transactionsTo', 'work', function ProjectActivityController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, lodash, PostModel, posts, project, ReactionModel, tasks, titleService, transactionsFrom, transactionsTo, work ) {
    titleService.setTitle('Activity | ' + project.title + ' | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.contentList = posts;
    $scope.project = project;
    $scope.tasks = tasks;
    $scope.work = work;

    $scope.transactionsFrom = transactionsFrom;
    $scope.transactionsTo = transactionsTo;
    $scope.transactions = $scope.transactionsFrom.concat($scope.transactionsTo);
    //$scope.transactions = $scope.transactions.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 

    //POST, WORK, TASK CREATE, VALIDATION (VOTE)
    //TODO
    $scope.contentList = $scope.contentList.map(function(obj){
        obj.model = 'CONTENT';
        return obj;
    });
    $scope.tasks = $scope.tasks.map(function(obj){
        obj.model = 'TASK';
        return obj;
    });
    $scope.transactions = $scope.transactions.map(function(obj){
        obj.model = 'TRANSACTION';
        return obj;
    });
    $scope.work = $scope.work.map(function(obj){
        obj.model = 'WORK';
        return obj;
    });
    
    $scope.activity = [].concat.apply([], [$scope.contentList, $scope.tasks, $scope.transactions, $scope.work]);
    $scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.activity = $scope.activity.slice(0,100);

    $scope.createContent = function(content) {
        if ($scope.currentUser){
            if (content){$scope.newContent.post = content.id;}
            $scope.newContent.user = $scope.currentUser.id;
            $scope.newContent.project = $scope.project.id;
            //TODO
            $scope.newContent.model = 'CONTENT';
            $scope.newContent.type = 'POST';
            //$scope.newContent.tags = $scope.newContent.tags.map(function(obj){
            //    return obj.text
            //}).join(",");
            console.log($scope.newContent);
            PostModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
                //TODO
                model.model = 'CONTENT';
                $scope.activity.unshift(model);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: MODELS | ONLY POST/CONTENT
    $scope.createReaction = function(content, type){
        if($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.post = content.id;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
            var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(content.id);
            if (type =='plus'){$scope.contentList[index].plusCount++}
            if (type =='minus'){$scope.contentList[index].minusCount++}
            ReactionModel.create($scope.newReaction).then(function(model){
                $scope.newReaction = {};
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.reply = function(activity){
        if ($scope.currentUser){
            var index = $scope.activity.map(function(obj){return obj.id}).indexOf(activity.id);
            $scope.activity[index].showReply = !$scope.activity[index].showReply;
        }
        else{$mdSidenav('login').toggle()}
    };

    $sailsSocket.subscribe('post', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.activity.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.contentList, {id: envelope.id});
                break;
        }
    });

    $sailsSocket.subscribe('reaction', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.contentList.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.contentList, {id: envelope.id});
                break;
        }
    });

    $sailsSocket.subscribe('task', function (envelope) {
        console.log(envelope.verb)
        switch(envelope.verb) {
            case 'created':
                console.log(envelope.data);
                //TODO
                //envelope.data.model = 'CONTENT';
                $scope.activity.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.tasks, {id: envelope.id});
                break;
        }
    });

}])

.controller( 'ProjectAssetsCtrl', ['$scope', 'config', 'project', 'titleService', function ProjectAssetsController( $scope, config, project, titleService ) {
    titleService.setTitle(project.title + ' | conex.us');
    $scope.currentUser = config.currentUser;

}])

.controller( 'ProjectChannelsCtrl', ['$location', '$mdSidenav', '$sailsSocket', '$sce', '$scope', 'channels', 'config', 'posts', 'project', 'titleService', function ProjectController( $location, $mdSidenav, $sailsSocket, $sce, $scope, channels, config, posts, project, titleService ) {
    titleService.setTitle('Channels | ' + project.title + ' | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.channels = channels;
    $scope.newContent = {};
    $scope.project = project;
    $scope.posts = posts;

    $scope.createContent = function() {
        if ($scope.currentUser){
            $scope.newContent.user = $scope.currentUser.id;
            $scope.newContent.project = $scope.project.id;
            PostModel.create($scope.newPost).then(function(model) {
                $scope.newContent = {};
                $scope.posts.unshift(model);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $sailsSocket.subscribe('post', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                console.log(envelope.data);
                $scope.posts.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.posts, {id: envelope.id});
                break;
        }
    });

}])

.controller( 'ProjectContentCtrl', ['$location', '$mdSidenav', '$rootScope', '$sce', '$scope', 'content', 'PostModel', 'project', 'titleService', function ProjectController( $location, $mdSidenav, $rootScope, $sce, $scope, content, PostModel, project, titleService ) {
    titleService.setTitle('Content | ' + project.title + ' | CRE8.XYZ');
    $scope.contentList = content;
    $scope.newContent = {};
    $scope.project = project;

    $scope.newContent.parent = project.id;
    //$scope.newContent.tags = project.title+','
    $scope.selectedType = 'POST';

    //TODO: BETTER | TAG STORAGE
    $scope.loadTags = function(){
        $scope.tags = $scope.contentList.map(function(obj){
            console.log(obj);
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

    //DEPRECIATE
    $scope.createContent = function(content) {
        if ($scope.currentUser){
            if(content){$scope.newContent.post = content.id;}
            $scope.newContent.user = $scope.currentUser.id;
            $scope.newContent.project = $scope.project.id;
            $scope.newContent.tags = $scope.newContent.tags.map(function(obj){
                return obj.text
            }).join(",");
            $scope.newContent.type = $scope.selectedType;
            PostModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
                $scope.contentList.unshift(model);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.loadTags = function(query) {
        //return $http.get('/tags?query=' + query);
    };

    $scope.reply = function(activity){
        if ($scope.currentUser){
            var index = $scope.content.map(function(obj){return obj.id}).indexOf(activity.id);
            $scope.content[index].showReply = !$scope.content[index].showReply;
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.search = function(){};

    $scope.selectType = function(type){
        $scope.selectedType = type;
    };

}])

.controller( 'ProjectCharterCtrl', ['$location', '$mdSidenav', '$sailsSocket', '$sce', '$scope', 'config', 'motions', 'PostModel', 'project', 'titleService', function ProjectController( $location, $mdSidenav, $sailsSocket, $sce, $scope, config, motions, PostModel, project, titleService ) {
    titleService.setTitle('Charter | ' + project.title + ' | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newMotion = {};
    $scope.motions = motions;  
    $scope.newMotionToggleVar = false;
    $scope.project = project;

    $scope.createMotion = function(){
        if($scope.currentUser){
            $scope.newMotion.user = $scope.currentUser;
            $scope.newMotion.project = $scope.project.id;
            $scope.newMotion.type = 'MOTION';
            //RELATIONSHIP | LIST
            $scope.newMotion.relationshipModelAddress = $scope.project.id;
            $scope.newMotion.relationshipModel = 'PROJECT';
            PostModel.create($scope.newMotion).then(function(model){
                $scope.newMotion = {};
                $scope.motions.unshift(model);
            });

        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.newMotionToggle = function(){
        $scope.newMotionToggleVar = $scope.newMotionToggleVar ? false : true;
    };

    $scope.search = function(){};

}])

.controller( 'ProjectLedgerCtrl', ['$interval', '$location', '$mdSidenav', '$scope', 'config', 'lodash', 'project', 'titleService', 'TransactionModel', 'transactions', 'transactionsFrom', 'transactionsTo', function ProjectController( $interval, $location, $mdSidenav, $scope, config, lodash, project, titleService, TransactionModel, transactions, transactionsFrom, transactionsTo ) {
    titleService.setTitle('Ledger | ' + project.title + ' | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newTransaction = {};
    $scope.newTransactionToggleVar = false;
    $scope.project = project;
    $scope.newTransaction.to = $scope.project.id;
    if($scope.currentUser){$scope.newTransaction.from = $scope.currentUser.id;}

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
        }],
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            currentMin: 0,
            currentMax: 20,
            title: null,
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {
                text: null
            },
        },
        yAxis: {
            title: {
                text: null
            }
        },
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
        
        title: {
            text: ''
        },
        xAxis: {
            title: {
                text: null
            }
        },
        yAxis: {
            title: {
                text: null
            }
        },
        credits:{enabled:false},
    };

    if ($scope.transactions.length == 0){
        for (var i=0, t=88; i<t; i++) {
            $scope.transactionsFrom.push({to:'EXAMPLE ORGANIZATION', from:project.title.toUpperCase(), identifier:'CRE8', content:'SEED EXPENSE', createdAt:new Date(), amount:Math.round(0.5*Math.random() * t), ledger:'EXPENSE, SEED, EXAMPLE'})
            $scope.transactionsTo.push({to:project.title.toUpperCase(), from:'EXAMPLE ORGANIZATION', identifier:'CRE8', content:'SEED REVENUE', createdAt:new Date(), amount:Math.round(Math.random() * t), ledger:'REVENUE, SEED, EXAMPLE'})
        }
        $scope.transactions = $scope.transactionsFrom.concat($scope.transactionsTo);
    }

    //TAGS
    function countInArray(array, value) {
        return array.reduce(function(n, x){ return n + (x === value)}, 0);
    }

    $scope.transactionTags = $scope.transactions.map(function(obj){
        var returnObj = {};
        if(obj.ledger){
            obj.ledger = obj.ledger.split(',');
        }
        returnObj = obj.ledger;
        return returnObj;
    });
    $scope.transactionTags = [].concat.apply([], $scope.transactionTags);

    $scope.sortedTransactionTags = [];
    for (x in $scope.transactionTags){
        var amount = countInArray($scope.transactionTags, $scope.transactionTags[x]);
        if ($scope.sortedTransactionTags.map(function(obj){return obj.element}).indexOf($scope.transactionTags[x]) == -1){
            $scope.sortedTransactionTags.push({amount:amount, element:$scope.transactionTags[x]})
        }
    }
    $scope.sortedTransactionTags.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    //TAGS

    //DO BY TAGS! SAME ..
    function sumFunction(obj){
        var sumArray = [];
        obj.reduce(function(a,b,i) {
            return $scope.sumArray[i] = parseFloat(a) + parseFloat(b.amount);
        }, 0);
        return sumArray;
    }


    $scope.sumFlow = [];
    $scope.sumFrom = []
    $scope.sumTo = [];
    $scope.sumTransactions = [];
    $scope.transactions = $scope.transactions.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);}).reverse(); 

    //CONCAT
    $scope.transactions.reduce(function(a,b,i) {
        if(b.from == $scope.project.id){return $scope.sumTransactions[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])-parseFloat(b.amount)];}
        if(b.to == $scope.project.id){return $scope.sumTransactions[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])+parseFloat(b.amount)];}
    },[0,0]);

    //CONCAT
    $scope.transactions.reduce(function(a,b,i) {
        if(b.from == $scope.project.id){return $scope.sumFrom[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])+parseFloat(b.amount)];}
        else{return $scope.sumFrom[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])];}
    },[0,0]);

     //CONCAT
    $scope.transactions.reduce(function(a,b,i) {
        if(b.to == $scope.project.id){return $scope.sumTo[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])+parseFloat(b.amount)];}
        else{return $scope.sumTo[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])];}
    },[0,0]);

    //CONCAT
    $scope.transactions.reduce(function(a,b,i) {
        if(b.from == $scope.project.id){return $scope.sumFlow[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])+parseFloat(b.amount)];}
        if(b.to == $scope.project.id){return $scope.sumFlow[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])+parseFloat(b.amount)];}
    },[0,0]);

    $scope.chart.series[0].data = $scope.sumTransactions;
    $scope.chart.series[1].data = $scope.sumFrom;
    $scope.chart.series[2].data = $scope.sumTo;
    //$scope.chart.series[3].data = $scope.sumFlow;

    //BAD
    $scope.startDate = new Date($scope.transactions[0].createdAt);
    $scope.endDate = new Date($scope.transactions[$scope.transactions.length-1].createdAt);

    $scope.transactions = $scope.transactions.reverse();


    $scope.selectExpense = function(){
        //ANIMATE
        //ADD IN TAG BASED GRAPHS WRT EXPENSE
        $scope.transactionTags = $scope.transactionsFrom.map(function(obj){
            var returnObj = {};
            returnObj = obj.ledger;
            return returnObj;
        });
        $scope.transactionTags = [].concat.apply([], $scope.transactionTags);
        $scope.sortedTransactionTags = [];
        for (x in $scope.transactionTags){
            var amount = countInArray($scope.transactionTags, $scope.transactionTags[x]);
            if ($scope.sortedTransactionTags.map(function(obj){return obj.element}).indexOf($scope.transactionTags[x]) == -1){
                $scope.sortedTransactionTags.push({amount:amount, element:$scope.transactionTags[x]})
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
        $scope.pie.series[0].data = [{
            name: 'Expense',
            y: $scope.sumFrom[$scope.sumFrom.length-1][1],
        }, {
            name: 'Revenue',
            y: $scope.sumTo[$scope.sumTo.length-1][1],
        }];
    };
    $scope.selectOverview();

    $scope.selectRevenue = function(){
        //TODO: TAGS
        $scope.transactionTags = $scope.transactionsTo.map(function(obj){
            var returnObj = {};
            returnObj = obj.ledger;
            return returnObj;
        });
        $scope.transactionTags = [].concat.apply([], $scope.transactionTags);
        $scope.sortedTransactionTags = [];
        for (x in $scope.transactionTags){
            var amount = countInArray($scope.transactionTags, $scope.transactionTags[x]);
            if ($scope.sortedTransactionTags.map(function(obj){return obj.element}).indexOf($scope.transactionTags[x]) == -1){
                $scope.sortedTransactionTags.push({amount:amount, element:$scope.transactionTags[x]})
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

    $scope.createContent = function(){};
    $scope.createReaction = function(content, type){};

    $scope.createTransaction = function(){
        $scope.newTransaction.project = $scope.project.id;
        $scope.newTransaction.user = $scope.currentUser.id;
        $scope.newTransaction.ledger = $scope.newTransaction.ledger.map(function(obj){
            return obj.text
        }).join(",");
        TransactionModel.create($scope.newTransaction).then(function(model){
            $scope.newTransaction = {};
            $scope.transactions.unshift(model);
        });
    };

    $scope.newTransactionToggle = function(){
        $scope.newTransactionToggleVar = $scope.newTransactionToggleVar ? false : true;
    };

    $scope.reply = function(activity){
        if ($scope.currentUser){
            var index = $scope.transactions.map(function(obj){return obj.id}).indexOf(activity.id);
            $scope.transactions[index].showReply = !$scope.transactions[index].showReply;
        }
        else{$mdSidenav('login').toggle()}
    };

}])

.controller( 'ProjectMarketplaceCtrl', ['$location', '$mdSidenav', '$sailsSocket', '$scope', '$stateParams', 'config', 'items', 'lodash', 'titleService', function ProjectMarketplaceController( $location, $mdSidenav, $sailsSocket, $scope, $stateParams, config, items, lodash, titleService) {

    $scope.items = items;
    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    $scope.search = function(){};

}])

.controller( 'ProjectMembersCtrl', ['$location', '$mdSidenav', '$sailsSocket', '$scope', 'config', 'MemberModel', 'members', 'project', 'titleService', function ProjectController( $location, $mdSidenav, $sailsSocket, $scope, config, MemberModel, members, project, titleService ) {
    titleService.setTitle('Members | ' + project.title + ' | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.members = members;
    $scope.newMember = {};
    $scope.project = project;

    $scope.createMember = function() {
        if ($scope.currentUser){
            $scope.newMember.user = $scope.currentUser.id;
            $scope.newMember.project = project.id;
            MemberModel.create($scope.newMember).then(function(model) {
                $scope.newMember = {};
                //$scope.transactions.unshift(model);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.search = function(){};

    $sailsSocket.subscribe('projectmember', function (envelope) {
        console.log(envelope.verb)
        switch(envelope.verb) {
            case 'created':
                console.log(envelope.data);
                $scope.members.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.members, {id: envelope.id});
                break;
        }
    });
    
}])

.controller( 'ProjectPositionsCtrl', ['$location', '$sailsSocket', '$scope', '$stateParams', 'config', 'lodash', 'OrderModel', 'orders', 'project', 'titleService', function MemberPositionsController($location, $sailsSocket, $scope, $stateParams, config, lodash, OrderModel, orders, project, titleService) {
    $scope.currentUser = config.currentUser;
    $scope.project = project;
    $scope.orders = orders;
    if ($scope.orders.length >0){
        $scope.orders.forEach(function(part, index) {
            if ($scope.orders[index].identiferSet){$scope.orders[index].identiferSet = $scope.orders[index].identiferSet.split(',');}
            if ($scope.orders[index].amountSet){$scope.orders[index].amountSet = $scope.orders[index].amountSet.split(',');}
            if ($scope.orders[index].identiferSet1){$scope.orders[index].identiferSet1 = $scope.orders[index].identiferSet1.split(',');}
            if ($scope.orders[index].amountSet1){ $scope.orders[index].amountSet1 = $scope.orders[index].amountSet1.split(',');}
        });
    }   
    titleService.setTitle($scope.project.title + ' | Positions | CRE8.XYZ');

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
        legend: {
            enabled: false,
            //align: 'right',
            //verticalAlign: 'top',
            //y: 70,
            //layout: 'vertical'
        },
        tooltip: {
        //    shared: true,
        },
        credits:{enabled:false},
    };

    $scope.baseMarkets = ['Universal Token (onMint)', 'Universal Token (onTrade)', 'USD', 'CRE8', 'NOVO', 'LTC', 'BTC', 'ETH']
    $scope.markets = ['Education', 'Shelter', 'Food', 'Creation', 'Health', 'Security', 'Transparency', 'USD', 'ETH', 'BTC', 'STEEM', 'LTC', 'CRE8', 'onTime', 'onTimeStream', 'onReact', 'onPost','onOrder','onVote','onView','onValidate','onMine','NOVO','CONEX','DURHAM','ALCOA','MARYVILLE','CHAPEL HILL'];
    
    for (x in $scope.baseMarkets){

        var random1 = Math.floor(255*Math.random());
        var random2 = Math.floor(255*Math.random());
        var random3 = Math.floor(255*Math.random());

        $scope.chart.series.push({
            id: 'values'+x,
            type: 'area',
            name: $scope.baseMarkets[x],
            pointPlacement: 'on',
            data: [],
            color: 'rgba('+random1+','+random2+','+random3+',0.3)',
            fillOpacity: 0.3,
        });

    }
   
    for (x in $scope.markets){
        $scope.chart.xAxis.categories.push($scope.markets[x]);
        for (y in $scope.baseMarkets){
            $scope.chart.series[y].data.push((1+1*Math.random())/2);
        }
    }
    
    $scope.newOrderToggle = function(){
        $scope.newOrderToggleVar = $scope.newOrderToggleVar ? false : true;
    };

    $scope.createContent = function(content, type){};

    $scope.createOrder = function() {
        $scope.newOrder.user = $scope.currentUser.id;
        //TODO: PARSE INPUT
        //$scope.newOrder.amountSet = $scope.newOrder.amountSet.replace(/^(\d+(,\d+)*)?$/gm);
        //$scope.newOrder.amountSet1 = $scope.newOrder.amountSet1.replace(/^(\d+(,\d+)*)?$/gm);
        OrderModel.create($scope.newOrder).then(function(model) {
            $scope.newOrder = {};
            $scope.orders.unshift(model);
        });
    };

    //TODO
    $scope.createReaction = function(post, type){};

    $scope.reply = function(item){
        var index = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.orders[index].showReply = !$scope.orders[index].showReply
    };

    $scope.search = function(){};

}])
.controller( 'ProjectProjectsCtrl', ['$location', '$mdSidenav', '$sailsSocket', '$sce', '$scope', 'config', 'project', 'ProjectModel', 'projects', 'titleService', function ProjectController( $location, $mdSidenav, $sailsSocket, $sce, $scope, config, project, ProjectModel, projects, titleService ) {
    titleService.setTitle('Projects | ' + project.title + ' | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newProjectToggleVar = false;
    $scope.project = project;
    $scope.projects = projects;

    $scope.createProject = function(newProject) {
        if ($scope.currentUser){
            $scope.newProject.user = $scope.currentUser.id;
            $scope.newProject.parent = $scope.project.id
            ProjectModel.create($scope.newProject).then(function(model) {
                $scope.newProject = {};
                $scope.projects.unshift(model);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.projectToggle = function () {
        if ($scope.currentUser){$scope.newProjectToggleVar = $scope.newProjectToggleVar ? false : true;}
        else{$mdSidenav('login').toggle()}
    };

    $scope.renderContent = function(content){
        if (content){
            if (!content.includes('>')){
                var replacedText = content.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                return $sce.trustAsHtml(replacedText);
            }
            else{return $sce.trustAsHtml(content)}
        }
    };

    $scope.search = function(){};

}])

.controller( 'ProjectSettingsCtrl', ['$scope', 'config', 'project', 'titleService', function ProjectSettingsController( $scope, config, project, titleService ) {
    titleService.setTitle('Settings | ' + project.title + ' | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
}])

.controller( 'ProjectTasksCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'project', 'TaskModel', 'tasks', 'titleService', function ProjectController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, project, TaskModel, tasks, titleService ) {
    titleService.setTitle('Tasks | ' + project.title + ' | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newTask = {};
    $scope.newTaskToggleVar = false;
    $scope.tasks = tasks;
    $scope.project = project;

    $scope.createTask = function(newTask) {
        if ($scope.currentUser){
            $scope.newTask.user = $scope.currentUser.id;
            $scope.newTask.project = $scope.project.id;
            $scope.newTask.tags = $scope.newTask.tags.map(function(obj){
                return obj.text
            }).join(",");
            TaskModel.create(newTask).then(function(model) {
                $scope.newTask = {};
                $scope.tasks.unshift(model);
            });
        }
        else{$mdSidenav('login').toggle()}
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
            console.log(obj);
            var returnObj = {};
            if(obj.tags){obj.tags = obj.tags.split(',')}
            returnObj = obj.tags;
            return returnObj;
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

    $scope.newTaskToggle = function () {
        $scope.newTaskToggleVar = $scope.newTaskToggleVar ? false : true;
    };

    $scope.reply = function(activity){
        if ($scope.currentUser){
            var index = $scope.tasks.map(function(obj){return obj.id}).indexOf(activity.id);
            $scope.tasks[index].showReply = !$scope.tasks[index].showReply;
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.search = function(){};

    $sailsSocket.subscribe('task', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.tasks.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.tasks, {id: envelope.id});
                break;
        }
    });

}])

.controller( 'ProjectTimeCtrl', ['$location', '$sailsSocket', '$scope', '$stateParams', 'config', 'lodash', 'titleService', 'work', function ProjectTimeController( $location, $sailsSocket, $scope, $stateParams, config, lodash, titleService, work) {

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
    $scope.options = {scrollwheel: false};

    $scope.work = work;
    $scope.work = work.map(function(obj){
        var endTime = new Date(obj.createdAt)
        obj.startTime = new Date(endTime.setSeconds(endTime.getSeconds() - obj.amount));
        obj.endTime = new Date(obj.createdAt);
        if (obj.task){$scope.eventSources.push({title:obj.task.title,start:obj.startTime,end:obj.endTime,allDay:false,url:'work/'+obj.id});}
        return obj
    });

    $scope.createContent = function(content, type){};

    $scope.createReaction = function(content, type){};

    $scope.reply = function(item){
        var index = $scope.work.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.work[index].showReply = !$scope.work[index].showReply
    };

    $scope.search = function(){};

}]);