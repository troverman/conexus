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
        resolve: {
            tasks: ['TaskModel', function(TaskModel){
                return TaskModel.getSome('', '', 20, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'TasksCtrl', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'ReactionModel', 'TaskModel', 'tasks', 'titleService', function TasksController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, ReactionModel, TaskModel, tasks, titleService ) {
	$scope.currentUser = config.currentUser;
    titleService.setTitle('Tasks | CRE8.XYZ');
    $scope.newReaction = {};

	$scope.selectedSort = 'createdAt DESC';
	$scope.skip = 0;
	$scope.sortText = {'trendingScore DESC':'Trending','createdAt DESC':'Date Created','timeCount DESC': 'Total Time'}
	$scope.selectedTag = '';
    $scope.tasks = tasks;

    $scope.searchQuery = [];

    $scope.tasks.map(function(obj){
        obj.model = 'TASK';
        //TEMP HARDCODE -- MOVE TO PROTOCOL
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

    //TODO: ALL
    $scope.sortedLocationsArray = ['Chapel Hill', 'Knoxville', 'Los Angeles', 'New York City']

    $scope.map = {center: {latitude: 35.902023, longitude: -84.1507067 }, zoom: 9};
    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    $scope.createReaction = function(item, type){
        if ($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
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

    $scope.filterContent = function(filter) {
        //TODO: COMPLEX QUERY
        $scope.searchQuery.push({text:filter})
        $rootScope.stateIsLoading = true;
        TaskModel.getSome('tag', filter, 20, 0, 'createdAt DESC').then(function(tasks){
            $rootScope.stateIsLoading = false;
            $scope.selectedTag = filter;
            tasks.map(function(obj){
                obj.model = 'TASK';
                //TEMP HARDCODE -- MOVE TO PROTOCOL
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
            $scope.tasks = tasks;
            $scope.loadAssociations();
            $scope.loadTags();
        });
    };

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 20;
        $rootScope.stateIsLoading = true;
        TaskModel.getSome('', '', 100, $scope.skip, $scope.selectedSort).then(function(tasks) {
            $rootScope.stateIsLoading = false;
            tasks.map(function(obj){
                obj.model = 'TASK';
                //TEMP HARDCODE -- MOVE TO PROTOCOL
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
            Array.prototype.push.apply($scope.tasks, tasks);
            $scope.loadAssociations();
            $scope.loadTags();
        });
    };

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
    $scope.loadAssociations();

    //TODO: BETTER | TAG STORAGE
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
        
    }
    $scope.loadTags();

    $scope.filterSet = {tags:$scope.sortedTagArray, associations:$scope.sortedAssociationArray, locations:$scope.sortedLocationsArray}

    $scope.reply = function(item){
        if ($scope.currentUser){
            var taskIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            if (contentIndex != -1){$scope.tasks[taskIndex].showReply = !$scope.tasks[taskIndex].showReply;}
        }
        else{$mdSidenav('login').toggle();}
    };

    $scope.selectSort = function(sort){
		$scope.selectedSort = sort;
		$rootScope.stateIsLoading = true;
        TaskModel.getSome('', '', 100, $scope.skip, $scope.selectedSort).then(function(tasks) {
			$rootScope.stateIsLoading = false;
			$scope.tasks = tasks.map(function(obj){
                if (obj.tags){obj.tags = obj.tags.split(',')}
                return obj;
            });
		});
	};

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        //TODO: COMPLEX QUERY.. 
        var search = $scope.searchQuery.map(function(obj){
            return obj.text;
        })[0];
        TaskModel.getSome('search', search, 20, 0, 'createdAt DESC').then(function(tasks){
            console.log(tasks)
            $rootScope.stateIsLoading = false;
            $scope.tasks = tasks.map(function(obj){
                if (obj.tags){obj.tags = obj.tags.split(',')}
                return obj;
            });
        });
    };

    $sailsSocket.subscribe('task', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.tasks.unshift(envelope.data);
                $scope.tasks.map(function(obj){
                    if (obj.tags){obj.tags = obj.tags.split(',')}
                    return obj;
                });
                break;
            case 'destroyed':
                lodash.remove($scope.tasks, {id: envelope.id});
                break;
        }
    });

}]);