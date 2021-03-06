angular.module('models.transaction', ['services', 'sails.io',])

.service('TransactionModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    //messy halfupgrade
    this.get = function(model, queryNew) {
        var url = utils.prepareUrl('transaction');
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                
                id:model.id,
                from:model.from,
                project:model.project,
                to:model.to,
                amountSet:model.amountSet,
                user:model.user,
                query:queryNew,
            }
        };

        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('transaction');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('transaction/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {return response.data;};
    var error = function(error) {console.log(error);};
    
}]);