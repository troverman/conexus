angular.module( 'conexus.task', [])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'task', {
        url: '/task/:id',
        views: {
            "main": {
                controller: 'TaskController',
                templateUrl: 'task/index.tpl.html'
            }
        },
        resolve: {
            task: ['$stateParams', 'TaskModel', function($stateParams, TaskModel){
                return TaskModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'TaskController', ['$location', '$rootScope', '$sailsSocket', '$scope', 'ContentModel', 'task', 'TaskModel', 'TimeModel', 'titleService', function TaskController( $location, $rootScope, $sailsSocket, $scope, ContentModel, task, TaskModel, TimeModel, titleService) {

    $scope.task = task;
    if(!$scope.task){$location.path('/')}
    $scope.task.model = 'TASK';
    titleService.setTitle($scope.task.title + ' | Task | CRE8.XYZ');
    
    $scope.directedGraphElements = {};
    $scope.selectedTab = 'TIME';

    //TODO:ASSOCIATED MODELS

    //TODO:AssociatedTime
    //var timeQuery = {};
    //$scope.selectAssociations(timeQuery)
    TimeModel.get({task:task.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(timeModels){
        $scope.time = timeModels.map(function(obj){obj.model = 'TIME'; return obj;});
    });
    
    //TODO: COMPUTE CONTEXT
    $scope.task.context = [];
    if ($scope.task.associationModels){
        for (x in $scope.task.associationModels){
            for (y in Object.keys($scope.task.associationModels[x].context)){
                var context = Object.keys($scope.task.associationModels[x].context)[y];
                $scope.task.context.push(context);
            }
        }
    }

    $scope.selectAssociations = function(model){
        var query = {


        };
        //AssociationModel.get(query).then(function(associationModels){
        //    $scope.associations = associationModels;
        //});
    };

    console.log($scope.task.context);

    //TODO: COMPONENTS
    $scope.selectTab = function(model){$scope.selectedTab = model;};
    $scope.tokenChart = {
        chart: {zoomType: 'x'},
        series: [{
            id: 'Attention',
            type: 'column',
            name: 'Attention',
            data: []
        }],
        title: {text: ''},
        xAxis: {
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {text: null},
            categories: [],
        },
        legend: {enabled: false},
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };
    $scope.populateTokenChart = function(){
        $scope.sortableSet = [];
        $scope.tokenChart.xAxis.categories = [];
        $scope.tokenChart.series[0].data = [];
        for (x in Object.keys($scope.task.data.apps.tokens)){$scope.sortableSet.push([Object.keys($scope.task.data.apps.tokens)[x], $scope.task.data.apps.tokens[Object.keys($scope.task.data.apps.tokens)[x]]])}
        $scope.sortableSet.sort(function(a, b) {return b[1] - a[1]});
        for (x in $scope.sortableSet){
            if (x < 100){
                $scope.tokenChart.xAxis.categories.push($scope.sortableSet[x][0]);
                $scope.tokenChart.series[0].data.push($scope.sortableSet[x][1]);
            }
        }
    };
    if ($scope.task.data.apps.tokens){$scope.populateTokenChart();}
    $scope.renderStats = function(){
        $scope.statsChart = {
            chart: {
                zoomType: 'x',
            },
            series: [],
            title: {text: ''},
            xAxis: {
                type: 'datetime',
                currentMin: 0,
                currentMax: 20,
                title: null,
                crosshair: true,
                gridLineWidth: 0.5,
                gridLineColor: 'grey'
            },
            yAxis: [{
                title: {text: null},
            }],
            credits:{enabled:false},
            plotOptions: {spline: {marker: {enabled: false}}, sma: {marker: {enabled: false}}}
        };
        $scope.statsChart.series = [];
        $scope.statsChart.series.push({
            id: 'content',
            type: 'spline',
            name: 'Content',
            data: []
        });
        $scope.statsChart.series.push({
            id: 'time',
            type: 'spline',
            name: 'Time',
            data: []
        });
        $scope.statsChart.series.push({
            id: 'validation',
            type: 'spline',
            name: 'Validations',
            data: []
        });
        for(var i=0;i<100;i++){
            var date = new Date();
            date.setTime(date.getTime() - (60*60*1000*(1000-i)));
            if (i == 0){
                $scope.statsChart.series[0].data.push([date.getTime(),Math.floor(150*Math.random())])
                $scope.statsChart.series[1].data.push([date.getTime(),Math.floor(20*Math.random())])
            }
            else{
                var random = 1.21*Math.random();
                var random1 = Math.random();
                if (random > random1){
                    $scope.statsChart.series[0].data.push([date.getTime(),$scope.statsChart.series[0].data[i-1][1]+3*Math.random()])
                    $scope.statsChart.series[1].data.push([date.getTime(),20*Math.random()])
                }
                else{
                    $scope.statsChart.series[0].data.push([date.getTime(),$scope.statsChart.series[0].data[i-1][1]-3*Math.random()])
                    $scope.statsChart.series[1].data.push([date.getTime(),20*Math.random()])
                }
            }
        }
    };
    $scope.renderStats();
    $scope.renderAssociations = function(item){
        $scope.item = item;
        for (x in $scope.item.associatedModels){
            var nodeModel = {
                group:'nodes',
                data:{
                    id:$scope.item.associatedModels[x].id,
                    type:$scope.item.associatedModels[x].id,
                    name:$scope.item.associatedModels[x].id
                }
            }; 
            $scope.directedGraphElements[$scope.item.associatedModels[x].id] = nodeModel;
            if (x > 0){
                var edgeModel = {
                    group:'edges',
                    classes:'unbundled-bezier',
                    data:{
                        id:$scope.item.associatedModels[0].id+'-'+$scope.item.associatedModels[x].id,
                        source:$scope.item.associatedModels[0].id,
                        target:$scope.item.associatedModels[x].id
                    }
                };
                $scope.directedGraphElements[$scope.item.associatedModels[0].id+'-'+$scope.item.associatedModels[x].id] = edgeModel;
            }
        }
    };
    $scope.renderAssociations(task);


    //TODO: SOCKETS
    $sailsSocket.subscribe('task', function (envelope) {
        console.log(envelope)
        if (envelope.verb == 'update'){
            if ($scope.task.id == envelope.data.id){
                $scope.task.data.apps = envelope.data.data.apps;
                $scope.populateTokenChart();
            }
        }
    });
    $sailsSocket.subscribe('association', function (envelope) {
        if (envelope.verb == 'update'){
            var index = $scope.associations.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){$scope.associations[index] = envelope.data;}
        }
    });
    $sailsSocket.subscribe('content', function (envelope) {if (envelope.verb == 'create'){$scope.content.unshift(envelope.data);}});
    $sailsSocket.subscribe('time', function (envelope) {if (envelope.verb == 'create'){$scope.time.unshift(envelope.data);}});

}]);
