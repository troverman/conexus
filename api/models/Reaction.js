/**
* Reaction.js
*/

module.exports = {

	attributes: {

        amount: {type: 'string'},

        //TODO: DEPRECIATE
        post: {model: 'post'},

        //TODO: associatedModel
        associatedModel: {type: 'string'},

        type: {
            type: 'string',
            required: true
        },

        user: {model: 'user'},
        
    },

    beforeCreate: function(model, next) {
        next();
        if (false){
            Reaction.find({user:model.user, post:model.post}).then(function(reactionModel){
                if (reactionModel.length == 0){next()}
            });
        }
    },

};

