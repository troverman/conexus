/**
 * ReactionController
 */

module.exports = {

	getOne: function(req, res) {
		Reaction.findOne(req.param('id'))
		.then(function(model) {
			Reaction.subscribe(req, model);
			res.json(model);
		});
	},

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		Reaction.watch(req);

		//TODO
		if(req.query.post){
			var post = req.query.post;
			Reaction.find({post:post})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Reaction.subscribe(req, models);
				res.json(models);
			});
		}

		if(req.query.associations){
			//&& type
			//MEH!
			Reaction.find({associations: {contains: req.query.associations}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Reaction.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.user){
			var user = req.query.user;
			Reaction.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Reaction.subscribe(req, models);
				res.json(models);
			});
		}

	},

	create: function (req, res) {

		var model = {
			associations: req.param('associations'),
			amount: req.param('amount'),
			type: req.param('type'),
			user: req.param('user'),
		};

		//console.log(model)
		//association perm check? 
		
		//PATCH
		model.reactions = {plus:0,minus:0};

		Reaction.create(model)
		.exec(function(err, reaction) {
			if (err) {return console.log(err);}
			else {

				console.log(model);
				
				Reaction.publishCreate(reaction);

				for (x in model.associations){
					if (model.associations[x].type == 'CONTENT'){
						Post.find({id:model.associations[x].id}).then(function(postModel){
							if (!postModel[0].reactions){postModel[0].reactions = {};}
							if (!postModel[0].reactions[model.type]){postModel[0].reactions[model.type] = model.amount;}
							else if (postModel[0].reactions[model.type]){postModel[0].reactions[model.type] = postModel[0].reactions[model.type] + model.amount;}
							console.log(postModel[0]);
							Post.update({id:postModel[0].id},{reactions:postModel[0].reactions}).then(function(postModel){
								console.log('UPDATE');
								res.json(reaction);
							});
						});
					}
					if (model.associations[x].type == 'TASK'){
						Task.find({id:model.associations[x].id}).then(function(taskModel){
							if (!taskModel[0].reactions){taskModel[0].reactions = {};}
							if (!taskModel[0].reactions[model.type]){taskModel[0].reactions[model.type] = model.amount;}
							else if (taskModel[0].reactions[model.type]){taskModel[0].reactions[model.type] = taskModel[0].reactions[model.type] + model.amount;}
							console.log(taskModel[0]);
							Task.update({id:taskModel[0].id},{reactions:taskModel[0].reactions}).then(function(taskModel){
								console.log('UPDATE');
								res.json(reaction);
							});
						});
					}
					if (model.associations[x].type == 'TIME'){
						Work.find({id:model.associations[x].id}).then(function(timeModel){
							if (!timeModel[0].reactions){timeModel[0].reactions = {};}
							if (!timeModel[0].reactions[model.type]){timeModel[0].reactions[model.type] = model.amount;}
							else if (timeModel[0].reactions[model.type]){timeModel[0].reactions[model.type] = timeModel[0].reactions[model.type] + model.amount;}
							console.log(timeModel[0]);
							Work.update({id:timeModel[0].id},{reactions:timeModel[0].reactions}).then(function(timeModel){
								console.log('UPDATE');
								res.json(reaction);
							});
						});
					}
				}

			}
		});

	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		Reaction.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Reaction.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Reaction.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

