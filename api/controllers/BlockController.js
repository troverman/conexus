//CRE8.BLOCK

//MULTI-BLOCK
//BLOCK-LATTICE
//MULITDIMENSIONAL BLOCKS - AGENT CENTRIC

module.exports = {

	get: function(req, res) {
		function parseQuery(queryModel){};
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		if (req.query.query){
			var querySet = JSON.parse(req.query.query);
			var query = parseQuery(querySet);
			console.log(JSON.stringify(mongoQuery, null, 4));
		}
		Block.find(query).limit(limit).skip(skip).sort(sort).then(function(models){res.json(models)});
	},

	create: function(req, res) {

		//ASSOCIATED VALIDATION
		//CONTEXT SPECIFIC PEER
		//GET THIS MATH
		//BLOCK MINT

		var model = {
			model: 'BLOCK',
		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		console.log('CREATE BLOCK', model);

		Block.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {res.json(model)}
		});

	},

};