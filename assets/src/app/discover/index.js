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
                return UserModel.getSome(100, 0, 'createdAt DESC');
            }],
        	projects: ['ProjectModel', function(ProjectModel){
                return ProjectModel.getSome(100, 0, 'createdAt DESC');
            }],
            posts: ['PostModel', function(PostModel){
                return PostModel.getSome('', '', 100, 0, 'createdAt DESC');
			}],
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getSome('', '', 100, 0, 'createdAt DESC');
            }],
            //TODO: ALL 
            //TODO: CONVERT TO 'CONTENT'
            streams: [function() {
                return [
                    {title:'Work Stream 597c55f43456040315c6724c',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:{username:'troverman', avatarUrl:'https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg'}, createdAt: new Date()},
                    {title:'Task 597c55e56833040315c6724c Stream',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:{username:'troverman', avatarUrl:'https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg'}, createdAt: new Date()},
                    {title:'Task 425c35e56833040315c6724c Stream 2',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:{username:'troverman', avatarUrl:'https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg'}, createdAt: new Date()},
                    {title:'Task 597c55e56833048165c6720c Stream 3',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:{username:'troverman', avatarUrl:'https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg'}, createdAt: new Date()}
                ];
            }],
            work: ['WorkModel', function(WorkModel){
                return WorkModel.getSome('', '', 100, 0, 'createdAt DESC');
            }],
        }

	});
	uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDKPi-Krk_GCd_YfHS4ghUH3P4afPtPstA',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}])

.controller( 'DiscoverCtrl', ['$sce', '$scope', 'members', 'titleService', 'posts', 'projects', 'streams', 'tasks', 'uiGmapGoogleMapApi', 'work', function DiscoverController( $sce, $scope, members, titleService, posts, projects, streams, tasks, uiGmapGoogleMapApi, work ) {
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
		center: {latitude: 39.443659, longitude: -83.082276 },
		zoom: 8
	};
	$scope.members = members;
	$scope.options = {scrollwheel: false};
	$scope.posts = posts;
	$scope.projects = projects;
	$scope.streams = streams;
	$scope.tasks = tasks;
	$scope.windowOptions = {visible: false};
	$scope.work = work;

	//TODO: UNITY W POSTS | CONTENT | STREAMS

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

	//TODO: HMM
	$scope.renderStream = function(stream){
        var html = '<iframe width="510" height="265" src="'+stream+'" frameborder="0" allowfullscreen></iframe>'
        return $sce.trustAsHtml(html);
    };


}]);