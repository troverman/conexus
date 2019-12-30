//CRE8.TOKEN
module.exports = {

	get: async function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;

		console.log('GET TOKEN', req.query)

		//ERR
		if (req.query.string){
			var models = await Token.find({string:req.query.string}).limit(limit).skip(skip).sort(sort)
			res.json(models);
		}

		else if (req.query.query){
			var models = await Token.find().where({string: {contains: req.query.query}}).limit(limit).skip(skip).sort(sort)
			Token.subscribe(req, [models[0].id]);
			res.json(models);
		}

		else{
			Token.getDatastore().manager.collection('token').find({}).limit(limit).skip(skip).sort({'information.markets':-1, "information.inCirculation": -1, "createdAt": -1})
			.toArray(function (err, models) {
				models = models.map(function(obj){ obj.id = obj._id; return obj;});
				Token.count().then(function(numRecords){
					var returnObj = {data:models, info:{count:numRecords}};
					res.json(returnObj);
				});
			});
		}

	},

	//COMBINATORIAL REPRESENTATION? 
	//--> MARKET AS COMPUTED PROP

};

//CRE8.TOKEN
//module.exports = {
//	get: async function(req, res) {
//		var model = await tokenApp.get(req); 
//		res.json(model);
//	},
//};