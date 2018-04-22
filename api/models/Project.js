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
        },
        memberCount: {
            type: 'string',
        },
        taskCount: {
            type: 'string',
        },
        liveCount: {
            type: 'string',
        },
        avatarUrl: {
            type: 'string',
            defaultsTo: '/images/loading.gif'
        },
        urlTitle: {
            type: 'string',
        },
        parent: {
            type: 'string'
        },
        user: {
            model: 'user'
        },
    },

    afterCreate: function (model, next) {
        // set message.user = to appropriate user model
        var colorArray = ['2ab996', '24242e', 'ff6a6a', 'ddbea8'];
        var colorInt = Math.floor(Math.random() * (colorArray.length));
        var avatarUrl = 'https://ui-avatars.com/api/?size=256&name='+model.title+'&color=fff&background='+colorArray[colorInt];
        model.avatarUrl = avatarUrl;

        Project.update({id: model.id}, model)
        .then(function(model){
            return next(null, model);
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

