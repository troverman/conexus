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

.controller( 'AccountCtrl', ['$location', '$rootScope', '$scope', 'AppModel', 'AssociationModel', 'AttentionModel', 'titleService', 'Upload', 'UserModel', function AccountController( $location, $rootScope, $scope, AppModel, AssociationModel, AttentionModel, titleService, Upload, UserModel ) {
	
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

    $scope.apps = [];
    AppModel.get({limit:100, skip:0, sort:'createdAt DESC'}).then(function(apps){
        $scope.apps = apps;
        console.log(apps)
    });

    //LOL COMPLEX QUERY BETTER FILTERING ETC
    AttentionModel.get({creator:$rootScope.currentUser.id, app:'HUMAN', limit:100, skip:0, sort:'createdAt DESC'}).then(function(humanAttention){
        if (humanAttention){$scope.humanAttention = humanAttention.map(function(obj){obj.model = 'ATTENTION';return obj});}
    });

    //CONNECT TO PEER
    AttentionModel.get({creator:$rootScope.currentUser.id, app:'MACHINE', limit:100, skip:0, sort:'createdAt DESC'}).then(function(machineAttention){
        if (machineAttention){$scope.machineAttention = machineAttention.map(function(obj){obj.model = 'ATTENTION';return obj});}
    });

    //APPS
    var associationQuery = {
        member:$rootScope.currentUser.id,
        limit:10, 
        skip:0, 
        sort:'createdAt DESC'
    };
    //AssociationModel.get(associationQuery).then(function(associations){
    //    console.log(associations);
    //    $scope.associations = associations;
    //});

    $scope.myApps = $scope.currentUser.apps;

    console.log($scope.myApps);

    //return my apps first 
    //member-app association

    //APP-MEMBER ASSOCIATION (AND DATA)
    //MEMBER-APP DATA
    //MEMBER APP DATA DEFINED IN MEMBER APP CONNECTION
    console.log($scope.currentUser)

    $scope.selectTab = function(model){$scope.selectedTab = model;};
    $scope.editAccount = function () {UserModel.update($scope.newAccountInformation).then(function(model){$scope.editAccountToggleVar = false;});};
    $scope.editAccountToggle = function () {$scope.editAccountToggleVar = $scope.editAccountToggleVar ? false : true;};

    $scope.lookupBalance = function(){
        if ($scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = $scope.balance[$scope.balanceLook]}
        if (!$scope.balance[$scope.balanceLook]){$scope.balanceLookupValue = 0}
    };

    //TODO:
	$scope.uploadAvatar = function(file){};

}]);