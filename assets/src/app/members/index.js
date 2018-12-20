angular.module( 'conexus.members', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'members', {
		url: '/members',
		views: {
			"main": {
				controller: 'MembersCtrl',
				templateUrl: 'members/index.tpl.html'
			}
		},
		resolve: {
            members: ['UserModel', function(UserModel){
                return UserModel.getSome('', '', 100, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'MembersCtrl', ['$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'members', 'SearchModel', 'titleService', 'UserModel', function MembersController( $rootScope, $sailsSocket, $sce, $scope, config, lodash, members, SearchModel, titleService, UserModel ) {
	titleService.setTitle('Members | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.members = members;
    $scope.selectedSort = 'createdAt DESC';
    $scope.skip = 0;
    
    //DEPRECIATE 'TOTAL WORK'
    $scope.sortText = {'totalWork DESC':'Total Reputation','createdAt DESC':'Date Joined'}

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 100;
        $rootScope.stateIsLoading = true;
        UserModel.getSome(100, $scope.skip, $scope.selectedSort).then(function(members) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.members, members);
        });
    };

    $scope.search = function(){
        UserModel.getSome('search', $scope.searchQuery, 100, 0, 'createdAt DESC').then(function(models){
            $scope.members = models;
        });
    };

    $scope.selectSort = function(sort){
        $scope.selectedSort = sort;
        $rootScope.stateIsLoading = true;
        UserModel.getSome(100, $scope.skip, $scope.selectedSort).then(function(members) {
            $rootScope.stateIsLoading = false;
            $scope.members = members;
        });
    };

}]);