angular.module('models.order', ['services', 'sails.io',])

.service('OrderModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.get = function(model) {
        var url = utils.prepareUrl('order');
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                id:model.id,
                item:model.item,
                market:model.market,
                order:model.order,
                project:model.project,
                setAlpha:model.setAlpha,
                setBeta:model.setBeta,
                user: model.user,
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('order');
        console.log(newModel)
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('order/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {return response.data;};
    var error = function(error) {console.log(error);};
    
}]);