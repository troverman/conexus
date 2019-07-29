/**
* Validation.js
VALIDATIONS ARE TRAVERSED TO CREATE ASSOCIATIONS WHICH CREATES TOKEN POTIENTAL.
VALIDATION CREATES TOKEN POTIENTAL
*/

module.exports = {

	attributes: {

        //BINARY ASSOCIATION
        associatedModels: {type: 'json'},

        //VOTE
        context: {type: 'json'},
        //DEPRECIATE NAMING
        validation: {type: 'json'},

        //WEIGHT
        reputation: {type: 'json'},

        //FROM CHARTER INPUT IE TYPES OF RELATION
        //REPUTATION? --> CONFIG OBJ.. 
        //APP..
        //TYPE SELF ETC.. CODIFIED IN CONNECTION - CHARTER
        parameters: {type: 'json'},

        //HUMAN, AI, APP.. ETC,
        type: {type: 'string'},

        //CREATOR
        user: {model: 'user'},
        creator: {type: 'string'},

        //ASSOCIATED CONTENT
        content: {type: 'string'},

        //APP DATA..
        //APP MAPPING
        reactions: {type: 'json'},
        attention: {type: 'json'},


    },
    
};

