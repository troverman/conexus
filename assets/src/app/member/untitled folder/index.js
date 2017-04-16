angular.module( 'voetr.member', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'member', {
		abstract: true,
		url: '/member/:path',
        //url: '/:path', //---> would need to be loaded last
		views: {
			"main": {
                controller: 'MemberCtrl',
				templateUrl: 'member/index.tpl.html'
			}
		},
		resolve: {
            member: ['$stateParams', 'UserModel', function($stateParams, UserModel) {
                return UserModel.getByUsername($stateParams.path);
            }],
            committeeCount: ['member', 'CommitteeMemberModel', function(member, CommitteeMemberModel) {
                return CommitteeMemberModel.getCommitteeMemberCount('user', member.id);
            }],
            constituentCount: ['member', 'RepresentativeModel', function(member, RepresentativeModel) {
                return RepresentativeModel.getConstituentCount(member.id);
            }],
            myRepresentatives: ['config', 'RepresentativeModel', function(config, RepresentativeModel) {
                if(config.currentUser){return RepresentativeModel.getRepresentatives(config.currentUser);}
                else{return null}
            }],
            representativeCount: ['member', 'RepresentativeModel', function(member, RepresentativeModel) {
                return RepresentativeModel.getRepresentativeCount(member.id);
            }],
            voteCount: ['member', 'VoteVoteModel', function(member, VoteVoteModel) {
                return VoteVoteModel.getUserCount(member.id);
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
            profilePosts: ['member', 'PostModel', function(member, PostModel) {
                return PostModel.getByProfile(member.id, 100, 0, 'createdAt DESC');
            }],
            userPosts: ['member', 'PostModel', function(member, PostModel) {
                return PostModel.getByUser(member.id, 100, 0, 'createdAt DESC');
            }],
            representatives: ['member', 'RepresentativeModel', function(member, RepresentativeModel) {
                return RepresentativeModel.getRepresentatives(member.id);
            }],
            votes: ['member', 'VoteVoteModel', function(member, VoteVoteModel) {
                return VoteVoteModel.getByUser(member.id, 25, 0, 'createdAt DESC');
            }]
        }
    })
    .state( 'member.bills', {
        url: '/bills',
        views: {
            "memberBills": {
                controller: 'MemberBillsCtrl',
                templateUrl: 'member/templates/bills.tpl.html'
            }
        },
        resolve: {
            bills: ['BillModel', 'member', function(BillModel, member){
                return BillModel.getByMember(member.id);
            }]
        }
    })
    .state( 'member.committees', {
        url: '/committees',
        views: {
            "memberCommittees": {
                controller: 'MemberCommitteesCtrl',
                templateUrl: 'member/templates/committees.tpl.html'
            }
        },
        resolve: {
            committees: ['CommitteeMemberModel', 'member', function(CommitteeMemberModel, member){
                return CommitteeMemberModel.getSome('user', member.id, 25, 0);
            }],
            committeeCount: ['member', 'CommitteeMemberModel', function(member, CommitteeMemberModel) {
                return CommitteeMemberModel.getCommitteeMemberCount('user', member.id);
            }],
        }
    })
    .state( 'member.constituents', {
        url: '/constituents',
        views: {
            "memberConstituents": {
                controller: 'MemberConstituentsCtrl',
                templateUrl: 'member/templates/constituents.tpl.html'
            }
        },
        resolve: {
            constituents: ['member', 'RepresentativeModel', function(member, RepresentativeModel) {
                return RepresentativeModel.getConstituents(member.id);
            }],
            constituentCount: ['member', 'RepresentativeModel', function(member, RepresentativeModel) {
                return RepresentativeModel.getConstituentCount(member.id);
            }],
        }
    })
    .state( 'member.representatives', {
        url: '/representatives',
        views: {
            "memberRepresentatives": {
                controller: 'MemberRepresentativesCtrl',
                templateUrl: 'member/templates/representatives.tpl.html'
            }
        },
        resolve: {
            representatives: ['member', 'RepresentativeModel', function(member, RepresentativeModel) {
                return RepresentativeModel.getRepresentatives(member.id);
            }],
            representativeCount: ['member', 'RepresentativeModel', function(member, RepresentativeModel) {
                return RepresentativeModel.getRepresentativeCount(member.id);
            }],
        }
    })
    .state( 'member.votes', {
        url: '/votes',
        views: {
            "memberVotes": {
                controller: 'MemberVotesCtrl',
                templateUrl: 'member/templates/votes.tpl.html'
            }
        },
        resolve: {
            votes: ['member', 'VoteVoteModel', function(member, VoteVoteModel) {
                return VoteVoteModel.getByUser(member.id, 25, 0, 'createdAt DESC');
            }],
            voteCount: ['member', 'VoteVoteModel', function(member, VoteVoteModel) {
                return VoteVoteModel.getUserCount(member.id);
            }],
        }
    });
}])

