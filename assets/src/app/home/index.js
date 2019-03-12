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
                return UserModel.getSome('', '', 30, 0, 'createdAt DESC');
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

    //LOCAL SEARCH QUERY FORMAT...
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
                ProjectModel.getSome('location', [lng,lat], 100, 0, 'createdAt DESC').then(function(projects){
                    $scope.projects = projects;
                    $scope.markers = [];
                    $scope.populateMap();
                    $scope.init();
                 });

                $scope.$apply();

            });
        }
    };
    //$scope.getLatLng();

    //TAGS TO ASSOCIATION | VALIDATION CONTEXT
    $scope.contentList = $scope.contentList.map(function(obj){
        obj.model = 'CONTENT';
        //TEMP HARDCODE -- MOVE TO PROTOCOL
        obj.tokens = [];
        obj.tokens.push('CRE8');
        obj.tokens.push('CRE8+CONTENT');
        obj.tokens.push('CRE8+CONTENT+'+obj.id);
        obj.tokens.push('CRE8+CONTENT+'+obj.type.toUpperCase());
        return obj;
    });
    $scope.projects = $scope.projects.map(function(obj){
        obj.model = 'PROJECT';
        return obj;
    });
    $scope.tasks = $scope.tasks.map(function(obj){
        obj.model = 'TASK';
        //TEMP HARDCODE -- MOVE TO PROTOCOL
        obj.tokens = [];
        obj.tokens.push('CRE8');
        obj.tokens.push('CRE8+TASK');
        obj.tokens.push('CRE8+TASK+'+obj.id);
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
    $scope.time = $scope.time.map(function(obj){
        obj.model = 'TIME';
        //TEMP HARDCODE -- MOVE TO PROTOCOL
        obj.tokens = [];
        obj.tokens.push('CRE8');
        obj.tokens.push('CRE8+TIME');
        obj.tokens.push('CRE8+TIME+'+obj.task.title.toUpperCase().replace(/ /g, '-')+'.'+obj.task.id);
        if (obj.task.tags){
            obj.task.tags = obj.task.tags.split(',');
            for (x in obj.task.tags){
                obj.tokens.push('CRE8+TIME+'+obj.task.tags[x].trim().toUpperCase());
                obj.tokens.push('CRE8+TIME+'+obj.task.title.toUpperCase().replace(/ /g, '-')+'.'+obj.task.id+'+'+obj.task.tags[x].trim().toUpperCase());
            }
        }
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

    $scope.loadMore = function(){
        console.log('TODO: LOAD MORE')
    };

    $scope.createReaction = function(item, type){$mdSidenav('login').toggle()};

    $scope.reply = function(item){
        if($scope.currentUser){
            var index = $scope.activity.map(function(obj){return obj.id}).indexOf(item.id);
            $scope.activity[index].showReply = !$scope.activity[index].showReply;
        }
        else{$mdSidenav('login').toggle()}
    };





    //FILTERSET
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
    $scope.loadLocations = function(){
        $scope.sortedLocationsArray = ['Chapel Hill', 'Knoxville', 'Los Angeles', 'New York City']
    };
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
    };
    //IMPROVE :)
    $scope.init = function(){
        $scope.loadAssociations();
        $scope.loadLocations();
        $scope.loadTags();
        $scope.filterSet = {associations:$scope.sortedAssociationArray, tags:$scope.sortedTagArray, locations:$scope.sortedLocationArray}
    };
    $scope.init();
    //FILTERSET



    //WATCHERS
    //PERHAPS IN NAV ROOT... --> SEARCH MODEL MASED ON URL
    $rootScope.$watch('searchQueryNav' ,function(newValue, oldValue){
        console.log($scope.searchQuery);
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
            /*
            ContentModel.getSome('search', $scope.searchQuery, 0, 20, 'createdAt DESC').then(function(models){
                $rootScope.stateIsLoading = false;
                $scope.activity = models.map(function(obj){
                    obj.model = 'CONTENT';
                    return obj;
                });
            });
            */
        }
    }, true);
    //WATCHERS



}])

