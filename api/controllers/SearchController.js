/**
 * SearchController

	var query = [{
	    filter:[{
	        model:'Association, Task, Project',
	        modelParam:'association, id, location, query, tag, ...',
	        query:'query',
	        association:{
	            population:'boolean',
	            depth:'integer',
	        },
	        params:{
	            limit:'integer',
	            skip:'integer',
	            sort:'modelParam sortParam',
	        },
	        chain:'logic [\'AND\',\'OR\']',
	    }],
	    params:{
	        limit:'integer',
	        skip:'integer',
	        sort:'modelParam sortParam',
	    },
	    chain:'logic [\'AND\',\'OR\']'
	}];

*/

module.exports = {

	//CAN HANDLE ALL API CALLS..
	search: function (req, res) {


		//TODO: COMPLEX QUERY
		console.log(req.query);
		var querySet = JSON.parse(JSON.stringify(req.query));
		//console.log(query);

		//REDUCTION LOGIC

		for (x in querySet){

			var query = JSON.parse(querySet[x]);

			//console.log(query.params);

			console.log('query.filter')

			if (query.chain){
				console.log(query.chain);
			}


			for (y in query.filter){

				console.log(query.filter[y])	

				//console.log(query.filter[y].association)
				//console.log(query.filter[y].params)

				if (query.filter[y].chain){
					console.log(query.filter[y].chain)
				}

				console.log(query.filter[y].params)

			}

		}

	



		var searchQuery = req.query.query;
		var tag = req.query.tag;
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		if (req.query.model = 'CONTENT'){}
		if (req.query.model = 'ITEM'){}
		if (req.query.model = 'MEMBER'){}
		if (req.query.model = 'ORDER'){}

		//TAKE A BREAK
		if (req.query.model == 'PROJECT'){

			var query = JSON.parse(JSON.stringify(req.query.query));
			//console.log(query);

			query.map(function(obj){
				obj = JSON.parse(JSON.stringify(obj))
			});

			//console.log(query);

			Project.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				var projectModels = models.map(function(obj){
			        obj.model = 'PROJECT';
			        return obj;
			    });
			    console.log(projectModels)
				Project.subscribe(req, projectModels);
				res.json(projectModels);
			});

		}

		if (req.query.model == 'TASK'){}
		if (req.query.model == 'TOKEN'){}
		if (req.query.model == 'TRANSACTION'){}
		if (req.query.model == 'TIME'){}

		//YIKES
		//OLD, COMBO
		//PROJECT | CONTENT | TASK | USER
		else{
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
				Content.find()
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
					Content.watch(req);
					Content.subscribe(req, models);

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
		}

	},
	
};