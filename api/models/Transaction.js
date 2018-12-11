/**
* Transaction.js
*/

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

        //TODO: CREATOR

        //REACTIONS
        reactions: {type: 'json'},

        //TODO:DEPRECIATE
        project: {model: 'project'},
        user: {model: 'user'},


    },

};

