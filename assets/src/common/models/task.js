angular.module('models.task', ['lodash', 'services', 'sails.io',])

.service('TaskModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getAll = function() {
        var url = utils.prepareUrl('task');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByProject = function(model) {
        var url = utils.prepareUrl('task/project/' + model.id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('task');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('task/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
    
}]);