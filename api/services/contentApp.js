//CRE8.CONTENT.ALPHA
module.exports = {
	tokens:{
		get:function(){

			//TODO: FACTOR			
			//for you to see the progress 
			//change model to app / type (APP = [  = protocol ] | think token and market ~ WHAT IS THE MOST PRIMITIVE TYPE A BIT BOI)
				//8 BYTE WORD
												//patterns of bools (0,1 ~~> QUANTUM GIVES SMOOTH) ?? OR OR third stat which is an and 
															//GRADIENT IS TRUTH
																	//2^3 , 0,1,0+1
												//SOOO. . . IT'S A STRING

			//[yes] --> NATURAL RECURSION 
			//off rails kinda
			//CAN CONNECTION BE MOST PRIMITIVE TYPE OR STRING --> CONVERT OR BONRAY (I MEAN WERE DEALING WITH LAYERS OF ABSTRACTION) 

			var protocolTokens = [
				'CRE8', 
				'CRE8+'+model.model, 
				'CRE8+'+model.model+'+'+model.id,
			];
			if (model.model == 'ACTION'){}
			if (model.model == 'APP'){}
			if (model.model == 'ASSOCIATION'){
				//TODO: TOKEN GRAMMER
				//TODO: LINK ASSOCIATIONS
				//TODO: ' , ' grammer
				var string ='CRE8+ASSOCIATION+'
				console.log(model);
				for (x in model.associatedModels){
					string = string + '+' + model.associatedModels[x].type + '+' + model.associatedModels[x].id;
					model.associatedModels[x].type
				}
			}		
			//TYPES OF STRING SERILIZATION
			//DATA MODEL OBJ TO STRING
			for (x in Object.keys(model)){
				var dataType = Object.keys(model)[x].toUpperCase();
				var data = model[Object.keys(model)[x]];
				var prefix = 'CRE8+'+model.model;
				var string = prefix+'+'+dataType+'+'+data;
				protocolTokens.push(string);
			};
			//SHA256 HASH DIGEST OF DATA SIGNED WITH CRE8
			for (x in Object.keys(model)){
				var data = model[Object.keys(model)[x]];
				var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(data)).digest('hex');
				var prefix = 'CRE8+'+model.model;
				var string = prefix+'+'+hash;
				protocolTokens.push(string);
			};
			//SHA256 HASH DIGEST OF AGGREGATE DATA SIGNED WITH CRE8
			var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
			var prefix = 'CRE8+'+model.model;
			var string = prefix+'+'+hash;
			protocolTokens.push(string);
			return protocolTokens;
		},
		create:function(model){
			var tokens = contentApp.tokens.get(model);
		},
	}
};