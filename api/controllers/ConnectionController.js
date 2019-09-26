//CRE8.CONNECTION
const crypto = require('crypto');
const Q = require('q');

module.exports = {
	
	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 100;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET CONNECTION', req.query);

		if(req.query.id){
			Connection.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models) {
				Connection.subscribe(req, [models[0].id]);
				res.json(models[0]);
			});
		}

		else if(req.query.creator){
			Connection.find({creator:creator})
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models) {
				Content.subscribe(req, [models[0].id]);
				res.json(models[0]);
			});
		}

		else{
			Connection.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Connection.subscribe(req, models.map(function(obj){return obj.id}));
				res.json(models);
			});
		}
		
	},

	create: function (req, res) {

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+CONNECTION'];
			return protocolTokens;
		};

		var model = {
			model: 'CONNECTION',
			creator: req.param('creator'),
			information: req.param('information'),
			associatedModels: req.param('associatedModels'),//id, type..
			dataModelAlpha: req.param('dataModelAlpha'),
			dataModelBeta: req.param('dataModelBeta'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		console.log('CREATE CONNECTION', model);
		
		Connection.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				Connection.publish([model.id], {verb: 'create', data: model});
				//createEvent(model);
				//createNotification(model);
				//createValidation(model);
				//mintTokens(model);
				res.json(model);
			}
		});
		
	},

};