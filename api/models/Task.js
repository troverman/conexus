/**
* Task.js
*/

module.exports = {

    attributes: {

        title: {type: 'string', required: true,},
        content: {type: 'string'},

        status: {type: 'string', defaultsTo: 'Pending'},

        location: {type: 'json'},

        //TODO: TAGS AS DATA MODEL && || String
        tags: {type: 'string'},

        user: {model: 'user', required: true},

        relationships: {type: 'json'},

        //TODO: RELATIONSHIPS
        //MODLULAR.. PROJECT; MEMBER
        associatedModels: {type: 'json'},

        //REACTIONS
        reactions: {type: 'json'},

        //TODO:  DEPRECIATE
        project: {model: 'project'},

    },

};

