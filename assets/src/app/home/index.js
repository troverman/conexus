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
				return ProjectModel.getSome(15, 0, 'createdAt DESC');
			}],
			members: ['UserModel', function(UserModel){
				//return UserModel.getSome(100, 0, 'createdAt DESC');
                return null;
			}],
            orders: ['OrderModel', function(OrderModel) {
                return OrderModel.getSome('', '', '', 10, 0, 'createdAt DESC');
            }],
			posts: ['PostModel', function(PostModel){
                return PostModel.getSome('', '', 10, 0, 'createdAt DESC');
			}],
			tasks: ['TaskModel', function(TaskModel) {
				return TaskModel.getSome('', '', 10, 0, 'createdAt DESC');
			}],
            transactions: ['TransactionModel', function(TransactionModel) {
                return TransactionModel.getSome('','', 10, 0, 'createdAt DESC');
            }],
			work: ['WorkModel', function(WorkModel) {
                return WorkModel.getSome('', '', 10, 0, 'createdAt DESC');
            }]

		}
	});
}])

.controller( 'HomeCtrl', ['$location', '$sce', '$scope', 'config', 'members', 'orders', 'PostModel', 'posts', 'projects', 'ReactionModel', 'SearchModel', 'tasks', 'titleService', 'transactions', 'UserModel', 'work', function HomeController( $location, $sce, $scope, config, members, orders, PostModel, posts, projects, ReactionModel, SearchModel, tasks, titleService, transactions, UserModel, work ) {
	titleService.setTitle('CRE8.XYZ');

	$scope.currentUser = config.currentUser;
	$scope.posts = posts;
	$scope.projects = projects;
	$scope.newReaction = {};
	$scope.searchResults = [];
    $scope.tasks = tasks;
	$scope.work = work;

    $scope.posts = $scope.posts.map(function(obj){
        obj.model = 'CONTENT';
        return obj;
    });
    $scope.projects = $scope.projects.map(function(obj){
        obj.model = 'PROJECT';
        return obj;
    });
    $scope.tasks = $scope.tasks.map(function(obj){
        obj.model = 'TASK';
        return obj;
    });
    $scope.work = $scope.work.map(function(obj){
        obj.model = 'WORK';
        return obj;
    });
    
    $scope.activity = [].concat.apply([], [$scope.posts, $scope.projects, $scope.tasks, $scope.work]);
    $scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    $scope.activity = $scope.activity.slice(0,100);
    
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
        },
        tooltip: {},
        credits:{enabled:false},
    };

	//TODO: REFACTOR
	if ($scope.currentUser){

		UserModel.getByUsername($scope.currentUser.username).then(function(member){
			$scope.member = member;
		});

        //IF VALUE MAP | REFACTOR 
        $scope.newOrder = [];
        $scope.newPost = {};
        $scope.transactions = transactions;

        //tags
        //orders, tasks, transactions
        //$scope.discoverTags = $scope.tasks.filter(function(obj){return obj.tags}).map(function(obj){return obj.tags});
        //$scope.orderTags = orders;

        $scope.tasks = $scope.tasks.map(function(obj){
            obj.model = 'TASK';
            return obj;
        });
        $scope.transactions = $scope.transactions.map(function(obj){
            obj.model = 'TRANSACTION';
            return obj;
        });

        $scope.discover = [].concat.apply([], [$scope.tasks, $scope.transactions]);

        //TEMP | TODO: FIX
        $scope.discover = $scope.discover.map(function(obj){
            var returnObj = {};
            console.log(obj.model)
            if (obj.model == 'ORDER'){returnObj = obj.identiferSet;}
            if (obj.model == 'TASK'){
                if(obj.tags){obj.tags = obj.tags.split(',')}
                returnObj = obj.tags;
            }
            if (obj.model == 'TRANSACTION'){
                if(obj.ledger){obj.ledger = obj.ledger.split(',')}
                returnObj = obj.ledger;
            }
            return returnObj;
        });

        $scope.discover = [].concat.apply([], $scope.discover);
        $scope.discover = $scope.discover.filter(function(e){return e}); 

        function countInArray(array, value) {
            return array.reduce(function(n, x){ return n + (x === value)}, 0);
        }

        $scope.finalArray = [];
        for (x in $scope.discover){
            var amount = countInArray($scope.discover, $scope.discover[x]);
            if ($scope.finalArray.map(function(obj){return obj.element}).indexOf($scope.discover[x]) == -1){
                $scope.finalArray.push({amount:amount, element:$scope.discover[x]})
            }
        }
        $scope.finalArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 

        $scope.addToOrder = function(model){
            $scope.newOrder.push([model,'0.1 UNIVERSAL TOKEN']);
        };

        $scope.createOrder = function(post){
            $scope.newOrder = [];
        };

        //TODO: MODEL | CREATE | NESTED?
        $scope.createPost = function(post){
            $scope.newPost.post = post.id;
            $scope.newPost.user = $scope.currentUser.id;
            $scope.newPost.profile = $scope.currentUser.id;
            PostModel.create($scope.newPost).then(function(model) {
                $scope.newPost = {};
            });
        };

	};

    $scope.createReaction = function(post, type){
    	if($scope.currentUser){

	    	$scope.newReaction.amount = 1;
            $scope.newReaction.post = content.id;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;

	    	var index = $scope.posts.map(function(obj){return obj.id}).indexOf(post.id);
	    	if (type =='plus'){$scope.posts[index].plusCount++}
	    	if (type =='minus'){$scope.posts[index].minusCount++}

            ReactionModel.create($scope.newReaction).then(function(model){
                $scope.newReaction = {};
            });

		}
    	else{$location.path('/login')}
    };

	$scope.keyPress = function(searchValue){
		SearchModel.search(searchValue).then(function(models){
			$scope.activity = models.slice(0,100);
            $scope.activity = $scope.activity.map(function(obj){
                obj.model = 'CONTENT';
                return obj;
            });
            $scope.activity = $scope.activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
		});
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

    $scope.reply = function(item){
    	if($scope.currentUser){
    		var index = $scope.activity.map(function(obj){return obj.id}).indexOf(item.id);
    		$scope.activity[index].showReply = !$scope.activity[index].showReply;
    	}
    	else{$location.path('/login')}
    };

}]);
