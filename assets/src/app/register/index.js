angular.module( 'conexus.register', [
])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'register', {
		url: '/register',
		views: {
			"main": {
				controller: 'RegisterCtrl',
				templateUrl: 'register/index.tpl.html'
			}
		},
        resolve:{
            contentList: ['ContentModel', function(ContentModel){
                return ContentModel.getSome('', '', 20, 0, 'createdAt DESC');
            }],
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getSome('', '', 50, 0, 'createdAt DESC');
            }],
        }
	});
}])
.controller( 'RegisterCtrl', ['$location', '$scope', 'config', 'contentList', 'tasks', 'titleService', function RegisterController( $location, $scope, config, contentList, tasks, titleService ) {
	titleService.setTitle('Register | CRE8.XYZ');
	$scope.contentList = contentList;
	$scope.currentUser = config.currentUser;
	if ($scope.currentUser){$location.path('/')}
	$scope.newMember = {};
	$scope.newOrder = [];
	$scope.showIntro = true;
	$scope.showValue = false;
	$scope.showDaily = false;
	$scope.showPersonal = false;
	$scope.showFinal = false;
	$scope.tasks = tasks;

	$scope.continue = function(page){
		console.log(page)
		if (page === 1){
			$scope.showIntro = !$scope.showIntro;
			$scope.showValue = !$scope.showValue;
		}
		if (page === 2){
			$scope.showValue = !$scope.showValue;
			$scope.showDaily = !$scope.showDaily;
		}
		if (page === 3){
			$scope.showDaily = !$scope.showDaily;
			$scope.showPersonal = !$scope.showPersonal;
		}
		if (page === 4){
			$scope.showPersonal = !$scope.showPersonal;
			$scope.showFinal = !$scope.showFinal;
		}
	};

	$scope.createPosition = function(model){
    	$scope.newOrder.push([{amount:1, identifier:'UNIVERSALTOKEN'}, {amount:null, identifier:model+'+ONMINT'}]);
    };

	//TODO: BETTER | TAG STORAGE
    $scope.loadTags = function(){
        $scope.tags = $scope.contentList.map(function(obj){
            var returnObj = {};
            if(obj.tags){obj.tags = obj.tags.split(',')}
            returnObj = obj.tags;
            return returnObj;
        });
        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
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

    $scope.search = function(model){};

}]);