angular.module( 'conexus.register', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'register', {
		url: '/register',
		views: {"main": {controller: 'RegisterCtrl', templateUrl: 'register/index.tpl.html'}}
	});
}])
.controller( 'RegisterCtrl', ['$http', '$location', '$rootScope', '$scope', 'toaster', function RegisterController( $http, $location, $rootScope, $scope, contentList, tasks, toaster ) {
	
    if ($rootScope.currentUser){$location.path('/')}
	$scope.newMember = {};

    $scope.registerUser = function(){
        $scope.valid = true;
        if ($scope.newMember.password){
            if ($scope.newMember.password.length < 8){
                $scope.pop('ERROR', 'Password must be longer than 8 Characters');
                $scope.valid = false;
            }
        }
        else{
            $scope.pop('ERROR', 'Password must be longer than 8 Characters');
            $scope.valid = false;
        }
        if (!$scope.newMember.username){
            $scope.pop('ERROR', 'Invalid Username');
            $scope.valid = false;
        }
        if (!$scope.newMember.email){
            $scope.pop('ERROR', 'Invalid Email');
            $scope.valid = false;
        }
        var data = JSON.stringify($scope.newMember);
        $rootScope.stateIsLoading = true;
        if ($scope.valid){
            $http({method:'POST', url:'/auth/local/register', data:data}).then(function(newModel){
                $rootScope.currentUser = newModel.data;
                $location.path('/');
            });
        }
    };

    $scope.pop = function(title, body){
        toaster.pop({
            type:'warning',
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


    //VALUE MAP CONTROLS
    /*
	$scope.dailyTimeValue = [
		{text:'Rest', percentage: 33.333},
		{text:'Work', percentage: 25},
		{text:'Fun', percentage: 25},
		{text:'Learning', percentage: 8.333},
		{text:'Exercise', percentage: 8.333},
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
    $scope.updateChartTotal = function(){
        $scope.chartMapTotal.xAxis.categories = $scope.newOrder.map(function(obj){return obj[1].identifier.split('+')[2]});
        $scope.chartMapTotal.series[0].data = $scope.newOrder.map(function(obj){return obj[0].amount});
        console.log($scope.chartMapTotal)
    };
    $scope.pieTotal = {
        chart: {},
        series: [{
            id: 'Pie',
            type: 'pie',
            name: 'Pie',
            colorByPoint: true,
            data: [
                {name:'LOVE',y:1},
                {name:'ART',y:1},
                {name:'PEACE',y:1},
                {name:'SHELTER',y:1},
                {name:'EXPERIENCE',y:1},
                {name:'HEALTH',y:1},
                {name:'HUMAN',y:1},
            ]
        }],  
        title: {text: ''},
        xAxis: {title: {text: null}},
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };
    $scope.updatePieTotal = function(){
        var data = $scope.newOrder.map(function(obj){return {name: obj[1].identifier.split('+')[2], y:obj[0].amount}})
        $scope.pieTotal.series[0].data = data;
    };
    $scope.removePosition = function(model){
        var index = $scope.newOrder.map(function(obj){return obj[0].identifier}).indexOf(model[0].identifier);
        if (index != -1){$scope.newOrder.splice(index, 1)}
    };
    $scope.$watch('newOrder', function(newValue, oldValue){
        if (oldValue != newValue){
            $scope.updateChartTotal();
            $scope.updatePieTotal();
        }
    }, true);
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
    $scope.changePage = function(model){
        window.scrollTo(0, 0);
        if (typeof model === 'number'){$scope.pageNumber = model;} 
        else if (model == 'FORWARD'){$scope.pageNumber++;}
        else if (model == 'BACK'){$scope.pageNumber--;}
        else{$scope.pageNumber++}
    };
	$scope.createPosition = function(model){
        if($scope.newOrder.map(function(obj){return obj[1].identifier.split('+')[2]}).indexOf(model) == -1){
            var setAlpha = {
                'UNIVERSALTOKEN':1
            };
            var setBeta = {};
            setBeta['CRE8+TIME+'+model.toUpperCase()+'+ONMINT+SPONSOR+[ADDRESS]'] = 86400;
        	$scope.newOrderNEW.push({
                setAlpha:setAlpha,
                setBeta:setBeta,
                type:'ONBOOK',
                status:'CONTINUAL'
            });
            $scope.newOrder.push(
                [
                    {amount:1, identifier:'UNIVERSALTOKEN'}, 
                    {amount:86400, identifier:'CRE8+TIME+'+model.toUpperCase()+'+ONMINT+SPONSOR+[ADDRESS]'}
                ]
            );
        }
    };
    */

}]);