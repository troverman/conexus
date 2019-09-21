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
            member: ['$stateParams', 'UserModel', function($stateParams, UserModel){
                return UserModel.get({username:$stateParams.path,limit:1,skip:0,sort:'createdAt DESC'})
            }],
        }
	})
    .state( 'member.activity', {
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
                return OrderModel.get({user:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
            contentList: ['ContentModel', 'member', function(ContentModel, member) {
                return ContentModel.get({user:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
            profileContent: ['ContentModel', 'member', function(ContentModel, member) {
                return ContentModel.get({profile:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
            time: ['member', 'TimeModel', function(member, TimeModel) {
                return TimeModel.get({user:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
            transactionsFrom: ['member', 'TransactionModel', function(member, TransactionModel) {
                return TransactionModel.get({from:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
            transactionsTo: ['member', 'TransactionModel', function(member, TransactionModel) {
                return TransactionModel.get({to:member.id, limit:20, skip:0, sort:'createdAt DESC'});
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
        },
        //TODO: DEPRECIATE RESOLVE
        resolve: {
            actions: ['ActionModel', 'member', function(ActionModel, member) {
                return ActionModel.get({user:member.id, limit:20, skip:0, sort:'createdAt DESC'});
            }]
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
                return ContentModel.get({user:member.id, limit:20, skip:0, sort:'createdAt DESC'});
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

            //TODO: REFACTOR get
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

            //TODO: REFACTOR get FILTER QUERY
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
        //TODO:$location.search RESOLVE PARAMS..
        //INIT FILTER..
        resolve: {
            items: ['member', 'ItemModel', function(member, ItemModel) {
                return ItemModel.get({user:member.id, limit:100, skip:0, sort:'createdAt DESC'});
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
        //TODO:$location.search RESOLVE PARAMS..
        //INIT FILTER..
        //TODO: BETTER GET...
        resolve: {
            transactionsFrom: ['member', 'TransactionModel', function(member, TransactionModel) {
                return TransactionModel.get({from:member.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            transactionsTo: ['member', 'TransactionModel', function(member, TransactionModel) {
                return TransactionModel.get({to:member.id, limit:100, skip:0, sort:'createdAt DESC'});
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
                return OrderModel.get({user:member.id, limit:20, skip:0, sort:'createdAt DESC'});
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
                return  MemberModel.get({user:member.id, limit:100, skip:0, sort:'createdAt DESC'});
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
                return TaskModel.get({user:member.id, limit:20, skip:0, sort:'createdAt DESC'});
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
                return TimeModel.get({user:member.id, limit:100, skip:0, sort:'createdAt DESC'});
            }]
        }
    })
}])

.controller( 'MemberCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$scope', '$stateParams', 'FollowerModel', 'member', 'seoService', 'titleService', function MemberController($location, $mdSidenav, $rootScope, $sailsSocket, $scope, $stateParams, FollowerModel, member, seoService, titleService) {
    
    $scope.member = member;
    if(!$scope.member){$location.path('/')}
    titleService.setTitle($scope.member.username + ' | CRE8.XYZ');
    $scope.member.isFollowing = false;
    
    //TODO: ASSOCIATION..
    $scope.follow = function() {
        if ($rootScope.currentUser){
            $scope.newFollower = {};
            $scope.newFollower.followed = $scope.member.id;
            $scope.newFollower.follower = $rootScope.currentUser.id;
            FollowerModel.create($scope.newFollower).then(function(model) {
                $scope.member.isFollowing = true;
                $rootScope.pop('Following', 'You are now follwing '+ $scope.member.username)
            });
        }
        else{$mdSidenav('login').toggle()}
    };
   
}])

.controller( 'MemberAboutCtrl', ['$sailsSocket', '$scope', 'titleService', function MemberAboutController($sailsSocket, $scope, titleService) {
    titleService.setTitle($scope.member.username + ' | About | CRE8.XYZ');
}])

.controller( 'MemberActionsCtrl', ['$sailsSocket', '$scope', 'ActionModel', 'actions', 'titleService', function MemberActionsController($sailsSocket, $scope, ActionModel, actions, titleService) {
    titleService.setTitle($scope.member.username + ' | Actions | CRE8.XYZ');
    $scope.actions = actions.map(function(obj){obj.model = 'ACTION'; return obj;});
}])

.controller( 'MemberActivityCtrl', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', '$stateParams', 'contentList', 'ContentModel', 'FollowerModel', 'member', 'orders', 'profileContent', 'ReactionModel', 'time', 'titleService', 'transactionsFrom', 'transactionsTo', function MemberActivityController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, $stateParams, contentList, ContentModel, FollowerModel, member, orders, profileContent, ReactionModel, time, titleService, transactionsFrom, transactionsTo) {
   
    titleService.setTitle($scope.member.username + ' | Activity | CRE8.XYZ');

    //NEED MODEL FOR TOKENIZATION MINT? EVENT? 
        //NEEDED FOR REAL LEDGER PG..
    //transactionsFrom
    //transactionsTo

    //var query = JSON.stringify([
    //    {model:'ORDER', limit:20, skip:0, sort:'createdAt DESC'},
    //    {model:'ITEM', limit:20,skip:0,sort:'createdAt DESC'},
    //    {model:'PROJECT', limit:20,skip:0,sort:'createdAt DESC'},
    //    {model:'TASK', limit:20,skip:0,sort:'createdAt DESC'},
    //    {model:'TIME', limit:20,skip:0,sort:'createdAt DESC'},
    //    {model:'TRANSACTION', limit:20,skip:0,sort:'createdAt DESC'},
    //    {model:'USER', limit:20,skip:0,sort:'createdAt DESC'}
    //]);
    //$scope.stateIsLoadingActivity = true;
    //SearchModel.getFeed(query).then(function(searchModels){
    //    $scope.stateIsLoadingIntro = false;
    //    console.log(searchModels);
    //    $scope.activity = searchModels;
    //    $scope.init();
    //});

    $scope.contentList = contentList.map(function(obj){obj.model = 'CONTENT';return obj;});
    $scope.orders = orders.map(function(obj){
        var elementsObj = {};
        for (y in Object.keys(obj.setAlpha)){
            var modelNode = {
                group:'nodes',
                data:{id:Object.keys(obj.setAlpha)[y], name:Object.keys(obj.setAlpha)[y]}
            };
            if (Object.keys(elementsObj).indexOf(Object.keys(obj.setAlpha)[y]) == -1){
                elementsObj[Object.keys(obj.setAlpha)[y]] = modelNode;
            }
            for (z in Object.keys(obj.setBeta)){
                var modelNode = {
                    group:'nodes',
                    data:{id:Object.keys(obj.setBeta)[z], name:Object.keys(obj.setBeta)[z]}
                };
                if (Object.keys(elementsObj).indexOf(Object.keys(obj.setBeta)[z]) == -1){
                    elementsObj[Object.keys(obj.setBeta)[z]] = modelNode;
                    var modelEdge = {
                        group:'edges',
                        data:{
                            id:Object.keys(obj.setAlpha)[y]+'-'+Object.keys(obj.setBeta)[z], 
                            source:Object.keys(obj.setAlpha)[y], 
                            target:Object.keys(obj.setBeta)[z],
                            label: obj.setBeta[Object.keys(obj.setBeta)[z]],
                        },
                        classes: 'edgeLabelStyle',
                    };
                    elementsObj[Object.keys(obj.setAlpha)[y]+'-'+Object.keys(obj.setBeta)[z]] = modelEdge;
                }
            }
        }
        obj.directedGraph = elementsObj;
        obj.model = 'ORDER';
        return obj
    });
    $scope.time = time.map(function(obj){obj.model = 'TIME';return obj;});
    $scope.transactions = [].concat.apply([], [transactionsFrom, transactionsTo]);
    $scope.transactions = $scope.transactions.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.transactions = $scope.transactions.map(function(obj){obj.model = 'TRANSACTION';return obj;});
    $scope.activity = [].concat.apply([], [$scope.contentList, $scope.orders, $scope.time, $scope.transactions]);
    $scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.activity = $scope.activity.slice(0,300);


    //\/\\//\\//
    //\SOCKETS//
    //\\\//\\///
    //IF LIVE FILTER..
    //LOOK AT MEMBER ASSOCIATIONS
    //TODO CUSTOM ROOM SOCKET IN PEER
    //TODO... EVENTS
    //ASSOCIATION(S)
    //USER VS PROFILE POST ETC --> 2 SIDED
    $sailsSocket.subscribe('content', function (envelope) {
        if (envelope.verb == 'create'){if (envelope.data.user == $scope.member.id){$scope.activity.unshift(envelope.data);}}
        if (envelope.verb == 'update'){
            var index = $scope.activity.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){$scope.activity[index].data = envelope.data.data;}
        }
    });
    $sailsSocket.subscribe('task', function (envelope) {
        if (envelope.verb == 'create'){if (envelope.data.user == $scope.member.id){$scope.activity.unshift(envelope.data);}}
        if (envelope.verb == 'update'){
            var index = $scope.activity.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){$scope.activity[index].data = envelope.data.data;}
        }
    });
    $sailsSocket.subscribe('time', function (envelope) {
        if (envelope.verb == 'create'){if (envelope.data.user == $scope.member.id){$scope.activity.unshift(envelope.data);}}
        if (envelope.verb == 'update'){
            var index = $scope.activity.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){$scope.activity[index].data = envelope.data.data;}
        }
    });
    $sailsSocket.subscribe('transaction', function (envelope) {
        if (envelope.verb == 'create'){if (envelope.data.user == $scope.member.id){$scope.activity.unshift(envelope.data);}}
        if (envelope.verb == 'update'){
            var index = $scope.activity.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){$scope.activity[index].data = envelope.data.data;}
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
        
        title: {text: ''},
        xAxis: {title: {text: null}},
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };

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
        tooltip: {shared: true,},
        credits:{enabled:false},
    };

    $scope.balanceColumn = {
        chart: {zoomType: 'x',},
        series: [{
            id: 'Combination',
            type: 'column',
            name: 'Asset Balance',
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
        legend:{enabled: false},
        credits:{enabled:false},
    };

    //RADIAL | BALANCE
    for (x in Object.keys($scope.balance)){
        $scope.balanceRadial.xAxis.categories.push(Object.keys($scope.balance)[x]);
        $scope.balanceRadial.series[0].data.push($scope.balance[Object.keys($scope.balance)[x]]);
    }

    var sortable = [];
    for (x in $scope.balance) {
        if(!isNaN($scope.balance[x]) && $scope.balance[x]!=null && $scope.balance[x]!="undefined" && $scope.balance[x]!="NaN"){
            sortable.push([x, $scope.balance[x]]);
        }
    }
    sortable.sort(function(a, b) {return b[1] - a[1];});

    for (x in sortable){
        if (x < 250){
            $scope.balancePie.series[0].data.push({
                name: sortable[x][0],
                y: sortable[x][1],
            });
            $scope.balanceColumn.xAxis.categories.push(sortable[x][0]);
            $scope.balanceColumn.series[0].data.push(sortable[x][1]);   
        }
    }
    
    $scope.lookupBalance = function(){
        if ($scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = $scope.balance[$scope.balanceLook]}
        if (!$scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = 0}
    };

}])

.controller( 'MemberContentCtrl', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', '$stateParams', 'contentList', 'ReactionModel', 'titleService', function MemberContentController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, $stateParams, contentList, ReactionModel, titleService) {
   
    titleService.setTitle($scope.member.username + ' | Content | CRE8.XYZ');

    //TODO: EVENT.. SIMPLITY & UNIFY.. ROOTSCOPE ACTIVITY.... OR ITEMS..
        //GENERIC TEMPLATING
        //reaction..contentList..
            //event, items
    $scope.contentList = contentList;
    $sailsSocket.subscribe('reaction', function (envelope) {
        if (envelope.verb == 'create'){if (envelope.data.user == $scope.member.id){$scope.contentList.unshift(envelope.data);}}
        if (envelope.verb == 'update'){
            var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){$scope.contentList[index] = envelope.data;}
        }
    });

}])

.controller( 'MemberFollowersCtrl', ['$sailsSocket', '$scope', '$stateParams', 'FollowerModel', 'followers', 'titleService', function MemberFollowersController($sailsSocket, $scope, $stateParams, FollowerModel, followers, titleService) {
    
    titleService.setTitle($scope.member.username + ' | Followers | CRE8.XYZ');
    
    $scope.followers = followers.map(function(obj){
        obj.user = obj.follower;
        return obj;
    });

    $sailsSocket.subscribe('follower', function (envelope) {
        if (envelope.verb == 'create'){
            $scope.time.unshift(envelope.data);
        }
    });

}])

.controller( 'MemberFollowingCtrl', ['$sailsSocket', '$scope', '$stateParams', 'following', 'FollowerModel', 'titleService', function MemberFollowingController($sailsSocket, $scope, $stateParams, following, FollowerModel, titleService) {
    
    titleService.setTitle($scope.member.username + ' | Following | CRE8.XYZ');

    $scope.following = following.map(function(obj){
        obj.user = obj.followed;
        return obj;
    });

   $sailsSocket.subscribe('follower', function (envelope) {
        if (envelope.verb == 'create'){
            $scope.time.unshift(envelope.data);
        }
    });

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
        ItemModel.get({user:$scope.member.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(items){
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
        ItemModel.get({limit:100, skip:$scope.skip, sort:$scope.selectedSort}).then(function(tasks) {
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

.controller( 'MemberLedgerCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$scope', '$stateParams', 'member', 'titleService', 'transactionsFrom', 'TransactionModel', 'transactionsTo', function MemberLedgerController($location, $mdSidenav, $rootScope, $sailsSocket, $scope, $stateParams, member, titleService, transactionsFrom, TransactionModel, transactionsTo) {
    
    titleService.setTitle($scope.member.username + ' | Ledger | CRE8.XYZ');

    $scope.member = member;

    $scope.searchQuery = [];
    $scope.transactionsFrom = transactionsFrom;
    $scope.transactionsTo = transactionsTo;
    $scope.transactions = $scope.transactionsFrom.concat($scope.transactionsTo);
    $scope.transactions = $scope.transactions.map(function(obj){ obj.model = 'TRANSACTION'; return obj;});

    //ON ANY TOKEN MOMENT..  FOR LEDGER.. GOTTA SHOW THE INCOME! -- SOME UNITY
    //QUERY AGNOSITC MODEL.. AND OR ALL SEARCH LOL
    //SEARHC MODEL TO SEE TOKEN POTIENTAL.. 
    //CREATE TIME.. --> +++ TIME TOKENS 

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

    //IMPROVE :)
    function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
    function amountInArray(array, value) {
        return array.reduce(function(n, x){
            if (x.tag == value.tag){n+=parseFloat(x.amount)}
            return n;
        },0);
    };

    //BETTER..
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


    //TODO FRONTEND QUERY BUILDING
    $scope.selectAsset = function(asset){
        $rootScope.stateIsLoading = true;

        //TODO: FILTERS.. 
        //COMPLET FILTER
        //SEARCH MODEL
        //SearchModel.search().then(function(transactionModels){
        //    $scope.transactions = transactionModels;
        //});

        //is evertrhing an association? ...
        var newQuery = [
            {
                filter:[
                    {
                        model:'TRANSACTION',
                        modelParam:'amountSet.'+asset,
                        query:{$gt:0}
                    }
                ],
                chain:'AND',
                params:{}
            },
            {
                filter:[
                    {
                        model:'TRANSACTION',
                        modelParam:'to',
                        query: $scope.member.id,
                        chain:'OR'
                    },
                    {
                        model:'TRANSACTION',
                        modelParam:'from',
                        query: $scope.member.id,
                        chain:'OR'
                    }
                ],
                params:{}
            },
            //works boi
            //{
            //    filter:[
            //        {
            //            model:'TRANSACTION',
            //            modelParam:'tags',
            //            query: 'tip,service,hairstylist',
            //            chain:'AND'
            //        }
            //    ],
            //    params:{}
            //},
            {
                filter:[],
                params:{
                    limit:100,
                    skip:0,
                    sort:'createdAt DESC'
                }
            }
        ];

        var oldQuery = {
            limit:100,
            skip:0,
            sort:'createdAt DESC',
            amountSet:asset,
            user: $scope.member.id
        };

        //console.log(query);
        console.log($location.search().assets)

        //if ($location.search().assets){
        //    var assetSet = [$location.search().assets];
        //    assetSet.push(asset);
        //    $location.search('assets',assetSet);
        //}
        //else{
        //    $location.search('assets',asset);
        //}

        TransactionModel.get(oldQuery, JSON.stringify(newQuery)).then(function(transactionModels){
            $rootScope.stateIsLoading = false;
            $scope.transactions = transactionModels;
            //$scope.updateGraph();
        });

    };

    $scope.updateGraph = function(){

        $scope.sumFlow = [];
        $scope.sumFrom = []
        $scope.sumTo = [];
        $scope.sumTransactions = [];
        $scope.transactions = $scope.transactions.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);}).reverse(); 

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

    };

    $scope.updateGraph();

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
    $scope.selectOverview();


    //DO IN RESOLVE!
    console.log($location.search());
    if ($location.search()){
        //if assets..
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

.controller( 'MemberPositionsCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$scope', '$stateParams', 'member', 'OrderModel', 'orders', 'ReactionModel', 'titleService', function MemberPositionsController( $location, $mdSidenav, $rootScope, $sailsSocket, $scope, $stateParams, member, OrderModel, orders, ReactionModel, titleService) {
    
    titleService.setTitle($scope.member.username + ' | Positions | CRE8.XYZ');

    $scope.newReaction = {};
    $scope.orders = orders.map(function(obj){
        var elementsObj = {};
        for (y in Object.keys(obj.setAlpha)){
            var modelNode = {
                group:'nodes',
                data:{id:Object.keys(obj.setAlpha)[y], name:Object.keys(obj.setAlpha)[y]}
            };
            if (Object.keys(elementsObj).indexOf(Object.keys(obj.setAlpha)[y]) == -1){
                elementsObj[Object.keys(obj.setAlpha)[y]] = modelNode;
            }
            for (z in Object.keys(obj.setBeta)){
                var modelNode = {
                    group:'nodes',
                    data:{id:Object.keys(obj.setBeta)[z], name:Object.keys(obj.setBeta)[z]}
                };
                if (Object.keys(elementsObj).indexOf(Object.keys(obj.setBeta)[z]) == -1){
                    elementsObj[Object.keys(obj.setBeta)[z]] = modelNode;
                    var modelEdge = {
                        group:'edges',
                        data:{
                            id:Object.keys(obj.setAlpha)[y]+'-'+Object.keys(obj.setBeta)[z], 
                            source:Object.keys(obj.setAlpha)[y], 
                            target:Object.keys(obj.setBeta)[z],
                            label: obj.setBeta[Object.keys(obj.setBeta)[z]],
                        },
                        classes: 'edgeLabelStyle',
                    };
                    elementsObj[Object.keys(obj.setAlpha)[y]+'-'+Object.keys(obj.setBeta)[z]] = modelEdge;
                }
            }
        }
        obj.directedGraph = elementsObj;
        return obj
    });

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

    $rootScope.types = [
        {text:'CONTINUAL'},
        {text:'ONBOOKS'},
    ];

    $scope.searchQuery = $rootScope.baseMarkets;
    $scope.selectedTab = 'POSITIONS';

    //COMPUTED?? IN MEMBER??.. MAPPING FOR VALUE MAP.. IE LIKE MARKET FOR MEMBER.. [MEMBER-ORDER]
    if ($scope.orders.length != 0){

        $rootScope.baseMarkets = [];
        $rootScope.markets = [];

        for (x in $scope.orders){
            if ($scope.orders[x].setAlpha && $scope.orders[x].setBeta){
                for (y in Object.keys($scope.orders[x].setAlpha)){$rootScope.baseMarkets.push(Object.keys($scope.orders[x].setAlpha)[y])}
                for (y in Object.keys($scope.orders[x].setBeta)){$rootScope.markets.push(Object.keys($scope.orders[x].setBeta)[y])}
            }
        }
        //REMOVE DUPS
        $rootScope.baseMarkets = Array.from(new Set($rootScope.baseMarkets));
        $rootScope.markets = Array.from(new Set($rootScope.markets));
        $rootScope.baseMarkets = $rootScope.baseMarkets.map(function(obj){return {text:obj};});
        $rootScope.markets = $rootScope.markets.map(function(obj){return {text:obj};});

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

    $scope.selectTab = function(model){$scope.selectedTab = model};

}])

.controller( 'MemberProjectsCtrl', ['$sailsSocket', '$scope', 'projects', 'titleService', function MemberProjectsController($sailsSocket, $scope, projects, titleService) {
    
    titleService.setTitle($scope.member.username + ' | Projects | CRE8.XYZ');
    $scope.projects = projects;

    $sailsSocket.subscribe('projectmember', function (envelope) {
        if (envelope.verb == 'create'){
            $scope.projects.unshift(envelope.data);
        }
    });

}])

.controller( 'MemberTasksCtrl', ['$rootScope', '$sailsSocket', '$scope', 'member', 'tasks', 'titleService', function MemberTimeController($rootScope, $sailsSocket, $scope, member, tasks, titleService) {
    titleService.setTitle($scope.member.username + ' | Tasks | CRE8.XYZ'); 
    $scope.tasks = tasks.map(function(obj){obj.model = 'TASK';return obj;});
    $sailsSocket.subscribe('task', function (envelope) {
        if (envelope.verb == 'create'){if (envelope.data.user == $scope.member.id){$scope.tasks.unshift(envelope.data);}}
        if (envelope.verb == 'update'){
            var index = $scope.tasks.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){$scope.tasks[index] = envelope.data;}
        }
    });
}])

.controller( 'MemberTimeCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$scope', '$stateParams', 'member', 'ReactionModel', 'time', 'TimeModel', 'titleService', function MemberTimeController( $location, $mdSidenav, $rootScope, $sailsSocket, $scope, $stateParams, member, ReactionModel, time, TimeModel, titleService) {
    
    titleService.setTitle($scope.member.username + ' | Time | CRE8.XYZ');

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
        slotDuration:'00:15:00',
        nowIndicator: true,
        allDaySlot: false,
    };
    $scope.newReaction = {};
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

    $sailsSocket.subscribe('time', function (envelope) {
        if (envelope.verb == 'create'){if (envelope.data.user == $scope.member.id){$scope.time.unshift(envelope.data);}}
        if (envelope.verb == 'update'){
            var index = $scope.time.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){$scope.time[index] = envelope.data;}
        }
    });

}]);
