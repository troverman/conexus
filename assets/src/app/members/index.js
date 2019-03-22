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
                return UserModel.getSome('', '', 1000, 0, 'createdAt DESC');
            }],
            //followers: ['FollowerModel', 'config', function(FollowerModel, config) {
            //    return FollowerModel.getFollowing(config.currentUser);
            //}],
        }
	});
}])

.controller( 'MembersCtrl', ['$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'members', 'SearchModel', 'titleService', 'UserModel', function MembersController( $rootScope, $sailsSocket, $sce, $scope, config, lodash, members, SearchModel, titleService, UserModel ) {
	titleService.setTitle('Members | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.members = members;
    $scope.selectedSort = 'createdAt DESC';
    $scope.skip = 0;

    //$scope.followers = $scope.followers.map(function(obj){return obj.followed});
    $scope.members.map(function(obj){
        //var index = $scope.followers.map(function(obj1){return obj1.id}).indexOf(obj.id);
        //if (index != -1){obj.isFollowing = true;}
        //if (index == -1){obj.isFollowing = false;}
        obj.isFollowing = false;
        return obj;
    });
    
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
        title: {text: 'Total Reputation'},
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
        UserModel.getSome(1000, $scope.skip, $scope.selectedSort).then(function(members) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.members, members);
            $scope.updateChart();
        });
    };

    $scope.search = function(){
        UserModel.getSome('search', $scope.searchQuery, 1000, 0, 'createdAt DESC').then(function(models){
            $scope.members = models;
            $scope.updateChart();
        });
    };

    $scope.selectSort = function(sort){
        $scope.selectedSort = sort;
        $rootScope.stateIsLoading = true;
        UserModel.getSome(100, $scope.skip, $scope.selectedSort).then(function(members) {
            $rootScope.stateIsLoading = false;
            $scope.members = members;
            $scope.updateChart();
        });
    };

}]);