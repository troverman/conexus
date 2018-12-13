/**
* View.js
*/

//TODO: MERGE WITH TIME

module.exports = {
	attributes: {

        amount: {type: 'string'},
        
        //TODO: associatedModel
        //associations: {type: 'json'},
        associatedModel: {type: 'string'},
        user: {model: 'user'},
        
    },
};

