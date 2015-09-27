angular.module( 'conexus.project', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'project', {
		url: '/project/:projectID',
        controller: function($scope, $stateParams) {
            // get the id
            $scope.id = $stateParams.projectID;

        },
		views: {
			"main": {
				controller: 'ProjectCtrl',
				templateUrl: 'project/index.tpl.html'
			}
		},
		resolve: {
            messages: function(MessageModel) {
                return MessageModel.getAll().then(function(models) {
                    return models;
                });
            }
        }
	});
})

.controller( 'ProjectCtrl', function ProjectController( $scope, titleService,  $sailsSocket, lodash, config, MessageModel, messages ) {
	titleService.setTitle('project');

	$scope.newMessage = {};
    $scope.messages = messages;
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
        MessageModel.create(newMessage).then(function(model) {
            $scope.newMessage = {};
        });
    };



});