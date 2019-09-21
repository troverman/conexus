const async = require('async');
const request = require('request');

module.exports = {

	//TODO: MOVE OUT OF INTERVAL
	//TODO: TOKENIZE LOCATION | EXERCISE
	//TODO: MODULATE TO APP INPUT .. IE INTERVAL CONTRACT.. ON LOGIN OPERAND -- ... 
	//'''ORACLE''' to APIS -- > CONTINUOUS WEBSOCKET INPUT TO TOKEN LAYER
	//APP FOR TIME IN CARDIO..
	getFitbitData: function(req){

		User.findOne(req.id)
		.then(function(model) {

			var fitbitPassport = model.passports.filter(function(obj){return obj.provider=='fitbit'});
			var userId = fitbitPassport[0].identifier;
			var activity = 'steps';
			var peroid = '1m'; //1d, 7d, 30d, 1w, 1m
			var url = 'https://api.fitbit.com/1/user/' + userId + '/activities/' + activity + '/date/today/' + peroid + '.json';

			//NEED API PERMISSIONS... >:|
			//var url = 'https://api.fitbit.com/1/user/' + userId + '/activities/heart/date/2016-10-31/1d/1sec/time/00:00/00:01.json'

			var model= {
				url: url,
				json: true,
				headers: {'Authorization': ' Bearer ' + fitbitPassport[0].tokens.accessToken}
			};

			request(model, function (error, response, body) {
				//console.log(body['activities-heart'])
				//console.log(body)
			});

		})
		
	
	},

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
					Time.find({user:userModels[x].id}).populate('task').then(function(workModels){

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

						var balance = Object.assign(workSum, userModels[x].balance);
						if (balance['cre8']!=0){balance['cre8'] = 8};

						//console.log(workSum);
						//console.log(userModels[x].id);
						
						User.update({id:userModels[x].id}, {reputation:workSum, balance:balance}).then(function(userModels){console.log('UPDATE')})


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
					console.log('UPDATED', userModel[0].username, userModel[0].balance['UNIVERSAL'])
				});	
			}
			Token.find({string:'UNIVERSAL'}).then(function(tokenModels){
				if (!tokenModels[0].information.inCirculation){tokenModels[0].information.inCirculation = 0;}
				tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseInt(userModels.length);
				Token.update({id:tokenModels[0].id}, tokenModels[0]).then(function(tokenModel){
					console.log('UPDATED', tokenModel)
				});
			});
		});
	},


	//get time created today eight6400-time;
	//APP SPECIFIC 'DEAMON' -- MAKE DIS AN APP :)
	//WELL DOCUMENT UNIVERSAL TOKEN
	//privacyTokenProtocolPreAlpha

};

