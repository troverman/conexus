//CRE8.ASSOCIATION
module.exports = {
	get: async function(req, res) {
		var model = await associationApp.get(req); 
		res.json(model);
	},
};