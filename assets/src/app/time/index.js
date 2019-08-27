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
                return TimeModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
            contentList: ['ContentModel', 'time', function(ContentModel, time){
                return ContentModel.get({time:time.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
            validations: ['ValidationModel', 'time', function(ValidationModel, time){
                return ValidationModel.get({time:time.id, limit:100, skip:0, sort:'createdAt DESC'});
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



    //TODO: DEPRECIATE
    $rootScope.associatedModels = [{
        id: $scope.time.id,
        type: 'TIME',
    }];

    //TODO: DEPRECIATE
    if ($scope.time.tags){$scope.time.context = $scope.time.tags.split(',')}



    $scope.contentList = contentList;
    $scope.newReaction = {};
    $scope.validations = validations;

    $scope.selectedTab = 'INFORMATION';
    $scope.selectTab = function(model){$scope.selectedTab = model;};


    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction = {
                amount:1,
                type:type,
                user:$rootScope.currentUser.id,
                associatedModels:[{type:'TIME', id:item.id}],
            };
            $scope.time.data.apps.reactions[type]++;
            ReactionModel.create($scope.newReaction);
            $rootScope.pop(type, item.id);
        }
        else{$mdSidenav('login').toggle()}
    }; 

    //TODO: WEBSOCKET
    $sailsSocket.subscribe('time', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                if ($scope.time.id == envelope.data.id){
                    $scope.time.data.apps.attention = envelope.data.data.apps.attention;
                }
                break;
        }
    });

}]);
