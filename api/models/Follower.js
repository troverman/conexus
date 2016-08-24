/**
* Follower.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        followed: {
            model: 'user',
            required: true
        },
        follower: {
            model: 'user',
            required: true
        }
    },

    //afterCreate: function (follower, next) {},

    getAll: function() {
        return Follower.find()
        .sort({createdAt: 'desc'})
        .populate('followed')
        .populate('follower')
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Follower.findOne(id)
        .populate('followed')
        .populate('follower')
        .then(function (model) {
            return [model];
        });
    },

    getFollowers: function(followed_model) {
        return Follower.find()
        .sort({createdAt: 'desc'})
        .populate('followed')
        .populate('follower')
        .where({followed: followed_model})
        .then(function (model) {
            return [model];
        });
    },

    getFollowing: function(follower_model) {
        return Follower.find()
        .sort({createdAt: 'desc'})
        .populate('followed')
        .populate('follower')
        .where({follower: follower_model})
        .then(function (model) {
            return [model];
        });
    }

};

