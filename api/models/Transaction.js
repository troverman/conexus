/**
* Transaction.js
*/

module.exports = {

	attributes: {
        amount: {
            type: 'string',
        },
        content: {
            type: 'string',
        },
        identifier: {
            type: 'string',
        },
        to: {
            type: 'string',
        },
        from: {
            type: 'string',
        },
        tags: {
            type: 'string',
        },

        //TODO:DEPRECIATE
        project: {
            model: 'project',
        },

        //TODO:DEPRECIATE
        user: {
            model: 'user',
        },

        //TODO: CREATOR

    },

};

