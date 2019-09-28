//CRE8.REACTION
//SAME AS ACTION..
module.exports = {
	attributes: {
        amount: {type: 'string'},
        type: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        data: {type: 'json'},  
    },
};