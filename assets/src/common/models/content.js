angular.module('models.content', ['lodash', 'services', 'sails.io',])

.service('ContentModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getOne = function(model) {
        var url = utils.prepareUrl('content/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getSome = function(type, filter, limit, skip, sort) {
        var query = {};

        //TODO COMPOUND

        if (type=='contentModel'){query = {params:{contentModel:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='item'){query = {params:{item:filter, limit:limit,skip:skip,sort:sort}};}
        else if (type=='market'){query = {params:{market:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='order'){query = {params:{order:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='profile'){query = {params:{profile:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='project'){query = {params:{project:filter, limit:limit,skip:skip,sort:sort}};}
        else if (type=='tag'){query = {params:{tag:filter, limit:limit,skip:skip,sort:sort}};}
        //MULTIPLE
        else if (type=='search'){query = {params:{search:filter, limit:limit,skip:skip,sort:sort}};}
        else if (type=='task'){query = {params:{task:filter, limit:limit,skip:skip,sort:sort}};}
        else if (type=='time'){query = {params:{time:filter, limit:limit,skip:skip,sort:sort}};}
        else if (type=='transaction'){query = {params:{transaction:filter, limit:limit,skip:skip,sort:sort}};}
        else if (type=='user'){query = {params:{user:filter, limit:limit,skip:skip,sort:sort}};}


        else{query = {params:{limit:limit,skip:skip,sort:sort}};}
        var url = utils.prepareUrl('content');
        console.log(query);
        return $sailsSocket.get(url, query).then(success, error);
        
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('content');
        console.log(newModel)
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel){
        var url = utils.prepareUrl('content/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('content/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
    
}]);