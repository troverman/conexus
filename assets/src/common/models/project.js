angular.module('models.project', ['services', 'sails.io',])

.service('ProjectModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.get = function(model) {
        var url = utils.prepareUrl('project');
        var query = {
            params:{
                limit:model.limit,
                skip:model.skip,
                sort:model.sort,
                id:model.id,
                search:model.search,
                location:model.location,
                urlTitle:model.urlTitle
            }
        };
        return $sailsSocket.get(url, query).then(success, error);
    };

    //PROJECTMEMBER[TYPE]
    //PROJECTCHARTER

    //DEPRECIATE
    this.getChildren = function(model) {
        var url = utils.prepareUrl('project/children/' + model.id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('project');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(model) {

    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);