angular.module( 'conexus.time', [])
.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'time', {
        url: '/time/:id',
        views: {"main": {controller: 'TimeController', templateUrl: 'time/index.tpl.html'}},
        resolve: {time: ['$stateParams', 'TimeModel', function($stateParams, TimeModel){return TimeModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});}],}
    });
}])
.controller( 'TimeController', ['$location', '$rootScope', '$sailsSocket', '$scope', 'time', 'titleService', function TimeController($location, $rootScope, $sailsSocket, $scope, time, titleService) {
    $scope.time = time;
    console.log(time)
    if(!$scope.time){$location.path('/')}
    titleService.setTitle($scope.time.amount + ' | Time | CRE8.XYZ');
    $scope.toolBarSettings = {toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'fontFamily', 'fontSize', 'insertLink', 'insertImage', 'insertTable', 'undo', 'redo', 'html']};
    $scope.selectedTab = 'INFORMATION';
    $scope.selectTab = function(model){$scope.selectedTab = model;};
    $scope.tokenChart = {
        chart: {zoomType: 'x'},
        series: [{
            id: 'Attention',
            type: 'column',
            name: 'Attention',
            data: []
        }],
        title: {text: ''},
        xAxis: {
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {text: null},
            categories: [],
        },
        legend: {enabled: false},
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };
    $scope.populateTokenChart = function(){
        $scope.sortableSet = [];
        $scope.tokenChart.xAxis.categories = [];
        $scope.tokenChart.series[0].data = [];
        for (x in Object.keys($scope.time.data.apps.tokens)){$scope.sortableSet.push([Object.keys($scope.time.data.apps.tokens)[x], $scope.time.data.apps.tokens[Object.keys($scope.time.data.apps.tokens)[x]]])}
        $scope.sortableSet.sort(function(a, b) {return b[1] - a[1]});
        for (x in $scope.sortableSet){
            if (x < 100){
                $scope.tokenChart.xAxis.categories.push($scope.sortableSet[x][0]);
                $scope.tokenChart.series[0].data.push($scope.sortableSet[x][1]);
            }
        }
    };
    if ($scope.time.data.apps.tokens){$scope.populateTokenChart();}

    $sailsSocket.subscribe('time', function (envelope) {
        if (envelope.verb == 'update'){
            if ($scope.time.id == envelope.data.id){
                $scope.time.data.apps = envelope.data.data.apps
            }
        }
    });
}]);
