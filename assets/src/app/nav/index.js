angular.module( 'conexus.nav', [
])

.controller( 'NavCtrl', ['$location', '$mdSidenav', '$rootScope', '$scope', '$state', 'config', 'PostModel', 'TransactionModel', function NavController( $location, $mdSidenav, $rootScope, $scope, $state, config, PostModel, TransactionModel ) {
    $scope.currentUser = config.currentUser;
    $scope.confirm = {};
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
    //TODO: FIX
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

    //TODO: FACTOR LOADING HERE
    $rootScope.$on("$stateChangeStart", function() {
        $rootScope.to = null;
        $rootScope.associatedModel = null;
        $mdSidenav('nav').close();
        $mdSidenav('subNav').close();
        $mdSidenav('content').close();
        $mdSidenav('login').close();
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
            if ($scope.newContent.tags){
                $scope.newContent.tags = $scope.newContent.tags.map(function(obj){
                    return obj.text
                }).join(",");
            }
            $scope.newContent.type = $scope.selectedType;
            PostModel.create($scope.newContent).then(function(model) {

                $scope.confirm.modelType = 'CONTENT';
                $scope.confirm = $scope.newContent;
                $scope.newContent = {};

                $mdSidenav('content').close();
                //setTimeout(function () {
                //    $mdSidenav('confirm').open();
                //}, 500);
                //setTimeout(function () {
                //    $mdSidenav('confirm').close();
                //}, 5000);

            });
        }
        else{$location.path('/login')}
    };

    //$scope.createItem = function() {};
    //$scope.createOrder = function() {};
    //$scope.createTask = function() {};

    $scope.createTransaction = function(){
        if ($scope.currentUser){
            $scope.newTransaction.tags = $scope.newTransaction.tags.map(function(obj){
                return obj.text
            }).join(",");
            TransactionModel.create($scope.newTransaction).then(function(model){

                $scope.confirm.modelType = 'TRANSACTION';
                $scope.confirm = $scope.newTransaction;
                $scope.newTransaction = {};

                $mdSidenav('transaction').close();
                //setTimeout(function () {
                //    $mdSidenav('confirm').open();
                //}, 500);
                //setTimeout(function () {
                //    $mdSidenav('confirm').close();
                //}, 2000);

            });
        }
        else{$location.path('/login')}
    };

    //MEH
    $scope.loginToggle = function(){
        $mdSidenav('nav').close();
        $mdSidenav('subNav').close();
        $mdSidenav('content').close();
        $mdSidenav('tokens').close();
        $mdSidenav('transaction').close();
        $mdSidenav('login').toggle();
    };
    $scope.sideNavToggle = function(){
        $mdSidenav('subNav').close();
        $mdSidenav('content').close();
        $mdSidenav('login').close();
        $mdSidenav('tokens').close();
        $mdSidenav('transaction').close();
        $mdSidenav('nav').toggle();
    };
    $scope.selectType = function(type){$scope.selectedType = type;};

}]);