/**
 * EntryController
 */

module.exports = {

	getSome: function(req, res) {
		
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		
	},

	getOne: function(req, res) {
		Entry.getOne(req.param('id'))
		.spread(function(model) {
			Stream.subscribe(req, model);
			res.json(model);
		});
	},

	create: function (req, res) {
		var model = {
			
		};
		Entry.create(model)
		.exec(function(err, task) {
			if (err) {return console.log(err);}
			else {
				Stream.publishCreate(task);
				res.json(task);
			}
		});
	},

	update: function (req, res) {},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		Entry.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Entry.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Entry.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

