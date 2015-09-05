angular.module( 'conexus.project', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'project', {
		url: '/project/:projectID',
        controller: function($scope, $stateParams) {
            // get the id
            $scope.id = $stateParams.projectID;

        },
		views: {
			"main": {
				controller: 'ProjectCtrl',
				templateUrl: 'project/index.tpl.html'
			}
		}
	});
})

.controller( 'ProjectCtrl', function ProjectController( $scope, titleService ) {
	titleService.setTitle('project');
});