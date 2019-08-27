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

		if(req.query.creator && req.query.app){
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

		//TODO UPDATE COUNT IN DATA.APPS.ATTENTION
		
		Attention.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {

				//console.log('CREATE ATTENTION', model)

				for (x in model.associatedModels){
					
					//DEPRECIATE MOEL TYPE DISTINCTION ?
					//MACHINE ATTENTION BY VALIDATION OF SPECIFIC DATA.. REVIEW THE DATA IN THE BLOCK ... GIVES IT MACHENE ATTENTION.. IE THE REMKLE PROOF

					//TODO: MULTI D MAP
					//TODO: STORE IN DATA LAYER OF MODEL
					if (model.app == 'HUMAN'){

						if (model.associatedModels[x].type == 'ASSOCIATION'){
							Association.find({id:model.associatedModels[x].id}).then(function(associationModel){
								if (associationModel[0].attention){attentionModel = {general:associationModel[0].attention.general + model.amount};}
								else{attentionModel = {general:0}}
								Association.update({id:associationModel[0].id}, {attention:attentionModel}).then(function(newValidationModel){Association.publishCreate(newValidationModel);});
							});
						}
						
						if (model.associatedModels[x].type == 'CONTENT'){
							Content.find({id:model.associatedModels[x].id}).then(function(contentModel){
								if (contentModel[0].attention){attentionModel = {general:contentModel[0].attention.general + model.amount};}
								else{attentionModel = {general:0}}
								Content.update({id:contentModel[0].id}, {attention:attentionModel}).then(function(newContentModel){Content.publishCreate(newContentModel);});
							});
						}

						if (model.associatedModels[x].type == 'ITEM'){
							Item.find({id:model.associatedModels[x].id}).then(function(itemModel){
								if (itemModel[0].attention){attentionModel = {general:itemModel[0].attention.general + model.amount};}
								else{attentionModel = {general:0}}
								Item.update({id:itemModel[0].id}, {attention:attentionModel}).then(function(newItemModel){Item.publishCreate(newItemModel);});
							});
						}

						if (model.associatedModels[x].type == 'ORDER'){
							Order.find({id:model.associatedModels[x].id}).then(function(orderModel){
								if (orderModel[0].attention){attentionModel = {general:orderModel[0].attention.general + model.amount};}
								else{attentionModel = {general:0}}
								Order.update({id:orderModel[0].id}, {attention:attentionModel}).then(function(newOrderModel){Order.publishCreate(newOrderModel);});
							});
						}

						if (model.associatedModels[x].type == 'TASK'){
							Task.find({id:model.associatedModels[x].id}).then(function(taskModel){
								if (taskModel[0].attention){attentionModel = {general:taskModel[0].attention.general + model.amount};}
								else{attentionModel = {general:0}}
								Task.update({id:taskModel[0].id}, {attention:attentionModel}).then(function(newTaskModel){Task.publishCreate(newTaskModel);});
							});
						}

						if (model.associatedModels[x].type == 'TIME'){
							Time.find({id:model.associatedModels[x].id}).then(function(timeModel){
								if (timeModel[0].attention){attentionModel = {general:timeModel[0].attention.general + model.amount};}
								else{attentionModel = {general:0}}
								Time.update({id:timeModel[0].id}, {attention:attentionModel}).then(function(newTimeModel){Time.publishCreate(newTimeModel);});
							});
						}

						if (model.associatedModels[x].type == 'TRANSACTION'){
							Transaction.find({id:model.associatedModels[x].id}).then(function(transactionModel){
								if (transactionModel[0].attention){attentionModel = {general:transactionModel[0].attention.general + model.amount};}
								else{attentionModel = {general:0}}
								Transaction.update({id:transactionModel[0].id}, {attention:attentionModel}).then(function(newTransactionModel){Transaction.publishCreate(newTransactionModel);});
							});
						}

						if (model.associatedModels[x].type == 'VALIDATION'){
							Validation.find({id:model.associatedModels[x].id}).then(function(validationModel){
								if (validationModel[0].attention){attentionModel = {general:validationModel[0].attention.general + model.amount};}
								else{attentionModel = {general:0}}
								Validation.update({id:validationModel[0].id}, {attention:attentionModel}).then(function(newValidationModel){Validation.publishCreate(newValidationModel);});
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