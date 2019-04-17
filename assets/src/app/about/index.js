angular.module( 'conexus.about', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'about', {
		url: '/about',
		views: {
			"main": {
				controller: 'AboutCtrl',
				templateUrl: 'about/index.tpl.html'
			}
		},
        resolve:{
            contentList: ['ContentModel', function(ContentModel){
                return ContentModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],
            projects: ['ProjectModel', function(ProjectModel){
                return ProjectModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getSome({limit:10, skip:0, sort:'createdAt DESC'});
            }],
        }
	});
}])

.controller( 'AboutCtrl', ['$sce', '$scope', 'contentList', 'titleService', 'projects', 'tasks', function AboutController( $sce, $scope, contentList, titleService, projects, tasks ) {
	titleService.setTitle('About | CRE8.XYZ');

    $scope.videos = ['videos/rocket.webm','videos/cube.mp4','videos/energy.mp4', 'videos/galaxies.mp4','videos/geometry.mp4', 'videos/video.mp4']//, 'https://s3-us-west-2.amazonaws.com/voetr/washington.mp4'];
    $scope.selectedVideo = $scope.videos[Math.floor(Math.random()*$scope.videos.length)];
    $scope.selectedVideo = 'videos/cube.mp4';//$scope.videos[Math.floor(Math.random()*$scope.videos.length)];

    //TODO
    $scope.contentList = contentList;
    $scope.projects = projects;
    $scope.tasks = tasks;

	$scope.chart = {
        chart: {zoomType: 'x',},
        series: [{
            id: 'Expenses',
            type: 'column',
            name: 'Expenses USD',
            data: []
        },{
            id: 'Revenue',
            type: 'spline',
            name: 'Revenue USD',
            data: []
        }],
        title: {text: ''},
        xAxis: {title: {text: null}},
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };

    for (var i = 0;i<40;i++){
        $scope.chart.series[0].data.push(100*Math.random());
        $scope.chart.series[1].data.push(100*Math.random());
    }

    $scope.create = {
        chart: {zoomType: 'x',},
        series: [],
        title: {text: ''},
        xAxis: {title: {text: null}},
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };

    $scope.marketsChart = ['USD', 'ETH', 'BTC', 'UNIVERSAL', 'CRE8'];

    for (x in $scope.marketsChart){
        var random1 = Math.floor(255*Math.random());
        var random2 = Math.floor(255*Math.random());
        var random3 = Math.floor(255*Math.random());

        $scope.create.series.push({
            id: 'bar'+x,
            type: 'column',
            name: $scope.marketsChart[x],
            pointPlacement: 'on',
            data: [],
            color: 'rgba('+random1+','+random2+','+random3+',1)',
            fillOpacity: 0.3,
        });

    }

    for (x in $scope.marketsChart){
        for (y in $scope.marketsChart){
            $scope.create.series[y].data.push((1+1*Math.random())/2);
        }
    }

    $scope.chartMap = {
        chart: {
            polar: true,
            margin: [30, 30, 30, 30]
        },
        series: [{
            id: 'values',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [],
            color: 'rgba(153,0,0,0.3)',
            fillOpacity: 0.3,
        }],
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
            enabled: false,
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },
        tooltip: {enabled: true},
        credits:{enabled:false},
    };
   
    $scope.baseMarkets = [
        {text:'UNIVERSAL'},
        {text:'CRE8'},
        {text:'ETH'},
        {text:'BTC'},
        {text:'USD'},
        {text:'SHELTER'},
        {text:'FOOD'},
        {text:'REST'},
    ];

    $scope.markets = [
        {text:'EDUCATION+ONMINT'},
        {text:'SHELTER'},
        {text:'HEALTH'},
        {text:'FOOD'},
        {text:'REST'},
        {text:'CRE8'},
        {text:'USD'},
        {text:'ETH'},
        {text:'BTC'},
        {text:'CREATE'},
        {text:'TIME'},
        {text:'TIME+VIEW'},
        {text:'TIME+WORK'},
        {text:'STREAM'},
        {text:'REACT'},
        {text:'CONTENT'},
        {text:'ORDER'},
        {text:'TRANSACTION'},
        {text:'VIEW'},
        {text:'VALIDATE'},
    ];


    for (x in $scope.baseMarkets){

        var random1 = Math.floor(255*Math.random());
        var random2 = Math.floor(255*Math.random());
        var random3 = Math.floor(255*Math.random());

        $scope.chartMap.series.push({
            id: 'values'+x,
            type: 'area',
            name: $scope.baseMarkets[x].text,
            pointPlacement: 'on',
            data: [],
            color: 'rgba('+random1+','+random2+','+random3+',0.3)',
            fillOpacity: 0.3,
        });

    }

    for (x in $scope.markets){
        $scope.chartMap.xAxis.categories.push($scope.markets[x].text);
        for (y in $scope.baseMarkets){
            $scope.chartMap.series[y].data.push((1+1*Math.random())/2);
        }
    }







    //VALUE MAP CTA
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
        
        title: {
            text: ''
        },
        xAxis: {
            title: {
                text: null
            }
        },
        yAxis: {
            title: {
                text: null
            }
        },
        credits:{enabled:false},
    };

    $scope.updatePieTotal = function(){
        var data = $scope.newOrder.map(function(obj){return {name: obj[1].identifier.split('+')[0], y:obj[0].amount}})
        $scope.pieTotal.series[0].data = data;
        console.log( $scope.pieTotal)
    };

    $scope.$watch('newOrder', function(newValue, oldValue){
        if (oldValue != newValue){
            console.log('fire!')
            $scope.updateChartTotal();
            $scope.updatePieTotal();
        }
    }, true);
    
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

    $scope.createPosition = function(model){

        if($scope.newOrder.map(function(obj){return obj[1].identifier.split('+')[0]}).indexOf(model) == -1){
            //1 per hour
            $scope.newOrder.push(
                [
                    {amount:1, identifier:'UNIVERSALTOKEN'}, 
                    {amount:3600, identifier:model+'+ADDR+SPONSOR'}
                ]
            );
        }
    };

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
    }
    $scope.loadTags();



}]);