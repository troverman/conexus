angular.module( 'conexus.home', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		},
		resolve:{
			projects: ['ProjectModel', function(ProjectModel) {
				//TODO: GET SOME
				return ProjectModel.getSome(100, 0, 'createdAt DESC');
			}],
			members: ['UserModel', function(UserModel){
				//TODO: GET SOME
				return UserModel.getSome(100, 0, 'createdAt DESC');
			}],
			posts: ['PostModel', function(PostModel){
                return PostModel.getSome('', '', 100, 0, 'createdAt DESC');
			}],
			tasks: ['TaskModel', function(TaskModel) {
				//TODO: GET SOME
				return TaskModel.getSome('', '', 100, 0, 'createdAt DESC');
			}],
			work: ['WorkModel', function(WorkModel) {
                return WorkModel.getSome('', '', 15, 0, 'createdAt DESC');
            }]

		}
	});
}])

.controller( 'HomeCtrl', ['$location', '$sce', '$scope', 'config', 'members', 'posts', 'projects', 'SearchModel', 'tasks', 'titleService', 'UserModel', 'work', function HomeController( $location, $sce, $scope, config, members, posts, projects, SearchModel, tasks, titleService, UserModel, work ) {
	titleService.setTitle('conex.us');
	
	$scope.currentUser = config.currentUser;
	$scope.newPost = {};
	$scope.members = members;
	$scope.posts = posts;
	$scope.projects = projects;
	$scope.newReaction = {};
	$scope.searchResults = [];
	$scope.tasks = tasks;
	$scope.work = work;

	//TODO: REFACTOR
	if ($scope.currentUser){
		UserModel.getByUsername($scope.currentUser.username).then(function(member){
			$scope.member = member;
		});
	}

	//TODO: MODEL | CREATE | NESTED?
	$scope.createPost = function(post){
		$scope.newPost.post = post.id;
		$scope.newPost.user = $scope.currentUser.id;
		$scope.newPost.profile = $scope.currentUser.id;
		PostModel.create($scope.newPost).then(function(model) {
			$scope.newPost = {};
		});
	};

	//TODO: MODEL | CREATE REACTION | UPDATE POST
    $scope.createReaction = function(post, type){
    	if($scope.currentUser){
	    	$scope.newReaction.user = $scope.currentUser.id;
	    	$scope.newReaction.post = post.id;
	    	$scope.newReaction.type = type;
	    	//TODO: MODEL | CREATE REACTION
	    	//Reaction.create(newReaction);
	    	var index = $scope.posts.map(function(obj){return obj.id}).indexOf(post.id);
	    	if (type =='plus'){$scope.posts[index].plusCount++}
	    	if (type =='minus'){$scope.posts[index].minusCount++}
	    	//TODO: UPDATE POST
		}
    	else{$location.path('/login')}
    };

	//TODO: NESTED RENDERING N STUFF

	$scope.keyPress = function(searchValue){
		SearchModel.search(searchValue).then(function(models){
			$scope.searchResults = models;
		});
	};

	$scope.renderMessage = function(post){
		if (post){
        	var replacedText = post.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
        	var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
        	return $sce.trustAsHtml(replacedText);
        }
    };

    $scope.reply = function(post){
    	if($scope.currentUser){
    		var index = $scope.posts.map(function(obj){return obj.id}).indexOf(post.id);
    		$scope.posts[index].showReply = !$scope.posts[index].showReply;
    	}
    	else{$location.path('/login')}
    };

}]);
