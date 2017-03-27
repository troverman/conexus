angular.module( 'conexus.projects', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'projects', {
		url: '/projects',
		views: {
			"main": {
				controller: 'ProjectsCtrl',
				templateUrl: 'projects/index.tpl.html'
			}
		},
		resolve: {
            projects: ['ProjectModel', function(ProjectModel) {
                return ProjectModel.getAll();
            }]
        }
	});
}])

.controller( 'ProjectsCtrl', ['$sailsSocket', '$scope', 'config', 'lodash', 'ProjectModel', 'projects', 'titleService', function ProjectsController( $sailsSocket, $scope, config, lodash, ProjectModel, projects, titleService ) {
	titleService.setTitle('projects - conex.us');
    $scope.currentUser = config.currentUser;
    $scope.projects = projects;
    $scope.newProject = {};
    $scope.newProjectToggleVar = false;

    $scope.newProjectToggle = function () {
        $scope.newProjectToggleVar = $scope.newProjectToggleVar ? false : true;
    };

    $scope.createProject = function(newProject) {
        newProject.user = config.currentUser.id;
        ProjectModel.create(newProject).then(function(model) {
            $scope.newProject = {};
        });
    };

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

}]);