//CRE8.DATASERVICE
//TODO: CONTAINIZER INTO MORE APPS 

//const tf = require('@tensorflow/tfjs');
//require('@tensorflow/tfjs-node');
const Q = require('q');


//associationBuild
//buildAssociatedModels
//buildAssociationNetwork
//buildAssociations
//buildConnections
//buildStringSpace
//initOrders
//getData
//traverse
//tensorBuild
//legacyTraverse

module.exports = {

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

	associationBuild: function(model){

		//RETURNS TREE OBJ
		//THEN REDUCETREE OBJ

		var deferred = Q.defer();
		var promises = [[]];
		var validationTree = {};
		//we want two functions.. important to compute the tree then reduce. 

		//FACTOR TO DO FROM ASSICATION?
		async function buildVaidationTree(validationModels, parent, level){
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

				var validationModelData = await Q.all(promises[level]);
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

	buildAssociatedModels:function(model){

		Validation.native(function(err, validation) {

			validation.find({"associatedModels.address":{$in :[model]}})
			.limit(limit)
			.skip(skip)
			.sort({'createdAt':-1})
			.toArray(function (err, validationModels) {
				validationModels = validationModels.map(function(obj){
					obj.id = obj._id;
					return obj;
				});

				var associationTree = {};
				for (x in validationModels){

					//LOOKING AT VALIDATION MODELS // BINARY RELATIONSHIP
					for (y in validationModels[x].associatedModels){
						if (!associationTree[validationModels[x].associatedModels[y].address]){
							associationTree[validationModels[x].associatedModels[y].address] = []
						}

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

	//NEED TO POPULATE SOME TO TEST :) 
	buildAssociations: function(model, level){

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

							Connection.find({}).then(function(){});

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

	//MAXIMUM BINARY NON-REFLECTIVE
	getData: function(network, reflective){
		
		//POPULATE A NEW NETWORK
		//TO CREATE A WELL CONNECTED NETWORK
		//SAMPLE SPACE | A-H Tokens
		//A-H + [SAMPLE SPACE]
		var newNetwork = network || "ABCD".split("");
		var positionSet = [];
	    var powerSet = utilityServiceApp.getAllSubsets(newNetwork);
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
			var intersection = utilityServiceApp.intersect(positionSet[x][0], positionSet[x][1]);
			var set1 = utilityServiceApp.diff(positionSet[x][0], intersection);
			var set2 = utilityServiceApp.diff(positionSet[x][1], intersection);
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
		//	if (!utilityServiceApp.isInArray(optim1, mirrorOptim[index])){
		//		optim2.push(part);
		//	}
		//});

	   	//STORED AS A MATRIX; algabraic lattice. 
	   	//var maximumBinaryRelationship = utilityServiceApp.removeMirrorDuplicates(optim);
	   	var maximumBinaryRelationship = [];
	   	if (reflective){maximumBinaryRelationship = optim;}
	   	if (!reflective){maximumBinaryRelationship = utilityServiceApp.removeMirrorDuplicates(optim);}
	   	
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
					amount = utilityServiceApp.generate(10);
					model.amountSet.push(amount/model.identiferSet.length);
				}
				for (z in model.identiferSet1){
					amount = utilityServiceApp.generate(10);
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

	//TODO: ORGANIZE LOL!
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

	    //:)
		function powersetDecompose(theArray, obj){
			//console.log(theArray);
			//RESTRUCT TO name.. and object list  
			//var obj = {};
			if (obj == {}){obj[theArray] = {data:[]}};
			for (x in theArray){
				if (theArray[x].length > 1){
					var powerSet = utilityServiceApp.getAllSubsets(theArray[x]);
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
						var powerSet = utilityServiceApp.getAllSubsets(orderModels[x].identiferSet1.split(','));
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
				
				var foundObj = utilityServiceApp.searchObject(totalDimObj, function (value) {return value != null && value != undefined && value.name == identiferSet;});
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
								utilityServiceApp.updateObject(totalDimObj, dimObj, foundObj[x].path);
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
		async function modification(){

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
			var models = await Time.find().limit(10000);
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
			var models = await Time.find().limit(10000)
			for (x in models){
				var model = models[x];

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

				//var newValidation = await Validation.create();
				//UPDATE TIME TO COMPUTED VALIDATION
				//VALIDATION.FIND()
				
			}
			

			var postModels = await Content.find().limit(700).skip(0);
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
				//var updatedContent = await Content.update({id:postModels[x].id}, {time:postModels[x].time, contentModel:postModels[x].contentModel});
			}
		
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
	tensorBuild: async function(){

		const marketTensor = [];

		//DUDE THIS IS GONNA BE MASSIVE..
		//MULTIEXCHANGE.. ? KEEP IT SIMPLE RN 

		//(A_m-->[A_m-n]--x7-->[A_m-n])
		//var orderModels = await Order.find({identiferSet:'A'}).limit(100);

		var tokenModels = await Token.find().limit(10)
			
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
		//const multiMarketRelationship = tf.tensor(relationShipTensor);
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
	},

	//TO BE REPLACED BY LATTICE OPERATIONS
	//POWERSET LATTICE? 
	legacyTraverse: async function(inputAssets, outputAssets, outputValues){

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

		var models = await Order.find({identiferSet:inputVectorAssetString});
		//console.log(models)
		//for (x in models){
		//	if (models[x].identiferSet1.contains(outputAssets)){
		//		console.log('sup')
		//	}
		//}

	},

};