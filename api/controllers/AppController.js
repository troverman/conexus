var Q = require('q');

module.exports = {
	
	getSome: function(req, res) {

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
			.populate('user')
        	.then(function(models) {
				res.json(models[0]);
			});
		}

		else{
			App.find({})
			.limit(20)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Action.subscribe(req, models);
				res.json(models);
			});
		}
		
	},

	//CHAIN PROTOCOLS -- AND UI INTERLINK
	create: function (req, res) {
		var model = {
			title: req.param('title'),
			description: req.param('description'), // content?
			associatedModels: req.param('associatedModels'),
			user: req.param('user'),
			isPublished: req.param('isPublished'),
			reactions: {plus:0, minus:0},
		};

		//RULES FOR PUBLISHING SHOULD BE OPINIATED -- SUPPLY FORTHRIGHT INHERITANCE -- ABIDE BY SECIRITY PROTOCOLS... 
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