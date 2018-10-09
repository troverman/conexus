angular.module('models.item', ['lodash', 'services', 'sails.io',])

.service('ItemModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getOne = function(model) {
        var url = utils.prepareUrl('item/'+model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getSome = function(type, filter, limit, skip, sort) {
        var query = {};
        if (type=='user'){query = {params:{user:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='project'){query = {params:{project:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='identiferSet'){query = {params:{identiferSet:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='tag'){query = {params:{tag:filter, limit:limit,skip:skip,sort:sort}};}
        else{query = {params:{limit:limit,skip:skip,sort:sort}};}
        var url = utils.prepareUrl('item');
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('item');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel) {
        var url = utils.prepareUrl('item');
        return $sailsSocket.post(url, newModel).then(success, error);
    };
    
    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
    
}]);