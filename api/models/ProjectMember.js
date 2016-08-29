/**
* ProjectMember.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        user: {
            model: 'user',
        },
        project: {
            model: 'project',
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

    getAll: function() {
        return ProjectMember.find()
        .sort({createdAt: 'desc'})
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return ProjectMember.findOne(id)
        .then(function (model) {
            return [model];
        });
    }

};

