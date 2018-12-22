angular.module('models.token', ['lodash', 'services', 'sails.io',])

.service('TokenModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {

    this.getOne = function(model) {
        var url = utils.prepareUrl('token/' + model);
        return $sailsSocket.get(url).then(success, error);    
    };
    
    this.getSome = function(type, filter, limit, skip, sort) {
        var query = {};
        if (type=='search'){query = {params:{query:filter, limit:limit,skip:skip,sort:sort}};}
        if (type=='string'){query = {params:{string:filter, limit:limit,skip:skip,sort:sort}};}
        else{query = {params:{limit:limit,skip:skip,sort:sort}};}
        var url = utils.prepareUrl('token');
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