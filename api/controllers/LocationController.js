//CRE8.LOCATION
module.exports = {
	get: async function(req, res) {
		var model = await locationApp.get(req); 
		res.json(model);
	},	
};