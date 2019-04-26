angular.module( 'conexus.token', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'token', {
		url: '/token/:id',
		views: {
			"main": {
				controller: 'TokenCtrl',
				templateUrl: 'token/index.tpl.html'
			}
		},

        //TODO: DEPRECIATE RESOLVE
        resolve:{
            token: ['$stateParams', 'TokenModel', function($stateParams, TokenModel) {
                return TokenModel.getSome({string:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
        }
	});
}])

//TODO: MARKET, VS TOKEN
.controller( 'TokenCtrl', ['$scope', 'token', function MarketController( $scope, token ) {
    $scope.token = token[0];    
}]);