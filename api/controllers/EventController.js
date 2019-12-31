//CRE8.EVENT
module.exports = {
	get: async function(req, res) {
		var model = await eventApp.get(req); 
		res.json(model);
	},
};