angular.module('models.search', ['services', 'sails.io',])

.service('SearchModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {
    
    this.get = function(model) {
        var url = utils.prepareUrl('search');
        return $sailsSocket.get(url, {params:model}).then(success, error);
    };

    this.getFeed = function(model) {
        var url = utils.prepareUrl('search/feed');
        var query = {params:{query:model}}
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.search = function(model) {
        var url = utils.prepareUrl('search');
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.skip,
                model:model.model,
                query:model.query
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
    };

    var success = function(response) {return response.data;};
    var error = function(error) {console.log(error);};
    
}]);