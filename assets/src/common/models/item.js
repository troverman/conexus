angular.module('models.item', ['services', 'sails.io',])

.service('ItemModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.get = function(model) {
        var url = utils.prepareUrl('item');
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                id:model.id,
                identiferSet:model.identiferSet,
                market:model.market,
                order:model.order,
                project:model.project,
                tag:model.tag,
                user: model.user,
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('item');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel) {
        var url = utils.prepareUrl('item');
        return $sailsSocket.post(url, newModel).then(success, error);
    };
    
    var success = function(response) {return response.data;};
    var error = function(error) {console.log(error);};
}]);