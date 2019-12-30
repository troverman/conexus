//CRE8.POPULATION.ALPHA

module.exports = {

	import: { 
		Q: require('q'),		
	},

	populateMerch: async function(){

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

		for(var i=1;i<=100;i++){

			var itemModel = {

				title:'I AM VALUABLE ' + i,

				identifiers:{
					NTAG216: null,
					guid: guid(),
					uuidv4: uuidv4(),
					objectId: objectId(),
					keccak: createKeccakHash('keccak256').update('Valuable Token ' + i).digest('hex'),
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
			//Item.create(itemModel);

		}

		var itemModels = await Item.find({}).sort('createdAt DESC').limit(100)
		for (x in itemModels.reverse()){
			console.log('https://www.cre8.xyz/item/'+itemModels[x].id)
			//Item.destroy(itemModels[x].id, function(err) {})
		}	
	},

	populateData: async function(){

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
		//geoNamesApp.getGeoNames(geoModel);
		//geoNamesApp.getNamesWorld();

		//TODO: GOOGLE MAPS & PLACES DB
		//googleApp.getLocations(model);
	},

	//populateProjects
	//populateItems

	//GeneratorApp ... repeat

	//REDUCE TO NOT STATIC
	//REDUCE INTO APP.TOKENS
	tokenStringSpace: async function(){

		//TODO: ASSOCIATION WALK VS PARENT
		//TODO: THINK RECURSIVE AWAIT
		function projectAssociations(id, path){
			var deferred = populationApp.import.Q.defer();
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
		//REDUCE TO CONNECTIONS --> THEY BUILD THE PEER GLOBAL OBJ
		var promises = [
			Association.find().limit(100000),
			Action.find().limit(100000),
			Content.find().limit(100000),
			Connection.find().limit(100000),
			Item.find().limit(100000),
			Project.find().limit(100000),
			Reaction.find().limit(100000),
			Task.find().limit(100000),
			Time.find().limit(100000),
			Transaction.find().limit(100000),
			User.find().limit(100000),
			Validation.find().limit(100000)
		];
		var type = [
			'ASSOCIATION',
			'ACTION',
			'CONTENT',
			'CONNECTION',
			'ITEM',
			'PROJECT',
			'REACTION',
			'TASK',
			'TIME',
			'TRANSACTION',
			'USER',
			'VALIDATION',
		];
		var data = await populationApp.import.Q.all(promises);
		var tokenSet = [];

		for (x in data){
			for (y in data[x]){
				console.log(x, y, type[x])

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

					var itemBaseModel = {
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

					//STRING SPACE SHOULD BE HUMAN READABLE
					//MORE OR LESS CONNECTION WALK && ASSOCIATION WALK FACTORIZATION
					if (data[x][y].parent){

						var projectModel = await projectAssociations(data[x][y].parent, data[x][y].title);
						
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

						var aTokenModel = await Token.find({string:projectAssociationModel.string});
						if (aTokenModel.length == 0){
							var newToken = await Token.create(projectAssociationModel);
							console.log(newToken);	
						}
						else{
							var updatedToken = await Token.update({id:aTokenModel[0].id}, projectAssociationModel);
							console.log('UPDATE', projectAssociationModel);
						}
						
					}

				}

				//COULD ENCODE MORE EFFECTILY?? 
				//MOST LIKEY DESCRETIZE 
				//TODO: RECIEVER? 
				if (type[x] == 'REACTION'){

					

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

					tokenSet.push(reactionCreateModel);
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
		for (x in tokenSet_uniq){
			var token = tokenSet_uniq[x];
			var aTokenModel = await Token.find({string:token.string});
			if (aTokenModel.length == 0){
				var newToken = await Token.create(token);
				console.log(newToken)
				
			}
			else{
				var updatedToken = await Token.update({id:aTokenModel[0].id}, token);
				console.log('UPDATE', updatedToken)
			}
		}	
	},

};