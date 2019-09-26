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
		resolve: {
            members: ['UserModel', function(UserModel){
                return UserModel.get({limit:250, skip:0, sort:'createdAt DESC'});
            }]
        }
	});
}])

.controller( 'MembersCtrl', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'FollowerModel', 'members', 'UserModel', 'ValidationModel', function MembersController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, FollowerModel, members, SearchModel, toaster, UserModel, ValidationModel ) {
	
    $scope.members = members.data.map(function(obj){obj.model = 'MEMBER'; return obj;});
    $scope.memberCount = members.info.count;  
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

    if ($rootScope.currentUser){
        //memberFollowers
        $scope.members.map(function(obj){
            var index = -1; //$scope.followers.map(function(obj1){return obj1.id}).indexOf(obj.id);
            if (index != -1){obj.isFollowing = true;}
            if (index == -1){obj.isFollowing = false;}
            return obj;
        });
    }

    //DO IN NAV
    $scope.follow = function(model){
        if($rootScope.currentUser){
            var validationModel = {
                user:$rootScope.currentUser.id,
                context:{general:100},
                associatedModels:[
                    {type:'MEMBER', id:$rootScope.currentUser.id},
                    {type:'MEMBER', id:model.id},
                ],
            };
            if (!model.isFollowing){
                ValidationModel.create(validationModel).then(function(newValidation){
                    var index = $scope.members.map(function(obj){return obj.id}).indexOf($scope.newFollower.followed);
                    $scope.members[index].isFollowing = true;
                    $scope.members[index].followerCount++;
                    $rootScope.pop('Following!', 'You are now follwing '+ model.username);
                });
            }
            if (model.isFollowing){
                //ValidationModel.create(validationModel).then(function(newValidation){
                    var index = $scope.members.map(function(obj){return obj.id}).indexOf($scope.newFollower.followed);
                    $scope.members[index].isFollowing = false;
                    $scope.members[index].followerCount--;
                    $rootScope.pop('Unfollowed!', 'You Unfollowed '+ model.username);
                //});
            }
        }
        else{$mdSidenav('login').toggle();}

        /*
        $scope.newFollower = {
            followed:model.id,
            follower:$rootScope.currentUser.id,
        };
        if (!model.isFollowing){
            FollowerModel.create($scope.newFollower).then(function(followerModel) {
                var index = $scope.members.map(function(obj){return obj.id}).indexOf($scope.newFollower.followed);
                $scope.members[index].isFollowing = true;
                $rootScope.pop('Following!', 'You are now follwing '+ model.username);
                $scope.newFollower = {};
            });
        }
        if (model.isFollowing){
            $rootScope.pop('Unfollowed!', 'You Unfollowed '+ model.username);
            var index = $scope.members.map(function(obj){return obj.id}).indexOf($scope.newFollower.followed);
            $scope.members[index].isFollowing = false;
        }
        */
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

}]);