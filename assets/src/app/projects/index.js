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

.controller( 'ProjectsCtrl', ['$rootScope', '$sailsSocket', '$scope', 'config', 'lodash', 'ProjectModel', 'projects', 'SearchModel', 'titleService', function ProjectsController( $rootScope, $sailsSocket, $scope, config, lodash, ProjectModel, projects, SearchModel, titleService ) {
	titleService.setTitle('Projects | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newProject = {};
    $scope.newProjectToggleVar = false;
    $scope.selectedSort = 'createdAt DESC';
    $scope.skip = 0;
    $scope.sortText = {'trendingScore DESC':'Trending','createdAt DESC':'Date Created','memberCount DESC': 'Member Count'}
    $scope.projects = projects;

    $scope.createProject = function(newProject) {
        $scope.newProject.user = $scope.currentUser.id;
        ProjectModel.create($scope.newProject).then(function(model) {
            $scope.newProject = {};
        });
    };

    $scope.keyPress = function(searchValue){
        SearchModel.search(searchValue).then(function(models){
            $scope.projects = models;
        });
    };

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 100;
        $rootScope.stateIsLoading = true;
        ProjectModel.getSome(100, $scope.skip, $scope.selectedSort).then(function(projects) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.projects, projects);
        });
    };

    $scope.newProjectToggle = function () {
        $scope.newProjectToggleVar = $scope.newProjectToggleVar ? false : true;
    };

    $scope.selectSort = function(sort){
        $scope.selectedSort = sort;
        $rootScope.stateIsLoading = true;
        ProjectModel.getSome(100, $scope.skip, $scope.selectedSort).then(function(projects) {
            $rootScope.stateIsLoading = false;
            $scope.projects = projects;
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