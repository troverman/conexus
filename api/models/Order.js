//CRE8.ORDER
module.exports = {
	attributes: {

		//DEPRECIATE
        model: {type: 'string', defaultsTo: 'ORDER'},

        info: {type: 'json'},
        information: {type: 'json'},

		creator: {type: 'string'},
		user: {model: 'user'},

		type: {type: 'string', allowNull: true},
		status: {type: 'string', allowNull: true},

		setAlpha: {type:'json'},
		setBeta: {type:'json'},
		associatedSets: {type:'json'},

        data: {type: 'json'},
        dataHash: {type: 'string'},
		hash: {type: 'string'},

    },
};