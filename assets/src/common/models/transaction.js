angular.module('models.transaction', ['lodash', 'services', 'sails.io',])

.service('TransactionModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getSome = function(type, filter, limit, skip, sort) {
        var query = {};
        if (type=='id'){query = {params:{id:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='from'){query = {params:{from:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='project'){query = {params:{project:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='to'){query = {params:{to:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='user'){query = {params:{user:filter,limit:limit,skip:skip,sort:sort}};}
        else{query = {params:{limit:limit,skip:skip,sort:sort}};}
        var url = utils.prepareUrl('transaction');
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('transaction');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('transaction/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
    
}]);