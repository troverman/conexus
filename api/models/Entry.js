/**
* Entry.js
*/

module.exports = {

	attributes: {
        amount: {
            type: 'integer',
            required: true
        },
        identifer: {
            type: 'string',
            required: true
        },
        type: {
            type: 'string',
        },
        project: {
            model: 'project'
        },
        task: {
            model: 'task'
        },
        user: {
            model: 'user'
        }
    },

};

