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
				return ProjectModel.getSome(100, 0, 'createdAt DESC');
			}],
			members: ['UserModel', function(UserModel){
				return UserModel.getSome(100, 0, 'createdAt DESC');
			}],
			posts: ['PostModel', function(PostModel){
                return PostModel.getSome('', '', 100, 0, 'createdAt DESC');
			}],
			tasks: ['TaskModel', function(TaskModel) {
				return TaskModel.getSome('', '', 100, 0, 'createdAt DESC');
			}],
			work: ['WorkModel', function(WorkModel) {
                return WorkModel.getSome('', '', 15, 0, 'createdAt DESC');
            }]

		}
	});
}])

.controller( 'HomeCtrl', ['$location', '$sce', '$scope', 'config', 'members', 'PostModel', 'posts', 'projects', 'SearchModel', 'tasks', 'titleService', 'UserModel', 'work', function HomeController( $location, $sce, $scope, config, members, PostModel, posts, projects, SearchModel, tasks, titleService, UserModel, work ) {
	titleService.setTitle('CRE8.XYZ');

	$scope.currentUser = config.currentUser;
	$scope.newPost = {};
	$scope.members = members;
	$scope.posts = posts;
	$scope.projects = projects;
	$scope.newReaction = {};
	$scope.searchResults = [];
	$scope.tasks = tasks;
	$scope.work = work;

	//TODO: MERGE MODELS

	$scope.chart = {
        chart: {polar: true},
        series: [{
            id: 'values',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.2, 0.15, 0.15, 0.10, 0.15, 0.15, 0.1],
            color: 'rgba(153,0,0,0.3)',
            fillOpacity: 0.3,
        },{
            id: 'values1',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.2, 0.15, 0.1, 0.1, 0.1, 0.1, 0.15],
            color: 'rgba(0,0,153,0.3)',
            fillOpacity: 0.3,
        },{
            id: 'values2',
            type: 'area',
            name: 'Values',
            pointPlacement: 'on',
            data: [0.15, 0.1, 0.20, 0.2, 0.20, 0.05, 0.1],
            color: 'rgba(0,153,0,0.3)',
            fillOpacity: 0.3,
        }],
        title: {text: ''},
        xAxis: {
            title: {text: null},
            categories: ['Education', 'Shelter', 'Food', 'Creation', 'Health', 'Security', 'Transparency'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            title: {text: null},
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        legend: {
            enabled: false,
            //align: 'right',
            //verticalAlign: 'top',
            //y: 70,
            //layout: 'vertical'
        },
        tooltip: {
        //    shared: true,
        },
        credits:{enabled:false},
    };

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
