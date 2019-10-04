//CRE8.ASSOCIATION
module.exports = {
    attributes: {

        //DEPRECIATE
        model: {type: 'string', defaultsTo: 'ASSOCIATION'},

    	//DEFINE (HIGHER ORDER) LOGIC
    	connection:{type: 'json'},

    	//PARAMETERS
    	//{attributes:attribute, ...}
		parameters: {type: 'json'},

		//[{type:'MODEL', id:1, {parameter}},{...},...]
		associatedModels: {type: 'json'},

		//{'dimension':score, ..., }
		context: {type: 'json'},

    }
};
