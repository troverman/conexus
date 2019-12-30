angular.module( 'conexus.connection', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'connection', {
		url: '/connection/:id',
		views: {
			"main": {
				controller: 'ConnectionCtrl',
				templateUrl: 'connection/index.tpl.html'
			}
		},
		resolve: {
            connection: ['$stateParams', 'ConnectionModel', function($stateParams, ConnectionModel){
                return ConnectionModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }]
        }
	});
}])

.controller( 'ConnectionCtrl', ['$location', '$rootScope', '$sailsSocket', '$sce', '$scope', 'AssociationModel', 'connection', 'titleService', function ConnectionController( $location, $rootScope, $sailsSocket, $sce, $scope, AssociationModel, connection, titleService ) {
    titleService.setTitle('Connection | CRE8.XYZ');
    $scope.connection = connection;
    if(!$scope.connection){$location.path('/')}
        
	$scope.selectedTab = 'INFORMATION';
    $scope.selectTab = function(model){$scope.selectedTab = model;};

    //we reduce the self association chains 
    //what is a validaion topologically .. subset of association 
    //(association=association ( how it defines itself ) is validation tree 
    //connection-connection reduction

    $scope.chart = {
        chart: {zoomType: 'x',},
        series: [],
        title: {text: ''},
        xAxis: {
            type: 'datetime',
            currentMin: 0,
            currentMax: 20,
            title: null,
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey'
        },
        yAxis: [{
            title: {text: null},
        }],
        credits:{enabled:false},
        plotOptions: {spline: {marker: {enabled: false}}, sma: {marker: {enabled: false}}}
    };

    //MAP THE LOGIC 
    $scope.chart.series.push({
        id: 'test',
        type: 'spline',
        name: 'test',
        data: []
    });
    for(var i=0;i<100;i++){
        var date = new Date();
        date.setTime(date.getTime() - (60*60*1000*(1000-i)));
        if (i == 0){
            $scope.chart.series[0].data.push([date.getTime(),Math.floor(20*Math.random())])
        }
        else{
            var random = 1.21*Math.random();
            var random1 = Math.random();
            if (random > random1){$scope.chart.series[0].data.push([date.getTime(),$scope.chart.series[0].data[i-1][1]+3*Math.random()])}
            else{$scope.chart.series[0].data.push([date.getTime(),$scope.chart.series[0].data[i-1][1]-3*Math.random()])}
        }
    }

    var query = {
        filter:JSON.stringify({id:connection.id}),
        limit:100,
        skip:0,
        sort:'createdAt DESC'
    };
    AssociationModel.get(query).then(function(associations){$scope.associations = associations;});

    $scope.parameters = JSON.stringify({
        attributes:{
            context:{},
            direction:'',
        },
        context:{},
        mapping:[
            {context:['{string->int}']},
            {direction:'string->int'},
            {reputation:'string->int'},
            {computed:'string->int'},
        ],
        logic:'context[%context]*reputation[%context]'
    }, null, 4);


    $sailsSocket.subscribe('connection', function (envelope) {
        console.log(envelope)
        if (envelope.verb == 'update'){
            if ($scope.connection.id == envelope.data.id){
                $scope.connection.data = envelope.data.data;
            }
        }
    });
    
}]);