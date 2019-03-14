angular.module('models.notification', ['lodash', 'services', 'sails.io',])

.service('NotificationModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.getSome = function(model) {
  
        var url = utils.prepareUrl('notification');
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                isRead:model.isRead,
                user:model.user
            }
        };

        return $sailsSocket.get(url, query).then(success, error);
    };

    this.update = function(newModel){
        var url = utils.prepareUrl('notification/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };

	var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);