/**
 * SearchController
 */

module.exports = {

	//YIKES
	search: function (req, res) {
		var searchQuery = req.param('searchQuery');
		console.log(searchQuery);

		//PROJECT | POST | TASK | USER
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
			//TODO UNIFY CONTENT MODEL
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

				//TODO UNIFY CONTENT MODEL
				Task.find()
				.where({
					or: [
						{content: {contains: searchQuery}},
						{title: {contains: searchQuery}}
					]
				})
				.populate('user')
				.then(function(models) {
					var taskModels = models.map(function(obj){
				        obj.model = 'TASK';
				        return obj;
				    });
				    var superCombinedModels = [].concat.apply([], [taskModels, combinedModels]);
    				superCombinedModels = superCombinedModels.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    				Task.watch(req);
					Task.subscribe(req, models);
					User.find()
					.where({
						or: [
							{username: {contains: searchQuery}},
						]
					})
					.then(function(models) {
						var userModels = models.map(function(obj){
					        obj.model = 'MEMBER';
					        return obj;
					    });
					    var superSuperCombinedModels = [].concat.apply([], [userModels, superCombinedModels]);
    					superSuperCombinedModels = superSuperCombinedModels.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
						User.watch(req);
						User.subscribe(req, models);
						console.log(superSuperCombinedModels)
						res.json(superSuperCombinedModels);
					});
				});
			});
		});
	},

	searchAll: function (req, res) {},

	//MM
	searchMarketsAndProjects: function (req, res) {},

	//MM
	searchTags: function (req, res) {},
	
};