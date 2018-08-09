/**
 * SearchController
 */

module.exports = {

	search: function (req, res) {

		var searchQuery = req.param('searchQuery');
		console.log(searchQuery);

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
			Post.find()
			.populate('user')
			//figure out how to search populated records -- fix this callback nesting
			.where({
				or: [
					{content: {contains: searchQuery}},
					{user: {contains: searchQuery}}
				]
			})
			.then(function(models) {
				var combinedModels = projectModels.concat(models);
				Post.watch(req);
				Post.subscribe(req, models);
				res.json(combinedModels);
			})
		});
	},

	searchAll: function (req, res) {

		Project.find({})
		.then(function(models) {
			Project.subscribe(req, models);
			res.json(models);
		});

	}
};