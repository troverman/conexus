/**
* Work.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        amount: {
            type: 'string',
        },
        identifer: {
            type: 'string',
        },
        task: {
            model: 'task',
        },
        user: {
            model: 'user',
        },
        verificationScore:{
            type: 'string',
        },
    },

    getAll: function() {
        return Entry.find()
        .sort({createdAt: 'asc'})
        .populate('user')
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Entry.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
};

