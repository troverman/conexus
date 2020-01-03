//CRE8.SEARCH.ALPHA
const Q = require('q');

//API APP
//HTTPS APP . . . 

//CAN HANDLE ALL API CALLS..
	//IF APP/ MODEL PARAM.. 
		//ELSE ALL APPS YOU HAVE CONNECTIED TO PEER / YOUR TRUTH 
			//CAN SPECIFIC TRUTH PARAMS

//CRE8.get --> UNIVERSAL .. get app ... get self connection.connection 

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
			if (req.query.model == 'PROJECT'){
				var query = JSON.parse(JSON.stringify(req.query.query));
				query.map(function(obj){obj = JSON.parse(JSON.stringify(obj))});
				var projectModels = await Project.find({tags:{contains: tag}}).limit(limit).skip(skip).sort(sort);
				projectModels = models.map(function(obj){obj.model = 'PROJECT';return obj;});
				Project.subscribe(req, projectModels);
				res.json(projectModels);
			}
			else{
				var projectModels = await Project.find().where({or: [{title: {contains: searchQuery}}, {urlTitle: {contains: searchQuery}}]})
				projectModels = projectModels.map(function(obj){obj.model = 'PROJECT'; return obj;});
				var contentModels = await Content.find().where({or: [{title: {contains: searchQuery}}, {content: {contains: searchQuery}}, {user: {contains: searchQuery}}]}).populate('user')
				contentModels = contentModels.map(function(obj){obj.model = 'CONTENT';return obj;});
				var taskModels = await Task.find().where({or: [{content: {contains: searchQuery}}, {title: {contains: searchQuery}}]}).populate('user')
				taskModels = taskModels.map(function(obj){obj.model = 'TASK';return obj;});
				var userModels = await User.find().where({or: [{username: {contains: searchQuery}}]});
				userModels = userModels.map(function(obj){obj.model = 'MEMBER';return obj;});
				var itemModels = await Item.find().where({or: [{content: {contains: searchQuery}}, {title: {contains: searchQuery}}, {user: {contains: searchQuery}}]})
				itemModels = itemModels.map(function(obj){obj.model = 'ITEM';return obj;});
				var combinedModels = [].concat.apply([], [projectModels, contentModels, taskModels, userModels, itemModels]);
    			combinedModels = combinedModels.sort(function(a,b) {return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0);} ); 
    			return combinedModels;
			}
		}
	},

	getFeed: async function (req) {
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
		var populatedUserModels = await Q.all(userPromises);
		for (x in activity){activity[x].user = populatedUserModels[x][0]}
	    console.log('FEED QUERY DONE', activity.length);
		return activity;
	},

};