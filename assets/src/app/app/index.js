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
        },
        resolve: {
            app: ['$stateParams', 'ContentModel', function($stateParams, AppModel){
                return AppModel.getSome({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'AppController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', '$stateParams', 'app', 'titleService', function AppController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, $stateParams, app, titleService ) {
    
    if (app){
        $scope.app=app;
    }
    else{
        $scope.app = {title:$stateParams.id, description:'CRE8.XYZ CORE PROTOCOLS; ALL MODELS', manifold:'CRE8+', tags:'CRE8,CORE'};
        $scope.app.tags = $scope.app.tags.split(',');
    }

    $scope.app.model = 'APP';

   
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
