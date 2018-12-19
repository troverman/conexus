/**
* View.js
*/

//TODO: MERGE WITH TIME

module.exports = {
	attributes: {

        amount: {type: 'string'},
        
        //TODO: associatedModel
        associatedModels: {type: 'json'},
        
        user: {model: 'user'},
        
    },
};

