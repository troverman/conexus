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
            }]//,
            //memberCount: ['committee', 'CommitteeMemberModel', function(committee, CommitteeMemberModel){
            //     return CommitteeMemberModel.getCommitteeMemberCount('committee', committee.id);
            // }]
        }
    })
    .state( 'project.activity', {
        url: '',
        views: {
            "activity": {
                controller: 'ProjectActivityCtrl',
                templateUrl: 'project/templates/activity.tpl.html'
            }
        },
        resolve: {
            messages: ['MessageModel', 'project', function(MessageModel, project){
                return MessageModel.getByProject(project);
            }],
            tasks: ['project', 'TaskModel', function(project, TaskModel){
                return TaskModel.getByProject(project);
            }],
            work: ['WorkModel', 'project', function(WorkModel, project){
                return WorkModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
            }],
        }
    })
    .state( 'project.channels', {
        url: '/channels',
        views: {
            "channels": {
                controller: 'ProjectChannelsCtrl',
                templateUrl: 'project/templates/channels.tpl.html'
            }
        },
        resolve: {
            channels: [function() {
                return [{title:'general'},{title:'tasks'},{title:'create'},{title:'task1'}]
            }],
            messages: ['MemberModel', 'project', function(MessageModel, project){
                return MessageModel.getByProject(project);
            }],
        }
    })
    .state( 'project.finance', {
        url: '/finance',
        views: {
            "finance": {
                controller: 'ProjectFinanceCtrl',
                templateUrl: 'project/templates/finance.tpl.html'
            }
        },
        resolve: {
            entries: ['MemberModel', 'project', function(MemberModel, project) {
                return [{description:'USD PAYMENT', type:'PAYMENT', amount:13, identifier:'USD'}, {description:'TOKEN TRANSFER', type:'TRANSFER', amount:223, identifier:'CONEX'}, {description:'TASK COMPLETED', type:'TASK BOUNTY', amount:342, identifier:'USD'}]
            }]
        }
    })
    .state( 'project.members', {
        url: '/members',
        views: {
            "members": {
                controller: 'ProjectMembersCtrl',
                templateUrl: 'project/templates/members.tpl.html'
            }
        },
        resolve: {
            members: ['MemberModel', 'project', function(MemberModel, project) {
                return  MemberModel.getByProject(project);
            }]
        }
    })
    .state( 'project.streams', {
        url: '/streams',
        views: {
            "streams": {
                controller: 'ProjectStreamsCtrl',
                templateUrl: 'project/templates/streams.tpl.html'
            }
        },
        resolve: {
            streams: [function() {
                return [
                    {title:'multiDimensional Stream',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:'troverman', createdAt: new Date()},
                    {title:'multiDimensional Stream',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:'troverman', createdAt: new Date()},
                    {title:'multiDimensional Stream',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:'troverman', createdAt: new Date()},
                    {title:'multiDimensional Stream',streamUrl:'https://www.cre8bid.io/v/597c55e56833048165c6720c', user:'troverman', createdAt: new Date()}
                ];
            }]
        }
    })
    .state( 'project.tasks', {
        url: '/tasks',
        views: {
            "tasks": {
                controller: 'ProjectTasksCtrl',
                templateUrl: 'project/templates/tasks.tpl.html'
            }
        },
        resolve: {
            tasks: ['project', 'TaskModel', function(project, TaskModel){
                return TaskModel.getByProject(project);
            }]
        }
    })
    .state( 'project.projects', {
        url: '/projects',
        views: {
            "tasks": {
                controller: 'ProjectProjectsCtrl',
                templateUrl: 'project/templates/projects.tpl.html'
            }
        },
        resolve: {
            projects: ['project', 'ProjectModel', function(project, ProjectModel){
                return ProjectModel.getChildren(project);
            }],
        }
    });
    
}])

.controller( 'ProjectCtrl', ['$location', '$scope', 'config', 'MemberModel', 'project', function ProjectController( $location, $scope, config, MemberModel, project ) {
    $scope.currentUser = config.currentUser;
    $scope.project = project;
    $scope.newMember = {};

    $scope.isProjectCreator = function() {
        if($scope.currentUser){
            return $scope.currentUser.id == $scope.project.user
        }
        else {return false;}
    };

    $scope.createMember = function(){
        if($scope.currentUser){
            $scope.newMember.user = config.currentUser.id;
            $scope.newMember.project = project.id;
            MemberModel.create($scope.newMember).then(function(model) {
                $scope.newMember = {};
            });
        }
        else{$location.path('/login')}
    };


}])

