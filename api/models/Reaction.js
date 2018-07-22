/**
* Reaction.js
*/

module.exports = {

	attributes: {
        post: {
            model: 'post'
        },
        type: {
            type: 'string',
            required: true
        },
        user: {
            model: 'user'
        },
    },

    getOne: function(id) {
        return Reaction.findOne(id)
        .populate('user')
        .then(function (model) {
            return [model];
        });
    },

    getByPost: function(a_post) {
        return Reaction.find()
        .where({post: a_post})
        .then(function (models) {
            return [models];
        });
    },

    getAll: function() {
        return Reaction.find()
        .sort({createdAt: 'desc'})
        .populate('user')
        .then(function (models) {
            return [models];
        });
    },

};

