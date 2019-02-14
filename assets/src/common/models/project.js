angular.module('models.project', ['lodash', 'services', 'sails.io',])

.service('ProjectModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getOne = function(id) {
        var url = utils.prepareUrl('project/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getSome = function(type, filter, limit, skip, sort) {
        var url = utils.prepareUrl('project');
        var query = {params:{limit:limit,skip:skip,sort:sort}};


        if (type=='search'){query = {params:{query:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='location'){query = {params:{location:filter,limit:limit,skip:skip,sort:sort}};}



        return $sailsSocket.get(url, query).then(success, error);
    };

    this.getByUrl = function(model) {
        var url = utils.prepareUrl('project/url/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

     this.getChildren = function(model) {
        var url = utils.prepareUrl('project/children/' + model.id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('project');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('project/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);