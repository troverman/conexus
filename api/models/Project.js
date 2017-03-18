/**
* Project.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        title: {
            type: 'string',
            required: true
        },
        urlTitle: {
            type: 'string',
            required: true
        }
    },

    afterCreate: function (project, next) {
        // set message.user = to appropriate user model
        User.getOne(project.user)
        .spread(function(user) {
            project.user = user;
            next(null, project);
        });
    },

    getOne: function(id) {
        return Project.findOne(id)
        .then(function (model) {
            return [model];
        });
    },

    getAll: function() {
        return Project.find()
        .sort({createdAt: 'desc'})
        .then(function (models) {
            return [models];
        });
    },

};

