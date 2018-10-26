angular.module('models.task', ['lodash', 'services', 'sails.io',])

.service('TaskModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getOne = function(model) {
        var url = utils.prepareUrl('task/'+model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getSome = function(type, filter, limit, skip, sort) {
        var query = {};
        if (type=='project'){query = {params:{project:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='tag'){query = {params:{tag:filter, limit:limit,skip:skip,sort:sort}};}
        else if (type=='search'){query = {params:{search:filter, limit:limit,skip:skip,sort:sort}};}
        //MULTIPLE.. OBJ -- Project & Tag
        else{query = {params:{limit:limit,skip:skip,sort:sort}};}
        var url = utils.prepareUrl('task');
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('task');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('task/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
    
}]);