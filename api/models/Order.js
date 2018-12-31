/**
* Order.js
*/

module.exports = {

	//TODO: BETTER

	attributes: {

		creator: {model: 'string'},

		type: {type: 'string'},
		user: {model: 'user'},


		//100% STRING MAPPINGS VS OBJS. THIS SEEMS TOO IN IT
		setAlpha: {type:'json'},
		setBeta: {type:'json'},


		//IS THIS BETTER? --> THE MAPPING SPACES? 
		amountSet: {type: 'string'},
		identiferSet: {type: 'string'},

		amountSet1: {type: 'string'},
		identiferSet1: {type: 'string'},

		//INFO
        model: {type: 'string', defaultsTo: 'ORDER'},

		//price: {type: 'string'},
		status: {type: 'string'},

		//REACTIONS
        reactions: {type: 'json'},


    },

};

