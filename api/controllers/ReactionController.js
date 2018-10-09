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

		//GET BY CONTENT
		//TYPES.. ? | CONTINUOUS TIME REACTIONS

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		Reaction.watch(req);

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
			amount: req.param('amount'),
			post: req.param('post'),
			type: req.param('type'),
			user: req.param('user'),
		};
		Reaction.create(model)
		.exec(function(err, post) {
			if (err) {return console.log(err);}
			else {
				Reaction.publishCreate(post);
				Post.find({id:model.post}).then(function(postModel){
					//console.log(postModel);

					//TODO AGNOSTIC REACTS
					if (model.type == 'plus'){
						var count = postModel[0].plusCount + 1;
						Post.update({id:postModel[0].id},{plusCount:count}).then(function(postModel){
							console.log('UPDATE');
							res.json(post);
						});
					}
					else if (model.type == 'minus'){
						var count = postModel[0].minusCount + 1;
						Post.update({id:postModel[0].id},{minusCount:count}).then(function(postModel){
							console.log('UPDATE');
							res.json(post);
						});
					}
					//UPDATE JSON OBJ REPRESENTING TYPE AND AMOUNT || POST REACTION MAPPING
					//Post.update({id:postModel[0].id},{}).then(function(postModel){console.log('UPDATE')})
				});

			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
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

