angular.module( 'conexus.nav', [
])

.controller( 'NavCtrl', ['$location', '$mdSidenav', '$rootScope', '$scope', '$state', 'config', 'PostModel', 'TransactionModel', function NavController( $location, $mdSidenav, $rootScope, $scope, $state, config, PostModel, TransactionModel ) {
    $scope.currentUser = config.currentUser;
    $scope.newContent = {};
    $scope.newTransaction = {};
    $scope.selectedType = 'POST';

    if ($scope.currentUser){
        $scope.newTransaction.from = $scope.currentUser.id
    }

    $rootScope.$on("$stateChangeSuccess", function() {
    	window.scrollTo(0, 0);
        $mdSidenav('nav').close();
    });

    $scope.createContent = function() {
        if ($scope.currentUser){
            if(!$scope.newContent.parent){$scope.newContent.profile = $scope.currentUser.id}
            $scope.newContent.user = $scope.currentUser.id;
            $scope.newContent.tags = $scope.newContent.tags.map(function(obj){
                return obj.text
            }).join(",");
            $scope.newContent.type = $scope.selectedType;
            PostModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
                $mdSidenav('content').close();
            });
        }
        else{$location.path('/login')}
    };

    $scope.createTransaction = function(){
        if ($scope.currentUser){
            $scope.newTransaction.tags = $scope.newTransaction.tags.map(function(obj){
                return obj.text
            }).join(",");
            TransactionModel.create($scope.newTransaction).then(function(model){
                $scope.newTransaction = {};
                $mdSidenav('transaction').close();
            });
        }
        else{$location.path('/login')}
    };

    $scope.sideNavToggle = function(){$mdSidenav('nav').toggle();};
    $scope.selectType = function(type){$scope.selectedType = type;};

}]);