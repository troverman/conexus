var Q = require('q');

module.exports = {
	
	getSome: function(req, res) {

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
		var model = {
			app: req.param('app'),
			string: req.param('string'),
			amount: req.param('amount'),
			data: req.param('data'),
			associatedModels: req.param('associatedModels'),
			creator: req.param('creator'),
			attention: {general:0},
			reactions: {plus:0, minus:0},
		};

		//console.log('CREATE ATTENTION', model);
		
		Attention.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {

				//console.log('CREATE ATTENTION', model)

				for (x in model.associatedModels){
					
					//DEPRECIATE MOEL TYPE DISTINCTION ?
					if (model.associatedModels[x].type == 'CONTENT'){
						//MACHINE ATTENTION BY VALIDATION OF SPECIFIC DATA.. REVIEW THE DATA IN THE BLOCK ... GIVES IT MACHENE ATTENTION.. IE THE REMKLE PROOF
						if (model.app == 'HUMAN'){
							Content.find({id:model.associatedModels[x].id}).then(function(contentModel){
								//TODO: MULTI D MAP
								if (contentModel[0].attention){
									attentionModel = {
										general:contentModel[0].attention.general + model.amount
									};
								}
								else{attentionModel = {general:0}}

								Content.update({id:contentModel[0].id}, {attention:attentionModel}).then(function(newContentModel){
									//console.log('LET THERE BE ATTENTION', attentionModel);
									Content.publishCreate(newContentModel);
								});
							});
						}
					}

					if (model.associatedModels[x].type == 'TASK'){
						if (model.app == 'HUMAN'){
							Content.find({id:model.associatedModels[x].id}).then(function(taskModel){
								if (taskModel[0].attention){attentionModel = {general:taskModel[0].attention.general + model.amount};}
								else{attentionModel = {general:0}}
								Task.update({id:taskModel[0].id}, {attention:attentionModel}).then(function(newTaskModel){
									//console.log('LET THERE BE ATTENTION', attentionModel);
									Task.publishCreate(newTaskModel);
								});
							});
						}
					}

				}

				res.json(model);
			}
		});
	},

};