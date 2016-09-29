angular.module( 'conexus.stream', [
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'stream', {
        url: '/stream/:path',
        views: {
            "main": {
                controller: 'StreamCtrl',
                templateUrl: 'stream/index.tpl.html'
            }
        },

        member: function(UserModel, $stateParams){
            //return UserModel.getByUsername($stateParams.path);
            return null;
        },
            
    });
})

.controller( 'StreamCtrl', function StreamController( $http, $location, $scope, $sailsSocket, $stateParams, lodash, config, titleService, FollowerModel, followers, MessageModel, member, messages ) {
    $scope.currentUser = config.currentUser;
    $scope.member = member;
    
});