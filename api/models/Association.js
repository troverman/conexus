//CRE8.ASSOCIATION
module.exports = {
    attributes: {

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
