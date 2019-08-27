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
            }]
        }
	});
}])

.controller( 'AssociationCtrl', ['$location', '$sailsSocket', '$sce', '$scope', 'association', 'ValidationModel', 'titleService', function AssociationController( $location, $sailsSocket, $sce, $scope, association, ValidationModel, titleService ) {

	$scope.association = association;
    if(!$scope.association){$location.path('/')}
    $scope.association.model = 'ASSOCIATION';

    console.log($scope.association);

    $scope.tokens = [
        {string:'CRE8+ASSOCIATION+'+$scope.association.id, amount:1},
        {string:'CRE8+ASSOCIATION+'+$scope.association.associatedModels[0].id+'+'+$scope.association.associatedModels[1].id, amount:1}
    ]
    
    titleService.setTitle('Association | '+$scope.association.id + ' | CRE8.XYZ');

    var validationQuery = {
        association:[$scope.association.associatedModels[0].id,$scope.association.associatedModels[1].id], 
        limit:10, 
        skip:0, 
        sort:'createdAt DESC'
    };
    ValidationModel.getSome(validationQuery).then(function(validations){
        $scope.validations = validations;
    });

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

    $scope.contextList = [];
    if ($scope.association.context){
        for (x in Object.keys($scope.association.context)){
            $scope.contextList.push([Object.keys($scope.association.context)[x], $scope.association.context[Object.keys($scope.association.context)[x]]]);
        }
    }

    //TODO: CAN IMRPOVE
    for (x in $scope.contextList){
        $scope.associationColumn.series[0].data.push($scope.contextList[x][1]);
        $scope.associationColumn.xAxis.categories.push($scope.contextList[x][0]);
    }

    $scope.selectedTab = 'INFORMATION';
    $scope.selectTab = function(model){$scope.selectedTab = model;};

    $sailsSocket.subscribe('association', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                if ($scope.association.id == envelope.data.id){
                    $scope.association.attention = envelope.data.attention;
                }
                break;
        }
    });

}]);