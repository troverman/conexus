//CRE8.VALIDATION.ALPHA
module.exports = {

	attributes: {
        
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

	types:[
		{
			type:'VALIDATION', 
			//id: --> REDUCTION DESIRED ~~ HASH ID 
			attributes:{
				//good quesion
		    }
		}
	],

    //CONNECTIONS ARE THE LANGUAGE 
    //-- THIS IS WIP FOR FUN
    connections:[
		{
			id:'self', 
			type:'connection', 	
			connections:[{
				id:'self',
				type:'event',
				params:{
					//DATA MODEL 
					// EVENT IS AN OBJECT WITH CONSENSUS INFO
					id:'', //HASH OF THE DATA OBJECT

					//COULD BE FOR PLUGIN CONSENSUS APP . . . 
					//THE RESPECTIVE FOSET HASHES
						//MULTI MERKEL ROOTS
						//VARIENT CONSENSUS

						//TODO: 
						//CONSENSUS MECHENISM IS WRITTEN IN CREATE
						//PARSE THE HASHES AND CONNECTION HASHES  . . .
							//RES{	
								//[]..score
							//}	

					//MULTIDIMESNIONAL CONSENSUS
					connectionHashes:[],

					//MAPPING OF ALL ATTENTION / VALIDATIONS & ACTIONS ON EVENT  . . . 
					tokens:[],

					//event data 
					data:[],

				},

			}],
		}
	],

	//REDUCE INTO SELF CONECTION W CONTEXT
	language: 'Javascript',
	compiler:'V8',

	import:{
		Q: require('q'),
		crypto: require('crypto')
	},

	get: async function(model){

		//BETTER GET . . . WE ARE ABSTRACTING THOUGH MONOGO. . . 
		//provide context hash
		//truth variance 
		return await Event.find({id:model.id});
	},

	get: async function(req){

		var deferred = validationApp.import.Q.defer();

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var task = req.query.task;
		var user = req.query.user;
		var time = req.query.time;
		var id = req.query.id;

		console.log('GET VALIDATION', req.query)

		if(req.query.id){

			Validation.find({id:id}).limit(limit).skip(skip).sort(sort).populate('user')
			.then(function(models) {

				var promises = [];
				for (x in models[0].associatedModels){
					if (models[0].associatedModels[x].type == 'ACTION'){promises.push(Action.find({id:models[0].associatedModels[x].id}).then(function(actionModels){return {action:actionModels[0]}}))}
					if (models[0].associatedModels[x].type.includes("APP")){promises.push(App.find({id:models[0].associatedModels[x].id}).then(function(appModels){return {app:appModels[0]}}))}
					if (models[0].associatedModels[x].type == 'CONNTECTION'){promises.push(Content.find({id:models[0].associatedModels[x].id}).then(function(connectionModels){return {connection:connectionModels[0]}}))}
					if (models[0].associatedModels[x].type == 'CONTENT'){promises.push(Content.find({id:models[0].associatedModels[x].id}).then(function(contentModels){return {content:contentModels[0]}}))}
					if (models[0].associatedModels[x].type == 'ITEM'){promises.push(Item.find({id:models[0].associatedModels[x].id}).then(function(itemModels){return {item:itemModels[0]}}))}
					if (models[0].associatedModels[x].type == 'MEMBER'){promises.push(User.find({id:models[0].associatedModels[x].id}).then(function(memberModels){return {member:memberModels[0]}}))}
					if (models[0].associatedModels[x].type == 'PROJECT'){promises.push(Project.find({id:models[0].associatedModels[x].id}).then(function(projectModels){return {project:projectModels[0]}}))}
					if (models[0].associatedModels[x].type == 'TASK'){promises.push(Task.find({id:models[0].associatedModels[x].id}).then(function(taskModels){return {task:taskModels[0]}}))}
					if (models[0].associatedModels[x].type == 'TIME'){promises.push(Time.find({id:models[0].associatedModels[x].id}).then(function(taskModels){return {time:timeModels[0]}}))}
					if (models[0].associatedModels[x].type == 'TRANSACTION'){promises.push(Transaction.find({id:models[0].associatedModels[x].id}).then(function(transactionModels){return {transaction:transactionModels[0]}}))}
					if (models[0].associatedModels[x].type == 'VALIDATION'){promises.push(Validation.find({id:models[0].associatedModels[x].id}).then(function(validationModels){return {validation:validationModels[0]}}))}
				}

				Q.all(promises).then((populatedModels)=>{

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

					Validation.subscribe(req, [models[0].id]);
					deferred.resolve(models);

				});
			});
		}

		else if (req.query.association){
			var association = req.query.association;
			Validation.getDatastore().manager.collection('validation')
			.find({$or:[
					{$and:[{"associatedModels.id": {$in :[association[0]]}}, {"associatedModels.id": {$in :[association[1]]}}]},
					{$and:[{"associatedModels.id": {$in :[association[1]]}},{"associatedModels.id": {$in :[association[0]]}}]}
				]
			}).limit(1000).skip(0).sort({'createdAt':-1})
			.toArray(function (err, models) {
				models = models.map(function(obj){obj.id = obj._id.toString(); return obj;});
				Validation.subscribe(req, models.map(function(obj){return obj.id;}));
				deferred.resolve(models);
			});
		}

		else if(req.query.user){
			var models = await Validation.find({user:user}).limit(limit).skip(skip).sort(sort)
			Validation.subscribe(req, models.map((obj)=>obj.id));
			deferred.resolve(models);
		}

		else{
			var models = await Validation.find({}).limit(10).skip(skip).sort(sort)
			var promises = [];
			for (x in models){
				promises.push(User.find({id:models[x].user.toString()}).then(function(userModels){return {user:userModels[0]}}));
				for (y in models[x].associatedModels){
					if (models[x].associatedModels[y].type == 'PROJECT'){promises.push(Project.find({id:models[x].associatedModels[y].address}).then(function(projectModels){return {project:projectModels[0]}}))}
					if (models[x].associatedModels[y].type == 'TASK'){promises.push(Task.find({id:models[x].associatedModels[y].address}).then(function(taskModels){return {task:taskModels[0]}}))}
					if (models[x].associatedModels[y].type == 'TIME'){promises.push(Time.find({id:models[x].associatedModels[y].address}).then(function(timeModels){return {time:timeModels[0]}}))}
				}
			}
			var populatedModels = await Q.all(promises);
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
	//NEXT
	//HEllO FRIEND , Thanks for reading 
	create: async function(model){
		
		var connection = await Connection.find({connection:model.connection});

		//BLOOP
		//DO THE MATH (IS LIVE TOO MUCH TO ASK FOR?)
		var newValidationModel = {
							
		};

		//REDUCE
		newValidationModel.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newValidationModel)).digest('hex');
		newValidationModel.id = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newValidationModel)).digest('hex');

		//REDUCE 
		var newValidation = await Validation.create(newValidationModel);
		var newEvent = await eventApp.create(newValidation);

		//TOKENS CREATE --> REDUCE TO ON EVENT CREATE 
			//??
	},

	create: async function(req){

		var deferred = validationApp.import.Q.defer();

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
			model: 'VALIDATION',
			type: 'VALIDATION',

			connection: req.param('connection') || connection[0].id,
			parameters: req.param('parameters'),
			content: req.param('content'),

			//APPRECIATE ASSOCIATION
			user: req.param('user'),
			creator: req.param('creator'),

			context: req.param('context'),
			parameters: req.param('parameters'),

			//content

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

		model.hash = validationApp.import.crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');




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




		console.log('CREATE VALIDATION', model);
		var newValidation = await Validation.create(model);	
		newValidation.user = userModels[0];
		Validation.subscribe(req, [validation.id]);
		Validation.publish([validation.id], {verb: 'create', data: validation.id});
		validationApp.tokens.create(validation);
		//NotificationApp.create[model.model.toLowerCase()](validation);
		NotificationApp.create.validation(validation);
		eventApp.create(validation);
		associationApp.create(validation);

		deferred.resolve(newValidation);
		return deferred.promise;
	},

	tokens:{

		//CONNECTION..
		//DISCRETE TOKEN DATA
		//-->HASH, FLATTEN (ALL, AND)
		//2ND ORDER SELF CONNECTION ATTRIBUTES = APP DEFINED CUSTOM DATA MODEL
		//CONNETION TOKEN PARAMS...........!
		//FUNCTIONAL
		get:function(model){
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

		create:async function (model){
			var tokens = validationApp.tokens.get(model);
			for (x in tokens){

				var tokenString = tokens[x]; 
				var tokenModels = await Token.find({string:tokenString});

				if (tokenModels.length == 0){
					var newTokenModel = {
						string:tokenString,
						protocols:['CRE8','TRANSACTION'], 
						information:{
							inCirculation:model.amount, 
							markets:0
						},
						logic:{
							transferrable:true, 
							mint:'CREATE TIME'
						}
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

	},

};