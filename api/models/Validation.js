/**
* Validation.js
VALIDATIONS ARE TRAVERSED TO CREATE ASSOCIATIONS WHICH CREATES TOKEN POTIENTAL.
VALIDATION CREATES TOKEN POTIENTAL
*/

module.exports = {

	attributes: {

        //ASSOCIATED CONTENT
        content: {type: 'string'},

        //CREATOR
        user: {model: 'user'}, //MOTION (CONTAINER ACTION) W PROJ
        creator: {type: 'string'},

        //WEIGHT
        reputation: {type: 'json'},

        //VOTE
        validation: {type: 'json'},

        //HUMAN, AI, APP.. ETC,
        type: {type: 'string'},

        //FROM CHARTER INPUT IE TYPES OF RELATION
        parameters: {type: 'json'},

        //BINARY ASSOCIATION
        associatedModels: {type: 'json'},

        reactions: {type: 'json'},


        //VERBS
        //CREATE VERB
        //[{type: 'PROJECT', id: 1}, {type:'ITEM', id:1}]
        //[{type: 'PROJECT', id: 1}, {type:'CONTENT', id:1}]
        //[{type: 'PROJECT', id: 1}, {type:'MEMBER', id:1}]
        //[{type: 'PROJECT', id: 1}, {type:'ORDER', id:1}]
        //[{type: 'PROJECT', id: 1}, {type:'TASK', id:1}]
        //[{type: 'TASK', id: 1}, {type:'TIME', id:1}]
        //[{type: 'TIME', id: 1}, {type:'VALIDATION', id:1}]
        //[{type: 'VALIDATION', id: 1}, {type:'VALIDATION', id:1}] // it chains.? 
        //MODIFY VERB
        //[{type: 'PROJECT', id: 1}]
        //[{type: 'PROJECT', id: 1}, {type:'MEMBER', id:1}]

    },
    
};

