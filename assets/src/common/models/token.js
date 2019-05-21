angular.module('models.token', ['services', 'sails.io',])

.service('TokenModel',['utils', '$sailsSocket', function(utils, $sailsSocket) {
    
    this.getSome = function(model) {
        var url = utils.prepareUrl('token');
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                id:model.id,
                search:model.search,
                string:model.string,
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('token');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);