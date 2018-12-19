/**
* Order.js
*/

module.exports = {

	//TODO: BETTER

	attributes: {

		type: {type: 'string'},
		user: {model: 'user'},

		amountSet: {type: 'string'},
		identiferSet: {type: 'string'},

		amountSet1: {type: 'string'},
		identiferSet1: {type: 'string'},

		//APPRECIATE THIS DATA STRUCT
		amountSetAlpha: {type: 'json'},
		amountSetBeta: {type: 'json'},

		//INFO
        model: {type: 'string', defaultsTo: 'ORDER'},

		//price: {type: 'string'},
		status: {type: 'string'},

		//REACTIONS
        reactions: {type: 'json'},


    },

};

