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
                return ContentModel.getSome('', '', 10, 0, 'createdAt DESC');
            }],
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getSome('', '', 10, 0, 'createdAt DESC');
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

	$scope.dailyTimeValue = [
		{text:'Rest', percentage: 33.333},
		{text:'Work', percentage: 25},
		{text:'Fun', percentage: 25},
		{text:'Learning', percentage: 8.333},
		{text:'Exercise', percentage: 8.333},
	];

	$scope.selectedMarket = [
		{text:'UNIVERSAL'}
	];

	$scope.chartMap = {
        chart: {
            polar: true,
            margin: [30, 30, 30, 30]
        },
        series: [],
        title: {text: ''},
        xAxis: {
            title: {text: null},
            categories: [],
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
            enabled: true,
            align: 'left',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },
        legend:false,
        tooltip:{shared: true,},
        credits:{enabled:false},
    };

    $scope.chartMap.series.push({
        id: 'values',
        type: 'area',
        name: 'UNIVERSAL',
        pointPlacement: 'on',
        data: [],
        fillOpacity: 0.3,
    });
    
    //PERFORMANCE....
    $scope.updateChart = function(){
    	$scope.chartMap.xAxis.categories = $scope.dailyTimeValue.map(function(obj){return obj.text});
	    $scope.chartMap.series[0].data = $scope.dailyTimeValue.map(function(obj){return obj.percentage});
    };
 	$scope.updateChart();
    
    $scope.$watch('dailyTimeValue', function(newValue, oldValue){

    	if (newValue != oldValue){
    		$scope.dailyTimeValue.map(function(obj){if(!obj.percentage){obj.percentage=0} return obj});
	    	var sum = 0;
	    	for (x in $scope.dailyTimeValue){sum+=$scope.dailyTimeValue[x].percentage;}
	    	var offset = 0;
	    	if (sum > 100){
	    		offset = (sum-100)/$scope.dailyTimeValue.length;
				for (x in $scope.dailyTimeValue){
					if ($scope.dailyTimeValue[x].percentage-offset > 0){
						$scope.dailyTimeValue[x].percentage = $scope.dailyTimeValue[x].percentage-offset;
					}
					else{$scope.dailyTimeValue[x].percentage = 0}
				}
			}
			$scope.updateChart();
		}

    }, true);

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
		//$scope.newOrder.push([setAlpha:{amount:1, identifier:'UNIVERSALTOKEN'}, setBeta:{amount:null, identifier:model+'+ONMINT'}]);
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