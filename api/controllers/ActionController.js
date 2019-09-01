var Q = require('q');

module.exports = {
	
	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET ACTION', req.query);

		Action.watch(req);

		//TODO: GENERATOR
		function getItem(model){
			var deferred = Q.defer();
			if (model.associatedModels){
				Item.find({id:model.associatedModels[0].id}).then(function(itemModels){
					deferred.resolve(itemModels[0]);
				});
			}
			else{deferred.resolve(null)}
			return deferred.promise;
		};

		if(req.query.id){
			Action.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
        	.then(function(models) {
				res.json(models[0]);
			});
		}

		else if(req.query.user){

			//YOU CRAZI
			//U HAXX0R
			//OK I GET IT 
			var user = req.query.user;
			Action.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {

				//console.log(models)
				var promises = [];
				for (x in models){
					promises.push(getItem(models[x]));
				}

				Q.all(promises).then((populatedModels)=>{
					var sum = 0;
					for (x in models){
						if (models[x].associatedModels){models[x].associatedModels[0] = populatedModels[sum];}
						sum++
					}
					res.json(models);
				});
			
			});
		}

		else{
			Action.find({})
			.limit(20)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Action.subscribe(req, models);
				res.json(models);
			});
		}
		
	},

	create: function (req, res) {

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		function getProtocolTokens(model){

			//TOKENS ARE THE ASSOCIATION

			var protocolTokens = ['CRE8', 'CRE8+ACTION', 'CRE8+ACTION+'+model.type.toUpperCase()];
			return protocolTokens;
		};

		var model = {
			model: 'ACTION',
			type: req.param('type'),
			amount: req.param('amount'),
			associatedModels: req.param('associatedModels'),
			user: req.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};

		console.log('CREATE ACTION', model);

		Action.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				Action.publishCreate(model);
				res.json(model);
			}
		});
	},

};