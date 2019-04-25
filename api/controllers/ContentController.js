module.exports = {
	
	getSome: function(req, res) {
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET CONTENT', req.query);

		Content.watch(req);

		if(req.query.id){
			Content.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
        	.populate('project')
        	.populate('profile')
        	.populate('task')
        	.populate('time')
        	.then(function(models) {
				res.json(models[0]);
			});
		}

		else if(req.query.item){
			var item = req.query.item;
			Content.find({item:item})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.market){
			var market = req.query.market;
			Content.find({market:market})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.order){

			var order = req.query.order;
			console.log(order)

			//MB BAD 
			/*
			Content.native(function(err, content) {
				//{limit:limit, skip:skip, sort:sort}
				content.find({"associatedModels.address":{$in :[order]}}).toArray(function (err, models) {
					models = models.map(function(obj){
						obj.id = obj._id;
						return obj;
					});
					//ZZZ
					console.log(models)
					Content.subscribe(req, models);
					res.json(models);
				});

			});
			*/

			Content.find({order:order})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});

		}

		else if (req.query.contentModel){
			var contentModel = req.query.contentModel;
			Content.find({contentModel:contentModel})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.profile){
			var profile = req.query.profile;
			Content.find({profile:profile})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('profile')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.project){
			var project = req.query.project;
			Content.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.search){
			var search = req.query.search;
			Content.find()
			.where({
				or: [
					{content: {contains: search}},
					{tags: {contains: search}},
					{title: {contains: search}},
					{user: {contains: search}}
				]
			})
			.limit(limit)
			.skip(limit)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});	
		}

		else if (req.query.tag){
			var tag = req.query.tag;
			Content.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if (req.query.task){
			var task = req.query.task;
			Content.find({task:task})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('task')
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if (req.query.transaction){
			var transaction = req.query.transaction;
			Content.find({transaction:transaction})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.time){
			var time = req.query.time;
			Content.find({time:time})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('time')
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.user){
			var user = req.query.user;
			Content.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else{
			Content.find({})
			.limit(20)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}
	},

	create: function (req, res) {
		var model = {

			title: req.param('title'),
			tags: req.param('tags'),
			type: req.param('type'),
			content: req.param('content'),
			user: req.param('user'),

			associatedModels: req.param('associatedModels'),

			//DEPRECIATE
			//LOL
			market: req.param('market'),
			order: req.param('order'),
			parent: req.param('parent'),
			parentModel: req.param('parentModel'),
			contentModel: req.param('contentModel'),
			profile: req.param('profile'),
			project: req.param('project'),
			task: req.param('task'),
			transaction: req.param('transaction'),
			time: req.param('time'),

			//PATCH
			reactions: {plus:0, minus:0},

		};

		console.log('CREATE CONTENT', model);

		Content.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				
				//TODO: POPULATE USER
				Content.publishCreate(model);
				res.json(model);


				//<-- ASSOCIATIONS -->
				//SEND NOTIFICATIONS TO FOLLOWERS
				//SEND NOTIFICATIONS TO PROJECT MEMBERS
				//SEND NOTIFICATION TO MEMBER


			}
		});
	},

	//IS UPDATING REAL ONCHAIN? | NEW TYPE? NAH
	//IT'S A NEW 'CREATE' THAT OVERLAPS. 
	update: function(req,res){
		var id = req.param('id');
		var model = {
			parent: req.param('parent'),
			parentModel: req.param('parentModel'),
			time: req.param('time'),
		};
		Content.update({id: id}, {parent:model.parent,parentModel:model.parentModel,time:model.time})
		.then(function(model){
			Content.publishUpdate(id, model[0]);
			res.json(model);
		});
	}

};