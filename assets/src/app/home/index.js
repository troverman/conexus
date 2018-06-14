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

.controller( 'HomeCtrl', ['$sce', '$scope', 'config', 'members', 'messages', 'projects', 'SearchModel', 'tasks', 'titleService', function HomeController( $sce, $scope, config, members, messages, projects, SearchModel, tasks, titleService ) {
	titleService.setTitle('conex.us');
	$scope.currentUser = config.currentUser;
	$scope.projects = projects;
	$scope.tasks = tasks;
	$scope.members = members;
	$scope.messages = messages;

	$scope.renderMessage = function(message){
        var replacedText = message.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
        var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
        return $sce.trustAsHtml(replacedText);
    };

	$scope.searchResults = [];
	$scope.keyPress = function(searchValue){
		SearchModel.search(searchValue).then(function(models){
			$scope.searchResults = models;
		});
	};

}]);
