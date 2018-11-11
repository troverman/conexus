/**
* Validation.js
*/

module.exports = {

	attributes: {
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

