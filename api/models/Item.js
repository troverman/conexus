/**
* Item.js
*/

module.exports = {

	attributes: {

        title: {type: 'string'},
        associatedModels: {type: 'json'}, 
        
        compontentItems: {type: 'json'},
        tags: {type: 'string'},
        content: {type: 'string'},

        info: {type: 'json'},
        location: {type: 'json'},
        status: {type: 'string'},
        isGenerator:{type:'boolean'},
        
        verbs:{type:'string'},

        reactions: {type: 'json'},

        owner: {type: 'string'},
        creator: {type: 'string'},

        dataHash: {type: 'string'},

        //DEPRECIATE
        user: {model: 'user'},

    },
};

