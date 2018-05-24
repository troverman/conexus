angular.module( 'conexus.task', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'task', {
        url: '/task/:path',
        views: {
            "main": {
                controller: 'TaskController',
                templateUrl: 'task/index.tpl.html'
            }
        },
        resolve: {
            task: ['$stateParams', 'TaskModel', function($stateParams, TaskModel){
                return TaskModel.getOne($stateParams.path);
            }],
            work: ['$stateParams', 'WorkModel', function($stateParams, WorkModel){
                //return WorkModel.getByTask($stateParams.path);
                return ['work1', 'work2', 'work3', 'work4', 'work5'];
            }],
        }
    });
}])

.controller( 'TaskController', ['$scope', 'config', 'task', 'TaskModel', 'titleService', 'work', 'WorkModel', function TaskController( $scope, config, task, TaskModel, titleService, work, WorkModel) {
    titleService.setTitle('Task | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};

    $scope.reputationMultiplier = 1
    $scope.task = task;
    $scope.taskTime = 0;
    $scope.working = false;
    $scope.totalTime = (Math.random()*1000000).toFixed(0);
    $scope.work = work;

    $scope.start = function() {
        if($scope.working === true) return false;
        $scope.working = true;
        $scope.interval = setInterval($scope.updateCount, 1000);
    };

    $scope.submit = function() {
        if($scope.working === false) return false;
        $scope.working = false;
        var workModel = {
            amount: $scope.taskTime,
            identifier: $scope.timeIdentifier,
            task: $scope.task.id,
            user: $scope.currentUser.id,
            verificationScore:8
        };
        WorkModel.create(workModel).then(function(model){
            console.log(model)
            $scope.work.push(model);
        }); 
        $scope.taskTime=0;
        clearInterval($scope.interval);
    };

    $scope.updateCount = function() {
        $scope.taskTime++;
        $scope.$apply();
    };

    $scope.verify = function(item) {
        var index = $scope.work.map(function(obj){return obj.id}).indexOf(item.id);
        $scope.work[index].verificationScore++
    };


}]);
