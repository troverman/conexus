/**
* Validation.js
*/

module.exports = {

	attributes: {
        content: {
            type: 'string',
        },
        reputation:{
            type: 'json',
        },
        project: {
            type: 'string',
        },
        task: {
            type: 'string',
        },
        user: {
            model: 'user'
        },
        validation:{
            type: 'json',
        },
        work: {
            type: 'string',
        },
    },
    
};

