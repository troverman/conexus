angular.module( 'conexus.task', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'task', {
        url: '/task/:path',
        views: {
            "main": {
                controller: 'TaskController',
                templateUrl: 'task/index.tpl.html'
            }
        },
        resolve: {
            task: ['$stateParams', 'TaskModel', function($stateParams, TaskModel){
                return TaskModel.getSome({id:$stateParams.path, limit:1, skip:0, sort:'createdAt DESC'});
            }],
            contentList: ['ContentModel', 'task', function(ContentModel, task){
                return ContentModel.getSome({task:task.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            time: ['TimeModel', 'task', function(TimeModel, task){
                return TimeModel.getSome({task:task.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            validations: ['ValidationModel', 'task', function(ValidationModel, task){
                return ValidationModel.getSome({task:task.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'TaskController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'contentList', 'ContentModel', 'ReactionModel', 'task', 'TaskModel', 'time', 'TimeModel', 'titleService', 'toaster', 'validations', function TaskController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, contentList, ContentModel, ReactionModel, task, TaskModel, time, TimeModel, titleService, toaster, validations) {

    $scope.task = task;
    $scope.task.model = 'TASK';
    $scope.task.tokens = [];
    $scope.task.tokens.push('CRE8');
    $scope.task.tokens.push('CRE8+TASK');

    //TODO: FIX
    if(!$scope.task){$location.path('/')}
    if($scope.task.tags){$scope.task.tags = $scope.task.tags.split(',')}

    //DEPRECIATE -- MOVE TO NAV
    titleService.setTitle($scope.task.title + ' | Task | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
   
    $scope.contentList = contentList;
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.question = false;
    $scope.showContent = false;
    $scope.showTime = true;
    $scope.streaming = false;
    $scope.streamingId = null;
    $scope.streamUrl = '';
    $scope.taskVerification = [];
    $scope.working = false;
    $scope.validations = validations;
    $scope.verification = {};
    $rootScope.taskTime = 0;

    $scope.time = time;
    $scope.time.map(function(obj){
        obj.model = 'TIME';
        obj.tokens = [];
        obj.tokens.push('CRE8');
        obj.tokens.push('CRE8+TIME');
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });

    $rootScope.associatedModels = [{
        address: $scope.task.id,
        text: $scope.task.title,
        type: 'TASK',
    }];

    //TODO: VIEW IN NAV.. GLOBAL.. :)
    $scope.askQuestion = function() {
        if ($scope.currentUser){$scope.question = true;}
        else{$mdSidenav('login').toggle();}
    };

    //DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;

            //TIME, ORDER, CONTENT, ITEMS, TRANSACTION, TASK, REACTION
            var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            if (contentIndex != -1){
                $scope.newReaction.associatedModels = [{type:'CONTENT', id:item.id}];
                $scope.contentList[contentIndex].reactions[type]++;
            }
            var timeIndex = $scope.time.map(function(obj){return obj.id}).indexOf(item.id);
            if (timeIndex != -1){
                $scope.newReaction.associatedModels = [{type:'TIME', id:item.id}];
                $scope.time[timeIndex].reactions[type]++;
            }
            else{
                $scope.newReaction.associatedModels = [{type:'TASK', id:item.id}];
                $scope.task.reactions[type]++;
            }
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle();}
    };

    //DEPRECIATE.. MOVE TO NAV
    $scope.pop = function(){
        toaster.pop({
            type:'success',
            title: $scope.task.title,
            body: 'You\'re gonna earn some tokens',
            onShowCallback: function (toast) { 
                var audio = new Audio('audio/ping.mp3');
                audio.play()
                .then(function(audio){console.log(audio)})
                .catch(function(err){console.log(err)})
            }
        });
    };

    //DEPRECIATE?
    $scope.renderStream = function(stream){
        var html = '<iframe width="510" height="265" src="'+stream+'" frameborder="0" allowfullscreen></iframe>'
        return $sce.trustAsHtml(html);
    };

    //DEPRECIATE
    $scope.reply = function(item){
        if ($scope.currentUser){$mdSidenav('content').toggle();}
        else{$mdSidenav('login').toggle();}
    };

    $scope.showTimeToggle = function(){
        $scope.showContent = false;
        $scope.showTime = true;
    };

    $scope.showContentToggle = function(){
        $scope.showContent = true;
        $scope.showTime = false;
    };

    $scope.showValidationImplicitToggle = function(){$scope.showValidationImplicitToggleVar = !$scope.showValidationImplicitToggleVar};

    //REWORK THE FLOW
    $scope.startStreaming = function() {
        if ($scope.currentUser){
            $scope.streaming = true;  
            //startStream(); INIT    
        }
        else{$mdSidenav('login').toggle();}
    };

    $scope.startWork = function() {
        if ($scope.currentUser){
            if ($scope.streaming){
                //TODO.. INIT STREAM HERE ~~~~
                //startStream();
                $scope.newContent = {
                    type:'video',
                    title: $scope.task.title,
                    tags: $scope.task.title + ',stream,work,' + $scope.task.project.title,
                    content: '<iframe width="510" height="265" src="'+$scope.streamUrl+'" frameborder="0" allowfullscreen></iframe>', //BUILD FOR EMBED
                    user: $scope.currentUser.id,
                };
                ContentModel.create($scope.newContent).then(function(contentModel){
                    console.log('create', contentModel)
                    $scope.streamingId = contentModel.id;
                });
            }
            if($scope.working === true) return false;
            $scope.working = true;
            $scope.pop();
            $scope.interval = setInterval($scope.updateCount, 1000);
        }
        else{$mdSidenav('login').toggle();}
    };

    //TODO: REWORK
    //ASSOICATIONS.. TIME --> STREAM --> CONTENT
    $scope.submit = function() {
        if($scope.working === false) return false;
        $scope.working = false; $scope.question = false; $scope.streaming = false;
        var timeModel = {
            amount: $rootScope.taskTime,
            content: $scope.timeContent,
            project: $scope.task.project,
            task: $scope.task.id,
            user: $scope.currentUser.id,
            stream: $scope.streamingId,
            type:'LIVE',
        };

        if ($scope.timeTags){
            timeModel.tags = $scope.timeTags.map(function(obj){
                return obj.text
            }).join(",");
        }

        //REWORK
        TimeModel.create(timeModel).then(function(model){
            $scope.time.unshift(model);
            $scope.timeContent = '';
            //UPDATE TO HAVE PARENT AS TIME MODEL
            //REFACTOR | DOING BOTH HERE
            //TODO: ASSOCIATED MODELS --> TIME TO TASKS ONE TO MANY
            //TODO: TIME TYPE.. TIMER INPUT
            if ($scope.streamingId){
                var update = {};
                update.id = $scope.streamingId;
                update.time = model.id;
                //TODO: CHANGE TO ASSOCIATIONS
                update.parent = model.id;
                update.parentModel = 'time';
                ContentModel.update(update).then(function(contentModel){
                    consooe.log(contentModel)
                });
            }
        }); 
        $rootScope.taskTime=0;
        clearInterval($scope.interval);
    };

    //TODO: BACKEND COUNTER..... 
    $scope.updateCount = function() {
        $rootScope.taskTime++;
        $scope.$apply();
    };

    //TODO: BROWSER STREAM WEBRTC
    $scope.startStream = function(){
        var cameraPreview = document.getElementById('camera-preview');
        function initializeRecorder(stream) {
            var mediaStream = stream;
            var recordAudio = RecordRTC(stream, {
                onAudioProcessStarted: function() {
                    recordVideoSeparately && recordVideo.startRecording();
                    cameraPreview.src = window.URL.createObjectURL(stream);
                    cameraPreview.play();
                    cameraPreview.muted = true;
                    cameraPreview.controls = false;
                }
            });
            var recordVideo = RecordRTC(stream, {type: 'video'});
            recordAudio.startRecording();
            stopRecording.disabled = false;
        };
        function recorderProcess(e) {var left = e.inputBuffer.getChannelData(0);}
        function onError(e) {console.log(e);}
        var session = {audio: true, video: true};
        var recordRTC = null;
        navigator.getUserMedia(session, initializeRecorder, onError);
    };

    //TODO: WEBSOCKETS
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
