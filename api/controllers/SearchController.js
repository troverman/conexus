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

			var projectModels = models.map(function(obj){
		        obj.model = 'PROJECT';
		        return obj;
		    });
		    
			Project.watch(req);
			Project.subscribe(req, models);

			Post.find()
			.where({
				or: [
					{content: {contains: searchQuery}},
					{user: {contains: searchQuery}}
				]
			})
			.populate('user')
			.then(function(models) {

				var contentModels = models.map(function(obj){
			        obj.model = 'CONTENT';
			        return obj;
			    });

				var combinedModels = [].concat.apply([], [projectModels, contentModels]);
    			combinedModels = combinedModels.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 

				Post.watch(req);
				Post.subscribe(req, models);
				res.json(combinedModels);

			});
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