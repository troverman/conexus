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
            work: ['WorkModel', 'task', function(WorkModel, task){
                return WorkModel.getSome(task.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'TaskController', ['$scope', 'config', 'task', 'TaskModel', 'titleService', 'work', 'WorkModel', function TaskController( $scope, config, task, TaskModel, titleService, work, WorkModel) {
    titleService.setTitle('Task | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};

    $scope.reputationMultiplier = 1;
    $scope.task = task;
    $scope.taskTime = 0;
    $scope.working = false;
    $scope.totalTime = (Math.random()*1000000).toFixed(0);
    $scope.work = work;

    $scope.start = function() {
        if ($scope.currentUser){
            if($scope.working === true) return false;
            $scope.working = true;
            $scope.interval = setInterval($scope.updateCount, 1000);
        }
    };

    $scope.submit = function() {
        if($scope.working === false) return false;
        $scope.working = false;
        var workModel = {
            amount: $scope.taskTime,
            identifier: $scope.timeIdentifier,
            task: $scope.task.id,
            user: $scope.currentUser.id,
            verificationScore: 0
        };
        WorkModel.create(workModel).then(function(model){
            console.log(model)
            $scope.work.push(model);
        }); 
        $scope.taskTime=0;
        clearInterval($scope.interval);
    };

    $scope.updateCount = function() {
        $scope.taskTime++;
        $scope.$apply();
    };

    $scope.verify = function(item) {
        var index = $scope.work.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.work[index].verificationScore++
        //WorkModel.update();
    };



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



}]);
