//UNIFY APP AND PROJECT LOL
module.exports = {
    attributes: {

		title: {type: 'string'},
		description: {type: 'json'},

		information: {type: 'json'},
        data: {type: 'json'},

        protocols: {type: 'json'},

        associatedModels: {type: 'json'},

        creator: {model: 'user'},

    },
};
