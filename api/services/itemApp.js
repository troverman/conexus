
//CRE8.ITEM.ALPHA

//recursive..
//init(req, res, params);
//params are 

module.exports = {


	//IE THIS IS THE WHOLE FILE
	connections:[{



		type:'connection', 
		id:'self',
		connections:[{
			type:'item',
			id:'self'
			connections:[{		

			}]
		}],



	}],


	connections:[{
		type:'connection', 
		id:'self',
		connections:[{
			type:'item',
			id:'self'
			connections:[{	

			params:{}	
				
			}]
		}],
	}],


	import: { 
		request: require('request'),
		Q: require('q'),
	},




	//DATA MODELS ARE CONNECTIONS

	//TEST
	//REDUCE INTO SELF CONECTION W CONTEXT --> INTERNAL FUNCTION MAPPING 
	language: 'Javascript',
	compiler:'V8',

	attentionParams:{},

	//test
	//LANGUAGES ARE COMPILER PARAMETERS
	conpilerParams:{
		identifier:['x', 'color', 'UP'],
		keyword:['if', 'while', 'return'],
		separator:['}', '('],
		operator:['+','<','='],
		literal: true,
	},

	//value language
	//~~ CONGRUENCE MEANS CONTEXT FREE GRAMMER
	meta:{
		separator:[','],
		operator:['+','-','*',''],
		
	},

	
	connections:[
		{
			type:'connection', 
			id:'self', 
			params:{
				//DATA MODEL.
			}	
		}
	],

	get: function(req, res, params){

		//params ^^same as above ; recursive :)

	},

	create: function(req, res, params){

		//EventApp.create({})

	},

	//EACH PROTOCOL / APP ADDS TO THE VALUE LANGUAGE.. 
	//3rd layer of compilation . . 
	tokens:{
		//functional bridge between data events and tokenization
	},

	//FLATTEN? AND STANDARIZE & MADE MODULAR . . . 
	//DEFINE LANGUAGE AND PARAMETERS FOR VIEW PARSING --> IMPORT THE PARSERS
	views:{

		item:{
			route:'/item/:id',
			controller:function(){},
			templates:[{}],
		},
		itemTokens:{
			route:'/item/:id/tokens',
			controller:function(){},
			templates:[{}],
		},

		items:{
			route:'/items',
			controller:function(){},
			templates:[{}],
		},


	},


};



//TODO: STACK TRACK FOR TOKENIZATION.. 
//SOME META LOGGER.. 
//const StackTrace = require('stacktrace-js');
//StackTrace.get()
//.then(function(stack){
	//console.log(stack.map(function(obj){return obj.functionName}));
//})
//.catch(function(err){});
//hmm --> GOOD BUT DO IN EACH AS STATIC
//var origCall = Function.prototype.call;
//Function.prototype.call = function (thisArg) {
    //console.log("calling a function", thisArg);
    //var args = Array.prototype.slice.call(arguments, 1);
    //origCall.apply(thisArg, arguments[arguments.length-1]);
//};
//console.trace();


