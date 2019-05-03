angular.module('models.follower', ['services', 'sails.io',])

.service('FollowerModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getSome = function(model) {

    };

    this.getFollowers = function(model) {
        var url = utils.prepareUrl('follower/followers/' + model.id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getFollowing = function(model) {
        var url = utils.prepareUrl('follower/following/' + model.id);
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

    var success = function(response) {return response.data;};
    var error = function(error) {console.log(error);};
    
}]);