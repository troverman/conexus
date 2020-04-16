//CRE8.ATTENTION
module.exports = {
	get: async function(req, res) {var model = await attentionApp['GET'](req); res.json(model);},
	create: async function (req, res) {var newModel = await attentionApp['CREATE'](req);res.json(newModel);}
};