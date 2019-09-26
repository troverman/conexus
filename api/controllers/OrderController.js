//CRE8.ORDER
const Q = require('q');
const crypto = require('crypto');

module.exports = {

	get: function(req, res) {

		//CREATE THE TENSOR OBJ..
		//HUGELY HIGH DIM
		//BUILD UP -- HIGHEST DIM CONNECTION IS BASE
		//SORT ASSETS.. 
		function buildMarketV1(baseMarket, orders){
			var market = {};
			for (x in orders){
				//which side of the order?
				var setAlpha = Object.keys(orders[x].setAlpha).join(',');
				var setBeta = Object.keys(orders[x].setBeta).join(',');
				//THESE ARE DOODLES IN NO WAY OPTIMUM
				//asks
				if (setAlpha.indexOf(baseMarket) == -1){
					//LINK IN ORDERS AND ORDER OBJ ID. && SORT
					var array = [];
					for (y in setAlpha.split(',')){array.push(1/(orders[x].setAlpha[setAlpha.split(',')[y]]/orders[x].setBeta[baseMarket]))}
					if (!market[setAlpha]){market[setAlpha] = [array];}
					else{market[setAlpha].push(array)}
				}
				//bids
				if (setBeta.indexOf(baseMarket) == -1){
					var array = [];
					for (y in setBeta.split(',')){array.push(orders[x].setBeta[setBeta.split(',')[y]]/orders[x].setAlpha[baseMarket])}
					if (!market[setBeta]){market[setBeta] = [array];}
					else{
						market[setBeta].push(array);
						//multidim lol
						//square tensor for operations
				        //market[setBeta] = market[setBeta].sort()
					}
				}
			}
			return market
		};

		function buildMarket(baseMarket, orders){
			var market = {};
			for (x in orders){
				var setAlpha = Object.keys(orders[x].setAlpha).join(',');
				if (setAlpha.indexOf(baseMarket) == -1){
					var array = [];
					for (y in setAlpha.split(',')){array.push(1/(orders[x].setAlpha[setAlpha.split(',')[y]]/orders[x].setBeta[baseMarket]))}
					if (!market[setAlpha]){market[setAlpha] = [array];}
					else{market[setAlpha].push(array)}
				}
				if (setBeta.indexOf(baseMarket) == -1){
					var array = [];
					for (y in setBeta.split(',')){array.push(orders[x].setBeta[setBeta.split(',')[y]]/orders[x].setAlpha[baseMarket])}
					if (!market[setBeta]){market[setBeta] = [array];}
					else{market[setBeta].push(array);}
				}

			}
			return market;

			//SET OF ORDERS WHERE ORDER M 
			//Set of Orders O Where Market M is
			//:p
			//..
			
		};

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		
		console.log('GET ORDER', req.query);

		//buildMarket();

		if(req.query.id){
			Order.find({id:req.query.id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Order.subscribe(req, [models[0]]);
				res.json(models[0]);
			});
		}

		else if(req.query.user){
			Order.find({user:req.query.user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				res.json(models);
			});
		}

		else if(req.query.project){
			Order.find({project:req.query.project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				res.json(models);
			});
		}

		//MARKET.. IS ONLY
		//HIGH COMBINATORIAL..... CAN SEE LOWER BOUDED ORDERS IN TRAVERSAL (AS WE OPEN UP)

		else if(req.query.setAlpha && !req.query.setBeta){

			//doesnt have to be perfect the frist time
			var setAlpha = req.query.setAlpha.split(',');
			var andQuery = { $and: []};
			var query = {};

			for (x in setAlpha){query[ "setAlpha."+setAlpha[x]] = {$gt: 0};}

			andQuery.$and.push(query);
			andQuery.$and.push({ "$where": "return Object.keys(this.setAlpha).length == "+setAlpha.length })

			Order.native(function(err, order) {
				order.find(andQuery)
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					models = models.map(function(obj){obj.id = obj._id; return obj;});

					//build market then on action add. dont need to build every get
					//buildMarket(models);

					var promises = [];
					for (x in models){promises.push(User.find({id:models[x].user.toString()}))}
					Q.all(promises).then((populatedModels)=>{
						for (x in models){models[x].user = populatedModels[x][0];}
						res.json(models);
					});
				});
			});
		}

		//?? 
		else if(req.query.setBeta && !req.query.setAlpha){
			var query = {};
			query[ "setBeta."+req.query.setBeta] = {$gt: 0};
			Order.native(function(err, order) {
				order.find(query)
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					models = models.map(function(obj){obj.id = obj._id; return obj;});
					var promises = [];
					for (x in models){promises.push(User.find({id:models[x].user.toString()}))}
					Q.all(promises).then((populatedModels)=>{
						for (x in models){models[x].user = populatedModels[x][0];}
						res.json(models);
					});
				});
			});
		}

		//MARKETPAIR
		else if(req.query.setAlpha && req.query.setBeta){
			
			var queryAlpha = {};
			var queryBeta = {};
			var andQuery = { $and: []};

			var setAlpha = req.query.setAlpha.split(',');
			var setBeta = req.query.setBeta.split(',');

			console.log(setAlpha, setBeta);

			for (x in setAlpha){
				queryAlpha[ "setAlpha."+setAlpha[x]] = {$gt: 0};
			}

			for (x in setBeta){
				queryBeta[ "setBeta."+setBeta[x]] = {$gt: 0};
			}

			andQuery.$and.push(queryAlpha);
			andQuery.$and.push(queryBeta);

			//SLOW? mb..
			//this is hack
			//should i turn into array.. UGH
			//works tho
			//weird query
			andQuery.$and.push({ "$where": "return Object.keys(this.setAlpha).length == "+setAlpha.length })
			andQuery.$and.push({ "$where": "return Object.keys(this.setBeta).length == "+setBeta.length })
			
			//setAlpha = [
				//{asset:'TROVERMAN',amount:10},
				//..
			//]
			//vs
			//setAlpha.troverman = 10

			console.log(andQuery);

			Order.native(function(err, order) {
				order.find(andQuery)
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					console.log(models);
					models = models.map(function(obj){obj.id = obj._id; return obj;});
					res.json(models);
				});
			});
		}

		//LOL WEIRD STRUCTURE 

		//COULD STORE TO TOKEN MODEL.. SHOULD DO THIS.. 
			//DB OF TOKENS? --> YEAH .. 
				//PLURLISTIC TO MAPPING .. 
					//never 1 or 2, it's 1 and 2

		//single market interaction in its own higher d market --> (up)compose
		//include higer dim positions in .. ?
			//as in in market b | a = b,c (?)
								//b = a,c (y)

		else if(req.query.item || req.query.market){

			var item = req.query.item || req.query.market
			var itemSet = item.split(',');

			var query = [];

			var queryAlpha = {};
			var queryBeta = {};

			for (x in itemSet){queryAlpha[ "setAlpha."+itemSet[x]] = {$gt: 0};}
			for (x in itemSet){queryBeta[ "setBeta."+itemSet[x]] = {$gt: 0};}

			//COMPLEX LEL
			var query = { 
				$or: [
					{ $and: [
						queryAlpha,
						{ "$where": "return Object.keys(this.setAlpha).length == "+itemSet.length }
					]},
					{ $and: [
						queryBeta,
						{ "$where": "return Object.keys(this.setBeta).length == "+itemSet.length }
					]}
				]
			};

			console.log(query)

			Order.native(function(err, order) {
				order.find(query)
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					console.log(models)
					if (models.length != 0){
						models = models.map(function(obj){obj.id = obj._id; return obj;});

						//var market = buildMarket(item, models);
						res.json({data:models,market:[]});

						//var promises = [];
						//for (x in models){promises.push(User.find({id:models[x].user.toString()}))}
						//Q.all(promises).then((populatedModels)=>{
						//	for (x in models){models[x].user = populatedModels[x][0];}
						//	res.json({data:models,market:market});
						//});
					}
					else{res.json({data:[],market:{}})}
				});
			});

		}

		else{res.json([]);}
		
	},

	create: function (req, res) {

		//DEPRECIATE TOKEN IN FAVOR OF ASSET
		function mintTokens(order){

			for (x in Object.keys(order.setAlpha)){
				Token.find({string:Object.keys(order.setAlpha)[x]}).then(function(tokenModels){
					if (tokenModels.length == 0){
						var newTokenModel = {
							string:Object.keys(order.setAlpha)[x],
							information:{markets:1, inCirculation:1},
							protocols:['CRE8', 'ORDER'],
							logic:{transferrable:true, mint:''}
						};
						Token.create(newTokenModel).then(function(){console.log('TOKEN CREATED', newTokenModel);});
					}
					else{
						tokenModels[0].information.markets++; 
						Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information}).then(function(){console.log('TOKEN UPDATED')});
					}
				});
			}

			for (x in Object.keys(order.setBeta)){
				Token.find({string:Object.keys(order.setBeta)[x]}).then(function(tokenModels){
					if (tokenModels.length == 0){
						var newTokenModel = {
							string:Object.keys(order.setBeta)[x],
							information:{markets:1, inCirculation:1},
							protocols:['CRE8', 'ORDER'],
							logic:{transferrable:true, mint:''}
						};
						Token.create(newTokenModel).then(function(){console.log('TOKEN CREATED', newTokenModel);});
					}
					else{
						tokenModels[0].information.markets++; 
						Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information}).then(function(){console.log('TOKEN UPDATED')});
					}
				});
			}

		};

		//ORDERS ASSOCIATION
		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+ORDER'];
			return protocolTokens;
		};

		//TODO
		function createAssociation(order){
			
			//DISCRETE MARKET ASSOCIATION (MARKET PAIR)
			Connection.find({}).limit(1).then(function(connectionModel){

				var associationModel = {

					model: 'ASSOCIATION',
					content: JSON.stringify(order.setAlpha)+'to '+ JSON.stringify(order.setBeta),

					//CONNECTION DEFINED>>>>
					//NEED MARKET DATA MODEL..
					associatedModels: [
						{type:'MARKET', id: JSON.stringify(order.setAlpha)},
						{type:'MARKET', id: JSON.stringify(order.setBeta)}
					],
					contextSet:[
						order.setAlpha,
						order.setBeta
					],

					computedContextSet:[],
					computedLiquidityPool:[],

					//COMPUTED
					context: {},
					setAlpha:order.setAlpha,
					setBeta:order.setBeta,

					data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}

				};

				associationModel.connection = {
					title:'MARKET-MARKET ORDER CONNECTION BETA',
					parameters:{
						mapping:['context','reputation','computed'],
					},
					computedFrom:'ORDER'
				};

				associationModel.connection = connectionModel[0];

				//IF NOT ASSOCIATION CREATE
				Association.create(associationModel).then(function(newAssociationModel){
					console.log('NEW ORDER ASSOCIATION', newAssociationModel);
				});

				//ELSE COMPUTE NEW ORDER BOOK!!! --> START IT UPPPPPPP
					//VROOM

			});


		};

		//TOKEN(ASSET) VS MARKET VS MARKETPAIR
		//SINGLE - COMBINATORIAL - 
		//ORDER 
			//=> {}={}
		//MARKET
			//= SUM (SET)

		//CAN DEFINE ORDER MODEL IN MARKET-MARKET CONNECTION LOGIC.. 
		var model = {
			model: 'ORDER',

			//DATA -- MODEL (APP)
			setAlpha: req.param('setAlpha'),
			setBeta: req.param('setBeta'),
			orderSet:[req.param('setAlpha'), req.param('setBeta')],
			
			status: req.param('status'),
			type: req.param('type'),

			creator: req.param('user'),
			user: req.param('user'),

			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}

		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		console.log('CREATE ORDER', model);
		Order.create(model)
		.exec(function(err, order) {
			if (err) {return console.log(err);}
			else {
				Order.publish([order.id], {verb: 'create', data: order});
				mintTokens(order);
				//createValidation..createAssociation..createMarket
				createAssociation(order);
				res.json(order);
			}
		});
	},

	update: function (req, res) {},

};

