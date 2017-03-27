angular.module( 'conexus.member', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'member', {
		url: '/member/:path',
		views: {
			"main": {
				controller: 'MemberCtrl',
				templateUrl: 'member/index.tpl.html'
			}
		},
		resolve: {
            member: ['$stateParams', 'UserModel', function($stateParams, UserModel){
                return UserModel.getByUsername($stateParams.path);
            }],
            followers: ['member', 'FollowerModel', function(member, FollowerModel) {
                return FollowerModel.getByUser(member);
            }],
            messages: ['member', 'MessageModel', function(member, MessageModel) {
                return MessageModel.getByUser(member);
            }]
        }
	});
}])

.controller( 'MemberCtrl', ['$location', '$sailsSocket', '$scope', '$stateParams', 'config', 'FollowerModel', 'followers', 'lodash', 'member', 'MessageModel', 'messages', 'titleService', function MemberController($location, $sailsSocket, $scope, $stateParams, config, FollowerModel, followers, lodash, member, MessageModel, messages, titleService) {
	$scope.currentUser = config.currentUser;
    $scope.member = member;
    titleService.setTitle($scope.member.username + ' - conex.us');
    if(!$scope.member){$location.path('/')}
    $scope.messages = messages;
    $scope.followers = followers;
    $scope.newFollower = {};

    $scope.unfollow = function(member) {
        if (member.user.id === config.currentUser.id) {
            FollowerModel.delete(member).then(function(model) {
            });
        }
    };

    $scope.follow = function(newModel) {
    	$scope.followModel = {};
        $scope.followModel.followed = $scope.member;
        $scope.followModel.follower = config.currentUser;
        FollowerModel.create($scope.followModel).then(function(model) {
            $scope.newFollower = {};
        });
    };

    $sailsSocket.subscribe('follower', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.followers.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.followers, {id: envelope.id});
                break;
        }
    });

}]);