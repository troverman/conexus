//CRE8.USER
//TODO: RENAME TO MEMBER
const Q = require('q');
const mongodb = require('mongodb');

module.exports = {

	get: function(req, res) {

		function getAssociations(model){
			var deferred = Q.defer();
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

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var id = req.query.id;
		var username = req.query.username;
		
		console.log('GET USER', req.query);

		if (req.query.id || req.query.username){
	
			var query = {$or:[]};
			if (req.query.username){
				if (mongodb.ObjectID.isValid(req.query.username)){query.$or.push({"_id":{$eq:mongodb.ObjectID(req.query.username)}});}
				else{query.$or.push({"username":req.query.username});}
			}
			if (req.query.id){
				if (mongodb.ObjectID.isValid(req.query.id)){query.$or.push({"_id":{$eq:mongodb.ObjectID(req.query.id)}});}
			}

			User.getDatastore().manager.collection('user').find(query).limit(limit).skip(skip).sort({'createdAt':-1}).toArray(function (err, models) {
				if (models.length > 0){
					//console.log(models)
					var userModel = models[0];
					userModel.id = userModel._id.toString();
					User.subscribe(req, [models[0].id]);
					getAssociations(models[0]).then(function(models){res.json(models);});
				}
				else{res.json([]);}
			});
		}

		//SEARCH.. FILTER
		else if (req.query.query){
			User.find()
			.where({
				or: [
					{firstName: {contains: req.query.query}},
					{lastName: {contains: req.query.query}},
					{username: {contains: req.query.query}},
				]
			})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				console.log(models)
				User.subscribe(req, models);
				res.json(models);
			});
		}

		else{
			User.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				User.count().then(function(numRecords){
					User.subscribe(req, models);
					var returnObj = {data:models, info:{count:numRecords}};
					res.json(returnObj);
				});
			});
		}

	},

	update: function(req,res){
		//TODO: SECURITY
		var id = req.param('id');
		var model = {
			username:req.param('username'),
			email:req.param('email'),
			phoneNumber:req.param('phoneNumber'),
			avatarUrl:req.param('avatarUrl'),
			coverUrl:req.param('coverUrl'),
			firstName:req.param('firstName'),
			lastName:req.param('lastName'),
			dateOfBirth: req.param('dateOfBirth'),
			apps: req.param('apps')
		};
		if (req.param('description')){model.description = req.param('description')}
		console.log('UPDATE USER', id, model);
		User.update({id: id}, model).then(function(model){
			User.publish([model.id], {verb: 'update', data: model});
			res.json(model);
		});
	}

};


//CRE8.MEMBER
//module.exports = {
//	get: async function(req, res) {
//		var model = await actionApp.get(req); 
//		res.json(model);
//	},
//	update: async function (req, res) {
//		var newModel = await actionApp.create(req);
//		res.json(newModel);
//	}
//};
