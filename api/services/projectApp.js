//CRE8.PROEJCT.ALPHA
module.exports = {
	tokens:{
		create: function(model){
			var protocolTokens = getProtocolTokens(model);
		},
		//FACTOR TO RETURN ENTIER TOKEN MODEL
		get:function(model){
			//give all (init) project tokens to creator-->1?
			//MANIFOLD.. SEPERATE FROM (EVENT) ACTION
			var protocolTokens = [
				'CRE8', 
				'CRE8+PROJECT', 
				'CRE8+PROJECT+'+model.id,
				model.title.toUpperCase()
			];
			return protocolTokens;
		},
	}
};