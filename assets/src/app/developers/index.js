angular.module( 'conexus.developers', [
])

.config(['$stateProvider', 'hljsServiceProvider', function config( $stateProvider, hljsServiceProvider) {
    $stateProvider.state( 'developers', {
        url: '/developers',
        views: {
            "main": {
                controller: 'DevelopersController',
                templateUrl: 'developers/index.tpl.html'
            }
        }
    });
    hljsServiceProvider.setOptions({
        //tabReplace: '    '
    });
}])

.controller( 'DevelopersController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'ContentModel', 'lodash', 'ReactionModel', 'titleService', 'TransactionModel', function DevelopersController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, ContentModel, lodash, ReactionModel, titleService, TransactionModel ) {
    titleService.setTitle('Developers | CRE8.XYZ');
    $scope.results = '[{}]';
    $scope.apiCall = function(query){
        if (query.model == 'CONTENT'){
            ContentModel.getSome('', '', 10, 0, 'createdAt DESC').then(function(models){
                $scope.results = JSON.stringify(models, null, 2);
            });
        }
        if (query.model == 'TRANSACTION'){
            TransactionModel.getSome('', '', 100, 0, 'createdAt DESC').then(function(models){
                $scope.results = JSON.stringify(models, null, 2);
            });
        }
    };
    //$scope.apiCall();

}]);
