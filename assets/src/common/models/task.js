angular.module('models.task', ['lodash', 'services', 'sails.io',])

.service('TaskModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getSome = function(model) {
        var url = utils.prepareUrl('task');
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                id:model.id,
                project:model.project,
                tag:model.tag,
                search:model.search,
                user:model.user,
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
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