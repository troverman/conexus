//CRE8.ORDER
module.exports = {
	attributes: {

        info: {type: 'json'},
        information: {type: 'json'},
        model: {type: 'string', defaultsTo: 'ORDER'},

		creator: {type: 'string'},
		user: {model: 'user'},

		type: {type: 'string'},
		status: {type: 'string'},

		setAlpha: {type:'json'},
		setBeta: {type:'json'},
		associatedSets: {type:'json'},

        data: {type: 'json'},
        dataHash: {type: 'string'},
		hash: {type: 'string'},

    },
};