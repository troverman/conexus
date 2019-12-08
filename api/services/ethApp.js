//ETH APP
//const web3 = require('web3');
//const Web3 = require('web3');
//const web3 = new Web3();
//PRIVIDER WILL BE LOCAL NODE.. 
    //PRIVIDER CONNECTS TO ( CHAIN ID )
    //var network = web3.version.network
    //https://ropsten.infura.io is a hosted provider . . . will do peers in create who can relay with machiene attention 
//web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

module.exports = {

	import:{
        //web3: require('web3'),
	},

    //TAKE A BREAK HERE :p
    //APP-MEMBER CONNECTION
    attributes:{

        //specific type that is hashed
        address:{
            type:'string', 
            validation:{

                //abstract or discrete
                //SHOULD BE DEFINED IN THE CONNECTION ( CONNECTION - CONNECTION - VALIDATION )
                //OKAY DEFINE DIFFERENT TYPE OF APPS . . .
                    //VALIDATION TYPES == VALIDATION TREE; VALIDATION (LATEST )
                //WHERE WE GET SOMETHING LIKE .. 
                connection:{
                //    reduction:'string',
                //    mappings:'array',
                //    logic:'function'
                },

                parameters:{
                    reduction:'latest', // these are types of validations 
                                        //.. . . .. so what are their self connections . . ? 
                                        //
                },
                model:{
                    reduction:'latest'
                }
            }
        },

        secret:{
            type:'string', 
            hash:true, 
            validation:{
                type:'latest',
                parameters:{
                    reduction:'latest', 
                }
            }
        },

        context:{
            type:'json', 
            //validation apps
            validation:{
                //HERE IS THE ABSTRACT.. DEFINE THE VALIDATION AS AN APP :) 
                    // (OPINIATED WITH REDUCTION, MAPPINGS (APP DATA IMPORTS), AND LOGIC (CODE))
                    // (YAY!!! ORDER AND VALIDATION COEXISTS TO CREATE PLURALISM MAXIMSM WOO)s
                type:'preputation weighted int', 
                parameters:{
                    score:10,
                    reduction:'treeReduce', //type:tree
                    mappings:['reputation'], 
                    logic:'reputationxscore'
                }
            }
        }

    },

    models:[
        //ETH,
        //ETH_TRANSACTION,
        //ETH_CONTRACT,
        //ETH_ACTION 
        //ETH_EVENT --> 
            //FURTHER BROKEN DOWN BY TYPES AND CONTRACT SPECIFIC APPS
            //ONE ACTION CAN LEAD TO MULTIPLE EVENTS . . . 
    ],

    get:{
        balance:function(model){
            web3.eth.getBalance(model.address, 'latest', function(error, result){
                console.log(result);
            });
        },
    },

	create:{

        //CREATE CONTRACT ACTION
        //TYPES HERE IE ERC 20 TOKEN EVENTS .. ETC ... 
        action:function(model){

            var contract = new web3.eth.Contract(model.abi);
            contract.options.address = model.contractAddress;
            contract.methods.createVote(model.parameters).send({from: model.callAddress, gas: model.gas}, function(error, result){
                console.log(result);
            });

        },

        //CREATE CONTRACT
        contract:function(model){
            var newContract = new web3.eth.Contract(model.abi, model.address, {from: model.callAddress, gasPrice: model.gasPrice});
           
        },

        //CREATE TRANSACTION
        transaction:function(model){

            const Personal = require('web3-eth-personal');
            const personal = new Personal('http://localhost:8545');
            personal.unlockAccount(model.address, model.privateKey, 1000000);
            var transaction = web3.eth.sendTransaction({from:model.from, to: model.to, value: model.value})
            return transaction;

            //LINK IN CREATE INTEROP HERE -- THE BRIDGE 

        },

        //CREATE WALLET
        wallet:function(model){
            var wallet = web3.eth.accounts.create(model);
            return wallet
        },  

	},

    tokens:{

        //CLEALY ELUCIDATE SOON
        //ALL META DATA >> MMM --> STATICALLY TYPE A SUBSET and give RUlES
        // -- WE ALWAYS STRINGIFY THE OBJ VIA PLURALISM
        //TODO: TOKENS
        model:{
            eth:{
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
            var tokens = ethApp.tokens.model;
            //DECOMPOSE OBJECT TO LIST 
            //WALK OBJ

            //minting
            //string:'CRE8',
            //associatedModels:[{type:model.type, id:model.id}],
            //amount:model.amouunt

        },

    },

    //SUBAPP
    //TODO: OR THIRD PARTY PROVIDER && NETWOK ID CONSIDERATIONS. 
    //ETH IS A SUBSET OF CREATE .. WHEN PEERS ENOPERATE ETH EVENTS INTO CHAIN .. 
    peer:{

        tokens:{

        },

    },

};