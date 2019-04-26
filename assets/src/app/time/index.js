angular.module( 'conexus.time', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'time', {
        url: '/time/:id',
        views: {
            "main": {
                controller: 'TimeController',
                templateUrl: 'time/index.tpl.html'
            }
        },

        //TODO: DEPRECIATE RESOLVE
        resolve: {
            time: ['$stateParams', 'TimeModel', function($stateParams, TimeModel){
                return TimeModel.getSome({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
            contentList: ['ContentModel', 'time', function(ContentModel, time){
                return ContentModel.getSome({time:time.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            validations: ['ValidationModel', 'time', function(ValidationModel, time){
                return ValidationModel.getSome({time:time.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'TimeController', ['$mdSidenav', '$location', '$rootScope', '$sailsSocket', '$sce', '$scope', 'contentList', 'ContentModel', 'ReactionModel', 'time', 'TimeModel', 'titleService', 'UserModel', 'ValidationModel', 'validations', function TimeController( $mdSidenav, $location, $rootScope, $sailsSocket, $sce, $scope, contentList, ContentModel, ReactionModel, time, TimeModel, titleService, UserModel, ValidationModel, validations) {
    
    $scope.time = time;
    if(!$scope.time){$location.path('/')}
    $scope.time.model = 'TIME';
    titleService.setTitle($scope.time.amount + ' | Time | CRE8.XYZ');
   
    $scope.toolBarSettings = {toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'fontFamily', 'fontSize', 'insertLink', 'insertImage', 'insertTable', 'undo', 'redo', 'html']};

    //TODO: DEPRECIATE | PATCH!
    $rootScope.associatedModels = [{
        address: $scope.time.id,
        type: 'TIME',
    }];

    //TODO: DEPRECIATE | AS ASSOCIATIONS!
    if ($scope.time.tags){$scope.time.tags = $scope.time.tags.split(',')}
    if ($scope.time.task.tags){$scope.time.task.tags = $scope.time.task.tags.split(',')}

    $scope.contentList = contentList;
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.newValidation = {};
    $scope.newValidation.validation = {}
    $scope.validations = validations;
   
    //TODO: DEPRECIATE
    $scope.time.tokens = [];
    $scope.time.tokens.push('CRE8');
    $scope.time.tokens.push('CRE8+TIME');
    $scope.time.tokens.push('CRE8+TIME+'+$scope.time.id);

    //HUMAN VALIDATED AI VERIFY? 
    //VALID VS VERIFY
    //UNIFY CONTENT AND TIME??
    //NAKED TAGS? --> REP?

    //VALIDATION IS THE CORE.. 
    //if ($scope.time.task){$scope.time.tokens.push('CRE8+TIME+'+$scope.time.task.title.toUpperCase().replace(/ /g, '-')+'.'+$scope.time.task.id)}
    //if ($scope.time.project){$scope.time.tokens.push('CRE8+TIME+'+$scope.time.project.title.toUpperCase().replace(/ /g, '-')+'.'+$scope.time.project.id)}

    //if ($scope.time.task.tags){
    //    for (x in $scope.time.task.tags){
    //        $scope.time.tokens.push('CRE8+TIME+'+$scope.time.task.tags[x].trim().toUpperCase());
    //        $scope.time.tokens.push('CRE8+TIME+'+$scope.time.id+'+'+$scope.time.task.tags[x].trim().toUpperCase());
    //        if ($scope.time.task){$scope.time.tokens.push('CRE8+TIME+'+$scope.time.task.title.toUpperCase().replace(/ /g, '-')+'.'+$scope.time.task.id+'+'+$scope.time.task.tags[x].trim().toUpperCase());}
    //        if ($scope.time.project){$scope.time.tokens.push('CRE8+TIME+'+$scope.time.project.title.toUpperCase().replace(/ /g, '-')+'.'+$scope.time.project.id+'+'+$scope.time.task.tags[x].trim().toUpperCase());}
    //    }
    //}
   
    //TODO: DEPRECIATE
    $scope.createContent = function(content) {
        if ($rootScope.currentUser){
            if (content){$scope.newContent.contentModel = content.id}
            $scope.newContent.user = $rootScope.currentUser.id;
            $scope.newContent.time = $scope.time.id;
            ContentModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            //TIME, ORDER, CONTENT, ITEMS, TRANSACTION, TASK, REACTION
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $rootScope.currentUser.id;
            var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            if (index != -1){
                $scope.newReaction.associatedModels = [{type:'CONTENT', id:item.id}];
                $scope.contentList[index].reactions[type]++;
            }
            else{
                $scope.newReaction.associatedModels = [{type:'TIME', id:item.id}];
                $scope.time.reactions[type]++;
            }
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}
    };

    //TODO: DEPRECIATE
    $scope.reply = function(item){
        if ($rootScope.currentUser){
            var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            if (contentIndex != -1){$scope.contentList[contentIndex].showReply = !$scope.contentList[contentIndex].showReply;}
            else{$scope.time.showReply = !$scope.time.showReply;}
        }
        else{$mdSidenav('login').toggle();}
    };

    //TODO: WEBSOCKET
    $sailsSocket.subscribe('content', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.contentList.unshift(envelope.data);
                break;
        }
    });

    //TODO: WEBSOCKET
    $sailsSocket.subscribe('reaction', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.reactions.unshift(envelope.data);
                break;
        }
    });

    $sailsSocket.subscribe('validation', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.validations.unshift(envelope.data);
                break;
        }
    });

}]);