module.exports.intervalService = function(){

	//TODO!!! REMOVE THE PRE

	//PRE-ALPHA. 
	//setInterval(intervalService.universalTokenProtocolPreAlpha, 8640000);
	//setInterval(intervalService.reputationBuild, 8640000);
	//intervalService.reputationBuild();

	//POPULATE TOKEN -- ALPHA.. 
	//COALESE CONGRUENT DATA MAPPINGS.. 
	//TOKEN IS A MAPPING FROM STRING TO PROTOCOLS (WHICH ARE LOGIC MAPS)
	//setInterval(dataService.buildStringSpace, 3600);

	//CONNECTION | (VALIDATION - ASSOCIATION)

	//DATA 
	//MASSAGE TIME :)
	//utilService.tagsToAssociation('PROJECT', 2)
	//utilService.tagsToAssociation('TRANSACTION', 2)

	//remove null
	//remove depreciated data.. :)
	
	//Task.find().then(function(taskModels){
	//	for x in taskModels){
	//		dataService.buildAssociationFromValidation(taskModels[x]);
	//	}
	//});

	
	function populateMerch(){

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

	};
	//populateMerch();

	function bulkEditFunction(){
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
	};
	//bulkEditFunction();

	//MAINTAINCE.. REMOVE DUP TOKENS
	function removeDuplicateTokens(){
		Token.find().limit(1000000).then(function(tokenModels){
			const lookup = tokenModels.reduce((a, e) => {
			  a[e.string] = e.string in a ? ++a[e.string] : 0;
			  return a;
			}, {});
			tokenModels = tokenModels.filter(e => lookup[e.string]);
			console.log(tokenModels)
			for (x in tokenModels){Token.destroy(tokenModels[x].id, function(err) {console.log('delete token')});}
		})
	};
	//removeDuplicateTokens();

	function populateApps(){
		var apps = [    
	        {title:'STRUCTURE', description:'CRE8 CORE STRUCTURE APP', tags:'CRE8,CORE,STRUCTURE'},
	        {title:'LANGUAGE', description:'CRE8 CORE LANGUAGE APP', tags:'CRE8,CORE,LANGUAGE'},
	        {title:'CONGURENCE', description:'CRE8 CORE CONGURENCE APP', tags:'CRE8,CORE,CONGURENCE'},
	        {title:'MANIFOLD', description:'CRE8 CORE MANIFOLD APP', tags:'CRE8,CORE,MANIFOLD'},
	        {title:'CONNECTION', description:'CRE8 CORE CONNECTION APP', tags:'CRE8,CORE,MANIFOLD,CONNECTION,ASSOCIATION'},
	        {title:'ASSOCIATION', description:'CRE8 CORE ASSOCIATION APP', tags:'CRE8,CORE,MANIFOLD,CONNECTION,ASSOCIATION'},
	        {title:'CREDIT', description:'Credit Manifold', manifold:'+CREDIT+[INTEREST], +CREDIT+[ISSUE]+[TIMEDOMAIN]+[INTERESTASSETSET]+[INTERESTSET]', tags:'CRE8,CORE,MANIFOLD,CREDIT'},
	        {title:'FUTURE', description:'Future Manifold App', manifold:'+FUTURE+[ASSETSET]+[DATE]', tags:'CRE8,CORE,MANIFOLD,FUTURE'},
	        {title:'OPTION', description:'Option Manifold APP', manifold:'+OPTION+[ASSETSET]+[PRICESET]+[TIMEALPHA]+[TIMEBETA] ', tags:'CRE8,CORE,MANIFOLD,OPTION'},
	        {title:'SPONSOR', description:'Sponsor Manifold APP', manifold:'+SPONSOR+[NAMESPACE]', tags:'CRE8,CORE,MANIFOLD,SPONSOR'},
	        {title:'ATTENTION', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
	        {title:'RELATION', description:'Data Association', protocols:''},
	        {title:'VALIDATION', description:'Creation of consensus based data associations', protocols:''},
	        {title:'ITEM', description:'Item.', protocols:''},
	        {title:'CONTENT', description:'Content.', protocols:''},
	        {title:'ACTION', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
	        {title:'TRANSACTION', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
	        {title:'Universal Token', description:'Universal Token, an eglatarian initalization for value map creation', manifold:'UNIVERSALTOKEN+', tags:'CRE8,UNIVERSALTOKEN'},
	        {title:'Privacy Token', description:'Per day total of time NOT shared and contextualized 86400-dailyTime.', manifold:'UNIVERSALTOKEN+', tags:'CRE8,UNIVERSALTOKEN'},
	        {title:'Machine Learning Tokenization', description:'', tags:'Machine,ai,container,intellligence,pattern'},
	        {title:'Location Tokenization', description:'Location Tokenization; A Space Time Mapping', tags:'USD,bank,finance,fiat,authentication'},
	        {title:'Consumption', description:'Comsumption Tracking Tokenization', manifold:'CRE8+CONSUMPTION+', tags:'CRE8,consumption'},
	        {title:'Fitbit Activity Tokenization', description:'Fitbit Activity Tokenization, authentication and app integration', manifold:'APP+FITBIT+', tags:'fitbit,data,exercise,health,authentication'},
	        {title:'CRE8 Capital', description:'Smart Investment though Synthetic Intellligence; requires permissions to access balances.', tags:'CRE8,capital,investment,financialmanagement,ai,artificialintelligence'},
	        {title:'CRE8 Capital NASDEQ', description:'Smart Investment though Synthetic Intellligence; requires permissions to access balances. NASDEQ custodial relations', tags:'CRE8,capital,investment,financialmanagement,ai,artificialintelligence'},
	        {title:'CRE8 Capital NYSE', description:'Smart Investment though Synthetic Intellligence; requires permissions to access balances. NYSE custodial relations', tags:'CRE8,capital,investment,financialmanagement,ai,artificialintelligence'},
	        {title:'Voetr', description:'Consensus Building on Legislation & Political Representation', manifold:'APP+VOETR+', tags:'voetr,voting,politics,legislation,representation'},
	        {title:'Inspiro', description:'Tokenization of Inspiration https://www.inspiro.care', manifold:'APP+INSPIRO+', tags:'medicine,medical,hardware,device'},
	        {title:'CRE8.NYC', description:'CRE8 Partnership with New York City .NYC', tags:'CRE8,capital,investment,financialmanagement,ai,artificialintelligence'},
	        {title:'CRE8.CITY', description:'CRE8 Partnership with CITY', tags:'CRE8,capital,investment,financialmanagement,ai,artificialintelligence'},
	        {title:'Delivery', description:'2nd Stage Delivery Protocol', tags:'CRE8,capital,investment,financialmanagement,ai,artificialintelligence'},
	        {title:'USD Tokenization', description:'USD Tokenization, manages custodial relationships with affiliate banks and institutions.', manifold:'USD', tags:'USD,bank,finance,fiat,authentication'},
	        {title:'ETH Tokenization', description:'ETH Activity Tokenization, manages custodial relationships', manifold:'ETH', tags:'ETH,crypto,finance'},
	        {title:'ETH20 Tokenization', description:'ETH ERC 20 Tokenization, manages custodial relationships', manifold:'ETH20', tags:'ETH,crypto,finance,token,ERC20'},
	        {title:'ETH721 Tokenization', description:'ETH ERC 721 Tokenization, manages custodial relationships', manifold:'ETH721', tags:'ETH,crypto,finance,token,ERC721,NFT'},
	        {title:'BTC Tokenization', description:'BTC Tokenization, manages custodial relationships', manifold:'BTC', tags:'BTC,crypto,finance'},
	        {title:'LTC Tokenization', description:'LTC Tokenization, manages custodial relationships', manifold:'LTC', tags:'LTC,crypto,finance'},
	        {title:'XRP Tokenization', description:'XRP Tokenization, manages custodial relationships', manifold:'XRP', tags:'XRP,crypto,finance'},
	        {title:'TRON Tokenization', description:'TRON Tokenization, manages custodial relationships', manifold:'TRON', tags:'TRON,crypto,finance'},
	        {title:'STEEM Activity Tokenization', description:'STEEM Activity Tokenization, authentication and app integration', manifold:'STEEM+', tags:'STEEM,activity,app,authentication'},
	        {title:'Github', description:'Github Activity Tokenization, authentication and app integration', manifold:'GITHUB+', tags:'github,activity,app,authentication'},
	        {title:'Gitcoin App', description:'Gitcoin Activity Tokenization, authentication and app integration', manifold:'GITCOIN+', tags:'gitcoin,activity,app,authentication'},
	        {title:'CRATER', description:'virtual; augmented reality; crater uprising', manifold:'CRATER+', tags:'gitcoin,activity,app,authentication'},
	    ];

	    for (x in apps){
	    	var appModel = {
	    		title:apps[x].title,
	    		description:apps[x].description,
	    		tags:apps[x].tags,
	    		creator:'569f0edcd3e4c517075be5d6',
	    		information:{},
	    		data:{},
	    		manifold: apps[x].manifold,
	    		protocols:[
	    			'function(){}',
	    			'function(){}'
	    		],
	    		associatedValidations:[
	    			{
	    				context:[
	    					{type:'tag', score:100},
	    				],
	    				data:[
	    					{type:'APP', id:'self', direction:false},//[]},
	    				],
	    				connection:'connection',
	    			}
	    		]
	    	};
	    	App.create(appModel).then(function(){console.log('CREATED APP')})
		}
	};
	//populateApps();

	//LEGACY DATA UPDATE
	function legacyDataBuild(){

		//Task.find()
		//if (taskModels.project){}

	}

	//DATA SERVICE
	//dataService.getData();
	//dataService.traverse();
	//dataService.tensorBuild();

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
				//I AM THE CM THE MAYOR THE X THE Y THE Z 

	//BREAK OUT THE TASKS INTO CONTENT FOR THE CREATES

	//utilService.getNamesWorld();

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

	//TODO: GOOGLE MAPS & PLACES DB
	//utilService.googleMaps(model)

	//PURGE FXN
	//utilService.purge('(historical)');
	
};