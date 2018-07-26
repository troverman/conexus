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
                return ProjectModel.getSome(100, 0, 'createdAt DESC');
            }]
        }
	});
}])

.controller( 'ProjectsCtrl', ['$sailsSocket', '$scope', 'config', 'lodash', 'ProjectModel', 'projects', 'titleService', function ProjectsController( $sailsSocket, $scope, config, lodash, ProjectModel, projects, titleService ) {
	titleService.setTitle('projects | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newProject = {};
    $scope.newProjectToggleVar = false;
    $scope.selectedSort = 'createdAt DESC';
    $scope.projects = projects;

    $scope.createProject = function(newProject) {
        $scope.newProject.user = $scope.currentUser.id;
        ProjectModel.create($scope.newProject).then(function(model) {
            $scope.newProject = {};
        });
    };

    //TODO: FILTERS ETC
    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 100;
        //$rootScope.stateIsLoading = true;
        ProjectModel.getSome(100, $scope.skip, $scope.selectedSort).then(function(projects) {
            //$rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.projects, projects);
        });
    };

    $scope.newProjectToggle = function () {
        $scope.newProjectToggleVar = $scope.newProjectToggleVar ? false : true;
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