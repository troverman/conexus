
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');
var Q = require('q');

module.exports = {

	getData: function(){
		//POPULATE A NEW NETWORK
		//TO CREATE A WELL CONNECTED NETWORK
		//SAMPLE SPACE | A-H Tokens
		//A-H + [SAMPLE SPACE]
		var newNetwork = "ABCD".split("");

		var positionSet = [];

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
		var maximumBinaryRelationship = removeMirrorDuplicates(optim);
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

		function powersetDecompose(theArray, obj){
			//console.log(theArray);
			//RESTRUCT TO name.. and object list  
			//var obj = {};
			if (obj == {}){
				obj[theArray] = {data:[]}
			};
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

		//recursive train
		//relations are tensors
		//[a]-->[b] == amount ; a tensor | a-b tensor | b tensor | both 
		//[a]-->[b,c] == [amount, amount] | b,c tensor
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
				const valueMatrix = tf.input({shape: [orderModels.length, 8]});

				var dimObj = {name:identiferSet, data:[]};

				//THINK ABOUT THE POSITION OF COMBIITORIAL MARKETS IN THE TENS NET
				//UP CONVERT EVERYTHING TO EIGHT DIMENSIONS 
				for (x in orderModels){

					if (orderModels[x].identiferSet1.split(',').length > 1){
						var obj = {
							name:orderModels[x].identiferSet1,
							data: [],
						};
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
		function valueMatrix(identiferSet){

			Order.find({identiferSet:identiferSet}).then(function(orderModels){

				const valueMatrixTensor = tf.input({shape: [orderModels.length, identiferSet.split(',').length]});

				var dimObj = {identiferSet:identiferSet, amountSet:1, rank:identiferSet.split(',').length, data:[]};

				for (x in orderModels){
					if (orderModels[x].identiferSet1.split(',').length==1){

						//for(var i=0; i<dimObj.rank;i++){

							dimObj.data.push({
								identiferSet:orderModels[x].identiferSet1, 
								amountSet:orderModels[x].amountSet1
							});

						//}

					}
				}

				console.log(dimObj);

			});

		};

		//train('A', 0, 8);
		//train('A', 0, 3);

		//VALUE MATRIX | 2ND ORDER
		valueMatrix('B,A');

		//PUZZLE
		//[a,b]->[c,d]


		//powersetDecompose(['A','B','C', ['A','B'], ['B','C'], ['A','C'], ['A','B','C']], {});
		//identityWalk('A', 0, 3);

		//path('A','C,D');
		//traverse('A');

		//dataService.getData();
		//dataService.legacyTraverse(['C'],['A','B'],[1,2]);
		
	},

	//TODO: RESHAPE | BUILD
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
						if (balance['cre8']!=0){balance['cre8'] = 8};
						console.log(workSum);
						console.log(userModels[x].id);
						User.update({id:userModels[x].id}, {reputation:workSum, balance:balance}).then(function(userModels){console.log('UPDATE')})
					});
				})(userModels, x);
			}
		});
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