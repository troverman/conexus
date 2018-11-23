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
            contentList: ['PostModel', function(PostModel){
                return PostModel.getSome('', '', 10, 0, 'createdAt DESC');
            }],
            projects: ['ProjectModel', function(ProjectModel){
                return ProjectModel.getSome(10, 0, 'createdAt DESC');
            }],
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getSome('', '', 10, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'AboutCtrl', ['$sce', '$scope', 'contentList', 'titleService', 'projects', 'tasks', function AboutController( $sce, $scope, contentList, titleService, projects, tasks ) {
	titleService.setTitle('About | CRE8.XYZ');

    //TODO
    $scope.contentList = contentList;
    $scope.projects = projects;
    $scope.tasks = tasks;

	$scope.chart = {
        chart: {
            zoomType: 'x',
        },
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

    for (var i = 0;i<40;i++){
        $scope.chart.series[0].data.push(100*Math.random());
        $scope.chart.series[1].data.push(100*Math.random());
    }

    $scope.create = {
        chart: {
            zoomType: 'x',
        },
        series: [],
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

    $scope.marketsChart = ['USD', 'ETH', 'BTC', 'STEEM', 'LTC', 'CRE8'];

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
        tooltip: {
            enabled: false,
        },
        credits:{enabled:false},
    };

    $scope.baseMarkets = ['Education', 'Shelter', 'Food', 'Creation', 'Health', 'Security', 'Transparency', 'USD', 'ETH', 'BTC', 'STEEM', 'LTC', 'CRE8', 'onTime', 'onTimeStream', 'onReact', 'onPost','onOrder','onVote','onView','onValidate','onMine','NOVO','CONEX','DURHAM','ALCOA','MARYVILLE','CHAPEL HILL'];
    $scope.markets = ['Education', 'Shelter', 'Food', 'Creation', 'Health', 'Security', 'Transparency', 'USD', 'ETH', 'BTC', 'STEEM', 'LTC', 'CRE8', 'onTime', 'onTimeStream', 'onReact', 'onPost','onOrder','onVote','onView','onValidate','onMine','NOVO','CONEX','DURHAM','ALCOA','MARYVILLE','CHAPEL HILL'];
    
    for (x in $scope.baseMarkets){

        var random1 = Math.floor(255*Math.random());
        var random2 = Math.floor(255*Math.random());
        var random3 = Math.floor(255*Math.random());

        $scope.chartMap.series.push({
            id: 'values'+x,
            type: 'area',
            name: $scope.baseMarkets[x],
            pointPlacement: 'on',
            data: [],
            color: 'rgba('+random1+','+random2+','+random3+',0.3)',
            fillOpacity: 0.3,
        });

    }

    for (x in $scope.markets){
        $scope.chartMap.xAxis.categories.push($scope.markets[x]);
        for (y in $scope.baseMarkets){
            $scope.chartMap.series[y].data.push((1+1*Math.random())/2);
        }
    }

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


}]);