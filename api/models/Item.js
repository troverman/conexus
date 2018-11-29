/**
* Item.js
*/

module.exports = {

	attributes: {

        title: {type: 'string'},
        content: {type: 'string'},

        tags: {type: 'string'},

        //TODO: RELATIONSHIPS | ASSOCIATIONS
        //TAGS; ASSOCIATIONS; LOCATIONS
        relationships: {type: 'json'},

        //TODO: LOCATION
        location: {type: 'json'},

        //PRICE
        identifierSet: {type: 'string'},
        amountSet: {type: 'string'},

    },

};

