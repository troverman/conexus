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
                return UserModel.get({limit:1000, skip:0, sort:'createdAt DESC'});
            }],
            followers: ['$rootScope', 'FollowerModel', function($rootScope, FollowerModel) {
                if (!$rootScope.currentUser){return null}
                else{return FollowerModel.getFollowing($rootScope.currentUser)}
            }],
        }
	});
}])

.controller( 'MembersCtrl', ['$rootScope', '$sailsSocket', '$sce', '$scope', 'FollowerModel', 'followers', 'members', 'SearchModel', 'toaster', 'UserModel', function MembersController( $rootScope, $sailsSocket, $sce, $scope, FollowerModel, followers, members, SearchModel, toaster, UserModel ) {
	
    $scope.members = members.data.map(function(obj){
        obj.model = 'MEMBER';
        return obj;
    });
    $scope.memberCount = members.info.count;
    
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

    $scope.pieMap = {
        chart: {},
        series: [{
            id: 'Pie',
            type: 'pie',
            name: 'Pie',
            colorByPoint: true,
            data: [{name: 'Reputation',y: []}]
        }], 
        title: {text: ''},
        xAxis: {title: {text: null}},
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
        var groupObject = {};
        for (x in $scope.members){
            if (!$scope.members[x].reputation){$scope.members[x].reputation = $scope.members[x].balance}
            for (y in Object.keys($scope.members[x].reputation)){
                if(isNaN($scope.members[x].reputation[Object.keys($scope.members[x].reputation)[y]])){
                    groupObject[Object.keys($scope.members[x].reputation)[y]] = 0
                }
                else{
                    if (!groupObject[Object.keys($scope.members[x].reputation)[y]]){groupObject[Object.keys($scope.members[x].reputation)[y]] = 0}
                    groupObject[Object.keys($scope.members[x].reputation)[y]] += parseFloat($scope.members[x].reputation[Object.keys($scope.members[x].reputation)[y]]);
                }
            }
        }
        var sortable = [];
        for (var dimension in groupObject) {sortable.push([dimension, groupObject[dimension]])}
        sortable.sort(function(a, b) {return b[1] - a[1]});
        for (x in sortable){
            if (x < 100){
                $scope.pieMap.series[0].data.push({
                    name: sortable[x][0],
                    y: sortable[x][1],
                });
            }
            if (x < 250){
                $scope.totalMap.xAxis.categories.push(sortable[x][0]);
                $scope.totalMap.series[0].data.push(sortable[x][1]);
            }
        }
    };
    $scope.updateChart();

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 1000;
        $rootScope.stateIsLoading = true;
        UserModel.get({limit:100, skip:$scope.skip, sort:$scope.selectedSort}).then(function(members) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.members, members);
            $scope.updateChart();
        });
    };

    $scope.search = function(){
        UserModel.get({search:$scope.searchQuery, limit:100, skip:0, sort:'createdAt DESC'}).then(function(models){
            $scope.members = models;
            $scope.updateChart();
        });
    };

    $scope.selectSort = function(sort){
        $scope.selectedSort = sort;
        $rootScope.stateIsLoading = true;
        UserModel.get({limit:100, skip:$scope.skip, sort:$scope.selectedSort}).then(function(members) {
            $rootScope.stateIsLoading = false;
            $scope.members = members;
            $scope.updateChart();
        });
    };

}]);