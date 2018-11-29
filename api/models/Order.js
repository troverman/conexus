/**
* Order.js
*/

module.exports = {

	//TODO: BETTER

	attributes: {
		type: {
            type: 'string',
		},
		amountSet: {
            type: 'string',
		},
		identiferSet: {
            type: 'string',
		},
		amountSet1: {
            type: 'string',
		},
		identiferSet1: {
            type: 'string',
		},
		price: {
            type: 'string',
        },
		status: {
            type: 'string',
		},
		user: {
            model: 'user',
        }
    },

};

