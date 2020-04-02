module.exports = {
	get: async function(input, output) {

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
		};

		var limit = parseInt(input.query.limit) || 1;
		var skip = parseInt(input.query.skip) || 0;
		var sort = input.query.sort || 'createdAt DESC';
		console.log('GET ORDER', input.query);

		if(input.query.id){
			var models = await Order.find({id:input.query.id}).limit(limit).skip(skip).sort(sort).populate('user')
			Order.subscribe(req, [models[0]]);
			output.json(models[0]);
		}
		else if(input.query.user){
			var models = await Order.find({user:input.query.user}).limit(limit).skip(skip).sort(sort).populate('user')
			output.json(models);
		}
		else if(input.query.project){
			var models = await Order.find({project:input.query.project}).limit(limit).skip(skip).sort(sort);
			output.json(models);
		}

		//MARKET.. IS ONLY
		//HIGH COMBINATORIAL..... CAN SEE LOWER BOUDED ORDERS IN TRAVERSAL (AS WE OPEN UP)
		else if(input.query.setAlpha && !input.query.setBeta){
			//doesnt have to be perfect the frist time
			var setAlpha = input.query.setAlpha.split(',');
			var andQuery = { $and: []};
			var query = {};
			for (x in setAlpha){query[ "setAlpha."+setAlpha[x]] = {$gt: 0};}
			andQuery.$and.push(query);
			andQuery.$and.push({ "$where": "return Object.keys(this.setAlpha).length == "+setAlpha.length })
			Order.getDatastore().manager.collection('order')
			.find(andQuery).limit(limit).skip(skip).sort({'createdAt':-1})
			.toArray(async function (err, models) {
				models = models.map(function(obj){obj.id = obj._id; return obj;});
				var promises = [];
				for (x in models){promises.push(User.find({id:models[x].user.toString()}))}
				var populatedModels = await Q.all(promises);
				for (x in models){models[x].user = populatedModels[x][0];}
				output.json(models);
			});
		}

		//?? 
		else if(input.query.setBeta && !input.query.setAlpha){
			var query = {};
			query[ "setBeta."+input.query.setBeta] = {$gt: 0};
			Order.getDatastore().manager.collection('order').find(query).limit(limit).skip(skip).sort({'createdAt':-1})
			.toArray(async function (err, models) {
				models = models.map(function(obj){obj.id = obj._id; return obj;});
				var promises = [];
				for (x in models){promises.push(User.find({id:models[x].user.toString()}))}
				var populatedModels = await Q.all(promises);
				for (x in models){models[x].user = populatedModels[x][0];}
				output.json(models);
			});
		}

		//MARKETPAIR
		else if(input.query.setAlpha && input.query.setBeta){
			var queryAlpha = {};
			var queryBeta = {};
			var andQuery = { $and: []};
			var setAlpha = input.query.setAlpha.split(',');
			var setBeta = input.query.setBeta.split(',');
			console.log(setAlpha, setBeta);
			for (x in setAlpha){queryAlpha[ "setAlpha."+setAlpha[x]] = {$gt: 0};}
			for (x in setBeta){queryBeta[ "setBeta."+setBeta[x]] = {$gt: 0};}
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
			Order.getDatastore().manager.collection('order').find(andQuery).limit(limit).skip(skip).sort({'createdAt':-1})
			.toArray(function (err, models) {
				console.log(models);
				models = models.map(function(obj){obj.id = obj._id; return obj;});
				output.json(models);
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

		else if(input.query.item || input.query.market){
			var item = input.query.item || input.query.market
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
			Order.getDatastore().manager.collection('order').find(query).limit(limit).skip(skip).sort({'createdAt':-1}).toArray(function (err, models) {
				console.log(models)
				if (models.length != 0){
					models = models.map(function(obj){obj.id = obj._id; return obj;});
					//var market = buildMarket(item, models);
					output.json({data:models,market:[]});
					//var promises = [];
					//for (x in models){promises.push(User.find({id:models[x].user.toString()}))}
					//Q.all(promises).then((populatedModels)=>{
					//	for (x in models){models[x].user = populatedModels[x][0];}
					//	output.json({data:models,market:market});
					//});
				}
				else{output.json({data:[],market:{}})}
			});
		}
		else{output.json([]);}	
	},
	create: async function (input, output) {

		//DEPRECIATE TOKEN IN FAVOR OF ASSET
		async function mintTokens(order){

			for (x in Object.keys(order.setAlpha)){
				var tokenModels = await Token.find({string:Object.keys(order.setAlpha)[x]});
				if (tokenModels.length == 0){
					var newTokenModel = {
						string:Object.keys(order.setAlpha)[x],
						information:{markets:1, inCirculation:1},
						protocols:['CRE8', 'ORDER'],
						logic:{transferrable:true, mint:''}
					};
					var newTokenModel = await Token.create(newTokenModel)
					console.log('TOKEN CREATED', newTokenModel);
				}
				else{
					tokenModels[0].information.markets++; 
					await Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information})
					console.log('TOKEN UPDATED');
				}	
			}

			for (x in Object.keys(order.setBeta)){
				var tokenModels = await Token.find({string:Object.keys(order.setBeta)[x]});
				if (tokenModels.length == 0){
					var newTokenModel = {
						string:Object.keys(order.setBeta)[x],
						information:{markets:1, inCirculation:1},
						protocols:['CRE8', 'ORDER'],
						logic:{transferrable:true, mint:''}
					};
					await Token.create(newTokenModel);
					console.log('TOKEN CREATED', newTokenModel);;
				}
				else{
					tokenModels[0].information.markets++; 
					await Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information});
					console.log('TOKEN UPDATED');
				}
			}
		};

		//ORDERS ASSOCIATION
		function getProtocolTokens(model){
			var protocolTokens = [
				'CRE8', 
				'CRE8+ORDER',
				'CRE8+ORDER+'+model.id,
			];
			return protocolTokens;
		};

		//TODO
		async function createAssociation(order){
			
			//DISCRETE MARKET ASSOCIATION (MARKET PAIR)
			var connectionModel = await Connection.find({}).limit(1)
			var associationModel = {

				model: 'ASSOCIATION',
				content: JSON.stringify(order.setAlpha)+'to '+ JSON.stringify(order.setBeta),

				//CONNECTION DEFINED>>>>
				//NEED MARKET DATA MODEL..
				associatedModels: [
					{type:'MARKET', id: JSON.stringify(order.setAlpha), context:{}},
					{type:'MARKET', id: JSON.stringify(order.setBeta), context:{}}
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
				},
				computedFrom:'ORDER',
				logic:[],//what to do on create new order]
			};
			//associationModel.connection = connectionModel[0];
			//IF NOT ASSOCIATION CREATE
			var newAssociationModel = await Association.create(associationModel);
			console.log('NEW ORDER ASSOCIATION', newAssociationModel);
			//ELSE COMPUTE NEW ORDER BOOK!!! --> START IT UPPPPPPP
				//VROOM
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

			setAlpha: input.param('setAlpha'),
			setBeta: input.param('setBeta'),
			orderSet:[input.param('setAlpha'), input.param('setBeta')],
			
			status: input.param('status'),
			type: input.param('type'),

			creator: input.param('user'),
			user: input.param('user'),

			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}

		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		console.log('CREATE ORDER', model);
		var newOrder = await Order.create(model);

		Order.publish([order.id], {verb: 'create', data: order});
		mintTokens(newOrder);
		//createValidation..createAssociation..createMarket
		createAssociation(newOrder);
		output.json(newOrder);
	},
};

