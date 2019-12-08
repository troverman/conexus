//CRE8.EVENT.ALPHA
module.exports = {

	types:[
		{
			type:'VALIDATION', 
			//id: --> REDUCTION DESIRED ~~ HASH ID 
			attributes:{
				//good quesion
		    }
		}
	],

    //CONNECTIONS ARE THE LANGUAGE 
    //-- THIS IS WIP FOR FUN
    connections:[
		{
			id:'self', 
			type:'connection', 	
			connections:[{
				id:'self',
				type:'event',
				params:{
					//DATA MODEL 
					// EVENT IS AN OBJECT WITH CONSENSUS INFO
					id:'', //HASH OF THE DATA OBJECT

					//COULD BE FOR PLUGIN CONSENSUS APP . . . 
					//THE RESPECTIVE FOSET HASHES
						//MULTI MERKEL ROOTS
						//VARIENT CONSENSUS

						//TODO: 
						//CONSENSUS MECHENISM IS WRITTEN IN CREATE
						//PARSE THE HASHES AND CONNECTION HASHES  . . .
							//RES{	
								//[]..score
							//}	

					//MULTIDIMESNIONAL CONSENSUS
					connectionHashes:[],

					//MAPPING OF ALL ATTENTION / VALIDATIONS & ACTIONS ON EVENT  . . . 
					tokens:[],

					//event data 
					data:[],

				},

			}],
		}
	],

	//REDUCE INTO SELF CONECTION W CONTEXT
	language: 'Javascript',
	compiler:'V8',

	get: async function(model){


		//BETTER GET . . . WE ARE ABSTRACTING THOUGH MONOGO. . . 
		//provide context hash
		//truth variance 
		return await Event.find({id:model.id});

	},

	//HEllO FRIEND , Thanks for reading 
	create: async function(model){
		
		var connection = await Connection.find({connection:model.connection});

		//BLOOP
		//DO THE MATH (IS LIVE TOO MUCH TO ASK FOR?)
		var newValidationModel = {
							
		};

		newValidationModel.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newValidation)).digest('hex');

		//createAssociation(newValidationModel);

		//REDUCE 
		//var newValidation = await Validation.create(newValidation)
		var newEvent = await eventApp.create(newValidation);

		


	},

};