//CRE8.TIME
module.exports = {
	attributes: {

        //DEPRECIATE
        model: {type: 'string', defaultsTo: 'TIME'},

        amount: {type: 'string'},
        content: {type: 'string', allowNull:true},
        context: {type: 'string'},
        associatedModels: {type: 'json'},
        location: {type: 'json'},
        startTime: {type: 'string', allowNull:true},

        //RETROACTIVE | TRACKED | STREAM | APP
        type: {type: 'string'},
        creator: {type: 'string'},
        user: {model: 'user'},
        data: {type: 'json'},

    },
};

