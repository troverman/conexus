//CRE8.TIME
module.exports = {
	attributes: {
        amount: {type: 'string'},
        content: {type: 'string'},
        context: {type: 'string'},
        associatedModels: {type: 'json'},
        location: {type: 'json'},
        startTime: {type: 'string'},
        //RETROACTIVE | TRACKED | STREAM | APP
        type: {type: 'string'},
        creator: {type: 'string'},
        user: {model: 'user'},
        data: {type: 'json'},
    },
};

