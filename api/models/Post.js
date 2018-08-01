module.exports = {
    attributes: {
        content: {
            type: 'string',
            required: true
        },
        market: {
            type: 'string'
        },
        order: {
            model: 'order'
        },
        profile: {
            model: 'user',
        },
        project: {
            model: 'project',
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
    
};
