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

.controller( 'ProjectsCtrl', ['$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'ProjectModel', 'projects', 'SearchModel', 'titleService', function ProjectsController( $rootScope, $sailsSocket, $sce, $scope, config, lodash, ProjectModel, projects, SearchModel, titleService ) {
	titleService.setTitle('Projects | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newProject = {};
    $scope.newProjectToggleVar = false;
    $scope.selectedSort = 'createdAt DESC';
    $scope.skip = 0;
    $scope.sortText = {'trendingScore DESC':'Trending','createdAt DESC':'Date Created','memberCount DESC': 'Member Count'}
    $scope.projects = projects;

    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.options = {scrollwheel: false};
    
    //TODO: BETTER | BETTER QUERIES
    for (x in projects){
        if (projects[x].location){
            $scope.markers.push({
                id:projects[x].id,
                content:projects[x].title,
                coords:{
                    latitude:projects[x].location.lat,
                    longitude:projects[x].location.lng
                }
            });
        }
    }

    $scope.createProject = function(newProject) {
        $scope.newProject.user = $scope.currentUser.id;
        ProjectModel.create($scope.newProject).then(function(model) {
            $scope.newProject = {};
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

    $scope.renderContent = function(content){
        if (content){
            if (!content.includes('>')){
                var replacedText = content.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                return $sce.trustAsHtml(replacedText);
            }
            else{return $sce.trustAsHtml(content)}
        }
    };

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        ProjectModel.getSome('search', $scope.searchQuery, 0, 20, 'createdAt DESC').then(function(projects){
            $rootScope.stateIsLoading = false;
            $scope.projects = projects;
        });
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