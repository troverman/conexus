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
        }
    })
    .state( 'home.feed', {
        url: '',
        views: {
            "homeFeed": {
                controller: 'FeedCtrl',
                templateUrl: 'home/templates/feed.tpl.html'
            }
        }
    })

}])

.controller( 'HomeCtrl', ['$rootScope', '$state', function HomeController( $rootScope, $state ) {
    if($rootScope.currentUser){console.log('FEED'); $state.go('home.feed');}
    else{console.log('INTRO'); $state.go('home.intro');}
}])

.controller( 'IntroCtrl', ['$http', '$location', '$mdSidenav', '$rootScope', '$sce', '$scope', '$state', '$window', 'ProjectModel', 'SearchModel', 'titleService', 'toaster', 'UserModel', function HomeController( $http, $location, $mdSidenav, $rootScope, $sce, $scope, $state, $window, ProjectModel, SearchModel, titleService, toaster, UserModel ) {

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
    $scope.selectedIntro = $scope.introObj[Math.floor(Math.random()*$scope.introObj.length)];
    $scope.selectedTime = Math.floor(Math.random()*92);
    vid[0].currentTime = $scope.selectedTime;

    //TODO 
    //PROJECT-MEMBER
    //MEMBER-MEMBER

    //TODO
    //ROOTSCOPE CONSTRUCT
    $scope.map = {center: {latitude: 35.902023, longitude: -84.1507067 }, zoom: 9};
    $scope.markers = [];

    //TODO: ROOTSCOPE
    $scope.newMember={};
    $scope.searchResults = [];
    
    //TODO: DEPRECIATE --> PUT IN NAV
    $rootScope.getLatLng = function() {
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
                ProjectModel.get({location:[lng,lat], limit:10, skip:0}).then(function(projects){
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

    //TODO: QUERY :0
    $scope.loadMore = function(){};

    $scope.registerUser = function(){
        $scope.valid = true;
        if ($scope.newMember.password){
            if ($scope.newMember.password.length < 8){
                $rootScope.pop('ERROR', 'Password must be longer than 8 Characters');
                $scope.valid = false;
            }
        }
        else{
            $rootScope.pop('ERROR', 'Password must be longer than 8 Characters');
            $scope.valid = false;
        }
        if (!$scope.newMember.username){
            $rootScope.pop('ERROR', 'Invalid Username');
            $scope.valid = false;
        }
        if (!$scope.newMember.email){
            $rootScope.pop('ERROR', 'Invalid Email');
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
    function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
    $scope.loadAssociations = function(){
        $scope.sortedAssociationArray = []; 
    };
    $scope.loadLocations = function(){$scope.sortedLocationsArray = ['Chapel Hill', 'Knoxville', 'Los Angeles', 'New York City']};
    $scope.loadTags = function(){
        $scope.tags = $scope.activity.map(function(obj){
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
    };
    //IMPROVE :)
    $scope.init = function(){
        $scope.loadAssociations();
        $scope.loadLocations();
        $scope.loadTags();
        $scope.filterSet = {associations:$scope.sortedAssociationArray, tags:$scope.sortedTagArray, locations:$scope.sortedLocationArray}
    };
    //\\//\\//\\//\\//
    //FILTERS\\//\\//
    //\\//\\//\\//\\//

    //TODO: COMPLEX QUERY
    var query = JSON.stringify([
        {model:'CONTENT', limit:20, skip:0, sort:'createdAt DESC'},
        {model:'ITEM', limit:20,skip:0,sort:'createdAt DESC'},
        {model:'PROJECT', limit:20,skip:0,sort:'createdAt DESC'},
        {model:'TASK', limit:20,skip:0,sort:'createdAt DESC'},
        {model:'TIME', limit:20,skip:0,sort:'createdAt DESC'},
        {model:'TRANSACTION', limit:20,skip:0,sort:'createdAt DESC'},
    ]);

    $scope.stateIsLoadingIntro = true;
    SearchModel.getFeed(query).then(function(searchModels){
        $scope.stateIsLoadingIntro = false;
        console.log(searchModels);
        $scope.activity = searchModels;
        $scope.init();
    });




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

.controller( 'FeedCtrl', ['$mdSidenav', '$location', '$rootScope', '$sailsSocket', '$sce', '$scope', 'ContentModel', 'FollowerModel', 'MemberModel', 'OrderModel', 'PeerModel', 'ProjectModel', 'ReactionModel', 'SearchModel', 'TaskModel', 'titleService', 'toaster', 'UserModel', 'ValidationModel', function HomeController( $mdSidenav, $location, $rootScope, $sailsSocket, $sce, $scope, ContentModel, FollowerModel, MemberModel, OrderModel, PeerModel, ProjectModel, ReactionModel, SearchModel, TaskModel, titleService, toaster, UserModel, ValidationModel ) {

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
    $scope.isTutorial = true;
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.searchResults = [];
    $scope.selectedTab = 'INFORMATION';
    $scope.suggestedTokens = [];

    //DEPRECIATE.. PUT IN NAV
    $scope.createReaction = function(item, type){
        if($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:item.model, id:item.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var index = $scope.activity.map(function(obj){return obj.id}).indexOf(item.id);
            $scope.activity[index].data.apps.reactions[type]++;
            ReactionModel.create($scope.newReaction);
            $rootScope.pop(type, item.id);
        }
        else{$mdSidenav('login').toggle()}   
    };

    //TODO: CREATE A TOKEN 'ORBIT' FOR MEMBER
    //TODO: CREATE COMPLEX QUERY / DISCOVER
    $scope.discover = function(){

        $scope.searchQueryFeed = [];
        for (x in $scope.followers){
            if ($scope.followers[x]){$scope.searchQueryFeed.push({type:'MEMBER', id:$scope.followers[x].id, text:$scope.followers[x].username})}
        }

        for (x in $scope.memberProjects){
            $scope.searchQueryFeed.push({type:'PROJECT', id:$scope.memberProjects[x].id, text:$scope.memberProjects[x].title});
        }

        for (x in $scope.memberTasks){
            $scope.searchQueryFeed.push({type:'TASK', id:$scope.memberTasks[x].id, text:$scope.memberTasks[x].title})
        }

        for (x in $scope.memberProjects){
            $scope.suggestedTokens.push({token:$scope.memberProjects[x].urlTitle});
        }
        
        $scope.suggestedTokenTags = $scope.memberProjects.map(function(obj){return obj.tags;});
        $scope.suggestedTokenTags = [].concat.apply([], $scope.suggestedTokenTags);
        $scope.suggestedTokenTags = $scope.suggestedTokenTags.filter(function(e){return e});
        
        $scope.sortedsuggestedTokenTags = [];
        for (x in $scope.suggestedTokenTags){
            var amount = countInArray($scope.suggestedTokenTags, $scope.suggestedTokenTags[x]);
            if ($scope.sortedsuggestedTokenTags.map(function(obj){return obj.element}).indexOf($scope.suggestedTokenTags[x]) == -1){
                $scope.sortedsuggestedTokenTags.push({amount:amount, element:$scope.suggestedTokenTags[x]})
            }
        }
        $scope.sortedsuggestedTokenTags.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 


    };

    //TODO: MAPPING LOOKUP! 
    $scope.lookupBalance = function(){
        console.log($rootScope.balanceLook, $rootScope.balance[$rootScope.balanceLook.toString()])
        if (!$rootScope.balance[$rootScope.balanceLook.toString()]){$rootScope.balanceLookupValue = 0}
        if ($rootScope.balance[$rootScope.balanceLook.toString()]){$scope.balanceLookupValue = $rootScope.balance[$rootScope.balanceLook.toString()]}
    };

    //BUG..
    $scope.renderBalances = function(){
        var sortable = [];
        for (var context in $rootScope.balance) {sortable.push([context, $rootScope.balance[context.toString()]])}
        sortable.sort(function(a, b) {return b[1] - a[1]});
        for (x in sortable){
            if (x < 100){
                $scope.balanceChart.xAxis.categories.push(sortable[x][0]);
                $scope.balanceChart.series[0].data.push(sortable[x][1]);
            }
        }
    };

    $scope.selectTab = function(model){$scope.selectedTab = model;};

    //TODO: FACTOR THIS BAD BOY
    //\\//\\//\\//\\//
    //TUTORIAL\\//\\//
    //\\//\\//\\//\\//
    //CUSTOM CONTROLLER..
    $rootScope.baseToken = {text:'UNIVERSAL TOKEN', description:'Universal Token Position; protocol where every member creates one Universal Token per day to serve an an eglatarian value position.'}
    $rootScope.baseManifold = {text:'+SPONSOR+ONMINT+'+$rootScope.currentUser.id, description:'Sponsorship On Mint postions have a triggering action potiental \'on mint\' of the specified token root the manifold (TOKEN+SPONSOR).'}
    $rootScope.orderType = {text:'Continual', description:'Continual Market Orders will fill as long as there is liquidity. Useful for token protocols with ongoing minting logic'}
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
    $scope.map = {center: {latitude: 35.902023, longitude: -84.1507067 },zoom: 9};
    $scope.markers = [];
    $scope.newAccountInformation = $rootScope.currentUser;
    $scope.newOrder = [];
    $scope.newOrderNEW = [];
    $scope.options = {scrollwheel: false};
    $scope.pageNumber = 0;
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
    $scope.selectedTab = 'QUESTIONS';
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
    $scope.valueMapQuery = [
        {text:'create'},
        {text:'bright'},
        {text:'futures'},
    ];

    $scope.changePage = function(page){
        console.log('hmm')
        window.scrollTo(0, 0);
        if (page){$scope.pageNumber = page}
        else{$scope.pageNumber++}
        if ($scope.pageNumber<0 || $scope.pageNumber>6){
            $scope.isTutorial = !$scope.isTutorial;
            $scope.selectedTab = 'INFORMATION';
        }
    };

    //CORE APPS
    $scope.apps = [
        {model:'APP', title:'Client Mining', description:'Run a CRE8 node that powers the network. Machine attention is tokenized.'},
        {model:'APP', title:'Attention Tokenization', description:'Required for Attention Tokenization'},
        {model:'APP', title:'Location Tokenization', description:'Required for Location Tokenization'},
    ];
  
    $scope.initTutorial = function(){
        
        //TODO: APP STRUCT
        //TODO: PEER STRUCT
        $scope.editAccount = function () {
            UserModel.update($scope.newAccountInformation).then(function(model){
                console.log('EDIT USER', model);
            });
            $rootScope.pop('Saved!', 'Account Updated');

            //TODO: STRONG STRUCT
            //IF BROWER MINING.. CREATE PEER :) (INIT PROCESS..)
            
            //var peer = currentUser.apps.map(function(obj){return obj.title}).indexOf('PEER') != -10
            //get peer. if you know have. create. 
            //link peer to machiene attention
            var peer = true;
            if (peer){
                var peerModel = {
                    version:'UNSTABLE PRE-ALPHA',
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
                //PeerModel.create(peerModel).then(function(){});

            }
        };

        //TODO DEPRECIATE.. PUT IN NAV
        //AGNOSTIC
        //LOAD ON LOGIN? YEP.. 
        //IF ROOTSCOPE LOCATION
        $scope.getLatLng = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    $rootScope.currentUser.location = {
                        lat:position.coords.latitude,
                        lng:position.coords.longitude
                    };
                    $scope.map = {center: {latitude:  $rootScope.currentUser.location.lat, longitude:  $rootScope.currentUser.location.lng}, zoom: 14};
                    ProjectModel.get({location:[lng,lat], limit:10, skip:0}).then(function(projects){
                        $scope.projects = projects;
                        $scope.markers = [];
                        //TODO: HELPER CONTAINER FUNCTIONS
                        $scope.populateMap($scope.projects);
                        $scope.projects = $scope.projects.map(function(obj){
                            var index = -1
                            if ($scope.memberProjects){index = $scope.memberProjects.map(function(obj1){return obj1.id}).indexOf(obj.id);}
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
     
        //TODO: DEPRECIATE MEMBER MODEL
        //VALIDATION - ASSOCIATION - CONNECTION
        //CREATE PROJECT-MEMBER, 
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
                    $rootScope.pop('Request to Join','You requested to join.. ' +model.title+' .. pending validation');
                });
            }
            else if (model.isMember == 'PENDING'){
                $scope.projects[index].isMember = false;
                $rootScope.pop('Request canceled','You canceled your request to join.. ' +model.title);
            }
            else if (model.isMember == true){
                $rootScope.pop('Project Left','You left ' +model.title);
                $scope.projects[index].isMember = false;
            }            
        };

        //ASSOCIATE TASK
        //GOOD
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
                    $rootScope.pop('Associated Task!', 'You are now associated with '+ model.title + '. Schedule some intentional time!');
                });
            }
            else if (model.isAssociated == true){
                $scope.tasks[index].isAssociated = false;
                $rootScope.pop('Removed Association!', 'It\'s all good!');
            }
        };

        //TODO: DEPRECIATE FOLLOW MODEL
        //VALIDATION - ASSOCIATION - CONNECTION
        //CREATE MEMBER-MEMBER, 
        //ROOTSCOPE IT 
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
                    $rootScope.pop('Following!', 'You are now follwing '+ model.username);
                    $scope.newFollower = {};
                });
            }
            if (model.isFollowing){
                var index = $scope.members.map(function(obj){return obj.id}).indexOf($scope.newFollower.followed);
                $scope.members[index].isFollowing = false;
                $scope.members[index].followerCount--;
                $rootScope.pop('Unfollowed!', 'You Unfollowed '+ model.username);
                $scope.newFollower = {};
            }
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

        $scope.populateMap = function(models){
            for (x in models){
                if (models[x].location){
                    $scope.markers.push({
                        id:models.id,
                        content:models[x].title,
                        url:models[x].urlTitle,
                        coords:{
                            latitude:models[x].location.lat,
                            longitude:models[x].location.lng
                        }
                    });
                }
            }
        };
        $scope.populateMap($scope.projects);
        
        //VALUE MAP ETC
        //OLD
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

        //PERFORMANCE....
        $scope.updateChartTotal = function(){
            $scope.chartMapTotal.xAxis.categories = $scope.newOrder.map(function(obj){return obj[1].identifier.split('+')[2]});
            $scope.chartMapTotal.series[0].data = $scope.newOrder.map(function(obj){return obj[0].amount});
        };

        $scope.updatePieTotal = function(){
            var data = $scope.newOrder.map(function(obj){return {name: obj[1].identifier.split('+')[2], y:obj[0].amount}})
            $scope.pieTotal.series[0].data = data;
        };

        //TODO: VM CONTROLS ETC
        //PREPOPULATE ? GENERATOR FROM SUGGESTIONS IS THE WAY - IS THE KEY
        //OLDISH
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

    };
    //\\//\\//\\//\\//
    //TUTORIAL\\//\\//
    //\\//\\//\\//\\//


    //\\//\\//\\//\\//
    //FILTERS\\//\\//
    //\\//\\//\\//\\//
    //TODO: BETTER
    function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
    $scope.filterContent = function(filter) {
        $rootScope.stateIsLoading = true;
        ContentModel.get({tag:filter, limit:20, skip:0, sort:'createdAt DESC'}).then(function(contentList){
            $rootScope.stateIsLoading = false;
            $scope.activity = contentList;
            $scope.loadTags();
        });
    };
    //TODO: ASSOCIATIONS .. GRAPH TRAVERSAL CONTEXT
    $scope.loadAssociations = function(){
        $scope.associations = $scope.tasks.map(function(obj){});
        $scope.associations = [].concat.apply([], $scope.associations);
        $scope.associations = $scope.associations.filter(function(e){return e});
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
    $scope.sortedTagArray = [{element:'LOVE'}, {element:'ART'}, {element:'PEACE'}, {element:'SHELTER'}, {element:'REST'}, {element:'EXPERIENCE'}, {element:'HEALTH'}, {element:'HUMAN'}];
    //\\//\\//\\//\\//
    //FILTERS\\//\\//
    //\\//\\//\\//\\//



    //COMPLEX QUERY
    //TODO: DYNAMIC COMPUTE
    var query = JSON.stringify([
        {model:'CONTENT', limit:20, skip:0, sort:'createdAt DESC'},
        {model:'ITEM', limit:20,skip:0,sort:'createdAt DESC'},
        {model:'ORDER', limit:20,skip:0,sort:'createdAt DESC'},
        {model:'PROJECT', limit:20,skip:0,sort:'createdAt DESC'},
        {model:'TASK', limit:20,skip:0,sort:'createdAt DESC'},
        {model:'TIME', limit:20,skip:0,sort:'createdAt DESC'},
        {model:'TRANSACTION', limit:20,skip:0,sort:'createdAt DESC'},
        {model:'MEMBER', limit:20,skip:0,sort:'createdAt DESC'}
    ]);

    $scope.stateIsLoadingFeed = true;
    SearchModel.getFeed(query).then(function(searchModels){

        $scope.stateIsLoadingFeed = false;

        $scope.activity = searchModels;

        $scope.contentList = searchModels.filter(function(obj){
            return obj.model == 'CONTENT';
        });
        $scope.members = searchModels.filter(function(obj){
            return obj.model == 'MEMBER';
        });
        $scope.orders = searchModels.filter(function(obj){
            return obj.model == 'ORDER';
        });
        $scope.projects = searchModels.filter(function(obj){
            return obj.model == 'PROJECT';
        });
        $scope.tasks = searchModels.filter(function(obj){
            return obj.model == 'TASK';
        });
        $scope.time = searchModels.filter(function(obj){
            return obj.model == 'TIME';
        });
        $scope.transactions = searchModels.filter(function(obj){
            return obj.model == 'TRANSACTION';
        });

        console.log(searchModels);

        //LOL OBV DEPRECIATE
        FollowerModel.getFollowing($rootScope.currentUser).then(function(followers){
            $scope.followers = followers;
            MemberModel.get({user:$rootScope.currentUser.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(memberProjects){
                $scope.memberProjects = memberProjects;
                TaskModel.get({user:$rootScope.currentUser.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(memberTasks){
                    $scope.memberTasks = memberTasks;
                    OrderModel.get({user:$rootScope.currentUser.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(positions){
                        $scope.positions = positions;
                        $scope.init();
                        $scope.initTutorial();
                        $scope.renderBalances();

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

                        if ($scope.followers ){
                            $scope.followers = $scope.followers.map(function(obj){return obj.followed});    
                            $scope.members.map(function(obj){
                                var index = $scope.followers.map(function(obj1){
                                    if (obj1){return obj1.id;}
                                }).indexOf(obj.id);
                                if (index != -1){obj.isFollowing = true;}
                                if (index == -1){obj.isFollowing = false;}
                                return obj;
                            });
                        }

                    });
                });
            });
        });


    });


    //\\//\\//\\//\\//
    //WATCHERS\\//\\//
    //\\//\\//\\//\\//
    $rootScope.$watch('searchQueryNav', function(newValue, oldValue){
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

            //TODO: QUERY BUILDER
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
            });

        }
    }, true);
    //\\//\\//\\//\\//
    //WATCHERS\\//\\//
    //\\//\\//\\//\\//


    //\\//\\//\\//\\//
    //SOCKETS\\//\\//
    //\\//\\//\\//\\//
    //TODO: CUSTOM ROOMS, CUSTOM FILTER.
    $sailsSocket.subscribe('content', function (envelope) {
        if (envelope.verb == 'created'){$scope.activity.unshift(envelope.data);}
    });


}]);
