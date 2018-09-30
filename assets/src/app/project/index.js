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
            //TODO: COUNT IN PROJECT MODEL
            //,
            //memberCount: ['committee', 'CommitteeMemberModel', function(committee, CommitteeMemberModel){
            //     return CommitteeMemberModel.getCommitteeMemberCount('committee', committee.id);
            // }]
        }
    })
    .state( 'project.activity', {
        url: '',
        views: {
            "activity": {
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
            work: ['project', 'WorkModel', function(project, WorkModel){
                return WorkModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
            }],
        }
    })
    //TODO: FEATURE?
    .state( 'project.channels', {
        url: '/channels',
        views: {
            "channels": {
                controller: 'ProjectChannelsCtrl',
                templateUrl: 'project/templates/channels.tpl.html'
            }
        },
        resolve: {
            //TODO: ALL
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
            "content": {
                controller: 'ProjectContentCtrl',
                templateUrl: 'project/templates/content.tpl.html'
            }
        },
        resolve: {
            //TOD: ALL
            streams: [function() {
                return [
                    {title:'Work Stream 597c55f43456040315c6724c',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:{username:'troverman', avatarUrl:'https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg'}, createdAt: new Date()},
                    {title:'Task 597c55e56833040315c6724c Stream',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:{username:'troverman', avatarUrl:'https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg'}, createdAt: new Date()},
                    {title:'Task 425c35e56833040315c6724c Stream 2',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:{username:'troverman', avatarUrl:'https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg'}, createdAt: new Date()},
                    {title:'multiDimensional Stream 597c55e56833048165c6720c',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:{username:'troverman', avatarUrl:'https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg'}, createdAt: new Date()}
                ];
            }],
            content: ['PostModel', 'project', function(PostModel, project){
                return PostModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
            }],            
        }
    })
    //TODO: FEATURE | ALLOWS FOR BUDGET MANAGING PROCESS -- AKA CREATE MARKET ORDERS FOR AN ORG BASED ON REPUTATION VOTING
    .state( 'project.charter', {
        url: '/charter',
        views: {
            "charter": {
                controller: 'ProjectCharterCtrl',
                templateUrl: 'project/templates/charter.tpl.html'
            }
        },
        resolve: {
            //TODO: ALL
            bills: [function() {
                return [{title:'general'},{title:'tasks'},{title:'create'},{title:'task1'}]
            }],
        }
    })
    //TODO: FEATURE | ALLOW FOR OPEN BUDGETING / INPUT OUTPUT LEGER. ALLOW FOR DONATIONS / FUND TRANSFERRANCE | MULTIPLE LEDGERS
    .state( 'project.ledger', {
        url: '/ledger',
        views: {
            "ledger": {
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
    .state( 'project.members', {
        url: '/members',
        views: {
            "members": {
                controller: 'ProjectMembersCtrl',
                templateUrl: 'project/templates/members.tpl.html'
            }
        },
        resolve: {
            //TODO: GET SOME
            members: ['MemberModel', 'project', function(MemberModel, project) {
                return  MemberModel.getByProject(project);
            }]
        }
    })
    .state( 'project.tasks', {
        url: '/tasks',
        views: {
            "tasks": {
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
    .state( 'project.positions', {
        url: '/positions',
        views: {
            "positions": {
                controller: 'ProjectPositionsCtrl',
                templateUrl: 'project/templates/positions.tpl.html'
            }
        },
        resolve: {
            member: ['$stateParams', 'UserModel', function($stateParams, UserModel){
                return UserModel.getByUsername($stateParams.path);
            }],
            orders: ['OrderModel', 'project', function(OrderModel, project){
                return OrderModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
            }],
        }
    })
    .state( 'project.projects', {
        url: '/projects',
        views: {
            "projects": {
                controller: 'ProjectProjectsCtrl',
                templateUrl: 'project/templates/projects.tpl.html'
            }
        },
        resolve: {
            projects: ['project', 'ProjectModel', function(project, ProjectModel){
                return ProjectModel.getChildren(project);
            }],
        }
    });
    
}])

.controller( 'ProjectCtrl', ['$mdSidenav', '$location', '$scope', 'config', 'MemberModel', 'project', 'titleService', 'TransactionModel', function ProjectController( $mdSidenav, $location, $scope, config, MemberModel, project, titleService, TransactionModel ) {
    titleService.setTitle(project.title + ' | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newMember = {};
    $scope.newTransaction = {};
    $scope.newTransaction.identifier = 'CRE8';
    $scope.newTransaction.content = project.title + ' here\'s some '+$scope.newTransaction.identifier;
    $scope.newTransactionToggleVar = false;
    $scope.project = project;
    $scope.tabsToggleVar = false;

    if($scope.currentUser){
        $scope.newTransaction.from = $scope.currentUser.id;
    }

    $scope.createTransaction = function(){
        if($scope.currentUser){
            $scope.newTransaction.to = $scope.project.id;
            TransactionModel.create($scope.newTransaction).then(function(model){
                $scope.newTransaction = {};
            });
        }
        else{$location.path('/login')}
    };

    $scope.newTransactionToggle = function() {
        $scope.newTransactionToggleVar = !$scope.newTransactionToggleVar;
    };

    $scope.createMember = function(){
        if($scope.currentUser){
            $scope.newMember.user = config.currentUser.id;
            $scope.newMember.project = project.id;
            MemberModel.create($scope.newMember).then(function(model) {
                $scope.newMember = {};
            });
        }
        else{$location.path('/login')}
    };

    $scope.isProjectCreator = function() {
        if($scope.currentUser){
            return $scope.currentUser.id == $scope.project.user;
        }
        else {return false;}
    };

    $scope.tabsToggle = function() {
        $scope.tabsToggleVar = !$scope.tabsToggleVar;
    };

}])

.controller( 'ProjectActivityCtrl', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'PostModel', 'posts', 'project', 'tasks', 'titleService', 'work', function ProjectActivityController( $location, $sailsSocket, $sce, $scope, config, lodash, PostModel, posts, project, tasks, titleService, work ) {
    titleService.setTitle('Activity | ' + project.title + ' | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.newReaction = {};
    $scope.posts = posts;
    $scope.project = project;
    $scope.tasks = tasks;
    $scope.work = work;

    //POST, WORK, TASK CREATE, VALIDATION (VOTE)
    $scope.posts = $scope.posts.map(function(obj){
        obj.model = 'CONTENT';
        return obj;
    });
    $scope.tasks = $scope.tasks.map(function(obj){
        obj.model = 'TASK';
        return obj;
    });
    $scope.work = $scope.work.map(function(obj){
        obj.model = 'WORK';
        return obj;
    });
    
    $scope.activity = [].concat.apply([], [$scope.posts, $scope.tasks, $scope.work]);
    $scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.activity = $scope.activity.slice(0,100);

    $scope.createPost = function(post) {
        if ($scope.currentUser){
            $scope.newPost.post = post.id;
            $scope.newPost.user = $scope.currentUser.id;
            $scope.newPost.project = $scope.project.id;
            console.log($scope.newPost)
            PostModel.create($scope.newPost).then(function(model) {
                $scope.newPost = {};
            });
        }
        else{$location.path('/login')}
    };

    //TODO: MODEL | CREATE REACTION | UPDATE POST
    $scope.createReaction = function(post, type, model){
        if ($scope.currentUser){
            $scope.newReaction.user = $scope.currentUser.id;
            $scope.newReaction.post = post.id;
            $scope.newReaction.type = type;
            //TODO: MODEL | CREATE REACTION
            //Reaction.create(newReaction);
            var index = $scope.posts.map(function(obj){return obj.id}).indexOf(post.id);
            if (type =='plus'){$scope.posts[index].plusCount++}
            if (type =='minus'){$scope.posts[index].minusCount++}
            //TODO: UPDATE POST
        }
        else{$location.path('/login')}
    };

    //YIKES
    $scope.renderMessage = function(post){
        if (post){
            if (!post.includes('>')){
                var replacedText = post.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                return $sce.trustAsHtml(replacedText);
            }
            else{return $sce.trustAsHtml(post)}
        }
    };

    $scope.reply = function(activity){
        if ($scope.currentUser){
            var index = $scope.activity.map(function(obj){return obj.id}).indexOf(activity.id);
            $scope.activity[index].showReply = !$scope.activity[index].showReply;
        }
        else{$location.path('/login')}
    };

    $sailsSocket.subscribe('post', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.posts.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.posts, {id: envelope.id});
                break;
        }
    });

    $sailsSocket.subscribe('reaction', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.posts.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.posts, {id: envelope.id});
                break;
        }
    });

    $sailsSocket.subscribe('task', function (envelope) {
        console.log(envelope.verb)
        switch(envelope.verb) {
            case 'created':
                console.log(envelope.data);
                $scope.tasks.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.tasks, {id: envelope.id});
                break;
        }
    });

}])

