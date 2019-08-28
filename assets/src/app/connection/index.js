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

.controller( 'ConnectionCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'connection', 'ReactionModel', 'titleService', function ConnectionController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, connection, ReactionModel, titleService ) {
    titleService.setTitle('Connection | CRE8.XYZ');
    $scope.connection = connection;
    if(!$scope.connection){$location.path('/')}
    $scope.connection.model = 'CONNECTION';
	//TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction = {
                amount:1,
                type:type,
                user:$rootScope.currentUser.id,
                associatedModels:[{type:'CONNECTION', id:item.id}],
            };
            $scope.connection.data.apps.reactions[type]++;
            ReactionModel.create($scope.newReaction);
            $rootScope.pop(type, item.id);
        }
        else{$mdSidenav('login').toggle()}
    }; 

    $sailsSocket.subscribe('connection', function (envelope) {
        console.log(envelope)
        switch(envelope.verb) {
            case 'created':
                if ($scope.connection.id == envelope.data.id){
                    $scope.connection.data.apps.attention = envelope.data.data.apps.attention;
                }
                break;
        }
    });
    
}]);