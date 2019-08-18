/**
* Transaction.js
*/

//MOVE TO GENRAL MAPPINGS AND BARE BONES MODELS
//IE REACTION COUNT MAPPING, TAG MAPPING (mapping transid => tags..)
//mapping from slngleton 
//id, address mapping; string language; id
//string to string 

module.exports = {

	attributes: {
        amount: {type: 'string'},
        identifier: {type: 'string'},
        to: {type: 'string'},
        from: {type: 'string'},
        associatedModels: {type: 'json'}, //linked items
        content: {type: 'string'},
        tags: {type: 'string'},
        creator: {type: 'string'},
        //REACTIONS \\ info
        reactions: {type: 'json'},

        //TODO:DEPRECIATE
        user: {model: 'user'},
        creator: {type: 'string'},

    },

};

