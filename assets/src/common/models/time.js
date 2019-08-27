angular.module('models.time', ['services', 'sails.io',])

.service('TimeModel',['utils', '$sailsSocket', function(utils, $sailsSocket) {
    
    this.get = function(model) {
        var url = utils.prepareUrl('time');
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                id:model.id,
                project:model.project,
                task:model.task,
                time:model.time,
                user:model.user,
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('time');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);