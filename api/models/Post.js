//TODO: CONTENT
module.exports = {
    attributes: {
        content: {
            type: 'string',
            required: true
        },
        //TODO; TYPE.. vs MODEL BASED | REFACTOR
        market: {
            type: 'string'
        },
        order: {
            type: 'string'
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
        transaction: {
            type: 'string'
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
