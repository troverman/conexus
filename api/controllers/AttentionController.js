//CRE8.ATTENTION
const crypto = require('crypto');
const Q = require('q');

module.exports = {
	
	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET ATTENTION', req.query);

		if(req.query.id){
			Attention.find({id:id}).limit(limit).skip(skip).sort(sort).then(function(models){
				Attention.subscribe(req, [models[0].id]);
				res.json(models[0]);
			});
		}

		else if(req.query.creator && req.query.app){
			Attention.find({app:req.query.app,creator:req.query.creator})
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models) {
				Attention.subscribe(req, models.map(function(obj){return obj.id}));
				res.json(models);
			});
		}

		//TODO: MODELS
		//TODO: CREATOR
		else{
			Attention.find({})
			.limit(100)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Attention.subscribe(req, models);
				res.json(models);
			});
		}
		
	},

	//MACHINE ATTENTION BY VALIDATION OF SPECIFIC DATA.. 
	//REVIEW THE DATA IN THE BLOCK ...
	//GIVES IT MACHENE ATTENTION.. IE THE MERKLE PROOF (POW)
	create: function (req, res) {

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
			updateAssociatedModels(model, protocolTokens);
		};

		function getProtocolTokens(model){
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
		};

		function updateAssociatedModels(model, protocolTokens){
			for (x in model.associatedModels){		
				if (model.app == 'HUMAN'){
					if (model.associatedModels[x].type == 'ACTION'){
						Action.find({id:model.associatedModels[x].id}).then(function(newModel){
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
							Action.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Validation.publish([newModel[0].id], {verb:'update', data: newModel[0]});});
						});
					}
					if (model.associatedModels[x].type == 'ATTENTION'){
						Attention.find({id:model.associatedModels[x].id}).then(function(newModel){
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
							Attention.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Attention.publish([newModel[0].id], {verb:'update', data: newModel[0]});});
						});
					}
					if (model.associatedModels[x].type == 'APP'){
						App.find({id:model.associatedModels[x].id}).then(function(newModel){
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
							App.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){App.publish([newModel[0].id], {verb:'update', data: newModel[0]});});
						});
					}
					if (model.associatedModels[x].type == 'ASSOCIATION'){
						Association.find({id:model.associatedModels[x].id}).then(function(newModel){
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
							Association.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Association.publish([newModel[0].id], {verb:'update', data: newModel[0]});});
						});
					}
					if (model.associatedModels[x].type == 'CONNECTION'){
						Connection.find({id:model.associatedModels[x].id}).then(function(newModel){
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
							Connection.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Connection.publish([newModel[0].id], {verb:'update', data: newModel[0]});});
						});
					}
					if (model.associatedModels[x].type == 'CONTENT'){
						Content.find({id:model.associatedModels[x].id}).then(function(newModel){

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

							Content.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Content.publish([newModel[0].id], {verb:'update', data: newModel[0]});});
						
						});
					}
					if (model.associatedModels[x].type == 'ITEM'){
						Item.find({id:model.associatedModels[x].id}).then(function(newModel){
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
							Item.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Item.publish([newModel[0].id], {verb:'update', data: newModel[0]});});
						});
					}
					if (model.associatedModels[x].type == 'ORDER'){
						Order.find({id:model.associatedModels[x].id}).then(function(newModel){
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
							Order.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Order.publish([newModel[0].id], {verb:'update', data: newModel[0]});});
						});
					}
					//tokens vs balance
					if (model.associatedModels[x].type == 'PROJECT'){
									
					}
					if (model.associatedModels[x].type == 'TASK'){
						Task.find({id:model.associatedModels[x].id}).then(function(newModel){
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
							Task.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Task.publish([newModel[0].id], {verb:'update', data: newModel[0]});});
						});
					}
					if (model.associatedModels[x].type == 'TIME'){
						Time.find({id:model.associatedModels[x].id}).then(function(newModel){
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
							Time.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Time.publish([newModel[0].id], {verb:'update', data: newModel[0]});});
						});
					}
					if (model.associatedModels[x].type == 'TRANSACTION'){
						Transaction.find({id:model.associatedModels[x].id}).then(function(newModel){
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
							Transaction.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Transaction.publish([newModel[0].id], {verb:'update', data: newModel[0]});});
						});
					}
					if (model.associatedModels[x].type == 'VALIDATION'){
						Validation.find({id:model.associatedModels[x].id}).then(function(newModel){
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
							Validation.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Validation.publish([newModel[0].id], {verb:'update', data: newModel[0]});});
						});
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
		
		Attention.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {

				User.find({id:model.creator}).then(function(userModel){
					model.creator = userModel[0];
					//console.log('CREATE ATTENTION', model)
					Attention.publish([model.id], {verb:'create', data: model});
					//createEvent(model);
					//createNotification(model);
					//createValidation(model);
					mintTokens(model);
					//TODO: STANDARDIZE USER STATE
					User.update({id:userModel[0].id}, {status:model.string}).then(function(userModel){})
					res.json(model);
				});
				
			}
		});
	},

};