/**
* Item.js
*/

module.exports = {

	attributes: {
        title: {type: 'string'},
        owner: {type: 'json'},
        tags: {type: 'string'},
        location: {type: 'json'},
        content: {type: 'string'},
        associatedModels: {type: 'json'},
            //ITEMS META 
        info: {type: 'json'},
        isGenerator:{type:'boolean'},
        reactions: {type: 'json'},
        //DEPRECIATE
        user: {model: 'user'},
    },
};

