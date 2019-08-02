//UNIFY APP AND PROJECT LOL
module.exports = {
    attributes: {

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
