/**
 * ItemController
 */

module.exports = {

	getSome: function(req, res) {

		var mongodb = require('mongodb');

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		
		console.log('GET ITEM', req.query);

		if(req.query.id){

			//LOL WOW
			var id = req.query.id;
			var query = {};
			if (mongodb.ObjectID.isValid(id)){query = { "_id": { $eq: mongodb.ObjectID(id) } }}
			else{query = { dataHash: id}}
			//console.dir(query, {depth: null, colors: true});
			Item.native(function(err, item) {
				item.find(query).limit(limit).skip(skip).sort({'createdAt':-1})
				.toArray(function (err, models) {
					if (models.length > 0){
						var itemModel = models[0];
						itemModel.id = itemModel._id;
						User.find({id:itemModel.user.toString()}).then(function(userModel){
							itemModel.user = userModel[0];
							res.json(itemModel);
						});
					}
					else{res.json([]);}
				});
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

				Item.count({tags:{contains: tag}}).then(function(numRecords){
					Item.subscribe(req, models);
					var returnObj = {data:models, info:{count:numRecords}};
					res.json(returnObj);
				});

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

				Item.count().then(function(numRecords){
					Item.subscribe(req, models);
					var returnObj = {data:models, info:{count:numRecords}};
					res.json(returnObj);
				});

			});
		}
		
	},

	create: function (req, res) {

		const crypto = require('crypto');

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+ITEM'];
			return protocolTokens;
		};


		//TODO: SECURITY

		var model = {
			title: req.param('title'),
			associatedModels: req.param('associatedModels'),
			content: req.param('content'),
			tags: req.param('tags'),
			location: req.param('location'),
			info: req.param('info'),
			amountSet: req.param('amountSet'),
			isGenerator: req.param('isGenerator'),
			user: req.param('user'),
			creator: req.param('user'),
			owner: req.param('owner'),

			//DONT SAVE 
			//associatedValidations: req.param('associatedValidations'),

			//JSON TO STORE ITEM SPECIFIC DATA.. 
			data: req.param('data'),
			dataHash: req.param('dataHash'),

			//PATCH
			reactions: {plus:0,minus:0},
			attention: {general:0}
		};

		if (!model.data){model.data = {};}
		model.data.apps = {
			actions:[],
			reactions: {plus:0,minus:0},
			attention: {general:0},
			json:{},
		};

		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

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

