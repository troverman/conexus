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


//BY THE 7TH... COMPLEX QUERY. ASSOCIATION 
module.exports = {

	//CAN HANDLE ALL API CALLS..
	search: function (req, res) {

		if (!req.query.query){

			//RENDER QUERY
			var querySet = Object.values(req.query);
			for (x in querySet){querySet[x] = JSON.parse(querySet[x])}

			//TODO
			var mongoQuery = {};
			mongoQuery.$or = [];
			function parseQueryMongo(querySet){

				console.log('QUERY LEGNTH', querySet.length);

				for (x in querySet){
					var query = querySet[x];

					//LAYER AND / OR LOGIC.. 
					if (query.chain){
						if (query.chain == 'AND'){
							//mongoQuery.$and = [];
						}
						if (query.chain == 'OR'){
							//mongoQuery.$or = [];
						}
					}

					if (query.filter){parseQuery(query.filter)}

					if (!query.filter){

						//if different model and AND == null
						//console.log(query.model, query.modelParam, query.query, query.queryParam);

						var mongoObj = {};
						var queryDecoration = '';
						if (query.queryParam == 'contains'){
							queryDecoration = new RegExp(".*" + query.query + ".*i");
						}

						if (query.queryParam == 'equals'){
							queryDecoration = query.query;
						}
						console.log(query.modelParam);
						mongoObj[query.modelParam] = queryDecoration;
						mongoQuery.$or.push(mongoObj);
						console.log(mongoQuery);
					}

				}

				//cb(mongoQuery);
			};

			function parseQueryOrbit(querySet){}

			parseQueryMongo(querySet);

			//parseQuery(querySet, function(mongoQuery){
			
			//REDUCE MODELS
			//REDUCE MODEL PARAMS
			//REDUCE TO DISCRETE AND OR

			Project.native(function(err, project) {
				var query = {
					$or: [
						{"title": /.*starbuck.*/i},
						{"tags": /.*coffee.*/i},
					]
				};
				project.find(mongoQuery)
				.limit(200)
				.skip(0)
				.toArray(function (err, models) {
					if (models){
						console.log(models.length)
						models = models.map(function(obj){obj.id = obj._id; obj.model='PROJECT'; return obj;});
					}
					res.json(models);
				});
			});

			//});

		}

		else{

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
							{title: {contains: searchQuery}},
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

								//LOL WOT --> HEHEHEHEHEH
								Item.find()
								.where({
									or: [
										{content: {contains: searchQuery}},
										{title: {contains: searchQuery}},
										{user: {contains: searchQuery}}
									]
								})
								.then(function(models) {
									var itemModels = models.map(function(obj){
								        obj.model = 'ITEM';
								        return obj;
								    });
								    var superSuperSuperCombinedModels = [].concat.apply([], [itemModels, superSuperCombinedModels]);
		    						superSuperSuperCombinedModels = superSuperSuperCombinedModels.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
									Item.watch(req);
									Item.subscribe(req, models);
									//console.log(superSuperSuperCombinedModels)
									res.json(superSuperSuperCombinedModels);
								});
							});
						});
					});
				});
			}
		}
	}
};