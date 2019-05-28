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
        }
	});

    //TODO: DEPRECIATE?
	uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBmbow2vLk6EMs0RT6r8U-umNzlkCNLrVY',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}])

.controller( 'DiscoverCtrl', ['$mdSidenav', '$rootScope', '$sce', '$scope', 'contentList', 'members', 'tasks', 'time', 'projects', function DiscoverController( $mdSidenav, $rootScope, $sce, $scope, contentList, members, tasks, time, projects ) {
	
    $scope.contentList = contentList;
	$scope.map = {
		center: {latitude: 35.902023, longitude: -84.1507067 },
		zoom: 9
	};
    $scope.markers = [];
	$scope.members = members;
    $scope.newLocation = {distance:0};
	$scope.options = {scrollwheel: false};
	$scope.projects = projects;
	
    $scope.tasks = tasks;
    $scope.tasks.map(function(obj){
        obj.model='TASK';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });

    $scope.time = time;
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
    for (x in projects){
        if (projects[x].location){
            $scope.markers.push({
                id:projects[x].id,
                content:projects[x].title,
                coords:{
                    latitude:projects[x].location.lat,
                    longitude:projects[x].location.lng
                }
            });
        }
    }

    $scope.createReaction = function(item, type){
        if($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:'CONTENT', id:item.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            $scope.contentList[contentIndex].reactions[type]++;
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}
    };

}]);