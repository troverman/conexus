//CRE8.ATTENTION
module.exports = {
	get: async function(req, res) {
		var model = await attentionApp.get(req); 
		res.json(model);
	},
	create: async function (req, res) {
		var newModel = await attentionApp.create(req);
		res.json(newModel);
	}
};