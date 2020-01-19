angular.module( 'conexus.items', [])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'items', {
		url: '/items',
		views: {
			"main": {
				controller: 'ItemsCtrl',
				templateUrl: 'items/index.tpl.html'
			}
		},
        resolve:{
            items: ['ItemModel', function(ItemModel) {
                return ItemModel.get({limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
	});
}])

.controller( 'ItemsCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$scope', '$stateParams', 'ItemModel', 'items', 'ReactionModel', function ItemsController( $location, $mdSidenav, $rootScope, $sailsSocket, $scope, $stateParams, ItemModel, items, ReactionModel ) {

    $scope.stateParams = $stateParams;
    $scope.items = items.data.map(function(obj){obj.model = 'ITEM'; return obj;});
    $scope.itemCount = items.info.count;

    $scope.searchQuery = [];
    $scope.selectedSort = 'createdAt DESC';
    $scope.selectedTag = '';
    $scope.skip = 0;
    $scope.sortedLocationArray = [{element:'Knoxville, TN'}, {element:'New York City'}, {element:'Chapel Hill'}];

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
            if (list[x].context){//context is a vector
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
    $scope.loadLocations = function(list){$scope.sortedLocationArray=[]};
    $scope.init = function(){
        $scope.loadAssociations($scope.items);
        $scope.loadContext($scope.items);
        $scope.loadLocations($scope.items);
        $scope.filterSet = {
            context:$scope.sortedContext, 
            associations:$scope.asociationList, 
            location:$scope.sortedLocationArray
        };
    };
    $scope.init();

    $scope.filterContent = function(filter) {
        $scope.searchQuery.push({text:filter});
        $rootScope.stateIsLoading = true;
        $location.search('tags', filter);
        ItemModel.get({tag:filter, limit:20, skip:0, sort:'createdAt DESC'}).then(function(items){
            $rootScope.stateIsLoading = false;
            $scope.selectedTag = filter;
            $scope.items = items.data;
            $scope.itemCount = items.info.count;
            $scope.init();
        });
    };

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 20;
        $rootScope.stateIsLoading = true;
        ItemModel.get({limit:20, skip:$scope.skip, sort:$scope.selectedSort}).then(function(items) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.items, items);
            $scope.init();
        });
    };

    if ($location.search().context){$scope.filterContent($location.search().context);}

    $sailsSocket.subscribe('item', function (envelope) {
        console.log(envelope);
        if (envelope.verb == 'create'){$scope.items.unshift(envelope.data);}
        if (envelope.verb == 'update'){
            var index = $scope.items.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){$scope.items[index] = envelope.data;}
        }
    });

}]);