.controller( 'ProjectChannelsCtrl', ['$location', '$sailsSocket', '$sce', '$scope', 'channels', 'config', 'posts', 'project', 'titleService', function ProjectController( $location, $sailsSocket, $sce, $scope, channels, config, posts, project, titleService ) {
    titleService.setTitle('Channels | ' + project.title + ' | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.channels = channels;
    $scope.newPost = {};
    $scope.project = project;
    $scope.posts = posts;

    $scope.createPost = function() {
        if ($scope.currentUser){
            $scope.newPost.newPost.user = $scope.currentUser.id;
            $scope.newPost.newPost.project = $scope.project.id;
            PostModel.create($scope.newPost).then(function(model) {
                $scope.newPost = {};
            });
        }
        else{$location.path('/login')}
    };

    //YIKES
    $scope.renderMessage = function(content){
        if (content){
            if (!content.includes('>')){
                var replacedText = content.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                return $sce.trustAsHtml(replacedText);
            }
            else{return $sce.trustAsHtml(content)}
        }
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

.controller( 'ProjectContentCtrl', ['$sce', '$scope', 'content', 'project', 'streams', 'titleService', function ProjectController( $sce, $scope, content, project, streams, titleService ) {
    titleService.setTitle('Content | ' + project.title + ' | CRE8.XYZ');
    $scope.content = content;
    $scope.newContent = {};
    $scope.newContentToggleVar = false;
    $scope.project = project;
    $scope.streams = streams;
    $scope.AudioContext = {};
    $scope.videoContext = {};

    $scope.newContent.parent = project.id;

     $scope.newContentToggle = function() {
        $scope.newContentToggleVar = !$scope.newContentToggleVar;
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

    $scope.reply = function(activity){
        if ($scope.currentUser){
            var index = $scope.content.map(function(obj){return obj.id}).indexOf(activity.id);
            $scope.content[index].showReply = !$scope.content[index].showReply;
        }
        else{$location.path('/login')}
    };

}])

.controller( 'ProjectCharterCtrl', ['$location', '$sailsSocket', '$scope', 'bills', 'config', 'project', 'titleService', function ProjectController( $location, $sailsSocket, $scope, bills, config, project, titleService ) {
    titleService.setTitle('Charter | ' + project.title + ' | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.bills = bills;  
    $scope.newMotionToggleVar = false;
    $scope.project = project;

    $scope.newMotionToggle = function(){
        $scope.newMotionToggleVar = $scope.newMotionToggleVar ? false : true;
    };

}])

.controller( 'ProjectLedgerCtrl', ['$interval', '$location', '$scope', 'config', 'lodash', 'project', 'titleService', 'TransactionModel', 'transactions', 'transactionsFrom', 'transactionsTo', function ProjectController( $interval, $location, $scope, config, lodash, project, titleService, TransactionModel, transactions, transactionsFrom, transactionsTo ) {
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
            id: 'Expense',
            type: 'spline',
            name: 'Expense',
            data: [],
        },{
            id: 'Revenue',
            type: 'spline',
            name: 'Revenue',
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

    $scope.sumTransactions = [];
    $scope.transactions.map(function(obj){return obj.amount}).reduce(function(a,b,i) {
        return $scope.sumTransactions[i] = parseFloat(a)+parseFloat(b);
    }, 0);

    $scope.sumFrom = [];
    $scope.transactionsFrom.reduce(function(a,b,i) {
        return $scope.sumFrom[i] = parseFloat(a)+parseFloat(b.amount);
    }, 0);

    $scope.sumTo = [];
    $scope.transactionsTo.reduce(function(a,b,i) {
        return $scope.sumTo[i] = parseFloat(a) + parseFloat(b.amount);
    }, 0);

    function sumFunction(obj){
        var sumArray = [];
        obj.reduce(function(a,b,i) {
            return $scope.sumArray[i] = parseFloat(a) + parseFloat(b.amount);
        }, 0);
        return sumArray;
    }

    $scope.chart.series[0].data = $scope.sumFrom;
    $scope.chart.series[1].data = $scope.sumTo;

    /*$scope.pie.series[0].data = [{
        name: 'Expense',
        y: $scope.sumFrom[$scope.sumFrom.length-1],
    }, {
        name: 'Revenue',
        y: $scope.sumTo[$scope.sumTo.length-1],
    }];*/

    for (x in $scope.sortedTransactionTags){
        $scope.pie.series[0].data.push({
            name: $scope.sortedTransactionTags[x].element,
            y: $scope.sortedTransactionTags[x].amount,
        });
    }

    $scope.createTransaction = function(){
        $scope.newTransaction.project = $scope.project.id;
        $scope.newTransaction.user = $scope.currentUser.id;
        TransactionModel.create($scope.newTransaction).then(function(model){
            $scope.newTransaction = {};
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
        else{$location.path('/login')}
    };

}])

.controller( 'ProjectMembersCtrl', ['$location', '$sailsSocket', '$scope', 'config', 'MemberModel', 'members', 'project', 'titleService', function ProjectController( $location, $sailsSocket, $scope, config, MemberModel, members, project, titleService ) {
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
            });
        }
        else{$location.path('/login')}
    };

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

.controller( 'ProjectTasksCtrl', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'project', 'TaskModel', 'tasks', 'titleService', function ProjectController( $location, $sailsSocket, $sce, $scope, config, project, TaskModel, tasks, titleService ) {
    titleService.setTitle('Tasks | ' + project.title + ' | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newTask = {};
    $scope.newTaskToggleVar = false;
    $scope.tasks = tasks;
    $scope.project = project;

    $scope.createPost = function(post) {
        if ($scope.currentUser){
            $scope.newPost.post = post.id;
            $scope.newPost.user = $scope.currentUser.id;
            $scope.newPost.task = $scope.task.id;
            PostModel.create($scope.newPost).then(function(model) {
                $scope.newPost = {};
            });
        }
        else{$location.path('/login')}
    };

    $scope.createTask = function(newTask) {
        if ($scope.currentUser){
            $scope.newTask.user = $scope.currentUser.id;
            $scope.newTask.project = $scope.project.id;
            TaskModel.create(newTask).then(function(model) {
                $scope.newTask = {};
            });
        }
        else{$location.path('/login')}
    };

    $scope.newTaskToggle = function () {
        $scope.newTaskToggleVar = $scope.newTaskToggleVar ? false : true;
    };

    //YIKES
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

    $scope.reply = function(activity){
        if ($scope.currentUser){
            var index = $scope.tasks.map(function(obj){return obj.id}).indexOf(activity.id);
            $scope.tasks[index].showReply = !$scope.tasks[index].showReply;
        }
        else{$location.path('/login')}
    };

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
.controller( 'ProjectPositionsCtrl', ['$location', '$sailsSocket', '$scope', '$stateParams', 'config', 'lodash', 'OrderModel', 'orders', 'project', 'titleService', function MemberPositionsController($location, $sailsSocket, $scope, $stateParams, config, lodash, OrderModel, orders, project, titleService) {
    $scope.currentUser = config.currentUser;
    $scope.project = project;
    $scope.orders = orders;
    $scope.orders.forEach(function(part, index) {
        if ($scope.orders[index].identiferSet){$scope.orders[index].identiferSet = $scope.orders[index].identiferSet.split(',');}
        if ($scope.orders[index].amountSet){$scope.orders[index].amountSet = $scope.orders[index].amountSet.split(',');}
        if ($scope.orders[index].identiferSet1){$scope.orders[index].identiferSet1 = $scope.orders[index].identiferSet1.split(',');}
        if ($scope.orders[index].amountSet1){ $scope.orders[index].amountSet1 = $scope.orders[index].amountSet1.split(',');}
    });
    titleService.setTitle($scope.project.title + ' | Positions | CRE8.XYZ');

    $scope.chart = {
        chart: {polar: true},
        series: [{
            id: 'values',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.2, 0.15, 0.2, 0.15, 0.15, 0.15],
            color: 'rgba(153,0,0,0.3)',
            fillOpacity: 0.3,
        },{
            id: 'values1',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.2, 0.2, 0.1, 0.2, 0.1, 0.1],
            color: 'rgba(0,0,153,0.3)',
            fillOpacity: 0.3,
        },{
            id: 'values2',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.1, 0.1, 0.3, 0.2, 0.25, 0.05],
            color: 'rgba(0,153,0,0.3)',
            fillOpacity: 0.3,
        }],
        title: {text: ''},
        xAxis: {
            title: {text: null},
            categories: ['Education', 'Shelter', 'Food', 'Creation', 'Health', 'Security'],
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
    
    $scope.newOrderToggle = function(){
        $scope.newOrderToggleVar = $scope.newOrderToggleVar ? false : true;
    };

    $scope.createOrder = function() {
        $scope.newOrder.user = $scope.currentUser.id;
        //TODO: PARSE INPUT
        //$scope.newOrder.amountSet = $scope.newOrder.amountSet.replace(/^(\d+(,\d+)*)?$/gm);
        //$scope.newOrder.amountSet1 = $scope.newOrder.amountSet1.replace(/^(\d+(,\d+)*)?$/gm);
        OrderModel.create($scope.newOrder).then(function(model) {
            //$scope.orders.push($scope.newOrder);
            $scope.newOrder = {};
        });
    };

    //TODO: MODEL | CREATE REACTION | UPDATE POST
    $scope.createReaction = function(post, type){
        if($scope.currentUser){
            $scope.newReaction.user = $scope.currentUser.id;
            $scope.newReaction.post = post.id;
            $scope.newReaction.type = type;
            //TODO: MODEL | CREATE REACTION
            //Reaction.create(newReaction);
            var index = $scope.orders.map(function(obj){return obj.id}).indexOf(post.id);
            if (type =='plus'){$scope.orders[index].plusCount++}
            if (type =='minus'){$scope.orders[index].minusCount++}
            //TODO: UPDATE POST
        }
        else{$location.path('/login')}
    };

    $scope.reply = function(item){
        var index = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.orders[index].showReply = !$scope.orders[index].showReply
    };

}])
.controller( 'ProjectProjectsCtrl', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'project', 'ProjectModel', 'projects', 'titleService', function ProjectController( $location, $sailsSocket, $sce, $scope, config, project, ProjectModel, projects, titleService ) {
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
            });
        }
        else{$location.path('/location')}
    };

    $scope.newProjectToggle = function () {
        $scope.newProjectToggleVar = $scope.newProjectToggleVar ? false : true;
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

}]);