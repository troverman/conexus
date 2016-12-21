angular.module( 'conexus.member', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'member', {
		url: '/member/:path',
		views: {
			"main": {
				controller: 'MemberCtrl',
				templateUrl: 'member/index.tpl.html'
			}
		},
		resolve: {

            member: function(UserModel, $stateParams){
                return UserModel.getByUsername($stateParams.path);
            },
            followers: function(FollowerModel, $stateParams, $http, $q, member) {
                return FollowerModel.getByUser(member);
            },
            messages: function(MessageModel, member) {
                return MessageModel.getByUser(member);
            }

        }
	});
})

.controller( 'MemberCtrl', function MemberController( $http, $location, $scope, $sailsSocket, $stateParams, lodash, config, titleService, FollowerModel, followers, MessageModel, member, messages ) {
	$scope.currentUser = config.currentUser;
    $scope.member = member;
    titleService.setTitle($scope.member.username + ' - conex.us');
    if(!$scope.member){$location.path('/')}
    $scope.messages = messages;
    $scope.followers = followers;
    $scope.newFollower = {};

    $scope.unfollow = function(member) {
        // check here if this message belongs to the currentUser
        if (member.user.id === config.currentUser.id) {
            FollowerModel.delete(member).then(function(model) {
                // message has been deleted, and removed from $scope.messages
            });
        }
    };

    $scope.follow = function(newModel) {
    	$scope.followModel = {};
        $scope.followModel.followed = $scope.member
        $scope.followModel.follower = config.currentUser
        FollowerModel.create($scope.followModel).then(function(model) {
            $scope.newFollower = {};
        });
    };

    $sailsSocket.subscribe('follower', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                //console.log(envelope.data);
                $scope.followers.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.followers, {id: envelope.id});
                break;
        }
    });


});