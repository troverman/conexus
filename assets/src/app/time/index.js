angular.module( 'conexus.time', [
])

//TODO: CONVERT TO TIME
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
            validations: ['ValidationModel', 'time', function(ValidationModel, time){
                return ValidationModel.getSome('work', time.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'TimeController', ['$mdSidenav', '$location', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'contentList', 'ContentModel', 'ReactionModel', 'time', 'TimeModel', 'titleService', 'UserModel', 'ValidationModel', 'validations', function TimeController( $mdSidenav, $location, $rootScope, $sailsSocket, $sce, $scope, config, contentList, ContentModel, ReactionModel, time, TimeModel, titleService, UserModel, ValidationModel, validations) {
    $scope.currentUser = config.currentUser;

    $scope.time = time;
    if(!$scope.time){$location.path('/')}

    titleService.setTitle($scope.time.amount + ' | Time | CRE8.XYZ');

    //PATCH!!!
    $rootScope.associatedModels = [{
        address: $scope.time.id,
        type: 'TIME',
    }];

    $scope.contentList = contentList;

    $scope.member = {};
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.newValidation = {};
    $scope.newValidation.validation = {}
    $scope.reactions = [];
    $scope.reputationList = [];
    $scope.tags = [];
    if ($scope.time.task.tags){$scope.tags = $scope.time.task.tags.split(',')}
        
    $scope.taskTime = 0;
    $scope.tokens = [];
    $scope.tokens.push('Token');
    $scope.tokens.push('TimeToken');
    $scope.tokens.push('Time+'+$scope.time.id);
    $scope.validationList = [];
    $scope.validations = validations;

    $scope.newValidation.validation.general = 0;
    for (x in $scope.tags){
        $scope.newValidation.validation[$scope.tags[x]] = 0;
    }

    //EXPERIMENTAL | TODO MANIFOLD FILTER
    $scope.validationColumn = {
        chart: {
            zoomType: 'x',
        },
        series: [{
            id: 'validation',
            type: 'column',
            name: 'Average Validation',
            data: [],
            yAxis: 0
        }],
        title: {
            text: ''
        },
        xAxis: {
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {text: null},
            categories: [],
        },
        yAxis: [{
            title: {text: null}
        },{
            title: {text: null},
        }],
        legend: {enabled: true},
        credits:{enabled:false},
        plotOptions: {
            column: {
                minPointLength: 3
            }
        },
    };

    //EFFICENCY | STORE IN TIME MODEL
    var sumObj = {};
    //var sumObj.validation = {};
    //var sumObj.reputation = {};
    //var sumObj.reputationWeighted = {};

    for (y in $scope.validations){
        console.log($scope.validations[y].validation);
        for (x in Object.keys($scope.validations[y].validation)){
            if(!sumObj[Object.keys($scope.validations[y].validation)[x]]){sumObj[Object.keys($scope.validations[y].validation)[x]]=$scope.validations[y].validation[Object.keys($scope.validations[y].validation)[x]]}
            else{sumObj[Object.keys($scope.validations[y].validation)[x]]+=$scope.validations[y].validation[Object.keys($scope.validations[y].validation)[x]]}
        //    $scope.validationList.push([Object.keys($scope.validations[y].validation)[x], $scope.validations[y].validation[Object.keys($scope.validations[y].validation)[x]]]);
        //    $scope.reputationList.push([Object.keys($scope.validations[y].reputation)[x], $scope.validations[y].reputation[Object.keys($scope.validations[y].reputation)[x]]]);
        }

    }

    console.log(sumObj);

    //STORE IN TIME MODEL
    for (x in Object.keys(sumObj)){
        //$scope.validationList.push([Object.keys(sumObj)[x], sumObj[Object.keys(sumObj)[x]]]);
        $scope.validationColumn.series[0].data.push(sumObj[Object.keys(sumObj)[x]]/$scope.validations.length);
        $scope.validationColumn.xAxis.categories.push(Object.keys(sumObj)[x]);

    }

    //HUMAN VALIDATED AI VERIFY? 
    //VALID VS VERIFY

    //UNIFY CONTENT AND TIME??
    //TIME AS A TYPE
   
    //for x in scope.tadk.tags.split()
    //$scope.tokens.push('Time+'+$scope.time.id);

    //TODO: BETTER
    if($scope.currentUser){
        UserModel.getByUsername($scope.currentUser.username).then(function(member){
            $scope.member = member;
            $scope.balance = member.balance;
            $scope.reputation = member.reputation;
        });
    }

    if ($scope.time.task.tags){
        for (x in $scope.time.task.tags.split(',')){
            $scope.tokens.push($scope.time.task.tags.split(',')[x].trim());
            $scope.tokens.push('Task+'+$scope.time.task.tags.split(',')[x].trim());
            $scope.tokens.push('Task+'+$scope.time.task.id+'+'+$scope.time.task.tags.split(',')[x].trim());
        }
    }

    for (x in $scope.tokens){
        $scope.tokens.push($scope.tokens[x]+'+onStream');
        $scope.tokens.push($scope.tokens[x]+'+onValidation');
    }
    
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

    //TODO: LAYERS | PROJ BASED LAYER
    $scope.createValidation = function(){
        if ($scope.currentUser){
            $scope.newValidation.work = $scope.time.id;
            $scope.newValidation.user = $scope.currentUser.id;
            ValidationModel.create($scope.newValidation).then(function(model){
                $scope.newValidation = {};
                for (x in $scope.tags){
                    $scope.newValidation.validation[$scope.tags[x]] = 0;
                }
            });
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
