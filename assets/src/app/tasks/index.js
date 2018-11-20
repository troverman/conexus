angular.module( 'conexus.tasks', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'tasks', {
		url: '/tasks',
		views: {
			"main": {
				controller: 'TasksCtrl',
				templateUrl: 'tasks/index.tpl.html'
			}
		},
        resolve: {
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getSome('', '', 20, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'TasksCtrl', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'TaskModel', 'tasks', 'titleService', function TasksController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, TaskModel, tasks, titleService ) {
	titleService.setTitle('Tasks | CRE8.XYZ');
	$scope.selectedSort = 'createdAt DESC';
	$scope.skip = 0;
	$scope.sortText = {'trendingScore DESC':'Trending','createdAt DESC':'Date Created','workCount DESC': 'Total Work'}
	$scope.selectedTag = '';
    $scope.tasks = tasks;

    $scope.tasks.map(function(obj){
        obj.tags = obj.tags.split(',');
        return obj;
    });

    //TODO: ALL
    $scope.locations = ['Chapel Hill', 'Knoxville', 'Los Angeles', 'New York City']

    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 20;
        $rootScope.stateIsLoading = true;
        TaskModel.getSome('', '', 100, $scope.skip, $scope.selectedSort).then(function(tasks) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.tasks, tasks);
            $scope.tasks = tasks.map(function(obj){
                obj.tags = obj.tags.split(',');
                return obj;
            });
            $scope.loadAssociations();
            $scope.loadTags();
        });
    };

     $scope.filterContent = function(filter) {
        $rootScope.stateIsLoading = true;
        TaskModel.getSome('tag', filter, 20, 0, 'createdAt DESC').then(function(tasks){
            $rootScope.stateIsLoading = false;
            $scope.selectedTag = filter;
            $scope.tasks = tasks.map(function(obj){
                obj.tags = obj.tags.split(',');
                return obj;
            });
            $scope.loadTags();
        });
    };

    //TODO: BETTER
    //TODO: MANY TO MANY
    //TODO: SET | FACTOR
    //$scope.associations = $scope.tasks.map(function(obj){
    //    return obj.project.title;
    //});
    $scope.loadAssociations = function(){

        $scope.associations = $scope.tasks.map(function(obj){
            return obj.project.title;
        });

        $scope.associations = [].concat.apply([], $scope.associations);
        $scope.associations = $scope.associations.filter(function(e){return e});
         
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}

        $scope.sortedAssociationArray = [];
        for (x in $scope.associations){
            var amount = countInArray($scope.associations, $scope.associations[x]);
            if ($scope.sortedAssociationArray.map(function(obj){return obj.element}).indexOf($scope.associations[x]) == -1){
                $scope.sortedAssociationArray.push({amount:amount, element:$scope.associations[x]})
            }
        }
        $scope.sortedAssociationArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
        
    }
    $scope.loadAssociations();

    //TODO: BETTER | TAG STORAGE
    $scope.loadTags = function(){

        $scope.tags = $scope.tasks.map(function(obj){
            return obj.tags;
        });

        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
         
        function countInArray(array, value) {
            return array.reduce(function(n, x){ return n + (x === value)}, 0);
        }

        $scope.sortedTagArray = [];
        for (x in $scope.tags){
            var amount = countInArray($scope.tags, $scope.tags[x]);
            if ($scope.sortedTagArray.map(function(obj){return obj.element}).indexOf($scope.tags[x]) == -1){
                $scope.sortedTagArray.push({amount:amount, element:$scope.tags[x]})
            }
        }
        $scope.sortedTagArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
        
    }
    $scope.loadTags();

     $scope.renderContent = function(content){
        if (content){
            if (!content.includes('>')){
                var replacedText = content.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                return $sce.trustAsHtml(replacedText);
            }
            else{return $sce.trustAsHtml(content)}
        }
    };

    $scope.selectSort = function(sort){
		$scope.selectedSort = sort;
		$rootScope.stateIsLoading = true;
        TaskModel.getSome('', '', 100, $scope.skip, $scope.selectedSort).then(function(tasks) {
			$rootScope.stateIsLoading = false;
			$scope.tasks = tasks.map(function(obj){
                obj.tags = obj.tags.split(',');
                return obj;
            });
		});
	};

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        TaskModel.getSome('search', $scope.searchQuery, 20, 0, 'createdAt DESC').then(function(tasks){
            console.log(tasks)
            $rootScope.stateIsLoading = false;
            $scope.tasks = tasks.map(function(obj){
                obj.tags = obj.tags.split(',');
                return obj;
            });
        });
    };

    $scope.tokenToggle = function(){
        $mdSidenav('tokens').toggle();
        $rootScope.globalTokens = $scope.tokens;
    };

}]);