//CRE8.ASSOCIATION.ALPHA
var App = {
	//BIG THINK
	//bugz bunny
	'CONNECTION+Q': function(){return global['appApp']['GET+REQUIRE']('q')},
	'CONNECTION+CRYPTO': function(){return global['appApp']['GET+REQUIRE']('crypto')},
	//'CONNECTION+APP+EVENT'
	//WORK ON REQUIRE KEY WORD.. 
	//DOWNLOAD AND BUILD BASED ON TYPE
	'CONNECTION+SELF+ATTRIBUTES': {
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

    'DB': function(){
    	//TODO: PASS SELF+ATTRIBUTES TO CONSTRUCT MODEL DYNAMICALLY (DATA ++ MONGO+MONGOOSE :: META MODEL CONSTRUCTION :: REDUCE ORM CODE)
    	//return dataApp['DATABASE+PROVIDER+MONGO']('Association')
    	return global['Association']
    },

    //TODO: MODEL AS PROTOCOL ... :: WHAT ARE THE MODEL PARAMETER TYPE || the 'type' of model :: can be abstract?? from registry of types :: lol db of json?
	'GET': async function(model){
		var deferred = App['CONNECTION+Q']().defer();
		//REDUCE 
		App['DB']().getDatastore().manager.collection('association')
		.find({$and : [{"associatedModels.id": {$in:[model.id]}}]}).limit(1000).skip(0).sort({'createdAt':-1})
		.toArray(async function (err, associationModels) {

			console.log('DUDEEE', associationModels, model.id);

			if (associationModels.length > 0){
				associationModels.map(function(obj){obj.id=obj._id; return obj});
				model.associationModels = associationModels;

				//todo: connection
				model.context = {};
				var promises = [];
				for (x in model.associationModels){
					for (y in associationModels[x].associatedModels){

						//TODO: VARIABILITY IN MODELS 
						//DYNAMIC // WILL DO TMRW :: AS A JUMP INTO ASSOCIATIONS :: STRATEGEY FOR PROGRESS
						var dataModelString = associationModels[x].associatedModels[y].type.toLowerCase().charAt(0).toUpperCase() + associationModels[x].associatedModels[y].type.toLowerCase().slice(1);
						console.log(dataModelString, associationModels[x].associatedModels[y].id);
						
						//MONKEI REDUCE ME
						if (dataModelString = 'Member'){dataModelString='User'}
						var abstractDataModel = global[dataModelString];

						promises.push(abstractDataModel.find({id:associationModels[x].associatedModels[y].id}));
						//console.log(dataModelString, associationModels[x].associatedModels[y].id);

						/*
						if (associationModels[x].associatedModels[y].type=='ACTION'){promises.push(Action.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						//if (associationModels[x].associatedModels[y].type=='APP'){promises.push(App.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
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
						*/

					}

					//DEFINED BY CONNECTION
					if (model.associationModels[x].context){
						for (y in Object.keys(model.associationModels[x].context)){
							var context = Object.keys(model.associationModels[x].context)[y].toString();
							if(!model.context[context.toString()]){model.context[context.toString()] = model.associationModels[x].context[context.toString()];}
							else{model.context[context.toString()] = model.context[context.toString()] + model.associationModels[x].context[context.toString()];}
						}
					}
				}

				//PROMISE.ALL
				var populatedModels = await App['CONNECTION+Q']().all(promises);
				var index = -1 
				for (x in model.associationModels){
					for (y in associationModels[x].associatedModels){index++;model.associationModels[x].associatedModels[y].data = populatedModels[index];}
				}

				console.log(model.associatedModels);
				deferred.resolve(model);
			}
			else{deferred.resolve(model);}
		});
		return deferred.promise;
	},
	'GET+CONTROLLER': async function(req) {
		function parseQuery(queryModel){
			var query = {$and:[]}
			if (queryModel.id){query.$and.push({"associatedModels.id": {$in :[queryModel.id]}});}
			//remove type
			if (queryModel.type){query.$and.push({"associatedModels.type": {$in :[queryModel.type]}});}
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
		if(req.query.id){
			var models = await App['DB']().find({id:id}).limit(limit).skip(skip).sort(sort)
			if (models[0]){
				//TODO: DEPRECIATE THIS STYLE
				var promises = [];
				for (x in models[0].associatedModels){

					//REDUCE THIS!!!

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
				var populatedModels = await Promise.all(promises);
				for (x in models[0].associatedModels){
					console.log(models[0].associatedModels[x])
					models[0].associatedModels[x].data = populatedModels[x];
				}
				Association.subscribe(req, [models[0].id]);
				//TODO: RETURN PROMISE
				return models[0];	
			}
			else{return {};}
		}
		else if(req.query.filter){

			var querySet = JSON.parse(req.query.filter);
			//console.log(querySet);
			
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
			//TODO: RECURSIVE . . .
			Association.getDatastore().manager.collection('association').find(query).limit(1000).skip(0).sort({'createdAt':-1})
			.toArray(async function (err, associationModels) {
				associationModels = associationModels.map(function(obj){obj.id = obj._id; return obj;});
				var promises = [];
				for (x in associationModels){
					for (y in associationModels[x].associatedModels){

						//MONKEI REDUCE ME
						var dataModelString = associationModels[x].associatedModels[y].type.toLowerCase().charAt(0).toUpperCase() + associationModels[x].associatedModels[y].type.toLowerCase().slice(1);

						if (dataModelString = 'Member'){dataModelString='User'}
						var abstractDataModel = global[dataModelString];
						promises.push(abstractDataModel.find({id:associationModels[x].associatedModels[y].id}));

						//YOU KNOW WHAT TO DO .. 
						/*
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
						*/

					}
				}
				var populatedModels = await App['CONNECTION+Q']().all(promises);
				var index = -1 
				for (x in associationModels){
					for (y in associationModels[x].associatedModels){index++;associationModels[x].associatedModels[y].data = populatedModels[index];}
				}
				return associationModels;
			});
		}
	},
	//DO BETTER --> BASED ON CONNECTION! 
	'CREATE': async function(newValidationModel){
		//COMPUTE ASSOCIATION HERE
		//FIND ALL VALIDATIONS FOR SPECIFIC ASSOCIATED MODELS
		var newAssociationModel = {}; 
		Validation.getDatastore().manager.collection('validation')
		.find({$and : [{"associatedModels.id": {$in :[newValidationModel.associatedModels[0].id]}}, {"associatedModels.id": {$in :[newValidationModel.associatedModels[1].id]}},]})
		.limit(1000).skip(0).sort({'createdAt':-1})
		.toArray(function (err, validationModels) {
			Association.getDatastore().manager.collection('association')
			.find({$and : [{"associatedModels.id": {$in :[validationModels[0].associatedModels[0].id]}}, {"associatedModels.id": {$in :[validationModels[0].associatedModels[1].id]}}]})
			.limit(1000).skip(0).sort({'createdAt':-1})
			.toArray(async function (err, associationModels) {
				if (associationModels.length == 0){
					var newAssociationModel = newValidationModel;
					var association = await Association.create(newAssociationModel);
					console.log('associationApp.create', 'CALL:', utilityServiceApp.guid(), association);
					Association.publish(association.id, {verb: 'create', data: association});
					eventApp['CREATE'](association, 'create');	
				}
				else{eventApp['CREATE'](association, 'update');}
			});
		});
	},
	'TOKENS':{},
};
module.exports = App