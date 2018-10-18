var request = require('request');

module.exports = {

	getData: function(){

		//POPULATE A NEW NETWORK
		//TO CREATE A WELL CONNECTED NETWORK
		//SAMPLE SPACE | A-H Tokens
		//A-H + [SAMPLE SPACE]
		var newNetwork = "ABCDEFGH".split("");

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
			console.log(maximumBinaryRelationship[x]);
		}

		console.log(maximumBinaryRelationship.length)

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

	},

	traverse: function(){

		function traverse(model){

			var test = [];
			var uniqueMarkets = [];
			Order.find({identiferSet:model})
			.then(function(models){

				for (x in models){
					uniqueMarkets.push({identiferSet1: models[x].identiferSet1, amountSet:models[x].amountSet, amountSet1:models[x].amountSet1});
					if (uniqueMarkets.map(function(obj){return obj.identiferSet1}).indexOf(models[x].identiferSet1)==-1){//branch completion | do it symmetrically 
						traverse(models[x].identiferSet1);
					}
				}

				//SIMPLIFY FROM ORDER BOOK.. | ONE ORDER SAMPLE RN
				for (x in uniqueMarkets){
					console.log(uniqueMarkets[x]);
					//set of best relations
					//soon to be set of set (ie by price --> scalar limit to  matrix)
					//? SET TO SET PRICE EQUIV IS FXNAL

					//REMEBER THE ORDER IS THE SUM.. TO QUANTIZE 
					var amountSet = uniqueMarkets[x].amountSet.split(',');
					var amountSet1 = uniqueMarkets[x].amountSet1.split(',');
					var marketObj = {};
					for (y in uniqueMarkets[x].identiferSet1.split(',')){
						//amountSet1/amountSet
						marketObj[uniqueMarkets[x].identiferSet1.split(',')] = amountSet1[y]
					}
					console.log(marketObj)
				}

			});

		};

		traverse('A');
		
	},

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


};