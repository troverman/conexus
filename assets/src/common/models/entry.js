angular.module('models.entry', ['lodash', 'services', 'sails.io',])

.service('EntryModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getOne = function(model) {
        var url = utils.prepareUrl('entry/'+model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getSome = function(type, filter, limit, skip, sort) {
        var query = {};
        if (type=='from'){query = {params:{from:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='project'){query = {params:{project:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='to'){query = {params:{to:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='user'){query = {params:{user:filter,limit:limit,skip:skip,sort:sort}};}
        else{query = {params:{limit:limit,skip:skip,sort:sort}};}
        var url = utils.prepareUrl('entry');
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('entry');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('entry/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
    
}]);