.controller( 'ProjectActivityCtrl', ['$location', '$sailsSocket', '$scope', 'config', 'lodash', 'MessageModel', 'messages', 'project', 'tasks', 'titleService', 'work', function ProjectActivityController( $location, $sailsSocket, $scope, config, lodash, MessageModel, messages, project, tasks, titleService, work ) {
    titleService.setTitle(project.title + ' | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.project = project;
    $scope.newMessage = {};
    $scope.messages = messages;
    $scope.tasks = tasks;

    $scope.work = work;
    console.log(work, tasks)

    $scope.destroyMessage = function(message) {
        if (message.user.id === config.currentUser.id) {
            MessageModel.delete(message).then(function(model) {
                // message has been deleted, and removed from $scope.messages
            });
        }
    };

    $scope.createMessage = function(newMessage) {
        if ($scope.currentUser){
            newMessage.user = config.currentUser.id;
            newMessage.project = project;
            MessageModel.create(newMessage).then(function(model) {
                $scope.newMessage = {};
            });
        }
        else{$location.path('/login')}
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

.controller( 'ProjectChannelsCtrl', ['$location', '$sailsSocket', '$scope', 'channels', 'config', 'messages', function ProjectController( $location, $sailsSocket, $scope, channels, config, messages ) {
    $scope.currentUser = config.currentUser;
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
        if ($scope.currentUser){
            newMessage.user = config.currentUser.id;
            newMessage.project = project;
            MessageModel.create(newMessage).then(function(model) {
                $scope.newMessage = {};
            });
        }
        else{$location.path('/login')}
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

.controller( 'ProjectFinanceCtrl', ['$interval', '$scope', 'config', 'entries', 'lodash', function ProjectController( $interval, $scope, config, entries, lodash ) {
    $scope.currentUser = config.currentUser;
    $scope.entries = entries;
    $scope.newEntryToggleVar = false;

    $scope.newEntryToggle = function () {
        $scope.newEntryToggleVar = $scope.newEntryToggleVar ? false : true;
    };

    $scope.chart = {
        chart: {
            zoomType: 'x',
        },
        series: [{
            id: 'Expenses',
            type: 'spline',
            name: 'Expenses USD',
            data: [65, 59, 80, 81, 56, 55, 40]
        },{
            id: 'Revenue',
            type: 'spline',
            name: 'Revenue USD',
            data: [28, 48, 40, 19, 86, 27, 90]
        }],
        title: {
            text: ''
        },
        xAxis: {
            title: {
                text: null
            }
        },
        yAxis: {
            title: {
                text: null
            }
        },
        credits:{enabled:false},

    };

}])

.controller( 'ProjectMembersCtrl', ['$sailsSocket', '$scope', 'config', 'MemberModel', 'members', 'project', 'titleService', function ProjectController( $sailsSocket, $scope, config, MemberModel, members, project, titleService ) {
    titleService.setTitle(project.title + ' | conex.us');
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

.controller( 'ProjectStreamsCtrl', ['$scope', 'streams', function ProjectController( $scope, streams ) {
    $scope.streams = streams;
    $scope.AudioContext = {};
    $scope.videoContext = {};

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


}])

.controller( 'ProjectTasksCtrl', ['$sailsSocket', '$scope', 'config', 'project', 'TaskModel', 'tasks', function ProjectController( $sailsSocket, $scope, config, project, TaskModel, tasks ) {
    //titleService.setTitle(project.title + ' | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.tasks = tasks;
    $scope.project = project;
    $scope.newTaskToggleVar = false;

    $scope.newTaskToggle = function () {
        $scope.newTaskToggleVar = $scope.newTaskToggleVar ? false : true;
    };

    $scope.createTask = function(newTask) {
        newTask.user = config.currentUser.id;
        newTask.project = project;
        TaskModel.create(newTask).then(function(model) {
            $scope.newTask = {};
        });
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
.controller( 'ProjectProjectsCtrl', ['$sailsSocket', '$scope', 'config', 'project', 'projects', function ProjectController( $sailsSocket, $scope, config, project, projects ) {
    //titleService.setTitle(project.title + ' | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.project = project;
    $scope.projects = projects;

}]);

