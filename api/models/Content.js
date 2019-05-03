
module.exports = {
    attributes: {

        title: {type: 'string'},
        content: {type: 'string'},
        
        tags: {type: 'string'},
        type: {type: 'string', defaultsTo: 'POST'},

        //TODO: LOCATION
        location: {type: 'json'},

        //ASSOICATIONS
        associatedModels: {type: 'json'},
            
        //REACTIONS
        reactions: {type: 'json'},

        //INFO
        model: {type: 'string', defaultsTo: 'CONTENT'},

        //CREATOR
        user: {model: 'user', required: true},

        //TODO: DEPRECIATE
        contentModel: {model: 'content'},
        market: {type: 'string'},
        order: {type: 'string'},
        profile: {model: 'user'},
        project: {model: 'project'},
        task: {model: 'task'},
        time: {model: 'time'},
        transaction: {type: 'transaction'},

    },
    
};
