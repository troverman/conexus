module.exports = {
	
	getSome: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET ACTION', req.query);

		Action.watch(req);

		if(req.query.id){
			Action.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
        	.then(function(models) {
				res.json(models[0]);
			});
		}

		else if(req.query.user){
			var user = req.query.user;
			Action.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Action.subscribe(req, models);
				res.json(models);
			});
		}

		else{
			Action.find({})
			.limit(20)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Action.subscribe(req, models);
				res.json(models);
			});
		}
		
	},

	create: function (req, res) {
		var model = {
			type: req.param('type'),
			amount: req.param('amount'),
			associatedModels: req.param('associatedModels'),
			user: req.param('user'),
			reactions: {plus:0, minus:0},
		};

		console.log('CREATE ACTION', model);
		Action.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				Action.publishCreate(model);
				res.json(model);
			}
		});
	},

};