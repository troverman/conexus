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

        //TODO: DEPRECIATE RESOLVE
        resolve:{

            //TODO: GET FEED
            //TODO: COMPLEX QUERY
            contentList: ['ContentModel', function(ContentModel){
                return ContentModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],
            members: ['UserModel', function(UserModel){
                return UserModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],
            orders: ['OrderModel', function(OrderModel) {
                return OrderModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],
            projects: ['ProjectModel', function(ProjectModel) {
                return ProjectModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }], 
            tasks: ['TaskModel', function(TaskModel) {
                return TaskModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],
            time: ['TimeModel', function(TimeModel) {
                return TimeModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],
            transactions: ['TransactionModel', function(TransactionModel) {
                return TransactionModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
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

        //TODO: DEPRECIATE RESOLVE
        resolve:{

            //TODO: GET FEED
            //TODO: COMPLEX QUERY
            contentList: ['ContentModel', function(ContentModel){
                return ContentModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],
            members: ['UserModel', function(UserModel){
                return UserModel.getSome({limit:30, skip:0, sort:'createdAt DESC'});
            }],
            orders: ['OrderModel', function(OrderModel) {
                return OrderModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],
            projects: ['ProjectModel', function(ProjectModel) {
                return ProjectModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],
            tasks: ['TaskModel', function(TaskModel) {
                return TaskModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],
            time: ['TimeModel', function(TimeModel) {
                return TimeModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],
            transactions: ['TransactionModel', function(TransactionModel) {
                return TransactionModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],

            //TODO: GET FEED CUSTOMIZED
            //TODO: COMPLEX QUERY
            followers: ['$rootScope', 'FollowerModel', function($rootScope, FollowerModel) {
                return FollowerModel.getFollowing($rootScope.currentUser);
            }],
            memberProjects: ['$rootScope', 'MemberModel', function($rootScope, MemberModel) {
                return MemberModel.getSome({user:$rootScope.currentUser.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],

            //SELF ASSOCIATION TO TASK WHEN INTERACT. YEP!
            memberTasks: ['$rootScope', 'TaskModel', function($rootScope, TaskModel) {
                return TaskModel.getSome({user:$rootScope.currentUser.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],

            positions: ['$rootScope', 'OrderModel', function($rootScope, OrderModel) {
                return OrderModel.getSome({user:$rootScope.currentUser.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            
        }
    })

}])

.controller( 'HomeCtrl', ['$rootScope', '$state', function HomeController( $rootScope, $state ) {
    if($rootScope.currentUser){$state.go('home.feed')}
    else{$state.go('home.intro')}
}])

.controller( 'IntroCtrl', ['$http', '$location', '$mdSidenav', '$rootScope', '$sce', '$scope', '$state', '$window', 'contentList', 'ContentModel', 'members', 'orders', 'ProjectModel', 'projects', 'ReactionModel', 'SearchModel', 'tasks', 'time', 'titleService', 'toaster', 'transactions', 'UserModel', function HomeController( $http, $location, $mdSidenav, $rootScope, $sce, $scope, $state, $window, contentList, ContentModel, members, orders, ProjectModel, projects, ReactionModel, SearchModel, tasks, time, titleService, toaster, transactions, UserModel ) {

    $scope.introObj = [
        {title:'WE CRE8 MULTIDIMENSIONAL VALUE'},
        {title:'WE ARE ALL IN THIS TOGETHER'},
        {title:'SHARING IS VALUABLE'},
        {title:'GUIDING GROUP INTENTIONALITY'},
        {title:'UNITY THROUGH TRANSPARENCY'},
        {title:'EMPOWERING LOCAL COMMUNITIES'},
        {title:'THE TIME TO CREATE IS NOW'},
        {title:'NOW IS THE TIME TO CREATE'},
        {title:'BUILDING AN EGALITARIAN SOCIETY'},
    ];
    
    var vid = angular.element('#introVideo');
    //$scope.selectedIntro = $scope.introObj[1];
    $scope.selectedIntro = $scope.introObj[Math.floor(Math.random()*$scope.introObj.length)];
    $scope.selectedTime = Math.floor(Math.random()*92);
    vid[0].currentTime = $scope.selectedTime;



    //GENERALIZE FEED QUERY IS .. 

    var query = [
        {model:'CONTENT', limit:100, skip:0, sort:'createdAt DESC', filter:{}},
        {model:'ITEM', limit:100,skip:0,sort:'createdAt DESC', filter:{}},
        {model:'TASK', limit:100,skip:0,sort:'createdAt DESC', filter:{}},
        {model:'TIME', limit:100,skip:0,sort:'createdAt DESC', filter:{}},
        {model:'PROJECT', limit:100,skip:0,sort:'createdAt DESC', filter:{}},
        {model:'USER', limit:100,skip:0,sort:'createdAt DESC', filter:{}}
    ];

    //GET FEED
    //SEARCH
    //SearchModel.find().then(function(searchModel){
    //});

    //WEEDS CREATE IS 
    //  PROJECT-MEMBER
    //  MEMBER-MEMBER
    //  SEARCH MODEL

    $scope.contentList = contentList.map(function(obj){
        obj.model = 'CONTENT';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.newReaction = {};
    $scope.projects = projects.data.map(function(obj){
        obj.model = 'PROJECT';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
    $scope.searchResults = [];
    $scope.tasks = tasks.data.map(function(obj){
        obj.model = 'TASK';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
    $scope.time = time.map(function(obj){
        obj.model = 'TIME';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        if (obj.task){if (obj.task.tags){obj.task.tags = obj.task.tags.split(',')}}
        return obj;
    });

    $scope.activity = [].concat.apply([], [$scope.contentList, $scope.projects, $scope.tasks, $scope.time]);
    $scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.activity = $scope.activity.slice(0,100);
    

    //TODO: DEPRECIATE --> PUT IN NAV
    $scope.getLatLng = function() {
        if (navigator.geolocation) {
            $rootScope.stateIsLoading = true;
            navigator.geolocation.getCurrentPosition(function (position) {
                $rootScope.stateIsLoading = false;
                lat = position.coords.latitude; 
                lng = position.coords.longitude;
                $scope.map = {
                    center: {latitude: lat, longitude: lng},
                    zoom: 12
                };

                //TODO: SIMPLY UPDATE QUERY :)
                //$scope.searchQuery = [{text:'Current Location, 1mi | '+lng.toFixed(3)+', '+lat.toFixed(3), type:'LOCATION', query:{coordinates:[lng,lat]}}];
                //TODO: DISTANCE
                ProjectModel.getSome({location:[lng,lat], limit:10, skip:0}).then(function(projects){
                    $scope.activity = projects.map(function(obj){
                        obj.model = 'PROJECT';
                        return obj;
                    });;
                    $scope.markers = [];
                    $scope.populateMap();
                    $scope.init();
                 });

                $scope.$apply();

            });
        }
    };

    $scope.expandSort = function(){$scope.sorting = true;};

    //TODO: QUERY :0
    $scope.loadMore = function(){
        var query = [
            {
                model:'CONTENT', 
                limit:100,
                skip:0,
                sort:'createdAt DESC', 
                filter:{
                    id:'id',
                    associatedModels: 'model',
                },
            },
            {model:'ITEM', limit:100,skip:0,sort:'createdAt DESC', filter:{}},
            {model:'TASK', limit:100,skip:0,sort:'createdAt DESC', filter:{}},
            {model:'TIME', limit:100,skip:0,sort:'createdAt DESC', filter:{}},
            {model:'PROJECT', limit:100,skip:0,sort:'createdAt DESC', filter:{}},
            {model:'USER', limit:100,skip:0,sort:'createdAt DESC', filter:{}}
        ];
        console.log('TODO: LOAD MORE');
    };

    $scope.createReaction = function(item, type){$mdSidenav('login').toggle()};

    //TODO: ROOTSCOPE
    $scope.newMember={};
    $scope.pop = function(title, body){
        toaster.pop({
            type:'warning',
            title: title,
            body: body,
            onShowCallback: function (toast) { 
                var audio = new Audio('audio/ping.mp3');
                audio.play()
                .then(function(audio){console.log('POP', 'dingdong')})
                .catch(function(err){console.log('ERR POP', err)})
            }
        });
    };

    //createmember
    $scope.registerUser = function(){
        $scope.valid = true;
        //TODO: FORM VALIDATION
        if ($scope.newMember.password){
            if ($scope.newMember.password.length < 8){
                $scope.pop('ERROR', 'Password must be longer than 8 Characters');
                $scope.valid = false;
            }
        }
        else{
            $scope.pop('ERROR', 'Password must be longer than 8 Characters');
            $scope.valid = false;
        }
        if (!$scope.newMember.username){
            $scope.pop('ERROR', 'Invalid Username');
            $scope.valid = false;
        }
        if (!$scope.newMember.email){
            $scope.pop('ERROR', 'Invalid Email');
            $scope.valid = false;
        }
        console.log('NEW MEMBER', $scope.newMember)
        var data = JSON.stringify($scope.newMember);
        if ($scope.valid){
            $rootScope.stateIsLoading = true;
            $http({method:'POST', url:'/auth/local/register', data:data}).then(function(newModel){
                $rootScope.currentUser = newModel.data;
                $state.go('home.feed');
            });
        }
    };

    //\\//\\//\\//\\//
    //FILTERS\\//\\//
    //\\//\\//\\//\\//    
    //TODO: BETTER // DEPRECIATE!!!
    $scope.loadAssociations = function(){
        $scope.associations = $scope.tasks.map(function(obj){
            if (obj.project){return obj.project.title;}
            if (obj.task){return obj.project.title;}
            if (obj.user){return obj.user.username;}
            if (obj.item){return obj.item.title;}
            if (obj.order){return obj.order}
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
    };
    $scope.loadLocations = function(){$scope.sortedLocationsArray = ['Chapel Hill', 'Knoxville', 'Los Angeles', 'New York City']};
    $scope.loadTags = function(){
        $scope.tags = $scope.contentList.map(function(obj){
            return obj.tags;;
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
    };
    //IMPROVE :)
    $scope.init = function(){
        $scope.loadAssociations();
        $scope.loadLocations();
        $scope.loadTags();
        $scope.filterSet = {associations:$scope.sortedAssociationArray, tags:$scope.sortedTagArray, locations:$scope.sortedLocationArray}
    };
    $scope.init();
    //\\//\\//\\//\\//
    //FILTERS\\//\\//
    //\\//\\//\\//\\//


    //\\//\\//\\//\\//
    //WATCHERS\\//\\//
    //\\//\\//\\//\\//
    //PERHAPS IN NAV ROOT... --> SEARCH MODEL MASED ON URL
    $rootScope.$watch('searchQueryNav' ,function(newValue, oldValue){
        console.log('SEARCH QUERY NAV', $scope.searchQuery);
        if (newValue !== oldValue) {
            $scope.searchQuery = [];
            for(x in Object.keys($rootScope.searchQuery)){
                for (y in Object.keys($rootScope.searchQueryNav[Object.keys($rootScope.searchQueryNav)[x]])){
                    $scope.searchQuery.push($rootScope.searchQueryNav[Object.keys($rootScope.searchQueryNav)[x]][y])
                }
            }
        }
    }, true);

    $scope.$watch('searchQuery' ,function(newValue, oldValue){
        if (newValue !== oldValue) {
            $rootScope.stateIsLoading = true;
            //TODO: REMOVE BASED 64 STRING SEARCH

            var searchModel = {
                limit:100,
                skip:0,
                sort:'createdAt DESC',
                model: null,
                query: $scope.searchQuery.map(function(obj){return obj.text}).join(',')
            };
            SearchModel.search(searchModel).then(function(models){
                $rootScope.stateIsLoading = false;
                $scope.activity = models;
                $scope.activity.map(function(obj){
                    if (obj.tags){obj.tags = obj.tags.split(',');}
                });
            });
          
        }
    }, true);
    //\\//\\//\\//\\//
    //WATCHERS\\//\\//
    //\\//\\//\\//\\//




}])

.controller( 'FeedCtrl', ['$mdSidenav', '$location', '$rootScope', '$sce', '$scope', 'contentList', 'ContentModel', 'FollowerModel', 'followers', 'MemberModel', 'members', 'memberProjects', 'memberTasks', 'orders', 'PeerModel', 'positions', 'ProjectModel', 'projects', 'ReactionModel', 'SearchModel', 'tasks', 'time', 'titleService', 'toaster', 'transactions', 'UserModel', 'ValidationModel', function HomeController( $mdSidenav, $location, $rootScope, $sce, $scope, contentList, ContentModel, FollowerModel, followers, MemberModel, members, memberProjects, memberTasks, orders, PeerModel, positions, ProjectModel, projects, ReactionModel, SearchModel, tasks, time, titleService, toaster, transactions, UserModel, ValidationModel ) {
	
    //NEED TO REDUCE QUERIES
    //GET FEED
    //SEARCH
    //SearchModel.find().then(function(searchModel){
    //});
    
    //TODO:MOVE TO BACKEND SEARCH MODEL
    $scope.contentList = contentList.map(function(obj){
        obj.model = 'CONTENT';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
    $scope.projects = projects.data.map(function(obj){
        obj.model = 'PROJECT';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
    $scope.members = members.data;
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.searchResults = [];
    $scope.tasks = tasks.data.map(function(obj){
        obj.model = 'TASK';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
    $scope.time = time.map(function(obj){
        obj.model = 'TIME';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        if (obj.task){if (obj.task.tags){obj.task.tags = obj.task.tags.split(',')}}
        return obj;
    });
    $scope.transactions = transactions.map(function(obj){
        obj.model = 'TRANSACTION';
        return obj;
    });
    $scope.activity = [].concat.apply([], [$scope.contentList, $scope.projects, $scope.tasks, $scope.time]);
    $scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.activity = $scope.activity.slice(0,100); 


    //DEPRECIATE.. PUT IN NAV
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

    //TODO!!!!
    $scope.suggestedTokens = []
    $scope.discover = function(){

        $scope.memberProjects = memberProjects.map(function(obj){
            obj.project.model = 'PROJECT';
            if (obj.project.tags){obj.project.tags = obj.project.tags.split(',')}
            return obj.project
        });
        
        $scope.memberTasks = memberTasks;
        if ($scope.memberTasks){
            $scope.memberTasks = $scope.memberTasks.map(function(obj){obj.model = 'TASK';return obj});
        }

        $scope.followers = followers;
        if ($scope.followers ){
            $scope.followers = $scope.followers.map(function(obj){return obj.followed});    
            $scope.members.map(function(obj){
                var index = $scope.followers.map(function(obj1){
                    //bug with undef followers
                    if (obj1){
                        return obj1.id;
                    }
                }).indexOf(obj.id);
                if (index != -1){obj.isFollowing = true;}
                if (index == -1){obj.isFollowing = false;}
                return obj;
            });
        }

        $scope.projects.map(function(obj){
            var index = $scope.memberProjects.map(function(obj1){return obj1.id}).indexOf(obj.id);
            if (index != -1){obj.isMember = true;}
            if (index == -1){obj.isMember = false;}
            return obj;
        });

        $scope.tasks.map(function(obj){
            var index = $scope.memberTasks.map(function(obj1){return obj1.id}).indexOf(obj.id);
            if (index != -1){obj.isAssociated = true;}
            if (index == -1){obj.isAssociated = false;}
            return obj;
        });

        $scope.searchQueryFeed = [];
        for (x in $scope.followers){if ($scope.followers[x]){$scope.searchQueryFeed.push({type:'MEMBER', id:$scope.followers[x].id, text:$scope.followers[x].username})}}
        for (x in $scope.memberProjects){$scope.searchQueryFeed.push({type:'PROJECT', id:$scope.memberProjects[x].id, text:$scope.memberProjects[x].title})}
        for (x in $scope.memberTasks){$scope.searchQueryFeed.push({type:'TASK', id:$scope.memberTasks[x].id, text:$scope.memberTasks[x].title})}

        //ORDERS
        //LOOK AT MY TIME
        //LOOK AT MY ACTIONS (RE)
        //LOOK AT MY ORDERS (CURRENT MAPS)
        //LOOK AT THE PEOPLE I FOLLOW'S PROJECTS
        //console.log($scope.followers, $scope.memberProjects);
        //LOOK AT THE PEOPLE I FOLLOW'S REPUTATION && SKILLS
        //GET CUSTOM FEED SORTS BASED ON PROJECTS; FOLLOWING
        //BUILD QUERY

        //potientally compute some,
        $scope.positions = positions;

        //FOLLOWERS .. VERBS
        //for (x in $scope.followers){$scope.suggestedTokens.push({token:'CRE8+FOLLOW+'+$scope.followers[x].id})}
        //TODO: STRING REPLACE URLTITLE
        for (x in $scope.memberProjects){$scope.suggestedTokens.push({token:$scope.memberProjects[x].urlTitle})}

        //FACTOR: ASSOCIATION IS BASE
        $scope.suggestedTokenTags = $scope.memberProjects.map(function(obj){
            return obj.tags;
        });

        $scope.suggestedTokenTags = [].concat.apply([], $scope.suggestedTokenTags);
        $scope.suggestedTokenTags = $scope.suggestedTokenTags.filter(function(e){return e});
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.sortedsuggestedTokenTags = [];
        for (x in $scope.suggestedTokenTags){
            var amount = countInArray($scope.suggestedTokenTags, $scope.suggestedTokenTags[x]);
            if ($scope.sortedsuggestedTokenTags.map(function(obj){return obj.element}).indexOf($scope.suggestedTokenTags[x]) == -1){
                $scope.sortedsuggestedTokenTags.push({amount:amount, element:$scope.suggestedTokenTags[x]})
            }
        }
        $scope.sortedsuggestedTokenTags.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
        //FACTOR

        for (x in $scope.memberProjects){
            $scope.suggestedTokens.push({token:$scope.memberProjects[x].urlTitle});
        }

        for (x in $scope.suggestedTokenTags){
            //$scope.suggestedTokens.push({token:$scope.memberProjects[x].urlTitle});
        }

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

        //IF NON ZERO
        $scope.chart.series = [{
            id: 'values',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [],
            color: 'rgba(153,0,0,0.3)',
            fillOpacity: 0.3,
        }];

        $scope.chart.xAxis.categories = [];

        for (x in $scope.sortedsuggestedTokenTags){
            $scope.chart.series[0].data.push($scope.sortedsuggestedTokenTags[x].amount);
            $scope.chart.xAxis.categories.push($scope.sortedsuggestedTokenTags[x].element)
        }
        //IF NON ZERO
    };
    $scope.discover();

    $scope.hoverIn = function(item){console.log('hover in ', item)}
    $scope.hoverOut = function(item){console.log('hover out ', item)}

    //TODO
    $scope.loadMore = function(){console.log('TODO: LOAD MORE')};

    //TODO
    $scope.lookupBalance = function(){
        $scope.balanceLook = $scope.balanceLook;
        if ($scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = $scope.balance[$scope.balanceLook]}
        if (!$scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = 0}
    };

    $scope.selectedTab = 'INFORMATION';
    $scope.selectTab = function(model){$scope.selectedTab = model;};

    $scope.balanceChart = {
        chart: {
            zoomType: 'x',
            height: 200,
        },
        series: [{
            id: 'Reputation',
            type: 'column',
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
    $scope.renderBalances = function(){
        var sortable = [];
        for (var context in $rootScope.currentUser.balance) {sortable.push([context, $scope.reputation[context]])}
        sortable.sort(function(a, b) {return b[1] - a[1]});
        for (x in sortable){
            if (x < 100){
                $scope.balanceChart.xAxis.categories.push(sortable[x][0]);
                $scope.balanceChart.series[0].data.push(sortable[x][1]);
            }
        }
    };
    $scope.renderBalances();


    //\\//\\//\\//\\//
    //TUTORIAL\\//\\//
    //\\//\\//\\//\\//
    $scope.isTutorial = true;
    if ($scope.isTutorial){

        $rootScope.baseToken = {text:'UNIVERSAL TOKEN', description:'Universal Token Position; protocol where every member creates one Universal Token per day to serve an an eglatarian value position.'}
        $rootScope.baseManifold = {text:'+SPONSOR+ONMINT+'+$rootScope.currentUser.id, description:'Sponsorship On Mint postions have a triggering action potiental \'on mint\' of the specified token root the manifold (TOKEN+SPONSOR).'}
        $rootScope.orderType = {text:'Continual', description:'Continual Market Orders will fill as long as there is liquidity. Useful for token protocols with ongoing minting logic'}

        $scope.map = {
            center: {latitude: 35.902023, longitude: -84.1507067 },
            zoom: 9
        };
        $scope.markers = [];
        $scope.options = {scrollwheel: false};
        $scope.consentAgreement = false;

        $scope.pageNumber = 0;
        $scope.newAccountInformation = $rootScope.currentUser;

        $scope.changePage = function(page){
            window.scrollTo(0, 0);
            if (page){$scope.pageNumber = page}
            else{$scope.pageNumber++}
            if ($scope.pageNumber<0 || $scope.pageNumber>6){
                $scope.isTutorial = !$scope.isTutorial;
                $scope.selectedTab = 'INFORMATION';
            }
        };

        $scope.editAccount = function () {
            UserModel.update($scope.newAccountInformation).then(function(model){
                console.log('EDIT USER', model);
            });
            $scope.pop('Saved!', 'Account Updated');


            //TODO: STRONG STRUCT
            //IF BROWER MINING.. CREATE PEER :) (INIT PROCESS..)
            
            //var peer = currentUser.apps.map(function(obj){return obj.title}).indexOf('PEER') != -10
            //get peer. if you know have. create. 
            //link peer to machiene attention
            var peer = true;
            if (peer){
                var peerModel = {
                    version:'UNSTABLE PRE-ALPHA',

                    //data - information
                    info:{
                        location:{
                            lat:1,
                            lng:1
                        },
                        device:{
                            title:1,
                            processor:1,
                            hash:1,
                        }
                    },
                    reputation:{general:1},
                    hash:1,
                    versionHash:1,
                };
                //PeerModel.create(peerModel).then(function(){

                //});
            }
        };

        //TODO DEPRECIATE.. PUT IN NAV
        //TODO: CONTAINERIZE.. IE WE ALWAYS WANT THE MAP ZOOMED ON USER
        $scope.getLatLng = function() {

            if (navigator.geolocation) {
                $rootScope.stateIsLoading = true;
                navigator.geolocation.getCurrentPosition(function (position) {
                    $rootScope.stateIsLoading = false;
                    lat = position.coords.latitude; 
                    lng = position.coords.longitude;

                    //$scope.searchQuery = [{text:'Current Location, 1mi | '+lng.toFixed(3)+', '+lat.toFixed(3), type:'LOCATION', query:{coordinates:[lng,lat]}}];
                    $scope.map = {
                        center: {latitude: lat, longitude: lng},
                        zoom: 14
                    };
                    ProjectModel.getSome({location:[lng,lat], limit:100, skip:0}).then(function(projects){
                        $scope.projects = projects;
                        $scope.markers = [];

                        //TODO: HELPER CONTAINER FUNCTIONS
                        for (x in projects){
                            if (projects[x].location){
                                $scope.markers.push({
                                    id:projects[x].id,
                                    content:projects[x].title,
                                    url:projects[x].urlTitle,
                                    coords:{
                                        latitude:projects[x].location.lat,
                                        longitude:projects[x].location.lng
                                    }
                                });
                            }
                        }

                        $scope.projects.map(function(obj){
                            obj.model='PROJECT';
                            var index = $scope.memberProjects.map(function(obj1){return obj1.id}).indexOf(obj.id);
                            if (index != -1){obj.isMember = true;}
                            if (index == -1){obj.isMember = false;}
                            return obj;
                        });

                    });
                    $scope.$apply();

                });
            }
        };
        $scope.getLatLng();
        
        //TODO: ROOTSCOPE
        //$scope.createMember = function(){
        $scope.join = function(model){

            $scope.newMember = {
                user:$rootScope.currentUser.id,
                project:model.id,
            };

            var index = $scope.projects.map(function(obj){return obj.id}).indexOf($scope.newMember.project);

            if (model.isMember == false){
                //ValidationModel.create($scope.newMember).then(function(model) {});
                MemberModel.create($scope.newMember).then(function(model) {
                    $scope.projects[index].isMember = 'PENDING';
                    $scope.newMember = {};
                    $scope.pop('Request to Join','You requested to join.. ' +model.title+' .. pending validation');
                });
            }
            else if (model.isMember == 'PENDING'){
                $scope.projects[index].isMember = false;
                $scope.pop('Request canceled','You canceled your request to join.. ' +model.title);
            }
            else if (model.isMember == true){
                $scope.pop('Project Left','You left ' +model.title);
                $scope.projects[index].isMember = false;
            }            
        };

        $scope.interested = function(model){

            var validationModel = {
                user:$rootScope.currentUser.id,
                type:'HUMAN',
                validation:{general:100},
                associatedModels:[
                    {type:'MEMBER', id:$rootScope.currentUser.id},
                    {type:'TASK', id:model.id},
                ],
            };

            var index = $scope.tasks.map(function(obj){return obj.id}).indexOf(model.id);

            if (model.isAssociated == false){
                ValidationModel.create(validationModel).then(function(newValidation){
                    $scope.tasks[index].isAssociated = true;
                    $scope.pop('Associated Task!', 'You are now associated with '+ model.title + '. Schedule some intentional time!');
                });
            }

            else if (model.isAssociated == true){
                $scope.tasks[index].isAssociated = false;
                $scope.pop('Removed Association!', 'It\'s all good!');
            }

            //SAVE FOR FILTER & NEW VALUE MAP

        };

        $scope.follow = function(model){

            //newValidation = {}
            $scope.newFollower = {
                followed:model.id,
                follower:$rootScope.currentUser.id,
            };

            console.log('CREATE MEMBER-MEMBER ASSOCIATION', $scope.newFollower, model);

            if (!model.isFollowing){
                FollowerModel.create($scope.newFollower).then(function(followerModel) {
                    var index = $scope.members.map(function(obj){return obj.id}).indexOf($scope.newFollower.followed);
                    $scope.members[index].isFollowing = true;
                    $scope.members[index].followerCount++;
                    $scope.pop('Following!', 'You are now follwing '+ model.username);
                    $scope.newFollower = {};
                });
            }

            if (model.isFollowing){
                //UPDATE VALIDATION TO .. ZERO... CHARTER TO DELETE ASSOCIATION
                var index = $scope.members.map(function(obj){return obj.id}).indexOf($scope.newFollower.followed);
                $scope.members[index].isFollowing = false;
                $scope.members[index].followerCount--;
                $scope.pop('Unfollowed!', 'You Unfollowed '+ model.username);
                $scope.newFollower = {};
            }

        };

        $scope.pop = function(title, body){
            toaster.pop({
                type:'success',
                title: title,
                body: body,
                onShowCallback: function (toast) { 
                    var audio = new Audio('audio/ping.mp3');
                    audio.play()
                    .then(function(audio){})
                    .catch(function(err){console.log('POP ERR', err)})
                }
            });
        };

        //$scope.selectedTab = 'QUESTIONS';
        $scope.selectedTab = 'BUILDER';
        $scope.selectTab = function(model){$scope.selectedTab = model;};

        $scope.totalMap = {
            chart: {zoomType: 'x'},
            series: [{
                id: 'Reputation',
                type: 'column',
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
        
        $scope.updateChart = function(){
            $scope.totalMap.series = [{
                id: 'Reputation',
                type: 'column',
                name: 'Reputation',
                data: [],
                turboThreshold: 10000,
            }];
            $scope.totalMap.xAxis.categories = [];
            var groupObject = {};
            for (x in $scope.members){
                for (y in Object.keys($scope.members[x].reputation)){
                    if(isNaN($scope.members[x].reputation[Object.keys($scope.members[x].reputation)[y]])){
                        groupObject[Object.keys($scope.members[x].reputation)[y]] = 0
                    }
                    else{
                        if (!groupObject[Object.keys($scope.members[x].reputation)[y]]){groupObject[Object.keys($scope.members[x].reputation)[y]] = 0}
                        groupObject[Object.keys($scope.members[x].reputation)[y]] += parseFloat($scope.members[x].reputation[Object.keys($scope.members[x].reputation)[y]]);
                    }
                }
            }
            var sortable = [];
            for (var dimension in groupObject) {sortable.push([dimension, groupObject[dimension]])}
            sortable.sort(function(a, b) {return b[1] - a[1]});
            for (x in sortable){
                if (x < 250){
                    $scope.totalMap.xAxis.categories.push(sortable[x][0]);
                    $scope.totalMap.series[0].data.push(sortable[x][1]);
                }
            }
        };
        $scope.updateChart();


        for (x in projects){
            if (projects[x].location){
                $scope.markers.push({
                    id:projects[x].id,
                    content:projects[x].title,
                    url:projects[x].urlTitle,
                    coords:{
                        latitude:projects[x].location.lat,
                        longitude:projects[x].location.lng
                    }
                });
            }
        }

        $scope.valueMapQuery = [
            {text:'create'},
            {text:'bright'},
            {text:'futures'},
        ];

         //TODO
        //VALUE MAP ETC
        $scope.loadValueMap = function(){
            $scope.newOrder = [];
            $scope.discover = [].concat.apply([], [$scope.tasks, $scope.transactions]);
            $scope.discover = $scope.discover.map(function(obj){
                var returnObj = {};
                if (obj.model == 'ORDER'){returnObj = obj.identiferSet;}
                if (obj.model == 'TASK'){returnObj = obj.tags;}
                if (obj.model == 'TRANSACTION'){returnObj = obj.tags;}
                return returnObj;
            });
            $scope.discover = [].concat.apply([], $scope.discover);
            $scope.discover = $scope.discover.filter(function(e){return e}); 
            function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
            $scope.finalArray = [];
            for (x in $scope.discover){
                var amount = countInArray($scope.discover, $scope.discover[x]);
                if ($scope.finalArray.map(function(obj){return obj.element}).indexOf($scope.discover[x]) == -1){
                    $scope.finalArray.push({amount:amount, element:$scope.discover[x]})
                }
            }
            $scope.finalArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);});  
        }
        //$scope.loadValueMap();

        $scope.chartMapTotal = {
            chart: {
                polar: true,
                margin: [30, 30, 30, 30]
            },
            series: [{
                id: 'values',
                type: 'area',
                name: 'UNIVERSAL',
                pointPlacement: 'on',
                fillOpacity: 0.3,
                data:[1,1,1,1,1,1,1,1],
            }],
            title: {text: ''},
            xAxis: {
                title: {text: null},
                categories: ['LOVE', 'ART', 'PEACE', 'SHELTER', 'REST', 'EXPERIENCE', 'HEALTH', 'HUMAN'],
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
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                y: 70,
                layout: 'vertical'
            },
            legend:false,
            tooltip:{shared: true,},
            credits:{enabled:false},
        };

        //PERFORMANCE....
        $scope.updateChartTotal = function(){
            $scope.chartMapTotal.xAxis.categories = $scope.newOrder.map(function(obj){return obj[1].identifier.split('+')[2]});
            $scope.chartMapTotal.series[0].data = $scope.newOrder.map(function(obj){return obj[0].amount});
        };

        $scope.pieTotal = {
            chart: {},
            series: [{
                id: 'Pie',
                type: 'pie',
                name: 'Pie',
                colorByPoint: true,
                data: [
                    {name:'LOVE',y:1},
                    {name:'ART',y:1},
                    {name:'PEACE',y:1},
                    {name:'SHELTER',y:1},
                    {name:'EXPERIENCE',y:1},
                    {name:'HEALTH',y:1},
                    {name:'HUMAN',y:1},
                ]
            }],  
            title: {text: ''},
            xAxis: {title: {text: null}},
            yAxis: {title: {text: null}},
            credits:{enabled:false},
        };

        $scope.updatePieTotal = function(){
            var data = $scope.newOrder.map(function(obj){return {name: obj[1].identifier.split('+')[2], y:obj[0].amount}})
            $scope.pieTotal.series[0].data = data;
        };

        //TODO: VM CONTROLS ETC
        //PREPOPULATE ? GENERATOR FROM SUGGESTIONS IS THE WAY - IS THE KEY
        $scope.newOrder = [];
        $scope.newOrderNEW = [];
        $scope.createPosition = function(model){
            if($scope.newOrder.map(function(obj){return obj[1].identifier.split('+')[2]}).indexOf(model) == -1){
                var setAlpha = {'UNIVERSALTOKEN':1};
                var setBeta = {};
                setBeta['CRE8+TIME+'+model.toUpperCase()+'+ONMINT+SPONSOR+[ADDRESS]'] = 3600;
                $scope.newOrderNEW.push({
                    setAlpha:setAlpha,
                    setBeta:setBeta,
                    type:'ONBOOK',
                    status:'CONTINUAL'
                });
                $scope.newOrder.push([
                    {amount:1, identifier:'UNIVERSALTOKEN'}, 
                    {amount:3600, identifier:'CRE8+TIME+'+model.toUpperCase()+'+ONMINT+SPONSOR+'+$rootScope.currentUser.id}
                ]);
            }   
        };

        $scope.removePosition = function(model){
            var index = $scope.newOrder.map(function(obj){return obj[0].identifier}).indexOf(model[0].identifier);
            if (index != -1){$scope.newOrder.splice(index, 1)}
        };

        $scope.$watch('newOrder', function(newValue, oldValue){
            if (oldValue != newValue){
                $scope.updateChartTotal();
                $scope.updatePieTotal();
            }
        }, true);
        //VALUE MAP ETC

    }   
    //\\//\\//\\//\\//
    //TUTORIAL\\//\\//
    //\\//\\//\\//\\//


    //\\//\\//\\//\\//
    //FILTERS\\//\\//
    //\\//\\//\\//\\//

    //TODO: BETTER
    $scope.filterContent = function(filter) {
        $rootScope.stateIsLoading = true;
        ContentModel.getSome({tag:filter, limit:20, skip:0, sort:'createdAt DESC'}).then(function(contentList){
            $rootScope.stateIsLoading = false;
            $scope.activity = contentList;
            $scope.loadTags();
        });
    };

    //TODO: ASSOCIATIONS .. GRAPH TRAVERSAL CONTEXT
    $scope.loadAssociations = function(){
        $scope.associations = $scope.tasks.map(function(obj){
            if (obj.project){return obj.project.title;}
            if (obj.task){return obj.project.title;}
            if (obj.user){return obj.user.username;}
            if (obj.item){return obj.item.title;}
            if (obj.order){return obj.order}
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
    };
    $scope.loadLocations = function(){$scope.sortedLocationsArray = ['Chapel Hill', 'Knoxville', 'Los Angeles', 'New York City']};
    $scope.loadTags = function(){
        $scope.tags = $scope.contentList.map(function(obj){
            return obj.tags;
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
    };
    $scope.init = function(){
        $scope.loadAssociations();
        $scope.loadLocations();
        $scope.loadTags();
        $scope.filterSet = {associations:$scope.sortedAssociationArray, tags:$scope.sortedTagArray, locations:$scope.sortedLocationArray}
    };
    $scope.init();

    //\\//\\//\\//\\//
    //FILTERS\\//\\//
    //\\//\\//\\//\\//


    //\\//\\//\\//\\//
    //WATCHERS\\//\\//
    //\\//\\//\\//\\//
    $rootScope.$watch('searchQueryNav', function(newValue, oldValue){
        console.log('SEARCH QUERY', $scope.searchQuery);
        if (newValue !== oldValue) {
            $scope.searchQuery = [];
            for(x in Object.keys($rootScope.searchQueryNav)){
                for (y in Object.keys($rootScope.searchQueryNav[Object.keys($rootScope.searchQueryNav)[x]])){
                    $scope.searchQuery.push($rootScope.searchQueryNav[Object.keys($rootScope.searchQueryNav)[x]][y])
                }
            }
        }
    }, true);

    $scope.$watch('searchQuery', function(newValue, oldValue){
        if (newValue !== oldValue) {
            var searchModel = {
                limit:100,
                skip:0,
                sort:'createdAt DESC',
                model: null,
                query: $scope.searchQuery.map(function(obj){return obj.text}).join(',')
            };
            SearchModel.search(searchModel).then(function(models){
                $rootScope.stateIsLoading = false;
                $scope.activity = models;
                $scope.activity.map(function(obj){
                    if (obj.tags){obj.tags = obj.tags.split(',');}
                });
            });
        }
    }, true);
    //\\//\\//\\//\\//
    //WATCHERS\\//\\//
    //\\//\\//\\//\\//



}]);
