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
                return TimeModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
            contentList: ['ContentModel', 'time', function(ContentModel, time){
                return ContentModel.get({time:time.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'TimeController', ['$location', '$rootScope', '$sailsSocket', '$scope', 'contentList', 'time', 'titleService', function TimeController($location, $rootScope, $sailsSocket, $scope, contentList, time, titleService) {
    $scope.time = time;
    if(!$scope.time){$location.path('/')}
    titleService.setTitle($scope.time.amount + ' | Time | CRE8.XYZ');
    $scope.toolBarSettings = {toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'fontFamily', 'fontSize', 'insertLink', 'insertImage', 'insertTable', 'undo', 'redo', 'html']};
    $scope.contentList = contentList;
    $scope.selectedTab = 'INFORMATION';
    $scope.selectTab = function(model){$scope.selectedTab = model;};
    $sailsSocket.subscribe('time', function (envelope) {
        if (envelope.verb == 'update'){
            if ($scope.time.id == envelope.data.id){
                $scope.time.data.apps = envelope.data.data.apps
            }
        }
    });
}]);
