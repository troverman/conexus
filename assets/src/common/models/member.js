angular.module('models.member', ['lodash', 'services', 'sails.io',])

.service('MemberModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getByProject = function(model) {
		var url = utils.prepareUrl('project/' + model.id + '/member');
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('project/member');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

	var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);