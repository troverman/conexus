angular.module( 'conexus.home', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		},
		resolve:{
			projects: ['ProjectModel', function(ProjectModel) {
				return ProjectModel.getAll();
			}],
			members: ['UserModel', function(UserModel){
				return UserModel.getAll();
			}],
			messages: ['MessageModel', function(MessageModel){
				return MessageModel.getAll();
			}],
			tasks: ['TaskModel', function(TaskModel) {
				return TaskModel.getAll();
			}],

		}
	});
}])

.controller( 'HomeCtrl', ['$scope', 'config', 'members', 'messages', 'projects', 'SearchModel', 'tasks', 'titleService', function HomeController( $scope, config, members, messages, projects, SearchModel, tasks, titleService ) {
	titleService.setTitle('conex.us');
	$scope.currentUser = config.currentUser;
	$scope.projects = projects;
	$scope.tasks = tasks;
	$scope.members = members;
	$scope.messages = messages;

	$scope.searchResults = [];
	$scope.keyPress = function(searchValue){
		SearchModel.search(searchValue).then(function(models){
			$scope.searchResults = models;
		});
	};

}]);
