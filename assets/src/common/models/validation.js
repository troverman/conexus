angular.module('models.validation', ['lodash', 'services', 'sails.io',])

.service('ValidationModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {

   this.getOne = function(model) {
        var url = utils.prepareUrl('validation/' + model);
        return $sailsSocket.get(url).then(success, error);    
    };

    this.getSome = function(type, filter, limit, skip, sort) {
        var query = {};
        if (type=='id'){query = {params:{id:filter, limit:limit,skip:skip,sort:sort}};}
        else if (type=='project'){query = {params:{project:filter, limit:limit,skip:skip,sort:sort}};}
        else if (type=='task'){query = {params:{task:filter, limit:limit,skip:skip,sort:sort}};}
        else if (type=='user'){query = {params:{user:filter, limit:limit,skip:skip,sort:sort}};}
        else if (type=='work'){query = {params:{work:filter, limit:limit,skip:skip,sort:sort}};}
        else{query = {params:{limit:limit,skip:skip,sort:sort}};}
        var url = utils.prepareUrl('validation');
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