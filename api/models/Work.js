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
            //content
            model: 'post',
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

