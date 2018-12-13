/**
* Transaction.js
*/

//MOVE TO GENRAL MAPPINGS AND BARE BONES MODELS
//IE REACTION COUNT MAPPING, TAG MAPPING (mapping transid => tags..)
//mapping from slngleton 
//id, address mapping; string language; id
//string to string 
//

module.exports = {

	attributes: {

        //BASIC
        amount: {type: 'string'},
        identifier: {type: 'string'},
        to: {type: 'string'},
        from: {type: 'string'},

        //EXTRA
        content: {type: 'string'},
        tags: {type: 'string'},

        //ASSOCIATIONS
        //associations: {type: 'json'},

        //TODO: CREATOR

        //REACTIONS
        reactions: {type: 'json'},

        //TODO:DEPRECIATE
        project: {model: 'project'},
        user: {model: 'user'},


    },

};