.controller( 'MemberCtrl', ['$location',  '$sailsSocket', '$scope', 'committeeCount', 'constituentCount', 'config', 'member', 'myRepresentatives', 'representativeCount', 'RepresentativeModel', 'voteCount', function CommitteeCtrl( $location, $sailsSocket, $scope, committeeCount, constituentCount, config, member, myRepresentatives, representativeCount, RepresentativeModel, voteCount) {
    $scope.currentUser = config.currentUser;
    $scope.member = member;
    $scope.committeeCount = committeeCount.committeeMemberCount;
    $scope.constituentCount = constituentCount.constituentCount;
    $scope.myRepresentatives = myRepresentatives;
    $scope.representativeCount = representativeCount.representativeCount;
    $scope.voteCount = voteCount.voteCount;
    if(config.currentUser){$scope.isFollowing = $scope.myRepresentatives.filter(function(e){return e.representative.id == member.id}).length > 0}
    $scope.showFax = false;
    if (member.fax && member.fax != ','){$scope.showFax = true}

    $scope.selectAsRepresentative = function(){
        if($scope.currentUser){
            $scope.newRepresentative = {};
            $scope.newRepresentative.representative = $scope.member;
            $scope.newRepresentative.constituent = $scope.currentUser;
            RepresentativeModel.create($scope.newRepresentative).then(function(model) {
                $scope.newFollower = {};
            });
        }
        else{$location.path('/login')}
    };

    $scope.removeRepresentative = function() {
        if ($scope.isFollowing) {
            RepresentativeModel.delete($scope.member);
        }
    };

    $sailsSocket.subscribe('user', function (envelope) {
        switch(envelope.verb) {
            case 'updated':
                if(envelope.data.member.id == member.id){
                    $scope.member.unshift(envelope.data)
                }
                break;
        }
    });

    $sailsSocket.subscribe('representative', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                if(envelope.data.representative.id == member.id){
                    $scope.representativeCount = representativeCount.representativeCount + 1;
                   // RepresentativeModel.getRepresentativeCount(member.id).then(function(representativeCount){});
                }
                if(envelope.data.constituent.id == member.id){
                    $scope.constituentCount = constituentCount.constituentCount + 1;
                    //RepresentativeModel.getConstituentCount(member.id).then(function(constituentCount){});
                }
                break;
            case 'destroyed':
                if(envelope.data.representative.id == member.id){
                    $scope.representativeCount = representativeCount.representativeCount - 1; 
                }
                if(envelope.data.constituent.id == member.id){
                    $scope.constituentCount = constituentCount.constituentCount - 1;
                }
                break;
        }
    });

    //votevote --- voteCount
    //committeeMember -- committeeCount

}])

.controller( 'MemberActivityCtrl', ['$location','$sailsSocket', '$scope', 'config', 'member', 'PostModel', 'profilePosts', 'RepresentativeModel', 'titleService', 'userPosts', 'votes', 'VoteVoteModel', function MemberController( $location, $sailsSocket, $scope, config, member, PostModel, profilePosts, RepresentativeModel, titleService, userPosts, votes, VoteVoteModel) {
	titleService.setTitle(member.username + ' - voetr');
    $scope.currentUser = config.currentUser;
	$scope.member = member;
	$scope.votes = votes;
    //sloppy
    $scope.posts = profilePosts.concat(userPosts);
    $scope.skip = 0;
    $scope.newPost = {};
    $scope.createPost = function(){
        if($scope.currentUser){
            $scope.newPost.user = $scope.currentUser.id;
            $scope.newPost.profile = $scope.member.id
            PostModel.create($scope.newPost).then(function(model){
                $scope.newPost = {};
            });
        }
        else{$location.path('/login')}
    };

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 25;
        //Activity Model -- SearchModel? etc... --> prolly SearchByMember(member.id)
        VoteVoteModel.getByUser($scope.member.id, 25, $scope.skip).then(function(committees) {
            Array.prototype.push.apply($scope.committees, committees);
            console.log($scope.committees);
        });
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

    $sailsSocket.subscribe('votevote', function (envelope) {
        console.log(envelope)
        switch(envelope.verb) {
            case 'created':
                $scope.votes.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.votes, {id: envelope.id});
                break;
        }
    });

}])

