var Q = require('q');

module.exports = {
	
	getSome: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET APP', req.query);

		App.watch(req);


		//WRITE PARSER.. LOL

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
		var model = {

			title: req.param('title'),
			description: req.param('description'),
			information: req.param('information'),
			data: req.param('data'),

			protocols: req.param('data'),

			associatedModels: req.param('associatedModels'),
			creator: req.param('creator'),

			attention: {general:0},
			reactions: {plus:0, minus:0},

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