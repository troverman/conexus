//var request = require('request');
//const tf = require('@tensorflow/tfjs');
//require('@tensorflow/tfjs-node');
var Q = require('q');

module.exports = {

	getData: function(){
		//var deferred = Q.defer();

		//POPULATE A NEW NETWORK
		//TO CREATE A WELL CONNECTED NETWORK
		//SAMPLE SPACE | A-H Tokens
		//A-H + [SAMPLE SPACE]
		var newNetwork = "ABCD".split("");

		//GENERATE POINT SPACE
		var positionSet = [];
		/*for(x in newNetwork){
			for(y in newNetwork){
				for(z in newNetwork){
					for(a in newNetwork){
						positionSet.push([newNetwork[x], newNetwork[y], newNetwork[z], newNetwork[a]]);
					}
				}
			}
		}*/

		//POWER SET
		function getAllSubsets(theArray) {
	      return theArray.reduce(function (subsets, value) {
	        return subsets.concat(subsets.map(function (set) {
	          return [value].concat(set);
	        }));
	      }, [[]]);
	    };
	    var powerSet = getAllSubsets(newNetwork);
	    powerSet.shift();

		//CREATE RELATIONSHIPS
	    for(x in powerSet){
			for(y in powerSet){
				positionSet.push([powerSet[x], powerSet[y]]);
			}
		}

		//LEGACY
		//BINARY REDUCTION
		/*var relatinshipSet = [];
		for (x in powerSet){
			for (y in powerSet[x]){
				for (z in powerSet[x]){
					relatinshipSet.push([powerSet[x][y], powerSet[x][z]]);
				}
			}
		}*/

		function intersect(a, b) {
		  return a.filter(Set.prototype.has, new Set(b));
		};

		function diff (a, b) {
		    return a.filter(function(i) {return b.indexOf(i) < 0;});
		};

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
		    for (var i=0;i<array.length;i++) {
		        if(JSON.stringify(array[i]) == JSON.stringify(item)){return true;}
		    }
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

		function generate(model) {
			return 100//Math.floor(Math.random() * model*100);
		}

		//RELATIONSHIPS CANCEL
		//OPTIMIZE..
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
	   	//HMM

		var maximumBinaryRelationship = removeMirrorDuplicates(optim);

		var newOrderArray = [];
		for (x in maximumBinaryRelationship){
			newOrderArray.push({
				user:'5923b9cc5aac131100cab1c1',
				identiferSet: maximumBinaryRelationship[x][0],
				identiferSet1: maximumBinaryRelationship[x][1],
			});
		}

		for (x in maximumBinaryRelationship){
			//console.log(maximumBinaryRelationship[x]);
		}

		//console.log(maximumBinaryRelationship.length)

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

		//console.log(superArray.length);

		//FLATTEN TO STRING
		for (x in superArray){
			superArray[x].identiferSet = superArray[x].identiferSet.join(',');
			superArray[x].identiferSet1 = superArray[x].identiferSet1.join(',');
			superArray[x].amountSet = superArray[x].amountSet.join(',');
			superArray[x].amountSet1 = superArray[x].amountSet1.join(',');
		}

		//console.log(superArray)

		//6050
		//Order.create(superArray).then(function(){
		//	console.log('DONE', superArray.length)
		//});

		/*Order.find().limit(6050).skip(0).sort('createdAt DESC').then(function(models){
			if (models.length > 0){
	    		var idArray = models.map(function(obj) {return obj.id});
				Order.destroy(idArray, function(err, model) {
					console.log(model);
				});
    		}
		});*/
		
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
		}*/
		//Order.create(newOrderArray1).then(function(){
		//	console.log('DONE', newOrderArray1.length)
		//});

		//deferred.resolve(maximumBinaryRelationship)
		//return deferred.promise;
		return maximumBinaryRelationship;

	},

	//TODO
	traverse: function(){

		//const model = tf.sequential();
		//model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
		//model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

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

		//PREPARE FOR DIM INCREASE
		//NEED BETTER BUT COOL TO COMBO TF


		//NEED COMBINITORIAL AND REDUCTION RELATIONSHIPS


		Order.find({identiferSet:'A'}).then(function(models){
			var trainData = [];

			//console.log(models.length);
			//how deep?
			//HOW MANY IT"S MAX EIGHT// there has the be a reduction..?? longest circuit is eight
			//SET, COMBOS OF ASSETS, SET OF UNIQUE ASSETS

			//const valueMatrix = tf.input({shape: [dataModel.length, dataModel.length, 8]});
			//const valueMatrix = tf.input({shape: [dataModel.length, dataModel.length. orderBookdepth, market.depth]});
			//ENCODING INFORMATION IN HIGHER DIMENSIONS :')

			//HIGH DIMENSIONAL RELATIONS [] = []

			const valueMatrix = tf.input({shape: [dataModel.length, 8]});

			//25x8 matrix
			var inputTest = [];

			//THINK ABOUT THE POSITION OF COMBIITORIAL MARKETS IN THE TENS NET
			for (x in models){

				//console.log(models[x].identiferSet1)//, models[x].amountSet, models[x].amountSet1);
				//console.log(models[x].amountSet1.split(',').length);

				//IT"S A LATTICE NETWORK..
				for(y in models[x].amountSet1.split(',')){
					if (models[x].amountSet1.split(',').length == 1){
						console.log(models[x].identiferSet1);

					}
				//	inputTest[x][y].push(models[x].amountSet1.split(',')[y]);
				}

				//ex: a->b; b->c; c->d; d->e .. 
				//	  |		|	  |	 	|

			}
			//console.log(inputTest)

			//NOW BUILD PATHS TO CREATE TENSOR WEIGHTS
			//console.log(valueMatrix);
			//CONVERSION IS A TENSOR OPERATION LOL
			

		});

		//DENSE LAYER ACTS AS COMBIN?--> NEED TO OUTPUT 

		//const input1 = tf.input({shape: [2, 2]});
		//const input2 = tf.input({shape: [2, 2]});
		//const multiplyLayer = tf.layers.multiply();
		//const product = multiplyLayer.apply([input1, input2]);
		//console.log(product);

		//TEST | CONSEQUENCE IS MM HAS IMBEUD INTELLIGENCE? ML IS THE TRAVERE?
		//COMBINITORIAL TENSORS? | REDUCE | TOTAL MARKET
		//var dataModel = dataService.getData(); //[even more, get orders and orderbook from here]
		//const valueMatrix = tf.input({shape: [dataModel.length, 8]}); //NOT REALLY TRUE

		//const input = tf.input({shape: [5]});
		//const denseLayer1 = tf.layers.dense({units: 10, activation: 'relu'});
		//const denseLayer2 = tf.layers.dense({units: 4, activation: 'softmax'});
		//const output = denseLayer2.apply(denseLayer1.apply(input));
		//const model = tf.model({inputs: input, outputs: output});
		//model.predict(tf.ones([2, 5])).print();


		//POSITION IS A TENSOR? --> CREATE MARKET BY MULT? MEH

		//>:'O
		var uniqueMarkets = [];
		var marketSetObj = []; //NEED STRUCTURE

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

		}

		//path('A','C,D')

		//traverse('A');
		//dataService.getData();
		//dataService.legacyTraverse(['C'],['A','B'],[1,2]);

	},


	//FOR THIS TO SCALE (ON MONGO) WE NEED A DATA MODEL 
	reputationBuild:function(){
		User.find().then(function(userModels){
			for (x in userModels){
				(function(userModels, x){

					Work.find({user:userModels[x].id}).populate('task').then(function(workModels){
						var workSum = {};

						//TOKENS ARE .. 
						for (y in workModels){
							if (!workSum[workModels[y].id]){workSum[workModels[y].id] = parseFloat(workModels[y].amount)}
							workSum[workModels[y].id] += parseFloat(workModels[y].amount);

							if (workModels[y].task && workModels[y].task.tags){
								for (z in workModels[y].task.tags.split(',')){

									//if (!workSum[workModels[y].task.tags.split(',')[z]+'+'+workModels[y].id]){workSum[workModels[y].task.tags.split(',')[z]+'+'+workModels[y].id] = parseFloat(workModels[y].amount)}
									//workSum[workModels[y].task.tags.split(',')[z]+'+'+workModels[y].id] += parseFloat(workModels[y].amount);

									if (!workSum[workModels[y].task.tags.split(',')[z].replace(/\s/g, '').toLowerCase()]){workSum[workModels[y].task.tags.split(',')[z].replace(/\s/g, '').toLowerCase()] = parseFloat(workModels[y].amount)}
									workSum[workModels[y].task.tags.split(',')[z].replace(/\s/g, '').toLowerCase()] += parseFloat(workModels[y].amount);

								}
							}

						}

						var balance = workSum;
						balance['cre8'] = 8;
						console.log(workSum);
						console.log(userModels[x].id);
						User.update({id:userModels[x].id}, {reputation:workSum, balance:balance}).then(function(userModels){console.log('UPDATE')})

					});

				})(userModels, x)
			}
		});
	},


	//TO BE REPLACED BY LATTICE OPERATIONS
	//POWERSET LATTICE? 
	legacyTraverse:function(inputAssets, outputAssets, outputValues){

		//var inputVectorValues = []; //UNKNOWN
		//var inputVectorAssets = ['C']; //CAN BE UNKNOWN | OR NOT
		//var inputVectorAssetString = 'C';

		var inputVectorAssets = inputAssets;
		var inputVectorAssetString = inputVectorAssets.join('');


		//MARKET RELATION --> PATH {}
		//TRANSFORM TO SELF SIMILAR ALGEBRA ~ Each asset is a crystal

		//var outputVectorValues = [1,2];
		//var outputVectorAssets = ['A','B'];
		//var outputVectorAssetString = 'A,B';

		//THIS CAN BE A SET.. 
		//OUTPUT IS A SET
		var outputVectorValues = outputValues;
		var outputVectorAssets = outputAssets;
		var outputVectorAssetString = outputVectorAssets.join('');


		//HOW MANY C == 1A, 2B
		//GIVEN THE CRYSTALINE RELATIONSHIP BEWTWEEN A-H

		//FIND SET OF PATHS FROM C->[A,B] | SOME DECOMPOSIIOTN OF DFINED SELF SIMIALR? 
		//CRYSTALINE MARKET (GOOD COPY LEL)

		//SET OF PATHS ARE SET OF ORDERS 

		//MAP THE BOOK TO THE LATTICE?

		//DIRECT 
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