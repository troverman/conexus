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
        },
        resolve: {
            stream: ['$stateParams', 'StreamModel', function($stateParams, StreamModel){
                //return StreamModel.getOne($stateParams.path);
                return {title:'stream title', user:{username:'troverman', avatarUrl:'/images/mikey.jpg'}, streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', project:{title:'NOVO'}, task:{title:'This is a task', id:1}};
            }],
            posts: ['PostModel', 'stream', function(PostModel, stream){
                //return PostModel.getSome('stream', stream.id, 100, 0, 'createdAt DESC');
                return [{content:'cool guy', user:{username:'troverman', avatarUrl:'/images/mikey.jpg'}}, {content:'yaaa boiiiiii', user:{username:'troverman', avatarUrl:'/images/mikey.jpg'}}];
            }],
        }
    });
}])

.controller( 'StreamCtrl', ['$sailsSocket', '$sce', '$scope', 'config', 'PostModel', 'posts', 'stream', 'titleService', function StreamController($sailsSocket, $sce, $scope, config, PostModel, posts, stream, titleService ) {
    $scope.stream = stream;
    titleService.setTitle('Stream | ' + $scope.stream.title + ' | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.posts = posts;

    $scope.createPost = function(post){
        $scope.newPost.post = post.id;
        $scope.newPost.user = $scope.currentUser.id;
        $scope.newPost.profile = $scope.currentUser.id;
        PostModel.create($scope.newPost).then(function(model) {
            $scope.newPost = {};
        });
    };

    $scope.renderMessage = function(post){
        if (post){
            var replacedText = post.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
            var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
            return $sce.trustAsHtml(replacedText);
        }
    };

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