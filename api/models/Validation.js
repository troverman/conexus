//CRE8.VALIDATION
//VALIDATIONS CREATE TOKEN POTIENTAL
//VALIDATIONS ARE TRAVERSED TO CREATE ASSOCIATIONS WHICH CREATES TOKEN POTIENTAL.

module.exports = {
	attributes: {
        
        //DEPRECIATE
        model: {type: 'string', defaultsTo: 'VALIDATION'},
        type: {type: 'string', defaultsTo: 'VALIDATION'},

        associatedModels: {type: 'json'},

        //APPS - CONFIG - CONNECTION PARAMS
        //DEFINED BY CONNECTION
        content: {type: 'string'},
        context: {type: 'json'},
        reputation: {type: 'json'},
        parameters: {type: 'json'},
        information: {type: 'json'},
        type: {type: 'string'},

        //CREATOR
        user: {model: 'user'},
        creator: {type: 'string'},

        data: {type: 'json'},

    },
};