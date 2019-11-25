module.exports = {

	models:[

		//BTC,
		//BTC_TRANSACTION,

	],

	import:{
		//app:require('app')
		//association:require('association'),
		//transaction:require('transaction'),
	},

	//DEFINED IN 'APP' App
	//GENERALLY STANDARD.. 
	app:{
		//LESS OBJ MORE TYPING OF MODEL? 
		//
		get:{
			connection:function(model){

			},
			association:function(model){

			},
		}
	},

	//ALL FUN FXNS
	get:{

		balance:function(model){
			//SPELL IT OUT
			return 1
		},

	},

	//DECORATORS? --> CONVERT TO CONENCTION IN COMPILATION
	create:{

		wallet:function(model){
			//EXPOSE FUNCTIONS ..
			var CoinKey = require('coinkey');
	  		var wallet = new CoinKey.createRandom();

	  		//const keyPair = bitcoin.ECPair.makeRandom();
      		//const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

			return wallet;
		},

		//WITH APP 
		//WITH ANOHTER MARKET
		//CONNECTION AS PARAMETER.. 
		association:function(model){

			var newWallet = btcApp.create.wallet(model);

			//META IS ASSOCIATION
			var newAssociationModel = {
				associatedModels:[
					{type:'MEMBER', id:model.id},
					//{type:'APP ;)', id:},
				]
			};
			Association.create(newAssociationModel);

			var newAssociationModel = {
				associatedModels:[
					{type:'MEMBER', id:model.id},
					//{type:'BTCWALLET ;)', id:},
				],
				parameters:{
					address:newWallet.publicAddress,
					//ONLY SOTRED ON CLIENT: --> FLAG IN CONNECTION
					privateKey:newWallet.privateKey.toString('hex'),
					networkId:'mainnet'
				}
			};
			Association.create(newAssociationModel);


			//PASSPORTS CAN CONTROL ACCOUNT!
			//CONTEXT OF CONTROL.. 
			//PASSPORT ASSOCIATION
			var newPassport = {
				type:'ETH',
				associatedModels:[
					{type:'MEMBER', id:model.id},
				]
			};
			Passport.create(newPassport);

		},

	},

	update:{
		association:function(model){},
	},

	//CREATE.TRANSACTION?
	//LOGIC ENCODING TO STRING SPACE
	send:function(model){
		(async () => {

			//TODO: MAKE APPS! . . .
			const bitcoin = require('bitcoinjs-lib');
			const keyPair = [model.address, model.privateKey];

			//IF BTC IN WALLET
			var btcWalletBalance = btcApp.get.balance(model);

		    const psbt = new bitcoin.Psbt();
		    psbt.addInput({});
		    psbt.addOutput({
				address: model.address,
				value: 80000,
		    });
		    psbt.signInput(0, keyPair);
		    psbt.validateSignaturesOfInput(0);
		    psbt.finalizeAllInputs();
			
			var btcTransaction = psbt.extractTransaction().toHex();
			//3RD PARTY PROVIER.. SHOULD BE IN NODE GROUP. . 
			//TEMP: COINPAY PROVIDER . . .
			//TODO: PEEP APP AND MACHIENE ATTENTION >>> . . .
		 	const Insight = require('bitcore-explorers').Insight;
			const insight = new Insight();
			insight.broadcast(btcTransaction, function(err, returnedTxId) {

				if (!err) {

					//IF WALLET IS CONNECTED TO CREATE ID
					//var cre8member = await btcApp.app.get.association(model);
					//if (cre8member){
						//SEND "BTC" TOKENS TO CREATE ID
						//var transactionModel = {}; 

						//TODO: TRANSACTION APP
						//var newTransaction = await Transaction.create(transactionModel);
						//btcApp.tokens.get(newTransaction);

					//}

					btcApp.tokens.get(model);

				}

			});

		})();

	},

	recieve:function(model){
		
		//WHEN WALLET ID RECIEVES TRANSACTION FIRE EVENT
		//NEED TO BE CONNCETED TO TRUSTED PEERS 
		//add to create string wallet balance

		btcApp.tokens.get(model);


	},

	//NEED GLOBAL CHECKERS FOR THIS >> 
	//EXTRENSIC DATA
	//BTC PEER APP HERE-- IDEAL TO RUN A PRUNED NODE TO ACT AS A SENDER
	//APP PERMISSIONS CAN ENABLE THIS EARNING VALUALBE MACHINE ATTENTION TO RELAY TO MESSAGE ( AS A SET OF TRUSTED CONNECTED PEERS )
	//THIS WILL BE AT SCALE AND NEED TO BE INTERATED.. CAN USE 3rd PARTY RELAYERS LIKE BITPAY.. 


	//btc peer --> IMPLEMENT NETWORKING PROTO.. 
	//lISTENING TO network
	//when 
	//LOGIC IF RUNNING PEER OR .. //TOO MUCH NOW
	//YOU CAN MINE BTC IN BROWER.. IF WANT
	peer:{

		init:function(){

			var bcoin = require('bcoin');
			var node = new bcoin.SPVNode({
			//var node = new bcoin.fullnode({
				network: 'testnet',
				db: 'memory'
			});

			(async function() {

				await node.open();
				await node.connect();
				node.on('connect', function(entry, block) {
					console.log('%s (%d) added to chain.', entry.rhash(), entry.height);
				});
				node.on('tx', function(tx) {
					console.log('%s added to mempool.', tx.txid());
				});
				node.startSync();

			})();

		}
	},

	tokens:{

		//CLEALY ELUCIDATE SOON
		//ALL META DATA >> MMM --> STATICALLY TYPE A SUBSET and give RUlES
		// -- WE ALWAYS STRINGIFY THE OBJ VIA PLURALISM

		model:{
			btc:{
				send:{
					type:{
						date:{},
						id:{},
					},
					date:{},
				},
				recieve:{
					type:{
						date:{},
						id:{},
					},
					date:{},
				},
			}
		},

		get:function(model){
			var tokens = btcApp.tokens.model;
			//DECOMPOSE OBJECT TO LIST 
			//WALK OBJ

			//minting
			//string:'CRE8',
			//associatedModels:[{type:model.type, id:model.id}],
			//amount:model.amouunt

		},

	}

};
