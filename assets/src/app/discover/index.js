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
        	members: ['UserModel', function(UserModel){
                return UserModel.getSome(18, 0, 'createdAt DESC');
            }],
        	projects: ['ProjectModel', function(ProjectModel){
                return ProjectModel.getSome(600, 0, 'createdAt DESC');
            }],
            posts: ['PostModel', function(PostModel){
                return PostModel.getSome('', '', 20, 0, 'createdAt DESC');
			}],
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getSome('', '', 20, 0, 'createdAt DESC');
            }],
            work: ['WorkModel', function(WorkModel){
                return WorkModel.getSome('', '', 20, 0, 'createdAt DESC');
            }],
        }

	});
	uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDKPi-Krk_GCd_YfHS4ghUH3P4afPtPstA',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}])

.controller( 'DiscoverCtrl', ['$sce', '$scope', 'members', 'titleService', 'posts', 'projects', 'tasks', 'uiGmapGoogleMapApi', 'work', function DiscoverController( $sce, $scope, members, titleService, posts, projects, tasks, uiGmapGoogleMapApi, work ) {
	
    titleService.setTitle('Discover | CRE8.XYZ');
    
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
            //align: 'right',
            //verticalAlign: 'top',
            //y: 70,
            //layout: 'vertical'
        },
        tooltip: {
        //    shared: true,
        },
        credits:{enabled:false},
    };

	$scope.map = {
		center: {latitude: 35.902023, longitude: -84.1507067 },
		zoom: 9
	};
    $scope.markers = [];
	$scope.members = members;
	$scope.options = {scrollwheel: false};
	$scope.posts = posts;
	$scope.projects = projects;
	$scope.tasks = tasks;
	$scope.windowOptions = {visible: false};
	$scope.work = work;

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

    $scope.search = function(){};

}]);