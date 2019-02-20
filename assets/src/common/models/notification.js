angular.module('models.notification', ['lodash', 'services', 'sails.io',])

.service('NotificationModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getSome = function(type, filter, limit, skip, sort) {
        var query = {};
        if (type=='project'){query = {params:{project:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='user'){query = {params:{user:filter,limit:limit,skip:skip,sort:sort}};}
        else{query = {params:{limit:limit,skip:skip,sort:sort}};}
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