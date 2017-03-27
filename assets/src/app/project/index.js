angular.module( 'conexus.project', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'project', {
        abstract: true,
        url: '/project/:path',
        views: {
            "main": {
                controller: 'ProjectCtrl',
                templateUrl: 'project/index.tpl.html'
            }
        },
        resolve: {
            project: ['$stateParams', 'ProjectModel', function($stateParams, ProjectModel) {
                return ProjectModel.getByUrl($stateParams.path);
            }]
        }
    })
    .state( 'project.home', {
        url: '',
        views: {
            "home": {
                controller: 'ProjectHomeCtrl',
                templateUrl: 'project/home.tpl.html'
            }
        },
        resolve: {
            project: ['$stateParams', 'ProjectModel', function($stateParams, ProjectModel) {
                return ProjectModel.getByUrl($stateParams.path);
            }],
            messages: ['MessageModel', 'project', function(MessageModel, project){
                return MessageModel.getByProject(project);
            }],
            tasks: ['project', 'TaskModel', function(project, TaskModel){
                return TaskModel.getByProject(project);
            }],
            users: function() {
                return [1,2,3,4,5];
            }
        }
    })
    .state( 'project.finance', {
        url: '/finance',
        views: {
            "finance": {
                controller: 'ProjectFinanceCtrl',
                templateUrl: 'project/finance.tpl.html'
            }
        }
    })
    .state( 'project.channels', {
        url: '/channels',
        views: {
            "channels": {
                controller: 'ProjectChannelsCtrl',
                templateUrl: 'project/channels.tpl.html'
            }
        },
        resolve: {
            channels: function() {
                return [1,2,3,4,5];
            },
            messages: ['MemberModel', 'project', function(MessageModel, project){
                return MessageModel.getByProject(project);
            }],
        }
    })
    .state( 'project.members', {
        url: '/members',
        views: {
            "members": {
                controller: 'ProjectMembersCtrl',
                templateUrl: 'project/members.tpl.html'
            }
        },
        resolve: {
            members: ['MemberModel', 'project', function(MemberModel, project) {
                return  MemberModel.getByProject(project);
            }]
        }
    })
    .state( 'project.tasks', {
        url: '/tasks',
        views: {
            "tasks": {
                controller: 'ProjectTasksCtrl',
                templateUrl: 'project/tasks.tpl.html'
            }
        },
        resolve: {
            tasks: ['project', 'TaskModel', function(project, TaskModel){
                return TaskModel.getByProject(project);
            }]
        }
    })
    .state( 'project.streams', {
        url: '/streams',
        views: {
            "streams": {
                controller: 'ProjectStreamsCtrl',
                templateUrl: 'project/streams.tpl.html'
            }
        },
        resolve: {
            streams: function() {
                return [1,2,3,4];
            }
        }
    });
    
}])

.controller( 'ProjectCtrl', ['$scope', 'config', 'project', function ProjectController( $scope, config, project ) {
    $scope.currentUser = config.currentUser;
    $scope.project = project;
    $scope.isProjectCreator = function(message) {
        if($scope.currentUser){
            return $scope.currentUser.id == $scope.project.user
        }
        else return false;
    };
}])

.controller( 'ProjectHomeCtrl', ['$location', '$sailsSocket', '$scope', 'config', 'lodash', 'MessageModel', 'messages', 'project', 'tasks', 'titleService', function ProjectHomeController( $location, $sailsSocket, $scope, config, lodash, MessageModel, messages, project, tasks, titleService ) {
    titleService.setTitle(project.title + ' - conex.us');
    $scope.currentUser = config.currentUser;
    $scope.project = project;
    $scope.newMessage = {};
    $scope.messages = messages;
    $scope.tasks = tasks;

    $scope.destroyMessage = function(message) {
        // check here if this message belongs to the currentUser
        console.log(message);
        if (message.user.id === config.currentUser.id) {
            MessageModel.delete(message).then(function(model) {
                // message has been deleted, and removed from $scope.messages
            });
        }
    };

    $scope.createMessage = function(newMessage) {
        newMessage.user = config.currentUser.id;
        newMessage.project = project;
        MessageModel.create(newMessage).then(function(model) {
            $scope.newMessage = {};
        });
    };

    $sailsSocket.subscribe('message', function (envelope) {
        console.log(envelope)
        switch(envelope.verb) {
            case 'created':
                console.log(envelope.data);
                $scope.messages.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.messages, {id: envelope.id});
                break;
        }
    });

    $sailsSocket.subscribe('task', function (envelope) {
        console.log(envelope.verb)
        switch(envelope.verb) {
            case 'created':
                console.log(envelope.data);
                $scope.tasks.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.tasks, {id: envelope.id});
                break;
        }
    });

}])

