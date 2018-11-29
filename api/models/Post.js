//TODO: CONTENT
//TODO: DEPRECIATE

module.exports = {
    attributes: {

        title: {type: 'string'},
        content: {type: 'string'},
        tags: {type: 'string'},

        //TODO: LOCATION
        location: {type: 'json'},

        type: {
            type: 'string',
            defaultsTo: 'POST',
        },

        //TODO: RELATIONSHIPS | ASSOCIATIONS
        //TAGS; ASSOCIATIONS; LOCATIONS
        relationships: {type: 'json'},
        associatedModels: {type: 'json'},

        //IN LARGER ECOSYSTEM. INFO
        model: {
            type: 'string',
            defaultsTo: 'CONTENT',
        },
        user: {
            model: 'user',
            required: true
        },

        //COUNTS
        //TODO: JSON INFO OBJ
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
        market: {type: 'string'},
        order: {type: 'string'},
        profile: {model: 'user'},
        project: {model: 'project'},
        post: {model: 'post'},
        task: {model: 'task'},
        transaction: {type: 'string'},
        work: {model: 'work'},

    },
    
};
