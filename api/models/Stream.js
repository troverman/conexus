/**
* Stream.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        title: {
            type: 'string',
        },
        workValidation: {
            type: 'string',
        },
        videoUrl: {
            type: 'string',
            defaultsTo: 'https://www.bidio.co/v/597c55e56833048165c6720c'
        },
        project: {
            model: 'project'
        },
        task: {
            model: 'task'
        },
        user: {
            model: 'user'
        },
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
        return Stream.find()
        .where({id: id})
        .populate('project')
        .populate('task')
        .populate('user')
        .then(function (models) {
            return [models];
        });
    },

     getOne: function(filter) {
        return Stream.find()
        .where(filter)
        .then(function (models) {
            return [models];
        });
    },

};

