/**
* Task.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        title: {
            type: 'string',
            required: true,
            unique: true
        },
        content: {
            type: 'string',
        },
        status: {
            type: 'string',
            defaultsTo:'Pending'
        },
        members: {
            type: 'string',
        },
        parent: {
            model: 'task',
        },
        completeBountySet: {
            type: 'string',
        },
        completeIdentifierSet: {
            type: 'string',
        },
        timeBountySet: {
            type: 'string',
        },
        timeIdentifierSet: {
            type: 'string',
        },
        timeStreamBountySet: {
            type: 'string',
        },
        timeStreamIdentifierSet: {
            type: 'string',
        },
        verificationBountySet: {
            type: 'string',
        },
        verificationIdentifierSet: {
            type: 'string',
        },
        project: {
            model: 'project',
        },
        user: {
            model: 'user',
            required: true
        }
    },

    getAll: function() {
        return Task.find()
        .sort({createdAt: 'DESC'})
        .populate('user')
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Task.findOne(id)
        .populate('project')
        .populate('user')
        .then(function (model) {
            return [model];
        });
    }
};

