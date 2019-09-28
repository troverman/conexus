//CRE8.ACTION
//SAME AS REACTION..
module.exports = {
    attributes: {
  	    amount: {type: 'string'},
		type: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        data: {type: 'json'},
    },
};
