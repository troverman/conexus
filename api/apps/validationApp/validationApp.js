//CRE8.VALIDATION.ALPHA
var App = {

	'CONNECTION+SELF+ATTRIBUTES': {
        //DEPRECIATE
        model: {type: 'string', defaultsTo: 'VALIDATION'},
        type: {type: 'string', defaultsTo: 'VALIDATION'},
        associatedModels: {type: 'json'},
        //APPS - CONFIG - CONNECTION PARAMS
        //DEFINED BY CONNECTION
        content: {type: 'string'},
        context: {type: 'json'},
        reputation: {type: 'json'},
        parameters: {type: 'json'},
        information: {type: 'json'},
        type: {type: 'string'},
        //CREATOR
        user: {model: 'user'},
        creator: {type: 'string'},
        data: {type: 'json'},
    },
	
	'ASSOCIATION+SELF+LANGUAGE': 'Javascript',
	'ASSOCIATION+SELF+RUNTIME':'NODE::V8',
	'CONNECTION+Q':require('q'),
	'CONNECTION+CRYPTO':require('crypto'),

	'DB': function(){return global['Validation']},
	'GET': async function(req){

		var deferred = App['CONNECTION+Q'].defer();

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var task = req.query.task;
		var user = req.query.user;
		var time = req.query.time;
		var id = req.query.id;

		//YOU KNOW WHAT TO DO LOL 
		if(req.query.id){
			var models = await App['DB']().find({id:id}).limit(limit).skip(skip).sort(sort).populate('user')
			var promises = [];
			for (x in models[0].associatedModels){

				//MONKEI REDUCE 	
				//var dataModelString = models[0].associatedModels[x].type.toLowerCase().charAt(0).toUpperCase() + models[0].associatedModels[x].type.toLowerCase().slice(1);
				//if (dataModelString = 'Member'){dataModelString='User'}
				//var abstractDataModel = global[dataModelString];
				//promises.push(abstractDataModel.find({id:associationModels[x].associatedModels[y].id}));


				if (models[0].associatedModels[x].type == 'ACTION'){promises.push(Action.find({id:models[0].associatedModels[x].id}).then(function(actionModels){return {action:actionModels[0]}}))}
				if (models[0].associatedModels[x].type.includes("APP")){promises.push(App.find({id:models[0].associatedModels[x].id}).then(function(appModels){return {app:appModels[0]}}))}
				if (models[0].associatedModels[x].type == 'CONNTECTION'){promises.push(Content.find({id:models[0].associatedModels[x].id}).then(function(connectionModels){return {connection:connectionModels[0]}}))}
				if (models[0].associatedModels[x].type == 'CONTENT'){promises.push(Content.find({id:models[0].associatedModels[x].id}).then(function(contentModels){return {content:contentModels[0]}}))}
				if (models[0].associatedModels[x].type == 'ITEM'){promises.push(Item.find({id:models[0].associatedModels[x].id}).then(function(itemModels){return {item:itemModels[0]}}))}
				if (models[0].associatedModels[x].type == 'MEMBER'){promises.push(User.find({id:models[0].associatedModels[x].id}).then(function(memberModels){return {member:memberModels[0]}}))}
				if (models[0].associatedModels[x].type == 'PROJECT'){promises.push(Project.find({id:models[0].associatedModels[x].id}).then(function(projectModels){return {project:projectModels[0]}}))}
				if (models[0].associatedModels[x].type == 'TASK'){promises.push(Task.find({id:models[0].associatedModels[x].id}).then(function(taskModels){return {task:taskModels[0]}}))}
				if (models[0].associatedModels[x].type == 'TIME'){promises.push(Time.find({id:models[0].associatedModels[x].id}).then(function(timeModels){return {time:timeModels[0]}}))}
				if (models[0].associatedModels[x].type == 'TRANSACTION'){promises.push(Transaction.find({id:models[0].associatedModels[x].id}).then(function(transactionModels){return {transaction:transactionModels[0]}}))}
				if (models[0].associatedModels[x].type == 'VALIDATION'){promises.push(Validation.find({id:models[0].associatedModels[x].id}).then(function(validationModels){return {validation:validationModels[0]}}))}
			

			}
			var populatedModels = await Promise.all(promises);
			for (x in models[0].associatedModels){
				if (models[0].associatedModels[x].type.includes("APP")){
					var app = populatedModels.filter(function(obj){return obj.app})
					models[0].associatedModels[x].info = app[0];
				}
				if (models[0].associatedModels[x].type == 'CONNTECTION'){
					var connection = populatedModels.filter(function(obj){return obj.content})
					models[0].associatedModels[x].info = connection[0];
				}
				if (models[0].associatedModels[x].type == 'CONTENT'){
					var content = populatedModels.filter(function(obj){return obj.content})
					models[0].associatedModels[x].info = content[0];
				}
				if (models[0].associatedModels[x].type == 'ITEM'){
					var item = populatedModels.filter(function(obj){return obj.item})
					models[0].associatedModels[x].info = item[0];
				}
				if (models[0].associatedModels[x].type == 'MEMBER'){
					var member = populatedModels.filter(function(obj){return obj.member})
					models[0].associatedModels[x].info = member[0];
				}
				if (models[0].associatedModels[x].type == 'PROJECT'){
					var project = populatedModels.filter(function(obj){return obj.project})
					models[0].associatedModels[x].info = project[0];
				}
				if (models[0].associatedModels[x].type == 'TASK'){
					var task = populatedModels.filter(function(obj){return obj.task});
					models[0].associatedModels[x].info = task[0];
				}
				if (models[0].associatedModels[x].type == 'TIME'){
					var time = populatedModels.filter(function(obj){return obj.time});
					models[0].associatedModels[x].info = time[0];
				}
			}
			App['DB']().subscribe(req, [models[0].id]);
			deferred.resolve(models);
		}

		else if (req.query.association){
			var association = req.query.association;
			App['DB']().getDatastore().manager.collection('validation')
			.find({$or:[
					{$and:[{"associatedModels.id": {$in :[association[0]]}}, {"associatedModels.id": {$in :[association[1]]}}]},
					{$and:[{"associatedModels.id": {$in :[association[1]]}},{"associatedModels.id": {$in :[association[0]]}}]}
				]
			}).limit(1000).skip(0).sort({'createdAt':-1})
			.toArray(function (err, models) {
				models = models.map(function(obj){obj.id = obj._id.toString(); return obj;});
				App['DB']().subscribe(req, models.map(function(obj){return obj.id;}));
				deferred.resolve(models);
			});
		}

		else if(req.query.user){
			var models = await App['DB']().find({user:user}).limit(limit).skip(skip).sort(sort)
			App['DB']().subscribe(req, models.map((obj)=>obj.id));
			deferred.resolve(models);
		}

		else{
			var models = await App['DB']().find({}).limit(10).skip(skip).sort(sort)
			var promises = [];
			for (x in models){
				promises.push(User.find({id:models[x].user.toString()}).then(function(userModels){return {user:userModels[0]}}));
				for (y in models[x].associatedModels){
					if (models[x].associatedModels[y].type == 'PROJECT'){promises.push(Project.find({id:models[x].associatedModels[y].address}).then(function(projectModels){return {project:projectModels[0]}}))}
					if (models[x].associatedModels[y].type == 'TASK'){promises.push(Task.find({id:models[x].associatedModels[y].address}).then(function(taskModels){return {task:taskModels[0]}}))}
					if (models[x].associatedModels[y].type == 'TIME'){promises.push(Time.find({id:models[x].associatedModels[y].address}).then(function(timeModels){return {time:timeModels[0]}}))}
				}
			}
			var populatedModels = await Promise.all(promises);
			var sum = 0;
			for (x in models){
				models[x].user = populatedModels[sum].user;
				sum++;
				for (y in models[x].associatedModels){
					if (models[x].associatedModels[y].type == 'PROJECT'){models[x].associatedModels[y].info = populatedModels[sum].project;}
					if (models[x].associatedModels[y].type == 'TASK'){models[x].associatedModels[y].info = populatedModels[sum].task;}
					if (models[x].associatedModels[y].type == 'TIME'){models[x].associatedModels[y].info = populatedModels[sum].time;}
					sum++;
				}
			}
			deferred.resolve(models);
		}
		return deferred.promise;
	},
	//WORK HERE
	createNew: async function(model){
		var connection = await Connection.find({connection:model.connection});

		//BLOOP
		//DO THE MATH (IS LIVE TOO MUCH TO ASK FOR?)
		var newValidationModel = {};

		//REDUCE
		newValidationModel.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(newValidationModel)).digest('hex');
		//newValidationModel.id = App.import.crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newValidationModel)).digest('hex');

		//REDUCE 
		var newValidation = await App['DB']().create(newValidationModel);
		var newEvent = await eventApp.create(newValidation);

		//TOKENS CREATE --> REDUCE TO ON EVENT CREATE 
	},
	'CREATE': async function(req){

		var deferred = App['CONNECTION+Q'].defer();

		//var connection = await Connection.find({});
		var userModels = await User.find({id:model.user});

		//if(!model.connection){
			//FIND DEFAULT & DYNAMIC CONNECTIONS
			//var connectionQuery = {};			
			//model.connection = {
			//	id:1,
			//	title:'DEFAULT '+ model.associatedModels.map(function(obj){return obj.type}).join(' '),
			//	parameters:{
			//		mapping:[
			//			'context',
			//			'reputation',
			//			'computed'
			//		],
			//		logic:'context[%context]*reputation[%context]'
			//	},
			//};
			//CONNECTION DEFINED MAPPINGS
			//for (y in model.connection.parameters.mapping){
			//	if(!model[model.connection.parameters.mapping[y]]){
			//		model[model.connection.parameters.mapping[y]] = {};
			//	}
			//}
		//}

		var model = {
			//REDUCE
			model: 'VALIDATION', type: 'VALIDATION',
			connection: req.param('connection') || connection[0].id,
			parameters: req.param('parameters'),
			content: req.param('content'),
			//APPRECIATE ASSOCIATION
			user: req.param('user'),
			creator: req.param('creator'),
			context: req.param('context'),
			parameters: req.param('parameters'),
			associatedModels: req.param('associatedModels'),
			//THINK: COUNTS 
			//data:{
				//apps:{
				//	associations:{
				//		tasks:0
				//	}
				//}
			//}
			//data:{
				//apps:{
				//	friends:1,
				//	followers:100,
				//}
			//}
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = App['CONNECITON+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		//THINK
		var associatedModelObj = {};
		if (model.associatedModels[x].id.toLowerCase() == 'self'){associatedModelObj = {type:model.model, id:model.id}}
		else{associatedModelObj = {
			type:model.associatedModels[x].type,
			id:model.associatedModels[x].id};
		}
		newValidation.associatedModels = [
			{type:model.model, id:model.id},
			associatedModelObj
		];

		//LIST -> OBJ
		for (y in model.associatedModels[x].context){newValidation.context[model.associatedModels[x].context[y].text] = model.associatedModels[x].context[y].score;}
		
		console.log('validationApp.create', 'CALL:', utilityServiceApp.guid(), model);
		
		var newValidation = await Validation.create(model);	
		newValidation.user = userModels[0];
		App['DB']().subscribe(req, [newValidation.id]);
		App['DB']().publish([newValidation.id], {verb: 'create', data: newValidation.id});
		
		App['TOKENS+CREATE'](newValidation);

		NotificationApp['CREATE+VALIDATION'](newValidation);

		eventApp['CREATE'](newValidation);

		associationApp['CREATE'](newValidation);

		return newValidation;
	},

	//IMPLICIT VALIDATIONS REPLACE 'user'? what about 'creator'
	//DEPRECAITE TO.. FROM????? --> VALIDATION / ASSOCIATION IS MAIN DATA MODEL ...
	//MEMBER->TRANSACTION
	//TRANSACTION->PROJECT
	//TRANSACTION<->TRANSACTION ?
	//APP-APP INTEROP . . . /// USE App.CREATE  . .. 
	//TODO: REDUCE . . .
		//THIS ABOUT STATIC VERSIONS OF VALIDATION TYPES (AS CONNECTIONS WITH SUM RULES)

	'CREATE+LEGACY': async function(model){

		//CREATE VALIDATION (IE SELF VALIDATION .. CONTEXT OF TRANSACTION)
		//SOME CHARTER WHERE THE CREATOR IS WEIGHTED
		//SOME CHARTER WHERE THE FROM AND TO IS WEIGHTED
		//IE BUY AN ITEM.. CONTEXTUALIZED VALIDATION

		for (x in model.associatedModels){
			var newValidation = {
				model:'VALIDATION',
				content:model.id + ' VALIDATION',
				user: model.user.id,
				creator: model.user.id,
				//ATTRIBUTES
				parameters:{},
				context: {},
				reputation: {},	
				data:{apps:{reactions: {plus:0,minus:0},attention:{general:0}}}
			};

			//DEFAULT CONNECTION???? 
			//SCOPE VARIABLES
			//FOR COMMENTS (PARENT CHILD.. )
			//CONTENT-CONTENT COMMENT (1st in order is parent)
			//MODEL-CONTENT COMMENT
			//Connection.find({}).then(function(connectionModel){
			//newValidation.connection = connectionModel[0];
			
			newValidation.connection = {
				id:1,
				type:'HUMAN',
				title:'STANDARD MULTI, AGNOSTIC MODELS',
				parameters:{
					mapping:['context','reputation','computed'],
					attributes:{
						context:'string->int',//{string:int} //lang lang interpol
						reputation:'string->int',
						computed:'string:->int'
					},
					logic:'computed[%context] = context[%context]*reputation[%context]'
				},
			};

			//NO HARDCODE!
			newValidation.connection = {
				id: null,
				title:'DEFAULT',
				parameters:{
					mapping:[
						'context',
						'reputation',
						'computed'
					],
					logic:'context[%context]*reputation[%context]'
				},
			};
			//CONNECTION DEFINED MAPPINGS
			for (y in newValidation.connection.parameters.mapping){
				newValidation[newValidation.connection.parameters.mapping[y]] = {};
			}
			var associatedModelObj = {};
			if (model.associatedModels[x].id.toLowerCase() == 'self'){associatedModelObj = {type:model.model, id:model.id}}
			else{associatedModelObj = {type:model.associatedModels[x].type, id:model.associatedModels[x].id};}
			newValidation.associatedModels = [
				{type:model.model, id:model.id},
				associatedModelObj
			];
			for (y in model.associatedModels[x].context){newValidation.context[model.associatedModels[x].context[y].text] = model.associatedModels[x].context[y].score;}
			newValidation.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(newValidation)).digest('hex');
			var newValidationModel = await App['DB']().create(newValidation);
			console.log('CREATE VALIDATION', newValidationModel);
			//eventApp.create(newValidationModel);
			newValidationModel.model = 'ASSOCIATION';
			associationApp['CREATE'](newValidationModel);
		}
	},

	//CONNECTION..
	//DISCRETE TOKEN DATA
	//-->HASH, FLATTEN (ALL, AND)
	//2ND ORDER SELF CONNECTION ATTRIBUTES = APP DEFINED CUSTOM DATA MODEL
	//CONNETION TOKEN PARAMS...........!
	//FUNCTIONAL
	'TOKENS+GET':function(model){
		var protocolTokens = [
			'CRE8', 
			'CRE8+VALIDATION', 
			'CRE8+VALIDATION+'+model.id, 
		];

		//DATA TO STRING INTREPRETER
		for (x in Object.keys(model)){
			var dataType = Object.keys(model)[x].toUpperCase();
			//[Object object].. recursive. and large.. ie hashem
			var data = model[Object.keys(model)[x]];
			var prefix = 'CRE8+VALIDATION';
			var string = prefix+'+'+dataType+'+'+data;
			protocolTokens.push(string);
		};

		//HASH :P
		//store real data in token model? 
		for (x in Object.keys(model)){
			var data = model[Object.keys(model)[x]];
			var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(data)).digest('hex');
			var prefix = 'CRE8+VALIDATION';
			var string = prefix+'+'+hash;
			protocolTokens.push(string);
		};

		return protocolTokens;
	},

	'TOKENS+CREATE': async function (model){
		var tokens = App['TOKENS+GET'](model);
		for (x in tokens){
			var tokenString = tokens[x]; 
			var tokenModels = await Token.find({string:tokenString});
			if (tokenModels.length == 0){
				var newTokenModel = {
					string:tokenString,
					protocols:['CRE8','TRANSACTION'], 
					information:{inCirculation:model.amount, markets:0},
					logic:{transferrable:true,  mint:'CREATE TIME'}
				};
				var newToken = await Token.create(newTokenModel);
				console.log('TOKEN CREATED', newToken.string);
				model.user.balance[tokenString] = parseFloat(model.amount);
				var updatedUser = await User.update({id:model.user.id}, {balance:model.user.balance});
				console.log('UPDATED USER', updatedUser);
			}
			else{
				tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
				var updatedToken = await Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information});
				console.log('TOKEN UPDATED', updatedToken);

				if (model.user.balance[tokenString]){model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);}
				else{model.user.balance[tokenString] = parseFloat(model.amount);}

				var updatedUser = await User.update({id:model.user.id}, {balance:model.user.balance});
				console.log('UPDATED USER', updatedUser);
			}
		}
	},

};
module.exports = App;