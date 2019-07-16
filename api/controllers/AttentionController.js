var Q = require('q');

module.exports = {
	
	getSome: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET ATTENTION', req.query);

		Attention.watch(req);

		if(req.query.id){
			Attention.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models) {
				res.json(models[0]);
			});
		}

		//TODO: MODELS//

		//TODO: CREATOR

		else{
			Attention.find({})
			.limit(100)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Attention.subscribe(req, models);
				res.json(models);
			});
		}
		
	},

	create: function (req, res) {
		var model = {
			app: req.param('app'),
			string: req.param('string'),
			amount: req.param('amount'),
			data: req.param('data'),
			associatedModels: req.param('associatedModels'),
			creator: req.param('creator'),
			attention: {general:0},
			reactions: {plus:0, minus:0},
		};

		//console.log('CREATE ATTENTION', model);
		
		Attention.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {

				console.log('CREATE ATTENTION', model)

				for (x in model.associatedModels){
					
					if (model.associatedModels[x].type == 'CONTENT'){

						//Content.find({id:associatedModels[x].id}).then(function(contentModel){
							
							
						//});

					}
				}



				Attention.publishCreate(model);
				res.json(model);
			}
		});
	},

};