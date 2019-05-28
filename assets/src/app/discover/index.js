angular.module( 'conexus.discover', [
])

.config(['$stateProvider', 'uiGmapGoogleMapApiProvider', function config( $stateProvider, uiGmapGoogleMapApiProvider ) {
	$stateProvider.state( 'discover', {
		url: '/discover',
		views: {
			"main": {
				controller: 'DiscoverCtrl',
				templateUrl: 'discover/index.tpl.html'
			}
		},

        //TODO: DEPRECIATE RESOLVE
        resolve: {

            //TODO: GET FEED ...
            //TODO: COMPLEX QUERY
            contentList: ['ContentModel', function(ContentModel){
                return ContentModel.getSome({limit:20, skip:0, sort:'createdAt DESC'});
            }],
        	members: ['UserModel', function(UserModel){
                return UserModel.getSome({limit:18, skip:0, sort:'createdAt DESC'});
            }],
        	projects: ['ProjectModel', function(ProjectModel){
                return ProjectModel.getSome({limit:20, skip:0, sort:'createdAt DESC'});
            }],
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getSome({limit:20, skip:0, sort:'createdAt DESC'});
            }],
            time: ['TimeModel', function(TimeModel){
                return TimeModel.getSome({limit:20, skip:0, sort:'createdAt DESC'});
            }],
            transactions: ['TransactionModel', function(TransactionModel){
                return TransactionModel.getSome({limit:20, skip:0, sort:'createdAt DESC'});
            }],
        }
	});

    //TODO: DEPRECIATE?
	uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBmbow2vLk6EMs0RT6r8U-umNzlkCNLrVY',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}])

.controller( 'DiscoverCtrl', ['$mdSidenav', '$rootScope', '$sce', '$scope', 'contentList', 'members', 'projects', 'tasks', 'time', 'transactions', function DiscoverController( $mdSidenav, $rootScope, $sce, $scope, contentList, members, projects, tasks, time, transactions ) {

    //TODO: MODERNIZE
    //TODO: REDUCE QUERIES
    $scope.members = members;
    $scope.contentList = contentList.map(function(obj){
        obj.model='CONTENT';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
	$scope.projects = projects.map(function(obj){
        obj.model='PROJECT';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
    $scope.tasks = tasks.map(function(obj){
        obj.model='TASK';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
    $scope.time = time.map(function(obj){
        obj.model='TIME';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
    $scope.transactions = transactions.map(function(obj){
        obj.model='TRANSACTION';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });

    function shuffleArray(d) {
        for (var c = d.length - 1; c > 0; c--) {
            var b = Math.floor(Math.random() * (c + 1));
            var a = d[c];
            d[c] = d[b];
            d[b] = a;
        }
        return d
    };
    
    $scope.activity = [].concat.apply([], [$scope.contentList, $scope.projects, $scope.tasks, $scope.time, $scope.transactions]);
    //$scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.activity = shuffleArray($scope.activity);
    $scope.activity = $scope.activity.slice(0,100);
    
    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.newLocation = {distance:0};
    $scope.options = {scrollwheel: false};
    $scope.windowOptions = {visible: false};

    $scope.searchQuery = {
        associations:[
            {text:'CRE8'}
        ],
        locations:[
            {text:'My Location - 5 km'}
        ],
        tags:[
            {text:'Art'},
            {text:'City'}
        ]
    };

    //TODO: BETTER | BETTER QUERIES
    $scope.populateMap = function(){
        for (x in $scope.projects){
            if ($scope.projects[x].location){
                $scope.markers.push({
                    id:$scope.projects[x].id,
                    content:$scope.projects[x].title,
                    coords:{latitude:$scope.projects[x].location.lat, longitude:$scope.projects[x].location.lng}
                });
            }
        }
        $scope.map = {
            center: {latitude: $scope.markers[0].coords.latitude, longitude: $scope.markers[0].coords.longitude},
            zoom: 10
        };
    };
    $scope.populateMap();




    //TODO: BETTER | TAG STORAGE
    function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
    $scope.loadTags = function(){
        $scope.tags = $scope.tasks.map(function(obj){return obj.tags});
        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
        $scope.sortedTagArray = [];
        for (x in $scope.tags){
            var amount = countInArray($scope.tags, $scope.tags[x]);
            if ($scope.sortedTagArray.map(function(obj){return obj.element}).indexOf($scope.tags[x]) == -1){$scope.sortedTagArray.push({amount:amount, element:$scope.tags[x]})}
        }
        $scope.sortedTagArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);});  
    }
    $scope.loadTags();
    $scope.filterSet = {associations:[], tags:$scope.sortedTagArray, locations:[]};





    //TODO: DEPRECIATE -- NAV
    $scope.createReaction = function(item, type){
        if($rootScope.currentUser){}
        else{$mdSidenav('login').toggle()}
    };


}]);