//CRE8.REACTION
module.exports = {
	attributes: {
        amount: {type: 'string'},
        type: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        data: {type: 'json'},  
    },
    beforeCreate: function(model, next) {
        next();
        if (false){
            Reaction.find({user:model.user, associatedModels:model.associatedModels}).then(function(reactionModel){if (reactionModel.length == 0){next()}});
        }
    },
};