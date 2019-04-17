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
        resolve:{
            token: ['$stateParams', 'TokenModel', function($stateParams, TokenModel) {
                return TokenModel.getSome({string:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
        }
	});
}])

//MARKETS, VS TOKENS, VS MARKET, VS TOKEN

.controller( 'TokenCtrl', ['$scope', '$stateParams', 'config', 'titleService', 'token', function MarketController( $scope, $stateParams, config, titleService, token ) {
    $scope.currentUser = config.currentUser;
    $scope.token = token[0];

    titleService.setTitle('Token | ' + $scope.token.string + ' | CRE8.XYZ');
    
}]);