var Q = require('q');

module.exports = {
	
	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 100;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET CONNECTION', req.query);

		Connection.watch(req);

		if(req.query.id){
			Connection.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models) {
        		console.log(models)
				res.json(models[0]);
			});
		}

		//creator is address.. 
		else if(req.query.creator){
			Connection.find({creator:creator})
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models) {
				res.json(models[0]);
			});
		}

		else{
			Connection.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Connection.subscribe(req, models);
				res.json(models);
			});
		}
		
	},

	create: function (req, res) {

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+CONNECTION'];
			return protocolTokens;
		};

		var model = {
			model: 'CONNECTION',
			creator: req.param('creator'),
			direction: req.param('direction'),
			dataModelAlpha: req.param('dataModelAlpha'),
			dataModelBeta: req.param('dataModelBeta'),
			info: req.param('info'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};

		console.log('CREATE CONNECTION', model);
		
		Connection.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				Connection.publishCreate(model);
				res.json(model);
			}
		});
		
	},

};