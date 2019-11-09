
//CRE8.COMPILER.ALPHA
//HELPER MODULE THAT RECIEVES STREAMING DATA 

module.exports = {

	//IMPORT GOOGLE APP! ( AND OTHER PROVIDERS (FOR HISTORICAL) -- ALLOW PERMISSIONS FOR LOCATION VIA NATIVE CALLS)
		//BUILD IN CONTINGENCY CHECKS AS PLUGIN 
			//PREVENT SPOOFING

	//I KNOW IT'S POSSIBLE`
	
	connections:[{
		type:'connection', 
		id:'self',

		params:{
			language: 'CRE8',
			compiler:'language1',
		},

		connections:[{
			type:'language1',
			id:'self'
			connections:[{

				type:'connection', 
				id:'self',

				//models:[]
				//language:{type:'string'},
				//LANGUAGE DEFINTION HERE.. 
				//STRUCTURED DATA
				//SUB TYPES 

				params:{
					language: 'CRE8',
					compiler:'language1',
				},

				init:function(){

					//INIT CREATE BY PARSING CONNECTIONS
						//CHECK PARAMS FOR LANGUAGE AND COMPILER . . .


 

				},
			}]
		}],
	}],


};