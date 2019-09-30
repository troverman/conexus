angular.module( 'conexus.contentList', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'contentList', {
		url: '/content',
		views: {
			"main": {
				controller: 'ContentListCtrl',
				templateUrl: 'contentList/index.tpl.html'
			}
		},
        resolve:{
            contentList: ['ContentModel', function(ContentModel){return ContentModel.get({limit:20, skip:0, sort:'createdAt DESC'})}],
        }
	});
}])

.controller( 'ContentListCtrl', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'contentList', 'ContentModel', 'ReactionModel', function ContentListController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, contentList, ContentModel, ReactionModel ) {

    $scope.contentCount = contentList.info.count;
    $scope.contentList = contentList.data;

    $scope.selectedTag = '';
    $scope.selectedType = 'POST';
    $scope.skip = 0;

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
        //TODO SORT BY OCCURANCE OF ASSOCIATION
        //get value of number of times id map appears, return [obj, number]
        console.log(asociationList);
        $scope.asociationList = asociationList;
    };
    $scope.loadAssociations($scope.contentList);

    $scope.loadContext = function(list){
        //GET SELF ASSOCIATION OF EACH CONTENT?
        //USE COMPUTED PROP?
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
        for (x in Object.keys(model.context)){
            $scope.sortedContext.push([Object.keys(model.context)[x], model.context[Object.keys(model.context)[x]]])
        }
        $scope.sortedContext.sort(function(a, b) {return b[1] - a[1]});
        console.log($scope.sortedContext)
    };
    $scope.loadContext($scope.contentList);

    $scope.loadLocations = function(list){

    };

    $scope.filterSet = {
        context:$scope.sortedContext, 
        associations:$scope.asociationList, 
        location:$scope.sortedLocationArray
    };




    //TODO: COMPLEX QUERIES..
    $scope.searchQuery = [];
    $scope.filterContent = function(filter) {
        $scope.searchQuery = [{text:filter}];
        $rootScope.stateIsLoading = true;
        $location.search('tags', filter);
        ContentModel.get({tag:filter, limit:20, skip:0, sort:'createdAt DESC'}).then(function(contentList){
            $rootScope.stateIsLoading = false;
            $scope.selectedTag = filter;
            $scope.contentList = contentList;
            $scope.loadAssociations();
            $scope.loadContext();
        });
    };

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 20;
        $rootScope.stateIsLoading = true;
        ContentModel.get({limit:20, skip:$scope.skip, sort:$scope.selectedSort}).then(function(contentList) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.contentList, contentList);
            $scope.loadAssociations();
            $scope.loadContext();
        });
    };
    

    if ($location.search().tags){$scope.filterContent($location.search().tags);}

    $sailsSocket.subscribe('content', function (envelope) {
        console.log(envelope);
        if (envelope.verb == 'create'){$scope.contentList.unshift(envelope.data);}
        if (envelope.verb == 'update'){
            var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(envelope.data.id);
            if (index != -1){
                $scope.contentList[index].data = envelope.data.data;
            }
        }
    });
    
}]);