module.exports = {
	
	get: function(req, res) {
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

		function createNotification(model){
			//<-- ASSOCIATIONS -->
			//SEND NOTIFICATIONS TO FOLLOWERS
			//SEND NOTIFICATIONS TO PROJECT MEMBERS
			//SEND NOTIFICATION TO MEMBER
		};

		function createValidation(model){

			console.log(model);
			console.log('ASSOCIATED MODELS');
			console.log(model.associatedModels);

			var newValidation = {

				associatedModels: [],
				context:{},
				content:model.id + ' VALIDATION',

				reputation: {},

				connection:{
					type:'HUMAN',
					parameters:{charter:'STANDARD MULTIPLICATIVE'},
				},

				//UNIFY AND ALLOW FOR PROJECT TO CREATE
				user: model.user.id,
				creator: model.user.id,

				//APPS - DATA
				data:{
					apps:{
						reactions: {plus:0,minus:0},
						attention:{general:0}
					}
				}
				
			};

		};

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+CONTENT', model.id, 'CRE8+CONTENT+'+model.id ];
			return protocolTokens;
		};

		var model = {

			title: req.param('title'),
			type: req.param('type'),
			content: req.param('content'),

			user: req.param('user'),
			creator: req.param('user'),

			//TODO: DEPRECIATE
			contentModel: req.param('contentModel'),

			associatedModels: req.param('associatedModels'),

			//PATCH
			reactions: {plus:0, minus:0},
			attention: {general:0},

			data:{
				apps:{
					reactions: {plus:0, minus:0},
					attention: {general:0}
				}
			}

		};

		console.log('CREATE CONTENT', model);

		Content.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				//TODO: POPULATE USER
				User.find({id:model.user}).then(function(userModels){

					model.user = userModels[0];
					Content.publishCreate(model);
					createNotification(model);
					createValidation(model);
					mintTokens(model);
					res.json(model);

				});
			}
		});
	},

	//IS UPDATING REAL ONCHAIN? | NEW TYPE? NAH
	//IT'S A NEW 'CREATE' THAT OVERLAPS. 
	update: function(req, res){

		//UPDATE HISTORY IN MODEL

	}

};