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

.controller( 'AccountCtrl', ['$location', '$rootScope', '$scope', 'titleService', 'Upload', 'UserModel', function AccountController( $location, $rootScope, $scope, titleService, Upload, UserModel ) {
	
    titleService.setTitle('Account Settings | CRE8.XYZ');
    if(!$rootScope.currentUser){$location.path('/')}

    $scope.editAccountToggleVar = false;
    $scope.newAccountInformation = $rootScope.currentUser;
    $scope.gpsTracking = true;
    $scope.notifications = true;
    $scope.browserMining = true;
    $scope.recordAttention = true;
    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.selectedTab = 'APPS';

    $scope.selectTab = function(model){$scope.selectedTab = model;};
    $scope.editAccount = function () {UserModel.update($scope.newAccountInformation).then(function(model){$scope.editAccountToggleVar = false;});};
    $scope.editAccountToggle = function () {$scope.editAccountToggleVar = $scope.editAccountToggleVar ? false : true;};

    //TODO: SERVER | CHAIN
    $scope.lookupBalance = function(){
        //$scope.balanceLook = $scope.balanceLook.toLowerCase();
        if ($scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = $scope.balance[$scope.balanceLook]}
        if (!$scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = 0}
    };

    //TODO: SERVER | CHAIN
    $scope.lookupReputation = function(){
        //$scope.reputationLook = $scope.reputationLook.toLowerCase();
        if ($scope.reputation[$scope.reputationLook]){$scope.reputationLookupValue = $scope.reputation[$scope.reputationLook]}
        if (!$scope.reputation[$scope.reputationLook]){$scope.reputationLookupValue = 0;}
    };

    //TODO: IPFS LINKIN
	$scope.uploadAvatar = function(file){
        Upload.upload({url: '/api/user/upload', method: 'POST', data: {picture: file}}).then(function(response){
			$scope.currentUser.avatarUrl = response.data.amazonUrl;
            var model = {
                id: $scope.currentUser.id,
                avatarUrl: $scope.currentUser.avatarUrl,
            };
            UserModel.update(model);
        },
        function (evt) {$scope.avatarPercentage = parseInt(100.0 * evt.loaded / evt.total)})
    };

}]);