var Q = require('q');

module.exports = {

	get: function(req, res) {
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var id = req.query.id;
		console.log('GET ASSOCIATION', req.query)
		Association.watch(req);
		if(req.query.id){
			Association.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				if (models[0]){

					//DEPRECIATE THIS STYLE
					//APPRECIATE APP 
					var promises = [];
					for (x in models[0].associatedModels){
						if (models[0].associatedModels[x].type == 'ACTION'){promises.push(Action.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
						if (models[0].associatedModels[x].type == 'APP'){promises.push(App.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
						if (models[0].associatedModels[x].type == 'ATTENTION'){promises.push(Attention.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
						if (models[0].associatedModels[x].type == 'CONTENT'){promises.push(Content.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
						if (models[0].associatedModels[x].type == 'ITEM'){promises.push(Item.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
						if (models[0].associatedModels[x].type == 'MEMBER'){promises.push(User.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
						if (models[0].associatedModels[x].type == 'PROJECT'){promises.push(Project.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
						if (models[0].associatedModels[x].type == 'TASK'){promises.push(Task.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
						if (models[0].associatedModels[x].type == 'TIME'){promises.push(Time.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
						if (models[0].associatedModels[x].type == 'TRANSACTION'){promises.push(Transaction.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
						if (models[0].associatedModels[x].type == 'VALIDATION'){promises.push(Validation.find({id:models[0].associatedModels[x].id}).then(function(models){return models[0];}))}
					}

					Q.all(promises).then((populatedModels)=>{
						for (x in models[0].associatedModels){
							console.log(models[0].associatedModels[x])
							models[0].associatedModels[x].data = populatedModels[x];
						}
						res.json(models[0]);
					});

				}
				else{res.json(models);}
			});
		}
		//mm
		else if (req.query.app){
			var app = req.query.app;
			Association.native(function(err, association) {
				association.find({"associatedModels.id": {$in :[app]}})
				.limit(1000)
				.skip(0)
				.sort({'createdAt':-1})
				.toArray(function (err, associationModels) {
					associationModels = associationModels.map(function(obj){obj.id = obj._id; return obj;});
					res.json(associationModels);
				});
			});
		}
	}

};