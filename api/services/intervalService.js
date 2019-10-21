//CRE8.INTERVALSERIVCE

const async = require('async');
const Q = require('q');
const request = require('request');

module.exports = {

	//TODO: RESHAPE | BUILD
	//FOR THIS TO SCALE WE NEED A DATA MODEL 
	//REDO THIS LOL
	//SINGLE MAPPING
	//FRONT END DOES THAT DATA MODIFYING
		//IE IMMUTABLE MANIFOLD
			//IMMUTABLE+ (&or CREATECORE DEFINED REPUTTION+)

	//THIS IS ANCIENT. DELETE IT (ON STREAM)
	reputationBuild:function(){
		User.find().then(function(userModels){
			for (x in userModels){
				(function(userModels, x){
					Time.find({user:userModels[x].id}).limit(10000).populate('task').then(function(timeModels){

						var balances = {};
						//console.log(userModels[x].username, timeModels.length)

						for (y in timeModels){
							if (!balances[timeModels[y].id]){balances[timeModels[y].id] = parseFloat(timeModels[y].amount)}
							balances[timeModels[y].id] += parseFloat(timeModels[y].amount);

							if (timeModels[y].task && timeModels[y].task.tags){
								console.log(timeModels[y].task)
								for (z in timeModels[y].task.tags.split(',')){
									if (!balances[timeModels[y].task.tags.split(',')[z].replace(/\s/g, '').toUpperCase()]){balances[timeModels[y].task.tags.split(',')[z].replace(/\s/g, '').toUpperCase()] = parseFloat(balances[y].amount)}
									balances[timeModels[y].task.tags.split(',')[z].replace(/\s/g, '').toUpperCase()] += parseFloat(timeModels[y].amount);
								}
							}
						}

						var balance = Object.assign(balances, userModels[x].balance);
						if (balance['cre8']!=0){balance['cre8'] = 8};
						//console.log(balance)
					
						User.update({id:userModels[x].id}, {balance:balance}).then(function(userModels){console.log('UPDATE', userModels[0].username)})
					});
				})(userModels, x);
			}
		});
	},

	//DAILY RUN
	//DOCUMENT NICELY.
	//MAKE APP LIKE
	universalTokenProtocolPreAlpha:function(){
		User.find().then(function(userModels){
			for (x in userModels){
				if(!userModels[x].balance){userModels[x].balance = {}}
				if(!userModels[x].balance['UNIVERSAL']){userModels[x].balance['UNIVERSAL'] = 0}
				userModels[x].balance['UNIVERSAL'] = userModels[x].balance['UNIVERSAL'] + 1;
				User.update({id:userModels[x].id}, {balance: userModels[x].balance}).then(function(userModel){
					//console.log('UPDATED', userModel[0].username, userModel[0].balance['UNIVERSAL'])
				});	
			}
			Token.find({string:'UNIVERSAL'}).then(function(tokenModels){
				if (!tokenModels[0].information.inCirculation){tokenModels[0].information.inCirculation = 0;}
				tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseInt(userModels.length);
				Token.update({id:tokenModels[0].id}, tokenModels[0]).then(function(tokenModel){
					//console.log('UPDATED', tokenModel)
				});
			});
		});
	},

	privacyTokenProtocolPreAlpha:function(){
		//GET PRIVACY TOKEN ASSOCIATED MEMBERS
		var tokenSum = 0;
		User.find().then(function(userModels){
			for (x in userModels){
				if(!userModels[x].balance){userModels[x].balance = {}}
				if(!userModels[x].balance['PRIVACY']){userModels[x].balance['PRIVACY'] = 0}
				function getTimeAmount(model){
					//await
					var deferred = Q.defer();
					//GET TIME CREATED SINCE LAST EPOCH IE DAY
					model.epoch = 86400;
					//var time = new Date('2018-08-24T14:56:21.774Z').getTime() - 86400;
					var time = new Date();
					time.setDate(date.getDate() - 1);
					var query = {
						user:model.user,
						createdAt: {'<=': time}
			        };
					Time.find(query).then(function(timeModels){
						var sumOfTime = timeModels.reduce(function(a, b){return a + b[amount]}, 0);
						deferred.resolve(sumOfTime);
					});
					return deferred.promise;
				};

				getTimeAmount(userModels[x]).then(function(){

				});

				//not done
				userModels[x].balance['PRIVACY'] = userModels[x].balance['PRIVACY'] + (86400 - getTimeAmount(model)) ;
				tokenSum+=userModels[x].balance['PRIVACY']
				User.update({id:userModels[x].id}, {balance: userModels[x].balance}).then(function(userModel){
					console.log('UPDATED', userModel[0].username, userModel[0].balance['PRIVACY'])
				});	
			}
			Token.find({string:'PRIVACY'}).then(function(tokenModels){
				if (!tokenModels[0].information.inCirculation){tokenModels[0].information.inCirculation = 0;}
				tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseInt(tokenSum);
				Token.update({id:tokenModels[0].id}, tokenModels[0]).then(function(tokenModel){console.log('UPDATED', tokenModel)});
			});
		});
	},

	logOutAll: function(){
		User.find().then(function(userModels){
			for (x in userModels){
				User.update({id:userModels[x].id},{loggedIn:false}).then(function(userModels){});
			}
		});
	},

	//UTIL
	bulkEditFunction:function(){
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
		Q.all(promises)
		.then(function(data){
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
		});
	},

	//UTIL
	removeDuplicateTokens:function(){
		Token.find().limit(1000000).then(function(tokenModels){
			const lookup = tokenModels.reduce((a, e) => {
			  a[e.string] = e.string in a ? ++a[e.string] : 0;
			  return a;
			}, {});
			tokenModels = tokenModels.filter(e => lookup[e.string]);
			console.log(tokenModels);
			for (x in tokenModels){Token.destroy(tokenModels[x].id, function(err) {console.log('delete token')});}
		})
	},

	//GENERATOR
	populateMerch:function(){

		function uuidv4() {return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);return v.toString(16);});};
		function guid(){function s4() {return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);} return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();};
		function objectId () {return Math.floor(Date.now() / 1000).toString(16) + ' '.repeat(16).replace(/./g, () => Math.floor(Math.random() * 16).toString(16))};

		const createKeccakHash = require('keccak');
		const crypto = require('crypto');
		
		//IPFS, BTC base58
		const bs58 = require('bs58');

		//USE MONGO ADDRESS 
		//KECK HASH
		//COULD LINK INTO NOVO CONTENT GENERATOR.....
		//private -ECDSA-> public -keccak-> address  
		//https://zelark.github.io/nano-id-cc/
		//ITEM MERCH

		for( var i=1;i<=100;i++){

			var itemModel = {

				title:'I AM VALUABLE ' + i,

				identifiers:{
					NTAG216:null,
					guid:guid(),
					uuidv4:uuidv4(),
					objectId:objectId(),
					keccak:createKeccakHash('keccak256').update('Valuable Token ' + i).digest('hex'),
					sha256: crypto.createHmac('sha256', 'CRE8').update('Valuable Token ' + i).digest('hex'),
					base58: bs58.encode(Buffer.concat([Buffer.from('12', 'hex'),  Buffer.from(crypto.createHash('sha256').update('Valuable Token ' + i).digest().byteLength.toString(16), 'hex'), crypto.createHash('sha256').update('Valuable Token ' + i).digest()])).toString(),
				},

				tags:['value','rare','token','epoxy','collectable','CRE8', i, 'valuable' + i, 'IAMVALUALBE'],
				content:'<h5>Valuable Token '+i+'</h5><p>The first run of collectable CRE8 token assets.</p> ' + '<img src=\"https://i.imgur.com/G6BEYgy.png\"\/>',
				
				associatedModels:[
					{type:'MEMBER', id:'569f0edcd3e4c517075be5d6'}
				],
				
				location:null,

				user:'569f0edcd3e4c517075be5d6',
				creator:'569f0edcd3e4c517075be5d6',
				owner:'569f0edcd3e4c517075be5d6',

				model:'ITEM',
				type:'I AM VALUABLE',

				actions:[],
				reactions: {plus:0,minus:0},
				attention: {general:0},

				data:{
					applications:{
						attention:{general:0},
						reaction:{plus:0,minus:0},
						action:['USE'],
						item:{
							isGenerator:false,
							type:'ITEM',
							verbs:['USE'],
							owner:'569f0edcd3e4c517075be5d6',
							type:'I AM VALUABLE'
						},
						location:null,
					}
				},
				info:{
					isGenerator:false,
					type:'I AM VALUABLE',
					verbs:['USE'],
				},

			};

			//dude wot max data in hash is 2'091'752 tb
			//we will chack to se if our data is correct. we close yay
			//something someting savings by sending only hashes

			//hashed information in the string as the asset --> simple form
				//store string as id to map to data
			itemModel.dataHash=crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(itemModel)).digest('hex');
			itemModel.identifiers.dataHash=crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(itemModel)).digest('hex');

			//console.log(itemModel);
			//Item.create(itemModel).then(function(newItemModel){});

		}

		Item.find({}).sort('createdAt DESC').limit(100).then(function(itemModels){
			for (x in itemModels.reverse()){
				console.log('https://www.cre8.xyz/item/'+itemModels[x].id)
				//Item.destroy(itemModels[x].id, function(err) {})
			}
		});
	},

	populateData:function(){

		//DATA POPULATION
		//COFFEE DB
		//VENUE DB
		//CHURCH DB
		//LIBRARY DB
		//COWORK DB
		//THRIFTSHOP DB
		//FOODBANK DB

		//TOWN / COUNTY
		//PARK DB
			//CLEAN PARK TASK
			//COMMUNITY EVENT
				//MOVIE NIGHT
					//I AM THE AM THE MAYOR THE X THE Y THE Z 

		//US - utilService.getGeoNamesByParent(6252001, '', 'voetr5', 1);
		//NC - utilService.getGeoNamesByParent(4482348, '', 'voetr3', -2);
		//TN - utilService.getGeoNamesByParent(4662168, '', 'voetr1', -100);
		//INDIA - utilService.getGeoNamesByParent(1269750, '', 'voetr3', -1);
		//CHINA - utilService.getGeoNamesByParent(1814991, '', 'voetr4', -1);
		//UK - utilService.getGeoNamesByParent(2635167, '', 'voetr5', -1);
		//35.9606, -83.9207 // knox
		//35.996948, -78.899017 // durham
		//40.730610, -73.935242 // nyc; bushwick
		//37.773972, -122.431297 // BAY AREA
		//37.5483, -121.9886 //FREEMONT
		//35.7578° N, 81.8888° //LAKE JAMES STATE PARK
		var geoModel = {
			username:'troverman',
			lat:'35.7578',
			lng:'-81.8888',
			featureCode:'PRK', //PRK, CH, CTRCM, CMN, S.CAFE, S.SCH, LIBR
			type:'latlng', //parent, latlng
			radius:'35',
			parentId:'4482348'
		};
		//utilService.getGeoNames(geoModel);
		//utilService.getNamesWorld();

		//TODO: GOOGLE MAPS & PLACES DB
		//utilService.googleMaps(model);
	},
	
};

