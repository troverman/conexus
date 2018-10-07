angular.module( 'conexus.content', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'content', {
		url: '/content',
		views: {
			"main": {
				controller: 'ContentCtrl',
				templateUrl: 'content/index.tpl.html'
			}
		},
        resolve:{
            posts: ['PostModel', function(PostModel){
                return PostModel.getSome('', '', 100, 0, 'createdAt DESC');
            }],
        }
	});
}])

.controller( 'ContentCtrl', ['$sce', '$scope', 'config', 'titleService', 'PostModel', 'posts', function ContentController( $sce, $scope, config, titleService, PostModel, posts ) {
	titleService.setTitle('Content | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newContent = {};
    $scope.newContentToggleVar = false;
    $scope.posts = posts;

    //TODO: BETTER | TAG STORAGE
    $scope.tags = $scope.posts.map(function(obj){
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



    //TODO: MODEL | CREATE | NESTED?
    $scope.createContent = function(post){
        $scope.newContent.user = $scope.currentUser.id;
        PostModel.create($scope.newContent).then(function(model) {
            $scope.newContent = {};
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

    $scope.reply = function(post){
        var index = $scope.posts.map(function(obj){return obj.id}).indexOf(post.id);
        $scope.posts[index].showReply = !$scope.posts[index].showReply
    };

}]);