angular.module( 'conexus.association', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'association', {
		url: '/association/:id',
		views: {
			"main": {
				controller: 'AssociationCtrl',
				templateUrl: 'association/index.tpl.html'
			}
		},
        resolve:{
            validations: ['$stateParams', 'ValidationModel', function($stateParams, ValidationModel){
                return ValidationModel.getSome({association:$stateParams.id, limit:10, skip:0, sort:'createdAt DESC'});
            }],
        }
	});
}])

.controller( 'AssociationCtrl', ['$sce', '$scope', 'validations', function AssociationController( $sce, $scope, validations ) {

    $scope.validations = validations;
    //ASSOCIATION IS JSON CONTEXT + AVG SCORE && SET OF ASSOCIATED MODELS

}]);