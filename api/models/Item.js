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
        associatedModels: {type: 'json'},

        //LOCATION
        location: {type: 'json'},

        //INFO
        //FORSALE, TYPE?
        //FORLEASE,
        info: {type: 'json'},

        //PRICE, LEASE TIME.. .ETC
        identifierSet: {type: 'string'},
        amountSet: {type: 'string'},

        //REACTIONS
        reactions: {type: 'json'},

    },

};

