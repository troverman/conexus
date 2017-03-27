angular.module( 'conexus.stream', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'stream', {
        url: '/stream/:path',
        views: {
            "main": {
                controller: 'StreamCtrl',
                templateUrl: 'stream/index.tpl.html'
            }
        }            
    });
}])

.controller( 'StreamCtrl', ['$sailsSocket', '$scope', 'config', 'titleService', function StreamController($sailsSocket, $scope, config, titleService ) {
    $scope.currentUser = config.currentUser;

    var cameraPreview = document.getElementById('camera-preview');
    //testing out streaming! :D
    function initializeRecorder(stream) {

        var mediaStream = stream;
        console.log(stream)
        var recordAudio = RecordRTC(stream, {
            onAudioProcessStarted: function() {
                recordVideo.startRecording();
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

    };

    function onError(e) {console.log(e);}
    var session = {audio: true, video: true};
    var recordRTC = null;
    navigator.getUserMedia(session, initializeRecorder, onError);
    
}]);