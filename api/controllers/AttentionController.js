var Q = require('q');

module.exports = {
	
	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET ATTENTION', req.query);

		Attention.watch(req);

		if(req.query.id){
			Attention.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models) {
				res.json(models[0]);
			});
		}

		else if(req.query.creator && req.query.app){
			Attention.find({app:req.query.app,creator:req.query.creator})
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models) {
				res.json(models);
			});
		}

		//TODO: MODELS//

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

	//MACHINE ATTENTION BY VALIDATION OF SPECIFIC DATA.. REVIEW THE DATA IN THE BLOCK ... GIVES IT MACHENE ATTENTION.. IE THE MERKLE PROOF (POW)
	create: function (req, res) {

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
			//content attention
		};

		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+ATTENTION']//, 'CRE8+ATTENTION+'+model.user.id];
			return protocolTokens;
		};

		var model = {
			model: 'ATTENTION',
			//app vs type vs :o
			app: req.param('app'),
			string: req.param('string'),
			amount: req.param('amount'),
			data: req.param('data'),
			associatedModels: req.param('associatedModels'),
			creator: req.param('creator'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		
		Attention.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {

				//console.log('CREATE ATTENTION', model)

				for (x in model.associatedModels){
					
					//DEPRECIATE MOEL TYPE DISTINCTION ?
					//MACHINE ATTENTION BY VALIDATION OF SPECIFIC DATA.. REVIEW THE DATA IN THE BLOCK ... GIVES IT MACHENE ATTENTION.. IE THE REMKLE PROOF
					//TODO: MULTI D MAP
					if (model.app == 'HUMAN'){

						if (model.associatedModels[x].type == 'ACTION'){
							Action.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data){newModel[0].data = {apps:{}}}
								if (!newModel[0].data.apps){newModel[0].data.apps = {}}
								if (newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:newModel[0].data.apps.attention.general + model.amount};}
								else{newModel[0].data.apps.attention = {general:0}}
								Action.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Action.publishCreate(newModel);});
							});
						}

						if (model.associatedModels[x].type == 'ATTENTION'){
							Attention.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data){newModel[0].data = {apps:{}}}
								if (!newModel[0].data.apps){newModel[0].data.apps = {}}
								if (newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:newModel[0].data.apps.attention.general + model.amount};}
								else{newModel[0].data.apps.attention = {general:0}}
								Attention.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Attention.publishCreate(newModel);});
							});
						}

						if (model.associatedModels[x].type == 'APP'){
							App.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data){newModel[0].data = {apps:{}}}
								if (!newModel[0].data.apps){newModel[0].data.apps = {}}
								if (newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:newModel[0].data.apps.attention.general + model.amount};}
								else{newModel[0].data.apps.attention = {general:0}}
								App.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){App.publishCreate(newModel);});
							});
						}

						if (model.associatedModels[x].type == 'ASSOCIATION'){
							Association.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data){newModel[0].data = {apps:{}}}
								if (!newModel[0].data.apps){newModel[0].data.apps = {}}
								if (newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:newModel[0].data.apps.attention.general + model.amount};}
								else{newModel[0].data.apps.attention = {general:0}}
								Association.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Association.publishCreate(newModel);});
							});
						}

						if (model.associatedModels[x].type == 'CONTENT'){
							Content.find({id:model.associatedModels[x].id}).then(function(newModel){


								//DIMENSIONAL ATTENTION
								//NEED TO PAY ATTENTION!


								if (!newModel[0].data){newModel[0].data = {apps:{}}}
								if (!newModel[0].data.apps){newModel[0].data.apps = {}}

								if (newModel[0].data.apps.attention){

									newModel[0].data.apps.attention = {
										general:newModel[0].data.apps.attention.general + model.amount
									};

									if (newModel[0].data.apps.attention[model.creator]){
										newModel[0].data.apps.attention[model.creator] = newModel[0].data.apps.attention[model.creator] + model.amount;
									}
									
									else{
										newModel[0].data.apps.attention[model.creator] = model.amount;
									}

								}
								
								else{newModel[0].data.apps.attention = {general:0}}
								Content.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Content.publishCreate(newModel);});




							});
						}

						if (model.associatedModels[x].type == 'ITEM'){
							Item.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data){newModel[0].data = {apps:{}}}
								if (!newModel[0].data.apps){newModel[0].data.apps = {}}
								if (newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:newModel[0].data.apps.attention.general + model.amount};}
								else{newModel[0].data.apps.attention = {general:0}}
								Item.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Item.publishCreate(newModel);});
							});
						}

						if (model.associatedModels[x].type == 'ORDER'){
							Order.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data){newModel[0].data = {apps:{}}}
								if (!newModel[0].data.apps){newModel[0].data.apps = {}}
								if (newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:newModel[0].data.apps.attention.general + model.amount};}
								else{newModel[0].data.apps.attention = {general:0}}
								Order.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Order.publishCreate(newModel);});
							});
						}

						if (model.associatedModels[x].type == 'TASK'){
							Task.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data){newModel[0].data = {apps:{}}}
								if (!newModel[0].data.apps){newModel[0].data.apps = {}}
								if (newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:newModel[0].data.apps.attention.general + model.amount};}
								else{newModel[0].data.apps.attention = {general:0}}
								Task.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Task.publishCreate(newModel);});
							});
						}

						if (model.associatedModels[x].type == 'TIME'){
							Time.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data){newModel[0].data = {apps:{}}}
								if (!newModel[0].data.apps){newModel[0].data.apps = {}}
								if (newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:newModel[0].data.apps.attention.general + model.amount};}
								else{newModel[0].data.apps.attention = {general:0}}
								Time.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Time.publishCreate(newModel);});
							});
						}

						if (model.associatedModels[x].type == 'TRANSACTION'){
							Transaction.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data){newModel[0].data = {apps:{}}}
								if (!newModel[0].data.apps){newModel[0].data.apps = {}}
								if (newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:newModel[0].data.apps.attention.general + model.amount};}
								else{newModel[0].data.apps.attention = {general:0}}
								Transaction.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Transaction.publishCreate(newModel);});
							});
						}

						if (model.associatedModels[x].type == 'VALIDATION'){
							Validation.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data){newModel[0].data = {apps:{}}}
								if (!newModel[0].data.apps){newModel[0].data.apps = {}}
								if (newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:newModel[0].data.apps.attention.general + model.amount};}
								else{newModel[0].data.apps.attention = {general:0}}
								Validation.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){Validation.publishCreate(newModel);});
							});
						}
					
					}

				}

				//mintTokens(model)

				res.json(model);
			}
		});
	},

};