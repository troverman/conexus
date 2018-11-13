angular.module('models.member', ['lodash', 'services', 'sails.io',])

.service('MemberModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getSome = function(type, filter, limit, skip, sort) {
        var query = {};
        if (type=='project'){query = {params:{project:filter,limit:limit,skip:skip,sort:sort}};}
        else if (type=='user'){query = {params:{user:filter,limit:limit,skip:skip,sort:sort}};}
        else{query = {params:{limit:limit,skip:skip,sort:sort}};}
        var url = utils.prepareUrl('projectmember');
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('projectmember');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

	var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);