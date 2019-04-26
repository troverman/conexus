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
        
        //TODO: DEPRECIATE RESOLVE
        resolve: {
            validation: ['$stateParams', 'ValidationModel', function($stateParams, ValidationModel){
                return ValidationModel.getSome({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
            contentList: ['validation', 'ContentModel', function(validation, ContentModel){
                return ContentModel.getSome({validation:validation.id, limit:20, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'ValidationController', ['$mdSidenav', '$location', '$rootScope', '$sailsSocket', '$sce', '$scope', 'contentList', 'ReactionModel', 'validation', 'ValidationModel', function ValidationController( $mdSidenav, $location, $rootScope, $sailsSocket, $sce, $scope, contentList, ReactionModel, validation, ValidationModel) {
    

    $scope.validation = validation[0];
    $scope.validation.model = 'VALIDATION';
    
    //TODO: FIX
    $rootScope.associatedModels = [{type:'VALIDATION', address:$scope.validation.id}];

    $scope.contentList = contentList;
    $scope.newContent = {};
    $scope.newReaction = {};
    
    //TODO: CAN IMPROVE EFFIC 
    $scope.reputationList = [];
    $scope.reputationWeightedList = []

    $scope.validationList = [];
    for (x in Object.keys($scope.validation.validation)){
        $scope.validationList.push([Object.keys($scope.validation.validation)[x], $scope.validation.validation[Object.keys($scope.validation.validation)[x]]]);
        $scope.reputationList.push([Object.keys($scope.validation.reputation)[x], $scope.validation.reputation[Object.keys($scope.validation.reputation)[x]]]);
        
        //TODO: CHARTER: SOME WEIGHING PROTOCL HERE -- CAN BE FUNCTIONAL.. SIMPLE MULTIPLICATION NOW
        $scope.reputationWeightedList.push([Object.keys($scope.validation.reputation)[x], $scope.validation.reputation[Object.keys($scope.validation.reputation)[x]]*$scope.validation.validation[Object.keys($scope.validation.validation)[x]]]);
    }

    $scope.validationColumn = {
        chart: {zoomType: 'x'},
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
        legend: {enabled: true},
        credits:{enabled:false},
        plotOptions: {column: {minPointLength: 3}},
    };

    //TODO: CAN IMRPOVE
    for (x in $scope.validationList){
        $scope.validationColumn.series[0].data.push($scope.validationList[x][1]);
        $scope.validationColumn.series[1].data.push($scope.reputationList[x][1]);

        //SOME WEIGHING PROTOCL HERE -- CAN BE FUNCTIONAL.. SIMPLE MULTIPLICATION NOW
        //$scope.validationColumn.series[2].data.push($scope.reputationList[x][1]*$scope.validationList[x][1]);
        $scope.validationColumn.series[2].data.push($scope.reputationWeightedList[x][1]);
        $scope.validationColumn.xAxis.categories.push($scope.validationList[x][0]);
    }

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            if (index != -1){
                $scope.newReaction.associatedModels = [{type:'CONTENT', id:item.id}];
                $scope.contentList[index].reactions[type]++;
            }
            else{
                $scope.newReaction.associatedModels = [{type:'VALIDATION', id:item.id}];
                $scope.validation.reactions[type]++;
            }
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: DEPRECIATE
    $scope.createValidation = function(){
        if ($rootScope.currentUser){
            $scope.newValidation.validation = $scope.validation.id;
            $scope.newValidation.user = $rootScope.currentUser.id;
            ValidationModel.create($scope.newValidation).then(function(model){
                $scope.newValidation = {};
                for (x in $scope.tags){
                    $scope.newValidation.validation[$scope.tags[x]] = 0;
                }
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: DEPRECIATE
    $scope.reply = function(item){
        if ($rootScope.currentUser){$mdSidenav('content').toggle()}
        else{$mdSidenav('login').toggle();}
    };

}]);
