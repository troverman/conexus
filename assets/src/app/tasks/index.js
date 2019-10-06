angular.module( 'conexus.tasks', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'tasks', {
		url: '/tasks',
		views: {
			"main": {
				controller: 'TasksCtrl',
				templateUrl: 'tasks/index.tpl.html'
			}
		},

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.get({limit:20, skip:0, sort:'createdAt DESC'});
            }],
        }
	});
}])

.controller( 'TasksCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'TaskModel', 'tasks', function TasksController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, TaskModel, tasks ) {
	
    $scope.map = {center: {latitude: 35.902023, longitude: -84.1507067 }, zoom: 9};
    $scope.markers = [];
    $scope.options = {scrollwheel: false};
    $scope.newReaction = {};
	$scope.selectedSort = 'createdAt DESC';
	$scope.skip = 0;
	$scope.selectedTag = '';
    $rootScope.searchQuery = [];

    $scope.tasks = tasks.data.map(function(obj){obj.model = 'TASK'; return obj;});
    $scope.taskCount = tasks.info.count;

    $scope.loadAssociations = function(list){
        var asociationList = [];
        for (x in list){
            for (y in list[x].associationModels){
                for (z in list[x].associationModels[y].associatedModels){
                    if (list[x].associationModels[y].associatedModels[z].data){
                        //NON SELF
                        if (list[x].id != list[x].associationModels[y].associatedModels[z].id){
                            asociationList.push(list[x].associationModels[y].associatedModels[z].data);
                        }
                    }
                }
            }
        }
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        //TODO SORT BY OCCURANCE OF ASSOCIATION
        //get value of number of times id map appears, return [obj, number]
        console.log(asociationList);
        $scope.asociationList = asociationList;
    };
    $scope.loadContext = function(list){
        var model = {context:{}};
        for (x in list){
            if (list[x].context){
                for (y in Object.keys(list[x].context)){
                    var context = Object.keys(list[x].context)[y].toString();
                    if(!model.context[context]){model.context[context] = list[x].context[context];}
                    else{model.context[context] = model.context[context] + list[x].context[context];}
                }
            }
        }
        $scope.sortedContext = [];
        for (x in Object.keys(model.context)){$scope.sortedContext.push([Object.keys(model.context)[x], model.context[Object.keys(model.context)[x]]])}
        $scope.sortedContext.sort(function(a, b) {return b[1] - a[1]});
        console.log($scope.sortedContext)
    };
    $scope.loadLocations = function(list){};
    $scope.init = function(){
        $scope.loadAssociations($scope.tasks);
        $scope.loadContext($scope.tasks);
        $scope.loadLocations($scope.tasks);
        $scope.filterSet = {
            context:$scope.sortedContext, 
            associations:$scope.asociationList, 
            location:$scope.sortedLocationArray
        };
    };
    $scope.init();

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        var search = $scope.searchQuery.map(function(obj){ return obj.text;})[0];
        TaskModel.get({search:search, limit:20, skip:0, sort:'createdAt DESC'}).then(function(tasks){
            $rootScope.stateIsLoading = false;
            $scope.tasks = tasks.map(function(obj){
                if (obj.tags){obj.tags = obj.tags.split(',')}
                return obj;
            });
        });
    };

    //TODO.. SMART LOCATION FILTER..
    //IF ACTIVE LOCATION FILTER -- > MAP RADIUS :) 
    $scope.filterContent = function(filter) {
        $scope.searchQuery.push({text:filter})
        $rootScope.stateIsLoading = true;
        $location.search('context', filter);
        TaskModel.get({tag:filter, limit:20, skip:0, sort:'createdAt DESC'}).then(function(tasks){
            $rootScope.stateIsLoading = false;
            $scope.selectedTag = filter;
            $scope.tasks = tasks.data.map(function(obj){
                if (obj.tags){obj.tags = obj.tags.split(',')}
                obj.model = 'TASK';
                return obj;
            });
            $scope.taskCount = tasks.info.count;
            $scope.init();
        });
    };

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 20;
        $rootScope.stateIsLoading = true;
        TaskModel.get({limit:100, skip:$scope.skip, sort:$scope.selectedSort}).then(function(tasks) {
            $rootScope.stateIsLoading = false;
            tasks.map(function(obj){ obj.model = 'TASK' });
            Array.prototype.push.apply($scope.tasks, tasks);
        });
    };

    //KINDA HACKY? CAN USE STATES.. ETC
    if ($location.search().tags){$scope.filterContent($location.search().tags);}

    $rootScope.$watch('searchQuery' ,function(newValue, oldValue){
        if (newValue !== oldValue) {
            $rootScope.stateIsLoading = true;
            $scope.searchQuery = $rootScope.searchQuery.map(function(obj){
                if (!obj.query && obj.text){obj.query = obj.text}
                return obj.query
            }).join(',');
            TaskModel.get({search:$scope.searchQuery, limit:20, skip:0, sort:'createdAt DESC'}).then(function(models){
                console.log(models)
                $rootScope.stateIsLoading = false;
                $scope.tasks = models.map(function(obj){
                    obj.model = 'TASK';
                    if (obj.tags){obj.tags = obj.tags.split(',')}
                    return obj;
                });
                $scope.init();
            });
        }
    }, true);


    //SOCKETS
    $sailsSocket.subscribe('task', function (envelope) {
        console.log(envelope);
        if (envelope.verb == 'create'){$scope.tasks.unshift(envelope.data);}
        if (envelope.verb == 'update'){
            var index = $scope.tasks.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){
                $scope.tasks[index] = envelope.data;
            }
        }
    });

}]);