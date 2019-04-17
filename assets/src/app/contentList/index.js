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
            contentList: ['ContentModel', function(ContentModel){
                return ContentModel.getSome({limit:20, skip:0, sort:'createdAt DESC'});
            }],
        }
	});
}])

.controller( 'ContentListCtrl', ['$location', '$mdSidenav', '$rootScope', '$sce', '$scope', 'config', 'contentList', 'ContentModel', 'ReactionModel', 'titleService', function ContentListController( $location, $mdSidenav, $rootScope, $sce, $scope, config, contentList, ContentModel, ReactionModel, titleService ) {
	titleService.setTitle('Content | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.contentList = contentList;
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.selectedSort = 'createdAt DESC';
    $scope.selectedTag = '';
    $scope.selectedType = 'POST';
    $scope.skip = 0;
    $scope.sortText = {'trendingScore DESC':'Trending','createdAt DESC':'Date Created','plusCount DESC': 'Rating'}

    $scope.sortedLocationArray = ['Knoxville', 'Chapel Hill', 'New York City'];

    $scope.sorting = false;
    $scope.expandSort = function(){
        $scope.sorting = true;
    };
    
    //TODO: PROPER ASSOCIATIONS
    $scope.loadAssociations = function(){
        $scope.associations = $scope.contentList.map(function(obj){
            if (obj.project){return obj.project.title;}
            if (obj.task){return obj.task.title;}
        });
        $scope.associations = [].concat.apply([], $scope.associations);
        $scope.associations = $scope.associations.filter(function(e){return e});
        console.log($scope.associations)
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.sortedAssociationArray = [];
        for (x in $scope.associations){
            var amount = countInArray($scope.associations, $scope.associations[x]);
            if ($scope.sortedAssociationArray.map(function(obj){return obj.element}).indexOf($scope.associations[x]) == -1){
                $scope.sortedAssociationArray.push({amount:amount, element:$scope.associations[x]})
            }
        }
        $scope.sortedAssociationArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    }
    $scope.loadAssociations();

    //TODO: BETTER | TAG STORAGE
    $scope.loadTags = function(){
        $scope.tags = $scope.contentList.map(function(obj){
            var returnObj = {};
            if(obj.tags){obj.tags = obj.tags.split(',')}
            returnObj = obj.tags;
            return returnObj;
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

    $scope.filterSet = {tags:$scope.sortedTagArray, associations:$scope.sortedAssociationArray, location:$scope.sortedLocationArray}

    //DEPCRECIATE TO GLOBAL
    $scope.createContent = function(content) {

        if ($scope.currentUser){
            if(content){$scope.newContent.contentModel = content.id;}
            $scope.newContent.user = $scope.currentUser.id;
            $scope.newContent.tags = $scope.newContent.tags.map(function(obj){
                return obj.text;
            }).join(",");
            $scope.newContent.type = $scope.selectedType;

            $scope.newContent.associatedModels = [];

            //CONTENT, TASK, TIME, TRANSACTION, ORDER, PROJECT

            ContentModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
                $scope.content.unshift(model);
            });

        }

        else{$mdSidenav('login').toggle()}

    };

    $scope.createReaction = function(item, type){
        if ($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
            var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            if (contentIndex != -1){
                $scope.newReaction.associatedModels = [{type:'CONTENT', id:item.id}];
                $scope.contentList[contentIndex].reactions[type]++;
            }
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle();}
    };

    $scope.filterContent = function(filter) {
        $rootScope.stateIsLoading = true;
        ContentModel.getSome({tag:filter, limit:20, skip:0, sort:'createdAt DESC'}).then(function(contentList){
            $rootScope.stateIsLoading = false;
            $scope.selectedTag = filter;
            $scope.contentList = contentList;
            $scope.loadAssociations();
            $scope.loadTags();
        });
    };

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 20;
        $rootScope.stateIsLoading = true;
        ContentModel.getSome({limit:20, skip:$scope.skip, sort:$scope.selectedSort}).then(function(contentList) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.contentList, contentList);
            $scope.loadAssociations();
            $scope.loadTags();
        });
    };
    
    $scope.reply = function(content){
        if ($scope.currentUser){
            $mdSidenav('content').toggle();
            //var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(content.id);
            //$scope.contentList[index].showReply = !$scope.contentList[index].showReply;
        }
        else{$mdSidenav('login').toggle();}

    };

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        ContentModel.getSome({search:$scope.searchQuery, limit:20, skip:0, sort:'createdAt DESC'}).then(function(models){
            $rootScope.stateIsLoading = false;
            $scope.contentList = models;
        });
    };

    $scope.selectSort = function(sort){
        $scope.selectedSort = sort;
        $rootScope.stateIsLoading = true;
        ContentModel.getSome({limit:20, skip:$scope.skip, sort:$scope.selectedSort}).then(function(contentList) {
            $rootScope.stateIsLoading = false;
            $scope.contentList = contentList;
        });
    };

    $scope.selectType = function(type){
        $scope.selectedType = type;
    };

}]);