//CRE8.CONNECTION
module.exports = {
    attributes: {


		title: {type: 'string'},
		description: {type: 'string'},
        context:{type: 'string'},
        creator:{type: 'string'},
    	type:{type: 'string'},
        associatedModels:{type: 'json'},
        data: {type: 'json'},


        //TODO: DEFINE
        //CUSOM CONNECTION DATA MODEL..
        //DEFINE A DEW CONNECTIONS WITH CUSTOM ATTRIBUTES IN ASSOCIATION
        //IE FOR DIRECTION ETC
        attributes:{type:'json'}
        //for association...
        //for validation... (validation attributes.. order attributes)
    }
};
