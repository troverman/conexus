angular.module('models.follower', ['lodash', 'services', 'sails.io',])

.service('FollowerModel', function(lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('follower');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByUser = function(model) {
        var url = utils.prepareUrl('follower/followers/' + model.id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('follower');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('follower/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
});