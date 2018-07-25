/**
* Work.js
*/

module.exports = {

	attributes: {
        amount: {
            type: 'string',
        },
        content: {
            type: 'string',
        },
        stream: {
            type: 'string',
        },
        identifer: {
            type: 'string',
        },
        task: {
            model: 'task',
        },
        project: {
            model: 'project',
        },
        user: {
            model: 'user',
        },
        verificationScore:{
            type: 'string',
        },
    },

};

