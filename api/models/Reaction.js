/**
* Reaction.js
*/

module.exports = {

	attributes: {
        post: {
            model: 'post'
        },
        type: {
            type: 'string',
            required: true
        },
        user: {
            model: 'user'
        },
    },

};

