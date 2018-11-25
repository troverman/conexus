//TODO: CONTENT
//TODO: DEPRECIATE

module.exports = {
    attributes: {

        title: {
            type: 'string',
        },
        tags: {
            type: 'string',
        },
        type: {
            type: 'string',
            defaultsTo: 'POST',
        },
        model: {
            type: 'string',
            defaultsTo: 'CONTENT',
        },
        content: {
            type: 'string',
        },
        user: {
            model: 'user',
            required: true
        },

        associatedModels: {
            type: 'json',
        },

        plusCount: {
            type: 'integer',
            defaultsTo: 0
        },
        minusCount: {
            type: 'integer',
            defaultsTo: 0
        },
        viewCount: {
            type: 'integer',
            defaultsTo: 0,
        },

        //TODO: DEPRECIATE
        //TODO: MANY TO MANY
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

    },
    
};
