//CRE8.TRANSACTION
module.exports = {
	attributes: {
        model: {type: 'string', defaultsTo: 'TRANSACTION'},
        amountSet: {type: 'json'},
        to: {type: 'string'},
        from: {type: 'string'},
        //[linked items], to, from, self,creator, [tokens]
        associatedModels: {type: 'json'},
        content: {type: 'string'},
        context: {type: 'string'},

        user: {model: 'user'},
        creator: {type: 'string'},

        data: {type: 'json'},
    },
};