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
            content: ['$stateParams', 'ContentModel', function($stateParams, ContentModel){
                return ContentModel.getOne($stateParams.id);
            }],
            contentList:['content', 'ContentModel', function(content, ContentModel) {
                return ContentModel.getSome('contentModel', content.id, 100, 0, 'createdAt DESC');
            }],
            //MAPPING LOOKUPS
            reactions: ['content', 'ReactionModel', function(content, ReactionModel){
                //return ReactionModel.getSome('contentModel', content.id, 100, 0, 'createdAt DESC');
                return null;
            }],
        }
    });
}])

.controller( 'ContentController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'content', 'contentList', 'ContentModel', 'lodash', 'ReactionModel', 'reactions', 'titleService', 'UserModel', function ContentController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, content, contentList, ContentModel, lodash, ReactionModel, reactions, titleService, UserModel ) {
    $scope.currentUser = config.currentUser;
    $scope.marketOutput = [];
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.newValidation = {};
    $scope.newValidation.validation = {};
    $scope.newValidation.validation.general = 0;
    $scope.content = content;
    
    if ($scope.content.title){titleService.setTitle($scope.content.title + ' | Content | CRE8.XYZ')}
    else{titleService.setTitle('Content | CRE8.XYZ')}

    if(!$scope.content){$location.path('/')}
    $scope.reactions = reactions;

    $scope.tokenFilter = 0;
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

    $scope.content.tokens = [];

    //+Addative Manifolds --> Extra dimensional 
    $scope.content.tokens = [
        'Content+Create',
        'Content+[type]',
        'Content+Create+[type]',
        'createContent+'+$scope.content.id,
        'Content+'+$scope.content.id,
        'View+'+$scope.content.id,
        'View+'+$scope.content.user.id,
        'View+userId',
        'View+[types | tags]',
        'Reaction+userId',
        'Reaction+[type]',
        'Reaction+[type]+userId',
    ]; 
 
    $scope.updateCount = function() {
        //plug in for validation
        $scope.viewTime++;
        $scope.tokenFilter = (0.04+0.00232*24*$scope.viewTime).toFixed(4);
        $scope.$apply();
    };
    
    //OnClick
    setInterval($scope.updateCount, 1000);
    //clearInterval($scope.interval);
    //viewToken Mechanism

    //TODO: FINALIZE.. WORKS ON FRONTEND
    //ERROR: DUPLICATES IN A REPEATOR ARE NOT ALLOWED
    //TODO??? ASSOCIATED TYPE.. CHILD?? DETAILS.. 

    function populateChildren(contentList, depth, limit){
        contentList.forEach(function(content) {
            ContentModel.getSome('contentModel', content.id, 100, 0, 'createdAt DESC').then(function(contentList){
                if (contentList.length > 0){
                    depth++ 
                    content.children = contentList;
                    $scope.content.children.push(content);
                    if (depth < limit){populateChildren(contentList, depth, limit)}
                }
            });
        });
    }
    populateChildren(contentList, 0, 5);
    $scope.content.children = contentList;

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
    $scope.createContent = function(content) {
        if($scope.currentUser){
            $scope.newContent.contentModel = content.id;
            $scope.newContent.user = $scope.currentUser.id;
            ContentModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
                //ADD TO LIST
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createReaction = function(content, type){
        if($scope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:'CONTENT', id:content.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
            var location = searchObject($scope.content, function (value) { return value != null && value != undefined && value.id == content.id; });
            console.log(location[0]);
            location[0].value.reactions[type]++;
            ReactionModel.create($scope.newReaction);
            //updateObject($scope.content, location[0].value, location[0].path);
        }
        else{$mdSidenav('login').toggle()}
    };
 
    $scope.reply = function(content){
        var location = searchObject($scope.content, function (value) { return value != null && value != undefined && value.id == content.id; });
        location[0].value.showReply = !location[0].value.showReply;
        updateObject($scope.content, location[0].value, location[0].path);
    };

    $scope.toggleThread = function(content){
        var location = searchObject($scope.content, function (value) { return value != null && value != undefined && value.id == content.id; });
        location[0].value.showThread = !location[0].value.showThread;
        updateObject($scope.content, location[0].value, location[0].path);
    };

    $sailsSocket.subscribe('content', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.contentList.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.contentList, {id: envelope.id});
                break;
        }
    });

}]);
