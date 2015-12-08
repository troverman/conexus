angular.module( 'conexus.project', [
])

.config(function config( $stateProvider ) {

	$stateProvider.state( 'project', {
		url: '/project/:path',
		views: {
			"main": {
				controller: 'ProjectCtrl',
				templateUrl: 'project/index.tpl.html'
			}
		},
        resolve:{
            project: function(ProjectModel, $stateParams) {
                console.log($stateParams.path);
                return ProjectModel.getByUrl($stateParams.path).then(function(models) {
                    return models;
                });
            }
        }
    })
    .state('project.child', {
        /*resolve:{
            messages: function(project){
                return {'value': project.value + ':messages'};
            },
            tasks: function(project){
                return {'value': project.value + ':tasks'};
            },
            users: function(project){
                return {'value': project.value + ':users'};
            }
        }*/
		resolve: {
            /*project: function(ProjectModel, $stateParams) {
                console.log($stateParams.path);
                return ProjectModel.getByUrl($stateParams.path).then(function(models) {
                    return models;
                });
            },*/
            messages: function(MessageModel, $stateParams, $http, $q) {

                /*return $q.when()
                .then(function () {
                    var deferred = $q.defer();
                    var url = '/api/project/url/' + $stateParams.path;

                    $http.get(url).
                        success(function(data, status, headers, config) {
                            deferred.resolve(data);
                        }).
                        error(function(data, status, headers, config) {
                    });
                    return deferred.promise;
                })
                .then(function (data) {
                    return MessageModel.getByProject(data).then(function(models) {
                        return models;
                    });
                });*/

                return MessageModel.getAll().then(function(models) {
                    return models;
                });

            },
            users: function(UserModel, $sailsSocket) {
                //return UserModel.getAll().then(function(models) {
                    //return models;
                //});
                return $sailsSocket.get('/api/user/subscribe').then(
                    function(response) {
                        //console.log(response.data);
                        return response.data;
                    }
                );
            }
        }
	});
})

.controller( 'ProjectCtrl', function ProjectController( $scope, $sce, $location, titleService,  $sailsSocket, lodash, config, MessageModel, messages, ProjectModel, project, users ) {
	titleService.setTitle('project');

	$scope.newMessage = {};
    $scope.messages = messages;
    $scope.project = project;
    if (project == undefined){
        $location.url('projects');
    };
    $scope.currentUser = config.currentUser;

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

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    $scope.users = users;
    //console.log($scope.users);




});