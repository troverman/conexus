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

            //TODO: COMPLEX QUERY
            //activity: ['SearchModel', function(SearchModel){
            //    return SearchModel.getSome({limit:20, skip:0, sort:'createdAt DESC'});
            //}],

            //DEPRECIATE
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
}])

.controller( 'DiscoverCtrl', ['$mdSidenav', '$rootScope', '$sce', '$scope', 'contentList', 'members', 'projects', 'tasks', 'time', 'transactions', function DiscoverController( $mdSidenav, $rootScope, $sce, $scope, contentList, members, projects, tasks, time, transactions ) {

    //CREATE QUERY BY (MEMBER)-APPS

    //TODO: COMPLEX QUERY
    //TODO: REDUCE QUERIES
    $scope.contentList = contentList.map(function(obj){
        obj.model='CONTENT';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
    $scope.members = members;
	$scope.projects = projects.data.map(function(obj){
        obj.model='PROJECT';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });
    $scope.tasks = tasks.data.map(function(obj){
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


    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.newLocation = {distance:0};
    $scope.options = {scrollwheel: false};
    $scope.windowOptions = {visible: false};
    
    $scope.shuffleArray = function(d) {
        for (var c = d.length - 1; c > 0; c--) {
            var b = Math.floor(Math.random() * (c + 1));
            var a = d[c];
            d[c] = d[b];
            d[b] = a;
        }
        return d
    };

    $scope.shuffleActivity = function(){

        //HERE!
        $scope.searchQuery = {
            associations:[
                {text:'CRE8'}
            ],
            locations:[
                {text:'My Location : 5 km'}
            ],
            context:[
                {text:'Art'},
                {text:'City'}
            ],
        };

        var length = Math.floor(Math.random()*10)
        var randomContext = $scope.shuffleArray($scope.sortedTagArray).slice(0, length);

        randomContext = randomContext.map(function(obj){
            var returnObj = {
                text:obj.element
            };
            return returnObj;
        });

        $scope.searchQuery.context = randomContext;
        $scope.sortedTagArray = $scope.shuffleArray($scope.sortedTagArray);
        $scope.activity = $scope.shuffleArray($scope.activity);
    };

    $scope.activity = [].concat.apply([], [$scope.contentList, $scope.projects, $scope.tasks, $scope.time, $scope.transactions]);
    //$scope.activity = $scope.shuffleArray($scope.activity);
    //$scope.activity = $scope.activity.slice(0,100);

    //HERE!
    $scope.searchQuery = {
        associations:[
            {text:'CRE8'}
        ],
        locations:[
            {text:'My Location : 5 km'}
        ],
        context:[
            {text:'Art'},
            {text:'City'}
        ],
        //models:
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


    //TODO: NAV
    //LOCATION APP
    $scope.getLatLng = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                $scope.lat = position.coords.latitude; 
                $scope.lng = position.coords.longitude;
            });
        }
    };
    $scope.getLatLng();

    $scope.filterContent = function(model){
        $scope.shuffleActivity();
        $scope.searchQuery.context = [
            {text:model}
        ];
    };




    //TODO: BETTER | TAG STORAGE
    //TODO: ASSOCIATION TRAVERSAL
    //\\//\\//\\//\\//
    //FILTERS\\//\\//
    //\\//\\//\\//\\//
    function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
    $scope.loadAssociations = function(){
        $scope.associations = $scope.activity.map(function(obj){return obj.associatedModels});
        $scope.associations = [].concat.apply([], $scope.associations);
        $scope.associations = $scope.associations.filter(function(e){return e});
        $scope.sortedAssociationArray = [];
        for (x in $scope.associations){
            var amount = countInArray($scope.associations, $scope.associations[x]);
            if ($scope.sortedAssociationArray.map(function(obj){return obj.element}).indexOf($scope.associations[x]) == -1){$scope.sortedAssociationArray.push({amount:amount, element:$scope.associations[x]})}
        }
        $scope.sortedAssociationArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);});  
    };
    $scope.loadTags = function(){
        $scope.tags = $scope.activity.map(function(obj){return obj.tags});
        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
        $scope.sortedTagArray = [];
        for (x in $scope.tags){
            var amount = countInArray($scope.tags, $scope.tags[x]);
            if ($scope.sortedTagArray.map(function(obj){return obj.element}).indexOf($scope.tags[x]) == -1){$scope.sortedTagArray.push({amount:amount, element:$scope.tags[x]})}
        }
        $scope.sortedTagArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);});  
    };

    $scope.sortedLocationArray = [{element:'New York City',amount:1}];
    $scope.loadAssociations();
    $scope.loadTags();
    $scope.filterSet = {associations:$scope.sortedAssociationArray, tags:$scope.sortedTagArray, locations:$scope.sortedLocationArray};
    //\\//\\//\\//\\//
    //FILTERS\\//\\//
    //\\//\\//\\//\\//


    $scope.shuffleActivity();



    //\\//\\//\\//\\//
    //WATCHERS\\//\\//
    //\\//\\//\\//\\//
    $rootScope.$watch('searchQueryNav', function(newValue, oldValue){
        if (newValue !== oldValue) {
            console.log('searchQueryNav', $rootScope.searchQueryNav);
            $scope.searchQuery.tags = $rootScope.searchQueryNav.tags.map(function(obj){
                return {text:obj.query}
            });
        }
    }, true);

    $scope.$watch('searchQuery', function(newValue, oldValue){
        if (newValue !== oldValue) {
            console.log('searchQuery', $scope.searchQuery);
            $scope.searchModel = [];
        }
    }, true);
    //\\//\\//\\//\\//
    //WATCHERS\\//\\//
    //\\//\\//\\//\\//


}]);