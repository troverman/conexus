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
            association: ['$stateParams', 'AssociationModel', function($stateParams, AssociationModel){
                return AssociationModel.get({id:$stateParams.id});
            }],
            validations: ['$stateParams', 'ValidationModel', function($stateParams, ValidationModel){
               // return ValidationModel.getSome({association:$stateParams.id, limit:10, skip:0, sort:'createdAt DESC'});
               return null
            }],
        }
	});
}])

.controller( 'AssociationCtrl', ['$sce', '$scope', 'association', 'validations', function AssociationController( $sce, $scope, association, validations ) {

    console.log(association)
	$scope.association = association;
    $scope.validations = validations;
    //ASSOCIATION IS JSON CONTEXT + AVG SCORE && SET OF ASSOCIATED MODELS

    $scope.associationColumn = {
        chart: {zoomType: 'x'},
        series: [{
            id: 'association',
            type: 'column',
            name: 'Validation',
            data: [],
            yAxis: 0
        }],
        title: {text: ''},
        xAxis: {
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {text: null},
            categories: [],
        },
        yAxis: [
            {title: {text: null}},
            {title: {text: null}},
            {title: {text: null}}
        ],
        legend: {enabled: false},
        credits:{enabled:false},
        plotOptions: {column: {minPointLength: 3}},
    };

    //MAP VALIDATIONS

}]);