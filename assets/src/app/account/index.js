angular.module( 'conexus.account', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'account', {
		url: '/account',
		views: {
			"main": {
				controller: 'AccountCtrl',
				templateUrl: 'account/index.tpl.html'
			}
		}
	});
}])

.controller( 'AccountCtrl', ['$location', '$scope', 'config', 'titleService', 'Upload', 'UserModel', function AccountController( $location, $scope, config, titleService, Upload, UserModel ) {
	titleService.setTitle('Account | CRE8.XYZ');
	$scope.currentUser = config.currentUser;
    $scope.editAccountToggleVar = false;
    $scope.newAccountInformation = $scope.currentUser;

    $scope.gpsTracking = true; //LOCATION MAPPING
    $scope.notifications = true;
    $scope.browserMining = true;

	if(!$scope.currentUser){$location.path('/')}

    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];

    //TODO: BETTER
    UserModel.getByUsername($scope.currentUser.username).then(function(member){
        $scope.newAccountInformation = member
        $scope.currentUser = member;
        $scope.balance = member.balance;
        $scope.reputation = member.reputation;
    });

    $scope.editAccount = function () {
        //UserModel.update($scope.newAccountInformation).then(function(){
            //DONE
        //});
    };

    $scope.editAccountToggle = function () {
        $scope.editAccountToggleVar = $scope.editAccountToggleVar ? false : true;
    };

     //TODO SERVER | CHAIN
    $scope.lookupBalance = function(){
        //$scope.balanceLook = $scope.balanceLook.toLowerCase();
        if ($scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = $scope.balance[$scope.balanceLook]}
        if (!$scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = 0}
    };

    $scope.lookupReputation = function(){
        //$scope.reputationLook = $scope.reputationLook.toLowerCase();
        if ($scope.reputation[$scope.reputationLook]){$scope.reputationLookupValue = $scope.reputation[$scope.reputationLook]}
        if (!$scope.reputation[$scope.reputationLook]){$scope.reputationLookupValue = 0;}
    };
		
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
    };

}]);