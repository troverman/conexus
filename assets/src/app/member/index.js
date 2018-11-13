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
		resolve: {
            //TODO: REFACTOR
            member: ['$stateParams', 'UserModel', function($stateParams, UserModel){
                return UserModel.getByUsername($stateParams.path);
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
        resolve: {
            orders: ['member', 'OrderModel', function(member, OrderModel){
                return OrderModel.getSome('user', member.id, 20, 0, 'createdAt DESC');
            }],

            //TODO | BETTER....
            posts: ['member', 'PostModel', function(member, PostModel) {
                return PostModel.getSome('user', member.id, 20, 0, 'createdAt DESC');
            }],
            profilePosts: ['member', 'PostModel', function(member, PostModel) {
                return PostModel.getSome('profile', member.id, 20, 0, 'createdAt DESC');
            }],

            transactionsFrom: ['member', 'TransactionModel', function(member, TransactionModel) {
                return TransactionModel.getSome('from', member.id, 20, 0, 'createdAt DESC');
            }],
            transactionsTo: ['member', 'TransactionModel', function(member, TransactionModel) {
                return TransactionModel.getSome('to', member.id, 20, 0, 'createdAt DESC');
            }],
            work: ['member', 'WorkModel', function(member, WorkModel) {
                return WorkModel.getSome('user', member.id, 20, 0, 'createdAt DESC');
            }]
        }
    })
    .state( 'member.assets', {
        url: '/assets',
        views: {
            "memberAssets": {
                controller: 'MemberAssetsCtrl',
                templateUrl: 'member/templates/assets.tpl.html'
            }
        },
        resolve: {
            
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
        resolve: {
            //TODO: REFACTOR
            posts: ['member', 'PostModel', function(member, PostModel) {
                return PostModel.getSome('user', member.id, 20, 0, 'createdAt DESC');
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
        resolve: {
            //TODO: REFACTOR
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
        resolve: {
            //TODO: REFACTOR
            following: ['member', 'FollowerModel', function(member, FollowerModel) {
                return FollowerModel.getFollowing(member);
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
        resolve: {
            member: ['$stateParams', 'UserModel', function($stateParams, UserModel){
                return UserModel.getByUsername($stateParams.path);
            }],
            transactionsFrom: ['member', 'TransactionModel', function(member, TransactionModel) {
                return TransactionModel.getSome('from', member.id, 50, 0, 'createdAt DESC');
            }],
            transactionsTo: ['member', 'TransactionModel', function(member, TransactionModel) {
                return TransactionModel.getSome('to', member.id, 50, 0, 'createdAt DESC');
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
        resolve: {
            member: ['$stateParams', 'UserModel', function($stateParams, UserModel){
                return UserModel.getByUsername($stateParams.path);
            }],
            orders: ['member', 'OrderModel', function(member, OrderModel){
                return OrderModel.getSome('user', member.id, 20, 0, 'createdAt DESC');
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
        resolve: {
            projects: ['MemberModel', 'member', function(MemberModel, member) {
                return  MemberModel.getSome('user', member.id, 100, 0, 'createdAt DESC');
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
        resolve: {
            work: ['member', 'WorkModel', function(member, WorkModel) {
                return WorkModel.getSome('user', member.id, 250, 0, 'createdAt DESC');
            }]
        }
    })
}])

.controller( 'MemberCtrl', ['$location', '$sailsSocket', '$scope', '$stateParams', 'config', 'FollowerModel', 'lodash', 'member', 'seoService', 'titleService', 'TransactionModel', function MemberController($location, $sailsSocket, $scope, $stateParams, config, FollowerModel, lodash, member, seoService, titleService, TransactionModel) {
	$scope.currentUser = config.currentUser;
    $scope.member = member;
    if(!$scope.member){$location.path('/')}
    $scope.newFollower = {};
    $scope.newTransactionToggleVar = false;
    $scope.newTransaction = {};
    $scope.newTransaction.identifier = 'CRE8';
    $scope.newTransaction.content = $scope.member.username + ' here\'s some '+$scope.newTransaction.identifier;
    $scope.tabsToggleVar = false;
    titleService.setTitle($scope.member.username + ' | CRE8.XYZ');
    if($scope.currentUser){
        $scope.newTransaction.from = $scope.currentUser.id;
    }

    //TODO: seoService

    $scope.createTransaction = function(){
        if($scope.currentUser){
            $scope.newTransaction.to = $scope.member.id;
            TransactionModel.create($scope.newTransaction).then(function(model){
                $scope.newTransaction = {};
            });
        }
        else{$location.path('/login')}
    };

    $scope.follow = function() {
        $scope.newFollower.followed = $scope.member.id;
        $scope.newFollower.follower = $scope.currentUser.id;
        FollowerModel.create($scope.newFollower).then(function(model) {
            $scope.newFollower = {};
        });
    };

    $scope.newTransactionToggle = function() {
        $scope.newTransactionToggleVar = !$scope.newTransactionToggleVar;
    };

    $scope.search = function(){};

    $scope.tabsToggle = function() {
        $scope.tabsToggleVar = !$scope.tabsToggleVar;
    };

    $scope.unfollow = function(member) {
        FollowerModel.delete(member);
    };

    //TODO: SOCKET | WEB3
    /*
    $sailsSocket.subscribe('follower', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                  $scope.followers.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.followers, {id: envelope.id});
                break;
        }
    });
    */

}])
.controller( 'MemberActivityCtrl', ['$sailsSocket', '$sce', '$scope', '$stateParams', 'config', 'FollowerModel', 'lodash', 'member', 'orders', 'PostModel', 'posts', 'profilePosts', 'ReactionModel', 'titleService', 'transactionsFrom', 'transactionsTo', 'work', function MemberActivityController($sailsSocket, $sce, $scope, $stateParams, config, FollowerModel, lodash, member, orders, PostModel, posts, profilePosts, ReactionModel, titleService, transactionsFrom, transactionsTo, work) {
    $scope.currentUser = config.currentUser;
    $scope.member = member;
    titleService.setTitle($scope.member.username + ' | Activity | CRE8.XYZ');
    $scope.newContent = {};
    $scope.newReaction = {};

    //TODO: ACTIVITY FEED ~ BLEND OF MODELS
    $scope.orders = orders;
    $scope.posts = posts;
    $scope.profilePosts = profilePosts;

    $scope.transactions = [].concat.apply([], [transactionsFrom, transactionsTo]);
    $scope.transactions = $scope.transactions.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.work = work;

    $scope.orders = $scope.orders.map(function(obj){
        obj.model = 'ORDER';
        return obj;
    });

    $scope.posts = [].concat.apply([], [$scope.posts, $scope.profilePosts]);
    $scope.posts = $scope.posts.map(function(obj){
        obj.model = 'CONTENT';
        return obj;
    });

    //COMBINE AND REMOVE DUPS .. REDO THIS LATER | REFACTOR .... BLEH
    $scope.posts = $scope.posts.filter(function(obj){
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

    $scope.transactions = $scope.transactions.map(function(obj){
        obj.model = 'TRANSACTION';
        return obj;
    });

    $scope.work = $scope.work.map(function(obj){
        obj.model = 'WORK';
        return obj;
    });
    
    $scope.activity = [].concat.apply([], [$scope.orders, $scope.posts, $scope.transactions, $scope.work]);
    $scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.activity = $scope.activity.slice(0,100);

    $scope.createContent = function(post){
        $scope.newContent.post = post.id;
        $scope.newContent.user = $scope.currentUser.id;
        $scope.newContent.profile = $scope.member.id;
        PostModel.create($scope.newPost).then(function(model) {
            $scope.newPost = {};
        });
    };

    //TODO: MODELS | ONLY POST/CONTENT
    $scope.createReaction = function(content, type){
        if($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.post = content.id;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;

            var index = $scope.activity.map(function(obj){return obj.id}).indexOf(content.id);

            if (type =='plus'){$scope.activity[index].plusCount++}
            if (type =='minus'){$scope.activity[index].minusCount++}
            ReactionModel.create($scope.newReaction).then(function(model){
                $scope.newReaction = {};
            });

        }
        else{$location.path('/login')}
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

    $scope.reply = function(item){
        var index = $scope.activity.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.activity[index].showReply = !$scope.activity[index].showReply
    };

    $scope.search = function(){};

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

}])

.controller( 'MemberAssetsCtrl', ['$scope', 'config', 'titleService', function MemberAssetsCtrl( $scope, config, titleService ) {
    titleService.setTitle($scope.member.username + ' | Assets | CRE8.XYZ');
    $scope.currentUser = config.currentUser;

    console.log($scope.member);

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
        chart: {
            zoomType: 'x',
        },
        series: [{
            id: 'Combination',
            type: 'column',
            name: 'Reputation Balance',
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

    //FILTERING  | LAYER IE PROJECT 

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

.controller( 'MemberContentCtrl', ['$sailsSocket', '$sce', '$scope', '$stateParams', 'config', 'posts', 'lodash', 'titleService', function MemberContentController($sailsSocket, $sce, $scope, $stateParams, config, posts, lodash, titleService) {
    $scope.currentUser = config.currentUser;
    $scope.contentList = posts;
    $scope.newContent = {};
    $scope.newContentToggleVar = false;
    $scope.newReaction = {};

    titleService.setTitle($scope.member.username + ' | Content | CRE8.XYZ');
    //$scope.posts = posts;
    //$scope.videos = videos;

    $scope.createContent = function(){};

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
        else{$location.path('/login')}
    };

    //TODO: BETTER | TAG STORAGE
    /*$scope.loadTags = function(){
        $scope.tags = $scope.contentList.map(function(obj){
            if(obj.tags){obj.tags = obj.tags.split(',')}
            return obj.tags;
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
    $scope.loadTags();*/

    $scope.newContentToggle = function() {
        $scope.newContentToggleVar = !$scope.newContentToggleVar;
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

    $scope.reply = function(item){
        var index = $scope.content.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.content[index].showReply = !$scope.content[index].showReply
    };

    $scope.search = function(){};

}])

.controller( 'MemberFollowersCtrl', ['$sailsSocket', '$scope', '$stateParams', 'config', 'FollowerModel', 'followers', 'lodash', 'titleService', function MemberFollowersController($sailsSocket, $scope, $stateParams, config, FollowerModel, followers, lodash, titleService) {
    $scope.currentUser = config.currentUser;
    titleService.setTitle($scope.member.username + ' | Followers | CRE8.XYZ');
    $scope.followers = followers;

    $scope.search = function(){};

    /*
    $sailsSocket.subscribe('follower', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.followers.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.followers, {id: envelope.id});
                break;
        }
    });
    */

}])

.controller( 'MemberFollowingCtrl', ['$sailsSocket', '$scope', '$stateParams', 'config', 'following', 'FollowerModel', 'lodash', 'titleService', function MemberFollowingController($sailsSocket, $scope, $stateParams, config, following, FollowerModel, lodash, titleService) {
    $scope.currentUser = config.currentUser;
    titleService.setTitle($scope.member.username + ' | Following | CRE8.XYZ');
    $scope.following = following;

    $scope.search = function(){};

    /*
    $sailsSocket.subscribe('follower', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.followers.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.followers, {id: envelope.id});
                break;
        }
    });
    */

}])

.controller( 'MemberLedgerCtrl', ['$location', '$sailsSocket', '$scope', '$stateParams', 'config', 'lodash', 'member', 'titleService', 'transactionsFrom', 'transactionsTo', function MemberLedgerController($location, $sailsSocket, $scope, $stateParams, config, lodash, member, titleService, transactionsFrom, transactionsTo) {
    
    $scope.assetSet = 'CRE8';
    $scope.currentUser = config.currentUser;
    $scope.member = member;
    $scope.newTransaction = {};
    titleService.setTitle($scope.member.username + ' | Ledger | CRE8.XYZ');

    $scope.transactionsFrom = transactionsFrom;
    $scope.transactionsTo = transactionsTo;
    $scope.transactions = $scope.transactionsFrom.concat($scope.transactionsTo);

    if($scope.currentUser){
        $scope.newTransaction.from = $scope.currentUser.id;
        $scope.newTransaction.to = $scope.member.id;
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
            data: [{
                name: 'Expense',
                y: [],
            }, {
                name: 'Revenue',
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

    if ($scope.transactions.length == 0){
        for (var i=0, t=88; i<t; i++) {
            $scope.transactionsFrom.push({to:'EXAMPLE ORGANIZATION', from:member.username.toUpperCase(), identifier:'CRE8', content:'SEED EXPENSE', createdAt:new Date(), amount:Math.round(0.5*Math.random() * t), ledger:'EXPENSE, SEED, EXAMPLE'})
            $scope.transactionsTo.push({to:member.username.toUpperCase(), from:'EXAMPLE ORGANIZATION', identifier:'CRE8', content:'SEED REVENUE', createdAt:new Date(), amount:Math.round(Math.random() * t), ledger:'REVENUE, SEED, EXAMPLE'})
        }
        $scope.transactions = $scope.transactionsFrom.concat($scope.transactionsTo);
    }



    //TAGS
    function countInArray(array, value) {
        return array.reduce(function(n, x){ return n + (x === value)}, 0);
    }

    function amountInArray(array, value) {
        return array.reduce(function(n, x){
            if (x.tag == value.tag){n+=parseFloat(x.amount)}
            return n;
        },0);
    }

    $scope.transactionTags = $scope.transactions.map(function(obj){
        var returnArray = [];
        if(obj.ledger){
            obj.ledger = obj.ledger.split(',');
            for (x in obj.ledger){
                returnArray.push({tag:obj.ledger[x].trim().toLowerCase(),amount:obj.amount})
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
    //TAGS
    //DO BY TAGS! SAME ..
    function sumFunction(obj){
        var sumArray = [];
        obj.reduce(function(a,b,i) {
            return $scope.sumArray[i] = parseFloat(a) + parseFloat(b.amount);
        }, 0);
        return sumArray;
    }
    //SERIES PER TAG
    //FOR X IN TAG -- SERIES.PUSH
        //SERIES[x].push(data)

    $scope.sumFlow = [];
    $scope.sumFrom = []
    $scope.sumTo = [];
    $scope.sumTransactions = [];
    $scope.transactions = $scope.transactions.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);}).reverse(); 

    //CONCAT | sumTransactions
    $scope.transactions.reduce(function(a,b,i) {
        if(b.from == $scope.member.id){return $scope.sumTransactions[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])-parseFloat(b.amount)];}
        if(b.to == $scope.member.id){return $scope.sumTransactions[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])+parseFloat(b.amount)];}
    },[0,0]);

    //CONCAT | sumFrom
    $scope.transactions.reduce(function(a,b,i) {
        if(b.from == $scope.member.id){return $scope.sumFrom[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])+parseFloat(b.amount)];}
        else{return $scope.sumFrom[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])];}
    },[0,0]);

    //CONCAT | sumTo
    $scope.transactions.reduce(function(a,b,i) {
        if(b.to == $scope.member.id){return $scope.sumTo[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])+parseFloat(b.amount)];}
        else{return $scope.sumTo[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])];}
    },[0,0]);

    //CONCAT | sumFlow
    $scope.transactions.reduce(function(a,b,i) {
        if(b.from == $scope.member.id){return $scope.sumFlow[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])+parseFloat(b.amount)];}
        if(b.to == $scope.member.id){return $scope.sumFlow[i] = [new Date(b.createdAt).getTime(), parseFloat(a[1])+parseFloat(b.amount)];}
    },[0,0]);

    $scope.chart.series[0].data = $scope.sumTransactions;
    $scope.chart.series[1].data = $scope.sumFrom;
    $scope.chart.series[2].data = $scope.sumTo;
    //$scope.chart.series[3].data = $scope.sumFlow;

    //REDO
    $scope.transactions = $scope.transactions.reverse();

    $scope.selectExpense = function(){
        //TODO: TAGS
        $scope.transactionTags = $scope.transactionsFrom.map(function(obj){
            var returnArray = [];
            if(obj.ledger){
                for (x in obj.ledger){
                    returnArray.push({tag:obj.ledger[x].trim().toLowerCase(),amount:obj.amount})
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
            var returnArray = [];
            if(obj.ledger){
                for (x in obj.ledger){
                    returnArray.push({tag:obj.ledger[x].trim().toLowerCase(),amount:obj.amount})
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
        $scope.pie.series[0].data = [];
        for (x in $scope.sortedTransactionTags){
            $scope.pie.series[0].data.push({
                name: $scope.sortedTransactionTags[x].element,
                y: $scope.sortedTransactionTags[x].amount,
            });
        }
    };






    //TODO
    $scope.createContent = function(content, type){};
    $scope.createReaction = function(content, type){};

    $scope.createTransaction = function(){
        $scope.newTransaction.user = $scope.currentUser.id;
        $scope.newTransaction.ledger = $scope.newTransaction.ledger.map(function(obj){
            return obj.text
        }).join(",");
        TransactionModel.create($scope.newTransaction).then(function(model){
            $scope.newTransaction = {};
            $scope.transactions.unshift(model);
        });
    };

    $scope.reply = function(activity){
        if ($scope.currentUser){
            var index = $scope.transactions.map(function(obj){return obj.id}).indexOf(activity.id);
            $scope.transactions[index].showReply = !$scope.transactions[index].showReply;
        }
        else{$location.path('/login')}
    };

    $scope.newTransactionToggle = function(){
        $scope.newTransactionToggleVar = $scope.newTransactionToggleVar ? false : true;
    };

}])

.controller( 'MemberPositionsCtrl', ['$location', '$sailsSocket', '$scope', '$stateParams', 'config', 'lodash', 'member', 'OrderModel', 'orders', 'titleService', function MemberPositionsController( $location, $sailsSocket, $scope, $stateParams, config, lodash, member, OrderModel, orders, titleService) {
    $scope.currentUser = config.currentUser;
    $scope.member = member;
    $scope.orders = orders;
    $scope.orders.forEach(function(part, index) {
        if ($scope.orders[index].identiferSet){$scope.orders[index].identiferSet = $scope.orders[index].identiferSet.split(',');}
        if ($scope.orders[index].amountSet){$scope.orders[index].amountSet = $scope.orders[index].amountSet.split(',');}
        if ($scope.orders[index].identiferSet1){$scope.orders[index].identiferSet1 = $scope.orders[index].identiferSet1.split(',');}
        if ($scope.orders[index].amountSet1){ $scope.orders[index].amountSet1 = $scope.orders[index].amountSet1.split(',');}
    });
    titleService.setTitle($scope.member.username + ' | Positions | CRE8.XYZ');

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
        tooltip: {
            shared: true,
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

    $scope.addMarket = function(type){
        //basemarket; market
    };

    $scope.newOrderToggle = function(){
        $scope.newOrderToggleVar = $scope.newOrderToggleVar ? false : true;
    };

    //TODO
    $scope.createContent = function(content, type){};

    $scope.createOrder = function() {
        if ($scope.currentUser){
            $scope.newOrder.user = $scope.currentUser.id;
            //TODO: PARSE INPUT
            //$scope.newOrder.amountSet = $scope.newOrder.amountSet.replace(/^(\d+(,\d+)*)?$/gm);
            //$scope.newOrder.amountSet1 = $scope.newOrder.amountSet1.replace(/^(\d+(,\d+)*)?$/gm);
            OrderModel.create($scope.newOrder).then(function(model) {
                $scope.orders.push($scope.newOrder);
                $scope.newOrder = {};
            });
        }
        else{$location.path('/login')}
    };

    //TODO
    $scope.createReaction = function(content, type){};

    $scope.reply = function(item){
        var index = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.orders[index].showReply = !$scope.orders[index].showReply
    };

    $scope.search = function(){};

}])

.controller( 'MemberProjectsCtrl', ['$sailsSocket', '$scope', '$stateParams', 'config', 'lodash', 'projects', 'titleService', function MemberProjectsController($sailsSocket, $scope, $stateParams, config, lodash, projects, titleService) {
    $scope.currentUser = config.currentUser;
    titleService.setTitle($scope.member.username + ' | Following | CRE8.XYZ');
    $scope.projects = projects;

    $scope.search = function(){};

    /*
    $sailsSocket.subscribe('follower', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.followers.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.followers, {id: envelope.id});
                break;
        }
    });
    */

}])


.controller( 'MemberTimeCtrl', ['$location', '$sailsSocket', '$scope', '$stateParams', 'config', 'lodash', 'member', 'titleService', 'work', 'WorkModel', function MemberTimeController( $location, $sailsSocket, $scope, $stateParams, config, lodash, member, titleService, work, WorkModel) {
    
    $scope.currentUser = config.currentUser;

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

    $scope.newTimeToggleVar = false;
    $scope.newTime = {};
    $scope.newTime.startTime = new Date();
    $scope.newTime.startTime.setMilliseconds(0);


    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    $scope.work = work;
    $scope.work = work.map(function(obj){

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
                url:'work/'+obj.id
            });
        }

        return obj;

    });

    //TODO
    $scope.createContent = function(content, type){};

    //TODO
    $scope.createReaction = function(content, type){};

    $scope.createTime = function(){
        if($scope.currentUser){
            $scope.newTime.user = $scope.currentUser.id;

            //HMM
            $scope.newTime.createdAt = $scope.newTime.startTime;

            console.log($scope.newTime);
            WorkModel.create($scope.newTime).then(function(model){
                $scope.newTime = {};
            });

        }
        else{$location.path('/login')}
    };

    $scope.newTimeToggle = function() {
        $scope.newTimeToggleVar = !$scope.newTimeToggleVar;
    };

    $scope.reply = function(item){
        var index = $scope.work.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.work[index].showReply = !$scope.work[index].showReply
    };

    $scope.search = function(){};

}]);