.controller( 'ProjectChannelsCtrl', ['$sailsSocket', '$scope', 'channels', 'messages', function ProjectController( $sailsSocket, $scope, channels, messages ) {
    $scope.channels = channels;
    $scope.messages = messages;

    $scope.destroyMessage = function(message) {
        // check here if this message belongs to the currentUser
        console.log(message);
        if (message.user.id === config.currentUser.id) {
            MessageModel.delete(message).then(function(model) {
                // message has been deleted, and removed from $scope.messages
            });
        }
    };

    $scope.createMessage = function(newMessage) {
        newMessage.user = config.currentUser.id;
        newMessage.project = project;
        MessageModel.create(newMessage).then(function(model) {
            $scope.newMessage = {};
        });
    };

    $sailsSocket.subscribe('message', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                console.log(envelope.data);
                $scope.messages.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.messages, {id: envelope.id});
                break;
        }
    });

}])

.controller( 'ProjectFinanceCtrl', ['$interval', '$scope', 'lodash', function ProjectController( $interval, $scope, lodash ) {

    $scope.options = {
        responsive: true,
        maintainAspectRatio: false,
    }
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    $interval(function () {
        $scope.data = _.shuffle($scope.data);
    }, 10000);

    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

}])

.controller( 'ProjectMembersCtrl', ['$sailsSocket', '$scope', 'config', 'MemberModel', 'members', 'project', function ProjectController( $sailsSocket, $scope, config, MemberModel, members, project ) {
    $scope.currentUser = config.currentUser;
    $scope.project = project;
    $scope.members = members;
    $scope.newMember = {};

    $scope.createMember = function() {
        $scope.newMember.user = config.currentUser.id;
        $scope.newMember.project = project.id;
        MemberModel.create($scope.newMember).then(function(model) {
            $scope.newMember = {};
        });
    };

    $sailsSocket.subscribe('projectmember', function (envelope) {
        console.log(envelope.verb)
        switch(envelope.verb) {
            case 'created':
                console.log(envelope.data);
                $scope.members.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.members, {id: envelope.id});
                break;
        }
    });
    
}])

.controller( 'ProjectTasksCtrl', ['$sailsSocket', '$scope', 'config', 'project', 'TaskModel', 'tasks', function ProjectController( $sailsSocket, $scope, config, project, TaskModel, tasks ) {
    $scope.currentUser = config.currentUser;
    $scope.tasks = tasks;
    $scope.project = project

    $scope.createTask = function(newTask) {
        newTask.user = config.currentUser.id;
        newTask.project = project;
        TaskModel.create(newTask).then(function(model) {
            $scope.newTask = {};
        });
    };

    $scope.destroyTask = function(task) {
        console.log(task);
        if (task.user.id === config.currentUser.id) {
            MessageModel.delete(message).then(function(model) {
            });
        }
    };

    $sailsSocket.subscribe('task', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.tasks.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.tasks, {id: envelope.id});
                break;
        }
    });

}])

.controller( 'ProjectStreamsCtrl', ['$scope', 'streams', function ProjectController( $scope, streams ) {
    $scope.streams = streams;
    $scope.AudioContext = {}
    $scope.videoContext = {}

    /*var cameraPreview = document.getElementById('camera-preview');
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


    //};

    function recorderProcess(e) {
        var left = e.inputBuffer.getChannelData(0);
        //console.log(left)
    }
    function onError(e) {console.log(e);}
    var session = {audio: true, video: true};
    var recordRTC = null;
    navigator.getUserMedia(session, initializeRecorder, onError);


}])
