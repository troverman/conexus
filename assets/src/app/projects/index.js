angular.module( 'conexus.projects', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'projects', {
		url: '/projects',
		views: {
			"main": {
				controller: 'ProjectsCtrl',
				templateUrl: 'projects/index.tpl.html'
			}
		},
		resolve: {
            projects: function(ProjectModel) {
                return ProjectModel.getAll();
            }
        }
	});
})

.controller( 'ProjectsCtrl', function ProjectsController( $scope, titleService, $sailsSocket, lodash, config, ProjectModel, projects ) {
	titleService.setTitle('projects - conex.us');
    $scope.currentUser = config.currentUser;
    $scope.projects = projects;
    $scope.newProject = {};
    $scope.newProjectToggleVar = false;

    $sailsSocket.subscribe('project', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.projects.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.projects, {id: envelope.id});
                break;
        }
    });

    $scope.newProjectToggle = function () {
        $scope.newProjectToggleVar = $scope.newProjectToggleVar ? false : true;
    };

    $scope.createProject = function(newProject) {
        newProject.user = config.currentUser.id;
        ProjectModel.create(newProject).then(function(model) {
            $scope.newProject = {};
        });
    };

});