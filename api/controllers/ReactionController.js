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
		if(req.query.contentModel){
			var contentModel = req.query.contentModel;
			Reaction.find({contentModel:contentModel})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Reaction.subscribe(req, models);
				res.json(models);
			});
		}

		//TODO 
		if(req.query.associatedModels){
			//&& type
			//MEH!
			Reaction.find({associatedModels: {contains: req.query.associatedModels}})
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
			associatedModels: req.param('associatedModels'),
			amount: req.param('amount'),
			type: req.param('type'),
			user: req.param('user'),

			//PATCH
			reactions: {plus:0,minus:0},
		};

		//console.log(model)
		//association perm check? 
		
		Reaction.create(model)
		.exec(function(err, reaction) {
			if (err) {return console.log(err);}
			else {

				console.log(model);
				
				Reaction.publishCreate(reaction);

				for (x in model.associatedModels){
					if (model.associatedModels[x].type == 'CONTENT'){
						Content.find({id:model.associatedModels[x].id}).then(function(contentModel){
							if (!contentModel[0].reactions){contentModel[0].reactions = {};}
							if (!contentModel[0].reactions[model.type]){contentModel[0].reactions[model.type] = model.amount;}
							else if (contentModel[0].reactions[model.type]){contentModel[0].reactions[model.type] = contentModel[0].reactions[model.type] + model.amount;}
							console.log(contentModel[0]);
							Content.update({id:contentModel[0].id},{reactions:contentModel[0].reactions}).then(function(contentModel){
								console.log('UPDATE');
								res.json(reaction);
							});
						});
					}
					if (model.associatedModels[x].type == 'TASK'){
						Task.find({id:model.associatedModels[x].id}).then(function(taskModel){
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
					if (model.associatedModels[x].type == 'TIME'){
						Time.find({id:model.associatedModels[x].id}).then(function(timeModel){
							if (!timeModel[0].reactions){timeModel[0].reactions = {};}
							if (!timeModel[0].reactions[model.type]){timeModel[0].reactions[model.type] = model.amount;}
							else if (timeModel[0].reactions[model.type]){timeModel[0].reactions[model.type] = timeModel[0].reactions[model.type] + model.amount;}
							console.log(timeModel[0]);
							Time.update({id:timeModel[0].id},{reactions:timeModel[0].reactions}).then(function(timeModel){
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

