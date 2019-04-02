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
        resolve: {
            time: ['$stateParams', 'TimeModel', function($stateParams, TimeModel){
                return TimeModel.getOne($stateParams.id);
            }],
            contentList: ['ContentModel', 'time', function(ContentModel, time){
                return ContentModel.getSome('time', time.id, 100, 0, 'createdAt DESC');
            }],
            //association is sum of validation
            validations: ['ValidationModel', 'time', function(ValidationModel, time){
                return ValidationModel.getSome('time', time.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'TimeController', ['$mdSidenav', '$location', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'contentList', 'ContentModel', 'ReactionModel', 'time', 'TimeModel', 'titleService', 'UserModel', 'ValidationModel', 'validations', function TimeController( $mdSidenav, $location, $rootScope, $sailsSocket, $sce, $scope, config, contentList, ContentModel, ReactionModel, time, TimeModel, titleService, UserModel, ValidationModel, validations) {
    $scope.currentUser = config.currentUser;
    $scope.time = time;
    if(!$scope.time){$location.path('/')}
    titleService.setTitle($scope.time.amount + ' | Time | CRE8.XYZ');
    //TODO: STORE IN DATA
    $scope.time.model = 'TIME';
    $scope.toolBarSettings = {toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'fontFamily', 'fontSize', 'insertLink', 'insertImage', 'insertTable', 'undo', 'redo', 'html']};

    //TODO: BETTER
    $scope.member = {};
    if($scope.currentUser){
        UserModel.getByUsername($scope.currentUser.username).then(function(member){
            $scope.member = member;
            $scope.balance = member.balance;
            $scope.reputation = member.reputation;
        });
    }
    //PATCH!!!
    $rootScope.associatedModels = [{
        address: $scope.time.id,
        type: 'TIME',
    }];

    //AS ASSOCIATIONS!
    if ($scope.time.tags){$scope.time.tags = $scope.time.tags.split(',')}
    if ($scope.time.task.tags){$scope.time.task.tags = $scope.time.task.tags.split(',')}

    $scope.contentList = contentList;
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.newValidation = {};
    $scope.newValidation.validation = {}
    $scope.validations = validations;

    //HUMAN VALIDATED AI VERIFY? 
    //VALID VS VERIFY
    //UNIFY CONTENT AND TIME??
    //TIME AS A TYPE
   
    //TEMP HARDOCDE -- MOVE TO PROTOCOL
    $scope.time.tokens = [];
    $scope.time.tokens.push('CRE8');
    $scope.time.tokens.push('CRE8+TIME');
    $scope.time.tokens.push('CRE8+TIME+'+$scope.time.id);

    //NAKED TAGS? --> REP?

    //VALIDATION IS THE CORE.. 
    $scope.time.tokens.push('CRE8+TIME+'+$scope.time.task.title.toUpperCase().replace(/ /g, '-')+'.'+$scope.time.task.id);
    $scope.time.tokens.push('CRE8+TIME+'+$scope.time.project.title.toUpperCase().replace(/ /g, '-')+'.'+$scope.time.project.id);
    if ($scope.time.task.tags){
        for (x in $scope.time.task.tags){
            $scope.time.tokens.push('CRE8+TIME+'+$scope.time.task.tags[x].trim().toUpperCase());
            $scope.time.tokens.push('CRE8+TIME+'+$scope.time.id+'+'+$scope.time.task.tags[x].trim().toUpperCase());
            $scope.time.tokens.push('CRE8+TIME+'+$scope.time.task.title.toUpperCase().replace(/ /g, '-')+'.'+$scope.time.task.id+'+'+$scope.time.task.tags[x].trim().toUpperCase());
            $scope.time.tokens.push('CRE8+TIME+'+$scope.time.project.title.toUpperCase().replace(/ /g, '-')+'.'+$scope.time.project.id+'+'+$scope.time.task.tags[x].trim().toUpperCase());
        }
    }
   
    //DEPRECIATE
    $scope.createContent = function(content) {
        if ($scope.currentUser){
            if (content){$scope.newContent.contentModel = content.id}
            $scope.newContent.user = $scope.currentUser.id;
            $scope.newContent.time = $scope.time.id;
            ContentModel.create($scope.newContent).then(function(model) {
                $scope.newContent = {};
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.createReaction = function(item, type){
        if ($scope.currentUser){
            //TIME, ORDER, CONTENT, ITEMS, TRANSACTION, TASK, REACTION
            $scope.newReaction.amount = 1;
            $scope.newReaction.type = type;
            $scope.newReaction.user = $scope.currentUser.id;
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

    $scope.reply = function(item){
        if ($scope.currentUser){
            var contentIndex = $scope.contentList.map(function(obj){return obj.id}).indexOf(item.id);
            if (contentIndex != -1){$scope.contentList[contentIndex].showReply = !$scope.contentList[contentIndex].showReply;}
            else{$scope.time.showReply = !$scope.time.showReply;}
        }
        else{$mdSidenav('login').toggle();}
    };

    //TODO: WEBSOCKETS | WEB3
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

    $sailsSocket.subscribe('reaction', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.reactions.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.reactions, {id: envelope.id});
                break;
        }
    });

    $sailsSocket.subscribe('validation', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.validations.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.validations, {id: envelope.id});
                break;
        }
    });

}]);