module.exports.intervalService = function(){

	//PRE-ALPHA INTERVALS 
	setInterval(intervalService.universalTokenProtocolPreAlpha, 8640000);
	//setInterval(intervalService.privacyTokenProtocolPreAlpha, 8640000);
	setInterval(intervalService.reputationBuild, 8640000);
	setInterval(intervalService.logOutAll, 8640000);
	setInterval(dataService.buildStringSpace, 8640000);

	//DATA UPGRADE..
	//utilService.tagsToAssociation('PROJECT', 2);
	//utilService.tagsToAssociation('TRANSACTION', 2);

	//APP DEV IS CONNECTION DESIGN 
		//CONNECTION WRT TOKEN PROTOCOLS
			//MULTI CONNECTIONS

	//LEGACY
	//FOLLOWERS TO ASSOCIATION
	function followersToAssociation(){
		Follower.find({}).limit(1000).skip(0).sort('createdAt DESC').then(function(followerModels){
			console.log(followerModels);
			for (x in followerModels){

				//FINALIZE 'CONTEXT + PARAMETERS'
				//SOURCE AND TARGET (PEER VALIDATION) IN CONNECTION IS BY MANIFOLD REPUTATION MULTIPLIERS 
					//IN PROTOCOL... IN CONNECTION 'CODE' (OHHHHHH WOW), DEFIN THAT ONLY MEMBER AND ASSIGN THEM SELVES AS SOURCE 
						//.. SOMTHIN. LOL :) 

				//SCOPE
				//GET CONNECTION
					//REUCTION FUNCTION DEFINED

				(function(followerModels, x){
					//DEFAULT FOLLOWER CONNECTION
					Connection.find().then(function(connectionModel){

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

						console.log()


						//CREATE VALIDATION
						//Validation.create(validationModel).then(function(validationModels){

							//REDUCTION FUNCTION (CONNECTION DEFINED)
							//EASYHERE
								//CONNECITION AGNOSTIC?
									//IE COMPUTED NOT STORED?
										//YEE... WE CAN COMPUTE 
										//I WANNA SEE THE ASSOCIATION WITH ANOTHER CONNECTION --> EASY FRONT END FLOW? 
												//YA RECOMPUTE ALGS ARE EASY


							//CREATE ASSOCIATION
							//Association.create(validationModel).then(function(validationModels){});

						//});

					});
		    	})(followerModels, x)


			}
		});
	};
	//followersToAssociation();
	
	//Transaction.find({}).limit(10000).then(function(transactionModels){
	//	for (x in transactionModels){
	//		if(!transactionModels[x].context){transactionModels[x].context = transactionModels[x].tags}
	//		console.log(transactionModels[x].context)
	//		Transaction.update({id:transactionModels[x].id}, {context:transactionModels[x].context})
	//	}
	//});
	
	//DATA SERVICE
	//dataService.getData();
	//dataService.traverse();
	//dataService.tensorBuild();

	//PURGE FXN
	//utilService.purge('(historical)');
	
};