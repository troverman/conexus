angular.module( 'conexus.work', [
])

//TODO: CONVERT TO TIME
.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'work', {
        url: '/work/:id',
        views: {
            "main": {
                controller: 'WorkController',
                templateUrl: 'work/index.tpl.html'
            }
        },
        resolve: {
            work: ['$stateParams', 'WorkModel', function($stateParams, WorkModel){
                return WorkModel.getOne($stateParams.id);
            }],
            posts: ['PostModel', 'work', function(PostModel, work){
                return PostModel.getSome('work', work.id, 100, 0, 'createdAt DESC');
            }],
            validations: ['ValidationModel', 'work', function(ValidationModel, work){
                return ValidationModel.getSome('work', work.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'WorkController', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'PostModel', 'posts', 'titleService', 'UserModel', 'ValidationModel', 'validations', 'work', 'WorkModel', function WorkController( $location, $sailsSocket, $sce, $scope, config, PostModel, posts, titleService, UserModel, ValidationModel, validations, work, WorkModel) {
    titleService.setTitle('Work | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.work = work;
    $scope.work.validationScore = 0;

    $scope.member = {};
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.newValidation = {};
    $scope.newValidation.validation = {}
    $scope.posts = posts;
    $scope.tags = [];
    if ($scope.work.task.tags){$scope.tags = $scope.work.task.tags.split(',')}
        
    $scope.taskTime = 0;
    $scope.tokens = [];
    $scope.tokens.push('Token');
    $scope.tokens.push('WorkToken');
    $scope.tokens.push('Work+'+$scope.work.id);
    $scope.totalTime = (Math.random()*1000000).toFixed(0);
    $scope.validations = validations;

    $scope.newValidation.validation.general = 0;
    for (x in $scope.tags){
        $scope.newValidation.validation[$scope.tags[x]] = 0;
    }

    //HUMAN VALIDATED AI VERIFY? 
    //VALID VS VERIFY

    //UNIFY CONTENT AND WORK??
    //WORK AS A TYPE
   
    //for x in scope.tadk.tags.split()
    //$scope.tokens.push('Work+'+$scope.work.id);

    //TODO: BETTER
    if($scope.currentUser){
        UserModel.getByUsername($scope.currentUser.username).then(function(member){
            $scope.member = member;
            $scope.balance = member.balance;
            $scope.reputation = member.reputation;
        });
    }

    if ($scope.work.task.tags){
        for (x in $scope.work.task.tags.split(',')){
            $scope.tokens.push($scope.work.task.tags.split(',')[x].trim());
            $scope.tokens.push('Task+'+$scope.work.task.tags.split(',')[x].trim());
            $scope.tokens.push('Task+'+$scope.work.task.id+'+'+$scope.work.task.tags.split(',')[x].trim());
        }
    }

    for (x in $scope.tokens){
        $scope.tokens.push($scope.tokens[x]+'+onStream');
        $scope.tokens.push($scope.tokens[x]+'+onValidation');
    }

    $scope.createPost = function(post) {
        if ($scope.currentUser){
            if (post){$scope.newContent.post = post.id}
            $scope.newContent.user = $scope.currentUser.id;
            $scope.newContent.work = $scope.work.id;
            PostModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
            });
        }
        else{$location.path('/login')}
    };

    //TODO: MODEL | CREATE REACTION | UPDATE POST
    $scope.createReaction = function(post, type){
        $scope.newReaction.user = $scope.currentUser.id;
        $scope.newReaction.post = post.id;
        $scope.newReaction.type = type;
        //Reaction.create(newReaction);
        var index = $scope.posts.map(function(obj){return obj.id}).indexOf(post.id);
        if (type =='plus'){$scope.posts[index].plusCount++}
        if (type =='minus'){$scope.posts[index].minusCount++}
    };

    //TODO: LAYERS | PROJ BASED LAYER
    $scope.createValidation = function(){
        if ($scope.currentUser){
            $scope.newValidation.work = $scope.work.id;
            $scope.newValidation.user = $scope.currentUser.id;
            ValidationModel.create($scope.newValidation).then(function(model){
                $scope.newValidation = {};
                $scope.validations.push(model);
                console.log(model);
            });
        }
        else{$location.path('/login')}
    };

    //TODO: IMPROVE
    $scope.renderContent = function(post){
        if (post){
            if (!post.includes('>')){
                var replacedText = post.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                var replacedText = replacedText.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                return $sce.trustAsHtml(replacedText);
            }
            else{return $sce.trustAsHtml(post)}
        }
    };

    $scope.reply = function(post){
        var index = $scope.posts.map(function(obj){return obj.id}).indexOf(post.id);
        $scope.posts[index].showReply = !$scope.posts[index].showReply
    };

    //TODO: WEBSOCKETS | WEB3
    $sailsSocket.subscribe('post', function (envelope) {
        console.log(envelope)
        switch(envelope.verb) {
            case 'created':
                $scope.posts.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.posts, {id: envelope.id});
                break;
        }
    });

}]);
