angular.module('models.reaction', ['lodash', 'services', 'sails.io',])

.service('ReactionModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getSome = function() {
        var url = utils.prepareUrl('reaction');
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('reaction');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('reaction/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
    
}]);