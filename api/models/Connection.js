//CRE8.CONNECTION
module.exports = {
    attributes: {

        //DEPRECIATE
        model: {type: 'string', defaultsTo: 'CONNECTION'},

        //2nd order parameters
		title: {type: 'string'},
		description: {type: 'string'},
        context:{type: 'string'},
        creator:{type: 'string'},
    	type:{type: 'string'},
        associatedModels:{type: 'json'},

        data: {type: 'json'},

        //TODO: DEFINE
        //CUSOM CONNECTION DATA MODEL..
        attributes:{type:'json'},
        parameters:{type:'json'}

    }
};
