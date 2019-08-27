//const tf = require('@tensorflow/tfjs');
//require('@tensorflow/tfjs-node');
var Q = require('q');
var async = require('async');
var _ = require('lodash');

//POWER SET
function getAllSubsets(theArray) {
  return theArray.reduce(function (subsets, value) {
    return subsets.concat(subsets.map(function (set) {
      return [value].concat(set);
    }));
  }, [[]]);
};

function intersect(a, b) {return a.filter(Set.prototype.has, new Set(b));};
function diff (a, b) {return a.filter(function(i) {return b.indexOf(i) < 0;});};

function arraysEqual(a, b) {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length != b.length) return false;
	for (var i = 0; i < a.length; ++i) {
		if (a[i] !== b[i]) return false;
	}
	return true;
};

function isInArray(array, item) {
    for (var i=0;i<array.length;i++) {if(JSON.stringify(array[i]) == JSON.stringify(item)){return true;}}
    return false;
};

function removeMirrorDuplicates(array){
	var array1 = [];
	var array2 = [];
	var mirrorArray = array.map(function(obj){
		return [obj[1],obj[0]];
	});
	for (x in array){
		array1.push(array[x]);
		if (!isInArray(array1, mirrorArray[x])){
			array2.push(array[x]);
		}
	}
	return array2;
};

function generate(model) {return 100;};

