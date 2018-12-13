/**
* Validation.js
*/

module.exports = {

	attributes: {
        
        content: {type: 'string'},
        reputation: {type: 'json'},
        user: {model: 'user'},
        validation: {type: 'json'},
        
        //TODO: RELATIONSHIPS | ASSOCIATIONS
        relationships: {type: 'json'},

        //ASSOCIATIONS
        associations: {type: 'json'},

        //TODO: DEPRECIATE
        project: {type: 'string'},
        task: {type: 'string'},
        work: {type: 'string'},

    },
    
};

