angular.module('models.action', ['services', 'sails.io',])

.service('ActionModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.get = function(model) {
        var url = utils.prepareUrl('action'); 
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                id:model.id,
                type:model.type,
                item:model.item,
                user:model.user,
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('action');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {return response.data;};
    var error = function(error) {console.log(error);};
    
}]);