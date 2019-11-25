//CRE8.COMPILER.ALPHA

module.exports = {

	//meta circular evaluator

	//eval loop
		//point to language
			//point to target 
			//define types like function 
				//re lisp eval 
				//lisp is a data struct and code
					//soo (a, b, eval ())


	//TRAVERSE THE STRUCTURE OF CONNECTIONS 
	traverse:function(connections, depth){
		for (x in connections){
			if (connections[x].connections){depth++;traverse(connections[x].connections, depth);}
			else{

				//init(connections[x]);

			}
		}
	},

	//NEW APPS FOR EACH GRAMMER
	//grammer is a self connection with parameters of 
	//nsymbol types --> 
	grammer:{

	},
	
	connections:[{
		type:'connection', 
		id:'self',

		params:{
			language: 'CRE8',
			compiler:'language1',
		},

		connections:[{
			type:'language1',
			id:'self',
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