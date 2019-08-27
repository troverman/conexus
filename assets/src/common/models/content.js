angular.module('models.content', ['services', 'sails.io',])

.service('ContentModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.get = function(model) {
        var url = utils.prepareUrl('content'); 
        //TODO COMPOUND
        //MULTIPLE
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                id:model.id,
                contentModel:model.contentModel,
                item:model.item,
                market:model.market,
                order:model.order,
                profile:model.profile,
                project:model.project,
                tag:model.tag,
                search: model.search,
                task: model.task,
                time: model.time,
                transaction: model.transaction,
                user: model.user,
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('content');
        console.log(newModel)
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel){
        var url = utils.prepareUrl('content/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('content/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
    
}]);