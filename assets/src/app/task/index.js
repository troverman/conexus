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

.controller( 'TaskController', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'PostModel', 'posts', 'task', 'TaskModel', 'titleService', 'work', 'WorkModel', function TaskController( $location, $sailsSocket, $sce, $scope, config, PostModel, posts, task, TaskModel, titleService, work, WorkModel) {
    titleService.setTitle('Task | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.newReaction = {};
    $scope.posts = posts;
    $scope.question = false;
    $scope.reputationMultiplier = 1;
    $scope.streaming = false;
    $scope.streamUrl = 'https://www.cre8bid.io/v/597c55e56833048165c6720c';
    $scope.task = task;
    $scope.task.verificationScore = 0;
    $scope.taskTime = 0;
    $scope.taskVerification = [];
    $scope.working = false;
    $scope.totalTime = (Math.random()*1000000).toFixed(0);
    $scope.verification = {};
    $scope.work = work;

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

    //TODO: MODEL | CREATE REACTION | UPDATE POST
    $scope.createReaction = function(post, type){
        $scope.newReaction.user = $scope.currentUser.id;
        $scope.newReaction.post = post.id;
        $scope.newReaction.type = type;
        //TODO: MODEL | CREATE REACTION
        //Reaction.create(newReaction);
        var index = $scope.posts.map(function(obj){return obj.id}).indexOf(post.id);
        if (type =='plus'){$scope.posts[index].plusCount++}
        if (type =='minus'){$scope.posts[index].minusCount++}
        //TODO: UPDATE POST
    };

    $scope.createVerification = function(item) {
        if ($scope.currentUser){
            var index = $scope.work.map(function(obj){return obj.id}).indexOf(item.id);
            $scope.work[index].verificationScore++
            //WorkModel.update();
        }
        else{$location.path('/login')}
    };

    $scope.renderMessage = function(post){
        if (post){
            var replacedText = post.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
            var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
            return $sce.trustAsHtml(replacedText);
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

    $scope.startStreaming = function() {
        if ($scope.currentUser){
            $scope.streaming = true;
        }
        else{$location.path('/login')}
    }

    $scope.startWork = function() {
        if ($scope.currentUser){
            if($scope.working === true) return false;
            $scope.working = true;
            $scope.interval = setInterval($scope.updateCount, 1000);
        }
        else{$location.path('/login')}
    };

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
            stream: $scope.streamUrl,
            verificationScore: 0
        };
        WorkModel.create(workModel).then(function(model){
            console.log(model);
            $scope.work.push(model);
            $scope.workContent = '';
        }); 
        $scope.taskTime=0;
        clearInterval($scope.interval);
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
