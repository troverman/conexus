angular.module('models.user', ['lodash', 'services', 'sails.io',])

.service('UserModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getOne = function(id) {
        var url = utils.prepareUrl('user/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getSome = function(limit, skip, sort) {
        var url = utils.prepareUrl('user');
        var query = {params:{limit:limit,skip:skip,sort:sort}};
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.getByUsername = function(model) {
        var url = utils.prepareUrl('user/username/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('user');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel){
        var url = utils.prepareUrl('user/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
    
}]);