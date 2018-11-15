angular.module( 'conexus.validation', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'validation', {
        url: '/validation/:id',
        views: {
            "main": {
                controller: 'ValidationController',
                templateUrl: 'validation/index.tpl.html'
            }
        },
        resolve: {
            validation: ['$stateParams', 'ValidationModel', function($stateParams, ValidationModel){
                return ValidationModel.getSome('id', $stateParams.id, 1, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'ValidationController', ['$mdSidenav', '$location', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'titleService', 'validation', function ValidationController( $mdSidenav, $location, $rootScope, $sailsSocket, $sce, $scope, config, titleService, validation) {
    titleService.setTitle('Validation | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newContent = {};

    //CAN IMPROVE EFFIC 
    $scope.reputationList = [];
    $scope.reputationWeightedList = []
    $scope.validation = validation[0];
    $scope.validationList = [];

    for (x in Object.keys($scope.validation.validation)){
        $scope.validationList.push([Object.keys($scope.validation.validation)[x], $scope.validation.validation[Object.keys($scope.validation.validation)[x]]]);
        $scope.reputationList.push([Object.keys($scope.validation.reputation)[x], $scope.validation.reputation[Object.keys($scope.validation.reputation)[x]]]);

        //SOME WEIGHING PROTOCL HERE -- CAN BE FUNCTIONAL.. SIMPLE MULTIPLICATION NOW
        $scope.reputationWeightedList.push([Object.keys($scope.validation.reputation)[x], $scope.validation.reputation[Object.keys($scope.validation.reputation)[x]]*$scope.validation.validation[Object.keys($scope.validation.validation)[x]]]);
    }

    $scope.validationColumn = {
        chart: {
            zoomType: 'x',
        },
        series: [{
            id: 'validation',
            type: 'column',
            name: 'Validation',
            data: [],
            yAxis: 0
        },{
            id: 'reputation',
            type: 'column',
            name: 'Reputation',
            data: [],
            yAxis: 1
        },{
            id: 'reputationWeighted',
            type: 'column',
            name: 'Reputation Weighted Validation',
            data: [],
            yAxis: 2
        }],
        title: {
            text: ''
        },
        xAxis: {
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {text: null},
            categories: [],
        },
        yAxis: [{
            title: {text: null}
        },{
            title: {text: null},
        },{
            title: {text: null},
        }],
        legend: {enabled: true},
        credits:{enabled:false},
        plotOptions: {
            column: {
                minPointLength: 3
            }
        },
    };

    //CAN IMRPOVE
    for (x in $scope.validationList){
        $scope.validationColumn.series[0].data.push($scope.validationList[x][1]);
        $scope.validationColumn.series[1].data.push($scope.reputationList[x][1]);

        //SOME WEIGHING PROTOCL HERE -- CAN BE FUNCTIONAL.. SIMPLE MULTIPLICATION NOW
        //$scope.validationColumn.series[2].data.push($scope.reputationList[x][1]*$scope.validationList[x][1]);
        $scope.validationColumn.series[2].data.push($scope.reputationWeightedList[x][1]);

        $scope.validationColumn.xAxis.categories.push($scope.validationList[x][0]);

    }

     //YIKES
    $scope.renderContent = function(content){
        if (content){
            if (!content.includes('>')){
                var replacedText = content.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                return $sce.trustAsHtml(replacedText);
            }
            else{return $sce.trustAsHtml(content)}
        }
    };

    $scope.tokenToggle = function(){
        $mdSidenav('tokens').toggle();
        $rootScope.globalTokens = $scope.tokens;
    };


}]);
