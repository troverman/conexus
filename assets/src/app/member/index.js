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
                return FollowerModel.getFollowers(member);
            }],
            followingCount: ['member', 'FollowerModel', function(member, FollowerModel) {
                return FollowerModel.getFollowing(member);
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
                return FollowerModel.getFollowers(member);
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
                return FollowerModel.getFollowing(member);
            }],
        }
    })
    .state( 'member.positions', {
        url: '/positions',
        views: {
            "memberWallet": {
                controller: 'MemberPositionsCtrl',
                templateUrl: 'member/templates/positions.tpl.html'
            }
        },
        resolve: {
            member: ['$stateParams', 'UserModel', function($stateParams, UserModel){
                return UserModel.getByUsername($stateParams.path);
            }],
            orders: ['member', 'OrderModel', function(member, OrderModel){
                return OrderModel.getSome('user', member.id, 100, 0, 'createdAt DESC');
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
    titleService.setTitle($scope.member.username + ' | CRE8.XYZ');

    //TODO: seoService

    if(!$scope.member){$location.path('/')}

    $scope.follow = function() {
        $scope.newFollower.followed = $scope.member.id;
        $scope.newFollower.follower = $scope.currentUser.id;
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
    titleService.setTitle($scope.member.username + ' | Activity | CRE8.XYZ');
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

.controller( 'MemberFollowersCtrl', ['$sailsSocket', '$scope', '$stateParams', 'config', 'FollowerModel', 'followers', 'lodash', 'titleService', function MemberFollowersController($sailsSocket, $scope, $stateParams, config, FollowerModel, followers, lodash, titleService) {
    $scope.currentUser = config.currentUser;
    titleService.setTitle($scope.member.username + ' | Followers | CRE8.XYZ');
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

.controller( 'MemberFollowingCtrl', ['$sailsSocket', '$scope', '$stateParams', 'config', 'following', 'FollowerModel', 'lodash', 'titleService', function MemberFollowingController($sailsSocket, $scope, $stateParams, config, following, FollowerModel, lodash, titleService) {
    $scope.currentUser = config.currentUser;
    titleService.setTitle($scope.member.username + ' | Following | CRE8.XYZ');
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

.controller( 'MemberPositionsCtrl', ['$sailsSocket', '$scope', '$stateParams', 'config', 'lodash', 'member', 'OrderModel', 'orders', 'titleService', function MemberPositionsController($sailsSocket, $scope, $stateParams, config, lodash, member, OrderModel, orders, titleService) {
    $scope.currentUser = config.currentUser;
    $scope.member = member;
    $scope.orders = orders;
    $scope.orders.forEach(function(part, index) {
        if ($scope.orders[index].identiferSet){$scope.orders[index].identiferSet = $scope.orders[index].identiferSet.split(',');}
        if ($scope.orders[index].amountSet){$scope.orders[index].amountSet = $scope.orders[index].amountSet.split(',');}
        if ($scope.orders[index].identiferSet1){$scope.orders[index].identiferSet1 = $scope.orders[index].identiferSet1.split(',');}
        if ($scope.orders[index].amountSet1){ $scope.orders[index].amountSet1 = $scope.orders[index].amountSet1.split(',');}
    });
    titleService.setTitle($scope.member.username + ' | Positions | CRE8.XYZ');
    
    $scope.newOrderToggle = function(){
        $scope.newOrderToggleVar = $scope.newOrderToggleVar ? false : true;
    };

    $scope.createOrder = function() {
        $scope.newOrder.user = $scope.currentUser.id;
        //TODO: PARSE INPUT
        //$scope.newOrder.amountSet = $scope.newOrder.amountSet.replace(/^(\d+(,\d+)*)?$/gm);
        //$scope.newOrder.amountSet1 = $scope.newOrder.amountSet1.replace(/^(\d+(,\d+)*)?$/gm);
        OrderModel.create($scope.newOrder).then(function(model) {
            //$scope.orders.push($scope.newOrder);
            $scope.newOrder = {};
        });
    };

    $scope.chart = {
        chart: {polar: true},
        series: [{
            id: 'values',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.2, 0.15, 0.2, 0.15, 0.15, 0.15],
            color: 'rgba(153,0,0,0.3)',
            fillOpacity: 0.3,
        },{
            id: 'values1',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.2, 0.2, 0.1, 0.2, 0.1, 0.1],
            color: 'rgba(0,0,153,0.3)',
            fillOpacity: 0.3,
        },{
            id: 'values2',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.1, 0.1, 0.3, 0.2, 0.25, 0.05],
            color: 'rgba(0,153,0,0.3)',
            fillOpacity: 0.3,
        }],
        title: {text: ''},
        xAxis: {
            title: {text: null},
            categories: ['Sales', 'Marketing', 'Development', 'Customer Support', 'Information Technology', 'Administration'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            title: {text: null},
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        legend: {
            enabled: false,
            //align: 'right',
            //verticalAlign: 'top',
            //y: 70,
            //layout: 'vertical'
        },
        tooltip: {
        //    shared: true,
        },
        credits:{enabled:false},
    };

}])

.controller( 'MemberWalletCtrl', ['$sailsSocket', '$scope', '$stateParams', 'config', 'lodash', 'member', 'titleService', function MemberWalletController($sailsSocket, $scope, $stateParams, config, lodash, member, titleService) {
    $scope.currentUser = config.currentUser;
    $scope.member = member;
    titleService.setTitle($scope.member.username + '| Wallet | CRE8.XYZ');
    
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

}]);

