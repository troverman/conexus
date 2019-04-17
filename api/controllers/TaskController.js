var Q = require('q');
module.exports = {

	getSome: function(req, res) {

		var limit = parseInt(req.query.limit);
		var skip = parseInt(req.query.skip);
		var sort = req.query.sort;
		var project = req.query.project;
		var search = req.query.search;
		var tag = req.query.tag;
		var id = req.query.id;
		var user = req.query.user;

		console.log(req.query);

		if(req.query.id){
			Task.find({id:id})
			.populate('project')
			.then(function(models) {
				res.json(models[0]);
			});
		}

		else if (req.query.project){

			Task.native(function(err, task) {

				task.find({"associatedModels.address":{$in :[project]}})
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					models = models.map(function(obj){
						obj.id = obj._id;
						return obj;
					});

					//JOIN TO USER --> HMMM.. VALIDATION BASKET.
					var promises = [];
					for (x in models){
						promises.push(User.find({id:models[x].user.toString()}).then(function(userModels){return {user:userModels[0]}}));
					}

					Q.all(promises).then((populatedModels)=>{
						for (x in models){models[x].user = populatedModels[x].user;}
						res.json(models);
					});

				});

			});

		}

		else if(req.query.search){
			//console.log(search,limit,skip,sort)
			Task.find()
			.where({
				or: [
					{content: {contains: search}},
					{tags: {contains: search}},
					{title: {contains: search}},
					{user: {contains: search}}
				]
			})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('project')
			.populate('user')
			.then(function(models) {
				Task.subscribe(req, models);
				res.json(models);
			});	
		}

		else if (req.query.tag){
			Task.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('project')
			.populate('user')
			.then(function(models) {
				Task.subscribe(req, models);
				res.json(models);
			});
		}

		else{
			Task.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				Task.subscribe(req, models);
				res.json(models);
			});
		}
	},

	//TODO
	create: function (req, res) {
		var model = {

			title: req.param('title'),
			content: req.param('content'),
			tags: req.param('tags'),
			location: req.param('location'),
			associatedModels: req.param('associatedModels'),
			user: req.param('user'),

			//DEPRECIATE
			project: req.param('project'),

			//PATCH
			reactions: {plus:0,minus:0},

		};
		Task.create(model)
		.exec(function(err, task) {
			if (err) {return console.log(err);}
			else {

				//TODO:IMPLICIT VALIDATION
				//ASSOCIATED MOELS ... ? 
				var validationModel = {
					conntent:'IMPLICIT VALIDATION ON TASK CREATE',
					validation:{}, //model.tags
					reputation:{}, //user.rep based on ^
					associatedModels: [
						//{type:'PROJECT',address:model.id},
						{type:'TASK',address:task.id}
					],
					reactions: {plus:0,minus:0},
					user: req.param('user'),
				};
				//Validate.create(validationModel).then(function(validation){
				//	console.log('CREATED IMPLICIT VALIDATION', validation);
				//});

				Task.publishCreate(task);
				res.json(task);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		Task.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Task.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Task.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

