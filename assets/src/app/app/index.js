angular.module( 'conexus.app', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'app', {
        url: '/app/:id',
        views: {
            "main": {
                controller: 'AppController',
                templateUrl: 'app/index.tpl.html'
            }
        }
    });
}])

.controller( 'AppController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', '$stateParams', 'titleService', function AppController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, $stateParams, titleService ) {
    
    $scope.app = {title:$stateParams.id, description:'CRE8.XYZ CORE PROTOCOLS; ALL MODELS', manifold:'CRE8+', tags:'CRE8,CORE'};
    $scope.app.tags = $scope.app.tags.split(',');

    titleService.setTitle($scope.app.title + ' | App | CRE8.XYZ');

    //LOOK AT ALL FILES
    //ASSOCIATED CONTENT (TYPE CODE / PROTOCOL) AS CODE.. 
    //UNIFY MODEL(S) ?
    //.git repo.. etc

    $scope.app.protocols = JSON.stringify([
        {
            string:'STRUCUTRE',
        },
        {
            string:'LANGUAGE',
        },
        {
            string:'PROJECT',
        },
        {
            string:'TASK',
        },
        {
            string:'TIME',
        }
    ], null, 4);


}]);
