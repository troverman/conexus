/**
* Item.js
*/

module.exports = {

	attributes: {

        //MAIN
        title: {type: 'string'},
        content: {type: 'string'},

        //TAGS
        tags: {type: 'string'},

        //ASSOCIATIONS
        associations: {type: 'json'},

        //LOCATION
        location: {type: 'json'},

        //INFO
        //FORSALE, TYPE?
        info: {type: 'json'},

        //PRICE
        identifierSet: {type: 'string'},
        amountSet: {type: 'string'},

        //REACTIONS
        reactions: {type: 'json'},

    },

};

