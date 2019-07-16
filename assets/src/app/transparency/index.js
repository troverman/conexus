angular.module( 'conexus.transparency', [
])

.config(['$stateProvider', 'uiGmapGoogleMapApiProvider', function config( $stateProvider, uiGmapGoogleMapApiProvider ) {
	$stateProvider.state( 'transparency', {
		url: '/transparency',
		views: {
			"main": {
				controller: 'TransparencyCtrl',
				templateUrl: 'transparency/index.tpl.html'
			}
		},

        resolve: {
            peers: ['PeerModel', function(PeerModel){
                return PeerModel.getSome({limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }

	});
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBmbow2vLk6EMs0RT6r8U-umNzlkCNLrVY',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}])

.controller( 'TransparencyCtrl', ['$scope', 'titleService', 'peers', function TransparencyController( $scope, titleService, peers ) {
    
    console.log(peers);
    //TODO: REAL DATA
    $scope.peers = [];
    $scope.markers = [];
    $scope.members = 1000+Math.round(Math.random()*10000);
    $scope.projects = 1000+Math.round(Math.random()*10000);
    $scope.transactionVelocity = Math.round(Math.random()*10000);
    $scope.tokens = 100000+Math.round(Math.random()*10000);

    $scope.selectedTab = 'PEERNETWORK';
    $scope.selectTab = function(model){
        $scope.selectedTab = model;
    };

	$scope.chart = {
        chart:{zoomType: 'x',},
        series: [{
            id: 'Projects',
            type: 'spline',
            name: 'Projects',
            data: []
        },{
            id: 'Members',
            type: 'spline',
            name: 'Members',
            data: []
        },{
            id: 'Orders',
            type: 'spline',
            name: 'Orders',
            data: []
        },{
            id: 'Transactions',
            type: 'spline',
            name: 'Transaction Velocity',
            data: []
        },{
            id: 'Tokens',
            type: 'spline',
            name: 'Tokens in Circulation',
            data: [],
            visible: false
        },{
            id: 'Peers',
            type: 'spline',
            name: 'Peers',
            data: []
        }],
        title:{text: ''},
        xAxis: {
            type: 'datetime',
            currentMin: 0,
            currentMax: 20,
            title: null,
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey'
        },
        yAxis:{title:{text: null}},
        credits:{enabled:false},
        plotOptions:{line:{marker:{enabled: false}}}
    };

    for (var i=0; i<200+Math.random()*1000; i++) {
        $scope.peers.push({
            id:i,
            title:'PEER '+parseInt(i+1),
            location:{
                lat:Math.round((Math.random()*360 - 180) * 1000)/1000,
                lng:Math.round((Math.random()*360 - 180) * 1000)/1000,
            },
            poet: 10+ Math.random()*10000,
            device:{
                title:'iPhone 8', 
                processor:'A11 Bionic chip with 64-bit architecture',
            },
            user:{
                username:'troverman'
            },
        });
    }

    var projects = [];
    var members = [];
    var orders = [];
    var transactions = [];
    var tokens = [];
    var peers = [];

    for (var i=0; i<100+Math.random()*1000; i++) {

        var date = new Date();
        date.setTime(date.getTime() - (24*60*60*1000*(1000-i)));
        projects.push([date.getTime(), Math.round(5*i*Math.random())]);
        members.push([date.getTime(), Math.round(10*i*Math.random())]);
        orders.push([date.getTime(), Math.round(5*i*Math.random())]);
        transactions.push([date.getTime(), Math.round(10*i*Math.random())]);
        tokens.push([date.getTime(), Math.round(1000*i*Math.random())]);
        peers.push([date.getTime(), Math.round(1*i*Math.random())]);

    }

    projects.reduce(function(a,b,i) {
        return projects[i] = [new Date(b[0]).getTime(), parseFloat(a[1])+parseFloat(b[1])];
    },[0,0]);

    members.reduce(function(a,b,i) {
        return members[i] = [new Date(b[0]).getTime(), parseFloat(a[1])+parseFloat(b[1])];
    },[0,0]);

    orders.reduce(function(a,b,i) {
        return orders[i] = [new Date(b[0]).getTime(), parseFloat(a[1])+parseFloat(b[1])];
    },[0,0]);

    transactions.reduce(function(a,b,i) {
        return transactions[i] = [new Date(b[0]).getTime(), parseFloat(a[1])+parseFloat(b[1])];
    },[0,0]);

    tokens.reduce(function(a,b,i) {
        return tokens[i] = [new Date(b[0]).getTime(), parseFloat(a[1])+parseFloat(b[1])];
    },[0,0]);

    peers.reduce(function(a,b,i) {
        return peers[i] = [new Date(b[0]).getTime(), parseFloat(a[1])+parseFloat(b[1])];
    },[0,0]);

    $scope.chart.series[0].data = projects;
    $scope.chart.series[1].data = members;
    $scope.chart.series[2].data = orders;
    $scope.chart.series[3].data = transactions;
    $scope.chart.series[4].data = tokens;
    $scope.chart.series[5].data = peers;


    $scope.map = {
        center: {
            latitude: 35.902023, 
            longitude: -84.1507067,
        },
        zoom: 2
    };

    for (x in $scope.peers) {
        $scope.markers.push({
            id:$scope.peers[x].id,
            content:$scope.peers[x].title,
            coords:{
                latitude:$scope.peers[x].location.lat,
                longitude:$scope.peers[x].location.lng,
            }
        });
    }

}]);