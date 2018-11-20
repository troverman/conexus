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

    $scope.$watch('$root.to', function() {
        $scope.newTransaction.to = $rootScope.to;
    });

    //TODO: CHANGE PARENT TO ASSOCIATED MODELS
    $scope.$watch('$root.associatedModel', function() {
        $scope.newContent.associatedModels = $rootScope.associatedModel.address;
        $scope.newContent.type = $rootScope.associatedModel.type;

        //CHANGE
        if ($rootScope.associatedModel.type == 'PROFILE'){
            $scope.newContent.profile = $rootScope.associatedModel.address;
        }
        if ($rootScope.associatedModel.type == 'PROJECT'){
            $scope.newContent.project = $rootScope.associatedModel.address;
        }
    });

    //LOADING HERE
    $rootScope.$on("$stateChangeStart", function() {
        $rootScope.to = null;
        $rootScope.associatedModel = null;
        $mdSidenav('nav').close();
        $mdSidenav('subNav').close();
        $mdSidenav('content').close();
        $mdSidenav('tokens').close();
        $mdSidenav('transaction').close();
        //$rootScope.memberUsername = null;
        //$rootScope.projectTitle = null;
    });
    $rootScope.$on("$stateChangeSuccess", function() {
    	window.scrollTo(0, 0);
    });

    //TODO: ASSOCIATED MODELS
    $scope.createContent = function() {
        if ($scope.currentUser){
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