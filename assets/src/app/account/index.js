angular.module( 'conexus.account', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'account', {
		url: '/account',
		views: {
			"main": {
				controller: 'AccountCtrl',
				templateUrl: 'account/index.tpl.html'
			}
		},
		//resolve: {
        //    UserModel: 'UserModel',
        //    user: function(UserModel){
        //        return UserModel.getMine();
        //    }
        //}
	});
})

.controller( 'AccountCtrl', function AccountController( $location, $scope, config, titleService, Upload, UserModel ) {
	titleService.setTitle('account - conex.us');
	$scope.currentUser = config.currentUser;
	if(!$scope.currentUser){$location.path('/')}
		
	$scope.uploadAvatar = function(file){
        $scope.avatarLoading = true;
        Upload.upload({
            url: '/api/user/upload',
            method: 'POST',
            data: {picture: file}
        })
        .then(function(response){
            $scope.avatarLoading = false;
			$scope.currentUser.avatarUrl = response.data.amazonUrl;
            accountSave();
        },
        function(err){
            $scope.avatarLoading = false;
        },
        function (evt) {
            $scope.avatarPercentage = parseInt(100.0 * evt.loaded / evt.total);;
        })
    };

    function accountSave(){
        $scope.saving = true;
        var model = {
            id: $scope.currentUser.id,
            avatarUrl: $scope.currentUser.avatarUrl,
        };
        return UserModel.update(model);
    }

});