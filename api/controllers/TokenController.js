/**
 * TokenController
 */

module.exports = {

	getSome: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;

		console.log('GET TOKEN', req.query)

		Token.watch(req);

		if (req.query.string){
			Token.find({string:req.query.string})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Token.subscribe(req, models);
				res.json(models);
			});
		}

		else if (req.query.query){
			console.log(req.query)
			Token.find()
			.where({string: {contains: req.query.query}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Token.subscribe(req, models);
				res.json(models);
			});
		}

		else{

			Token.native(function(err, token) {
				token.find({})
				.limit(limit)
				.skip(skip)
				.sort({'information.markets':-1, "information.inCirculation": -1, "createdAt": -1})
				.toArray(function (err, models) {

					models = models.map(function(obj){ obj.id = obj._id; return obj;});

					Token.count().then(function(numRecords){
						var returnObj = {data:models, info:{count:numRecords}};
						//console.log(returnObj)
						res.json(returnObj);
					});

				});
			});

			//Token.find({})
			//.limit(limit)
			//.skip(skip)
			//.sort(sort)
			//.then(function(models) {
			//	Token.subscribe(req, models);
				//TODO...
				//Token.find({}).count()
				//var numRecords = await Token.count();
			//	Token.count().then(function(numRecords){
			//		var returnObj = {data:models, info:{count:numRecords}};
			//		console.log(returnObj)
			//		res.json(returnObj);
			//	});
			//});

		}

	},

};

