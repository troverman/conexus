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

        //TODO: DEPRECIATE RESOLVE.. 
        resolve: {
            content: ['$stateParams', 'ContentModel', function($stateParams, ContentModel){
                return ContentModel.getSome({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
            contentList:['content', 'ContentModel', function(content, ContentModel) {
                return ContentModel.getSome({contentModel:content.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            //MAPPING LOOKUPS
            reactions: ['content', 'ReactionModel', function(content, ReactionModel){
                //return ReactionModel.getSome('contentModel', content.id, 100, 0, 'createdAt DESC');
                return null;
            }],
        }
    });
}])

.controller( 'ContentController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'content', 'contentList', 'ContentModel', 'ReactionModel', 'reactions', 'titleService', 'UserModel', function ContentController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, content, contentList, ContentModel, ReactionModel, reactions, titleService, UserModel ) {
    
    $scope.content = content;
    if(!$scope.content){$location.path('/')}
    if ($scope.content.title){titleService.setTitle($scope.content.title + ' | Content | CRE8.XYZ')}
    else{titleService.setTitle('Content | CRE8.XYZ')}

    $scope.content.tokens = [];


    //todo.. attention connection... common model.. like reaction
    //attention mapping -> 
        //string to content 
    //attention:{sum:1000,attention[context]:1,live:1}



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





    $scope.marketOutput = [];
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.newValidation = {};
    $scope.newValidation.validation = {};
    $scope.newValidation.validation.general = 0;

    $scope.reactions = reactions;

    $scope.tokenFilter = 0;
    $scope.toggleTokenVar = false;

    //TODO: VIEWCOUNTER ALL .. plug in for validation
    //viewToken Mechanism.. OnClick
    //GET A COUNT OF ALL LIVE PPL.. -> THIS WILL BE ONLY YOU


    //TODO: FINALIZE..
    //ERROR: DUPLICATES IN A REPEATOR ARE NOT ALLOWED
    //TODO: ASSOCIATED TYPE.. CHILD.. DETAILS.. 

    function populateChildren(contentList, depth, limit){
        contentList.forEach(function(content) {
            ContentModel.getSome({contentModel:content.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(contentList){
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

    //ERROR: Cannot read property 'children' of undefined
    function updateObject(object, newValue, path){
        var stack = path.split('.');
        while(stack.length>1){
            object = object[stack.shift()];
        }
        object[stack.shift()] = newValue;
    }

    //TODO: DEPRECIATE
    $scope.createContent = function(content) {
        if($rootScope.currentUser){
            $scope.newContent.contentModel = content.id;
            $scope.newContent.user = $rootScope.currentUser.id;
            ContentModel.create($scope.newContent).then(function(model) {$scope.newContent = {}});
        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: DEPRECIATE.. ? IN GLOBAL
    $scope.createReaction = function(content, type){
        if($rootScope.currentUser){
            $scope.newReaction.amount = 1;
            $scope.newReaction.associatedModels = [{type:'CONTENT', id:content.id}];
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var location = searchObject($scope.content, function (value) { return value != null && value != undefined && value.id == content.id; });
            console.log(location[0]);
            location[0].value.reactions[type]++;
            ReactionModel.create($scope.newReaction);
            //updateObject($scope.content, location[0].value, location[0].path);
        }
        else{$mdSidenav('login').toggle()}
    };
 
    //TODO: GLOBAL..
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

    //TODO: WEBSOCKET
    $sailsSocket.subscribe('content', function (envelope) {
        console.log(envelope)
        switch(envelope.verb) {
            //should be update ..
            case 'created':
                if ($scope.content.id == envelope.data.id){
                    $scope.content.attention = envelope.data.attention;
                }
                break;
        }
    });

}]);
