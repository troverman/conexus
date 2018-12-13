//TODO: CONTENT
//TODO: DEPRECIATE

module.exports = {
    attributes: {

        title: {type: 'string'},
        content: {type: 'string'},
        tags: {type: 'string'},
        type: {type: 'string', defaultsTo: 'POST'},

        //TODO: LOCATION
        location: {type: 'json'},

        //ASSOICATIONS
        associations: {type: 'json'},
            
        //REACTIONS
        reactions: {type: 'json'},

        //INFO
        model: {type: 'string', defaultsTo: 'CONTENT'},

        //CREATOR
        user: {model: 'user', required: true},

        //TODO: DEPRECIATE
        associatedModels: {type: 'json'},
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
