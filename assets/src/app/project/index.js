angular.module( 'conexus.project', [
])

.config(function config( $stateProvider ) {

	$stateProvider.state( 'project', {
        abstract: true,
        url: '/project/:path',
        views: {
            "main": {
                templateUrl: 'project/index.tpl.html'
            }
        },
        resolve: {
            project: function(ProjectModel, $stateParams) {
                return ProjectModel.getByUrl($stateParams.path);
            }
        }
    })
    .state( 'project.index', {
        url: '',
        views: {
            "project": {
                controller: 'ProjectCtrl',
                templateUrl: 'project/index.tpl.html'
            }
        },
        resolve: {
            messages: function(project, MessageModel){
                return MessageModel.getByProject(project);
            },
            tasks: function(project){
                return {'value': project + ':tasks'};
            },
            users: function(project, UserModel, $sailsSocket) {
                return $sailsSocket.get('/api/user/subscribe').then(
                    function(response) {
                        return response.data;
                    }
                );
            }
        }
	})
    .state( 'project.index.tasks', {
        url: '/tasks',
        views: {
            "project": {
                controller: function($scope, $location, messages, project, tasks){
                    $scope.messages = messages;
                    $scope.project = project;
                    $scope.tasks = tasks;
                },
                templateUrl: 'project/index.tpl.html'
            }
        }
    });
})

.controller( 'ProjectCtrl', function ProjectController( $scope, $sailsSocket, $location, titleService, lodash, config, project, messages, MessageModel ) {
    titleService.setTitle(project.title);
    $scope.currentUser = config.currentUser;
    $scope.project = project;
    $scope.newMessage = {};
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