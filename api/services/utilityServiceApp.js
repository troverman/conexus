//CRE8.UTILSERVICE
const async = require('async');
const Q = require('q');
const request = require('request');

module.exports = {

	bulkEditFunction: async function(){
		var Q = require('q');
		var promises = [
			////Action.find().limit(100).skip(0).sort('createdAt DESC'),
			////App.find().limit(100).skip(0).sort('createdAt DESC'),
			////Attention.find().limit(100).skip(0).sort('createdAt DESC'),
			////Association.find().limit(100).skip(0).sort('createdAt DESC'),
			////Content.find().limit(420).skip(0).sort('createdAt DESC'),
			////Item.find().limit(1000).skip(0).sort('createdAt DESC'),
			////Order.find().limit(1000).skip(0).sort('createdAt DESC'),
			//////Project.find().limit(100).skip(0).sort('createdAt DESC'),
			//Reaction.find().limit(10000).skip(0).sort('createdAt DESC'),
			////Task.find().limit(10000).skip(0).sort('createdAt DESC'),
			////Time.find().limit(10000).skip(0).sort('createdAt DESC'),
			////Transaction.find().limit(10000).skip(0).sort('createdAt DESC'),
			//////User.find().limit(100).skip(0).sort('createdAt DESC'),
			////Validation.find().limit(10000).skip(0).sort('createdAt DESC')
		];
		var type = [
			////'ACTION',
			////'APP',
			////'ATTENTION',
			////'ASSOCIATION',
			////'CONTENT',
			////'ITEM',
			////'ORDER',
			//////'PROJECT',
			//'REACTION',
			////'TASK',
			////'TIME',
			////'TRANSACTION',
			//////'USER',
			////'VALIDATION',
		];
		var data = await Q.all(promises);
		
		console.log('LOAD');
		var tokenSet = [];
		for (x in data){
			for (y in data[x]){
				//var apps = {reactions:{plus:0,minus:0},attention:{general:0}};
				//if (data[x][y].data){if (data[x][y].apps){apps = data[x][y].apps;}}
				//else{data[x][y].data = {};}
				//if (data[x][y].reactions){apps.reactions = data[x][y].reactions;}
				//if (data[x][y].attention){apps.attention = data[x][y].attention;}
				//if (data[x][y].data.applications){apps = data[x][y].data.applications}
				//data[x][y].data.apps = apps;
				//console.log(data[x][y].id);
				//if (type[x] == 'ACTION'){Action.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
				//if (type[x] == 'APP'){App.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
				//if (type[x] == 'ASSOCIATION'){Association.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
				//if (type[x] == 'ATTENTION'){Association.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
				//if (type[x] == 'CONTENT'){Content.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
				//if (type[x] == 'ITEM'){Item.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
				//if (type[x] == 'ORDER'){Order.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
				//if (type[x] == 'PROJECT'){Project.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
				//if (type[x] == 'REACTION'){Reaction.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
				//if (type[x] == 'TASK'){Task.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
				//if (type[x] == 'TIME'){Time.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
				//if (type[x] == 'TRANSACTION'){Transaction.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
				//if (type[x] == 'USER'){User.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
				//if (type[x] == 'VALIDATION'){Validation.update({id:data[x][y].id}, {data: data[x][y].data}).then(function(data){console.log('UPDATE!', data)})}
			}
		}
	},

	tagsToAssociation: async function(dataModel, limit){
		var promise = ''
		if (dataModel = 'CONTENT'){promise = Content.find({}).limit(limit).skip(0).sort('createdAt DESC')}
		if (dataModel = 'ITEM'){promise = Item.find({}).limit(limit).skip(0).sort('createdAt DESC')}
		if (dataModel = 'PROJECT'){promise = Project.find({}).limit(limit).skip(0).sort('createdAt DESC')}
		if (dataModel = 'TASK'){promise = Task.find({}).limit(limit).skip(0).sort('createdAt DESC')}
		if (dataModel = 'TIME'){promise = Task.find({}).limit(limit).skip(0).sort('createdAt DESC')}
		if (dataModel = 'TRANSACTION'){promise = Transaction.find({}).limit(limit).skip(0).sort('createdAt DESC')}
		var models = await promise;
		for (x in models){
			var validationModel = {
				//dont need to double store this for self.. 
				associatedModels:[
					{type:dataModel, id:models[x].id},
					{type:dataModel, id:models[x].id},
				],
				context:{general:100},
				validation:{general:100},
				parameters:{type:'SELF', connection:'CRE8COREPROJECTSELF'},
				type:'HUMAN',
				creator:models[x].user,
				user:models[x].user,
				content:'SELF IMPLICIT ASSOCIATION',
				data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
			};
			if (models[x].tags){
				var context = models[x].tags.split(',');
				for (y in context){
					//should be 0 - 1 
					validationModel.context[context[y]] = 100
					validationModel.validation[context[y]] = 100 
				}
			}
			console.log(validationModel)
		}
	},

	//TODO: GENERALIZE
	//LEGACY
	//FOLLOWERS TO ASSOCIATION
	followersToAssociation: async function(){
		var followerModels = await Follower.find({}).limit(1000).skip(0).sort('createdAt DESC');
		for (x in followerModels){

			//FINALIZE 'CONTEXT + PARAMETERS'
			//SOURCE AND TARGET (PEER VALIDATION) IN CONNECTION IS BY MANIFOLD REPUTATION MULTIPLIERS 
				//IN PROTOCOL... IN CONNECTION 'CODE' (OHHHHHH WOW), DEFIN THAT ONLY MEMBER AND ASSIGN THEM SELVES AS SOURCE 
					//.. SOMTHIN. LOL :) 

			//SCOPE
			//GET CONNECTION
			//REUCTION FUNCTION DEFINED

			//DEFAULT FOLLOWER CONNECTION
			var connectionModel = await Connection.find();

			var validationModel = {
				creator:followerModels[x].follower,
				associatedModels:[
					{
						type:'MEMBER', 
						id:followerModels[x].follower, 
						context:{
							label:'source'
						}
					},
					{
						type:'MEMBER', 
						id:followerModels[x].followed, 
						context:{
							label:'target'
						}
					}
				],
				connection:connectionModel[0]
			};

			//CREATE VALIDATION
			//var validationModels = await Validation.create(validationModel).then(function(validationModels){

			//REDUCTION FUNCTION (CONNECTION DEFINED)
			//EASYHERE
				//CONNECITION AGNOSTIC?
					//IE COMPUTED NOT STORED?
						//YEE... WE CAN COMPUTE 
						//I WANNA SEE THE ASSOCIATION WITH ANOTHER CONNECTION --> EASY FRONT END FLOW? 
								//YA RECOMPUTE ALGS ARE EASY


			//CREATE ASSOCIATION
			//Association.create(validationModel);

		}
	},

	//UTIL
	removeDuplicateTokens: async function(){
		var tokenModels = await Token.find().limit(1000000);
		const lookup = tokenModels.reduce((a, e) => {
		  a[e.string] = e.string in a ? ++a[e.string] : 0;
		  return a;
		}, {});
		tokenModels = tokenModels.filter(e => lookup[e.string]);
		console.log(tokenModels);
		for (x in tokenModels){Token.destroy(tokenModels[x].id, function(err) {console.log('delete token')});}
	},

	updateTransactionContext: async function(){
		var transactionModels = await Transaction.find({}).limit(10000);
		for (x in transactionModels){
			if(!transactionModels[x].context){transactionModels[x].context = transactionModels[x].tags}
			console.log(transactionModels[x].context)
			var transactionModel = await Transaction.update({id:transactionModels[x].id}, {context:transactionModels[x].context})
		}
	},

	purge: async function(model){
		var models = await Project.find({title:{contains:model}});
		if (models.length > 0){
			var idArray = models.map(function(obj){return obj.id});
			console.log(idArray)
			//Project.destroy(idArray, function(err, model) {
			//	console.log(model);
			//});
		}
	},




	//UTILITY APP
	//TODO: DEFINE LANGUAGE PRIMITIVES IE SET, ARRAY,  . . . AS CONNECTION / APP

	//POWER SET
	getAllSubsets: function(theArray) {
		return theArray.reduce(function (subsets, value) {
			return subsets.concat(subsets.map(function (set) {
				return [value].concat(set);
			}));
		}, [[]]);
	},

	intersect: function(a, b) {return a.filter(Set.prototype.has, new Set(b));},
	diff: function (a, b) {return a.filter(function(i) {return b.indexOf(i) < 0;});},

	arraysEqual:function(a, b) {
		if (a === b) return true;
		if (a == null || b == null) return false;
		if (a.length != b.length) return false;
		for (var i = 0; i < a.length; ++i) {if (a[i] !== b[i]) return false;}
		return true;
	},

	isInArray: function(array, item) {
	    for (var i=0;i<array.length;i++) {if(JSON.stringify(array[i]) == JSON.stringify(item)){return true;}}
	    return false;
	},

	removeMirrorDuplicates: function(array){
		var array1 = [];
		var array2 = [];
		var mirrorArray = array.map(function(obj){
			return [obj[1],obj[0]];
		});
		for (x in array){
			array1.push(array[x]);
			if (!dataServiceApp.utility.isInArray(array1, mirrorArray[x])){
				array2.push(array[x]);
			}
		}
		return array2;
	},

	generate: function(model) {return 100;},

 	searchObject: function(object, matchCallback, currentPath, result, searched) {
        currentPath = currentPath || '';
        result = result || [];
        searched = searched || [];
        if (searched.indexOf(object) !== -1 && object === Object(object)) {return;}
        searched.push(object);
        if (matchCallback(object)) {result.push({path: currentPath, value: object});}
        try {
            if (object === Object(object)) {
                for (var property in object) {
                    if (property.indexOf("$") !== 0) {
                        searchObject(object[property], matchCallback, currentPath + "." + property, result, searched);
                    }
                }
            }
        }
        catch (e) {console.log(object); throw e;}
        return result;
    },

    updateObject: function(object, newValue, path){
        var stack = path.split('.');
        stack.shift();
        while(stack.length>1){object = object[stack.shift()];}
        object[stack.shift()] = newValue;
    },













};