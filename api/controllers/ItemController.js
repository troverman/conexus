/**
 * ItemController
 */

module.exports = {

	getSome: function(req, res) {
		
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		if (req.query.tag){
			var tag = req.query.tag;
			Item.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Item.subscribe(req, models);
				res.json(models);
			});
		}

		else{
			Item.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models){
				res.json(models)
			});
		}
		
	},

	getOne: function(req, res) {
		Item.find({id:req.param('id')})
		.then(function(model) {
			Item.subscribe(req, model[0]);
			res.json(model[0]);
		});
	},

	create: function (req, res) {
		var model = {
			title: req.param('title'),
			tags: req.param('tags'),
			content: req.param('content'),
			amountSet: req.param('amountSet'),
			identiferSet: req.param('identiferSet'),
			user: req.param('user'),
		};
		//PATCH
		model.reaction = {plus:0,minus:0};
		Item.create(model)
		.exec(function(err, task) {
			if (err) {return console.log(err);}
			else {
				Item.publishCreate(task);
				res.json(task);
			}
		});
	},

	update: function (req, res) {},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		Item.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Item.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Item.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

