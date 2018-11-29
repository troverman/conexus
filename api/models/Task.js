/**
* Task.js
*/

//TODO: UNIFY WITH CONTENT? | SPECIFICY WITH TYPE
//CONTENT BASE MODEL

module.exports = {

    attributes: {

        title: {
            type: 'string',
            required: true,
            unique: true
        },

        content: {type: 'string'},

        status: {
            type: 'string',
            defaultsTo: 'Pending'
        },

        location: {type: 'json'},

        //TODO: TAGS AS DATA MODEL && || String
        tags: {type: 'string'},

        user: {
            model: 'user',
            required: true
        },

        //TODO: RELATIONSHIPS
        //MODLULAR.. PROJECT; MEMBER
        relationships: {type: 'json'},

        //TODO:  DEPRECIATE
        project: {model: 'project'},
        parent: {type: 'string'},

    },

};

