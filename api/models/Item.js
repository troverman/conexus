/**
* Item.js
*/

module.exports = {

	attributes: {
        title: {
            type: 'string',
        },
        tags: {
            type: 'string',
        },
        content: {
            type: 'string',
        },
        identifierSet: {
            type: 'string',
        },
        amountSet: {
            type: 'string',
        },


        //TODO: RELATIONSHIPS | ASSOCIATIONS
        //TAGS; ASSOCIATIONS; LOCATIONS
        relationships: {
            type: 'json',
        },

        //TODO: LOCATION


    },

};