.controller( 'FeedCtrl', ['$mdSidenav', '$location', '$rootScope', '$sce', '$scope', 'config', 'contentList', 'ContentModel', 'FollowerModel', 'MemberModel', 'members', 'orders', 'ProjectModel', 'projects', 'ReactionModel', 'SearchModel', 'tasks', 'time', 'titleService', 'toaster', 'transactions', 'UserModel', function HomeController( $mdSidenav, $location, $rootScope, $sce, $scope, config, contentList, ContentModel, FollowerModel, MemberModel, members, orders, ProjectModel, projects, ReactionModel, SearchModel, tasks, time, titleService, toaster, transactions, UserModel ) {
	
    titleService.setTitle('CRE8.XYZ');
	$scope.currentUser = config.currentUser;

    $rootScope.associatedModel = {
        address: $scope.currentUser.id,
        type: 'PROFILE',
    };

    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    //GET NOTIFICATIONS.. IN NAV CTRL :)
    //GET CUSTOM FEED SORTS BASED ON PROJECTS; FOLLOWING

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
  
    $scope.contentList = contentList;
    $scope.projects = projects;
    $scope.members = members;
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.searchResults = [];
    $scope.tasks = tasks;
    $scope.time = time;
    $scope.transactions = transactions;

    //IF NO PROJECTS OR W.E TUTORIAL IS TRUE
    //NEW CONTROLLER
    $scope.isTutorial = true;
    if ($scope.isTutorial){

        $scope.showProjects = true;
        $scope.showTasks = false;
        $scope.showMembers = false;
        $scope.showValue = false;

        $scope.change = function(){
            if ($scope.showProjects){
                $scope.showProjects = !$scope.showProjects;
                $scope.showTasks = !$scope.showTasks;
            }
            else if ($scope.showTasks){
                $scope.showTasks = !$scope.showTasks;
                $scope.showMembers = !$scope.showMembers;
            }
            else if ($scope.showMembers){
                $scope.showMembers = !$scope.showMembers;
                $scope.showValue = !$scope.showValue;
            }
            else if ($scope.showValue){
                $scope.showValue = !$scope.showValue;
                $scope.isTutorial = !$scope.isTutorial;
            }
        };

        $scope.getLatLng = function() {
            if (navigator.geolocation) {
                $rootScope.stateIsLoading = true;
                console.log(navigator.geolocation);
                navigator.geolocation.getCurrentPosition(function (position) {
                    console.log(position);
                    $rootScope.stateIsLoading = false;
                    lat = position.coords.latitude; 
                    lng = position.coords.longitude;
                    //$scope.searchQuery.push({text:'CURRENT LOCATION: '+lat+', '+lng});
                    $scope.map = {
                        center: {latitude: lat, longitude: lng},
                        zoom: 12
                    };
                    ProjectModel.getSome('location', [lng,lat], 1000, 0, 'createdAt DESC').then(function(projects){
                        $scope.projects = projects;
                        $scope.markers = [];
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
                    });
                    $scope.$apply();
                });
            }
        };
        $scope.getLatLng();

        //TODO: ROOTSCOPE
        //$scope.createMember = function(){
        $scope.join = function(project){
            //if not already in .. for next page anyway. --> ASSOCIATION 'FILTER' vs search query master. 
            //$scope.searchQuery.push({text:project.title});
            
            //$scope.chart.series = [{
            //    id: 'values',
            //    type: 'area',
            //    name: 'Values',
            //    pointPlacement: 'on',
            //    data: [0.2, 0.15, 0.15, 0.10, 0.15, 0.15, 0.1],
            //    color: 'rgba(153,0,0,0.3)',
            //    fillOpacity: 0.3,
            //}
            //$scope.chart.xAxis.categories = [];

            $scope.pop(project.title, 'You requested to join.. pending validation');

            //project, project+task,project+category
            //$scope.newMember.user = config.currentUser.id;
            //$scope.newMember.project = project.id;
            //MemberModel.create($scope.newMember).then(function(model) {
            //    $rootScope.confirm = $scope.newMember;
            //    $rootScope.confirm.modelType = 'PROJECTMEMBER';
            //    $scope.newMember = {};
            //    setTimeout(function () {$mdSidenav('confirm').open()}, 500);
            //    setTimeout(function () {$mdSidenav('confirm').close()}, 5000);
            //});

        };

        $scope.follow = function(member){
            $scope.pop('Followed!', 'You\'re now following '+member.username);

            //$scope.newFollower.followed = member.id;
            //$scope.newFollower.follower = $scope.currentUser.id;
            //FollowerModel.create($scope.newFollower).then(function(model) {
            //    $rootScope.confirm = $scope.newFollower;
            //    $rootScope.confirm.modelType = 'FOLLOW';
            //    $scope.newFollower = {};
            //    setTimeout(function () {$mdSidenav('confirm').open()}, 500);
            //    setTimeout(function () {$mdSidenav('confirm').close()}, 5000);
            //});

        };

        $scope.pop = function(title, body){
            toaster.pop({
                type:'success',//info, wait, success, warning
                title: title,
                body: body,
                onShowCallback: function (toast) { 
                    //PLAY SOUND
                    var audio = new Audio('audio/ping.mp3');
                    audio.play()
                    .then(function(audio){console.log(audio)})
                    .catch(function(err){console.log(err)})
                }
            });
        };

        $scope.skip = function(){
            $scope.showProjects = false;
            $scope.showTasks = false;
            $scope.showMembers = false;
            $scope.showValue = false;
            $scope.isTutorial = false;
        };

        $scope.totalMap = {
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

        console.log($scope.members);
        for (x in $scope.members){
            if ($scope.members[x].reputation){
            
                for (y in Object.keys($scope.members[x].reputation)){
                    //Object.keys($scope.members[x].reputation)[y]
                    //$scope.members[x].reputation[Object.keys($scope.members[x].reputation)[y]]
                    if ($scope.members[x].reputation[Object.keys($scope.members[x].reputation)[y]]){
                        //if not in category
                        var index = $scope.totalMap.xAxis.categories.indexOf(Object.keys($scope.members[x].reputation)[y])
                        if (index == -1){
                            $scope.totalMap.series[0].data.push($scope.members[x].reputation[Object.keys($scope.members[x].reputation)[y]]);
                            $scope.totalMap.xAxis.categories.push(Object.keys($scope.members[x].reputation)[y]);
                        }
                        else{
                            $scope.totalMap.series[0].data[index] += $scope.members[x].reputation[Object.keys($scope.members[x].reputation)[y]]
                        }
                        //else find index and ++
                    }
                }
                
            }
        }

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

    }

    //REORGANIZE
    UserModel.getByUsername($scope.currentUser.username).then(function(member){
        $scope.currentUser = member;
        $scope.member = member;
        $scope.balance = member.balance;
        $scope.reputation = member.reputation;
    });

    //TEMP HARDCODE -- MOVE TO PROTOCOL
    $scope.contentList = $scope.contentList.map(function(obj){
        obj.model = 'CONTENT';
        obj.tokens = [];
        obj.tokens.push('CRE8');
        obj.tokens.push('CRE8+CONTENT');
        obj.tokens.push('CRE8+CONTENT+'+obj.id);
        obj.tokens.push('CRE8+CONTENT+'+obj.type.toUpperCase());
        return obj;
    });
    $scope.projects = $scope.projects.map(function(obj){
        obj.model = 'PROJECT';
        return obj;
    });
    $scope.tasks = $scope.tasks.map(function(obj){
        obj.model = 'TASK';
        obj.tokens = [];
        obj.tokens.push('CRE8');
        obj.tokens.push('CRE8+TASK');
        obj.tokens.push('CRE8+TASK+'+obj.id);
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
    $scope.time = $scope.time.map(function(obj){
        obj.model = 'TIME';
        obj.tokens = [];
        obj.tokens.push('CRE8');
        obj.tokens.push('CRE8+TIME');
        obj.tokens.push('CRE8+TIME+'+obj.task.title.toUpperCase().replace(/ /g, '-')+'.'+obj.task.id);
        if (obj.task.tags){
            obj.task.tags = obj.task.tags.split(',');
            for (x in obj.task.tags){
                obj.tokens.push('CRE8+TIME+'+obj.task.tags[x].trim().toUpperCase());
                obj.tokens.push('CRE8+TIME+'+obj.task.title.toUpperCase().replace(/ /g, '-')+'.'+obj.task.id+'+'+obj.task.tags[x].trim().toUpperCase());
            }
        }
        return obj;
    });
    $scope.transactions = $scope.transactions.map(function(obj){
        obj.model = 'TRANSACTION';
        return obj;
    });
    
    $scope.activity = [].concat.apply([], [$scope.contentList, $scope.projects, $scope.tasks, $scope.time]);
    $scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.activity = $scope.activity.slice(0,100);
    

    //TODO
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
    $scope.loadMore = function(){
        console.log('TODO: LOAD MORE')
    };

    //TODO
    $scope.sortedLocationArray = ['Chapel Hill', 'Knoxville', 'Los Angeles', 'New York City']

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





    //FILTERSET
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
    $scope.loadLocations = function(){
        $scope.sortedLocationsArray = ['Chapel Hill', 'Knoxville', 'Los Angeles', 'New York City']
    };
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
    };
    //IMPROVE :)
    $scope.init = function(){
        $scope.loadAssociations();
        $scope.loadLocations();
        $scope.loadTags();
        $scope.filterSet = {associations:$scope.sortedAssociationArray, tags:$scope.sortedTagArray, locations:$scope.sortedLocationArray}
    };
    $scope.init();
    //FILTERSET




    //WATCHERS
    $rootScope.$watch('searchQueryNav', function(newValue, oldValue){
        console.log($scope.searchQuery);
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
            /*
            ContentModel.getSome('search', $scope.searchQuery, 0, 20, 'createdAt DESC').then(function(models){
                $rootScope.stateIsLoading = false;
                $scope.activity = models.map(function(obj){
                    obj.model = 'CONTENT';
                    return obj;
                });
            });
            */
        }
    }, true);
    //WATCHERS




}]);
