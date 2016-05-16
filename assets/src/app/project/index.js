angular.module( 'conexus.project', [
])

.config(function config( $stateProvider ) {
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
            project: function(ProjectModel, $stateParams) {
                return ProjectModel.getByUrl($stateParams.path);
            }
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
            project: function(ProjectModel, $stateParams) {
                return ProjectModel.getByUrl($stateParams.path);
            },
            messages: function(MessageModel, project){
                return MessageModel.getByProject(project);
            },
            tasks: function(TaskModel, project){
                return TaskModel.getByProject(project);
            },
            users: function(UserModel, project, $sailsSocket) {
                return $sailsSocket.get('/api/user/subscribe').then(
                    function(response) {
                        return response.data;
                    }
                );
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
            messages: function(MessageModel, project){
                return MessageModel.getByProject(project);
            },
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
            members: function(MemberModel, project) {
                return  MemberModel.getByProject(project);
            }
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
            tasks: function(TaskModel, project){
                return TaskModel.getByProject(project);
            }
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
                return [1,2,3,4,5];
            }
        }
    });
    
})

.controller( 'ProjectCtrl', function ProjectController( $scope, project, config) {
    $scope.currentUser = config.currentUser;
    $scope.project = project;
    $scope.isProjectCreator = function(message) {
        if($scope.currentUser){
            return $scope.currentUser.id == $scope.project.user
        }
        else return false;
    };
})

.controller( 'ProjectHomeCtrl', function ProjectHomeController( $scope, $sailsSocket, $location, titleService, lodash, config, project, messages, MessageModel, tasks ) {
    titleService.setTitle(project.title);
    $scope.currentUser = config.currentUser;
    $scope.project = project;
    $scope.newMessage = {};
    $scope.messages = messages;
    $scope.tasks = tasks;

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

})

.controller( 'ProjectChannelsCtrl', function ProjectController( $scope, channels, messages, $sailsSocket) {
    $scope.channels = channels;
    $scope.messages = messages;
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
})

.controller( 'ProjectFinanceCtrl', function ProjectController( $scope, $interval, lodash ) {

    //ChartJsProvider.setOptions({
    //    responsive: true,
    //    maintainAspectRatio: false,
    //});

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
        //var randomNumber = Math.floor(Math.random() * (100 + 1));
        $scope.data = _.shuffle($scope.data);
    }, 10000);

    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
})

.controller( 'ProjectMembersCtrl', function ProjectController( $scope, config, project, members, MemberModel) {
    $scope.currentUser = config.currentUser;
    $scope.project = project
    $scope.members = members;
    $scope.newMember = {}

    $scope.createMember = function() {
        $scope.newMember.user = config.currentUser.id;
        $scope.newMember.project = project.id;
        MemberModel.create(newMember).then(function(model) {
            $scope.newMember = {};
        });
    };
    
})

.controller( 'ProjectTasksCtrl', function ProjectController( $scope, config, tasks, project, TaskModel, $sailsSocket) {
    $scope.currentUser = config.currentUser;
    $scope.tasks = tasks;
    $scope.project = project
    console.log(tasks)

    $scope.createTask = function(newTask) {
        newTask.user = config.currentUser.id;
        newTask.project = project;
        TaskModel.create(newTask).then(function(model) {
            $scope.newTask = {};
        });
    };

    $scope.destroyTask = function(task) {
        // check here if this message belongs to the currentUser
        console.log(task);
        if (task.user.id === config.currentUser.id) {
            MessageModel.delete(message).then(function(model) {
                // message has been deleted, and removed from $scope.messages
            });
        }
    };

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

})

.controller( 'ProjectStreamsCtrl', function ProjectController( $scope, streams) {
    $scope.streams = streams;
})
