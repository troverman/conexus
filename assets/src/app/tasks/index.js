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
                return TaskModel.getSome({limit:20, skip:0, sort:'createdAt DESC'});
            }],
        }
	});
}])

.controller( 'TasksCtrl', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'ReactionModel', 'TaskModel', 'tasks', function TasksController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, ReactionModel, TaskModel, tasks ) {
	
    $scope.map = {center: {latitude: 35.902023, longitude: -84.1507067 }, zoom: 9};
    $scope.markers = [];
    $scope.options = {scrollwheel: false};
    $scope.newReaction = {};
	$scope.selectedSort = 'createdAt DESC';
	$scope.skip = 0;
	$scope.sortText = {'trendingScore DESC':'Trending','createdAt DESC':'Date Created','timeCount DESC': 'Total Time'}
	$scope.selectedTag = '';
    $scope.searchQuery = [];

    $scope.tasks = tasks.map(function(obj){
        obj.model = 'TASK';
        //TODO: DEPRECIATE -- MOVE TO PROTOCOL
        obj.tokens = [];
        obj.tokens.push('CRE8');
        obj.tokens.push('CRE8+TIME');
        obj.tokens.push('CRE8+TIME+'+obj.title.toUpperCase().replace(/ /g, '-')+'.'+obj.id);
        if (obj.tags){
            obj.tags = obj.tags.split(',');
            for (x in obj.tags){
                obj.tokens.push('CRE8+TIME+'+obj.tags[x].trim().toUpperCase());
                obj.tokens.push('CRE8+TIME+'+obj.title.toUpperCase().replace(/ /g, '-')+'.'+obj.id+'+'+obj.tags[x].trim().toUpperCase());
            }
        }
        return obj;
    });

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            //TIME, ORDER, CONTENT, ITEMS, TRANSACTION, TASK, REACTION
            var taskIndex = $scope.tasks.map(function(obj){return obj.id}).indexOf(item.id);
            if (taskIndex != -1){
                $scope.newReaction.associatedModels = [{type:'TASK', id:item.id}];
                $scope.tasks[taskIndex].reactions[type]++;
                ReactionModel.create($scope.newReaction);
            }         
        }
        else{$mdSidenav('login').toggle();}
    };

    //TODO: DEPRECIATE
    $scope.reply = function(item){
        if ($scope.currentUser){$mdSidenav('content').toggle();}
        else{$mdSidenav('login').toggle();}
    };





    //COMPLEX QUERIES && POPULATION
    //TODO: BETTER
    $scope.loadAssociations = function(){
        $scope.associations = $scope.tasks.map(function(obj){
            if (obj.project){return obj.project.title;}
        });
        $scope.associations = [].concat.apply([], $scope.associations);
        $scope.associations = $scope.associations.filter(function(e){return e});
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.sortedAssociationArray = [];
        for (x in $scope.associations){
            var amount = countInArray($scope.associations, $scope.associations[x]);
            if ($scope.sortedAssociationArray.map(function(obj){return obj.element}).indexOf($scope.associations[x]) == -1){
                $scope.sortedAssociationArray.push({amount:amount, element:$scope.associations[x]})
            }
        }
        $scope.sortedAssociationArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    };
    $scope.loadLocations = function(){
        $scope.sortedLocationsArray = ['Chapel Hill', 'Knoxville', 'Los Angeles', 'New York City']
    };
    $scope.loadTags = function(){
        $scope.tags = $scope.tasks.map(function(obj){
            return obj.tags;
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
    $scope.init = function(){
        $scope.loadAssociations();
        $scope.loadLocations();
        $scope.loadTags();
        $scope.filterSet = {associations:$scope.sortedAssociationArray, tags:$scope.sortedTagArray, locations:$scope.sortedLocationArray}
    };
    $scope.init();
    //TODO: BETTER
    //COMPLEX QUERIES && POPULATION




    //TODO: COMPLEX QUERY && FILTER
    $scope.selectSort = function(sort){
		$scope.selectedSort = sort;
		$rootScope.stateIsLoading = true;
        TaskModel.getSome({limit:100, skip:$scope.skip, sort:$scope.selectedSort}).then(function(tasks) {
			$rootScope.stateIsLoading = false;
			$scope.tasks = tasks.map(function(obj){
                if (obj.tags){obj.tags = obj.tags.split(',')}
                return obj;
            });
		});
	};
    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        var search = $scope.searchQuery.map(function(obj){
            return obj.text;
        })[0];
        TaskModel.getSome({search:search, limit:20, skip:0, sort:'createdAt DESC'}).then(function(tasks){
            console.log(tasks)
            $rootScope.stateIsLoading = false;
            $scope.tasks = tasks.map(function(obj){
                if (obj.tags){obj.tags = obj.tags.split(',')}
                return obj;
            });
        });
    };
    $scope.filterContent = function(filter) {
        $scope.searchQuery.push({text:filter})
        $rootScope.stateIsLoading = true;
        TaskModel.getSome({tag:filter, limit:20, skip:0, sort:'createdAt DESC'}).then(function(tasks){
            $rootScope.stateIsLoading = false;
            $scope.selectedTag = filter;
            tasks.map(function(obj){obj.model = 'TASK'});
            $scope.init();
        });
    };
    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 20;
        $rootScope.stateIsLoading = true;
        TaskModel.getSome({limit:100, skip:$scope.skip, sort:$scope.selectedSort}).then(function(tasks) {
            $rootScope.stateIsLoading = false;
            tasks.map(function(obj){obj.model = 'TASK'});
            Array.prototype.push.apply($scope.tasks, tasks);
            $scope.init();
        });
    };
    $rootScope.$watch('searchQueryNav' ,function(){
        $scope.searchQuery = [];
        for(x in Object.keys($rootScope.searchQueryNav)){
            for (y in Object.keys($rootScope.searchQueryNav[Object.keys($rootScope.searchQueryNav)[x]])){
                if ($scope.searchQuery.map(function(obj){return obj.query}).indexOf($rootScope.searchQueryNav[Object.keys($rootScope.searchQueryNav)[x]][y].query)==-1){
                    $scope.searchQuery.push($rootScope.searchQueryNav[Object.keys($rootScope.searchQueryNav)[x]][y]);
                }
            }
        }
        console.log($scope.searchQuery)
    }, true);
    $scope.$watch('searchQuery' ,function(newValue, oldValue){
        if (newValue !== oldValue) {
            //LOCATION IS BY ASSOCIATED PROJECT(S)
            $rootScope.stateIsLoading = true;
            $scope.searchQuery = $scope.searchQuery.map(function(obj){
                if (!obj.query && obj.text){obj.query = obj.text}
                return obj.query
            }).join(',');
            TaskModel.getSome({search:$scope.searchQuery, limit:20, skip:0, sort:'createdAt DESC'}).then(function(models){
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
    //TODO: COMPLEX QUERY && FILTER








    //TODO: SOCKET
    $sailsSocket.subscribe('task', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.tasks.unshift(envelope.data);
                $scope.tasks.map(function(obj){
                    obj.model = 'TASK';
                    if (obj.tags){obj.tags = obj.tags.split(',')}
                    return obj;
                });
                break;
        }
    });

}]);