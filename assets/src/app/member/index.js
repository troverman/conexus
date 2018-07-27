angular.module( 'conexus.member', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'member', {
        abstract: true,
		url: '/member/:path',
		views: {
			"main": {
				controller: 'MemberCtrl',
				templateUrl: 'member/index.tpl.html'
			}
		},
		resolve: {
            //TODO: REFACTOR
            member: ['$stateParams', 'UserModel', function($stateParams, UserModel){
                return UserModel.getByUsername($stateParams.path);
            }],
            //TODO: REFACTOR
            followersCount: ['member', 'FollowerModel', function(member, FollowerModel) {
                return FollowerModel.getByUser(member);
            }],
            followingCount: ['member', 'FollowerModel', function(member, FollowerModel) {
                return FollowerModel.getByUser(member);
            }]
        }
	})
    .state( 'member.index', {
        url: '',
        views: {
            "memberActivity": {
                controller: 'MemberActivityCtrl',
                templateUrl: 'member/templates/activity.tpl.html'
            }
        },
        resolve: {
            posts: ['member', 'PostModel', function(member, PostModel) {
                return PostModel.getSome('user', member.id, 100, 0, 'createdAt DESC');
            }],
            work: ['member', 'WorkModel', function(member, WorkModel) {
                return WorkModel.getSome('user', member.id, 100, 0, 'createdAt DESC');
            }]
        }
    })
    .state( 'member.followers', {
        url: '/followers',
        views: {
            "memberFollowers": {
                controller: 'MemberFollowersCtrl',
                templateUrl: 'member/templates/followers.tpl.html'
            }
        },
        resolve: {
            //TODO: REFACTOR
            followers: ['member', 'FollowerModel', function(member, FollowerModel) {
                return FollowerModel.getByUser(member);
            }],
        }
    })
    .state( 'member.following', {
        url: '/following',
        views: {
            "memberFollowing": {
                controller: 'MemberFollowingCtrl',
                templateUrl: 'member/templates/following.tpl.html'
            }
        },
        resolve: {
            //TODO: REFACTOR
            following: ['member', 'FollowerModel', function(member, FollowerModel) {
                return FollowerModel.getByUser(member);
            }],
        }
    })
    .state( 'member.wallet', {
        url: '/wallet',
        views: {
            "memberWallet": {
                controller: 'MemberWalletCtrl',
                templateUrl: 'member/templates/wallet.tpl.html'
            }
        },
        resolve: {
            member: ['$stateParams', 'UserModel', function($stateParams, UserModel){
                return UserModel.getByUsername($stateParams.path);
            }]
        }
    })
}])

.controller( 'MemberCtrl', ['$location', '$sailsSocket', '$scope', '$stateParams', 'config', 'followersCount', 'followingCount', 'FollowerModel', 'lodash', 'member', 'seoService', 'titleService', function MemberController($location, $sailsSocket, $scope, $stateParams, config, followersCount, followingCount, FollowerModel, lodash, member, seoService, titleService) {
	$scope.currentUser = config.currentUser;
    
    //TODO: PART OF MEMBER
    $scope.followersCount = followersCount;
    $scope.followingCount = followingCount;
    $scope.newFollower = {};
    $scope.member = member;
    titleService.setTitle($scope.member.username + ' | conex.us');

    //TODO: seoService

    if(!$scope.member){$location.path('/')}

    $scope.follow = function(newModel) {
        $scope.newFollower.followed = $scope.member;
        $scope.newFollower.follower = $scope.config.currentUser;
        FollowerModel.create($scope.newFollower).then(function(model) {
            $scope.newFollower = {};
        });
    };

    $scope.unfollow = function(member) {
        FollowerModel.delete(member);
    };

    //TODO: SOCKET | WEB3
    /*
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
    */

}])
.controller( 'MemberActivityCtrl', ['$sailsSocket', '$sce', '$scope', '$stateParams', 'config', 'FollowerModel', 'lodash', 'member', 'PostModel', 'posts', 'titleService', 'work', function MemberActivityController($sailsSocket, $sce, $scope, $stateParams, config, FollowerModel, lodash, member, PostModel, posts, titleService, work) {
    $scope.currentUser = config.currentUser;
    $scope.member = member;
    $scope.newPost = {};

    //TODO: ACTIVITY FEED ~ BLEND OF MODELS
    $scope.posts = posts;
    $scope.work = work;

    $scope.createPost = function(post){
        $scope.newPost.post = post.id;
        $scope.newPost.user = $scope.currentUser.id;
        $scope.newPost.profile = $scope.member.id;
        PostModel.create($scope.newPost).then(function(model) {
            $scope.newPost = {};
        });
    };

    $scope.renderMessage = function(message){
        if (message){
            var replacedText = message.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
            var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
            return $sce.trustAsHtml(replacedText);
        }
    };

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
    

}])

.controller( 'MemberFollowersCtrl', ['$sailsSocket', '$scope', '$stateParams', 'config', 'FollowerModel', 'followers', 'lodash', function MemberFollowersController($sailsSocket, $scope, $stateParams, config, FollowerModel, followers, lodash) {
    $scope.currentUser = config.currentUser;
    $scope.followers = followers;

    /*
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
    */

}])

.controller( 'MemberFollowingCtrl', ['$sailsSocket', '$scope', '$stateParams', 'config', 'following', 'FollowerModel', 'lodash', function MemberFollowingController($sailsSocket, $scope, $stateParams, config, following, FollowerModel, lodash) {
    $scope.currentUser = config.currentUser;
    $scope.following = following;
    console.log(following)

    /*
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
    */

}])

.controller( 'MemberWalletCtrl', ['$sailsSocket', '$scope', '$stateParams', 'config', 'lodash', 'member', function MemberWalletController($sailsSocket, $scope, $stateParams, config, lodash, member) {
    $scope.currentUser = config.currentUser;
    $scope.member = member;
}]);

