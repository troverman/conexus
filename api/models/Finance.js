/**
* Finance.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        amount: {
            type: 'string',
            required: true
        },
        project: {
            model: 'project'
        },
        task: {
            model: 'task'
        },
        user: {
            model: 'user'
        }
    },

    afterCreate: function (project, next) {
        // set message.user = to appropriate user model
        /*User.getOne(project.user)
        .spread(function(user) {
            project.user = user;
            next(null, project);
        });**/
    },

    getAll: function() {
        return Finance.find()
        .sort({createdAt: 'desc'})
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Finance.findOne(id)
        .then(function (model) {
            return [model];
        });
    }

};

