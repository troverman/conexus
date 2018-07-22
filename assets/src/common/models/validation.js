angular.module('models.validation', ['lodash', 'services', 'sails.io',])

.service('ValidationModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {

    this.getOne = function(model) {
        return model;
    };
    
    this.create = function(newModel) {
        var url = utils.prepareUrl('work');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);