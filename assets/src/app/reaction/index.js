angular.module( 'conexus.reaction', [
])
.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'reaction', {
        url: '/reaction/:id',
        views: {
            "main": {
                controller: 'ReactionCtrl',
                templateUrl: 'reaction/index.tpl.html'
            }
        },
        resolve: {
            reaction: ['$stateParams', 'ReactionModel', function($stateParams, ReactionModel){
                return ReactionModel.get({id:$stateParams.id});
            }],
        }
    });
}])
.controller( 'ReactionCtrl', ['$mdSidenav', '$sailsSocket', '$scope', 'reaction', 'ReactionModel', 'titleService', function ReactionController( $mdSidenav, $sailsSocket, $scope, reaction, ReactionModel, titleService) {

	$scope.reaction = reaction;
    $scope.reaction.model = 'REACTION';

    titleService.setTitle('Reaction | '+$scope.reaction.id + ' | CRE8.XYZ');

    //TODO: DEPRECIATE
    $scope.createReaction = function(item, type){
        if ($rootScope.currentUser){
            $scope.newReaction = {
                amount:1,
                type:type,
                user:$rootScope.currentUser.id,
                associatedModels:[{type:'REACTION', id:item.id}],
            };
            $scope.attention.data.apps.reactions[type]++;
            ReactionModel.create($scope.newReaction);
        }
        else{$mdSidenav('login').toggle()}
    }; 

    $sailsSocket.subscribe('reaction', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                if ($scope.reaction.id == envelope.data.id){
                    $scope.reaction.data.apps.attention = envelope.data.data.apps.attention;
                }
                break;
        }
    });



}]);