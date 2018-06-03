angular.module( 'conexus.works', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'works', {
		url: '/work',
		views: {
			"main": {
				controller: 'WorksCtrl',
				templateUrl: 'works/index.tpl.html'
			}
		},
        resolve: {
            work: ['WorkModel', function(WorkModel){
                return WorkModel.getAll();
            }],
        }
	});
}])

.controller( 'WorksCtrl', ['$scope', 'titleService', 'work',, function TasksController( $scope, titleService, work ) {
	titleService.setTitle('Works | conex.us');
	$scope.work = work.reverse();
}]);