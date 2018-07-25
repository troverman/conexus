angular.module('models.order', ['lodash', 'services', 'sails.io',])

.service('OrderModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getOne = function(model) {
        var url = utils.prepareUrl('order/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getSome = function(type, filter, filter1, limit, skip, sort) {
        var query = {};
        if (type=='market'){query = {params:{identiferSet:filter, limit:limit,skip:skip,sort:sort}};}
        if (type=='marketPair'){query = {params:{identiferSet:filter, identiferSet1:filter1, limit:limit,skip:skip,sort:sort}};}
        if (type=='user'){query = {params:{user:filter, limit:limit,skip:skip,sort:sort}};}
        else{query = {params:{limit:limit,skip:skip,sort:sort}};}
        var url = utils.prepareUrl('order');
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('order');
        console.log(newModel)
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('order/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
    
}]);