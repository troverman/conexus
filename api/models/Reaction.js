/**
* Reaction.js
*/

module.exports = {

	attributes: {

        //REACTION DATA
        amount: {type: 'string'},
        type: {type: 'string', required: true},
        user: {model: 'user'},

        //ASSOCIATED MODELS
        associatedModels: {type: 'json'},

        //REACTIONS
        reactions: {type: 'json'},
        
    },

    beforeCreate: function(model, next) {
        next();
        if (false){
            Reaction.find({user:model.user, associatedModels:model.associatedModels}).then(function(reactionModel){
                if (reactionModel.length == 0){next()}
            });
        }
    },

};

