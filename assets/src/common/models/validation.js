angular.module('models.validation', ['services', 'sails.io',])

.service('ValidationModel',['utils', '$sailsSocket', function(utils, $sailsSocket) {

    this.getSome = function(model) {
        var url = utils.prepareUrl('validation');
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                id:model.id,
                association:model.association,
                project:model.project,
                task:model.task,
                time:model.time,
                user:model.user,
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
    };
    
    this.create = function(newModel) {
        var url = utils.prepareUrl('validation');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);