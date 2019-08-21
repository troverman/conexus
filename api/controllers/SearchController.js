/**
 * SearchController
*/
var Q = require('q');

module.exports = {

	//CAN HANDLE ALL API CALLS..
	search: function (req, res) {

		console.log(req._sails)

		if (!req.query.query){

			function parseQueryMongo(querySet){};
			function parseQueryOrbit(querySet){};
	
			function getSome(model){	
				var deferred = Q.defer();
				if (model.dataModel = 'PROJECT'){
					Project.native(function(err, project) {
						project.find(model.query).limit(model.limit).skip(model.skip)
						.toArray(function (err, models) {
							if (models){
								models = models.map(function(obj){obj.id = obj._id; obj.model='PROJECT'; return obj;});
								deferred.resolve(models)
							}
							else{deferred.resolve([])}
						});
					});
					return deferred.promise;
				}
			};

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
	},

	getFeed: function (req, res) {

		var searchQuery = req.query.query;

		var promises = [];
		for (x in searchQuery){
			if (query.model =='CONTENT'){}
			if (query.model =='MEMBER'){}
			if (query.model =='ITEM'){}
			if (query.model =='TASK'){}
			if (query.model =='PROJECT'){}
		}

		Q.all(promises).then((populatedModels)=>{

			res.json(transactionModel);

		});



	},

	getDiscover: function (req, res) {




	},

	//TODO: QUERY BUILD ...
	//GET ACTIVITY BASED ON FOLLOWERS
	//GET ACTIVITY BASED ON PROJECTS
	//GET ACTIVITY BASED ON [CUSTOM]
	//ACTIVITY QUERY AS ONE LOOKUP --> REFACTOR

	//GET COMPLEX FILTER
	workingSearch: function(req, res){

		db.collection.aggregate([
			{ 
				"$limit": 1 
			},
			{ 
				"$facet": {
					"c1": [
						{ 
							"$lookup": {
								"from": Users.collection.name,
								"pipeline": [
									{ 
										"$match": { 
											"first_name": "your_search_data" 
										} 
									}
								],
								"as": "collection1"
							}
						}
					],
					"c2": [
						{ 
							"$lookup": {
								"from": State.collection.name,
								"pipeline": [
									{ 
										"$match": { 
											"name": "your_search_data" 
										} 
									}
								],
								"as": "collection2"
							}
						}
					],
					"c3": [
						{
							 "$lookup": {
								"from": State.collection.name,
								"pipeline": [
									{ 
										"$match": { 
											"name": "your_search_data" 
										}
									 }
								],
								"as": "collection3"
							}
						}
					]
				}
			},
			{ 
				"$project": {
					"data": {
						"$concatArrays": [ "$c1", "$c2", "$c3" ]
					}
				}
			},
			{
				"$unwind": "$data" 
			},
			{ 
				"$replaceRoot": { 
					"newRoot": "$data" 
				}
			}
		]);

	},


};