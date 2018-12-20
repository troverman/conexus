angular.module( 'conexus.markets', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'markets', {
		url: '/market',
		views: {
			"main": {
				controller: 'MarketsCtrl',
				templateUrl: 'markets/index.tpl.html'
			}
		},
        resolve:{
            orders: ['OrderModel', function(OrderModel) {
                return OrderModel.getSome('', '', '', 100, 0, 'createdAt DESC');
            }],
            projects: ['ProjectModel', function(ProjectModel) {
                return ProjectModel.getSome('', '', 100, 0, 'createdAt DESC');
            }],
            tasks: ['TaskModel', function(TaskModel) {
                return TaskModel.getSome('', '', 100, 0, 'createdAt DESC');
            }],
            tokens: ['TokenModel', function(TokenModel) {
                return TokenModel.getSome('', '', 1000, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'MarketsCtrl', ['$rootScope', '$scope', 'config', 'OrderModel', 'orders', 'titleService', 'projects', 'ProjectModel', 'TaskModel', 'tasks', 'tokens', function MarketsController( $rootScope, $scope, config, OrderModel, orders, titleService, projects, ProjectModel, TaskModel, tasks, tokens ) {
	titleService.setTitle('Market | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
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
            data: [0.2, 0.15, 0.15, 0.10, 0.15, 0.15, 0.1],
            color: 'rgba(153,0,0,0.3)',
            fillOpacity: 0.3,
        }],
        title: {text: ''},
        xAxis: {
            title: {text: null},
            categories: ['Education', 'Shelter', 'Food', 'Creation', 'Health', 'Security', 'Transparency'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            title: {text: null},
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        legend: {enabled: false},
        tooltip: {},
        credits:{enabled:false},
    };
    
    $scope.markets = ['Education', 'Shelter', 'Food', 'Creation', 'Health', 'Security', 'Transparency', 'USD', 'ETH', 'BTC', 'STEEM', 'LTC', 'CRE8', 'onTime', 'onTimeStream', 'onReact', 'onPost','onOrder','onVote','onView','onValidate','onMine','NOVO','CONEX','DURHAM','ALCOA','MARYVILLE','CHAPEL HILL'];
    $scope.projects = [];

    //console.log(tokens)

    //STRING CROSS CHAIN
    //https://api.coinmarketcap.com/v2/listings/

    for (x in projects){
        $scope.markets.push(projects[x].id);
        $scope.markets.push(projects[x].title+'+'+'Validation');
        $scope.markets.push(projects[x].title+'+'+'Time');
        $scope.markets.push(projects[x].title+'+'+'Content');
    }

    for (x in tasks){
        $scope.markets.push(tasks[x].id);
        $scope.markets.push(tasks[x].title+'+'+'Validation');
        $scope.markets.push(tasks[x].title+'+'+'Time');
        $scope.markets.push(tasks[x].title+'+'+'Content');
    }

    $scope.markets = _.shuffle($scope.markets);

    //$scope.tokens = $scope.markets;

    $scope.newOrder = {};
    $scope.newOrderToggleVar = false;
   
    $scope.createOrder = function() {

        $scope.newOrder.user = $scope.currentUser.id;

        //TODO: PARSE INPUT
        //$scope.newOrder.amountSet.replace(/^(\d+(,\d+)*)?$/gm);
        //$scope.newOrder.amountSet1.replace(/^(\d+(,\d+)*)?$/gm);

        OrderModel.create($scope.newOrder).then(function(model) {
            $scope.orders.push($scope.newOrder);
            $scope.newOrder = {};
        });

    };

    $scope.loadMore = function() {};

    $scope.newOrderToggle = function () {
        $scope.newOrderToggleVar = $scope.newOrderToggleVar ? false : true;
    };

    $scope.reply = function(item){
        var index = $scope.orders.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.orders[index].showReply = !$scope.orders[index].showReply
    };

    $scope.search = function(){

        $rootScope.stateIsLoading = true;
        OrderModel.getSome('search', $scope.searchQuery, 0, 20, 'createdAt DESC').then(function(models){
            $rootScope.stateIsLoading = false;
            $scope.activity = models.map(function(obj){
                obj.model = 'CONTENT';
                return obj;
            });
        });

    };

    $scope.selectSort = function(sort){};

}]);