angular.module( 'conexus.task', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'task', {
        url: '/task/:id',
        views: {
            "main": {
                controller: 'TaskController',
                templateUrl: 'task/index.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            task: ['$stateParams', 'TaskModel', function($stateParams, TaskModel){
                return TaskModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
            time: ['TimeModel', 'task', function(TimeModel, task){
                return TimeModel.get({task:task.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'TaskController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'ContentModel', 'task', 'TaskModel', 'time', 'TimeModel', 'titleService', 'toaster', function TaskController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, ContentModel, task, TaskModel, time, TimeModel, titleService, toaster) {

    $scope.task = task;
    if(!$scope.task){$location.path('/')}
    $scope.task.model = 'TASK';
    titleService.setTitle($scope.task.title + ' | Task | CRE8.XYZ');
   


    
    $scope.newTime = {};
    $scope.question = false;
    $scope.recordingTime = false;
    $scope.selectedTab = 'TIME';
    $scope.streaming = false;
    $scope.streamingId = null;
    $scope.streamUrl = '';
    $rootScope.taskTime = 0;




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
    console.log($scope.task.context);

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
    
    $scope.time = time.map(function(obj){obj.model = 'TIME'; return obj;});

    $scope.renderStream = function(stream){
        var html = '<iframe width="510" height="265" src="'+stream+'" frameborder="0" allowfullscreen></iframe>'
        return $sce.trustAsHtml(html);
    };

    $scope.selectTab = function(model){$scope.selectedTab = model;};
    $scope.showValidationImplicitToggle = function(){$scope.showValidationImplicitToggleVar = !$scope.showValidationImplicitToggleVar};



    //DEPRECIATE
    $scope.askQuestion = function() {
        if ($rootScope.currentUser){$scope.question = true;}
        else{$mdSidenav('login').toggle();}
    };
    $scope.startStreaming = function() {
        if ($rootScope.currentUser){$scope.streaming = true;  }
        else{$mdSidenav('login').toggle();}
    };
    $scope.startTime = function() {
        if ($rootScope.currentUser){
            if ($scope.streaming){
                $scope.newContent = {
                    type:'video',
                    title: $scope.task.title,
                    content: '<iframe width="510" height="265" src="'+$scope.streamUrl+'" frameborder="0" allowfullscreen></iframe>',
                    user: $rootScope.currentUser.id,
                };
                ContentModel.create($scope.newContent).then(function(contentModel){
                    console.log('create', contentModel);
                    $scope.streamingId = contentModel.id;
                });
            }
            $scope.startDateTime = new Date();
            $scope.newTime = {
                amount: 0,
                type:'LIVE',
                content: null,
                user: $rootScope.currentUser.id,
                creator: $rootScope.currentUser.id,
                associatedModels:[{
                    context:{general:100},
                    associatedModels:[{type:'TASK', id:$scope.task.id}]
                }],
            };
            if($scope.recordingTime === true) return false;
            $scope.recordingTime = true;
            $rootScope.pop($scope.task.title, 'You\'re gonna earn some tokens');
            $scope.interval = setInterval($scope.updateCount, 1000);
        }
        else{$mdSidenav('login').toggle();}
    };
    $scope.submit = function() {
        if($scope.recordingTime === false) return false;
        $scope.recordingTime = false; $scope.question = false; $scope.streaming = false;
        //TODO: FLOW 
        $scope.newTime.amount = $rootScope.taskTime;
        $scope.newTime.stream = $scope.streamingId;
        TimeModel.create($scope.newTime).then(function(model){
            $scope.time.unshift(model);
            $scope.timeContent = '';
            if ($scope.streamingId){
                var update = {};
                update.id = $scope.streamingId;
                update.time = model.id;
                update.parent = model.id;
                update.parentModel = 'time';
                ContentModel.update(update).then(function(contentModel){
                    console.log(contentModel)
                });
            }
        }); 
        $rootScope.taskTime=0;
        clearInterval($scope.interval);
    };
    //DEPRECIATE



    $scope.updateCount = function() {
        var currentTime = new Date();
        $rootScope.taskTime = parseInt((currentTime.getTime() - $scope.startDateTime.getTime()) / 1000);
        $scope.$apply();
    };

    $scope.directedGraphElements = {};
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
