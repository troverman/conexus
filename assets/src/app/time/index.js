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
            work: ['$stateParams', 'WorkModel', function($stateParams, WorkModel){
                return WorkModel.getOne($stateParams.id);
            }],
            contentList: ['PostModel', 'work', function(PostModel, work){
                return PostModel.getSome('work', work.id, 100, 0, 'createdAt DESC');
            }],
            validations: ['ValidationModel', 'work', function(ValidationModel, work){
                return ValidationModel.getSome('work', work.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'TimeController', ['$mdSidenav', '$location', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'contentList', 'PostModel', 'ReactionModel', 'titleService', 'UserModel', 'ValidationModel', 'validations', 'work', 'WorkModel', function TimeController( $mdSidenav, $location, $rootScope, $sailsSocket, $sce, $scope, config, contentList, PostModel, ReactionModel, titleService, UserModel, ValidationModel, validations, work, WorkModel) {
    $scope.currentUser = config.currentUser;

    $scope.work = work;
    if(!$scope.work){$location.path('/')}

    titleService.setTitle($scope.work.amount + ' | Work | CRE8.XYZ');

    $scope.work.validationScore = 0;

    $scope.contentList = contentList;

    $scope.member = {};
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.newValidation = {};
    $scope.newValidation.validation = {}
    $scope.reactions = [];
    $scope.reputationList = [];
    $scope.tags = [];
    if ($scope.work.task.tags){$scope.tags = $scope.work.task.tags.split(',')}
        
    $scope.taskTime = 0;
    $scope.tokens = [];
    $scope.tokens.push('Token');
    $scope.tokens.push('WorkToken');
    $scope.tokens.push('Work+'+$scope.work.id);
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

    //EFFICENCY | STORE IN WORK MODEL
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

    //STORE IN WORK MODEL
    for (x in Object.keys(sumObj)){
        //$scope.validationList.push([Object.keys(sumObj)[x], sumObj[Object.keys(sumObj)[x]]]);
        $scope.validationColumn.series[0].data.push(sumObj[Object.keys(sumObj)[x]]/$scope.validations.length);
        $scope.validationColumn.xAxis.categories.push(Object.keys(sumObj)[x]);

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
                $scope.newReaction.associations = [{type:'CONTENT', id:item.id}];
                $scope.contentList[index].reactions[type]++;
            }
            else{
                $scope.newReaction.associations = [{type:'TIME', id:item.id}];
                $scope.work.reactions[type]++;
            }
            ReactionModel.create($scope.newReaction);
        }

        else{$mdSidenav('login').toggle()}

    };



    //TODO: LAYERS | PROJ BASED LAYER
    $scope.createValidation = function(){
        if ($scope.currentUser){
            $scope.newValidation.work = $scope.work.id;
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

    $scope.reply = function(post){
        if ($scope.currentUser){
            var index = $scope.contentList.map(function(obj){return obj.id}).indexOf(post.id);
            $scope.contentList[index].showReply = !$scope.contentList[index].showReply;
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.tokenToggle = function(){
        $mdSidenav('tokens').toggle();
        $rootScope.globalTokens = $scope.tokens;
    };

    //TODO: WEBSOCKETS | WEB3
    $sailsSocket.subscribe('post', function (envelope) {
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
