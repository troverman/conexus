//CRE8.ASSOCIATION.ALPHA
module.exports = {

	import:{
		Q: require('q'),
		crypto: require('crypto')
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
					var populatedModels = await Q.all(promises);
					for (x in model.associationModels){
						for (y in associationModels[x].associatedModels){
							var index = parseInt(x+y);
							model.associationModels[x].associatedModels[y].data = populatedModels[index];
						}
					}
				})();

				deferred.resolve(model);
				model.context = {};
			}
			else{deferred.resolve(model);}
		});
		return deferred.promise;
	},

	create: async function(res){},

	tokens:{},
	
};