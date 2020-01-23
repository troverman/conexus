angular.module( 'conexus.connections', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'connections', {
		url: '/connections',
		views: {"main": {controller: 'ConnectionsCtrl', templateUrl: 'connections/index.tpl.html'}},
        resolve: {connections: ['ConnectionModel', function(ConnectionModel){return ConnectionModel.get({limit:20, skip:0, sort:'createdAt DESC'});}],}
	});
}])
.controller( 'ConnectionsCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$scope', 'connections', function TasksController( $location, $mdSidenav, $rootScope, $sailsSocket, $scope, connections ) {
    $scope.connections = connections;
    //SOCKETS
    $sailsSocket.subscribe('connection', function (envelope) {
        console.log(envelope);
        if (envelope.verb == 'create'){$scope.connections.unshift(envelope.data);}
        if (envelope.verb == 'update'){
            var index = $scope.connections.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){$scope.connections[index] = envelope.data;}
        }
    });
}]);