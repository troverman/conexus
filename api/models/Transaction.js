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
        project: {
            model: 'project',
        },
        user: {
            model: 'user',
        },
    },

};

