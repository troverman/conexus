angular.module( 'conexus.search', [
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'search', {
        url: '/search',
        views: {
            "main": {
                controller: 'SearchController',
                templateUrl: 'search/index.tpl.html'
            }
        },
        resolve: {
            members: function(MemberModel) {
                return MemberModel.getAll().then(function(models) {
                    return models;
                });
            }
        }
    });
})

.controller( 'SearchController', function SearchController( $scope, $sailsSocket, lodash, config, titleService, MemberModel, members ) {
    titleService.setTitle('Search');
    $scope.newMember = {};
    $scope.members = members;
    $scope.currentUser = config.currentUser;

    $sailsSocket.subscribe('user', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.members.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.members, {id: envelope.id});
                break;
        }
    });

});