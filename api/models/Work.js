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
            model: 'post',
        },
        identifer: {
            type: 'string',
        },
        startTime: {
            type: 'string',
        },
        tags: {
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

