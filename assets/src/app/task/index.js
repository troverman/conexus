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

     //TEMP HARDCODE -- MOVE TO PROTOCOL
    $scope.task.tokens = [];
    $scope.task.tokens.push('CRE8');
    $scope.task.tokens.push('CRE8+TASK');
    //$scope.task.tokens.push('CRE8+TASK+'+$scope.task.title.toUpperCase().replace(/ /g, '-')+'.'+$scope.task.id);
   // if ($scope.task.tags){
   //     for (x in $scope.task.tags){
   //         $scope.task.tokens.push('CRE8+TASK+'+$scope.task.tags[x].trim().toUpperCase())
            //$scope.task.tokens.push('CRE8+TASK+'+$scope.task.title.toUpperCase().replace(/ /g, '-')+'.'+$scope.task.id+'+'+$scope.task.tags[x].trim().toUpperCase())
   //     }
   // }

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
        //TEMP HARDCODE -- MOVE TO PROTOCOL
        obj.tokens = [];
        obj.tokens.push('CRE8');
        obj.tokens.push('CRE8+TIME');
        //obj.tokens.push('CRE8+TIME+'+obj.task.title.toUpperCase().replace(/ /g, '-')+'.'+obj.task.id);
        //CONTEXT!
        //REMOVE TASK..
        //if (obj.task.tags){
        //    obj.task.tags = obj.task.tags.split(',');
        //    for (x in obj.task.tags){
        //        obj.tokens.push('CRE8+TIME+'+obj.task.tags[x].trim().toUpperCase());
                //obj.tokens.push('CRE8+TIME+'+obj.task.title.toUpperCase().replace(/ /g, '-')+'.'+obj.task.id+'+'+obj.task.tags[x].trim().toUpperCase());
        //    }
        //}
        if (obj.tags){obj.tags = obj.tags.split(',')}
        return obj;
    });

    $rootScope.associatedModels = [{
        address: $scope.task.id,
        text: $scope.task.title,
        type: 'TASK',
    }];

    //TODO: VIEW IN NAV.. GLOBAL.. :) NOT FIXED ON TASK -- MOVE THESE FUNCTIONS AND VIEWS .. LIKE TIME TRACKING ETC
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
            type:'success',//info, wait, success, warning
            title: $scope.task.title,
            body: 'You\'re gonna earn some tokens',
            onShowCallback: function (toast) { 
                //PLAY SOUND
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
        if ($scope.currentUser){
            //var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            //var timeIndex = $scope.time.map(function(obj){return obj.id}).indexOf(item.id);
            //if (contentIndex != -1){$scope.contentList[contentIndex].showReply = !$scope.contentList[contentIndex].showReply;}
            //else if (timeIndex != -1){$scope.time[timeIndex].showReply = !$scope.time[timeIndex].showReply;}
            //else{$scope.task.showReply = !$scope.task.showReply;}
            $mdSidenav('content').toggle();
        }
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

    $scope.showValidationImplicitToggle = function(){
        $scope.showValidationImplicitToggleVar = !$scope.showValidationImplicitToggleVar;
    };

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
                //STREAMING CREATES CONTENT -->
                //TODO.. INIT STREAM HERE ~~~~
                //startStream();
                $scope.newContent = {
                    type:'video',
                    title: $scope.task.title,
                    tags: $scope.task.title + ',stream,work,' + $scope.task.project.title,
                    content: '<iframe width="510" height="265" src="'+$scope.streamUrl+'" frameborder="0" allowfullscreen></iframe>', //BUILD FOR EMBED
                    user: $scope.currentUser.id,
                    //parent: $scope.work..
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

    //!!!!TODO: REVIST THIS !!!
    //ASSOICATIONS .. TIME --> STREAM --> CONTENT
    //TYPE.. TIMER ETC
    $scope.submit = function() {
        if($scope.working === false) return false;
        $scope.working = false; $scope.question = false; $scope.streaming = false;
        var timeModel = {
            amount: $rootScope.taskTime,
            content: $scope.timeContent,
            identifier: $scope.timeIdentifier,
            project: $scope.task.project,
            task: $scope.task.id,
            user: $scope.currentUser.id,
            stream: $scope.streamingId,
            verificationScore: 0
        };

        if ($scope.timeTags){
            timeModel.tags = $scope.timeTags.map(function(obj){
                return obj.text
            }).join(",");
        }

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

                //CHANGE TO ASSOCIATIONS
                //TODO
                update.parent = model.id;
                update.parentModel = 'time';

                console.log(update);
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

    //TODO: BROWSER STREAM . . .
    $scope.startStream = function(){
        var cameraPreview = document.getElementById('camera-preview');
        //testing out streaming! :D
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
            var recordVideo = RecordRTC(stream, {
                type: 'video'
            });
            recordAudio.startRecording();
            stopRecording.disabled = false;
            /*
            var audioContext = window.AudioContext;
            var videoContext = win
            var context = new audioContext();
            var audioInput = context.createMediaStreamSource(stream);
            var bufferSize = 2048;
            // create a javascript node
            var recorder = context.createScriptProcessor(bufferSize, 1, 1);
            // specify the processing function
            recorder.onaudioprocess = recorderProcess;
            // connect stream to our recorder
            audioInput.connect(recorder);
            // connect our recorder to the previous destination
            recorder.connect(context.destination);
            */
        };

        function recorderProcess(e) {
            var left = e.inputBuffer.getChannelData(0);
            //console.log(left)
        }
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