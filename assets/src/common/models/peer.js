angular.module('models.peer', ['services', 'sails.io',])

.service('PeerModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.get = function(model) {
        var url = utils.prepareUrl('peer'); 
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                id:model.id
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('peer');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
    
}]);