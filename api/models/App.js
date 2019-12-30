//CRE8.APP
module.exports = {
    attributes: {

        //DEPRECIATE
        //HMM
        //SELF-2nd order connection is defined in app (protocol) data attributes
        model: {type: 'string', defaultsTo: 'APP'},

		title: {type: 'string'},
		description: {type: 'json'},
		information: {type: 'json'},
        data: {type: 'json'},
        protocols: {type: 'json'},

        //CODE AS STRING EXAMPLE.. TRY IT WITH NOTIFICATION APP. DONT GET TOO CRAZY
        associatedModels: {type: 'json'},
        creator: {model: 'user'},

    },
};