//CRE8.TOKEN.ALPHA
//MULTI-MULTI || SEE NOTIFCATION, ASSOCIATION .. ETC || MANY TO MANY
var App = {
	//TEST | WIP | PLAYGROUND
	//structure: function(req, res) {},
	//language: function(req, res) {},
	//congruence: function(req, res) {},
	//manifold: function(req, res) {},
	'DB': function(){return global['Token']},
	'CONNECTION+Q': require('q'),
	'CONNECTION+SELF+ATTRIBUTES': {
		//DEPRECIATE
		model: {type: 'string', defaultsTo: 'TOKEN'},
		string: {type: 'string'},
		//MANIFOLD LOGIC; ALGEBRAS; etc
		protocols:{type:'json'},
		//TRANSFERRABLE ETC
		logic:{type:'json'},
		//VOLUME, DESCRIPTION
		information:{type:'json'},
		//BETA!!!
		//connections:{type:'string'},
    },
	'GET': async function(req){
		var deferred = App['CONNECTION+Q'].defer();
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		//ERR
		if (req.query.string){return App['DB']().find({string:req.query.string}).limit(limit).skip(skip).sort(sort)}
		else if (req.query.query){return App['DB']().find().where({string: {contains: req.query.query}}).limit(limit).skip(skip).sort(sort)}
		else{
			App['DB']().getDatastore().manager.collection('token').find({}).limit(limit).skip(skip).sort({'information.markets':-1, "information.inCirculation": -1, "createdAt": -1})
			.toArray(function (err, models) {
				models = models.map(function(obj){ obj.id = obj._id; return obj;});
				App['DB']().count().then(function(numRecords){
					var returnObj = {data:models, info:{count:numRecords}};
					deferred.resolve(returnObj)
				});
			});
		}
		return deferred.promise;
	}
};
module.exports = App;