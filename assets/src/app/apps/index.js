angular.module( 'conexus.apps', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'apps', {
        url: '/apps',
        views: {
            "main": {
                controller: 'AppsController',
                templateUrl: 'apps/index.tpl.html'
            }
        },

        resolve: {
            apps: ['AppModel', function(AppModel){
                return AppModel.get({limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }

    });
}])

.controller( 'AppsController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'AppModel', 'apps', 'ReactionModel', function AppsController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, AppModel, apps, ReactionModel ) {

    $scope.apps = apps;

    $scope.apps.map(function(obj){obj.model = 'APP'; return obj});


    //TODO: BETTER | TAG STORAGE
    $scope.loadTags = function(){
        $scope.tags = $scope.apps.map(function(obj){
            if(obj.tags){obj.tags = obj.tags.split(',')}
            return obj.tags;
        });
        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.sortedTagArray = [];
        for (x in $scope.tags){
            var amount = countInArray($scope.tags, $scope.tags[x]);
            if ($scope.sortedTagArray.map(function(obj){return obj.element}).indexOf($scope.tags[x]) == -1){
                $scope.sortedTagArray.push({amount:amount, element:$scope.tags[x]})
            }
        }
        $scope.sortedTagArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    };
    $scope.loadTags();

    $scope.filterSet = {tags: $scope.sortedTagArray};

}]);
