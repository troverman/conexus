/**
 * SearchController
 */

module.exports = {

	search: function (req, res) {
		var searchQuery = req.param('searchQuery');
		sails.log(searchQuery);
		Project.find()
		.where({
			or: [
				{title: {contains: searchQuery}},
				{urlTitle: {contains: searchQuery}},
			]
		})
		.then(function(models) {
			var projectModels = models;
			Project.watch(req);
			Project.subscribe(req, models);
			Message.find()
			.populate('user')
			//figure out how to search populated records -- fix this callback nesting
			.where({
				or: [
					{title: {contains: searchQuery}},
					{user: {contains: searchQuery}}
				]
			})
			.then(function(models) {
				var combinedModels = projectModels.concat(models);
				Message.watch(req);
				Message.subscribe(req, models);
				res.json(combinedModels);
			})
		});
	},

	searchAll: function (req, res) {

		Project.getAll()
		.spread(function(models) {
			Project.subscribe(req, models);
			res.json(models);
		});

	}
};