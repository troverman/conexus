/**
* Validation.js
VALIDATIONS ARE TRAVERSED TO CREATE ASSOCIATIONS WHICH CREATES TOKEN POTIENTAL.
VALIDATION CREATES TOKEN POTIENTAL
*/

module.exports = {

	attributes: {

        //BINARY ASSOCIATION
        associatedModels: {type: 'json'},

        context: {type: 'json'},

        //APPS - CONFIG - CONNECTION PARAMS
        reputation: {type: 'json'},
        parameters: {type: 'json'},
        information: {type: 'json'},
        type: {type: 'string'},

        //CREATOR
        user: {model: 'user'},
        creator: {type: 'string'},

        //ASSOCIATED CONTENT
        content: {type: 'string'},

        data: {type: 'json'},

    },
    
};

