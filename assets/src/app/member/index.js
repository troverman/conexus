angular.module( 'conexus.member', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'member', {
        abstract: true,
		url: '/member/:path',
		views: {
			"main": {
				controller: 'MemberCtrl',
				templateUrl: 'member/index.tpl.html'
			}
		},

        //TODO: DEPRECIATE RESOLVE
		resolve: {
            member: ['$stateParams', 'UserModel', function($stateParams, UserModel){
                //TODO: REFACTOR // TODO ALLOW FOR ADDRESS LOOKUP TOO username || OR ADDRESS IN FILTER
                return UserModel.getSome({username:$stateParams.path,limit:1,skip:0,sort:'createdAt DESC'})
            }],
        }
	})
    .state( 'member.index', {
        url: '',
        views: {
            "memberActivity": {
                controller: 'MemberActivityCtrl',
                templateUrl: 'member/templates/activity.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            orders: ['member', 'OrderModel', function(member, OrderModel){
                return OrderModel.getSome({user:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
            contentList: ['ContentModel', 'member', function(ContentModel, member) {
                return ContentModel.getSome({user:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
            profileContent: ['ContentModel', 'member', function(ContentModel, member) {
                return ContentModel.getSome({profile:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
            time: ['member', 'TimeModel', function(member, TimeModel) {
                return TimeModel.getSome({user:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
            transactionsFrom: ['member', 'TransactionModel', function(member, TransactionModel) {
                return TransactionModel.getSome({from:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
            transactionsTo: ['member', 'TransactionModel', function(member, TransactionModel) {
                return TransactionModel.getSome({to:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
        }
    })
    .state( 'member.about', {
        url: '/about',
        views: {
            "memberAbout": {
                controller: 'MemberAboutCtrl',
                templateUrl: 'member/templates/about.tpl.html'
            }
        }
    })
    .state( 'member.assets', {
        url: '/assets',
        views: {
            "memberAssets": {
                controller: 'MemberAssetsCtrl',
                templateUrl: 'member/templates/assets.tpl.html'
            }
        }
    })
    .state( 'member.actions', {
        url: '/actions',
        views: {
            "memberActions": {
                controller: 'MemberActionsCtrl',
                templateUrl: 'member/templates/actions.tpl.html'
            }
        }
    })
    .state( 'member.content', {
        url: '/content',
        views: {
            "memberContent": {
                controller: 'MemberContentCtrl',
                templateUrl: 'member/templates/content.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            contentList: ['ContentModel', 'member', function(ContentModel, member) {
                return ContentModel.getSome({user:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }]
        }
    })
    .state( 'member.followers', {
        url: '/followers',
        views: {
            "memberFollowers": {
                controller: 'MemberFollowersCtrl',
                templateUrl: 'member/templates/followers.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {

            //TODO: REFACTOR GETSOME
            followers: ['member', 'FollowerModel', function(member, FollowerModel) {
                return FollowerModel.getFollowers(member);
            }],
        }
    })
    .state( 'member.following', {
        url: '/following',
        views: {
            "memberFollowing": {
                controller: 'MemberFollowingCtrl',
                templateUrl: 'member/templates/following.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {

            //TODO: REFACTOR GETSOME FILTER QUERY
            following: ['member', 'FollowerModel', function(member, FollowerModel) {
                return FollowerModel.getFollowing(member);
            }],
        }
    })
    .state( 'member.items', {
        url: '/items',
        views: {
            "memberItems": {
                controller: 'MemberItemsCtrl',
                templateUrl: 'member/templates/items.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            items: ['member', 'ItemModel', function(member, ItemModel) {
                return ItemModel.getSome({user:member.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    })
    .state( 'member.ledger', {
        url: '/ledger',
        views: {
            "memberLedger": {
                controller: 'MemberLedgerCtrl',
                templateUrl: 'member/templates/ledger.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            transactionsFrom: ['member', 'TransactionModel', function(member, TransactionModel) {
                return TransactionModel.getSome({from:member.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            transactionsTo: ['member', 'TransactionModel', function(member, TransactionModel) {
                return TransactionModel.getSome({to:member.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    })
    .state( 'member.positions', {
        url: '/positions',
        views: {
            "memberPositions": {
                controller: 'MemberPositionsCtrl',
                templateUrl: 'member/templates/positions.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            orders: ['member', 'OrderModel', function(member, OrderModel){
                return OrderModel.getSome({user:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
        }
    })
    .state( 'member.projects', {
        url: '/projects',
        views: {
            "memberProjects": {
                controller: 'MemberProjectsCtrl',
                templateUrl: 'member/templates/projects.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            projects: ['MemberModel', 'member', function(MemberModel, member) {
                return  MemberModel.getSome({user:member.id, limit:100, skip:0, sort:'createdAt DESC'});
            }]
        }
    })
    .state( 'member.tasks', {
        url: '/tasks',
        views: {
            "memberTasks": {
                controller: 'MemberTasksCtrl',
                templateUrl: 'member/templates/tasks.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            tasks: ['member', 'TaskModel', function(member, TaskModel) {
                return TaskModel.getSome({user:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }]
        }
    })
    .state( 'member.time', {
        url: '/time',
        views: {
            "memberTime": {
                controller: 'MemberTimeCtrl',
                templateUrl: 'member/templates/time.tpl.html'
            }
        },
        
        //TODO: DEPRECIATE RESOLVE
        resolve: {
            time: ['member', 'TimeModel', function(member, TimeModel) {
                return TimeModel.getSome({user:member.id, limit:100, skip:0, sort:'createdAt DESC'});
            }]
        }
    })
}])

.controller( 'MemberCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$scope', '$stateParams', 'FollowerModel', 'member', 'seoService', 'titleService', 'toaster', 'TransactionModel', function MemberController($location, $mdSidenav, $rootScope, $sailsSocket, $scope, $stateParams, FollowerModel, member, seoService, titleService, toaster, TransactionModel) {
    
    //ERR CHECK
    //TODO: IMPROVE
    $scope.member = member;
    if(!$scope.member){$location.path('/')}

    $rootScope.to = $scope.member.id;
    $rootScope.associatedModels = [{
        address: $scope.member.id,
        type: 'PROFILE',
    }];
    $rootScope.member = $scope.member;
    $rootScope.project = null;

    //INITALIZE LOCAL
    //TODO: GLOBALIZE
    titleService.setTitle($scope.member.username + ' | CRE8.XYZ');
    //SEOSERVICE

    //TODO: isFollowing
    $scope.isFollowing = false;
    $scope.newFollower = {};
    $scope.newTransaction = {};
    $scope.newTransaction.identifier = 'CRE8';
    $scope.newTransaction.content = $scope.member.username + ' here\'s some '+$scope.newTransaction.identifier;
    if($rootScope.currentUser){$scope.newTransaction.from = $rootScope.currentUser.id;}

   
    //TODO: FACTOR
    $scope.follow = function() {
        if ($rootScope.currentUser){
            $scope.newFollower.followed = $scope.member.id;
            $scope.newFollower.follower = $rootScope.currentUser.id;
            FollowerModel.create($scope.newFollower).then(function(model) {

                $rootScope.confirm = $scope.newFollower;
                $rootScope.confirm.modelType = 'FOLLOW';

                $scope.isFollowing = true;

                toaster.pop({
                    type:'success',
                    title: 'Following',
                    body: 'You are now follwing '+ $scope.member.username , 
                    onShowCallback: function (toast) { 
                        var audio = new Audio('audio/ping.mp3');
                        audio.play()
                        .then(function(audio){console.log(audio)})
                        .catch(function(err){console.log(err)})
                    }
                });

                //ERR?
                $scope.newFollower = {};
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 5000);

            });

        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: FXNS
    $scope.unfollow = function(member) {
        if ($rootScope.currentUser){FollowerModel.delete(member);}
        else{$mdSidenav('login').toggle()}
    };
   
}])

.controller( 'MemberAboutCtrl', ['$sailsSocket', '$scope', 'titleService', function MemberAboutController($sailsSocket, $scope, titleService) {
    
    titleService.setTitle($scope.member.username + ' | About | CRE8.XYZ');

}])

.controller( 'MemberActionsCtrl', ['$sailsSocket', '$scope', 'titleService', function MemberActionsController($sailsSocket, $scope, titleService) {
    
    titleService.setTitle($scope.member.username + ' | Actions | CRE8.XYZ');

}])

.controller( 'MemberActivityCtrl', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', '$stateParams', 'contentList', 'ContentModel', 'FollowerModel', 'member', 'orders', 'profileContent', 'ReactionModel', 'time', 'titleService', 'transactionsFrom', 'transactionsTo', function MemberActivityController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, $stateParams, contentList, ContentModel, FollowerModel, member, orders, profileContent, ReactionModel, time, titleService, transactionsFrom, transactionsTo) {
   
    titleService.setTitle($scope.member.username + ' | Activity | CRE8.XYZ');
    
    $scope.newContent = {};
    $scope.newReaction = {};

    //TODO: ACTIVITY FEED ~ BLEND OF MODELS
    $scope.orders = orders;
    $scope.orders = $scope.orders.map(function(obj){
        obj.model = 'ORDER';
        return obj;
    });

    $scope.contentList = contentList;
    $scope.profileContent = profileContent;
    $scope.contentList = [].concat.apply([], [$scope.contentList, $scope.profileContent]);
    $scope.contentList = $scope.contentList.map(function(obj){
        obj.model = 'CONTENT';
        return obj;
    });

    //COMBINE AND REMOVE DUPS .. REDO THIS LATER | REFACTOR .... BLEH
    $scope.contentList = $scope.contentList.filter(function(obj){
        if (obj.profile){
            if (obj.profile.hasOwnProperty('id')){
                console.log(obj.profile, obj.user.id)
                if(obj.profile.id == obj.user.id){return false}
                else{return true}
            }
            else{return true}
        }
        else{return true}
    });

    $scope.time = time;
    $scope.time = $scope.time.map(function(obj){
        obj.model = 'TIME';
        return obj;
    });

    $scope.transactions = [].concat.apply([], [transactionsFrom, transactionsTo]);
    $scope.transactions = $scope.transactions.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 

    $scope.transactions = $scope.transactions.map(function(obj){
        obj.model = 'TRANSACTION';
        return obj;
    });
    
    $scope.activity = [].concat.apply([], [$scope.contentList, $scope.orders, $scope.time, $scope.transactions]);
    $scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.activity = $scope.activity.slice(0,300);

    //TODO ASSOCIATION
    $scope.createContent = function(content){

        $scope.newContent.contentModel = content.id;

        $scope.newContent.user = $rootScope.currentUser.id;
        $scope.newContent.profile = $scope.member.id;
        ContentModel.create($scope.newContent).then(function(model) {
            $scope.newContent = {};
        });
    };

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

    //TODO: BETTER | TAG STORAGE
    $scope.loadTags = function(){
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.tags = $scope.activity.map(function(obj){
            if(obj.tags){obj.tags = obj.tags.split(',')}
            return obj.tags;
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
    }
    $scope.loadTags();

    //DEPRECIATE
    $scope.reply = function(item){
        //var index = $scope.activity.map(function(obj){return obj.id}).indexOf(item.id);
        //$scope.activity[index].showReply = !$scope.activity[index].showReply;
        if ($rootScope.currentUser){$mdSidenav('content').toggle();}
        else{$mdSidenav('login').toggle()}
    };

    $sailsSocket.subscribe('content', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.contentList.unshift(envelope.data);
                break;
        }
    });

}])

.controller( 'MemberAssetsCtrl', ['$scope', 'titleService', function MemberAssetsCtrl( $scope, titleService ) {
    
    titleService.setTitle($scope.member.username + ' | Assets | CRE8.XYZ');

    $scope.balance = $scope.member.balance;
    $scope.reputation = $scope.member.reputation;

    var random1 = Math.floor(255*Math.random());
    var random2 = Math.floor(255*Math.random());
    var random3 = Math.floor(255*Math.random());

    $scope.reputationRadial = {
        chart: {polar: true},
        series: [{
            id: 'reputation',
            type: 'area',
            name: 'Reputation',
            pointPlacement: 'on',
            data: [],
            color: 'rgba('+random1+','+random2+','+random3+',0.3)',
            fillOpacity: 0.3,
        }],
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
        legend: {enabled: false},
        tooltip: {
            shared: true,
        },
        credits:{enabled:false},
    };

    $scope.reputationColumn = {
        chart: {zoomType: 'x',},
        series: [{
            id: 'Combination',
            type: 'column',
            name: 'Reputation Balance',
            data: [],
        }],
        title: {text: ''},
        xAxis: {
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {text: null},
            categories: [],
        },
        yAxis: {title: {text: null}},
        legend: {enabled: false},
        credits:{enabled:false},
    };

    $scope.balancePie = {
        chart: {},
        series: [{
            id: 'Pie',
            type: 'pie',
            name: 'Pie',
            colorByPoint: true,
            data: [{
                name: 'Assets',
                y: [],
            }]
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

    //FILTERING | LAYER IE PROJECT | MANIFOLD
    $scope.balanceRadial = {
        chart: {polar: true},
        series: [{
            id: 'balance',
            type: 'area',
            name: 'Balance',
            pointPlacement: 'on',
            data: [],
            color: 'rgba('+random2+','+random1+','+random3+',0.3)',
            fillOpacity: 0.3,
        }],
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
        legend: {enabled: false},
        tooltip: {
            shared: true,
        },
        credits:{enabled:false},
    };

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

    //RADIAL | REPUTATION
    for (x in Object.keys($scope.reputation)){
        if ($scope.reputation[Object.keys($scope.reputation)[x]] > 50000){
            $scope.reputationRadial.xAxis.categories.push(Object.keys($scope.reputation)[x]);
            $scope.reputationRadial.series[0].data.push($scope.reputation[Object.keys($scope.reputation)[x]]);
        }
    }

    //COLUMN | REPUTATION
    for (x in Object.keys($scope.reputation)){
        if ($scope.reputation[Object.keys($scope.reputation)[x]]){
            $scope.reputationColumn.series[0].data.push($scope.reputation[Object.keys($scope.reputation)[x]]);
            $scope.reputationColumn.xAxis.categories.push(Object.keys($scope.reputation)[x]);
        }
    }

    //RADIAL | BALANCE
    for (x in Object.keys($scope.balance)){
        //if ($scope.balance[Object.keys($scope.balance)[x]] < 500){
        $scope.balanceRadial.xAxis.categories.push(Object.keys($scope.balance)[x]);
        $scope.balanceRadial.series[0].data.push($scope.balance[Object.keys($scope.balance)[x]]);
        //}
    }

    //COLUMN | BALANCE
    for (x in Object.keys($scope.balance)){
        if ($scope.balance[Object.keys($scope.balance)[x]]){
            $scope.balanceColumn.series[0].data.push($scope.balance[Object.keys($scope.balance)[x]]);
            $scope.balanceColumn.xAxis.categories.push(Object.keys($scope.balance)[x]);
        }
    }

    //PIE | BALANCE
    //BAD
    var sortable = [];
    for (x in $scope.balance) {
        sortable.push([x, $scope.balance[x]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    for (x in sortable){
        $scope.balancePie.series[0].data.push({
            name: sortable[x][0],
            y: sortable[x][1],
        });
    }
    //for (x in Object.keys($scope.balance)){
    //    $scope.balancePie.series[0].data.push({
    //        name: Object.keys($scope.balance)[x],
    //        y: $scope.balance[Object.keys($scope.balance)[x]],
    //    });
    //}

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

}])

.controller( 'MemberContentCtrl', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', '$stateParams', 'contentList', 'ContentModel', 'titleService', function MemberContentController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, $stateParams, contentList, ContentModel, titleService) {
   
    titleService.setTitle($scope.member.username + ' | Content | CRE8.XYZ');
    
    $scope.contentList = contentList;
    $scope.newContent = {};
    $scope.newReaction = {};

    $scope.selectedType = 'POST';

    $scope.createContent = function(){
        if ($rootScope.currentUser){
            if(content){$scope.newContent.contentModel = content.id;}
            $scope.newContent.user = $rootScope.currentUser.id;
            $scope.newContent.project = $scope.project.id;
            $scope.newContent.tags = $scope.newContent.tags.map(function(obj){
                return obj.text
            }).join(",");
            $scope.newContent.type = $scope.selectedType;
            ContentModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
                $scope.content.unshift(model);
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: MODELS | ONLY CONTENT
    $scope.createReaction = function(content, type){
        if($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.contentModel = content.id;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;

            var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(content.id);

            if (type =='plus'){$scope.contentList[index].plusCount++}
            if (type =='minus'){$scope.contentList[index].minusCount++}
            ReactionModel.create($scope.newReaction).then(function(model){
                $scope.newReaction = {};
            });

        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.contentToggle = function(){
        if($rootScope.currentUser){$mdSidenav('content').toggle();}
        else{$mdSidenav('login').toggle()}
    };

    //TODO: BETTER | TAG STORAGE
    $scope.loadTags = function(){
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.tags = $scope.contentList.map(function(obj){
            if(obj.tags){obj.tags = obj.tags.split(',')}
            return obj.tags;
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
    }
    $scope.loadTags();

    $scope.reply = function(item){
        var index = $scope.content.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.content[index].showReply = !$scope.content[index].showReply
    };

    $scope.search = function(){};

    $scope.selectType = function(type){
        $scope.selectedType = type;
    };

}])

.controller( 'MemberFollowersCtrl', ['$sailsSocket', '$scope', '$stateParams', 'FollowerModel', 'followers', 'titleService', function MemberFollowersController($sailsSocket, $scope, $stateParams, FollowerModel, followers, titleService) {
    
    titleService.setTitle($scope.member.username + ' | Followers | CRE8.XYZ');
    
    $scope.followers = followers.map(function(obj){
        obj.user = obj.follower;
        return obj;
    });

    /*
    $sailsSocket.subscribe('follower', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.followers.unshift(envelope.data);
                break;
        }
    });
    */

}])

.controller( 'MemberFollowingCtrl', ['$sailsSocket', '$scope', '$stateParams', 'following', 'FollowerModel', 'titleService', function MemberFollowingController($sailsSocket, $scope, $stateParams, following, FollowerModel, titleService) {
    
    titleService.setTitle($scope.member.username + ' | Following | CRE8.XYZ');

    $scope.following = following.map(function(obj){
        obj.user = obj.followed;
        return obj;
    });

    /*
    $sailsSocket.subscribe('follower', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.followers.unshift(envelope.data);
                break;
        }
    });
    */

}])

.controller( 'MemberItemsCtrl', ['$rootScope', '$sailsSocket', '$scope', '$stateParams', 'ItemModel', 'items', 'titleService', function MemberItemsController($rootScope, $sailsSocket, $scope, $stateParams, ItemModel, items, titleService) {
    
    titleService.setTitle($scope.member.username + ' | Items | CRE8.XYZ');

    $scope.items = items;
    $scope.items = $scope.items.map(function(obj){
        if(obj.tags){obj.tags = obj.tags.split(',')}
        obj.model = 'ITEM';
        return obj;
    });

    $rootScope.$watch('searchQuery' ,function(){
        $scope.searchQuery = [];
        for(x in Object.keys($rootScope.searchQuery)){
            for (y in Object.keys($rootScope.searchQuery[Object.keys($rootScope.searchQuery)[x]])){
                $scope.searchQuery.push($rootScope.searchQuery[Object.keys($rootScope.searchQuery)[x]][y])
            }
        }
    }, true);

    $scope.filterContent = function(filter) {
        $scope.searchQuery.push({text:filter})
        $rootScope.stateIsLoading = true;
        //TODO: COMPLEX QUERY
        ItemModel.getSome({user:$scope.member.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(items){
            $rootScope.stateIsLoading = false;
            $scope.selectedTag = filter;
            items = items.map(function(obj){
                if(obj.tags){obj.tags = obj.tags.split(',')}
                obj.model = 'ITEM';
                return obj;
            });
            $scope.items = items;
            $scope.loadTags();
        });
    };

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 20;
        $rootScope.stateIsLoading = true;
        ItemModel.getSome({limit:100, skip:$scope.skip, sort:$scope.selectedSort}).then(function(tasks) {
            $rootScope.stateIsLoading = false;
            items = items.map(function(obj){
                if(obj.tags){obj.tags = obj.tags.split(',')}
                obj.model = 'ITEM';
                return obj;
            });
            Array.prototype.push.apply($scope.items, items);
            $scope.loadTags();
        });
    };

    $scope.loadAssociations = function(){
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.tags = $scope.items.map(function(obj){return obj.tags;});
        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
        $scope.sortedAssociationArray = [];
        for (x in $scope.tags){
            var amount = countInArray($scope.tags, $scope.tags[x]);
            if ($scope.sortedAssociationArray.map(function(obj){return obj.element}).indexOf($scope.tags[x]) == -1){
                $scope.sortedAssociationArray.push({amount:amount, element:$scope.tags[x]})
            }
        }
        $scope.sortedAssociationArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    };
    $scope.loadAssociations();

    $scope.loadLocations = function(){
        $scope.sortedLocationsArray = [{element:'Knoxville'}, {element:'New York City'}, {element:'Durham'}]
    };
    $scope.loadLocations();

    $scope.loadTags = function(){

        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}

        $scope.tags = $scope.items.map(function(obj){return obj.tags;});
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
    $scope.loadTags();

    $scope.filterSet = {tags:$scope.sortedTagArray, associations:$scope.sortedAssociationArray, locations:$scope.sortedLocationsArray};

}])

.controller( 'MemberLedgerCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$scope', '$stateParams', 'member', 'titleService', 'transactionsFrom', 'transactionsTo', function MemberLedgerController($location, $mdSidenav, $rootScope, $sailsSocket, $scope, $stateParams, member, titleService, transactionsFrom, transactionsTo) {
    
    titleService.setTitle($scope.member.username + ' | Ledger | CRE8.XYZ');

    if($rootScope.currentUser){
        $scope.newTransaction.from = $rootScope.currentUser.id;
        $scope.newTransaction.to = $scope.member.id;
    }

    $scope.member = member;
    $scope.newReaction = {};
    $scope.newTransaction = {};

    $scope.searchQuery = [];
    $scope.transactionsFrom = transactionsFrom;
    $scope.transactionsTo = transactionsTo;
    $scope.transactions = $scope.transactionsFrom.concat($scope.transactionsTo);
    
    $scope.transactions = $scope.transactions.map(function(obj){
        obj.model = 'TRANSACTION';
        return obj;
    });

     //DEPRECIATE IDENTIFIER AND AMOUNT
    if ($scope.transactions.length == 0){

        var timeObject = new Date(); 

        var exampleSetExpense = [
            {to:'Trevor Overman', tags:'PAYROLL,HUMAN', content:'PAY TREVOR', amountSet:{'USD':500,'CRE8':1}},
            {to:'Hot Shot Programmer', content:'PAY PROGRAMMER', tags:'PAYROLL,HUMAN'},
            {to:'Sarah Human', content:'PAY SARAH',  tags:'PAYROLL,HUMAN'},
            {to:'David Create', content:'PAY DAVID',  tags:'PAYROLL,HUMAN'},
            {to:'OFFICE SUPPLIES INC', content:'PURCHASE SUPPLIES', tags:'SUPPLIES,HARDWARE,BUSINESS,INFRASTRUCTURE'},
            {to:'COMPUTER SERVICES INC', content:'PURCHASE TECHNOLOGY', tags:'SERVER,COMPUTER,CLOUD,SERVICES'}
        ];

        var exampleSetRevenue = [
            {from:'CUSTOMER', content:'PAYMENT FOR PRODUCTS', tags:'CUSTOMER,EXAMPLE'},
            {from:'CLIENT', content:'PAYMENT FOR SERVICES',  tags:'CLIENT,SEVICES,DELIVERABLE'},
        ];

        for (var i=0, t=88; i<t; i++) {

            var randomIndexExpense = Math.floor(Math.random()*exampleSetExpense.length)
            var randomIndexRevenue = Math.floor(Math.random()*exampleSetRevenue.length)

            $scope.transactionsFrom.push({
                to: exampleSetExpense[randomIndexExpense].to, 
                from: {id:$scope.member.id, title:$scope.member.username}, 
                identifier:'CRE8', 
                amountSet:{
                    CRE8: 10*Math.round(0.5*Math.random() * t)
                }, 
                content:'SEED EXPENSE', 
                createdAt:new Date(timeObject.getTime() + 10000 * i), 
                amount:10*Math.round(0.5*Math.random() * t), 
                tags:exampleSetExpense[randomIndexExpense].tags, 
                reactions:{plus:Math.round(Math.random()*10), minus:Math.round(Math.random()*2)}
            });
            $scope.transactionsTo.push({
                to: {id:$scope.member.id, title:$scope.member.username}, 
                from: exampleSetRevenue[randomIndexRevenue].from, 
                identifier:'CRE8', 
                amountSet:{
                    CRE8: 10*Math.round(0.5*Math.random() * t)
                },
                content:'SEED REVENUE', 
                createdAt:new Date(timeObject.getTime() + 10000 * i),
                amount:10*Math.round(Math.random() * t),
                tags: exampleSetRevenue[randomIndexRevenue].tags, 
                reactions:{plus:Math.round(Math.random()*10), minus:Math.round(Math.random()*2)}
            });
        }
        $scope.transactions = $scope.transactionsFrom.concat($scope.transactionsTo);     
    }

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
        //plotOptions: {
        //    area: {
        //        stacking: 'normal',
        //        lineColor: '#666666',
        //        lineWidth: 1,
        //        marker: {
        //            lineWidth: 1,
        //            lineColor: '#666666'
        //        }
        //    }
        //},
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

    $scope.assetChart = {
        chart:{zoomType: 'x',},
        series:[],
        //plotOptions: {area: {stacking: 'normal'}},
        title:{text:''},
        xAxis:{
            type: 'datetime',
            currentMin: 0,
            currentMax: 20,
            title: null,
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {text: null},
        },
        legend:{enabled:true},
        yAxis:{title: {text: null}},
        credits:{enabled:false},
    };

    $scope.tagChart = {
        chart: {zoomType: 'x',},
        series:[],
        plotOptions:{area: {stacking: 'normal'}},
        title:{text:''},
        xAxis:{
            type: 'datetime',
            currentMin: 0,
            currentMax: 20,
            title: null,
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title:{text: null},
        },
        legend:{enabled:false },
        yAxis:{title:{text: null}},
        credits:{enabled:false},
    };

    $scope.pie = {
        chart: {},
        series: [{
            id: 'Pie',
            type: 'pie',
            name: 'Pie',
            colorByPoint: true,
            data: [{
                name: 'Expense',
                y: [],
            }, {
                name: 'Revenue',
                y: [],
            }]
        }],     
        title: {text: ''},
        xAxis: {title: {text: null}},
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };

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

    $scope.reply = function(activity){
        if ($rootScope.currentUser){
            //var index = $scope.transactions.map(function(obj){return obj.id}).indexOf(activity.id);
            //$scope.transactions[index].showReply = !$scope.transactions[index].showReply;
            $mdSidenav('content').toggle()
        }
        else{$mdSidenav('login').toggle()}
    };

    //IMPROVE :)
    function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
    function amountInArray(array, value) {
        return array.reduce(function(n, x){
            if (x.tag == value.tag){n+=parseFloat(x.amount)}
            return n;
        },0);
    };

    $scope.loadAssets = function(){
        $scope.transactionAssets = $scope.transactions.map(function(obj){return Object.keys(obj.amountSet);});
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

    $scope.loadAssociations = function(){
        $scope.transactionAssociations = $scope.transactions.map(function(obj){
            var returnArray = [];
            if (obj.from){
                returnArray.push({association:obj.from.id, amount:obj.amountSet['USD'], obj:obj.from})
            }
            if (obj.to){
                returnArray.push({association:obj.to.id, amount:obj.amountSet['USD'], obj:obj.to})
            }
            return returnArray;
        });
        $scope.transactionAssociations = [].concat.apply([], $scope.transactionAssociations);
        $scope.sortedTransactionAssociations = [];
        for (x in $scope.transactionAssociations){
            var amount = amountInArray($scope.transactionAssociations, $scope.transactionAssociations[x]);
            if ($scope.sortedTransactionAssociations.map(function(obj){return obj.element}).indexOf($scope.transactionAssociations[x].association) == -1){
                $scope.sortedTransactionAssociations.push({amount:amount, element:$scope.transactionAssociations[x].association, obj:$scope.transactionAssociations[x].obj})
            }
        }
        $scope.sortedTransactionAssociations.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);});
    };

    //amount..
    $scope.loadTags = function(){
        $scope.transactionTags = $scope.transactions.map(function(obj){
            var returnArray = [];
            if(obj.tags){
                obj.tags = obj.tags.split(',');
                for (x in obj.tags){
                    returnArray.push({tag:obj.tags[x].trim().toLowerCase(),amount:obj.amount})
                }
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
    };

    $scope.init = function(){
        $scope.loadAssets();
        $scope.loadAssociations();
        $scope.loadTags();
        $scope.assetSet = $scope.sortedTransactionAssets;
        $scope.filterSet = {associations:$scope.sortedTransactionAssociations, tags:$scope.sortedTransactionTags, assets:$scope.sortedTransactionAssets}
    };
    $scope.init();


    //WORK HERE!! :) --> YEE SHOW UP
    $scope.sumFlow = [];
    $scope.sumFrom = []
    $scope.sumTo = [];
    $scope.sumTransactions = [];
    $scope.transactions = $scope.transactions.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);}).reverse(); 

    console.log($scope.transactions);

    //FXN TO CHANGE ASSETS --> ||| DEFAUT ASSET SERIES ARE BASED ON RECENT HISTORY... SORTED BY AMOUNT, MAGNITUDE IS RELATIVE
    console.log($scope.sortedTransactionAssets)

    //SERIES FOR EACH ASSET
    //$scope.multiSum = [];
    //$scope.transactions.reduce(function(a,b,i) {
    //    var data = {};
    //    console.log(a,b,i);
    //    for (x in Object.keys(b.amountSet)){
    //        var amount = b.amountSet[Object.keys(b.amountSet)[x]] || 0;
    //        var sum = parseFloat(a[Object.keys(b.amountSet)[x]][1])+parseFloat(amount);
    //        data[Object.keys(b.amountSet)[x]] = [new Date(b.createdAt).getTime(), sum];
    //    }
    //    return $scope.multiSum[i] = data;
    //},[[0,0],[0,0]]);
    //console.log($scope.multiSum);

    //series for tag, series for asset..

    /*
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
            if (!$scope.transactionsByTags[obj.tags[y].trim().toLowerCase()]){$scope.transactionsByTags[obj.tags[y]]=[obj];}
            else{$scope.transactionsByTags[obj.tags[y].trim().toLowerCase()].push(obj)}   
        }
    });

    //console.log($scope.transactionsByIdentifier);
    //console.log($scope.transactionsByTags);

    //SERIES FOR EACH TAG
    for (x in Object.keys($scope.transactionsByTags)){
        $scope.tagChart.series.push({
            id: 'Tags '+x,
            type: 'area',
            name: Object.keys($scope.transactionsByTags)[x],
            data: [],
        });
        for (y in $scope.transactionsByTags[Object.keys($scope.transactionsByTags)[x]]){
            var amount = $scope.transactionsByTags[Object.keys($scope.transactionsByTags)[x]][y].amountSet['USD'] || 0;
            var data = [new Date($scope.transactionsByTags[Object.keys($scope.transactionsByTags)[x]][y].createdAt).getTime(), amount];
            $scope.tagChart.series[x].data.push(data);
        }
    }

    //SERIES FOR EACH ASSET
    for (x in Object.keys($scope.transactionsByIdentifier)){
        $scope.assetChart.series.push({
            id: 'Identifer '+x,
            type: 'area',
            name: Object.keys($scope.transactionsByIdentifier)[x],
            data: [],
        });
        for (y in $scope.transactionsByIdentifier[Object.keys($scope.transactionsByIdentifier)[x]]){
            var amount = $scope.transactionsByIdentifier[Object.keys($scope.transactionsByIdentifier)[x]][y].amountSet[Object.keys($scope.transactionsByIdentifier)[x]] || 0;
            var data = [new Date($scope.transactionsByIdentifier[Object.keys($scope.transactionsByIdentifier)[x]][y].createdAt).getTime(), amount];
            $scope.assetChart.series[x].data.push(data);
        }
    }
    */


    console.log($scope.assetChart);
    $scope.transactions.reduce(function(a,b,i) {

        if (!b.from){b.from = {id:null}}
        if (!b.to){b.to = {id:null}}

        if(b.from.id == $scope.member.id){
            var amount = b.amountSet['USD'] || 0;
            var diff =  parseFloat(a[1])-parseFloat(amount)
            var data = [new Date(b.createdAt).getTime(), diff];
            return $scope.sumTransactions[i] = data;
        }

        if(b.to.id == $scope.member.id){
            var amount = b.amountSet['USD'] || 0;
            var sum =  parseFloat(a[1])+parseFloat(amount)
            var data = [new Date(b.createdAt).getTime(), sum];
            return $scope.sumTransactions[i] = data;
        }

    },[0,0]);

    //sumFrom
    $scope.transactions.reduce(function(a,b,i) {

        if(b.from.id == $scope.member.id){
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

    //sumTo
    $scope.transactions.reduce(function(a,b,i) {

        if(b.to.id == $scope.member.id){
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

    //sumFlow
    $scope.transactions.reduce(function(a,b,i) {

        if(b.from.id == $scope.member.id){
            var amount = b.amountSet['USD'] || 0;
            var sum =  parseFloat(a[1])+parseFloat(amount)
            var data = [new Date(b.createdAt).getTime(), sum];
            return $scope.sumFlow[i] = data
        }
        if(b.to.id == $scope.member.id){
            var amount = b.amountSet['USD'] || 0;
            var sum =  parseFloat(a[1])+parseFloat(amount)
            var data = [new Date(b.createdAt).getTime(), sum];
            return $scope.sumFlow[i] = data
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

    $scope.selectExpense = function(){
        $scope.selectedState = 'EXPENSE';
        $scope.assetChart.series = [];
        //SERIES FOR EACH ASSET
        $scope.transactionsByIdentifier = {};
        $scope.transactionsFrom.map(function(obj){
            for (y in Object.keys(obj.amountSet)){
                if (!$scope.transactionsByIdentifier[Object.keys(obj.amountSet)]){$scope.transactionsByIdentifier[Object.keys(obj.amountSet)]=[obj];}
                else{$scope.transactionsByIdentifier[Object.keys(obj.amountSet)].push(obj)}   
            }
        });

        for (x in Object.keys($scope.transactionsByIdentifier)){
            $scope.assetChart.series.push({
                id: 'Identifer '+x,
                type: 'area',
                name: Object.keys($scope.transactionsByIdentifier)[x],
                data: [],
            });
            for (y in $scope.transactionsByIdentifier[Object.keys($scope.transactionsByIdentifier)[x]]){
                var amount = $scope.transactionsByIdentifier[Object.keys($scope.transactionsByIdentifier)[x]][y].amountSet[Object.keys($scope.transactionsByIdentifier)[x]] || 0;
                var data = [new Date($scope.transactionsByIdentifier[Object.keys($scope.transactionsByIdentifier)[x]][y].createdAt).getTime(), amount];
                $scope.assetChart.series[x].data.push(data);
            }
        }

        //SERIES FOR EACH TAG
        $scope.transactionsByTags = {};
        $scope.transactionsFrom.map(function(obj){
            for (y in obj.tags){
                if (!$scope.transactionsByTags[obj.tags[y].trim().toLowerCase()]){$scope.transactionsByTags[obj.tags[y]]=[obj];}
                else{$scope.transactionsByTags[obj.tags[y].trim().toLowerCase()].push(obj)}   
            }
        });

        for (x in Object.keys($scope.transactionsByTags)){
            $scope.tagChart.series.push({
                id: 'Tags '+x,
                type: 'area',
                name: Object.keys($scope.transactionsByTags)[x],
                data: [],
            });
            for (y in $scope.transactionsByTags[Object.keys($scope.transactionsByTags)[x]]){
                var amount = $scope.transactionsByTags[Object.keys($scope.transactionsByTags)[x]][y].amountSet['USD'] || 0;
                var data = [new Date($scope.transactionsByTags[Object.keys($scope.transactionsByTags)[x]][y].createdAt).getTime(), amount];
                $scope.tagChart.series[x].data.push(data);
            }
        }

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
        $scope.selectedState = 'OVERVIEW';
        $scope.pie.series[0].data = [];
        $scope.pie.series[0].data = [{
            name: 'Expense',
            y: $scope.sumFrom[$scope.sumFrom.length-1][1],
        }, {
            name: 'Revenue',
            y: $scope.sumTo[$scope.sumTo.length-1][1],
        }];
    };
    $scope.selectRevenue = function(){
        $scope.selectedState = 'REVENUE';
        $scope.assetChart.series = [];

        //SERIES FOR EACH ASSET
        $scope.transactionsByIdentifier = {};
        $scope.transactionsTo.map(function(obj){
            for (y in Object.keys(obj.amountSet)){
                if (!$scope.transactionsByIdentifier[Object.keys(obj.amountSet)]){$scope.transactionsByIdentifier[Object.keys(obj.amountSet)]=[obj];}
                else{$scope.transactionsByIdentifier[Object.keys(obj.amountSet)].push(obj)}   
            }
        });

        for (x in Object.keys($scope.transactionsByIdentifier)){
            $scope.assetChart.series.push({
                id: 'Identifer '+x,
                type: 'area',
                name: Object.keys($scope.transactionsByIdentifier)[x],
                data: [],
            });
            for (y in $scope.transactionsByIdentifier[Object.keys($scope.transactionsByIdentifier)[x]]){
                var amount = $scope.transactionsByIdentifier[Object.keys($scope.transactionsByIdentifier)[x]][y].amountSet[Object.keys($scope.transactionsByIdentifier)[x]] || 0;
                var data = [new Date($scope.transactionsByIdentifier[Object.keys($scope.transactionsByIdentifier)[x]][y].createdAt).getTime(), amount];
                $scope.assetChart.series[x].data.push(data);
            }
        }

        //SERIES FOR EACH TAG
        $scope.transactionsByTags = {};
        $scope.transactionsTo.map(function(obj){
            for (y in obj.tags){
                if (!$scope.transactionsByTags[obj.tags[y].trim().toLowerCase()]){$scope.transactionsByTags[obj.tags[y]]=[obj];}
                else{$scope.transactionsByTags[obj.tags[y].trim().toLowerCase()].push(obj)}   
            }
        });

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

    //COMPLEX QUERY
    //COMBINE ALL HERE
    $scope.selectFilter = function(tag){

        //COMPOUND QUERY
        //FROM, TO, BOTH, TAG, ASSET

        $scope.searchQuery.push({text:tag, type:'TAG'});

        var query = {
            member:$scope.member.id, 
            tag:tag, 
            from:$scope.member.id, 
            to:$scope.member.id,
            identifer:$scope.identifer
        };

        TransactionModel.getSome({query:query, limit:20, skip:0, sort:'createdAt DESC'}).then(function(transactions){
            $scope.transactions = transactions;
        });

    };

    $scope.selectOverview();

}])

.controller( 'MemberPositionsCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$scope', '$stateParams', 'member', 'OrderModel', 'orders', 'ReactionModel', 'titleService', function MemberPositionsController( $location, $mdSidenav, $rootScope, $sailsSocket, $scope, $stateParams, member, OrderModel, orders, ReactionModel, titleService) {
    
    titleService.setTitle($scope.member.username + ' | Positions | CRE8.XYZ');

    $scope.newReaction = {};
    $scope.orders = orders;

    //DEPRECIATE
    $scope.orders.forEach(function(part, index) {
        if ($scope.orders[index].identiferSet){$scope.orders[index].identiferSet = $scope.orders[index].identiferSet.split(',');}
        if ($scope.orders[index].amountSet){$scope.orders[index].amountSet = $scope.orders[index].amountSet.split(',');}
        if ($scope.orders[index].identiferSet1){$scope.orders[index].identiferSet1 = $scope.orders[index].identiferSet1.split(',');}
        if ($scope.orders[index].amountSet1){ $scope.orders[index].amountSet1 = $scope.orders[index].amountSet1.split(',');}
    });

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
        legend: {enabled: false},
        tooltip: {shared: true,},
        credits:{enabled:false},
    };

    //PLURALISM
    if ($scope.orders.length != 0){
        $rootScope.baseMarkets = [];
        $rootScope.markets = [];

        for (x in $scope.orders){
            //console.log($scope.orders[x]);
            if ($scope.orders[x].setAlpha && $scope.orders[x].setBeta){
                for (y in Object.keys($scope.orders[x].setAlpha)){
                    //AMOUNT!
                    //$scope.orders[x].setAlpha[Object.keys($scope.orders[x].setAlpha)[y]]
                    $rootScope.baseMarkets.push(Object.keys($scope.orders[x].setAlpha)[y])
                }
                for (y in Object.keys($scope.orders[x].setBeta)){
                    //AMOUNT!
                    //$scope.orders[x].setBeta[Object.keys($scope.orders[x].setBeta)[y]]
                    $rootScope.markets.push(Object.keys($scope.orders[x].setBeta)[y])
                }
            }
        }

        //REMOVE DUPS
        $rootScope.baseMarkets = Array.from(new Set($rootScope.baseMarkets));
        $rootScope.markets = Array.from(new Set($rootScope.markets));

        $rootScope.baseMarkets = $rootScope.baseMarkets.map(function(obj){
            return {text:obj};
        });

        $rootScope.markets = $rootScope.markets.map(function(obj){
            return {text:obj};
        });

    }

    else{
        $rootScope.baseMarkets = [
            {text:'UNIVERSAL'},
            {text:'CRE8'},
            {text:'ETH'},
            {text:'BTC'},
            {text:'USD'},
            {text:'NOVO'},
            {text:'LTC'},
            {text:'SHELTER'},
            {text:'FOOD'},
            {text:'REST'},
            {text:'REST,FOOD'},
        ];
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
            {text:'TIME+VIEW'},
            {text:'TIME+WORK'},
            {text:'STREAM'},
            {text:'REACT'},
            {text:'CONTENT'},
            {text:'ORDER'},
            {text:'TRANSACTION'},
            {text:'VIEW'},
            {text:'VALIDATE'},
        ];
    }

    $scope.searchQuery = $rootScope.baseMarkets;

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
    }

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
    }

    $rootScope.$watch('markets' ,function(){
        $scope.populateMarkets();
    },true);

    $scope.addMarket = function(type){
        //basemarket; market
    };

    $scope.createReaction = function(item, type){
        if($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:'ORDER', id:item.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var index = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
            $scope.orders[index].reactions[type]++;
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.reply = function(activity){
        if ($rootScope.currentUser){
            //var index = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
            //$scope.orders[index].showReply = !$scope.orders[index].showReply
            $mdSidenav('content').toggle();
        }
        else{$mdSidenav('login').toggle()}
    };

}])

.controller( 'MemberProjectsCtrl', ['$sailsSocket', '$scope', 'projects', 'titleService', function MemberProjectsController($sailsSocket, $scope, projects, titleService) {
    
    titleService.setTitle($scope.member.username + ' | Projects | CRE8.XYZ');
    $scope.projects = projects;

    /*
    $sailsSocket.subscribe('projectMember', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.followers.unshift(envelope.data);
                break;
        }
    });
    */

}])

.controller( 'MemberTasksCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$scope', '$stateParams', 'member', 'ReactionModel', 'tasks', 'TaskModel', 'titleService', function MemberTimeController( $location, $mdSidenav, $rootScope, $sailsSocket, $scope, $stateParams, member, ReactionModel, tasks, TaskModel, titleService) {
    
    titleService.setTitle($scope.member.username + ' | Tasks | CRE8.XYZ');
    
    $scope.tasks = tasks.map(function(obj){
        obj.model = 'TASK';
        return obj;
    });
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.newTask = {};

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

    //DEPRECIATE
    $scope.reply = function(activity){
        if ($rootScope.currentUser){
            //var index = $scope.tasks.map(function(obj){return obj.id}).indexOf(activity.id);
            //$scope.tasks[index].showReply = !$scope.tasks[index].showReply;
            $mdSidenav('content').toggle();
        }
        else{$mdSidenav('login').toggle()}
    };

    $sailsSocket.subscribe('task', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.tasks.unshift(envelope.data);
                break;
        }
    });

}])

.controller( 'MemberTimeCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$scope', '$stateParams', 'member', 'ReactionModel', 'time', 'TimeModel', 'titleService', function MemberTimeController( $location, $mdSidenav, $rootScope, $sailsSocket, $scope, $stateParams, member, ReactionModel, time, TimeModel, titleService) {
    
    titleService.setTitle($scope.member.username + ' | Time | CRE8.XYZ');
    
    //THE GROUP TESSERACT IS CONENESUS ON TIME ++ DIMENSIONAL WORK
    //based on tokens 
    //location mapping over time
    //time mapping via actions ?  
    //CAL SCHED .. PROMISE

    //TODO VIEW --> CONSUMPTION
    //VIZ ON A DAY TIME
    //VIZ ON MONTH TIME
    
    $scope.eventSources = [];
    //IDEALLY WANT THIS TO BE AN INFINITE SCROLL TIMELINE YPE WITH ADVANCED FEATURES RN THIS IS TWO THINGS MASHED
    $scope.calendar = {
        height:448,
        editable: false,
        defaultView: "agendaWeek",
        header:{
            left: 'month,agendaWeek,agendaDay',
            //left: 'month,agendaWeek,agendaDay listMonth,listWeek',
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
        //themeSystem:'bootstrap4',
        //dayClick
        slotDuration:'00:15:00',
        nowIndicator: true,
        allDaySlot: false,
    };
    $scope.newReaction = {};

    $scope.newTime = {};
    $scope.newTime.startTime = new Date();
    $scope.newTime.startTime.setMilliseconds(0);
    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    $scope.time = time;
    $scope.time = time.map(function(obj){
        //HACK | CONFUSING | REMOVE CREATEDAT AS TIME --> FOCUS ON START AND END PARAMS
        var endTime = new Date();
        var startTime = new Date();
        if (obj.startTime){
            startTime = new Date(obj.startTime);
            obj.startTime = new Date(obj.startTime);
            obj.endTime = new Date(startTime.setSeconds(startTime.getSeconds() + parseInt(obj.amount)));
        }
        //DEPRECIATE
        if(!obj.startTime){
            endTime = new Date(obj.createdAt);
            obj.endTime = new Date(obj.createdAt);
            obj.startTime = new Date(endTime.setSeconds(endTime.getSeconds() - parseInt(obj.amount)));
        }
        if (obj.task){
            $scope.eventSources.push({
                title:obj.task.title,
                start:obj.startTime,
                end:obj.endTime,
                allDay:false,
                url:'time/'+obj.id
            });
        }
        return obj;
    });

    //DEPRECIATE
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

    //DEPRECIATE
    $scope.createTime = function(){
        if($rootScope.currentUser){
            $scope.newTime.user = $rootScope.currentUser.id;
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

    //DEPRECAITE
    $scope.reply = function(activity){
        if ($rootScope.currentUser){
            //var index = $scope.time.map(function(obj){return obj.id}).indexOf(item.id);
            //$scope.time[index].showReply = !$scope.time[index].showReply
            $mdSidenav('content').toggle();
        }
        else{$mdSidenav('login').toggle()}
    };

}]);
