//CRE8.CONTENT
module.exports = {
    attributes: {
        model: {type: 'string', defaultsTo: 'CONTENT'},
        title: {type: 'string', allowNull: true},
        content: {type: 'string'},
        associatedModels: {type: 'json'},
        context: {type: 'string'},
        type: {type: 'string', defaultsTo: 'POST'},
        location: {type: 'json'},

        //CREATOR
        //ITEM vs CONTENT
        user: {model: 'user', required: true},
        creator: {type: 'string'},
        owner: {model: 'user'},
        
        data: {type: 'json'},
    }
};
