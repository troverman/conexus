//CRE8.REACTION
//SAME AS ACTION..
module.exports = {
	attributes: {
		//DEPRECIATE
        model: {type: 'string', defaultsTo: 'REACTION'},

        amount: {type: 'string'},
        type: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        data: {type: 'json'},  
    },
};