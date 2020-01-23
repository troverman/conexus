//CRE8.ATTENTION.ALPHA

//TODO: META MODEL//
	//data app import? 
//hash
//truth
//coordinates:

//title:
//description:
//connections ~
//machieneAttention . . . 

//infunction descripe as self.title = / /  /
	//self.attention = {type, context}
const crypto = require('crypto');
const Q = require('q');

var attentionApp = {

	attributes: {

    	//DEPRECIATE
        model: {type: 'string', defaultsTo: 'ATTENTION'},

		//associated App.. PEER MINING APP INPUT.. 
		app: {type: 'string'}, //HUMAN, MACHIENE, type: {type: 'string'},
		
		string: {type: 'string'},
        data: {type: 'json'},
        associatedModels: {type: 'json'},
        creator: {model: 'user'},

    },

	get: async function(req) {

		//MACHIENE ATTENTION OBJ..
		//event.create

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;
		if(req.query.id){
			Attention.subscribe(req, [models[0].id]);
			return Attention.find({id:id}).limit(limit).skip(skip).sort(sort);
		}
		else if(req.query.creator && req.query.app){
			Attention.subscribe(req, models.map(function(obj){return obj.id}));
			return Attention.find({app:req.query.app,creator:req.query.creator}).limit(limit).skip(skip).sort(sort);
		}
		//TODO: MODELS
		//TODO: CREATOR
		else{
			Attention.subscribe(req, models);
			return Attention.find({}).limit(100).skip(skip).sort(sort);
		}
	},

	//MACHINE ATTENTION BY VALIDATION OF SPECIFIC DATA.. 
	//REVIEW THE DATA IN THE BLOCK ...
	//GIVES IT MACHENE ATTENTION.. IE THE MERKLE PROOF (POW)
	create: async function (req) {

		async function updateAssociatedModels(model){
			var protocolTokens = attentionApp.tokens.get(model);
			for (x in model.associatedModels){		
				if (model.app == 'HUMAN'){
					if (model.associatedModels[x].type == 'ACTION'){
						var newModel = await Action.find({id:model.associatedModels[x].id});
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
						var newModel = await Action.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						Transaction.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					}
					if (model.associatedModels[x].type == 'ATTENTION'){
						Attention.find({id:model.associatedModels[x].id});
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
						var newModel = await Attention.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						Attention.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					}
					if (model.associatedModels[x].type == 'APP'){
						var newModel = await App.find({id:model.associatedModels[x].id});
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
						var newModel = await App.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						App.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					}
					if (model.associatedModels[x].type == 'ASSOCIATION'){
						var newModel = await Association.find({id:model.associatedModels[x].id});
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
						var newModel = await Association.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						Association.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					}
					if (model.associatedModels[x].type == 'CONNECTION'){
						var newModel = await Connection.find({id:model.associatedModels[x].id});
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
						var newModel = await Connection.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						Connection.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					}
					if (model.associatedModels[x].type == 'CONTENT'){
						var newModel = await Content.find({id:model.associatedModels[x].id});

						//TODO:BETTER INIT
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}

						//TOKENS (WHAT ABOUT ON ATTENTION MODEL)
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
							//UNIFY ATTENTION MAPPING WITH TOKENS..
							//hmmmmmm
							if (!newModel[0].data.apps.attention[protocolTokens[y]]){newModel[0].data.apps.attention[protocolTokens[y]] = 0}
							newModel[0].data.apps.attention[protocolTokens[y]] = parseInt(newModel[0].data.apps.attention[protocolTokens[y]]) + parseInt(model.amount);

						}

						//GENERAL
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;

						//USERNAME
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;

						var newModel = await Content.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						Content.publish([newModel[0].id], {verb:'update', data: newModel[0]});
						
					}
					if (model.associatedModels[x].type == 'ITEM'){
						var newModel = await Item.find({id:model.associatedModels[x].id});
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
						var newModel = await Item.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						Item.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					}

					//TODO: BALANCES
					if (false && model.associatedModels[x].type == 'MEMBER'){
						var newModel = await User.find({id:model.associatedModels[x].id});
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}
						if (!newModel[0].data.apps.balance){newModel[0].data.apps.balance = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.balance[protocolTokens[y]]){newModel[0].data.apps.balance[protocolTokens[y]] = 0}
							newModel[0].data.apps.balance[protocolTokens[y]] = parseInt(newModel[0].data.apps.balance[protocolTokens[y]]) + parseInt(model.amount);
						}
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
						var newModel = await User.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						User.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					}
					if (model.associatedModels[x].type == 'ORDER'){
						var newModel = await Order.find({id:model.associatedModels[x].id});
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
						var newModel = await Order.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						Order.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					}
					//tokens vs balance
					if (false && model.associatedModels[x].type == 'PROJECT'){
						console.log(model.associatedModels[x])
						var newModel = await Project.find({urlTitle:model.associatedModels[x].id});
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}
						if (!newModel[0].data.apps.balance){newModel[0].data.apps.balance = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.balance[protocolTokens[y]]){newModel[0].data.apps.balance[protocolTokens[y]] = 0}
							newModel[0].data.apps.balance[protocolTokens[y]] = parseInt(newModel[0].data.apps.balance[protocolTokens[y]]) + parseInt(model.amount);
						}
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
						var newModel = await Project.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						Project.publish([newModel[0].id], {verb:'update', data: newModel[0]});		
					}
					if (model.associatedModels[x].type == 'TASK'){
						var newModel = await Task.find({id:model.associatedModels[x].id});
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
						var newModel = await Task.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						Task.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					}
					if (model.associatedModels[x].type == 'TIME'){
						var newModel = await Time.find({id:model.associatedModels[x].id});
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
						var newModel = await Time.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						Time.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					}
					if (model.associatedModels[x].type == 'TRANSACTION'){
						var newModel = await Transaction.find({id:model.associatedModels[x].id})
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
						var newModel = await Transaction.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						Transaction.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					}
					if (model.associatedModels[x].type == 'VALIDATION'){
						var newModel = await Validation.find({id:model.associatedModels[x].id})
						if (!newModel[0].data){newModel[0].data = {apps:{}}}
						if (!newModel[0].data.apps){newModel[0].data.apps = {}}
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
						newModel[0].data.apps.attention.general = newModel[0].data.apps.attention.general + model.amount;
						if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
						newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
						var newModel = await Validation.update({id:newModel[0].id}, {data:newModel[0].data});
						console.log(newModel);
						Validation.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					}
				}
			}
		};

		var model = {
			model: 'ATTENTION',
			app: req.param('app'),
			type: req.param('type'),
			string: req.param('string'),
			amount: req.param('amount'),
			associatedModels: req.param('associatedModels'),
			creator: req.param('creator'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var newAttention = await Attention.create(model);
		var userModel = await User.find({id:newAttention.creator})
		model.creator = userModel[0];
		//console.log('CREATE ATTENTION', model)
		Attention.publish([newAttention.id], {verb:'create', data: newAttention});
		eventApp.create(newAttention);

		//createNotification(model);
		//createValidation(model);

		attentionApp.tokens.create(newAttention);

		updateAssociatedModels(newAttention);

		//TODO: STANDARDIZE USER STATE
		var updatedUser = await User.update({id:userModel[0].id}, {status:newAttention.string});
		return Attention.find({hash:model.hash});		
	},

	tokens:{
		create:function(model){
			//this, self .. 
			var tokens = attentionApp.tokens.get(model);
			//updateAssociatedModels(model, protocolTokens);
		},

		get: function(model){
			var protocolTokens = [
				'CRE8', 
				'CRE8+ATTENTION', 
				'CRE8+ATTENTION+'+model.id,
				//careful creator
				'CRE8+ATTENTION+'+model.creator.username.toUpperCase(),
				'CRE8+ATTENTION+'+model.app,
			];
			var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
			var prefix = 'CRE8+ATTENTION';
			var string = prefix+'+'+hash;
			protocolTokens.push(string);
			return protocolTokens;
		}
	}
};
module.exports = attentionApp;