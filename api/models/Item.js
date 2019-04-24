/**
* Item.js
*/

module.exports = {

	attributes: {

        title: {type: 'string'},
        associatedModels: {type: 'json'}, //ITEMS META .. PROTOCOL TO SEND ITEMS.. WHEN YOU SEND THE 'NFT' STRING TOKEN YOU SEND THE ITEM ~~ ASSOCIATED MODEL ON TOKEN? VS TX ? BOTH
        compontentItems: {type: 'json'},
        tags: {type: 'string'},
        content: {type: 'string'},

        info: {type: 'json'},
        location: {type: 'json'},
        status: {type: 'string'},
        isGenerator:{type:'boolean'},
        reactions: {type: 'json'},

        owner: {type: 'string'},
        creator: {type: 'string'},

        //DEPRECIATE
        user: {model: 'user'},

    },
};

