angular.module('models.stream', ['lodash', 'services', 'sails.io',])

.service('StreamModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getAll = function() {
        var url = utils.prepareUrl('stream');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getSome = function(model) {
        var query = {};
        var url = utils.prepareUrl('stream');
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('stream');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('stream/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
    
}]);