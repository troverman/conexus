//CHARTER MODEL.. DEFINES ASSOCIATION RULES

//TODO: BE GENEROUS WITH ORGANIZATION OF DATA
module.exports = {
    attributes: {
    	creator:{type: 'string'},
    	type:{type: 'json'}, //{type: modelA: modelB}

    	dataModelAlpha: {type: 'string'},
    	dataModelBeta: {type: 'string'},
		title: {type: 'string'},
		info: {type: 'json'},		
    },
};
