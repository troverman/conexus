module.exports = {
    attributes: {
		//associated App.. PEER MINING APP INPUT.. 
		app: {type: 'string'}, //HUMAN, MACHIENE
		//type: {type: 'string'},
		string: {type: 'string'},
        data: {type: 'json'},
        associatedModels: {type: 'json'},
        creator: {model: 'user'},
    },
};
