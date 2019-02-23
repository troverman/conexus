angular.module( 'conexus.developers', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'developers', {
        url: '/developers',
        views: {
            "main": {
                controller: 'DevelopersController',
                templateUrl: 'developers/index.tpl.html'
            }
        }
    });
}])

.controller( 'DevelopersController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'contentList', 'ContentModel', 'lodash', 'ReactionModel', 'titleService', function DevelopersController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, contentList, ContentModel, lodash, ReactionModel, titleService, transaction ) {
    titleService.setTitle('Developers | CRE8.XYZ');
    
}]);
