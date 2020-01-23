angular.module( 'conexus.block', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'block', {
		url: '/block/:id',
		views: {"main": {controller: 'BlockCtrl', templateUrl: 'block/index.tpl.html'}}
	});
}])
.controller( 'BlockCtrl', ['$scope', function BlockCtrl($scope ) {
	$scope.transactions = [];
    for(var i=0;i<1000;i++){$scope.transactions.push({id:Math.random(),data:'JSON '+Math.random()})}
}]);