/**
* Time.js
*/

//TODO: TIME
//TODO: UNIFY WITH VIEW

module.exports = {

	attributes: {

        amount: {type: 'string'},
        content: {type: 'string'},
        startTime: {type: 'string'},
        tags: {type: 'string'},
        user: {model: 'user'},
        verificationScore: {type: 'json'},

        //TODO: RELATIONSHIPS | ASSOCIATIONS
        relationships: {type: 'json'},

        //ASSOCIATIONS
        associatedModels: {type: 'json'},

        //TODO: STREAM RELATIONSHIP?
        //TODO: LOCATION ?

        //TODO: TYPE
        //RETROACTIVE | TRACKED | STREAM | APP

        //REACTIONS
        reactions: {type: 'json'},

        //TODO: DEPRECIATE
        task: {model: 'task'},
        project: {model: 'project'},
        stream: {model: 'post'},

    },

};

