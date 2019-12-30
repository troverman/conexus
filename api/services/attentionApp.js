//CRE8.ATTENTION.ALPHA
var attentionApp = {
	tokens:{
		create:function(){
			//this, self .. 
			var tokens = attentionApp.tokens.get(model);
			//updateAssociatedModels(model, protocolTokens);
		},

		get: function(model){
			var protocolTokens = [
				'CRE8', 
				'CRE8+ATTENTION', 
				'CRE8+ATTENTION+'+model.id,
				//careful creator
				'CRE8+ATTENTION+'+model.creator.username.toUpperCase(),
				'CRE8+ATTENTION+'+model.app,
			];
			var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
			var prefix = 'CRE8+ATTENTION';
			var string = prefix+'+'+hash;
			protocolTokens.push(string);
			return protocolTokens;
		}
	}
};
module.exports = attentionApp;