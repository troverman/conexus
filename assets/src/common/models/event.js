angular.module('models.event', ['services', 'sails.io',])

.service('EventModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.get = function(model) {
        var url = utils.prepareUrl('event');
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                id:model.id,
                type: model.type,
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
    };
    
    var success = function(response) {return response.data;};
    var error = function(error) {console.log(error);};
    
}]);