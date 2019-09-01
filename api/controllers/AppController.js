var Q = require('q');

module.exports = {
	
	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET APP', req.query);

		App.watch(req);

		if(req.query.id){
			App.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models) {
				res.json(models[0]);
			});
		}

		else{
			App.find({})
			.limit(100)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				App.subscribe(req, models);
				res.json(models);
			});
		}
		
	},

	create: function (req, res) {

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		//hmm
		function getProtocolTokens(model){
			var protocolTokens = ['APP', 'CRE8+APP', 'CRE8+APP+'+model.title.toUpperCase()];
			return protocolTokens;
		};

		var model = {
			model: 'APP',
			title: req.param('title'),
			description: req.param('description'),
			information: req.param('information'),
			data: req.param('data'),

			protocols: req.param('protocols'),

			associatedModels: req.param('associatedModels'),
			creator: req.param('creator'),
			
			data:{apps:{reactions: {plus:0,minus:0}, attention:{general:0}}}

		};

		console.log('CREATE APP', model);
		
		App.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				Action.publishCreate(model);
				res.json(model);
			}
		});
	},

};