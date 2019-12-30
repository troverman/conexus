//CRE8.TOKEN
//--> BALANCE MAPPING
//--> INFORMATION MAPPING
//--> PROTOCOL MAPPING

module.exports = {
	attributes: {
		//DEPRECIATE
		model: {type: 'string', defaultsTo: 'TOKEN'},

		string: {type: 'string'},
		//MANIFOLD LOGIC; ALGEBRAS; etc
		protocols:{type:'json'},
		//TRANSFERRABLE ETC
		logic:{type:'json'},
		//VOLUME, DESCRIPTION
		information:{type:'json'},
		//BETA!!!
		//connections:{type:'string'},
    },
};

