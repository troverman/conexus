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
        post_content: {
            type: 'string',
            required: true
        },
        url_title: {
            type: 'string',
            required: true
        },
        user: {
            model: 'user'
        },
        views: {
            type: 'integer',
            defaultsTo: '0'
        }
    },


    getOne: function(id) {
        return Post.findOne(id)
        .populate('user')
        .then(function (model) {
            return [model];
        });
    },

    afterCreate: function (post, next) {
        // set message.user = to appropriate user model
        User.getOne(post.user)
        .spread(function(user) {
            post.user = user;
            next(null, post);
        });
    },

    getAll: function() {
        return Post.find()
        .sort({createdAt: 'DESC'})
        .populate('user')
        .then(function (models) {
            return [models];
        });
    },

};

