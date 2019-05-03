angular.module('models.reaction', ['services', 'sails.io',])

.service('ReactionModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getSome = function(model) {
        var url = utils.prepareUrl('reaction');
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                id:model.id,
                contentModel:model.contentModel,
                user:model.user,
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
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