.controller( 'MemberBillsCtrl', ['$sailsSocket', '$scope', 'BillModel', 'bills', 'CommitteeMemberModel', 'config', 'member', 'titleService', function MemberController( $sailsSocket, $scope, CommitteeMemberModel, bills, CommitteeMemberModel, config, member, titleService ) {
    titleService.setTitle(member.username + ' - voetr');
    $scope.currentUser = config.currentUser;
    $scope.member = member;
    $scope.bills = bills;
    $scope.skip = 0;

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 25;
        //CommitteeMemberModel.getConstituents($scope.member.id, 25, $scope.skip).then(function(committees) {
        //    Array.prototype.push.apply($scope.committees, committees);
       // });
    };

    $sailsSocket.subscribe('committeemember', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.committees.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.committees, {id: envelope.id});
                break;
        }
    });

}])

.controller( 'MemberCommitteesCtrl', ['$sailsSocket', '$scope', 'committeeCount', 'CommitteeMemberModel', 'committees', 'config', 'member', 'titleService', function MemberController( $sailsSocket, $scope, committeeCount, CommitteeMemberModel, committees, config, member, titleService ) {
    titleService.setTitle(member.username + ' - voetr');
    $scope.currentUser = config.currentUser;
    $scope.member = member;
    $scope.committeeCount = committeeCount.committeeMemberCount;
    $scope.committees = committees;
    $scope.skip = 0;

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 25;
        CommitteeMemberModel.getSome('user', $scope.member.id, 25, $scope.skip).then(function(committees) {
            Array.prototype.push.apply($scope.committees, committees);
        });
    };

    $sailsSocket.subscribe('committeemember', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.committees.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.committees, {id: envelope.id});
                break;
        }
    });

}])

.controller( 'MemberConstituentsCtrl', ['$sailsSocket', '$scope', 'config', 'constituentCount', 'constituents', 'member', 'RepresentativeModel', 'titleService', function MemberController( $sailsSocket, $scope, config, constituentCount, constituents, member, RepresentativeModel, titleService ) {
    titleService.setTitle(member.username + ' - voetr');
    $scope.currentUser = config.currentUser;
    $scope.member = member;
    $scope.constituentCount = constituentCount.constituentCount;
    $scope.constituents = constituents;
    $scope.skip = 0;

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 25;
        RepresentativeModel.getConstituents($scope.member.id, 25, $scope.skip).then(function(constituents) {
            Array.prototype.push.apply($scope.constituents, constituents);
        });
    };

    //not final
    $sailsSocket.subscribe('representative', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                if(envelope.data.representative.id == member.id){
                    $scope.constituents.unshift(envelope.data);
                }
                break;
            case 'destroyed':
                if(envelope.data.representative.id == member.id){
                    $scope.constituents.unshift(envelope.data);
                }
                break;
        }
    });

}])

.controller( 'MemberRepresentativesCtrl', ['$sailsSocket', '$scope', 'config', 'member', 'representativeCount', 'RepresentativeModel', 'representatives', 'titleService', function MemberController( $sailsSocket, $scope, config, member, representativeCount, RepresentativeModel, representatives, titleService ) {
    titleService.setTitle(member.username + ' - voetr');
    $scope.currentUser = config.currentUser;
    $scope.member = member;
    $scope.representativeCount = representativeCount.representativeCount;
    $scope.representatives = representatives;
    $scope.skip = 0;

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 25;
        RepresentativeModel.getRepresentatives($scope.member.id, 25, $scope.skip).then(function(representatives) {
            Array.prototype.push.apply($scope.representatives, representatives);
        });
    };

    $sailsSocket.subscribe('representative', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                if(envelope.data.constituent.id == member.id){
                    $scope.constituents.unshift(envelope.data);
                }
                break;
            case 'destroyed':
                if(envelope.data.constituent.id == member.id){
                    $scope.constituents.unshift(envelope.data);
                }
                break;
        }
    });

}])

.controller( 'MemberVotesCtrl', ['$sailsSocket', '$scope', 'config', 'member', 'titleService', 'voteCount', 'votes', 'VoteVoteModel', function MemberController( $sailsSocket, $scope, config, member, titleService, voteCount, votes, VoteVoteModel ) {
    titleService.setTitle(member.username + ' - voetr');
    $scope.currentUser = config.currentUser;
    $scope.member = member;
    $scope.voteCount = voteCount.voteCount;
    $scope.votes = votes;
    $scope.skip = 0;

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 25;
        VoteVoteModel.getByUser($scope.member.id, 25, $scope.skip).then(function(votes) {
            Array.prototype.push.apply($scope.votes, votes);
        });
    };

    //not final
     $sailsSocket.subscribe('votevote', function (envelope) {
        console.log(envelope)
        switch(envelope.verb) {
            case 'created':
                $scope.votes.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.votes, {id: envelope.id});
                break;
        }
    });

}])
