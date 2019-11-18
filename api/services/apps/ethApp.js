//ETH APP

module.exports = {

	import:{
		core:''
	},

	//APP-APP SELF CONNECTION CONTAINS PARAMS
	connections:[
		//APP-MEMBER; --> WALLET ADDRESS AND SECRET
	],

    parameters:{

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

	//WRAP WEB3
	//--> CREATE ADDRESS
	//CREATE CONTRACT
	create:function(){

	},





};