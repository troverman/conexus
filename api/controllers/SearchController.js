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

	//COMPLEX QUERY :)
	getFeed: function (req, res) {

		//data models are contined within apps 
			//simplify to data ?? hm

		//DEPRECIATE
		//WEBSOCKET..
		Action.watch(req);
		App.watch(req);
		Content.watch(req);
		Item.watch(req);
		User.watch(req); //MEMBER
		Project.watch(req);
		Task.watch(req);
		Time.watch(req);
		Transaction.watch(req);
		Validation.watch(req);

		var searchQuery = JSON.parse(req.query.query);

		console.log(searchQuery);

		//TODO.. ALL MODELS ARE APP DEFINED. 
			//APP {protocol, data}
				//APP, DATA
					//APP (set {protocol, data} - bundle)
						//APP DEFINES (DATA MODEL)
						//HMMM
						//data.find({app:'PROJECT', model:'PROJECT'})


		var promises = [];
		for (x in searchQuery){
			if (searchQuery[x].model =='ACTION'){promises.push(Action.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){return {action:models}}))}
			if (searchQuery[x].model.includes("APP")){promises.push(App.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){return {app:models}}))}
			if (searchQuery[x].model =='CONTENT'){promises.push(Content.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){return {content:models}}))}
			if (searchQuery[x].model =='ITEM'){promises.push(Item.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){return {item:models}}))}
			if (searchQuery[x].model =='MEMBER'){promises.push(User.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){return {member:models}}))}
			if (searchQuery[x].model =='PROJECT'){promises.push(Project.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){return {project:models}}))}
			if (searchQuery[x].model =='TASK'){promises.push(Task.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){return {task:models}}))}
			if (searchQuery[x].model =='TIME'){promises.push(Time.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){return {time:models}}))}
			if (searchQuery[x].model =='TRANSACTION'){promises.push(Transaction.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){return {transaction:models}}))}
			if (searchQuery[x].model =='VALIDATION'){promises.push(Validation.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){return {validation:models}}))}
		}
		
		Q.all(promises).then((populatedModels)=>{

			console.log('POPULATED !', populatedModels.length);

			populatedModels = populatedModels.map(function(obj){
				var returnObj = {};
				if (obj.action){returnObj = obj.action.map(function(anObj){anObj.model = 'ACTION'; return anObj;}); }
				if (obj.app){returnObj = obj.app.map(function(anObj){anObj.model = 'APP'; return anObj;}); }
				if (obj.content){
					returnObj = obj.content.map(function(anObj){
						if (anObj.tags){anObj.tags = anObj.tags.split(',')}
						anObj.model = 'CONTENT';
						return anObj;
					}); 
				}
				if (obj.item){
					returnObj = obj.item.map(function(anObj){
						if (anObj.tags){anObj.tags = anObj.tags.split(',')}
						anObj.model = 'ITEM';
						return anObj;
					}); 
				}
				if (obj.member){
					returnObj = obj.member.map(function(anObj){
						anObj.model = 'MEMBER';
						return anObj;
					}); 
				}
				if (obj.project){returnObj = obj.project.map(function(anObj){anObj.model = 'PROJECT'; return anObj;}); }
				if (obj.task){
					returnObj = obj.task.map(function(anObj){
						if (anObj.tags){anObj.tags = anObj.tags.split(',')}
						anObj.model = 'TASK';
						return anObj;
					}); 
				}
				if (obj.time){
					returnObj = obj.time.map(function(anObj){
						if (anObj.tags){anObj.tags = anObj.tags.split(',')}
						anObj.model = 'TIME';
						return anObj;	
					}); 
				}
				if (obj.transaction){
					returnObj = obj.transaction.map(function(anObj){
						if (anObj.tags){anObj.tags = anObj.tags.split(',')}
						anObj.model = 'TRANSACTION';
						return anObj;
					}); 
				}
				if (obj.validation){returnObj = obj.validation.map(function(anObj){anObj.model = 'VALIDATION'; return anObj;}); }
				console.log(returnObj)
				return returnObj;
			});

		    var activity = [].concat.apply([], populatedModels);
		    activity = activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
		    activity = activity.slice(0,100);
		    console.log('length!', activity.length);

		    //USER PROMISES
		    var userPromises = [];
		    for (x in activity){userPromises.push(User.find({id:activity[x].user}))}
    		Q.all(userPromises).then((populatedUserModels)=>{
    			console.log('made it')
    			for (x in activity){activity[x].user = populatedUserModels[x][0]}
				res.json(activity);
    		});

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