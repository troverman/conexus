/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        vote: {
            type: 'string',
            required: true
        },
        user: {
            model: 'user'
        },
        post: {
            model: 'post'
        }
    },

    afterCreate: function (postvote, next) {
        // set postvote.user = to appropriate user model
        //User.getOne(post.user)
        //.spread(function(user) {
            //post.user = user;
            //next(null, post);
        //});

        // set postvote.post = to appropriate post model
        //Post.getOne(postvote.post)
        //.spread(function(post) {
            //postvote.post = post;
            //next(null, post);
        //});

    },

    getByPost: function(a_post) {
        return PostVote.find()
        .where({post: a_post})
        .then(function (models) {
            return [models];
        });
    },


    getAll: function() {
        return PostVote.find()
        .sort({createdAt: 'desc'})
        .populate('user')
        //.populate('post')
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return PostVote.findOne(id)
        .populate('user')
        //.populate('post')
        .then(function (model) {
            return [model];
        });
    }
};

