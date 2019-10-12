//CRE8.EVENT
const Q = require('q');

module.exports = {

	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';	

		console.log('GET EVENT', req.query)	

		//TODO: AUDIT 
		if(req.query.id){
			Event.find({id:req.query.id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models){
        		//UPDATE TO APP DEFINED DATA MODEL
        		var promises = [];
        		for (x in models){
					if (models[x].model.type=='ACTION'){promises.push(Action.find({id:models[x].model.id}).then(function(models){return models[0]}))}
					if (models[x].model.type=='APP'){promises.push(App.find({id:models[x].model.id}).then(function(models){return models[0]}))}
					if (models[x].model.type=='ATTENTION'){promises.push(Attention.find({id:models[x].model.id}).then(function(models){return models[0]}))}
					if (models[x].model.type=='CONTENT'){promises.push(Content.find({id:models[x].model.id}).then(function(models){return models[0]}))}
					if (models[x].model.type=='ITEM'){promises.push(Item.find({id:models[x].model.id}).then(function(models){return models[0]}))}
					if (models[x].model.type=='MEMBER'){promises.push(User.find({id:models[x].model.id}).then(function(models){return models[0]}))}
					if (models[x].model.type=='PROJECT'){promises.push(Project.find({id:models[x].model.id}).then(function(models){return models[0]}))}
					if (models[x].model.type=='TASK'){promises.push(Task.find({id:models[x].model.id}).then(function(models){return models[0]}))}
					if (models[x].model.type=='TIME'){promises.push(Time.find({id:models[x].model.id}).then(function(models){return models[0]}))}
					if (models[x].model.type=='TRANSACTION'){promises.push(Transaction.find({id:models[x].model.id}).then(function(models){return models[0]}))}
					if (models[x].model.type=='VALIDATION'){promises.push(Validation.find({id:models[x].model.id}).then(function(models){return models[0]}))}
				}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x].model.data = populatedModels[x];}
					Event.subscribe(req, models.map(function(obj){return obj.id}));
					console.log(models)
					res.json(models);
				});
			});
		}

		else{
			Event.find()
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models){
        		var promises = [];
        		for (x in models){
					if (models.type=='ACTION'){promises.push(Action.find({id:models.id}).then(function(models){return models[0]}))}
					if (models.type=='APP'){promises.push(App.find({id:models.id}).then(function(models){return models[0]}))}
					if (models.type=='ATTENTION'){promises.push(Attention.find({id:models.id}).then(function(models){return models[0]}))}
					if (models.type=='CONTENT'){promises.push(Content.find({id:models.id}).then(function(models){return models[0]}))}
					if (models.type=='ITEM'){promises.push(Item.find({id:models.id}).then(function(models){return models[0]}))}
					if (models.type=='MEMBER'){promises.push(User.find({id:models.id}).then(function(models){return models[0]}))}
					if (models.type=='PROJECT'){promises.push(Project.find({id:models.id}).then(function(models){return models[0]}))}
					if (models.type=='TASK'){promises.push(Task.find({id:models.id}).then(function(models){return models[0]}))}
					if (models.type=='TIME'){promises.push(Time.find({id:models.id}).then(function(models){return models[0]}))}
					if (models.type=='TRANSACTION'){promises.push(Transaction.find({id:models.id}).then(function(models){return models[0]}))}
					if (models.type=='VALIDATION'){promises.push(Validation.find({id:models.id}).then(function(models){return models[0]}))}
				}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models.data = populatedModels[x];}
					Event.subscribe(req, models.map(function(obj){return obj.id}));
					res.json(models);
				});
			});
		}

	},

};