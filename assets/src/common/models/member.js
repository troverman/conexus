angular.module('models.member', ['lodash', 'services', 'sails.io',])

.service('MemberModel', function(lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var deferred = $q.defer();
        var url = utils.prepareUrl('user');

        $sailsSocket.get(url, function(models) {
            return deferred.resolve(models);
        });

        return deferred.promise;
    };

});