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
        resolve: {
            contentList: ['ContentModel', function(ContentModel){
                return ContentModel.getSome('', '', 20, 0, 'createdAt DESC');
            }],
        	members: ['UserModel', function(UserModel){
                return UserModel.getSome(18, 0, 'createdAt DESC');
            }],
        	projects: ['ProjectModel', function(ProjectModel){
                return ProjectModel.getSome('', '', 20, 0, 'createdAt DESC');
            }],
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getSome('', '', 20, 0, 'createdAt DESC');
            }],
            time: ['TimeModel', function(TimeModel){
                return TimeModel.getSome('', '', 20, 0, 'createdAt DESC');
            }],
        }

	});
	uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBmbow2vLk6EMs0RT6r8U-umNzlkCNLrVY',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}])

.controller( 'DiscoverCtrl', ['$mdSidenav', '$rootScope', '$sce', '$scope', 'contentList', 'members', 'tasks', 'time', 'titleService', 'projects', 'uiGmapGoogleMapApi', function DiscoverController( $mdSidenav, $rootScope, $sce, $scope, contentList, members, tasks, time, titleService, projects, uiGmapGoogleMapApi ) {
	
    titleService.setTitle('Discover | CRE8.XYZ');
    $scope.contentList = contentList;
    $scope.chart = {
        chart: {
            polar: true,
            margin: [30, 30, 30, 30]
        },
        series: [{
            id: 'values',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.2, 0.15, 0.15, 0.10, 0.15, 0.15, 0.1],
            color: 'rgba(153,0,0,0.3)',
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

	$scope.map = {
		center: {latitude: 35.902023, longitude: -84.1507067 },
		zoom: 9
	};
    $scope.markers = [];
	$scope.members = members;
	$scope.options = {scrollwheel: false};
	$scope.projects = projects;
	$scope.tasks = tasks;
    $scope.tasks.map(function(obj){
        obj.tags = obj.tags.split(',');
        return obj;
    });
    $scope.time = time;
	$scope.windowOptions = {visible: false};

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
        if($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:'CONTENT', id:item.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
            var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            $scope.contentList[contentIndex].reactions[type]++;
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.search = function(){};

    $scope.tokenToggle = function(){
        $mdSidenav('tokens').toggle();
        $rootScope.globalTokens = $scope.tokens;
    };

}]);