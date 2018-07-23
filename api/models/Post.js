module.exports = {
    attributes: {
        content: {
            type: 'string',
            required: true
        },
        parent: {
            type: 'string',
        },
        project: {
            model: 'project',
        },
        post: {
            model: 'post'
        },
        plusCount: {
            type: 'integer',
            defaultsTo: 0
        },
        minusCount: {
            type: 'integer',
            defaultsTo: 0
        },
        views: {
            type: 'integer',
            defaultsTo: 0,
        },
        user: {
            model: 'user',
            required: true
        }
    },

    afterCreate: function (message, next) {
        // set message.user = to appropriate user model
        User.getOne(message.user)
        .spread(function(user) {
            message.user = user;
            next(null, message);
        });
    }
    
};
