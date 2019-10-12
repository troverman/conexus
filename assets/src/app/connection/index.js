angular.module( 'conexus.connection', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'connection', {
		url: '/connection/:id',
		views: {
			"main": {
				controller: 'ConnectionCtrl',
				templateUrl: 'connection/index.tpl.html'
			}
		},
		resolve: {
            connection: ['$stateParams', 'ConnectionModel', function($stateParams, ConnectionModel){
                return ConnectionModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }]
        }
	});
}])

.controller( 'ConnectionCtrl', ['$location', '$rootScope', '$sailsSocket', '$sce', '$scope', 'AssociationModel', 'connection', 'titleService', function ConnectionController( $location, $rootScope, $sailsSocket, $sce, $scope, AssociationModel, connection, titleService ) {
    titleService.setTitle('Connection | CRE8.XYZ');
    $scope.connection = connection;
    if(!$scope.connection){$location.path('/')}
        
	$scope.selectedTab = 'INFORMATION';
    $scope.selectTab = function(model){$scope.selectedTab = model;};

    //we reduce the self association chains 
    //what is a validaion topologically .. subset of association 
    //(association=association ( how it defines itself ) is validation tree 
    //connection-connection reduction


    var query = {
        filter:JSON.stringify({id:connection.id}),
        limit:100,
        skip:0,
        sort:'createdAt DESC'
    };
    AssociationModel.get(query).then(function(associations){
        $scope.associations = associations;
    });

    $sailsSocket.subscribe('connection', function (envelope) {
        console.log(envelope)
        if (envelope.verb == 'update'){
            if ($scope.connection.id == envelope.data.id){
                $scope.connection.data = envelope.data.data;
            }
        }
    });
    
}]);