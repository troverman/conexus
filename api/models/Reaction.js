/**
* Reaction.js
*/

module.exports = {

	attributes: {

        //REACTION DATA
        amount: {type: 'string'},
        type: {type: 'string', required: true},
        user: {model: 'user'},

        //ASSOICATIONS
        associations: {type: 'json'},

        //REACTIONS
        reactions: {type: 'json'},
        
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

