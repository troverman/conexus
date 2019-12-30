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
	//STATIC SELF CONNECTION CONSTRUCTOR --> THIS IS SUPER IN COMPOSITION 
	tokens:{

		model:{
			create:[
				{name:'CRE8+CREATE+CONNECTION'}, 
				{name:'CRE8+CREATE+CONNECTION+{id}'},

				//COMBINATORIAL
				//REDUCE / BE INTENTIONAL AS IT IS LARGE .. LARGER THE BETTER ; 

				//IMPROVEMENT PROPOSAL: ALLOWN N SIZE COMBINAORIAL TOKENIZATION OF DATA ATTRIBUTES :: POWERSET ATTRIBUTES
				//{name:'CRE8+CONNECTION+{context}'},

			],
			get:[
				{name:'CRE8+GET+CONNECTION'},
				{name:'CRE8+GET+CONNECTION+{id}'}
			],
		},

		create:function(model){


		},
		
	},
   
};