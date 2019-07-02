/**
 * ItemController
 */

module.exports = {

	getSome: function(req, res) {
		
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		
		console.log('GET ITEM', req.query);

		if(req.query.id){
			var id = req.query.id;
			Item.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')  //TODO: OWNER
			.then(function(models){
				Item.subscribe(req, models);
				res.json(models[0])
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

		//TODO: SECURITY

		var model = {
			title: req.param('title'),
			associatedModels: req.param('associatedModels'),
			content: req.param('content'),
			data: req.param('data'),
			dataHash: req.param('dataHash'),
			tags: req.param('tags'),
			location: req.param('location'),
			//associatedValidations: req.param('associatedValidations'),
			info: req.param('info'),
			amountSet: req.param('amountSet'),
			isGenerator: req.param('isGenerator'),
			user: req.param('user'),
			creator: req.param('user'),
			owner: req.param('owner'),
			//PATCH
			reactions: {plus:0,minus:0},
		};

		console.log('CREATE ITEM', model);

		Item.create(model)
		.exec(function(err, item) {
			if (err) {return console.log(err);}
			else {
				Item.publishCreate(item);
				res.json(item);
			}
		});

	},

	update: function (req, res) {

		//ENCAPSULATED BY MOTION
		//Item.update({id:req.query.id}, {content: req.query.content)}).then(function(itemModel){
		//	console.log('UPDATED ITEM', itemModel)
		//});

	},
	
};

