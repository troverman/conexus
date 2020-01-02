//CRE8.ASSOCIATION.ALPHA
module.exports = {

	import:{
		//WORK ON REQUIRE KEY WORD.. 
			//DOWNLOAD AND BUILD BASED ON TYPE
		Q: require('q'),
		crypto: require('crypto')
	},

	attributes: {

        //DEPRECIATE
        model: {type: 'string', defaultsTo: 'ASSOCIATION'},

    	//DEFINE (HIGHER ORDER) LOGIC
    	connection:{type: 'json'},

		//[{type:'MODEL', id:1, {parameter}},{...},...]
		associatedModels: {type: 'json'},

		//{'dimension':score, ..., }
		context: {type: 'json'},
            //PARAMETERS
            //{attributes:attribute, ...}
            //parameters: {type: 'json'},

    },

	//TODO
	get: async function(model){
		var deferred = associationApp.import.Q.defer();
		Association.getDatastore().manager.collection('association')
		.find({$and : [{"associatedModels.id": {$in:[model.id]}}]}).limit(1000).skip(0).sort({'createdAt':-1})
		.toArray(function (err, associationModels) {
			if (associationModels.length > 0){
				associationModels.map(function(obj){obj.id=obj._id; return obj});
				model.associationModels = associationModels;
				var promises = [];
				for (x in model.associationModels){
					for (y in associationModels[x].associatedModels){
						if (associationModels[x].associatedModels[y].type=='ACTION'){promises.push(Action.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='APP'){promises.push(App.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='ATTENTION'){promises.push(Attention.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='CONTENT'){promises.push(Content.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='ITEM'){promises.push(Item.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='MEMBER'){promises.push(User.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='PROJECT'){promises.push(Project.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='TASK'){promises.push(Task.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='TIME'){promises.push(Time.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='TRANSACTION'){promises.push(Transaction.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='VALIDATION'){promises.push(Validation.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
					}
				}
				(async () => {
					var populatedModels = await associationApp.import.Q.all(promises);
					for (x in model.associationModels){
						for (y in associationModels[x].associatedModels){
							var index = parseInt(x+y);
							model.associationModels[x].associatedModels[y].data = populatedModels[index];
						}
					}
					deferred.resolve(model);
					model.context = {};
				})();
			}
			else{deferred.resolve(model);}
		});
		return deferred.promise;
	},


	get: async function(req, res) {

		//TODO: RECURSIVE 
		function getAssociations(model){
			var deferred = Q.defer();
			Association.getDatastore().manager.collection('association')
			.find({$and : [{"associatedModels.id": {$in:[model.id]}}]})
			.limit(1000)
			.skip(0)
			.sort({'createdAt':-1})
			.toArray(function (err, associationModels) {
				if (associationModels.length > 0){
					associationModels.map(function(obj){obj.id=obj._id; return obj});
					model.associationModels = associationModels;
					var promises = [];
					//TODO: APP TYPES SMART QUERY
					for (x in model.associationModels){
						for (y in associationModels[x].associatedModels){
							if (associationModels[x].associatedModels[y].type=='ACTION'){promises.push(Action.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='APP'){promises.push(App.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='ATTENTION'){promises.push(Attention.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='CONTENT'){promises.push(Content.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='ITEM'){promises.push(Item.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='MEMBER'){promises.push(User.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='PROJECT'){promises.push(Project.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TASK'){promises.push(Task.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TIME'){promises.push(Time.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TRANSACTION'){promises.push(Transaction.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='VALIDATION'){promises.push(Validation.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						}
					}
					Q.all(promises).then((populatedModels)=>{
						var index = -1 
						for (x in model.associationModels){
							for (y in associationModels[x].associatedModels){
								index++;
								model.associationModels[x].associatedModels[y].data = populatedModels[index];
							}
						}
						deferred.resolve(model);
					});
				}
				else{deferred.resolve(model);}
			});
			return deferred.promise;
		};

		function parseQuery(queryModel){
			var query = {$and:[]}
			if (queryModel.id){
				query.$and.push({
					"associatedModels.id": {
						$in :[queryModel.id]
					}
				});
			}
				//remove type
			if (queryModel.type){
				query.$and.push({
					"associatedModels.type": {
						$in :[queryModel.type]
					}
				});
			}
				//parameter
			if (queryModel.connection){}
			if (queryModel.attributes){}

			console.log(queryModel, query);
			return query; 
		};

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var id = req.query.id;
		console.log('GET ASSOCIATION', req.query);

		if(req.query.id){
			var models = await Association.find({id:id}).limit(limit).skip(skip).sort(sort)
			if (models[0]){
				//TODO: DEPRECIATE THIS STYLE
				var promises = [];
				for (x in models[0].associatedModels){
					if (models[0].associatedModels[x].type == 'ACTION'){promises.push(Action.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
					if (models[0].associatedModels[x].type == 'APP'){promises.push(App.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
					if (models[0].associatedModels[x].type == 'ATTENTION'){promises.push(Attention.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
					if (models[0].associatedModels[x].type == 'CONNECTION'){promises.push(Connection.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
					if (models[0].associatedModels[x].type == 'CONTENT'){promises.push(Content.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
					if (models[0].associatedModels[x].type == 'ITEM'){promises.push(Item.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
					if (models[0].associatedModels[x].type == 'MEMBER'){promises.push(User.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
					if (models[0].associatedModels[x].type == 'PROJECT'){promises.push(Project.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
					if (models[0].associatedModels[x].type == 'TASK'){promises.push(Task.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
					if (models[0].associatedModels[x].type == 'TIME'){promises.push(Time.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
					if (models[0].associatedModels[x].type == 'TRANSACTION'){promises.push(Transaction.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
					if (models[0].associatedModels[x].type == 'VALIDATION'){promises.push(Validation.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
				}
				var populatedModels = await Q.all(promises);
				for (x in models[0].associatedModels){
					console.log(models[0].associatedModels[x])
					models[0].associatedModels[x].data = populatedModels[x];
				}
				Association.subscribe(req, [models[0].id]);
				res.json(models[0]);
				//TODO: RETURN PROMISE
				return models[0];	
			}
			else{res.json(models);}
		}

		else if(req.query.filter){

			var querySet = JSON.parse(req.query.filter);
			console.log(querySet)
			//JSON.stringify({type:'CONTENT', id:member.id}),

			//following
			//filter:[]
			//connection:{title:'Follow'}
			//connectionParameter:{parameter:parameterValue}
			//comment
			//filter:[]

			var mongoQuery = parseQuery(querySet);
			var query = mongoQuery;

			//TODO: CONNECTION FILTERS
				//FOLLOWING & FOLLOWERS! : )
			Association.getDatastore().manager.collection('association').find(query).limit(1000).skip(0).sort({'createdAt':-1})
			.toArray(function (err, associationModels) {
				associationModels = associationModels.map(function(obj){obj.id = obj._id; return obj;});
				var promises = [];
				for (x in associationModels){
					for (y in associationModels[x].associatedModels){
						if (associationModels[x].associatedModels[y].type=='ACTION'){promises.push(Action.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='APP'){promises.push(App.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='ATTENTION'){promises.push(Attention.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='CONNECTION'){promises.push(Connection.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='CONTENT'){promises.push(Content.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='ITEM'){promises.push(Item.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='MEMBER'){promises.push(User.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='PROJECT'){promises.push(Project.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='TASK'){promises.push(Task.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='TIME'){promises.push(Time.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='TRANSACTION'){promises.push(Transaction.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						if (associationModels[x].associatedModels[y].type=='VALIDATION'){promises.push(Validation.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
					}
				}
				Q.all(promises).then((populatedModels)=>{
					var index = -1 
					for (x in associationModels){
						for (y in associationModels[x].associatedModels){index++;associationModels[x].associatedModels[y].data = populatedModels[index];}
					}
					//model.context = {};
					//for (x in model.associationModels){}

					//OKK..
					//POPULATE USER FOR ASSOCIATAED MODEL DATA &&&&&&&& LINK IN USER / RECURSUVE POPULATION ETC
					//for (x in associationModels)
					//	for (y in associationModels[x].associatedModels){
					//		User.find()
					//	}
					//}

					//TODO: RETURN PROMISE
					return associationModels;
				});
			});
		}

	},


	//DO BETTER --> BASED ON CONNECTION! 
	create: async function(newValidationModel){

		var newAssociationModel = {}; 
		Validation.getDatastore().manager.collection('validation')
		.find({
			$and : [
				{"associatedModels.id": {$in :[newValidationModel.associatedModels[0].id]}}, 
				{"associatedModels.id": {$in :[newValidationModel.associatedModels[1].id]}}
			]
		})
		.limit(1000)
		.skip(0)
		.sort({'createdAt':-1})
		.toArray(function (err, validationModels) {
			Association.getDatastore().manager.collection('association')
			.find({
				$and : [
					{"associatedModels.id": {$in :[validationModels[0].associatedModels[0].id]}},
					{"associatedModels.id": {$in :[validationModels[0].associatedModels[1].id]}},
				]
			})
			.limit(1000)
			.skip(0)
			.sort({'createdAt':-1})
			.toArray(function (err, associationModels) {
				if (associationModels.length == 0){
					var newAssociationModel = newValidationModel;
					Association.create(newAssociationModel).then(function(association){
						console.log('CREATED ASSOCIATION', association);
						Association.publish([association.id], {verb: 'create', data: association});
					});
				}
				else{
					console.log('ASSOCIATION EXISTS -- COMPUTE');
				}
			});
		});

	},

	tokens:{},
	
};