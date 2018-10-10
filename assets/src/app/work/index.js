angular.module( 'conexus.work', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'work', {
        url: '/work/:id',
        views: {
            "main": {
                controller: 'WorkController',
                templateUrl: 'work/index.tpl.html'
            }
        },
        resolve: {
            work: ['$stateParams', 'WorkModel', function($stateParams, WorkModel){
                return WorkModel.getOne($stateParams.id);
            }],
            posts: ['PostModel', 'work', function(PostModel, work){
                return PostModel.getSome('work', work.id, 100, 0, 'createdAt DESC');
            }],
            //stream: ['PostModel', 'work', function(PostModel, work){
            //    return PostModel.getSome('work', work.id, 1, 0, 'createdAt DESC');
            //}],
            workVerifications: ['PostModel', 'work', function(PostModel, work){
                return null;
            }],
        }
    });
}])

.controller( 'WorkController', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'PostModel', 'posts', 'titleService', 'work', 'WorkModel', function WorkController( $location, $sailsSocket, $sce, $scope, config, PostModel, posts, titleService, work, WorkModel) {
    titleService.setTitle('Work | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.newReaction = {};
    $scope.reputationMultiplier = 1;
    $scope.posts = posts;
    $scope.taskTime = 0;
    $scope.working = false;
    $scope.totalTime = (Math.random()*1000000).toFixed(0);
    $scope.workVerification = [];
    $scope.work = work;

    $scope.tokens = [];
    $scope.tokens.push('Token');
    $scope.tokens.push('WorkToken');
    $scope.tokens.push('Work+'+$scope.work.id);
    //for x in scope.tadk.tags.split()
    //$scope.tokens.push('Work+'+$scope.work.id);

    //UNIFY CONTENT AND WORK??
    //WORK AS A TYPE

    if ($scope.work.task.tags){
        for (x in $scope.work.task.tags.split(',')){
            $scope.tokens.push($scope.work.task.tags.split(',')[x].trim());
            $scope.tokens.push('Task+'+$scope.work.task.tags.split(',')[x].trim())
            $scope.tokens.push('Task+'+$scope.work.task.id+'+'+$scope.work.task.tags.split(',')[x].trim())
        }
    }

    for (x in $scope.tokens){
        $scope.tokens.push($scope.tokens[x]+'+onStream');
        $scope.tokens.push($scope.tokens[x]+'+onValidation');
    }

    $scope.createPost = function(post) {
        if ($scope.currentUser){
            $scope.newPost.post = post.id;
            $scope.newPost.user = $scope.currentUser.id;
            $scope.newPost.work = $scope.work.id;
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

    //TODO: REFACTOR
    $scope.verifyWork = function(post, type) {
        $scope.work.verificationScore = parseFloat($scope.work.verificationScore);
        if ($scope.currentUser){
            if (type == 'plus'){
                $scope.workVerification.push({user:$scope.currentUser, score: $scope.currentUser.totalWork});
                $scope.work.verificationScore += parseFloat($scope.currentUser.totalWork);
            }
            if (type == 'minus'){
                $scope.workVerification.push({user:$scope.currentUser, score: -$scope.currentUser.totalWork});
                $scope.work.verificationScore -= parseFloat($scope.currentUser.totalWork);
            }
        }
        else{$location.path('/login')}
    };

    //YIKES
    $scope.renderContent = function(post){
        if (post){
            if (!post.includes('>')){
                var replacedText = post.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                return $sce.trustAsHtml(replacedText);
            }
            else{return $sce.trustAsHtml(post)}
        }
    };

    $scope.reply = function(post){
        var index = $scope.posts.map(function(obj){return obj.id}).indexOf(post.id);
        $scope.posts[index].showReply = !$scope.posts[index].showReply
    };

    //TODO: GET SOME


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




    //TODO: WEBSOCKETS | WEB3
    $sailsSocket.subscribe('post', function (envelope) {
        console.log(envelope)
        switch(envelope.verb) {
            case 'created':
                $scope.posts.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.posts, {id: envelope.id});
                break;
        }
    });

}]);
