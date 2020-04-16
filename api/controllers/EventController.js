//CRE8.EVENT
module.exports = {
	get: async function(req, res) {var model = await eventApp['GET'](req); res.json(model);},
	create: async function(req, res) {var model = await eventApp['CREATE'](req); res.json(model);},
};