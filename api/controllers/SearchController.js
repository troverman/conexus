//CRE8.SEARCH
const Q = require('q');

function getAssociations(model){
	var deferred = Q.defer();
	Association.getDatastore().manager.collection('association')
	.find({$and : [{"associatedModels.id": {$in:[model.id]}}]}).limit(1000).skip(0).sort({'createdAt':-1})
	.toArray(function (err, associationModels) {
		if (associationModels.length > 0){
			associationModels.map(function(obj){obj.id=obj._id; return obj});
			model.associationModels = associationModels;
			model.context = {};
			var promises = [];
			for (x in model.associationModels){
				for (y in associationModels[x].associatedModels){
					if (associationModels[x].associatedModels[y].type=='ACTION'){promises.push(Action.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
					if (associationModels[x].associatedModels[y].type=='APP'){promises.push(App.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
					if (associationModels[x].associatedModels[y].type=='ATTENTION'){promises.push(Attention.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
					if (associationModels[x].associatedModels[y].type=='CONTENT'){promises.push(Content.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
					if (associationModels[x].associatedModels[y].type=='ITEM'){promises.push(Item.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
					if (associationModels[x].associatedModels[y].type=='MEMBER'){promises.push(User.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
					if (associationModels[x].associatedModels[y].type=='PROJECT'){promises.push(Project.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
					if (associationModels[x].associatedModels[y].type=='TASK'){promises.push(Task.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
					if (associationModels[x].associatedModels[y].type=='TIME'){promises.push(Time.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
					if (associationModels[x].associatedModels[y].type=='TRANSACTION'){promises.push(Transaction.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
					if (associationModels[x].associatedModels[y].type=='VALIDATION'){promises.push(Validation.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
				}
				//DEFINED BY CONNECTION
				if (model.associationModels[x].context){
					for (y in Object.keys(model.associationModels[x].context)){
						var context = Object.keys(model.associationModels[x].context)[y].toString();
						if(!model.context[context.toString()]){model.context[context.toString()] = model.associationModels[x].context[context.toString()];}
						else{model.context[context.toString()] = model.context[context.toString()] + model.associationModels[x].context[context.toString()];}
					}
				}
			}
			Q.all(promises).then((populatedModels)=>{
				var index = -1 
				for (x in model.associationModels){
					for (y in associationModels[x].associatedModels){
						index++;
						model.associationModels[x].associatedModels[y].data = populatedModels[index];
					}
				}
				deferred.resolve(model);
			});
		}
		else{deferred.resolve(model);}
	});
	return deferred.promise;
};

//RATING: SILVER
var query = [{
    "filter": [
        {
            "model": "Association, Task, Project",
            "modelParam": "association, id, location, query, tag, ...",
            "query": "query",
            "association": {
                "population": "boolean",
                "depth": "integer"
            },
            "params": {
                "limit": "integer",
                "skip": "integer",
                "sort": "modelParam sortParam"
            },
            "chain": "logic ['AND','OR']"
        }
    ],
    "params": {
        "limit": "integer",
        "skip": "integer",
        "sort": "modelParam sortParam"
    },
    "chain": "logic ['AND','OR']"
}];

//TODO.. ALL MODELS ARE APP DEFINED
	//data models are contined within apps 
	//simplify to data 

	//APP {protocol, data}
		//APP, DATA
			//APP (set {protocol, data} - bundle)
				//APP DEFINES (DATA MODEL)
				//data.find({app:'PROJECT', model:'PROJECT'})

//TODO: QUERY BUILD ... / DISCOVER
//GET ACTIVITY BASED ON FOLLOWERS
//GET ACTIVITY BASED ON PROJECTS
//GET ACTIVITY BASED ON [CUSTOM]
//ACTIVITY QUERY AS ONE LOOKUP --> REFACTOR

module.exports = {

	//CAN HANDLE ALL API CALLS..
	//IF APP/ MODEL PARAM.. 
		//ELSE ALL APPS YOU HAVE CONNECTIED TO PEER / YOUR TRUTH 
			//CAN SPECIFIC TRUTH PARAMS
	get: function (req, res) {

		if (req.query){

			//<< SO MUCH ABSTRACTION >> 

			//PARSE QUERY
			var query = JSON.parse(req.query);
			var documentQuery = mongoApp.parseQuery(query);

			//DATA - && EVENT MERGE

			//TODO: CONNECT TO ''''''''TRIE'''''''' ~ BLOCK MESH 
				//FOR VALIDATION 
					//BUILD DOCUMENT DB IN PEER

					//ON CONECTED PEER EVENT
					//ON EVENT ... IS THIS VALID?
										//FROM WHO'S CONTEXT - IN THE EVENT YOU NEED TO PASS YOUR POINT IN HISTORY (LAST (RELATIVE) VALID ROOT)
												//MESH '''DOT''' PRODUCT

						//YEAH? GIMMIE SOME REPUTATION
							//FROM ALL THE FUNCTIONS I RAN.
								//CAN BE VALIDATED --- FOLLOWS CONNECTION - ASSOCIATION MODEL

								//^^ CREATES YOUR TRUTH (CHAIN - MESH - DATA LATTICE) ||||| AND THIS IS SHARED //--my events
																								// || META FUNCTION TO CREATE OVERLAY (STILL SUBJ) -- SHARED HISTORY
																									//--get events
									//YEAP THIS IS WHY YOURE MINTING ''''YOUR'''' CONTEXT TOKEN
										//NO OBJECTIVE TRUTH TRULY

								//machine attention is inherently self defined
								//homermorphic network 


			//look for has of data... ie id

			//reduce all to events

			Event.getDatastore().manager.collection('event')
			.find(documentQuery)
			.limit(1000)
			.skip(0)
			.sort({'createdAt':-1})
			.toArray(function (err, associationModels) {

			});

			//vernacular, let chain = truth
			//listen to blocks (as event bundle)
				//with context
					//if traversal is good add to subjective truth
						//with events from validation
						//always ingesting and validating my personal truth
							//uncle?

		}


	},

	search: async function (req, res) {

		if (req.query.query){

			var searchQuery = req.query.query;
			var tag = req.query.tag;
			var limit = req.query.limit;
			var skip = req.query.skip;
			var sort = req.query.sort;

			//APP DEFINED --> STRING CALL
		
			//TAKE A BREAK
			if (req.query.model == 'PROJECT'){
				var query = JSON.parse(JSON.stringify(req.query.query));
				query.map(function(obj){obj = JSON.parse(JSON.stringify(obj))});
				var projectModels = await Project.find({tags:{contains: tag}}).limit(limit).skip(skip).sort(sort);
				projectModels = models.map(function(obj){obj.model = 'PROJECT';return obj;});
				Project.subscribe(req, projectModels);
				res.json(projectModels);
			}

			//TODO: EVENTS . . .
			else{

				var projectModels = await Project.find().where({or: [{title: {contains: searchQuery}}, {urlTitle: {contains: searchQuery}}]})
				projectModels = projectModels.map(function(obj){obj.model = 'PROJECT'; return obj;});
				Project.subscribe(req, projectModels);

				var contentModels = await Content.find().where({or: [{title: {contains: searchQuery}}, {content: {contains: searchQuery}}, {user: {contains: searchQuery}}]}).populate('user')
				contentModels = contentModels.map(function(obj){obj.model = 'CONTENT';return obj;});
				Content.subscribe(req, contentModels);

				var taskModels = await Task.find().where({or: [{content: {contains: searchQuery}}, {title: {contains: searchQuery}}]}).populate('user')
				taskModels = taskModels.map(function(obj){obj.model = 'TASK';return obj;});
				Task.subscribe(req, taskModels);

				var userModels = await User.find().where({or: [{username: {contains: searchQuery}}]});
				userModels = userModels.map(function(obj){obj.model = 'MEMBER';return obj;});
				User.subscribe(req, userModels);

				var itemModels = await Item.find().where({or: [{content: {contains: searchQuery}}, {title: {contains: searchQuery}}, {user: {contains: searchQuery}}]})
				itemModels = itemModels.map(function(obj){obj.model = 'ITEM';return obj;});
				Item.subscribe(req, itemModels);

				var combinedModels = [].concat.apply([], [projectModels, contentModels, taskModels, userModels, itemModels]);
    			combinedModels = combinedModels.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 

				res.json(combinedModels);

			}
		}
	},

	//TODO: BASED ON APPS. . .
	getFeed: async function (req, res) {

	    console.log('FEED QUERY START');

		var searchQuery = JSON.parse(req.query.query);
		console.log(searchQuery);
		var promises = [];
		for (x in searchQuery){
			if (searchQuery[x].model =='ACTION'){promises.push(Action.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){Action.subscribe(req, models.map((obj)=>obj.id));return {action:models}}))}
			if (searchQuery[x].model.includes("APP")){promises.push(App.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){App.subscribe(req, models.map((obj)=>obj.id));return {app:models}}))}
			if (searchQuery[x].model =='CONTENT'){promises.push(Content.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){Content.subscribe(req, models.map((obj)=>obj.id));return {content:models}}))}
			if (searchQuery[x].model =='ITEM'){promises.push(Item.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){Item.subscribe(req, models.map((obj)=>obj.id));return {item:models}}))}
			if (searchQuery[x].model =='MEMBER'){promises.push(User.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){User.subscribe(req, models.map((obj)=>obj.id));return {member:models}}))}
			if (searchQuery[x].model =='PROJECT'){promises.push(Project.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){Project.subscribe(req, models.map((obj)=>obj.id));return {project:models}}))}
			if (searchQuery[x].model =='TASK'){promises.push(Task.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){Task.subscribe(req, models.map((obj)=>obj.id));return {task:models}}))}
			if (searchQuery[x].model =='TIME'){promises.push(Time.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){Time.subscribe(req, models.map((obj)=>obj.id));return {time:models}}))}
			if (searchQuery[x].model =='TRANSACTION'){promises.push(Transaction.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){Transaction.subscribe(req, models.map((obj)=>obj.id));return {transaction:models}}))}
			if (searchQuery[x].model =='VALIDATION'){promises.push(Validation.find().limit(10).skip(0).sort('createdAt DESC').then(function(models){Validation.subscribe(req, models.map((obj)=>obj.id));return {validation:models}}))}
		}
		
		var populatedModels = await Q.all(promises);
		populatedModels = populatedModels.map(function(obj){
			var returnObj = {};
			if (obj.action){returnObj = obj.action.map(function(anObj){anObj.model = 'ACTION'; return anObj;});}
			if (obj.app){returnObj = obj.app.map(function(anObj){anObj.model = 'APP'; return anObj;});}
			if (obj.content){returnObj = obj.content.map(function(anObj){anObj.model = 'CONTENT';return anObj;});}
			if (obj.item){returnObj = obj.item.map(function(anObj){anObj.model = 'ITEM';return anObj;});}
			if (obj.member){returnObj = obj.member.map(function(anObj){anObj.model = 'MEMBER';return anObj;});}
			if (obj.project){returnObj = obj.project.map(function(anObj){anObj.model = 'PROJECT'; return anObj;});}
			if (obj.task){returnObj = obj.task.map(function(anObj){anObj.model = 'TASK';return anObj;});}
			if (obj.time){returnObj = obj.time.map(function(anObj){anObj.model = 'TIME';return anObj;});}
			if (obj.transaction){returnObj = obj.transaction.map(function(anObj){anObj.model = 'TRANSACTION';return anObj;});}
			if (obj.validation){returnObj = obj.validation.map(function(anObj){anObj.model = 'VALIDATION'; return anObj;});}
			return returnObj;
		});

	    var activity = [].concat.apply([], populatedModels);
	    activity = activity.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
	    activity = activity.slice(0,100);

	    var userPromises = [];
	    for (x in activity){userPromises.push(User.find({id:activity[x].user}))}
		var populatedUserModels = await Q.all(userPromises)
		for (x in activity){activity[x].user = populatedUserModels[x][0]}

	    console.log('FEED QUERY DONE', activity.length);

		res.json(activity);

	},

};