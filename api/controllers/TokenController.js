//CRE8.TOKEN
module.exports = {
	get: async function(req, res) {
		var model = await tokenApp.get(req); 
		res.json(model);
	}
};