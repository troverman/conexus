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
            //TODO: COUNT IN PROJECT MODEL
            //,
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
            posts: ['PostModel', 'project', function(PostModel, project){
                return PostModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
            }],
            tasks: ['project', 'TaskModel', function(project, TaskModel){
                return TaskModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
            }],
            work: ['project', 'WorkModel', function(project, WorkModel){
                return WorkModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
            }],
        }
    })
    //TODO: FEATURE?
    .state( 'project.channels', {
        url: '/channels',
        views: {
            "channels": {
                controller: 'ProjectChannelsCtrl',
                templateUrl: 'project/templates/channels.tpl.html'
            }
        },
        resolve: {
            //TODO: ALL
            channels: [function() {
                return [{title:'general'},{title:'tasks'},{title:'create'},{title:'task1'}]
            }],
            posts: ['PostModel', 'project', function(PostModel, project){
                return PostModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
            }],
        }
    })
    //TODO: FEATURE | ALLOWS FOR BUDGET MANAGING PROCESS -- AKA CREATE MARKET ORDERS FOR AN ORG BASED ON REPUTATION VOTING
    .state( 'project.charter', {
        url: '/charter',
        views: {
            "channels": {
                controller: 'ProjectCharterCtrl',
                templateUrl: 'project/templates/charter.tpl.html'
            }
        },
        resolve: {
            //TODO: ALL
            bills: [function() {
                return [{title:'general'},{title:'tasks'},{title:'create'},{title:'task1'}]
            }],
        }
    })
    //TODO: FEATURE | ALLOW FOR OPEN BUDGETING / INPUT OUTPUT LEGER. ALLOW FOR DONATIONS / FUND TRANSFERRANCE | MULTIPLE LEDGERS
    .state( 'project.ledger', {
        url: '/ledger',
        views: {
            "ledger": {
                controller: 'ProjectLedgerCtrl',
                templateUrl: 'project/templates/ledger.tpl.html'
            }
        },
        resolve: {
            transactions: ['TransactionModel', 'project', function(TransactionModel, project) {
                return TransactionModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
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
            //TODO: GET SOME
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
            //TOD: ALL
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
                return TaskModel.getSome('project', project.id, 100, 0, 'createdAt DESC');
            }],
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

.controller( 'ProjectCtrl', ['$location', '$scope', 'config', 'MemberModel', 'project', 'titleService', function ProjectController( $location, $scope, config, MemberModel, project, titleService ) {
    titleService.setTitle(project.title + ' | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newMember = {};
    $scope.project = project;

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

    $scope.isProjectCreator = function() {
        if($scope.currentUser){
            return $scope.currentUser.id == $scope.project.user;
        }
        else {return false;}
    };

}])

.controller( 'ProjectActivityCtrl', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'PostModel', 'posts', 'project', 'tasks', 'titleService', 'work', function ProjectActivityController( $location, $sailsSocket, $sce, $scope, config, lodash, PostModel, posts, project, tasks, titleService, work ) {
    titleService.setTitle(project.title + ' | Activity | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.newReaction = {};
    $scope.posts = posts;
    $scope.project = project;
    $scope.tasks = tasks;
    $scope.work = work;

    //POST, WORK, TASK CREATE, VALIDATION (VOTE) | REACTION
    //$scope.activity = $scope.work.concat(posts);

    console.log(work, tasks);

    $scope.createPost = function(post) {
        if ($scope.currentUser){
            $scope.newPost.post = post.id;
            $scope.newPost.user = $scope.currentUser.id;
            $scope.newPost.project = $scope.project.id;
            console.log($scope.newPost)
            PostModel.create($scope.newPost).then(function(model) {
                $scope.newPost = {};
            });
        }
        else{$location.path('/login')}
    };

    //TODO: MODEL | CREATE REACTION | UPDATE POST
    $scope.createReaction = function(post, type, model){
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

    $scope.renderMessage = function(post){
        if (post){
            var replacedText = post.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
            var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
            return $sce.trustAsHtml(replacedText);
        }
    };

    //TODO: GENERALIZED ACTIVITY
    $scope.reply = function(post){
        var index = $scope.posts.map(function(obj){return obj.id}).indexOf(post.id);
        $scope.posts[index].showReply = !$scope.posts[index].showReply
    };

    $sailsSocket.subscribe('post', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.posts.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.posts, {id: envelope.id});
                break;
        }
    });

    $sailsSocket.subscribe('reaction', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.posts.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.posts, {id: envelope.id});
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

.controller( 'ProjectChannelsCtrl', ['$location', '$sailsSocket', '$scope', 'channels', 'config', 'posts', 'project', 'titleService', function ProjectController( $location, $sailsSocket, $scope, channels, config, posts, project, titleService ) {
    titleService.setTitle(project.title + ' | Channels | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.channels = channels;
    $scope.newPost = {};
    $scope.project = project;
    $scope.posts = posts;

    $scope.createPost = function() {
        if ($scope.currentUser){
            $scope.newPost.newPost.user = $scope.currentUser.id;
            $scope.newPost.newPost.project = $scope.project.id;
            PostModel.create($scope.newPost).then(function(model) {
                $scope.newPost = {};
            });
        }
        else{$location.path('/login')}
    };

    $sailsSocket.subscribe('post', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                console.log(envelope.data);
                $scope.posts.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.posts, {id: envelope.id});
                break;
        }
    });

}])

.controller( 'ProjectCharterCtrl', ['$location', '$sailsSocket', '$scope', 'bills', 'config', 'project', 'titleService', function ProjectController( $location, $sailsSocket, $scope, bills, config, project, titleService ) {
    titleService.setTitle(project.title + ' | Charter | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.bills = bills;  
    $scope.newMotionToggleVar = false;
    $scope.project = project;

    $scope.newMotionToggle = function(){
        $scope.newMotionToggleVar = $scope.newMotionToggleVar ? false : true;
    };

}])

.controller( 'ProjectLedgerCtrl', ['$interval', '$scope', 'config', 'lodash', 'project', 'titleService', 'TransactionModel', 'transactions', function ProjectController( $interval, $scope, config, lodash, project, titleService, TransactionModel, transactions ) {
    titleService.setTitle(project.title + ' | Ledger | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newTransaction = {};
    $scope.newTransactionToggleVar = false;
    $scope.project = project;
    $scope.transactions = transactions;

    $scope.newTransactionToggle = function(){
        $scope.newTransactionToggleVar = $scope.newTransactionToggleVar ? false : true;
    };

    $scope.createTransaction = function(){
        $scope.newTransaction.project = $scope.project.id;
        $scope.newTransaction.user = $scope.currentUser.id;
        TransactionModel.create($scope.newTransaction).then(function(model){
            $scope.newTransaction = {};
        });
    };

    $scope.chart = {
        chart: {
            zoomType: 'x',
        },
        series: [{
            id: 'Expenses',
            type: 'spline',
            name: 'Expenses',
            data: [65, 59, 80, 81, 56, 55, 40]
        },{
            id: 'Revenue',
            type: 'spline',
            name: 'Revenue',
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
    titleService.setTitle(project.title + ' | Members | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.members = members;
    $scope.newMember = {};
    $scope.project = project;

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

.controller( 'ProjectStreamsCtrl', ['$sce', '$scope', 'project', 'streams', 'titleService', function ProjectController( $sce, $scope, project, streams, titleService ) {
    titleService.setTitle(project.title + ' | Streams | conex.us');
    $scope.project = project;
    $scope.streams = streams;
    $scope.AudioContext = {};
    $scope.videoContext = {};

    //TODO: DOESNT WORK
    $scope.renderMessage = function(stream){
        var html = '<iframe width="510" height="265" src="'+stream+'" frameborder="0" allowfullscreen></iframe>'
        return $sce.trustAsHtml(html);
    };

    //TODO: ALL | BROWSER BASED STREAMING OF THE SCREEN. . . ~ OBS INPUT 
    //TODO: MOVE TO 'WORK' OR DEDICATED STREAMING AREA
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
.controller( 'ProjectTasksCtrl', ['$sailsSocket', '$scope', 'config', 'project', 'TaskModel', 'tasks', 'titleService', function ProjectController( $sailsSocket, $scope, config, project, TaskModel, tasks, titleService ) {
    titleService.setTitle(project.title + ' | Tasks | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newTaskToggleVar = false;
    $scope.tasks = tasks;
    $scope.project = project;

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
.controller( 'ProjectProjectsCtrl', ['$sailsSocket', '$scope', 'config', 'project', 'projects', 'titleService', function ProjectController( $sailsSocket, $scope, config, project, projects, titleService ) {
    titleService.setTitle(project.title + ' | Projects | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.project = project;
    $scope.projects = projects;
}]);