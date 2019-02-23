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

.controller( 'DevelopersController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'ContentModel', 'lodash', 'ReactionModel', 'titleService', function DevelopersController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, ContentModel, lodash, ReactionModel, titleService, transaction ) {
    titleService.setTitle('Developers | CRE8.XYZ');
    
}]);
