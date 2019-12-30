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
                return AppModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'AppController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', '$stateParams', 'app', 'AssociationModel', 'ReactionModel', 'titleService', 'toaster', 'ValidationModel', function AppController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, $stateParams, app, AssociationModel, ReactionModel, titleService, toaster, ValidationModel ) {
    
    $scope.app = app;
    if(!$scope.app){$location.path('/')}

    $scope.app.isAssociated = false;
    $scope.app.model = 'APP';
    $scope.app.protocols = JSON.stringify($scope.app.protocols, null, 4);

    if ($rootScope.currentUser){
        $scope.myApps = $rootScope.currentUser.apps;
        console.log($scope.myApps);
    }

    titleService.setTitle($scope.app.title + ' | App | CRE8.XYZ');

    $scope.selectedTab = 'INFORMATION';
    $scope.selectedTabProtocol = 'PROTOCOLS-PROTOCOLS';

    //or item components :) ;o ;P :P 
    $scope.protocols = [{
        title:'test protocol', id:1
    }];

    $scope.selectTab = function(model){$scope.selectedTab = model;};
    $scope.selectTabProtocol = function(model){$scope.selectedTabProtocol = model;};


    //DO LATER? LIVE.. ? OK (AKA DONT FOCE SAVE AND ENJOI);
    //TODO: NON STATIC --> LOAD FROM APP ASSOCIATIONS 
    //APP CHARTER DEFINES
    //APP META CHARTER IS CREATER CENTRIC 

    //MEMBRE CONNECTION IS ABSTRACT..!! AND DISCRETE.. // connections in terms of associatiosn
    $scope.memberConnections = [    

        {
            //data
            title:'',

            //PARAMETERS PASS TO VALIDATION --> INCLUDE VALIDATION IN PARAMETER OBJ
            parameters:{

                //specific type that is hashed
                address:{
                    type:'string', 
                    validation:{

                        //abstract or discrete
                        //SHOULD BE DEFINED IN THE CONNECTION ( CONNECTION - CONNECTION - VALIDATION )
                        //OKAY DEFINE DIFFERENT TYPE OF APPS . . .
                            //VALIDATION TYPES == VALIDATION TREE; VALIDATION (LATEST )
                        //WHERE WE GET SOMETHING LIKE .. 
                        connection:{
                        //    reduction:'string',
                        //    mappings:'array',
                        //    logic:'function'
                        },

                        parameters:{
                            reduction:'latest', // these are types of validations 
                                                //.. . . .. so what are their self connections . . ? 
                                                //
                        },
                        model:{
                            reduction:'latest'
                        }
                    }
                },

                secret:{
                    type:'string', 
                    hash:true, 
                    validation:{
                        type:'latest',
                        parameters:{
                            reduction:'latest', 
                        }
                    }
                },

                context:{
                    type:'json', 
                    validation:{
                        //HERE IS THE ABSTRACT.. DEFINE THE VALIDATION AS AN APP :) 
                            // (OPINIATED WITH REDUCTION, MAPPINGS (APP DATA IMPORTS), AND LOGIC (CODE))
                            // (YAY!!! ORDER AND VALIDATION COEXISTS TO CREATE PLURALISM MAXIMSM WOO)s
                        type:'preputation weighted int', 
                        parameters:{
                            score:10,
                            reduction:'treeReduce', //type:tree
                            mappings:['reputation'], 
                            logic:'reputationxscore'
                        }
                    }
                }

            }

        }

    ];

    $scope.associateApp = function(model){
        if ($rootScope.currentUser){
            $scope.newValidation = {
                user:$rootScope.currentUser.id,
                creator:$rootScope.currentUser.id,
                context:{self:100},
                associatedModels:[
                    {type:'MEMBER', id:$rootScope.currentUser.id},
                    {type:'APP+'+model.id, id:model.id},
                ],
            };

            if (model.isAssociated == false){
                ValidationModel.create($scope.newValidation).then(function(newValidation){
                    $scope.app.isAssociated = true;
                    $rootScope.pop('Associated App!', 'You are now connected with '+ model.title + '!');
                });
            }

            else if (model.isAssociated == true){
                $scope.app.isAssociated = false;
                $rootScope.pop('Removed App!', 'It\'s all good!');
            }
        }
    };

    $sailsSocket.subscribe('app', function (envelope) {
        console.log(envelope)
        if (envelope.verb == 'update'){
            if ($scope.app.id == envelope.data.id){
                $scope.app.data.apps = envelope.data.data.apps
            }
        }
    });

    $sailsSocket.subscribe('association', function (envelope) {
        if (envelope.verb == 'update'){
            var index = $scope.associations.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){$scope.associations[index] = envelope.data;}
        }
    });

   
}]);
