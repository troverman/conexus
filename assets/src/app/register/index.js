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
                return ContentModel.getSome('', '', 100, 0, 'createdAt DESC');
            }],
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getSome('', '', 100, 0, 'createdAt DESC');
            }],
        }
	});
}])
.controller( 'RegisterCtrl', ['$http', '$location', '$rootScope', '$scope', 'config', 'contentList', 'tasks', 'titleService', function RegisterController( $http, $location, $rootScope, $scope, config, contentList, tasks, titleService ) {
	titleService.setTitle('Register | CRE8.XYZ');
	$scope.contentList = contentList;
	$scope.currentUser = config.currentUser;
	if ($scope.currentUser){$location.path('/')}
	$scope.newMember = {};
	$scope.newOrder = [];
    $scope.newOrderNEW = [];
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

	$scope.chartMapTime = {
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

    $scope.chartMapTime.series.push({
        id: 'values',
        type: 'area',
        name: 'UNIVERSAL',
        pointPlacement: 'on',
        data: [],
        fillOpacity: 0.3,
    });
    
    //PERFORMANCE....
    $scope.updateChartTime = function(){
        $scope.chartMapTime.xAxis.categories = $scope.dailyTimeValue.map(function(obj){return obj.text});
        $scope.chartMapTime.series[0].data = $scope.dailyTimeValue.map(function(obj){return obj.percentage});
    };
    $scope.updateChartTime();

    $scope.chartMapTotal = {
        chart: {
            polar: true,
            margin: [30, 30, 30, 30]
        },
        series: [{
            id: 'values',
            type: 'area',
            name: 'UNIVERSAL',
            pointPlacement: 'on',
            fillOpacity: 0.3,
            data:[1,1,1,1,1,1,1,1],
        }],
        title: {text: ''},
        xAxis: {
            title: {text: null},
            categories: ['LOVE', 'ART', 'PEACE', 'SHELTER', 'REST', 'EXPERIENCE', 'HEALTH', 'HUMAN'],
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

    console.log($scope.chartMapTotal);
    //PERFORMANCE....
    $scope.updateChartTotal = function(){
        $scope.chartMapTotal.xAxis.categories = $scope.newOrder.map(function(obj){return obj[1].identifier.split('+')[0]});
        $scope.chartMapTotal.series[0].data = $scope.newOrder.map(function(obj){return obj[0].amount});
        console.log( $scope.chartMapTotal)
    };

    $scope.pieTotal = {
        chart: {},
        series: [{
            id: 'Pie',
            type: 'pie',
            name: 'Pie',
            colorByPoint: true,
            data: [{
                name: 'Assets',
                y: [],
            }]
        }],  
        title: {text: ''},
        xAxis: {title: {text: null}},
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };

    $scope.updatePieTotal = function(){
        var data = $scope.newOrder.map(function(obj){return {name: obj[1].identifier.split('+')[0], y:obj[0].amount}})
        $scope.pieTotal.series[0].data = data;
        console.log( $scope.pieTotal)
    };

    //lol
    //do absolute
    $scope.$watch('newOrder', function(newValue, oldValue){
        if (oldValue != newValue){
            $scope.updateChartTotal();
            $scope.updatePieTotal();
        }
    }, true);


    //lol
    //do absolute
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
            $scope.updateChartTime();
        }
    }, true);
    
    //lol
	$scope.continue = function(page){
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

    //WORK!
	$scope.createPosition = function(model){
        if($scope.newOrder.map(function(obj){return obj[1].identifier.split('+')[0]}).indexOf(model) == -1){

            //OBJ OR ARRAY?

            var setAlpha = {
                'UNIVERSALTOKEN':1
            };
            var setBeta = {};
            setBeta['CRE8+TIME+'+model.toUpperCase()+'+ONMINT+SPONSOR+[ADDRESS]'] = 3600;

            //var setAlpha = [
            //    {name:'UNIVERSALTOKEN', amount:1}
            //];
            //var setBeta = [
            //    {name:model+'+[ADDRESS]+SPONSOR', amount:3600}
            //];

        	$scope.newOrderNEW.push({
                setAlpha:setAlpha,
                setBeta:setBeta,
                type:'ONBOOK',
                status:'CONTINUAL'
            });

            //$scope.newOrderLIST.push({
            //    order:[
            //        [{string:'UNIVERSALTOKEN',amount:1}],
            //        [{string:model+'+[ADDRESS]+SPONSOR',amount:3600}]
            //    ],
            //    type:'ONBOOK',
            //    status:'CONTINUAL'
            //});

            $scope.newOrder.push(
                [
                    {amount:1, identifier:'UNIVERSALTOKEN'}, 
                    {amount:3600, identifier:'CRE8+TIME+'+model.toUpperCase()+'+ONMINT+SPONSOR+[ADDRESS]'}
                ]
            );

        }
    };

    //LEL | WORK!
    $scope.registerUser = function(){
        $scope.newMember.order = $scope.newOrderNEW;
        var data = JSON.stringify($scope.newMember);
        console.log($scope.newMember);
        $rootScope.stateIsLoading = true;
        $http({method:'POST', url:'/auth/local/register', data:data}).then(function(newModel){
            
            console.log(newModel.data);

            //MEG
            config.currentUser = newModel.data;
            $rootScope.currentUser = newModel.data;

            $location.path('/');

        });
    }

    $scope.activity = [].concat.apply([], [$scope.contentList, $scope.tasks]);

    $scope.loadTags = function(){
        $scope.tags = $scope.activity.map(function(obj){
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
    };
    $scope.loadTags();

}]);