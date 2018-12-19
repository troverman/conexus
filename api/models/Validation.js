/**
* Validation.js
*/

module.exports = {

	attributes: {
        
        content: {type: 'string'},
        reputation: {type: 'json'},
        user: {model: 'user'},
        validation: {type: 'json'},
        
        //ASSOCIATIONS
        associatedModels: {type: 'json'},

        //[{type: 'PROJECT', id: 1}, {type:'CONTENT', id:1}]
        //[{type: 'PROJECT', id: 1}, {type:'MEMBER', id:1}]
        //[{type: 'PROJECT', id: 1}, {type:'TASK', id:1}]
        //[{type: 'TASK', id: 1}, {type:'TIME', id:1}]
        //[{type: 'TIME', id: 1}, {type:'VALIDATION', id:1}]
        //[{type: 'VALIDATION', id: 1}, {type:'VALIDATION', id:1}] // it chains.? 

        //the validation is the connection btw associated models 

        //TODO: DEPRECIATE
        project: {type: 'string'},
        task: {type: 'string'},
        time: {type: 'string'},

    },
    
};

