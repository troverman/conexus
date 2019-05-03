angular.module('models.member', ['services', 'sails.io',])

.service('MemberModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getSome = function(model) {
        var url = utils.prepareUrl('projectmember');
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                id:model.id,
                project:model.project,
                user:model.user,
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('projectmember');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

	var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);