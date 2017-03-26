angular.module('models.message', ['lodash', 'services', 'sails.io',])

.service('MessageModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getAll = function() {
        var url = utils.prepareUrl('message');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByProject = function(model) {
        var url = utils.prepareUrl('message/project/' + model.id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByUser = function(model) {
        var url = utils.prepareUrl('message/user/' + model.id);
        console.log(url)
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('message');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('message/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
    
}]);