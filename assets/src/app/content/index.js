angular.module( 'conexus.content', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'content', {
        url: '/content/:id',
        views: {
            "main": {
                controller: 'ContentController',
                templateUrl: 'content/index.tpl.html'
            }
        },
        resolve: {
            post: ['$stateParams', 'PostModel', function($stateParams, PostModel){
                return PostModel.getOne($stateParams.id);
            }],
            posts:['post', 'PostModel', function(post, PostModel) {
                return PostModel.getSome('post', post.id, 100, 0, 'createdAt DESC');
            }],
            //MAPPING LOOKUPS
            reactions: ['post', 'ReactionModel', function(post, ReactionModel){
                return ReactionModel.getSome('post', post.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'ContentController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'post', 'PostModel', 'posts', 'ReactionModel', 'reactions', 'titleService', 'UserModel', function ContentController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, lodash, post, PostModel, posts, ReactionModel, reactions, titleService, UserModel ) {
    $scope.currentUser = config.currentUser;
    $scope.marketOutput = [];
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.newValidation = {};
    $scope.newValidation.validation = {};
    $scope.newValidation.validation.general = 0;
    $scope.post = post;
    
    if ($scope.post.title){titleService.setTitle($scope.post.title + ' | Content | CRE8.XYZ')}
    else{titleService.setTitle('Content | CRE8.XYZ')}

    if(!$scope.post){$location.path('/')}
    $scope.reactions = reactions;
    $scope.toggleTokenVar = false;
    $scope.viewTime = 0;

    //TODO | BETTER
    if($scope.currentUser){
        UserModel.getByUsername($scope.currentUser.username).then(function(member){
            $scope.member = member;
            $scope.balance = member.balance;
            $scope.reputation = member.reputation;
        });
    }

    //+Addative Manifolds --> Extra dimensional 
    $scope.tokens = [
        'Content+Create',
        'Content+[type]',
        'Content+Create+[type]',
        'createContent+'+$scope.post.id,
        'Content+'+$scope.post.id,
        'View+'+$scope.post.id,
        'View+'+$scope.post.user.id,
        'View+userId',
        'View+[types | tags]',
        'Reaction+userId',
        'Reaction+[type]',
        'Reaction+[type]+userId',
    ]; 
 
    $scope.outputVector = 'CRE8,BTC,ETH';

    $scope.updateCount = function() {
        //plug in for validation
        $scope.viewTime++;
        $scope.$apply();
    };
    
    //OnClick
    setInterval($scope.updateCount, 1000);
    //clearInterval($scope.interval);
    //viewToken Mechanism


    //$scope.tokens | input; output | outputVector (by weights)
    //TODO RECURSIVE TRAVERSE THAT FINDS PATHS FROM ONE [] TO ANOTHER [];
    //HAVE A SET OF KNOWN a[] = b[]
    //DEFINE THE FORMAL MATH 

    //MULTIDIMENSIONAL VALUE MATRIX THAT ALLOWS FOR SET EQUALITIES IN A TOKENIZED SPACE

    $scope.marketTraverse = function(input, output){

        for (x in $scope.outputVector.split(',')){
            $scope.marketOutput.push([Math.random(),$scope.outputVector.split(',')[x]])
        } 

    };

    //TODO: FINALIZE.. WORKS ON FRONTEND
    //ERROR: DUPLICATES IN A REPEATOR ARE NOT ALLOWED
    function populateChildren(posts, depth, limit){
        posts.forEach(function(post) {
            PostModel.getSome('post', post.id, 100, 0, 'createdAt DESC').then(function(posts){
                if (posts.length > 0){
                    depth++ 
                    post.children = posts;
                    $scope.post.children.push(post);
                    if (depth < limit){populateChildren(posts, depth, limit)}
                }
            });
        });
    }
    populateChildren(posts, 0, 5);
    $scope.post.children = posts;

    function searchObject(object, matchCallback, currentPath, result, searched) {
        currentPath = currentPath || '';
        result = result || [];
        searched = searched || [];
        if (searched.indexOf(object) !== -1 && object === Object(object)) {return;}
        searched.push(object);
        if (matchCallback(object)) {result.push({path: currentPath, value: object});}
        try {
            if (object === Object(object)) {
                for (var property in object) {
                    if (property.indexOf("$") !== 0) {
                        searchObject(object[property], matchCallback, currentPath + "." + property, result, searched);
                    }
                }
            }
        }
        catch (e) {
            console.log(object);
            throw e;
        }
        return result;
    }

    //Cannot read property 'children' of undefined
    function updateObject(object, newValue, path){
        var stack = path.split('.');
        while(stack.length>1){
            object = object[stack.shift()];
        }
        object[stack.shift()] = newValue;
    }

    //TODO
    $scope.createPost = function(content) {
        if($scope.currentUser){
            $scope.newContent.post = content.id;
            $scope.newContent.user = $scope.currentUser.id;
            PostModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
                //ADD TO LIST
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createReaction = function(content, type){

        if($scope.currentUser){

            $scope.newReaction.amount = 1;
            $scope.newReaction.post = content.id;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;

            var location = searchObject($scope.post, function (value) { return value != null && value != undefined && value.id == content.id; });
            
            console.log(location[0]);

            if (type =='plus'){
                location[0].value.plusCount++;
            }
            if (type =='minus'){
                location[0].value.minusCount++;
            }

            updateObject($scope.post, location[0].value, location[0].path)

            ReactionModel.create($scope.newReaction).then(function(model){
                $scope.newReaction = {};
            });

        }
        else{$mdSidenav('login').toggle()}
    };

    //YIKES
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

        var location = searchObject($scope.post, function (value) { return value != null && value != undefined && value.id == content.id; });
        location[0].value.showReply = !location[0].value.showReply;
        updateObject($scope.post, location[0].value, location[0].path);

    };

    $scope.toggleThread = function(content){

        var location = searchObject($scope.post, function (value) { return value != null && value != undefined && value.id == content.id; });
        location[0].value.showThread = !location[0].value.showThread;
        updateObject($scope.post, location[0].value, location[0].path);

    };

    $scope.toggleToken = function(){
        $scope.toggleTokenVar =!$scope.toggleTokenVar
    };

    $scope.tokenToggle = function(content){
        $mdSidenav('tokens').toggle();
        $rootScope.globalTokens = content;
    };

    $sailsSocket.subscribe('post', function (envelope) {
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
