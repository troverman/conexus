//CRE8.ITEM
module.exports = {

	attributes: {
        
        //DEPRECIATE
        model: {type: 'string', defaultsTo: 'ITEM'},
        
        title: {type: 'string'},
        associatedModels: {type: 'json'}, 
        context: {type: 'string'},
        content: {type: 'string'},

        info: {type: 'json'},
        information: {type: 'json'},
        location: {type: 'json'},
        status: {type: 'string'},
        isGenerator:{type:'boolean', allowNull: true},
        compontentItems: {type: 'json'},
        
        verbs:{type:'string'},
        actions:{type:'string'},

        owner: {type: 'string', allowNull: true},
        creator: {type: 'string'},
        user: {model: 'user'},

        data: {type: 'json'},
        dataHash: {type: 'string', allowNull: true},
        hash: {type: 'string', allowNull: true}, //id

        //createdAt
        //updatedAt
        //id

    },
};

