angular.module('models.notification', ['lodash', 'services', 'sails.io',])

.service('NotificationModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {
   
    this.getSome = function(type, filter, limit, skip, sort) {
        var query = {};
        if (type=='user'){query = {params:{query:filter, limit:limit,skip:skip,sort:sort}};}
        var url = utils.prepareUrl('notification');
        return $sailsSocket.get(url, query).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);