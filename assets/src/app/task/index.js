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
                return TaskModel.getOne($stateParams.path);
            }],
            posts: ['PostModel', 'task', function(PostModel, task){
                return PostModel.getSome('task', task.id, 100, 0, 'createdAt DESC');
            }],
            work: ['WorkModel', 'task', function(WorkModel, task){
                return WorkModel.getSome('task', task.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'TaskController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'PostModel', 'posts', 'ReactionModel', 'task', 'TaskModel', 'titleService', 'work', 'WorkModel', function TaskController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, PostModel, posts, ReactionModel, task, TaskModel, titleService, work, WorkModel) {
    $scope.currentUser = config.currentUser;
    $scope.task = task;
    titleService.setTitle($scope.task.title + ' | Task | CRE8.XYZ');

    $scope.newPost = {};
    $scope.newReaction = {};
    $scope.newValidation = {};
    $scope.newValidation.validation = {}
    $scope.posts = posts;
    $scope.question = false;
    $scope.reputationMultiplier = 1;
    $scope.streaming = false;
    $scope.streamingId = null;
    $scope.streamUrl = '';

    $scope.tags = [];
    if($scope.task.tags){$scope.tags = $scope.task.tags.split(',')}
    $scope.task.verificationScore = 0;
    $scope.taskTime = 0;
    $scope.taskVerification = [];
    $scope.working = false;
    $scope.totalTime = (Math.random()*1000000).toFixed(0);
    $scope.verification = {};
    $scope.work = work;

    $scope.newValidation.validation.general = 0;
    for (x in $scope.tags){
        $scope.newValidation.validation[$scope.tags[x]] = 0;
    }

    //TODO | TOKENS
    $scope.tokens = [];
    $scope.tokens.push('Token');
    $scope.tokens.push('Task+Token');
    $scope.tokens.push('Task+Token+'+$scope.task.id);
    $scope.tokens.push('Task');
    $scope.tokens.push('Task+'+$scope.task.id);
    if ($scope.task.tags){
        for (x in $scope.tags){
            $scope.tokens.push($scope.tags[x].trim());
            $scope.tokens.push('Task+'+$scope.tags[x].trim())
            $scope.tokens.push('Task+'+$scope.task.id+'+'+$scope.tags[x].trim())

        }
    }
    for (x in $scope.tokens){
        $scope.tokens.push($scope.tokens[x]+'+onStream');
    }

    function getAllSubsets(theArray) {
      return theArray.reduce(function (subsets, value) {
        return subsets.concat(subsets.map(function (set) {
          return [value].concat(set);
        }));
      }, [[]]);
    };

    //$scope.test = [];
    //$scope.test.push('Task');$scope.test.push($scope.task.id);$scope.test.push('onTimeStream')
    //console.log(getAllSubsets($scope.test));
    //$scope.tokens = getAllSubsets($scope.test);
    //STORED AS A MATRIX; algabraic lattice. 

    $scope.askQuestion = function() {
        if ($scope.currentUser){
            $scope.question = true;
        }
        else{$location.path('/login')}
    };

    $scope.createPost = function(post) {
        if ($scope.currentUser){
            $scope.newPost.post = post.id;
            $scope.newPost.user = $scope.currentUser.id;
            $scope.newPost.task = $scope.task.id;
            PostModel.create($scope.newPost).then(function(model) {
                $scope.newPost = {};
            });
        }
        else{$location.path('/login')}
    };

    //TODO: MODELS | ONLY POST/CONTENT | NEED TASK (AS CONTENT)
    $scope.createReaction = function(content, type){
        if($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.post = content.id;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;

            var index = $scope.posts.map(function(obj){return obj.id}).indexOf(content.id);

            if (type =='plus'){$scope.contentList[index].plusCount++}
            if (type =='minus'){$scope.contentList[index].minusCount++}
            ReactionModel.create($scope.newReaction).then(function(model){
                $scope.newReaction = {};
            });

        }
        else{$location.path('/login')}
    };

    //TODO | MOTIONS INTERLOCK
    //LINK INTO CONTENT MODEL ? --> ONLY MOTIONS
    $scope.createValidation = function(){

        $scope.taskVerification.push({user:$scope.currentUser, score: $scope.currentUser.totalWork});
        $scope.task.verificationScore += parseFloat($scope.currentUser.totalWork);
        $scope.newVerification.user = $scope.currentUser;

        $scope.newVerification.score = $scope.currentUser.totalWork; // Dimensional Weight / Multiplier
        $scope.newVerification.project = $scope.task.project.id; // Dimensional Weight / Multiplier
        $scope.newVerification.task = $scope.task.id; // Dimensional Weight / Multiplier

        console.log($scope.newValidation);

    };

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

    $scope.renderStream = function(stream){
        var html = '<iframe width="510" height="265" src="'+stream+'" frameborder="0" allowfullscreen></iframe>'
        return $sce.trustAsHtml(html);
    };

    $scope.reply = function(post){
        var index = $scope.posts.map(function(obj){return obj.id}).indexOf(post.id);
        $scope.posts[index].showReply = !$scope.posts[index].showReply
    };

    //REWORK THE FLOW
    $scope.startStreaming = function() {
        if ($scope.currentUser){
            $scope.streaming = true;  
            //startStream(); INIT          
        }
        else{$location.path('/login')}
    }

    $scope.startWork = function() {
        if ($scope.currentUser){
            if ($scope.streaming){
                //STREAMING CREATES A POST -->
                //TODO.. INIT STREAM HERE ~~~~
                //startStream();
                $scope.newPost = {
                    type:'video',
                    title: $scope.task.title,
                    tags: $scope.task.title + ',stream,work,' + $scope.task.project.title,
                    content: '<iframe width="510" height="265" src="'+$scope.streamUrl+'" frameborder="0" allowfullscreen></iframe>', //BUILD FOR EMBED
                    user: $scope.currentUser.id,
                    //parent: $scope.work..
                };
                PostModel.create($scope.newPost).then(function(postModel){
                    console.log('create', postModel)
                    $scope.streamingId = postModel.id;
                });
            }
            if($scope.working === true) return false;
            $scope.working = true;
            $scope.interval = setInterval($scope.updateCount, 1000);
        }
        else{$location.path('/login')}
    };

    //REWORK THE FLOW
    $scope.submit = function() {
        
        if($scope.working === false) return false;
        $scope.working = false; $scope.question = false; $scope.streaming = false;
        var workModel = {
            amount: $scope.taskTime,
            content: $scope.workContent,
            identifier: $scope.timeIdentifier,
            project: $scope.task.project,
            task: $scope.task.id,
            user: $scope.currentUser.id,
            stream: $scope.streamingId,
            verificationScore: 0
        };

        if ($scope.workTags){
            workModel.tags = $scope.workTags.map(function(obj){
                return obj.text
            }).join(",");
        }

        WorkModel.create(workModel).then(function(model){

            $scope.work.unshift(model);
            $scope.workContent = '';

            //UPDATE TO HAVE PARENT AS WORK MODEL
            //REFACTOR | DOING BOTH HERE
            //TODO: ASSOCIATED MODELS --> TIME TO TASKS ONE TO MANY
            //TODO: TIME TYPE.. TIMER INPUT

            if ($scope.streamingId){
                var update = {};
                update.id = $scope.streamingId;
                update.work = model.id;
                update.parent = model.id;
                update.parentModel = 'work';
                console.log(update);
                PostModel.update(update).then(function(postModel){
                    consooe.log(postModel)
                });
            }
        }); 
        
        $scope.taskTime=0;
        clearInterval($scope.interval);

    };

    $scope.tokenToggle = function(){
        $mdSidenav('tokens').toggle();
        $rootScope.globalTokens = $scope.tokens;
    };

    $scope.updateCount = function() {
        $scope.taskTime++;
        $scope.$apply();
    };

    $scope.verifyTask = function(item, type) {
        if ($scope.currentUser){
            if (type == 'plus'){
                $scope.taskVerification.push({user:$scope.currentUser, score:$scope.currentUser.totalWork});
                $scope.task.verificationScore += parseFloat($scope.currentUser.totalWork);
            }
            if (type == 'minus'){
                $scope.taskVerification.push({user:$scope.currentUser, score:-$scope.currentUser.totalWork});
                $scope.task.verificationScore -= parseFloat($scope.currentUser.totalWork);
            }
        }
        else{$location.path('/login')}
    };

    //TODO: STREAM??
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

    //TODO: WEBSOCKETS | WEB3
    $sailsSocket.subscribe('post', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.posts.unshift(envelope.data);
                break;
        }
    });

    $sailsSocket.subscribe('work', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.work.unshift(envelope.data);
                break;
        }
    });

}]);