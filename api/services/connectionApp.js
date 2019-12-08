//CRE8.CONNECTION.ALPHA
//EXERCISE: WRITE IN CONNECTION RECURSIVE JSON

module.exports = {

	//AGAIN TYPE COMPOSITION IS A ROMANTIC FORMALISM WRT LANG GRAMMER 
	//CONNECTION STRUCUTRES ARE ELUSIVE
	types:[
		{
			type:'CONNECTION', 
			attributes:{

		        //2nd order parameters
				//title: {type: 'string'},
				//description: {type: 'string'},

		        context: {type: 'json'},
		        attributes: {type: 'json'},
			    context: {type: 'json'},
			    mapping: {type: 'json'},   
			    logic: {type:'json'}  

		    }
		}
	],

	//OKAY.. a think connections plz 

	//hm... 
	create:async function(model){return await EventApp.create(model)},

	get:{},

	//OKAY DATA-TOKEN CONNECTION . . .
	tokens:{

		model:{
		},

		mintTokens:function(model){},
	},
   
};