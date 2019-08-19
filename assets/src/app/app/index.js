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
            app: ['$stateParams', 'AppModel', function($stateParams, AppModel){
                return AppModel.getSome({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'AppController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', '$stateParams', 'app', 'titleService', 'toaster', 'ValidationModel', function AppController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, $stateParams, app, titleService, toaster, ValidationModel ) {
    
    $scope.app = app;
    if(!$scope.app){$location.path('/')}
    $scope.app.model = 'APP';
    $scope.app.protocols = JSON.stringify($scope.app.protocols, null, 4);

    if ($rootScope.currentUser){
        $scope.myApps = $rootScope.currentUser.apps;
        console.log($scope.myApps);
    }

    $scope.app.isAssociated = false;

    titleService.setTitle($scope.app.title + ' | App | CRE8.XYZ');

    //LOOK AT ALL FILES
    //ASSOCIATED CONTENT (TYPE CODE / PROTOCOL) AS CODE.. 
    //UNIFY MODEL(S) ?
    //.git repo.. etc

    $scope.selectedTab = 'INFORMATION';
    $scope.selectTab = function(model){$scope.selectedTab = model;};

    //GENERIC ASSOCIATE FXN
    $scope.associateApp = function(model){
        if ($rootScope.currentUser){
            var validationModel = {
                user:$rootScope.currentUser.id,
                creator:$rootScope.currentUser.id,
                validation:{self:100},
                associatedModels:[
                    {type:'MEMBER', id:$rootScope.currentUser.id},
                    {type:'APP', id:model.id},
                ],
                //app specific
                data:{}
            };

            if (model.isAssociated == false){
                ValidationModel.create(validationModel).then(function(newValidation){
                    $scope.app.isAssociated = true;
                    $scope.pop('Associated App!', 'You are now connected with '+ model.title + '!');
                });
            }

            else if (model.isAssociated == true){
                $scope.app.isAssociated = false;
                $scope.pop('Removed App!', 'It\'s all good!');

                //var validationModel = {
                //    user:$rootScope.currentUser.id,
                //    creator:$rootScope.currentUser.id,
                //    validation:{self:0},
                //    associatedModels:[
                //        {type:'MEMBER', id:$rootScope.currentUser.id},
                //        {type:'APP', id:model.id},
                //    ],
                //    data:{}
                //};
                //ValidationModel.create(validationModel).then(function(newValidation){
                //    $scope.app.isAssociated = true;
                //    $scope.pop('Associated App!', 'You are now connected with '+ model.title + '!');
                //});

            }
        }
    };

    //TODO: ROOTSCOPE POP

    $scope.pop = function(title, body){
        toaster.pop({
            type:'success',
            title: title,
            body: body,
            onShowCallback: function (toast) { 
                var audio = new Audio('audio/ping.mp3');
                audio.play()
                .then(function(audio){console.log('POP', 'dingdong')})
                .catch(function(err){console.log('ERR POP', err)})
            }
        });
    };

}]);
