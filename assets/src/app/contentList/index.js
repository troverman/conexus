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
            contentList: ['PostModel', function(PostModel){
                return PostModel.getSome('', '', 20, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'ContentListCtrl', ['$location', '$mdSidenav', '$rootScope', '$sce', '$scope', 'config', 'contentList', 'ReactionModel', 'titleService', 'PostModel', function ContentListController( $location, $mdSidenav, $rootScope, $sce, $scope, config, contentList, ReactionModel, titleService, PostModel ) {
	titleService.setTitle('Content | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.contentList = contentList;
    $scope.newContent = {};
    $scope.newContentToggleVar = false;
    $scope.newReaction = {};
    $scope.selectedSort = 'createdAt DESC';
    $scope.selectedType = 'POST';
    $scope.skip = 0;
    $scope.sortText = {'trendingScore DESC':'Trending','createdAt DESC':'Date Created','plusCount DESC': 'Rating'}

    //TODO: BETTER | TAG STORAGE
    $scope.loadTags = function(){
        $scope.tags = $scope.contentList.map(function(obj){
            console.log(obj);
            var returnObj = {};
            if(obj.tags){obj.tags = obj.tags.split(',')}
            returnObj = obj.tags;
            return returnObj;
        });

        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
         
        function countInArray(array, value) {
            return array.reduce(function(n, x){ return n + (x === value)}, 0);
        }

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

    $scope.createContent = function(content) {
        if ($scope.currentUser){
            if(content){$scope.newContent.post = content.id;}
            $scope.newContent.user = $scope.currentUser.id;
            $scope.newContent.tags = $scope.newContent.tags.map(function(obj){
                return obj.text
            }).join(",");
            $scope.newContent.type = $scope.selectedType;
            PostModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
                $scope.content.unshift(model);
            });
        }
        else{$location.path('/login')}
    };

    $scope.createReaction = function(content, type){

        if($scope.currentUser){

            $scope.newReaction.amount = 1;
            $scope.newReaction.post = content.id;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;

            var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(content.id);

            if (type =='plus'){$scope.contentList[index].plusCount++}
            if (type =='minus'){$scope.contentList[index].minusCount++}
            ReactionModel.create($scope.newReaction).then(function(model){
                $scope.newReaction = {};
            });

        }

        else{$location.path('/login')}
    };

    $scope.filterContent = function(filter) {
        $rootScope.stateIsLoading = true;
        PostModel.getSome('tag', filter, 20, 0, 'createdAt DESC').then(function(contentList){
            $rootScope.stateIsLoading = false;
            $scope.contentList = contentList;
            $scope.loadTags();
        });
    };

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 20;
        $rootScope.stateIsLoading = true;
        PostModel.getSome('', '', 20, $scope.skip, $scope.selectedSort).then(function(contentList) {
        //PostModel.getSome('search', $scope.searchQuery, 20, $scope.skip, $scope.selectedSort).then(function(posts) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.contentList, contentList);
            $scope.loadTags()
        });
    };

    $scope.newContentToggle = function() {
        $scope.newContentToggleVar = !$scope.newContentToggleVar;
    };

    $scope.renderContent = function(content){
        if (content){
            if (!content.includes('>')){
                var replacedText = content.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                return $sce.trustAsHtml(replacedText);
            }
            else{return $sce.trustAsHtml(content)}
        }
    };

    $scope.reply = function(content){
        var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(content.id);
        $scope.contentList[index].showReply = !$scope.contentList[index].showReply;
    };

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        PostModel.getSome('search', $scope.searchQuery, 20, 0, 'createdAt DESC').then(function(models){
            $rootScope.stateIsLoading = false;
            $scope.contentList = models;
        });
    };

    $scope.selectSort = function(sort){
        $scope.selectedSort = sort;
        $rootScope.stateIsLoading = true;
        PostModel.getSome(20, $scope.skip, $scope.selectedSort).then(function(contentList) {
            $rootScope.stateIsLoading = false;
            $scope.contentList = contentList;
        });
    };

    $scope.selectType = function(type){
        $scope.selectedType = type;
    };

    $scope.tokenToggle = function(){
        $mdSidenav('tokens').toggle();
        $rootScope.globalTokens = $scope.tokens;
    };

}]);