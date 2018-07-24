module.exports = {
    attributes: {
        content: {
            type: 'string',
            required: true
        },
        project: {
            model: 'project',
        },
        profile: {
            model: 'user',
        },
        post: {
            model: 'post'
        },
        task: {
            model: 'task'
        },
        work: {
            model: 'work'
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

    afterCreate: function (post, next) {
        User.getOne(post.user)
        .spread(function(user) {
            post.user = user;
            next(null, post);
        });
    }
    
};
