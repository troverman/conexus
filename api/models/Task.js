/**
* Post.js
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
        taskContent: {
            type: 'string',
            required: true
        },
        taskValue: {
            type: 'string',
            required: true
        },
        finance: {
            model: 'finance',
        },
        project: {
            model: 'project',
        },
        user: {
            model: 'user'
        }
    },

    afterCreate: function (task, next) {
        // set message.user = to appropriate user model
        User.getOne(task.user)
        .spread(function(user) {
            task.user = user;
            next(null, task);
        });
    },

    getAll: function() {
        return Task.find()
        .sort({createdAt: 'desc'})
        .populate('user')
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Task.findOne(id)
        .populate('user')
        .then(function (model) {
            return [model];
        });
    }

};

