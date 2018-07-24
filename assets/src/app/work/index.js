angular.module( 'conexus.work', [
])

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
            posts: ['PostModel', 'work', function(PostModel, task){
                return null;
                //return PostModel.getSome('work', task.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'WorkController', ['$location', '$scope', 'config', 'titleService', 'work', 'WorkModel', function WorkController( $location, $scope, config, titleService, work, WorkModel) {
    titleService.setTitle('Task | conex.us');
    $scope.currentUser = config.currentUser;
    $scope.newPost = {};
    $scope.reputationMultiplier = 1;
    $scope.taskTime = 0;
    $scope.working = false;
    $scope.totalTime = (Math.random()*1000000).toFixed(0);
    $scope.work = work;

    $scope.createPost = function(post){
        $scope.newReaction.user = $scope.currentUser.id;
        $scope.newPost.post = post.id;
        //TODO: MODEL | CREATE
        //PostModel.create($scope.newPost);
        //TODO: NESTED RENDERING N STUFF
    };

    //TODO: MODEL | CREATE REACTION | UPDATE POST
    $scope.createReaction = function(post, type){
        $scope.newReaction.user = $scope.currentUser.id;
        $scope.newReaction.post = post.id;
        $scope.newReaction.type = type;
        //TODO: MODEL | CREATE REACTION
        //Reaction.create(newReaction);
        var index = $scope.posts.map(function(obj){return obj.id}).indexOf(post.id);
        if (type =='plus'){$scope.posts[index].plusCount++}
        if (type =='minus'){$scope.posts[index].minusCount++}
        //TODO: UPDATE POST
    };

}]);
