angular.module('models.work', ['lodash', 'services', 'sails.io',])

.service('WorkModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {
    
    this.getSome = function(task, limit, skip, sort) {
        var query = {params:{task:task, limit:limit,skip:skip,sort:sort}};
        var url = utils.prepareUrl('work');
        console.log(query)
        return $sailsSocket.get(url, query).then(success, error);
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