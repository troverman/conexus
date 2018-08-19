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
                    {title:'Work Stream 597c55f43456040315c6724c',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:'troverman', createdAt: new Date()},
                    {title:'Task 597c55e56833040315c6724c Stream',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:'troverman', createdAt: new Date()},
                    {title:'Task 425c35e56833040315c6724c Stream 2',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:'troverman', createdAt: new Date()},
                    {title:'Task 597c55e56833048165c6720c Stream 3',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:'troverman', createdAt: new Date()}
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

	//TODO: HMM
	$scope.renderMessage = function(stream){
        var html = '<iframe width="510" height="265" src="'+stream+'" frameborder="0" allowfullscreen></iframe>'
        return $sce.trustAsHtml(html);
    };


}]);