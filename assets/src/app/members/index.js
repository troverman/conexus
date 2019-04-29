angular.module( 'conexus.members', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'members', {
		url: '/members',
		views: {
			"main": {
				controller: 'MembersCtrl',
				templateUrl: 'members/index.tpl.html'
			}
		},

        //TODO: DEPRECIATE RESOLVE
		resolve: {
            members: ['UserModel', function(UserModel){
                return UserModel.getSome({limit:1000, skip:0, sort:'createdAt DESC'});
            }],
            followers: ['$rootScope', 'FollowerModel', function($rootScope, FollowerModel) {
                if (!$rootScope.currentUser){return null}
                else{return FollowerModel.getFollowing($rootScope.currentUser)}
            }],
        }
	});
}])

.controller( 'MembersCtrl', ['$rootScope', '$sailsSocket', '$sce', '$scope', 'FollowerModel', 'followers', 'members', 'SearchModel', 'toaster', 'UserModel', function MembersController( $rootScope, $sailsSocket, $sce, $scope, FollowerModel, followers, members, SearchModel, toaster, UserModel ) {
	
    $scope.members = members.map(function(obj){
        obj.model = 'MEMBER';
        return obj;
    });
    
    $scope.selectedSort = 'createdAt DESC';
    $scope.skip = 0;

    //if logged in
    if (followers){
        $scope.followers = followers.map(function(obj){return obj.followed});
        $scope.members.map(function(obj){
            var index = $scope.followers.map(function(obj1){return obj1.id}).indexOf(obj.id);
            if (index != -1){obj.isFollowing = true;}
            if (index == -1){obj.isFollowing = false;}
            return obj;
        });
    }

    //DEPRECIATE 'TOTAL WORK'
    $scope.sortText = {'totalWork DESC':'Total Reputation','createdAt DESC':'Date Joined'}

    $scope.totalMap = {
        chart: {zoomType: 'x'},
        series: [{
            id: 'Reputation',
            type: 'column',
            name: 'Reputation',
            data: []
        }],
        title: {text: ''},
        xAxis: {
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {text: null},
            categories: [],
        },
        legend: {enabled: false},
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };

    $scope.follow = function(model){
        $scope.newFollower = {
            followed:model.id,
            follower:$rootScope.currentUser.id,
        };
        if (!model.isFollowing){
            FollowerModel.create($scope.newFollower).then(function(followerModel) {
                var index = $scope.members.map(function(obj){return obj.id}).indexOf($scope.newFollower.followed);
                $scope.members[index].isFollowing = true;
                $scope.pop('Following!', 'You are now follwing '+ model.username);
                $scope.newFollower = {};
            });
        }
        if (model.isFollowing){
            //FollowerModel.delete($scope.newFollower).then(function(followerModel){
                $scope.pop('Unfollowed!', 'You Unfollowed '+ model.username);
                var index = $scope.members.map(function(obj){return obj.id}).indexOf($scope.newFollower.followed);
                $scope.members[index].isFollowing = false;
            //});
        }
    };

    //ROOT
    $scope.pop = function(title, body){
        toaster.pop({
            type:'success',//info, wait, success, warning
            title: title,
            body: body,
            onShowCallback: function (toast) { 
                var audio = new Audio('audio/ping.mp3');
                audio.play()
                .then(function(audio){console.log('dingdong')})
                .catch(function(err){console.log(err)})
            }
        });
    };

    $scope.updateChart = function(){
        $scope.totalMap.series = [{
            id: 'Reputation',
            type: 'column',
            name: 'Reputation',
            data: [],
            turboThreshold: 10000,
        }];
        $scope.totalMap.xAxis.categories = [];
        for (x in $scope.members){
            for (y in Object.keys($scope.members[x].reputation)){
                if ($scope.members[x].reputation[Object.keys($scope.members[x].reputation)[y]]){
                    var index = $scope.totalMap.xAxis.categories.indexOf(Object.keys($scope.members[x].reputation)[y])
                    if (index == -1){
                        $scope.totalMap.series[0].data.push($scope.members[x].reputation[Object.keys($scope.members[x].reputation)[y]]);
                        $scope.totalMap.xAxis.categories.push(Object.keys($scope.members[x].reputation)[y]);
                    }
                    else{
                        $scope.totalMap.series[0].data[index] += $scope.members[x].reputation[Object.keys($scope.members[x].reputation)[y]]
                    }
                }
            }
        }
    };
    $scope.updateChart();

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 1000;
        $rootScope.stateIsLoading = true;
        UserModel.getSome({limit:100, skip:$scope.skip, sort:$scope.selectedSort}).then(function(members) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.members, members);
            $scope.updateChart();
        });
    };

    $scope.search = function(){
        UserModel.getSome({search:$scope.searchQuery, limit:100, skip:0, sort:'createdAt DESC'}).then(function(models){
            $scope.members = models;
            $scope.updateChart();
        });
    };

    $scope.selectSort = function(sort){
        $scope.selectedSort = sort;
        $rootScope.stateIsLoading = true;
        UserModel.getSome({limit:100, skip:$scope.skip, sort:$scope.selectedSort}).then(function(members) {
            $rootScope.stateIsLoading = false;
            $scope.members = members;
            $scope.updateChart();
        });
    };

}]);