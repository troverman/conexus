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
            contentList: ['ContentModel', 'task', function(ContentModel, task){
                return ContentModel.get({task:task.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            time: ['TimeModel', 'task', function(TimeModel, task){
                return TimeModel.get({task:task.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            validations: ['ValidationModel', 'task', function(ValidationModel, task){
                return ValidationModel.get({task:task.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'TaskController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'contentList', 'ContentModel', 'ReactionModel', 'task', 'TaskModel', 'time', 'TimeModel', 'titleService', 'toaster', 'validations', function TaskController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, contentList, ContentModel, ReactionModel, task, TaskModel, time, TimeModel, titleService, toaster, validations) {

    $scope.task = task;
    
    //TODO: FIX
    if(!$scope.task){$location.path('/')}
    if($scope.task.tags){$scope.task.context = $scope.task.tags.split(',');}

    $scope.task.model = 'TASK';

    //TODO: DEPRECIATE -- MOVE TO NAV
    titleService.setTitle($scope.task.title + ' | Task | CRE8.XYZ');
   
    $scope.contentList = contentList;

    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.newTime = {};

    $scope.question = false;
    $scope.recordingTime = false;
    $scope.selectedTab = 'TIME';
    $scope.streaming = false;
    $scope.streamingId = null;
    $scope.streamUrl = '';
    $scope.taskVerification = [];
    $scope.validations = validations;
    $scope.verification = {};
    $rootScope.taskTime = 0;

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
    
    $scope.time = time;
    $scope.time.map(function(obj){
        obj.model = 'TIME';
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });

    $rootScope.associatedModels = [{
        text: $scope.task.title,
        type: 'TASK',
    }];

    $scope.newValidation = {};
    $scope.newValidation.context = {};
    $scope.newValidation.context.general = 0;

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var timeIndex = $scope.time.map(function(obj){return obj.id}).indexOf(item.id);
            if (timeIndex != -1){
                $scope.newReaction.associatedModels = [{type:'TIME', id:item.id}];
                $scope.time[timeIndex].data.apps.reactions[type]++;
            }
            else{
                $scope.newReaction.associatedModels = [{type:'TASK', id:item.id}];
                $scope.task.data.apps.reactions[type]++;
            }
            ReactionModel.create($scope.newReaction);
            $rootScope.pop(type, item.id);
        }
        else{$mdSidenav('login').toggle();}
    };

    //TODO: DEPRECIATE | BETTER CONTENT EMBED
    $scope.renderStream = function(stream){
        var html = '<iframe width="510" height="265" src="'+stream+'" frameborder="0" allowfullscreen></iframe>'
        return $sce.trustAsHtml(html);
    };

    //lol
    $scope.selectedProjects = [];
    $scope.selectProject = function(model){
        $scope.selectedProjects.push({text:model});
        $scope.newTime.validationModels.push({
            context:{general:100},
            associatedModels:[{type:'PROJECT', id:model.id}]
        });
    };

    $scope.selectTab = function(model){$scope.selectedTab = model;};
    $scope.showValidationImplicitToggle = function(){$scope.showValidationImplicitToggleVar = !$scope.showValidationImplicitToggleVar};

    //TODO: REWORK FLOW
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
                //TODO: INIT STREAM
                //TODO: IPFS STREAM
                $scope.newContent = {
                    type:'video',
                    title: $scope.task.title,
                    tags: $scope.task.title + ',stream,work,' + $scope.task.project.title,
                    content: '<iframe width="510" height="265" src="'+$scope.streamUrl+'" frameborder="0" allowfullscreen></iframe>', //BUILD FOR EMBED
                    user: $rootScope.currentUser.id,
                };
                ContentModel.create($scope.newContent).then(function(contentModel){
                    console.log('create', contentModel)
                    $scope.streamingId = contentModel.id;
                });
            }

            //TODO: CREATE TIME HERE
            $scope.startDateTime = new Date();
            $scope.newTime = {
                amount: 0,
                type:'LIVE',
                content: null,

                user: $rootScope.currentUser.id,
                creator: $rootScope.currentUser.id,

                associatedModels: [
                    {type:'TASK', id:$scope.task.id},
                ],
                validationModels:[{
                    context:{general:100},
                    associatedModels:[{type:'TASK', id:$scope.task.id}]
                }],

                //DEPRECIATE
                stream: null,

            };
            $scope.timeTags = $scope.task.context.map(function(obj){return {text:obj}});

            //TODO: DO IT
            //TimeModel.create($scope.newTime).then(function(timeModel){
                //$scope.newTime.id = timeModel.id;
                //$scope.startDateTime = new Date(timeModel.createdAt);
            //}); 

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
        $scope.newTime.content = $scope.timeContent;
        $scope.newTime.stream = $scope.streamingId;

        //TODO: DEPRECIATE
        if ($scope.timeTags){
            $scope.newTime.tags = $scope.timeTags.map(function(obj){
                return obj.text
            }).join(",");
        }
        //TODO: UPDATE ON SUBMIT
        //TimeModel.update($scope.newTime)
        TimeModel.create($scope.newTime).then(function(model){
            $scope.time.unshift(model);
            $scope.timeContent = '';
            //TODO: FLOW REWORK.. ASSOCIATED MODEL LINKAGES
            if ($scope.streamingId){
                var update = {};
                update.id = $scope.streamingId;
                update.time = model.id;
                //TODO: CHANGE TO ASSOCIATIONS
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

    $scope.updateCount = function() {
        var currentTime = new Date();
        $rootScope.taskTime = parseInt((currentTime.getTime() - $scope.startDateTime.getTime()) / 1000);
        $scope.$apply();
    };



     //TODO!!!
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
    $scope.renderAssociations(task)




    //TODO: HMMMMMMMMMMMM.. a 'handhold' --> !!!
    $scope.$watch('timeTags', function(newValue, oldValue){
        if (newValue !== oldValue) {
            for (x in $scope.newTime.validationModels){
                for (y in $scope.timeTags){
                    $scope.newTime.validationModels[x].context[$scope.timeTags[y].text] = 100;
                }
            }
            console.log($scope.newTime.validationModels)
        }
    }, true);

    //TODO: WEBSOCKET
    $sailsSocket.subscribe('task', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                if ($scope.task.id == envelope.data.id){
                    $scope.task.data.apps.attention = envelope.data.data.apps.attention;
                }
                break;
        }
    });
    $sailsSocket.subscribe('content', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.contentList.unshift(envelope.data);
                break;
        }
    });
    $sailsSocket.subscribe('time', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.time.unshift(envelope.data);
                break;
        }
    });




}]);
