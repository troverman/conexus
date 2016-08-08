angular.module( 'conexus.home', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		},
		resolve:{
			projects: function(ProjectModel) {
				return ProjectModel.getAll().then(function(models) {
                    return models;
                });
			},
			members: function(UserModel){
				return UserModel.getAll().then(function(models) {
                    return models;
                });
			},
			messages: function(MessageModel){
				return MessageModel.getAll();
			}

		}
	});
})

.controller( 'HomeCtrl', function HomeController( $scope, $q, titleService, config, projects, ProjectModel, members, messages, UserModel, SearchModel ) {
	titleService.setTitle('conex.us');
	$scope.currentUser = config.currentUser;
	$scope.projects = projects;
	$scope.members = members;
	$scope.messages = messages;

	$scope.searchResults = [];
	$scope.keyPress = function(searchValue){
		SearchModel.search(searchValue).then(function(models){
			$scope.searchResults = models;
		});
	}


});
