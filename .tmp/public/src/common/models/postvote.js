angular.module('models.postvote', ['lodash', 'services', 'sails.io',])

.service('PostVoteModel', function(lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('postvote');
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('postvote');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('postvote/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    //this.getVoteByPost = function(model) {
        //var url = utils.prepareUrl('postvote/post/' + model.id);
        //return $sailsSocket.get(url).then(success, error);
    //};

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
});