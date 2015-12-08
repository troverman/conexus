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
			}

		}
	});
})

.controller( 'HomeCtrl', function HomeController( $scope, titleService, config, projects, ProjectModel, members, UserModel ) {
	titleService.setTitle('conexus');
	$scope.currentUser = config.currentUser;
	$scope.projects = projects;
	$scope.members = members;
});
