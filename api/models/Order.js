/**
* Order.js
*/

module.exports = {

	//TODO: BETTER

	attributes: {

		creator: {type: 'string'},
		user: {model: 'user'},

		type: {type: 'string'},
		status: {type: 'string'},

		//100% STRING MAPPINGS VS OBJS. THIS SEEMS TOO IN IT
		setAlpha: {type:'json'},
		setBeta: {type:'json'},

		//associatedSets: {type:'json'},

		//INFO
        model: {type: 'string', defaultsTo: 'ORDER'},
        reactions: {type: 'json'},

    },

};

