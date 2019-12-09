//CRE8.ASSOCIATION.ALPHA
module.exports = {

	import:{
		//WORK ON REQUIRE KEY WORD.. 
			//DOWNLOAD AND BUILD BASED ON TYPE
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
					var populatedModels = await associationApp.import.Q.all(promises);
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