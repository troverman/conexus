/**
* Task.js
*/

module.exports = {

    attributes: {
        title: {
            type: 'string',
            required: true,
            unique: true
        },
        content: {
            type: 'string',
        },
        status: {
            type: 'string',
            defaultsTo:'Pending'
        },
        location: {
            type: 'string',
        },
        members: {
            type: 'string',
        },
        parent: {
            model: 'task',
        },
        tags:{
            type: 'string',
        },
        project: {
            model: 'project',
        },
        user: {
            model: 'user',
            required: true
        },

        //TODO: RELATIONSHIPS
        relationships: {
            type: 'json',
        },

    },

};

