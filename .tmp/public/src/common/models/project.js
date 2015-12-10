angular.module('models.project', ['lodash', 'services', 'sails.io',])

.service('ProjectModel', function(lodash, utils, $sailsSocket, $location, $rootScope) {
    this.getAll = function() {
        var url = utils.prepareUrl('project');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByUrl = function(model) {
        var url = utils.prepareUrl('project/url/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('project');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('project/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        if (response.data == undefined){
            $location.path('/projects');
            $rootScope.$apply()
        }
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
});