module.exports = {

	buildAssociatedModels:function(model){

		Validation.native(function(err, validation) {

			validation.find({"associatedModels.address":{$in :[model]}})
			.limit(limit)
			.skip(skip)
			.sort({'createdAt':-1})
			.toArray(function (err, validationModels) {
				validationModels = validationModels.map(function(obj){
					obj.id = obj._id;
					//PROTOCOL. CHARTER.?
					return obj;
				});

				//SET OF VALIDATIONS
				//GET ALL BINARY CONNECTIONS; UNIQUE CONNECTIONS
				var associationTree = {};
				for (x in validationModels){

					//IF VALIDATION HAS VALIDATION.. GO 
						//RECURSION

					//LOOKING AT VALIDATION MODELS // BINARY RELATIONSHIP
					for (y in validationModels[x].associatedModels){
						if (!associationTree[validationModels[x].associatedModels[y].address]){
							associationTree[validationModels[x].associatedModels[y].address] = []
						}

						//AVERAGE SCORE --> PER DIMENSION..
						//for z in dimension 

						associationTree[validationModels[x].associatedModels[y].address].push('THE SCORE')

					}

				}

				//SUM VALIDATIONS.. 
				//WE ARE NOT RESTRICTING ON ON BOTH VALIDATION DIMENSIONS THO : > )
				var validationSumObj = {};

				//SET OF VALIDATIONS
				for (y in validationModels){

					//PER DIMENSION IN EACH VALIDATION
                    for (x in Object.keys(validationModels[y].validation)){
                        if(!validationSumObj[Object.keys(validationModels[y].validation)[x]]){
                        	validationSumObj[Object.keys(validationModels[y].validation)[x]]=validationModels[y].validation[Object.keys(validationModels[y].validation)[x]]
                        }
                        else{
                        	validationSumObj[Object.keys(validationModels[y].validation)[x]]+=validationModels[y].validation[Object.keys(validationModels[y].validation)[x]]
                        }
                    }

                }

                var associatedModels = [];
                //BUILD ASSOCIATED MODELS FROM AVERAGE VALIDATIONS ////BASED ON CHARTERS OF RESPECTIVE LINKAGES
                for (x in Object.keys(validationSumObj)){
                    associatedModels.push(validationSumObj[Object.keys(validationSumObj)[x]]/validationModels.length);
                    associatedModels.push(Object.keys(validationSumObj)[x]);
                }


			});
		});

	},

	//(MODEL []) ASSOCIATED MODELS [] --> {}COMPUTED GRAPH STRUCTURE 
	buildAssociationNetwork:function(model){

		//BUILD ASSOCIATION OBJECT --> TRAVERSAL OF associatedModels
										//TRAVERSAL --> LONG TAIL
		//RETURN JSON OBJECT

	},


	//NEED TO POULATE TO TEST..
	//MAP OUT THE RECURSIVE TREE

	//FOR DEVELOPERS
	//ASSOCIATION IS A REDUCCTION OF SET OF VALIDATION

	//LEVEL1: VALIDATION, VALIDATION, VALIDATION.
	//			   |           |           |
	//LEVEL2:	 V-V-V       V-V-V       V-V-V
	//			 | | |       | | |       | | |
	//LEVEL3:    v3v3v3      v3v3v3      v3v3v3
	//...
	//LELVE_L:	

	//Compute Association Level L (based on connection rules.. v-v & v-v-n &or defined type)

	//DEFAULT AVERAGE WEIGHTED REP
	//[A_L] = [Sum(V_DxRep_D)]/N
	//..V_L-A_(L-1) = (CHARTER RULE..)
		//=V_LxA_(L-1)
		//do a real example.. 

	//LEVEL_L:  
	//A-V
	//BE CREATIVE!!
			//=  charter.. connection.. fxn
	//.. A_(AV) = (CreatorWeight + PeerWeight) / 2 
		//AVERAGE OF NESTED VALIDATION
	//charter expose formulas..? 
	//.. A_(AV) = CreatorScore(CreatorWeight) + PeerScore(PeerWeight); CreatorWeight + PeerWeight = 1

	//oh boi
	//mb i need to do complex query 1st .. . 
	associationBuild: function(model){

		//FOR SOLVING VALIDION LEVELS
		//MB SOME COOL 2019 JS to do it 
		//ill do what i know

		//RETURNS TREE OBJ
		//THEN REDUCETREE OBJ
		//YAY A PLAN
		//time to do some tree art

		var deferred = Q.defer();
		var promises = [[]];
		var validationTree = {};

		//uhm
		//we want two functions.. important to compute the tree then reduce. 

		//FACTOR TO DO FROM ASSICATION?
		function buildVaidationTree(validationModels, parent, level){


			//ONE TOO MANY STEPS.. 
			level++
			promises.push([]);

			for (x in validationModels){

				promises[level].push(Validation.find({associationModel:validationModels[x].id}));


				//nessted obj thoughts - you have the helper functions :) do that instead
				//if statement.. 
				//find parent and level ...
				//find , if root then.. 
				validationModels.children = [];
				validationTree.push(validationModels[x]);

				Q.all(promises[level])
				.then(function(validationModelData){

					for (y in validationModelData){

						if (validationModelData[y].length != 0){

							//level++
							//need some resolve
							for (z in validationModelData[y]){

								
								//validationTree.push()
								//{object.children}

								buildVaidationTree(validationModelData[z].id, validationModels[x], level).then(function(validationTree){
									deferred.resolve(validationTree);
								});
							}

						}
						else{

							//u a leafff

							//NEED TO KEEP ALL DATA IN TREE / OBJECT
							//validationTree[parent][level] = {}

							//SOME OBJ HERE.
							//WERE DONE WITH DATA COLLECTIONS.. DO THE CONNECTION MATH ON LEVEL - 1
							deferred.resolve(validationTree);
						}

					}

				});
			}
		};

		function reduceValidationTree(validationTree){

			//SOME GOOD ALG HERE

		};

		//buildVaidationTree([],{},0).then(function(validationTree){
			//reduceValidationTree(validationTree).then(function(associationModel){
				///Association.update(associationModel);










			//})
		//})

		//REDUCE THE TREE TO A CONNECTION
		//.THEN COMPUTE FROM THE TREE.. 
		//COME TREE TRAVERSAL ALGORITHYM ..
		//COMPUTE THE CONNECTION RULES TREE
		//MOSTY DEFACTO. UNLESS CLERLY ELUCIDATED.. 
		//(MOST WILL KEEP DEFATCTO LONG CHAIN CONNECTION RULES -- ALBEIT THERE IS ABILTIY TO DEFINE)


		Validation.find({
			associationModels:[
				model.associationModels[0],
				model.associationModels[1]
			]
		}).then(function(validationModels){

			var associationModel = {
				context: {},
				associationModels: validationModels[0].associationModels,
				type:validationModels[0].type,
			};

			//NESTED VALIDATION RULES AS CHARTER.. DEFACTO MULT.. THIS IS HOW WE WORK WITH LEVEL TRAVERSAL IN VALIDTION-VALIDATION CHAINS 

			for (x in validationModels){

				//FIND VALIDATIONS FOR THE VALIDATION
				//if there is a validation - validation

				//PROMISE CHAIN.. NESTED.. COOL 

				Validation.find({associationModel:validationModels[x].id}).then(function(validationModels){
					
					//CHECK THE ASSOCIATION OF -VALIDAION CHAIN
					if (validationModels.length != 0){

						//promises[level] = [];

						level++
						for (x in validationModels){
							associationBuild(validationModels[x], level).then(function(associationModel){
								deferred.resolve(associationModel);
							});
						}

					}

					//IF NONE, WE ARE DONE @ THIS LEVEL
					else{
						//need to structure this ...
						//some object level that is escaping me now 
						//it is retured one level up to do the calc
					}

				});

				//TEMP SIMPLE SUM
				//codified in Connection
				for (y in Object.keys(validationModels[x].validation)){
					 var context = Object.keys(validationModels[x].validation)[y];
					 associationModel.context[context] += validationModels[x].validation[context];
				}

			}

			//TEMP. SIMPLE AVERAGE
			//codified in Connection
			for (x in Object.keys(associationModel.context)){
				var context = Object.keys(associationModel.context)[x];
		 		associationModel.context[context] = associationModel.context[context] / Object.keys(associationModel).length;
		 	}

		 	deferred.resolve(associationModel)


		});
		return deferred.promise;
	},



	//NEED TO POPULATE SOME TO TEST :) 
	buildAssociations: function(model, level){

		console.log(model);

		var newAssociationModel = {}; 

		Validation.native(function(err, validation) {

			//GET ALL VALIDATIONS WITH MODEL CONTEXT
			validation.find({
				$and : [
					{"associatedModels.address": {$in :[model.associatedModels[0].address]}},
					{"associatedModels.address": {$in :[model.associatedModels[1].address]}},
				]
			}).limit(1000).skip(0).sort({'createdAt':-1})

			.toArray(function (err, validationModels) {


				//IF WE SPECIFICDIRECTION MAXIMUM IS 2 .. --> implicit 1 now
				if (validationModels.length > 0){

					//GET ASSOCIATIONS WITH MODEL VALIDATION CONTEXT
					Association.native(function(err, association) {
						association.find({
							$and : [
								{"associatedModels.address": {$in :[validationModels[0].associatedModels[0].address]}},
								{"associatedModels.address": {$in :[validationModels[0].associatedModels[1].address]}},
							]
						}).limit(1000).skip(0).sort({'createdAt':-1})
						.toArray(function (err, associationModels) {




							//CONNECTION RULES
							//TODO: CONNECTION RULES
							//FIND CONNECTION RULES FOR ASSOCIATION..
							//APPLY MULTIPLIERS ETC (REVIST CHARTER STRUCT) ~ FACTORIZE

							//LET'S DEFINE SOME DISCRETE MODELS TNITE? 
							//..CREATE MEMBERSHIP

								//REMEBER THRERE IS A LOT OF REFACTORING .. IE PROJECTMEMBER --> ASOOCIATION
									//FOLLOWER/FOLLOWING --> (DIRECTED) ASSOCIATION
										//RULES ARE ONLY SELF CAN VALIDATE FOR EX.




							Connection.find({}).then(function(){

							});


							//IF NO ASSOCIATIONS?--> CREATE!
							if (associationModels.length == 0){

								var newAssociationModel = {
									associatedModels: validationModels[0].associatedModels,
									type: validationModels[0].type,
									charterParams: validationModels[0].charterParams,
									creator: validationModels[0].creator,
									reactions: validationModels[0].reactions,
									user: validationModels[0].user,
								};
								//for (x in validationModels){newAssociationModel.context = validationModels[x].validation;}
								Association.create(newAssociationModel).then(function(association){
									console.log('CREATED ASSOCIATION', association);
									Association.publishCreate(association);
								});

							}

							//IF ASSOCIATIONS PRESENT..
							//UPDATE ASSOCIATION BASED ON CONNECTION RULE..
							else{

								var newAssociationModel = {
									associatedModels: validationModels[0].associatedModels,
									type: validationModels[0].type,
									charterParams: validationModels[0].charterParams,
									creator: validationModels[0].creator,
									reactions: validationModels[0].reactions,
									user: validationModels[0].user,
								};

								//THIS IS THE VALIDATION + CONNECTION = ASSOCIATION LOGIC
								//for (x in validationModels){newAssociationModel.context = validationModels[x].validation;}

								Association.update({id:associationModels[0]._id, newAssociationModel}).then(function(association){
									console.log('UPDATED ASSOCIATION', association);
									Association.publishCreate(association);
								});

							}
						});
					});

				}

			});
		});

	},

	buildConnections: function(){

		//APPS AND APP CONNECTIONS
			//ABSTRACT CORE MODELS TO THE CENTRAL APP MODEL
			//PROJECT, TASK, TIME --> APP.. 

		//STATIC
		//App.get();
		var coreModels = [
			'ASSOCIATION',
			'ITEM',
			'CONNECTION',
			'CONTENT',
			'REACTION',
			'TRANSACTION',
			'PROJECT',
			'VALIDATION'
		];

		for (x in coreModels){
			for (y in coreModels){
				console.log(coreModels[x], '-', coreModels[y])
			}
		}


		//POPULATE CONNECTIONS
			

	},

	buildStringSpace: function(){

		//TODO ASSOCIATION WALK VS PARENT
		function projectAssociations(id, path){
			var deferred = Q.defer();
			Project.find({id:id}).then(function(models){
				if (models.length == 1){
					path = path.toUpperCase().replace(/ /g,'_') + '+' + models[0].title.toUpperCase().replace(/ /g,'_');
					if (models[0].parent){
						projectAssociations(models[0].parent, path).then(function(path){deferred.resolve(path)});
					}
					else{deferred.resolve(path);}
				}
				else{deferred.resolve(path);}
			});
			return deferred.promise;
		};

		console.log('GENERATE STRING SPACE!');
		//WALK THE THE ASSOCIATIONS :) 
		//LET'S START! 

		var promises = [
			//ASSOCIATION
			//ACTION
			Content.find().limit(100000).skip(0).sort('createdAt DESC'),
			//FOLLOW
			Item.find().limit(100000).skip(0).sort('createdAt DESC'),
			//Order.find().limit(100).skip(0).sort('createdAt DESC'),
			Project.find().limit(100000).skip(0).sort('createdAt DESC'),
			//Reaction.find().limit(100).skip(0).sort('createdAt DESC'),
			Task.find().limit(100000).skip(0).sort('createdAt DESC').populate('project'),
			Time.find().limit(100000).skip(0).sort('createdAt DESC').populate('task'),
			Transaction.find().limit(100000).skip(0).sort('createdAt DESC'),
			User.find().limit(100000).skip(0).sort('createdAt DESC'),
			Validation.find().limit(100000).skip(0).sort('createdAt DESC')
		];
		var type = [
			//'ASSOCIATION',
			//ACTION
			'CONTENT',
			'ITEM',
			//FOLLOW
			//'ORDER',
			'PROJECT',
			//'REACTION',
			'TASK',
			'TIME',
			'TRANSACTION',
			'USER',
			'VALIDATION',
		];
		Q.all(promises)
		.then(function(data){
			console.log('LOAD!');
			var tokenSet = [];
			for (x in data){
				for (y in data[x]){
					console.log(x,y, type[x])

					if (type[x] == 'CONTENT'){

						//CONTENT
						var contentBaseModel = {
							string: 'CRE8+CONTENT',
							information:{
								inCirculation:data[x].length,
								markets: 0,
							},
							protocols:[
								'CRE8', 
								'CONTENT'
							],
							logic:{
								transferrable:true, 
								mint:'createContent'
							}
						};

						//DEPRECIATE?
						var contentNFTModel = {
							string: data[x][y].id,
							information:{
								inCirculation:1,
								markets: 0,
							},
							protocols:[
								'CRE8', 
								'CONTENT'
							],
							logic:{
								transferrable:true, 
								mint:'createContent'
							}
						};

						//DEPRECIATE?
						var humanReadableContentNFTModel = {
							string: 'CRE8+CONTENT+'+data[x][y].id,
							information:{
								inCirculation:1,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'CONTENT'
							],
							logic:{
								transferrable:true, 
								mint:'createContent'
							}
						};

						tokenSet.push(contentBaseModel);
						tokenSet.push(contentNFTModel);
						tokenSet.push(humanReadableContentNFTModel);

						if (data[x][y].type){

							//CONTENT TYPE
							var contentTypeModel = {
								string: 'CRE8+CONTENT+'+data[x][y].type.toUpperCase(),
								information:{
									inCirculation:1,//data[x].filter(function(obj){return obj.type}).length,
									markets: 0,
								},
								protocols:[
									'CRE8', 
									'CONTENT'
								],
								logic:{
									transferrable:true, 
									mint:'createContent'
								}
							};

							//DEPRECIATE?
							//CONTENT+TYPE+ID
							var humanReadableContentTypeNFTModel = {
								string: 'CRE8+CONTENT+'+data[x][y].type.toUpperCase()+'+'+data[x][y].id,
								information:{
									inCirculation:1,
									markets: 0,
								},
								protocols:[
									'CRE8',
									'CONTENT'
								],
								logic:{
									transferrable:true,
									mint:'createContent'
								}
							};

							tokenSet.push(contentTypeModel);
							tokenSet.push(humanReadableContentTypeNFTModel);

						}

						//TODO: ASSOCIATION WALK
						//TODO: SYMMETRY FROM OTHER MODEL PERSPECTIVE

					}

					if (type[x] == 'ITEM'){

						var createItemBaseModel = {
							string: 'CRE8+ITEM',
							information:{
								inCirculation:data[x].length,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'ITEM'
							],
							logic:{
								transferrable:true, 
								mint:'createItem'
							}
						};

						var humanReadableItemNFTModel = {
							string: 'ITEM+'+data[x][y].id,
							information:{
								inCirculation:1,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'ITEM'
							],
							logic:{
								transferrable:true, 
								mint:'createItem'
							}
						};

						tokenSet.push(itemBaseModel);
						tokenSet.push(createItemBaseModel);
						tokenSet.push(humanReadableItemNFTModel);

					}

					if (type[x] == 'ORDER'){

						//ORDER
						var orderBaseModel = {
							string: 'CRE8+ORDER',
							information:{
								inCirculation:data[x].length,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'ORDER',
							],
							logic:{
								transferrable:true, 
								mint:'createOrder'
							}
						};

						//ORDER NFT
						var humanReadableOrderNFTModel = {
							string: 'CRE8+ORDER+'+data[x][y].id,
							information:{
								inCirculation:1,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'ORDER',
							],
							logic:{
								transferrable:true, 
								mint:'createOrder'
							}
						};

						//TODO PAIR ENCODING. 

						tokenSet.push(orderBaseModel);
						tokenSet.push(humanReadableOrderNFTModel);
							
					}

					//CHERRY ON TOP
					//ASSOCIATIONS
					//PROJET --> TASK --> TIME LINKAGE
					//PROJECT --> PROJECT LINKAGE
					if (type[x] == 'PROJECT'){

						var projectBaseModel = {
							string: 'CRE8+PROJECT',
							information:{
								inCirculation:data[x].length,
								markets: 0,
							},
							protocols:[
								'BASE',
								'PROJECT'
							],
							logic:{
								transferrable:true, 
								mint:'ONCREATEPROJECT'
							}
						};

						//GOES TO PROJECT
						//based on charter
						var projectTitleModel = {
							string: 'PROJECT+'+data[x][y].title.replace(/ /g,'_').toUpperCase(),
							information:{
								inCirculation:1,
								markets: 0,
							},
							protocols:[
								'BASE',
								'PROJECT'
							],
							logic:{
								transferrable:true, 
								mint:'ONCREATEPROJECT, PROJECTMEMBER PERMISSIONS'
							}
						};

						//DEPRECIATE -- SAMPLE
						//TODO ASSOCIATIONS
						var projectPrelimModel = {
							string: 'PROJECT+'+data[x][y].title.replace(/ /g,'_').toUpperCase()+'+CONTENT',
							information:{
								inCirculation:0,
								markets: 0,
							},
							protocols:[
								'BASE',
								'PROJECT'
							],
							logic:{
								transferrable:true, 
								mint:'ONCREATEPROJECTCONTENT -- VALIDATION APPROVAL'
							}
						};

						tokenSet.push(projectBaseModel);
						tokenSet.push(projectTitleModel);
						tokenSet.push(projectPrelimModel);

						//STRING SPACE SHOULD BE HUMAN READABLE --> ??? OR ID?
						//console.log(data[x][y].title)
						//DEPRECIATED?
						//console.log('PARENT', data[x][y].parent);
						//console.log(data[x][y].associatedModels);
						//STRUCURE INTO PROMISE TO RETURN
						if (data[x][y].parent){
							projectAssociations(data[x][y].parent, data[x][y].title).then(function(projectModel){
								
								//console.log(projectModel);
								//based on charter
								var projectAssociationModel = {
									string: 'PROJECT+'+projectModel.toUpperCase(),
									information:{
										inCirculation:0,
										markets: 0,
									},
									protocols:[
										'BASE',
										'ASSOCIATION'
									],
									logic:{
										transferrable:true, 
										mint:'ONCREATEPROJECT'
									}
								};

								//DO BETTER
								Token.find({string:projectAssociationModel.string}).then(function(aTokenModel){
									if (aTokenModel.length == 0){
										Token.create(projectAssociationModel).then(function(){
											console.log(projectAssociationModel)
										});
									}
									else{
										Token.update({id:aTokenModel[0].id}, projectAssociationModel).then(function(){
											console.log('UPDATE', projectAssociationModel)
										});
									}
								});

							});
						}


					}

					//COULD ENCODE MORE EFFECTILY?? 
					//MOST LIKEY DESCRETIZE 
					//TODO: RECIEVER? 
					if (type[x] == 'REACTION'){

						var reactionCreateModel = {
							string: 'REACTION',
							information:{
								inCirculation:data[x].length,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'REACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createReaction'
							}
						};

						var reactionCreateModel = {
							string: 'CRE8+REACTION',
							information:{
								inCirculation:data[x].length,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'REACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createReaction'
							}
						};

						//VERB?
						var reactionReceiveModel = {
							string: 'RECEIVE+REACTION',
							information:{
								inCirculation:data[x].length,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'REACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createReaction'
							}
						};

						//REACTION+LIKE
						var reactionTypeBaseModel = {
							string: 'REACTION+'+data[x][y].type.toUpperCase(),
							information:{
								inCirculation:0,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'REACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createReaction'
							}
						};

						//REACTION+CREATE+LIKE
						var reactionTypeCreateModel = {
							string: 'REACTION+CREATE+'+data[x][y].type.toUpperCase(),
							information:{
								inCirculation:0,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'REACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createReaction'
							}
						};

						//REACTION+RECEIVE+LIKE
						var reactionTypeReceiveModel = {
							string: 'REACTION+RECEIVE+'+data[x][y].type.toUpperCase(),
							information:{
								inCirculation:0,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'REACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createReaction'
							}
						};

						//REACTION NFT
						var humanReadableReactionNFTModel = {
							string: 'REACTION+'+data[x][y].id,
							information:{
								inCirculation:1,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'REACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createReaction'
							}
						};

						tokenSet.push(reactionBaseModel);
						tokenSet.push(reactionReceiveModel);
						tokenSet.push(reactionRevieveModel);
						tokenSet.push(reactionTypeBaseModel);
						tokenSet.push(reactionTypeCreateModel);
						tokenSet.push(reactionTypeReceiveModel);

						tokenSet.push(humanReadableReactionNFTModel);

						//CAN WE SIMPLIFY? NOT REALLY
						if (data[x][y].associatedModels){
							for (z in data[x][y].associatedModels){

								//SYMMETRY HERE

								//REACTION TYPE
								//REACTION+CONTENT
								var reactionAssociationTypeModel = {
									string: 'REACTION+'+data[x][y].associatedModels[z].type.toUpperCase(),
									information:{
										inCirculation:1,
										markets: 0,
									},
									protocols:[
										'CRE8',
										'REACTION'
									],
									logic:{
										transferrable:true, 
										mint:'ONCREATEREACTION'
									}
								};

								//REACTION ADDRESS
								//REACTION+ADDRESS
								var reactionAssociationAddressModel = {
									string: 'REACTION+'+data[x][y].associatedModels[z].id,
									information:{
										inCirculation:1,
										markets: 0,
									},
									protocols:[
										'CRE8',
										'REACTION'
									],
									logic:{
										transferrable:true, 
										mint:'ONCREATEREACTION'
									}
								};

								//REACTION TYPE ADDRESS
								//REACTION+CONTENT+ADDRESS
								var reactionAssociationTypeAddressModel = {
									string: 'REACTION+'+data[x][y].associatedModels[z].type.toUpperCase()+'+'+data[x][y].associatedModels[z].id,
									information:{
										inCirculation:1,
										markets: 0,
									},
									protocols:[
										'CRE8',
										'REACTION'
									],
									logic:{
										transferrable:true, 
										mint:'createReaction'
									}
								};

								//REACTION TYPE ADDRESS
								//REACTION+LIKE+ADDRESS
								var reactionAssociationType1AddressModel = {
									string: 'REACTION+'+data[x][y].type.toUpperCase()+'+'+data[x][y].associatedModels[z].id,
									information:{
										inCirculation:1,
										markets: 0,
									},
									protocols:[
										'CRE8',
										'REACTION'
									],
									logic:{
										transferrable:true, 
										mint:'createReaction'
									}
								};

								//REACTION TYPE TYPE
								//REACTION+CONTENT+LIKE
								var reactionAssociationTypeTypeModel = {
									string: 'REACTION+'+data[x][y].associatedModels[z].type.toUpperCase()+'+'+data[x][y].type,
									information:{
										inCirculation:1,
										markets: 0,
									},
									protocols:[
										'CRE8',
										'REACTION'
									],
									logic:{
										transferrable:true, 
										mint:'createReaction'
									}
								};

								//REACTION ASSOICATION
								//REACTION+CONTENT+LIKE+ADDRESS
								var reactionAssociationTypeTypeAddressModel = {
									string: 'REACTION+'+data[x][y].associatedModels[z].type+'+'+data[x][y].type.toUpperCase()+'+'+data[x][y].associatedModels[z].id,
									information:{
										inCirculation:Math.floor(100*Math.random()),
										markets: 0,
									},
									protocols:[
										'CRE8',
										'REACTION'
									],
									logic:{
										transferrable:true, 
										mint:'createReaction'
									}
								};

								//for (n in ['CREATE','RECEIVE']){

								//}
								//TODO: CREATOR AND RECIEVER OF THE REACTION..
								//REACTION+CREATE
								//REACTION+RECIEVE

								tokenSet.push(reactionAssociationTypeModel);
								tokenSet.push(reactionAssociationAddressModel);
								tokenSet.push(reactionAssociationTypeAddressModel);
								tokenSet.push(reactionAssociationType1AddressModel);
								tokenSet.push(reactionAssociationTypeTypeModel);
								tokenSet.push(reactionAssociationTypeTypeAddressModel);

							}
						}

					}

					if (type[x] == 'TASK'){
						//TASK
						var taskBaseModel = {
							string: 'CRE8+TASK',
							information:{
								inCirculation:data[x].length,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'TASK'
							],
							logic:{
								transferrable:true, 
								mint:'createTask'
							}
						};

						var humanReadableTaskNFTModel = {
							string: 'CRE8+TASK+'+data[x][y].id,
							information:{
								inCirculation:1,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'TASK'
							],
							logic:{
								transferrable:true, 
								mint:'createTask'
							}
						};

						tokenSet.push(taskBaseModel);
						tokenSet.push(humanReadableTaskNFTModel);

						//TODO ASSOCIATION . . .
						//NOT YET !
					}

					//TYPE.. VIEW
					//TYPE.. DATA APIS.. TIME.. STREAM.. ETC

					//FIX THIS!!!!!!!!
					//:) POPULATOR
					if (type[x] == 'TIME'){

						//TIME
						var timeBaseModel = {
							string: 'CRE8+TIME',
							information:{
								inCirculation:data[x].length,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'TIME'
							],
							logic:{
								transferrable:true, 
								mint:'createTime'
							}
						};

						//TIME NFT
						var humanReadableTimeNFTModel = {
							string: 'CRE8+TIME+'+data[x][y].id,
							information:{
								inCirculation:1,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'TIME'
							],
							logic:{
								transferrable:true, 
								mint:'createTime'
							}
						};

						//TODO: ASSOCIATIONS
						//TODO: TAGS

						tokenSet.push(timeBaseModel);
						tokenSet.push(humanReadableTimeNFTModel);
						
					}

					//IMPORTANT
					if (type[x] == 'TRANSACTION'){

						//TRANSACTION
						var transactionBaseModel = {
							string: 'TRANSACTION',
							information:{
								inCirculation:data[x].length,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'TRANSACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createTransaction'
							}
						};

						//TRANSACTION
						var createTransactionBaseModel = {
							string: 'CRE8+TRANSACTION',
							information:{
								inCirculation:data[x].length,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'TRANSACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createTransaction'
							}
						};

						//TEST
						var recieveTransactionBaseModel = {
							string: 'RECIEVE+TRANSACTION',
							information:{
								inCirculation:data[x].length,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'TRANSACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createTransaction'
							}
						};

						var transactionBaseModelAsset = {
							string: 'CRE8+TRANSACTION+'+data[x][y].asset,
							information:{
								inCirculation:0,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'TRANSACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createTransaction'
							}
						};

						var transactionBaseModelAssetRecieve = {
							string: 'RECIEVE+TRANSACTION+'+data[x][y].asset,
							information:{
								inCirculation:0,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'TRANSACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createTransaction'
							}
						};

						var humanReadableTransactionNFTModel = {
							string: 'CRE8+TRANSACTION+'+data[x][y].id,
							information:{
								inCirculation:1,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'TRANSACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createTransaction'
							}
						};

						var humanReadableTransactionRecieveNFTModel = {
							string: 'RECIEVE+TRANSACTION+'+data[x][y].id,
							information:{
								inCirculation:1,
								markets: 0,
							},
							protocols:[
								'CRE8',
								'TRANSACTION'
							],
							logic:{
								transferrable:true, 
								mint:'createTransaction'
							}
						};

						//TODO: TAGS
						//TODO: ASSETS
						//TODO: SENDER
						//TODO: RECIEVER
						//TODO: CREATOR

						tokenSet.push(transactionBaseModel);
						tokenSet.push(createTransactionBaseModel);
						tokenSet.push(recieveTransactionBaseModel);
						tokenSet.push(transactionBaseModelAsset);
						tokenSet.push(transactionBaseModelAssetRecieve);
						tokenSet.push(humanReadableTransactionNFTModel);
						tokenSet.push(humanReadableTransactionRecieveNFTModel);

					}

					if (type[x] == 'VALIDATION'){
						//CREATEING ASSOCIATIONS :)

						//VALIDATION
						var validationBaseModel = {
							string: 'CRE8+VALIDATION',
							information:{
								inCirculation:data[x].length,
								markets:0,
							},
							protocols:[
								'CRE8',
								'VALIDATION'
							],
							logic:{
								transferrable:true, 
								mint:'createValidation'
							}
						};

						//VALIDATION NFT
						var humanReadableValidationNFTModel = {
							string: 'CRE8+VALIDATION+'+data[x][y].id,
							information:{
								inCirculation:1,
								markets:0,
							},
							protocols:[
								'CRE8',
								'VALIDATION'
							],
							logic:{
								transferrable:true, 
								mint:'createValidation'
							}
						};

						tokenSet.push(validationBaseModel);
						tokenSet.push(humanReadableValidationNFTModel);
						//ASSOCIATIONS
						//TYPE
						//COMPOUND
						//TAGS..??
					}

					if (type[x] == 'USER'){
						var humanReadableUserNFTModel = {
							string: data[x][y].id,
							information:{
								inCirculation:0,
								markets:0,
							},
							protocols:[
								'CRE8',
								'MEMBER'
							],
							logic:{
								transferrable:true, 
								mint:'createTransactionByMember'
							}
						};
						tokenSet.push(humanReadableUserNFTModel);
					}
				}
			}

			//LOAD APPS 
			//MANIFOLDS??
			//SPECIAL CASE.. LOAD IN EXTRA PROTOCOLS
			
			//TOKEN VS MARKET (COMBINATORIAL TOKEN)

			var universalTokenModel = {
				string: 'UNIVERSALTOKEN',
				information:{
					inCirculation:0,
					markets: 0,
				},
				protocols:[
					'UNIVERSALTOKEN'
				],
				logic:{
					transferrable:true, 
					mint:'DAILY'
				}
			};
			tokenSet.push(universalTokenModel);

			//PROTOCOLS
			//BASE, CONTENT, TIME, PROJECT, MEMBER
				//MEMBER
					//Address+
					//on create of token string --> look up appropiate protocol;
						//tokenstring --> protocol mapping
					//simple search pattern match 
					//mint operations for address & address+ 
						//address == creator, transferrable, true

			//ASSOCIATIONS ARE A CHALLANGE
				//TOKEN LINKAGE -- LING STRING

			//remove dups
			var tokenSet_uniq = _.uniq(tokenSet, 'string'); 

			//REPUTATION MANIFOLD
			console.log(tokenSet_uniq)


			//UPDATE USERS BALANCE



			async.eachSeries(tokenSet_uniq, function (token, nextIteration){ 
				Token.find({string:token.string}).then(function(aTokenModel){
					if (aTokenModel.length == 0){
						Token.create(token).then(function(){
							console.log(token)
							process.nextTick(nextIteration);
						});
					}
					else{
						Token.update({id:aTokenModel[0].id}, token).then(function(){
							console.log('UPDATE', token)
							process.nextTick(nextIteration);
						});
					}
				});
			});	

		});
	},

	initOrders: function(req){

		var newOrderArray = [];
		for (var i = 0; i<10000; i++){
			var amount = Math.floor(Math.random()*160)+1;
			var amount1 = 30*((1/10000)*10000*amount+Math.abs(Math.sin(i)+(i*Math.random())/200));
			var price = amount1/amount;
			newOrderArray.push({
				user:'5923b9cc5aac131100cab1c1', //creator | CRE8
				amountSet:amount,
				amountSet1:amount1,
				identiferSet:'CRE8',
				identiferSet1:'ETH',
				price:price,
			});
			//console.log(price)
		};
		
		//console.log(newOrderArray);
		//Order.create(newOrderArray).then(function(){
		//	console.log('DONE', newOrderArray.length)
		//});

		var newOrderArray1 = [];
		for (var i = 0; i<10000; i++){
			var amount = 30*Math.floor(Math.random()*160)+1;
			var amount1 = 1/30*((10000)*amount/10000 + (10000)*1/10000*Math.abs(Math.sin(i)*1/30*i*Math.random()));
			var price = amount1/amount;
			newOrderArray1.push({
				user:'5923b9cc5aac131100cab1c1', //creator
				amountSet:amount,
				amountSet1:amount1,
				identiferSet:'ETH',
				identiferSet1:'CRE8',
				price:price,
			});
			//console.log(amount/10000 + 1/10000*Math.abs(Math.sin(i)*1/100*i*Math.random()));
			//console.log(price)
			//0.001,0.0011,..0.1,1
		} 

		//console.log(newOrderArray1);
		//Order.create(newOrderArray1).then(function(){
		//	console.log('DONE', newOrderArray1.length)
		//});

		/*Order.find().limit(10000).skip(0).sort('createdAt DESC').then(function(models){
			if (models.length > 0){
	    		var idArray = models.map(function(obj) {return obj.id});
				Order.destroy(idArray, function(err, model) {
					console.log(model);
				});
    		}
		});*/

		/*User.find().then(function(models){
			for (x in models){
		       	(function(models, x){
					var url = "https://api.unsplash.com/photos/random?page=1&client_id=b996e9314d68deae5fe37098f096cd6b3b035f5c63989805aa23d4bd8c7358a2&secret=2ddbfdd90eaf2bcfc6f3cec5ec58c677b35cb470dc63d39e0e0372755b59c434%27";
			        request(url, function (error, response, body) {
			            var body = JSON.parse(body);
			            if (body.urls){models[x].coverUrl = body.urls.small;}
			            User.update({id: models[x].id}, models[x])
			            .then(function(model){
			            });
			        });
		    	})(models, x)
		    }
		});*/

		/*User.find().then(function(models){
			for (x in models){
				if(!models[x].coverUrl){
					var url = "https://api.unsplash.com/photos/random?page=1&client_id=b996e9314d68deae5fe37098f096cd6b3b035f5c63989805aa23d4bd8c7358a2&secret=2ddbfdd90eaf2bcfc6f3cec5ec58c677b35cb470dc63d39e0e0372755b59c434%27";
			       	(function(models, x){
				        request(url, function (error, response, body) {
				        	console.log(body)
				            models[x].coverUrl = body.urls.full;
				            User.update({id: models[x].id}, models[x])
				            .then(function(model){
				            	console.log(model);
				            });
				        });
			    	})(models, x);
				}
			}
		});*/	
	},


	getData: function(network, reflective){
		
		//POPULATE A NEW NETWORK
		//TO CREATE A WELL CONNECTED NETWORK
		//SAMPLE SPACE | A-H Tokens
		//A-H + [SAMPLE SPACE]
		var newNetwork = network || "ABCD".split("");
		var positionSet = [];
	    var powerSet = getAllSubsets(newNetwork);
	    powerSet.shift();

		//CREATE RELATIONSHIPS
	    for(x in powerSet){
			for(y in powerSet){
				positionSet.push([powerSet[x], powerSet[y]]);
			}
		}

		//RELATIONSHIPS CANCEL
		//TODO: OPTIMIZE
		var optimize = [];
		for (x in positionSet){
			var intersection = intersect(positionSet[x][0], positionSet[x][1]);
			var set1 = diff(positionSet[x][0], intersection);
			var set2 = diff(positionSet[x][1], intersection);
			if (set1.length != 0 && set2.length != 0){
				optimize.push([set1,set2]);
			}
		}

		//var mirror = optimize.map(function(obj){
		//	return [obj[1],obj[0]];
		//});
		//REMOVE DUPLICATES
		var optim = Array.from(new Set(optimize.map(JSON.stringify)), JSON.parse);
		//var mirrorOptim = Array.from(new Set(mirror.map(JSON.stringify)), JSON.parse);

		//REMOVE MIRROR DUPLICATES
		//var optim1 = [];
		//var optim2 = [];
		//optim.forEach(function(part, index, theArray) {
		//	optim1.push(part);
		//	if (!isInArray(optim1, mirrorOptim[index])){
		//		optim2.push(part);
		//	}
		//});

	   	//STORED AS A MATRIX; algabraic lattice. 
	   	//var maximumBinaryRelationship = removeMirrorDuplicates(optim);
	   	var maximumBinaryRelationship = [];
	   	if (reflective){maximumBinaryRelationship = optim;}
	   	if (!reflective){maximumBinaryRelationship = removeMirrorDuplicates(optim);}
	   	
		var newOrderArray = [];
		for (x in maximumBinaryRelationship){
			newOrderArray.push({
				user:'5923b9cc5aac131100cab1c1',
				identiferSet: maximumBinaryRelationship[x][0],
				identiferSet1: maximumBinaryRelationship[x][1],
			});
		}

		//--> INTEGER VALUE FOR 1 -> 1 Comparison
		var superArray = [];
		for (x in newOrderArray){
			//for (var i=0; i<10;i++){
				var model = newOrderArray[x];
				model.amountSet = [];
				model.amountSet1 = [];
				var amount = 0;
				for (z in model.identiferSet){
					amount = generate(10);
					model.amountSet.push(amount/model.identiferSet.length);
				}
				for (z in model.identiferSet1){
					amount = generate(10);
					model.amountSet1.push(amount/model.identiferSet1.length);
				}
				superArray.push(model);
			//}
		}

		//FLATTEN TO STRING
		for (x in superArray){
			superArray[x].identiferSet = superArray[x].identiferSet.join(',');
			superArray[x].identiferSet1 = superArray[x].identiferSet1.join(',');
			superArray[x].amountSet = superArray[x].amountSet.join(',');
			superArray[x].amountSet1 = superArray[x].amountSet1.join(',');
		}

		//6050
		//CREATE
		//Order.create(superArray).then(function(){
		//	console.log('DONE', superArray.length)
		//});

		//DELETE
		/*
		Order.find().limit(6050).skip(0).sort('createdAt DESC').then(function(models){
			if (models.length > 0){
	    		var idArray = models.map(function(obj) {return obj.id});
				Order.destroy(idArray, function(err, model) {
					console.log(model);
				});
    		}
		});
		*/
		
		//BTC | ETH | ETC
		/*
		var newOrderArray1 = [];
		for (var i = 0; i<10000; i++){
			var amount = 30*Math.floor(Math.random()*160)+1;
			var amount1 = 1/30*((10000)*amount/10000 + (10000)*1/10000*Math.abs(Math.sin(i)*1/30*i*Math.random()));
			var price = amount1/amount;
			newOrderArray1.push({
				user:'5923b9cc5aac131100cab1c1', //creator
				amountSet:amount,
				amountSet1:amount1,
				identiferSet:'ETH',
				identiferSet1:'CRE8',
				price:price,
			});
		}
		*/

		//CREATE
		//Order.create(newOrderArray1).then(function(){
		//	console.log('DONE', newOrderArray1.length)
		//});

		return maximumBinaryRelationship;
	},

	//TODO
	traverse: function(){

		//const identity = tf.eye(10000,10000).print();
		//  a b c d
		//a 1
		//b   1
		//c     1
		//d       1
		//PRESERVE LATTICE ORDER IN MM?
		//LARGER TENSOR OBJECT HELD IN DECT MEMORY? 

		//ways to encode info in a tensor? 
		//start traing path problems as the heigher dimensioanl object -- ok. got it.
		//CRE8CAPITAL | OFCOURSE THERE IS UNITY HERE

		//NEED COMBINITORIAL AND REDUCTION RELATIONSHIPS

		//TEST | CONSEQUENCE IS MM HAS IMBEUD INTELLIGENCE? ML IS THE TRAVERE?
		//COMBINITORIAL TENSORS? | REDUCE | TOTAL MARKET
		//var dataModel = dataService.getData(); //[even more, get orders and orderbook from here]
		//const valueMatrix = tf.input({shape: [dataModel.length, 8]}); //NOT REALLY TRUE

		//POSITION IS A TENSOR? --> CREATE MARKET BY MULT? YES!

		var uniqueMarkets = [];
		var marketSetObj = []; //NEED STRUCTURE

		function getAllSubsets(theArray) {
			return theArray.reduce(function (subsets, value) {
				return subsets.concat(subsets.map(function (set) {
					return [value].concat(set);
				}));
			}, [[]]);
	    };

	    function diff (a, b) {
		    return a.filter(function(i) {return b.indexOf(i) < 0;});
		};

		function searchObject(object, matchCallback, currentPath, result, searched) {
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
	    };

	    function updateObject(object, newValue, path){
	        var stack = path.split('.');
	        stack.shift();
	        while(stack.length>1){object = object[stack.shift()];}
	        object[stack.shift()] = newValue;
	    };

	    //:)
		function powersetDecompose(theArray, obj){
			//console.log(theArray);
			//RESTRUCT TO name.. and object list  
			//var obj = {};
			if (obj == {}){obj[theArray] = {data:[]}};
			for (x in theArray){
				if (theArray[x].length > 1){
					var powerSet = getAllSubsets(theArray[x]);
					powerSet.pop();
					powerSet.shift();
					//INTELLIGENCE HERE
					//TAKE A WALK :')
					//obj[theArray].data.push({name:theArray[x].join(','), data:[]})
					for (y in powerSet){
						var powObj = {};
						powObj[powerSet[y]] = {data: []}
						//TAKE A WALK
						obj[theArray[x].join(',')].data.push(powObj);
					}
					//console.log(theArray[x], powerSet, obj);
					//powersetDecompose(powerSet, obj);
				}
				else{
					//obj[theArray[x]] = 1
				}
			}
		};

		//:)
		//TODO: WITH powersetDecompose
		function identityWalk(identiferSet, num, iterator){
			num++
			var dimObj = {name:identiferSet, data:[]};
			Order.find({identiferSet:identiferSet}).then(function(orderModels){
				for (x in orderModels){
					if (orderModels[x].amountSet1.split(',').length > 1){
						var obj = {
							name:orderModels[x].identiferSet1,
							data: [],
						};
						var powerSet = getAllSubsets(orderModels[x].identiferSet1.split(','));
	    				powerSet.shift();
						//for(y in orderModels[x].identiferSet1.split(',')){
						//	obj.data.push({name:orderModels[x].identiferSet1[y], data:orderModels[x].amountSet1.split(',')[y]});
						//}
						for(y in powerSet){
							obj.data.push({name:orderModels[x].identiferSet1[y], data:orderModels[x].amountSet1.split(',')[y]});
						}
						dimObj.data.push(obj);
					}
					else{
						dimObj.data.push({name:orderModels[x].identiferSet1, data:1});
					}
				}
				//ex: a->b; b->c; c->d; d->e 
				//	  |		|	  |	 	|
				if (num < iterator){
					console.log(num);
					for (x in orderModels){
						train(orderModels[x].identiferSet1, num, iterator);
					}
				}
				console.log(dimObj)
			});
		};

		function tensorTesting(identiferSet){
			Order.find({identiferSet:identiferSet}).then(function(orderModels){
				var dimObj = {identiferSet:identiferSet, amountSet:1, rank:identiferSet.split(',').length, data:[]};
				var matrix = [];
				for (x in orderModels){
					//if (orderModels[x].identiferSet1.split(',').length==1){
						matrix.push([]);
						//for(var i=0; i<dimObj.rank;i++){
						for(var i=0; i<8;i++){
							matrix[x].push([]);
							if (orderModels[x].amountSet1.split(',')[i]){
								matrix[x][i].push(orderModels[x].amountSet1.split(',')[i]);
							}
							else{matrix[x][i].push(0);}
							//dimObj.data.push({
							//	identiferSet:orderModels[x].identiferSet1, 
							//	amountSet:orderModels[x].amountSet1
							//});
						}
					//}
				}
				console.log(matrix);
				//console.log(dimObj);
				//const valueMatrixTensor = tf.tensor(matrix);
				//valueMatrixTensor.print();
				//const input1 = tf.input({shape: [2, 2]});
				//const input2 = tf.input({shape: [2, 2]});
				//const input3 = tf.input({shape: [2, 2]});
				//const multiplyLayer = tf.layers.multiply();
				//const product = multiplyLayer.apply([input1, input2, input3]);
			});
		};

		//recursive train
		//relations are tensors
		//[a]-->[b] == amount ; a tensor | a-b tensor | b tensor | both 
		//[a]-->[b,c] == [amount, amount] | b,c tensor


		//TODO: WITH powersetDecompose
		//:)
		function train(identiferSet, num, iterator){

			num++
			//RENAME TO APLPHA AND BETA IDSETS
			Order.find({identiferSet:identiferSet}).then(function(orderModels){

				//how deep?
				//HOW MANY IT"S MAX EIGHT// there has the be a reduction..?? longest circuit is eight
				//SET, COMBOS OF ASSETS, SET OF UNIQUE ASSETS
				//const valueMatrix = tf.input({shape: [dataModel.length, dataModel.length, 8]});
				//const valueMatrix = tf.input({shape: [dataModel.length, dataModel.length. orderBookdepth, market.depth]});
				//ENCODING INFORMATION IN HIGHER DIMENSIONS :')
				//HIGH DIMENSIONAL RELATIONS [] = []

				//ONE VALUE MATRIX PER identiferSet
				//const valueMatrix = tf.input({shape: [orderModels.length, 8]});

				var dimObj = {name:identiferSet, data:[]};

				//THINK ABOUT THE POSITION OF COMBIITORIAL MARKETS IN THE TENS NET
				//UP CONVERT EVERYTHING TO EIGHT DIMENSIONS 
				for (x in orderModels){

					if (orderModels[x].identiferSet1.split(',').length > 1){
						var obj = {
							name:orderModels[x].identiferSet1,
							data: [],
						};

						//TODO

						//THIS IS THE PLACE! 

						//POWERSET --> IS ACTUAL. I WOULD LIKE TO INITIALIZE AN IDENTITY SET OR PROBABILITY SPACE
						//WE ARE LOOKING AT THE MANIFEST ORDER | VALUE MAP --> WHICH ITSELF IS A GRADIENT 
						for(y in orderModels[x].identiferSet1.split(',')){
							obj.data.push({name:orderModels[x].identiferSet1[y], data:orderModels[x].amountSet1.split(',')[y]});
						}
						dimObj.data.push(obj);
					}
					else{
						dimObj.data.push({name:orderModels[x].identiferSet1, data:orderModels[x].amountSet1});
					}

				}

				//ex: a->b; b->c; c->d; d->e .. 
				//	  |		|	  |	 	|

				if (num < iterator){
					console.log(num);
					for (x in orderModels){
						//train(orderModels[x].identiferSet1, num, iterator);
					}
				}

				console.log(dimObj);
				uniqueMarkets.push(dimObj);
				//uniqueMarkets.map(function(obj){return obj.name}).indexOf(models[x].identiferSet1);
				//console.log(uniqueMarkets);

				//NOW BUILD PATHS TO CREATE TENSOR WEIGHTS
				//console.log(valueMatrix);
				//CONVERSION IS A TENSOR OPERATION LOL

			});
		};

		function traverse(model, path){

			Order.find({identiferSet:model})
			.then(function(models){
				//LOG TRAVERSE PATH
				//BAD
				path = [];
				for (x in models){
					console.log(models[x].identiferSet1);
					//branch completion | do it symmetrically 
					if (uniqueMarkets.map(function(obj){return obj.identiferSet1}).indexOf(models[x].identiferSet1)==-1){
						uniqueMarkets.push({identiferSet1: models[x].identiferSet1, amountSet:models[x].amountSet, amountSet1:models[x].amountSet1});
						console.log(models[x].identiferSet1);
						path.push(models[x].identiferSet1,' --> ');
						console.log(path)
						traverse(models[x].identiferSet1, path);
					}
					else{path = [];}
				}

				//ONCE DONE..
				console.log(uniqueMarkets.length);

				//BAD
				if (uniqueMarkets.length == 254){
					//SIMPLIFY FROM ORDER BOOK.. | ONE ORDER SAMPLE RN
					for (x in uniqueMarkets){
						//set of best relations
						//soon to be set of set (ie by price --> scalar limit to  matrix)
						//? SET TO SET PRICE EQUIV IS FXNAL

						//REMEBER THE ORDER IS THE SUM.. TO QUANTIZE 
						var amountSet = uniqueMarkets[x].amountSet.split(',');
						var amountSet1 = uniqueMarkets[x].amountSet1.split(',');
						var marketObj = {};
						for (y in uniqueMarkets[x].identiferSet1.split(',')){
							//amountSet1/amountSet
							marketObj[uniqueMarkets[x].identiferSet1.split(',')[y]] = amountSet1[y]
						}
						//console.log(marketObj)
						marketSetObj.push(marketObj)
					}
				}

			});
		};

		function path(start, finish){
		};

		//VECTOR
		function valueMatrix(amount, identiferSet){

			Order.find({identiferSet:identiferSet}).then(function(orderModels){
				var dimObj = {identiferSet:identiferSet, amountSet:amount, rank:identiferSet.split(',').length, data:[]};
				var matrix = amount;
				for (x in orderModels){
					if (orderModels[x].identiferSet1.split(',').length==1){
						//var data = [];
						for(var i=0; i<dimObj.rank;i++){
							dimObj.data.push({
							//data.push({
								identiferSet:orderModels[x].identiferSet.split(',')[i], 
								identiferSet1:orderModels[x].identiferSet1, 
								amountSet:orderModels[x].amountSet.split(',')[i],
								amountSet1:orderModels[x].amountSet1,
								rate:orderModels[x].amountSet.split(',')[i]/orderModels[x].amountSet1,
							});
						}
						//dimObj.data.push(data);
					}
				}
				console.log(dimObj);

				//TODO: ENCODE ORDER BOOK GRADIENT | AMOUNT --> THE VECTOR IS FUNCTIONAL --> DISCRITIZED FXN
				//matrix = matrix.concat(dimObj.data.map(function(obj){return obj.rate}));
				//console.log(matrix);
				//const valueMatrixTensor = tf.tensor(matrix);
				//valueMatrixTensor.print();

			});
		};

		//TENSOR CONNECTIONS --> SHIFT IN DIMENSIONALITY --> NOT GOING TO DO CONVERSIONS --> USED FOR RESHAPING (IE TENSOR PRODUCT)
		//COMMUNICATIVE TENSORS REQURE SAME BASE DIMENSIONS

		const totalDimObj = [];
		//OKAY MB DONT DO THE CIRCLE .. DO THE CIRCUT WALK.. 
		//minimial no self similar
		function valueTensor(identiferSet, dimObj, recursion, depth, index){
			recursion++;
			Order.find({identiferSet:identiferSet}).then(function(orderModels){
				
				var foundObj = searchObject(totalDimObj, function (value) {return value != null && value != undefined && value.name == identiferSet;});
				if (foundObj.length != 0){

					//ONLY KEEP THE LONGEST CHAIN?
					//dimObj = foundObj[0].value;
					//dimObj = {name:identiferSet, rank:orderModels.length, data:[]};

					//console.log(foundObj);
					//if notcircular
					//self similarity is 0;inf;1
					console.log(foundObj);

					if (dimObj.length != 0){
						for (x in foundObj){
							if (x > 0){
								updateObject(totalDimObj, dimObj, foundObj[x].path);
							}
						}
					}
				}

				else{
					//console.log('rank',orderModels.length)
					dimObj = {name:identiferSet, rank:orderModels.length, data:[]};

					for (x in orderModels){
						if (dimObj.data){
							//PUSH ORDER BOOK
							dimObj.data.push({
								name: orderModels[x].identiferSet1,
								data: [],
							});
						}

						//else{console.log(dimObj.data)}

						for (i in orderModels[x].identiferSet1.split(',')){
							dimObj.data[x].data.push({
								identiferSet1:orderModels[x].identiferSet1, 
								amountSet1:orderModels[x].amountSet1,
							});
						}

						if (recursion < depth){
							valueTensor(orderModels[x].identiferSet1, totalDimObj, recursion, depth, x);
						}
					}
				}
				totalDimObj.push(dimObj);
				console.log(totalDimObj)
				//console.log(dimObj, totalDimObj);
			});
		};

		function valueTensorTotal(identiferSet, dimObj, recursion, depth, index){
			recursion++;
			Order.find({identiferSet:identiferSet}).then(function(orderModels){
				dimObj = {name:identiferSet, rank:orderModels.length, data:[]};
				for (x in orderModels){
					if (dimObj.data){
						//PUSH ORDER BOOK
						dimObj.data.push({
							name: orderModels[x].identiferSet1,
							data: [],
						});
					}
				}
				console.log(dimObj);
			});
		};

		
		//UNIFICATION OF INFORMATION AND VALUE -- IMBUED TOKENIZED INFORMATION -- CHECK THIS UNIVERSAL MAPPING 
		//STRING DATA ENCODING.. HOPEFULLY HUMAN READABLE --> PROMULAGATING EFFECTS OF EXCHANGE 
		//VALIDATIONS...
		//CREATE PROJECT --> TIME
			//TIME --> TASK
			//TASK --> PROJ LINKAGES

		//WERKIN
		function modification(){

			//Project.find().limit(10000).then(function(models){
			//	for (x in models){
			//		projectAssociations(models[x].parent, models[x].title).then(function(projectModel){
			//			console.log(projectModel)
			//		});
			//	}
			//});

			/*
			Transaction.find().limit(10000).then(function(models){
				for (x in models){
					if(!models[x].amountSet){
						models[x].amountSet = {};
						models[x].amountSet[models[x].identifier.toUpperCase()] = parseFloat(models[x].amount);
					}
					if(!models[x].user){models[x].user = models[x].from;}
					//SOON | ONCE FRONTEND UPDATES
					//UPDATE ALL ASSETS TO UPPERCASE.. ie. USd, usd
					//Object.keys(models[x]).forEach((key) => (models[x][key] == '') && delete models[x][key]);
					//Object.keys(models[x]).forEach((key) => (models[x][key] == null) && delete models[x][key]);
					//delete models[x]['ledger'];
					//delete models[x]['amount'];
					//delete models[x]['identifier'];
					//console.log(models[x])
					//Transaction.update({id:models[x].id}, models[x]).then(function(){
					//	console.log('update')
					//});
				}
			});
			*/

			//RETROACTIVE VALIDATIONS TO CREATE ASSOCIATIONS.. IMPLICIT VALIDATION
			//STRUCTURE VALIDATIONS AND ASSOICATEDMODELS :')
			//TAGS ARE ASSOCIATIED. 
			Time.find().limit(10000).then(function(models){
				for (x in models){

					//CONTENT, MEMBER, TASK, TIME, (PROJECT..) // STORE COMPOUND..? 
					//console.log('TYPE', models[x].type); // RETORACTIVE, TIME, STREAM, DATA API
					//console.log('associatedModels', models[x].associatedModels);
					//console.log('PROJECT', models[x].project);
					//console.log('TASK', dmodels[x].task);
					//console.log('STREAM', models[x].stream);

					//models[x].associatedModels = [];
					/*
					if (models[x].project){
						models[x].associatedModels.push({
							type:'PROJECT', 
							address:models[x].project, 
							validation:{
							}, 
							//VALIDATION NEST VS POPULATION
							associatedModels:[],
							assoiatedValidations:[],
						});
					}
					
					if (models[x].task){
						models[x].associatedModels.push({
							type:'TASK', 
							address:models[x].task, 
							validation:{
							}, 
							//VALIDATION NEST VS POPULATION
							associatedModels:[{
								type:'PROJECT', 
								address:models[x].project, 
								validation:{
								}, 
								//VALIDATION NEST VS POPULATION
								associatedModels:[],
								assoiatedValidations:[],
							}],
							assoiatedValidations:[],
						});
					}
					if (models[x].stream){
						models[x].associatedModels.push({
							type:'STREAM', 
							address:models[x].stream, 
							validation:{
							}, 
							//VALIDATION NEST VS POPULATION
							associatedModels:[],
							assoiatedValidations:[],
						});
					}
					if (models[x].startTime){
						models[x].type = 'RETROACTIVE';
					}
					else{
						models[x].type = 'TIMER';
					}
					//REMOVE NULL AND VERIFICATION SCORE
					//Object.keys(models[x]).forEach((key) => (models[x][key] == null) && delete models[x][key]);
					*/

					if (!models[x].associatedModels){
						models[x].associatedModels = [{type:'TASK', address:models[x].task}];
						//Time.update({id:models[x].id}, {associatedModels:models[x].associatedModels}).then(function(){
						//	console.log('update')
						//});
					}
				}
			});
			
			//Validation.find().limit(10000).then(function(postModels){
			//	for (x in postModels){
			//		var reactions = {plus:0,minus:0};
			//		if(postModels[x].reactions){
			//			reactions = postModels[x].reactions;
			//		} 
			//		console.log(reactions)
			//		Validation.update({id:postModels[x].id}, {reactions:reactions}).then(function(){
			//			console.log('update')
			//		});
			//	}
			//});

			//CREATE RETRO VALIDS
			Time.find().limit(10000).then(function(models){

				async.eachSeries(models, function (model, nextIteration){ 

					console.log(model.task, model.project, model.stream);

					var validationModels = [];

					var validationModel = {
						reputation:{},
						context:{
							general:100
						},
						user:model.user,
						creator:model.user,
						parameters:{
							charter:'GENERAL'
						},
						type:'HUMAN'
					};
					
					if (model.tags){
						var context = model.tags.split(',');
						for (x in context){
							validationModel.context[context[x]] = 100;
						}
						if (model.user){
							for (x in context){
								validationModel.reputation[context[x]] = 0;
							}
						}
					}
					
					if (model.task){
						validationModel.associatedModels = [
							{type:'TIME', address:model.id},
							{type:'TASK', address:model.task}
						];
						validationModels.push(validationModel);
					}
					if (model.project){
						validationModel.associatedModels = [
							{type:'TIME', address:model.id},
							{type:'PROJECT', address:model.project}
						];
						validationModels.push(validationModel);
					}

					console.log(validationModels);

					process.nextTick(nextIteration);
					//Validation.create().then(function(){
						//UPDATE TIME TO COMPUTED VALIDATION
						//VALIDATION.FIND()
					//});


				});	

			});

			Content.find().limit(700).skip(0).then(function(postModels){
				for (x in postModels){
					if (postModels[x].work){postModels[x].time = postModels[x].work }
					if (postModels[x].post){postModels[x].contentModel = postModels[x].post }
					if (!postModels[x].associatedModels){
						postModels[x].associatedModels = [];
						if (postModels[x].item){postModels[x].associatedModels.push({type:'ITEM', address:postModels[x].item})}
						if (postModels[x].order){postModels[x].associatedModels.push({type:'ORDER', address:postModels[x].order})}
						if (postModels[x].profile){postModels[x].associatedModels.push({type:'PROFILE', address:postModels[x].profile})}
						if (postModels[x].project){postModels[x].associatedModels.push({type:'PROJECT', address:postModels[x].project})}
						if (postModels[x].task){postModels[x].associatedModels.push({type:'TASK', address:postModels[x].task})}
						if (postModels[x].time){postModels[x].associatedModels.push({type:'TIME', address:postModels[x].time})}
						if (postModels[x].transaction){postModels[x].associatedModels.push({type:'TRANSACTION', address:postModels[x].transaction})}
						if (postModels[x].contentModel){postModels[x].associatedModels.push({type:'CONTENT', address:postModels[x].contentModel})}
					}
					//Object.keys(postModels[x]).forEach((key) => (postModels[x][key] == null) && delete postModels[x][key]);
					//console.log(x, postModels[x]);
			//		Content.update({id:postModels[x].id}, {time:postModels[x].time, contentModel:postModels[x].contentModel}).then(function(model){
			//			console.log('update')
			//		});
				}
			});

			/*
			Project.find().limit(5000).skip(0).then(function(projectModels){
				for (x in projectModels){
					//GEOCODE THEN
					//GEOCODE ON CREATE.. UTIL
					if (projectModels[x].location){
						if (typeof projectModels[x].location === 'string' || projectModels[x].location instanceof String){
							const googleMapsClient = require('@google/maps').createClient({
							  key: 'AIzaSyDcTGxD4H3lnx84u8EPcbh7PodbsEyzbg4'
							});
							(function(x, projectModels){
								googleMapsClient.geocode({address: projectModels[x].location}, function(err, response) {
									if (!err) {
										var location = {
											address:response.json.results[0].formatted_address,
											lat:response.json.results[0].geometry.location.lat,
											lng:response.json.results[0].geometry.location.lng,
										};
										console.log(location, projectModels[x].id);
										Project.update({id:projectModels[x].id}, {location:location}).then(function(model){
											console.log('update')
										});
									}
								});
							})(x, projectModels);
						}
						else{}
					}
					else{}
				}
			});
			*/

			//Task.find().limit(10000).skip(0).then(function(taskModels){
				//for (x in taskModels){
					//THIS IS A COMPUTED VALUE..  LOL 
					//console.log(taskModels[x]);
					//if(!taskModels[x].associatedModels){
					//	taskModels[x].associatedModels = [{type:'PROJECT', address:taskModels[x].project}]
					//}
					//console.log(taskModels[x].associatedModels,taskModels[x].project)
					//Task.update({id:taskModels[x].id}, {associatedModels:taskModels[x].associatedModels}).then(function(){
					//	console.log('update')
					//});
				//}
			//});

		};

		//modification();
		
		//train('A', 0, 8);
		//train('A', 0, 3);
		//VALUE MATRIX | 2ND ORDER
		//valueMatrix([1], 'A');
		//valueMatrix([1,1], 'B,A');
		//YES
		//valueTensor('A', [], 0, 2)
		//tensorTesting('B,A');
		//PUZZLE
		//[a,b]->[c,d]
		//powersetDecompose(['A','B','C', ['A','B'], ['B','C'], ['A','C'], ['A','B','C']], {});
		//identityWalk('A', 0, 3);
		//path('A','C,D');
		//traverse('A');
		//dataService.getData();
		//dataService.legacyTraverse(['C'],['A','B'],[1,2]);

	},

	//MAX 5 COMB ASSETS
	tensorBuild: function(){

		const marketTensor = [];

		//DUDE THIS IS GONNA BE MASSIVE..
		//MULTIEXCHANGE.. ? KEEP IT SIMPLE RN 

		//(A_m-->[A_m-n]--x7-->[A_m-n])

		Order.find({identiferSet:'A'}).limit(100).then((orderModels)=>{
			for (x in orderModels){
				//console.log(orderModels[x]);

			}
		});

		Token.find().limit(10).then((tokenModels)=>{
			
			//SORT BY ACTIVITY..?
			//NEED COMB LOGIC.. 
			//SOMEHOW LINK 5 ASSETS SO THERE IS A LATTICE IN THE CONNECTIONS OF COMP ASSETS IE A,B,C,D,E 

			var tokenSet = tokenModels.map((obj)=>{return obj.string}).slice(0,4);
			//var tokenSet = ['a','b','c','d','e','f'];
			var maximumBinaryRelationship = dataService.getData(tokenSet, true);

			for (x in maximumBinaryRelationship){
				var tensorIndex = marketTensor.map((obj)=>{return obj.name}).indexOf(maximumBinaryRelationship[x][0].join(','));
				if (tensorIndex == -1){
					marketTensor.push({name:maximumBinaryRelationship[x][0].join(','), data:[]});
					var tensorIndex = marketTensor.map((obj)=>{return obj.name}).indexOf(maximumBinaryRelationship[x][0].join(','));
					marketTensor[tensorIndex].data.push({
						name:maximumBinaryRelationship[x][1].join(','), 
						bids:new Array(2).fill(null).map(()=>new Array(maximumBinaryRelationship[x][0].length).fill(null)), 
						asks:new Array(2).fill(null).map(()=>new Array(maximumBinaryRelationship[x][1].length).fill(null))
					})
				}
				else{
					marketTensor[tensorIndex].data.push({
						name:maximumBinaryRelationship[x][1].join(','), 
						bids:new Array(2).fill(null).map(()=>new Array(maximumBinaryRelationship[x][0].length).fill(null)), 
						asks:new Array(2).fill(null).map(()=>new Array(maximumBinaryRelationship[x][1].length).fill(null))
					})
				}

			}
			//console.log(marketTensor);
			console.dir(marketTensor, { depth: null });

			//powerset x powerset

			//for (x in tokenModels){
			//	marketTensor.push({name:tokenModels[x].string, data:[]})
			//	for (y in tokenModels){
			//		//marketTensor[x].data.push({name:tokenModels[y].string, data:[]});
			//		marketTensor[x].data.push({name:tokenModels[y].string, bids:[], asks:[]})
			//	}
			//}

			//TENSOR
			//ASSETS x ASSETS
			//2, BIDS, ASKS
			//ORDERBOOK DIM -> 5
			//ORDERBOOK DEPTH --> 100? 
			//WHAT ABOUT INDIV ORDERS
			//EASY MARKET..
			//a,b,c,d
			var tensor = [];
			for (x in ['a','b','c','d']){
				for (y in ['a','b','c','d']){
					if ( x == y ) {
						tensor.push([[[1,1],[1,1],[1,1]],[[1,1],[1,1],[1,1]]])
					}
					else{
						tensor.push(
							[[[100,1],[200,2],[300,3]],
							[[100,1],[200,0.5],[300,0.1]]]
						);
					}
				}
			}
			//const simpleMarket = tf.tensor(tensor);
			//console.log(simpleMarket)
			//simpleMarket.print();

			//MM TENSOR.. EASY PLZ
			//[a,b,c,d]
			//DIM 4 BOOK
			//IT's THICK

			//USE REFLECTIONS? --> THERE ARE A SET OF THESE 'MIN MESH(s)' --> RERHAPS LIEING WITHIN E7+1 -- albeit this is a complete guess
			//HARD PART -- CREATE A MESH OF PLUR ASSETS WITH A FIELD OF RANK 5 TENSORS SUCH THAT TRAVERSAL ORDER IS MINIMIZED ACROSS THE 'RING?' / market
			//..OK .. WITHIN THE SUPER SET GEOMETRY. . NODE CONNTECTIONS | BRAID
			//this is getting hyper complex. break lel.. let's go back to create.capital . . --> perform operations with one exchange.. tensor

			var tokenSet = tokenModels.map((obj)=>{return obj.string}).slice(0,4);
			var maximumBinaryRelationship = dataService.getData(tokenSet, false);
			//console.log(maximumBinaryRelationship);


			var relationShipTensor = [];
			//OBtensor

			//SHAPE [ assets, 2, 5, 5, 2, n ],
			//TRAIN NN TO.. -->REDUCE.

			for (x in maximumBinaryRelationship){
				var bids = [[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]]];
				var asks = [[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]]];
				//var bids = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
				//var asks = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
				//var bids = [0,0,0,0];
				//var asks = [0,0,0,0];

				//ONE MORE DIM IN -- MM OB
				//THIS mm.. just so we can understand the struct
				//[amount,price]1,[amount,price]2,...[]n --> if asset in quasi. else 0

				for (y in maximumBinaryRelationship[x][0]){
					if (maximumBinaryRelationship[x][0] == 'A'){bids[0][0]=[1,1]}//[[[1,1],[1,2],[1,1],[2,1]],[[1,1],[1,2],[1,1],[2,1]]]}
					if (maximumBinaryRelationship[x][0] == 'B'){bids[1][1]=[1,1]}//[[[0,1],[2,1],[1,2],[2,1]],[[0,1],[2,1],[1,2],[2,1]]]}
					if (maximumBinaryRelationship[x][0] == 'C'){bids[2][2]=[1,1]}//[[[0,1],[2,1],[1,2],[2,1]],[[0,1],[2,1],[1,2],[2,1]]]}
					if (maximumBinaryRelationship[x][0] == 'D'){bids[3][3]=[1,1]}//[[[0,1],[2,1],[1,2],[2,1]],[[0,1],[2,1],[1,2],[2,1]]]}
				}

				for (y in maximumBinaryRelationship[x][1]){
					if (maximumBinaryRelationship[x][1] == 'A'){asks[0][0]=[1,1]}//[[[0,1],[2,1],[1,2],[2,1]],[[0,1],[2,1],[1,2],[2,1]]]}
					if (maximumBinaryRelationship[x][1] == 'B'){asks[1][1]=[1,1]}//[[[0,1],[2,1],[1,2],[2,1]],[[0,1],[2,1],[1,2],[2,1]]]}
					if (maximumBinaryRelationship[x][1] == 'C'){asks[2][2]=[1,1]}//[[[0,1],[2,1],[1,2],[2,1]],[[0,1],[2,1],[1,2],[2,1]]]}
					if (maximumBinaryRelationship[x][1] == 'D'){asks[3][3]=[1,1]}//[[[0,1],[2,1],[1,2],[2,1]],[[0,1],[2,1],[1,2],[2,1]]]}
				}

				relationShipTensor.push([bids,asks]);

			}
			//console.log(relationShipTensor)
			const multiMarketRelationship = tf.tensor(relationShipTensor);
			//console.log(multiMarketRelationship)
			//multiMarketRelationship.print();

			//const lattice =  tf.ones([8,8,8,8,8,8,8,8]);
			//console.log(lattice)
			//lattice.print();
			//const lattice =  tf.ones([4,4,4,4]);
			//console.log(lattice)
			//lattice.print();

			//GET ORDER BOOKS..
			//BUILD 1st ORDER 1st 
			//STRUCTURE AS RECURSIVE.

		})
	},

	//TO BE REPLACED BY LATTICE OPERATIONS
	//POWERSET LATTICE? 
	legacyTraverse:function(inputAssets, outputAssets, outputValues){

		//var inputVectorValues = []; //UNKNOWN
		var inputVectorAssets = inputAssets; //CAN BE UNKNOWN | OR NOT
		var inputVectorAssetString = inputVectorAssets.join('');

		//OUTPUT IS A SET | && || OPERATIONS
		var outputVectorValues = outputValues;
		var outputVectorAssets = outputAssets;
		var outputVectorAssetString = outputVectorAssets.join('');

		//MARKET RELATION --> PATH {}
		//TRANSFORM TO SELF SIMILAR ALGEBRA ~ Each asset is a crystal
		//GIVEN THE CRYSTALINE RELATIONSHIP BEWTWEEN A-H
		//CRYSTALINE MARKET (GOOD COPY LEL)
		//SET OF PATHS ARE SET OF ORDERS 
		//MAP THE BOOK TO THE LATTICE?
		//FIND SET OF PATHS FROM [N]->[M] | SOME DECOMPOSIIOTN OF DFINED SELF SIMIALR? 

		Order.find({identiferSet:inputVectorAssetString})
		.then(function(models){
			//console.log(models)
			//for (x in models){
			//	if (models[x].identiferSet1.contains(outputAssets)){
			//		console.log('sup')
			//	}
			//}
		});
	},

};