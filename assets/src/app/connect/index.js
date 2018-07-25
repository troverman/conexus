angular.module( 'conexus.connect', [
])

.config(['$stateProvider', 'uiGmapGoogleMapApiProvider', function config( $stateProvider, uiGmapGoogleMapApiProvider ) {
	$stateProvider.state( 'connect', {
		url: '/connect',
		views: {
			"main": {
				controller: 'ConnectCtrl',
				templateUrl: 'connect/index.tpl.html'
			}
		},
        resolve: {
        	members: ['UserModel', function(UserModel){
                return UserModel.getSome(100, 0, 'createdAt DESC');
            }],
        	projects: ['ProjectModel', function(ProjectModel){
                return ProjectModel.getSome(100, 0, 'createdAt DESC');
            }],
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getSome('', '', 100, 0, 'createdAt DESC');
            }],
        }

	});
	uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDKPi-Krk_GCd_YfHS4ghUH3P4afPtPstA',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}])

.controller( 'ConnectCtrl', ['$scope', 'members', 'titleService', 'projects', 'tasks', 'uiGmapGoogleMapApi', function ConnectController( $scope, members, titleService, projects, tasks, uiGmapGoogleMapApi ) {
	titleService.setTitle('connect | conex.us');

	$scope.map = {
		center: {latitude: 39.443659, longitude: -83.082276 },
		zoom: 8
	};
	$scope.members = members;
	$scope.options = {scrollwheel: false};
	$scope.projects = projects;
	$scope.tasks = tasks;
	$scope.windowOptions = {visible: false};

}]);