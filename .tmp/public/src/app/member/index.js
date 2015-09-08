angular.module( 'conexus.member', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'member', {
		url: '/member/:path',
        controller: function($scope, $stateParams) {
            // get the id
            $scope.id = $stateParams.path;
        },
		views: {
			"main": {
				controller: 'MemberCtrl',
				templateUrl: 'member/index.tpl.html'
			}
		},
		resolve: {
            followers: function(FollowerModel, $stateParams) {
            	//get by current user id
            	console.log('HELLLOOOO');
            	console.log($stateParams.path);

                return FollowerModel.getFollowersById($stateParams.path).then(function(models) {
                    return models;
                });
            }
        }
	});
})

.controller( 'MemberCtrl', function MemberController( $http, $location, $scope, $sailsSocket, $stateParams, lodash, config, titleService, FollowerModel, followers ) {

	titleService.setTitle('member');
	$scope.currentUser = config.currentUser;

	var url = '/api/user/' + $stateParams.path;

	$http.get(url).
	    success(function(data, status, headers, config) {
	      $scope.member = data;

	      if (data == ''){
	      	$location.url('/');
	      };

	    }).
	    error(function(data, status, headers, config) {
    });


    $scope.newFollower = {};
    $scope.followers = followers;

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

    $scope.unfollow = function(member) {
        // check here if this message belongs to the currentUser
        if (member.user.id === config.currentUser.id) {
            FollowerModel.delete(member).then(function(model) {
                // message has been deleted, and removed from $scope.messages
            });
        }
    };

    $scope.follow = function(newModel) {

    	$scope.follow_model = {};
        $scope.follow_model.followed = $scope.member
        $scope.follow_model.follower = config.currentUser

        FollowerModel.create($scope.follow_model).then(function(model) {
            $scope.newFollower = {};
        });
    };




});