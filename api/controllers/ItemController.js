/**
 * ItemController
 */

module.exports = {

	getSome: function(req, res) {
		
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		
		console.log(req.query);
		if(req.query.id){
			var id = req.query.id;
			Item.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')  //TODO: OWNER
			.then(function(models){
				Item.subscribe(req, models);
				res.json(models)
			});
		}

		else if (req.query.tag){
			var tag = req.query.tag;
			Item.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user') //TODO: OWNER
			.then(function(models) {
				Item.subscribe(req, models);
				res.json(models);
			});
		}

		//TODO: OWNER
		else if (req.query.user){
			var user = req.query.user;
			console.log(req.query)
			Item.find({user:user}) //TODO: OWNER
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')  //TODO: OWNER
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
			.populate('user')  //TODO: OWNER
			.then(function(models){
				res.json(models)
			});
		}
		
	},

	create: function (req, res) {
		var model = {
			title: req.param('title'),
			//owner: req.param('owner'),
			tags: req.param('tags'),
			location: req.param('location'),
			content: req.param('content'),
			associatedModels: req.param('associatedModels'),

			//info: req.param('info'),
			amountSet: req.param('amountSet'),
			identiferSet: req.param('identiferSet'),
			isGenerator: req.param('isGenerator'),

			user: req.param('user'),

			//PATCH
			reactions: {plus:0,minus:0},
		};
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

	//NO DELETE.. ONLY UPDATE.. --> OVERWRITE
	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
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

