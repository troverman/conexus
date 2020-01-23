angular.module( 'conexus.reaction', [])
.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'reaction', {
        url: '/reaction/:id',
        views: {"main": {controller: 'ReactionCtrl', templateUrl: 'reaction/index.tpl.html'}},
        resolve: {reaction: ['$stateParams', 'ReactionModel', function($stateParams, ReactionModel){return ReactionModel.get({id:$stateParams.id});}],}
    });
}])
.controller( 'ReactionCtrl', ['$mdSidenav', '$sailsSocket', '$scope', 'reaction', 'ReactionModel', 'titleService', function ReactionController( $mdSidenav, $sailsSocket, $scope, reaction, ReactionModel, titleService) {
	$scope.reaction = reaction;
    titleService.setTitle('Reaction | '+$scope.reaction.id + ' | CRE8.XYZ');
    $sailsSocket.subscribe('reaction', function (envelope) {
        if (envelope.verb == 'update'){
            if ($scope.reaction.id == envelope.data.id){
                $scope.reaction.data.apps = envelope.data.data.apps
            }
        }
    });
}]);